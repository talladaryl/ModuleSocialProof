(function  'use strict';

    // Configuration injected by server
    const config = {{CONFIG}};

    // Utility functions
    const utils = {
        createElement: function(tag, attributes, content) {
            const element = document.createElement(tag);
            if (attributes) {
                Object.keys(attributes).forEach(key => {
                    if (key === 'style' && typeof attributes[key] === 'object') {
                        Object.assign(element.style, attributes[key]);
                    } else {
                        element.setAttribute(key, attributes[key]);
                    }
                });
            }
            if (content) {
                element.innerHTML = content;
            }
            return element;
        },

        addCSS: function(css) {
            const style = document.createElement('style');
            style.textContent = css;
            document.head.appendChild(style);
        },

        getCookie: function(name) {
            const value = `; ${document.cookie}`;
            const parts = value.split(`; ${name}=`);
            if (parts.length === 2) return parts.pop().split(';').shift();
        },

        setCookie: function(name, value, days) {
            const expires = new Date();
            expires.setTime(expires.getTime() + (days * 24 * 60 * 60 * 1000));
            document.cookie = `${name}=${value};expires=${expires.toUTCString()};path=/`;
        },

        debounce: function(func, wait) {
            let timeout;
            return function executedFunction(...args) {
                const later = () => {
                    clearTimeout(timeout);
                    func(...args);
                };
                clearTimeout(timeout);
                timeout = setTimeout(later, wait);
            };
        },

        sendRequest: function(url, data) {
            fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'X-Requested-With': 'XMLHttpRequest'
                },
                body: JSON.stringify({
                    ...data,
                    pixel_key: config.pixel_key,
                    path: window.location.pathname + window.location.search
                })
            }).catch(error => {
                console.error('SocialProof tracking error:', error);
            });
        }
    };

    // Notification display manager
    const NotificationManager = {
        activeNotifications: new Map(),
        displayQueue: [],
        isProcessing: false,

        init: function() {
            this.addBaseCSS();
            this.processNotifications();
        },

        addBaseCSS: function() {
            const css = `
                .sp-notification {
                    position: fixed;
                    z-index: 999999;
                    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
                    box-sizing: border-box;
                    transition: all 0.3s ease;
                    cursor: pointer;
                }
                .sp-notification * {
                    box-sizing: border-box;
                }
                .sp-notification.sp-fade-in {
                    animation: spFadeIn 0.3s ease;
                }
                .sp-notification.sp-fade-out {
                    animation: spFadeOut 0.3s ease;
                }
                .sp-notification.sp-slide-in-up {
                    animation: spSlideInUp 0.3s ease;
                }
                .sp-notification.sp-slide-out-down {
                    animation: spSlideOutDown 0.3s ease;
                }
                .sp-notification-close {
                    position: absolute;
                    top: 8px;
                    right: 8px;
                    width: 20px;
                    height: 20px;
                    cursor: pointer;
                    opacity: 0.7;
                    transition: opacity 0.2s;
                }
                .sp-notification-close:hover {
                    opacity: 1;
                }
                @keyframes spFadeIn {
                    from { opacity: 0; }
                    to { opacity: 1; }
                }
                @keyframes spFadeOut {
                    from { opacity: 1; }
                    to { opacity: 0; }
                }
                @keyframes spSlideInUp {
                    from { transform: translateY(100%); }
                    to { transform: translateY(0); }
                }
                @keyframes spSlideOutDown {
                    from { transform: translateY(0); }
                    to { transform: translateY(100%); }
                }
            `;
            utils.addCSS(css);
        },

        processNotifications: function() {
            if (this.isProcessing) return;
            this.isProcessing = true;

            config.notifications.forEach(notification => {
                this.scheduleNotification(notification);
            });

            this.isProcessing = false;
        },

        scheduleNotification: function(notification) {
            const settings = notification.settings;
            const delay = this.calculateDelay(settings);

            setTimeout(() => {
                if (this.shouldShowNotification(notification)) {
                    this.showNotification(notification);
                }
            }, delay);
        },

        calculateDelay: function(settings) {
            const trigger = settings.display_trigger || 'delay';
            const value = settings.display_trigger_value || 0;

            switch (trigger) {
                case 'delay':
                    return value * 1000;
                case 'time_on_site':
                    return value * 1000;
                case 'scroll':
                    this.setupScrollTrigger(value);
                    return 0;
                case 'exit_intent':
                    this.setupExitIntentTrigger();
                    return 0;
                default:
                    return value * 1000;
            }
        },

        shouldShowNotification: function(notification) {
            const settings = notification.settings;
            const frequency = settings.display_frequency || 'all_time';
            const notificationId = notification.id;

            switch (frequency) {
                case 'once_per_session':
                    const sessionKey = `sp_shown_session_${notificationId}`;
                    if (sessionStorage.getItem(sessionKey)) {
                        return false;
                    }
                    sessionStorage.setItem(sessionKey, '1');
                    break;

                case 'once_per_browser':
                    const browserKey = `sp_shown_browser_${notificationId}`;
                    if (utils.getCookie(browserKey)) {
                        return false;
                    }
                    utils.setCookie(browserKey, '1', 30);
                    break;
            }

            return true;
        },

        showNotification: function(notification) {
            const element = this.createNotificationElement(notification);
            document.body.appendChild(element);

            // Track impression
            this.trackEvent(notification.id, 'impression');

            // Setup event listeners
            this.setupNotificationEvents(element, notification);

            // Auto-hide if duration is set
            const duration = notification.settings.display_duration;
            if (duration && duration > 0) {
                setTimeout(() => {
                    this.hideNotification(element, notification);
                }, duration * 1000);
            }

            this.activeNotifications.set(notification.id, element);
        },

        createNotificationElement: function(notification) {
            const settings = notification.settings;
            const type = notification.type;

            let element;

            switch (type) {
                case 'INFORMATIONAL':
                    element = this.createInformationalNotification(settings);
                    break;
                case 'COUPON':
                    element = this.createCouponNotification(settings);
                    break;
                case 'LIVE_COUNTER':
                    element = this.createLiveCounterNotification(settings, notification.counter);
                    break;
                case 'EMAIL_COLLECTOR':
                    element = this.createEmailCollectorNotification(settings);
                    break;
                default:
                    element = this.createInformationalNotification(settings);
            }

            // Apply common styles
            this.applyCommonStyles(element, settings);
            this.applyPositioning(element, settings);

            return element;
        },

        createInformationalNotification: function(settings) {
            const container = utils.createElement('div', {
                class: 'sp-notification sp-informational',
                style: {
                    background: settings.background_color || '#ffffff',
                    color: settings.text_color || '#333333',
                    padding: '16px',
                    borderRadius: settings.border_radius === 'round' ? '50px' : '8px',
                    boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
                    maxWidth: '320px',
                    minWidth: '280px'
                }
            });

            if (settings.image) {
                const image = utils.createElement('img', {
                    src: settings.image,
                    alt: settings.image_alt || '',
                    style: {
                        width: '48px',
                        height: '48px',
                        borderRadius: '50%',
                        float: 'left',
                        marginRight: '12px'
                    }
                });
                container.appendChild(image);
            }

            if (settings.title) {
                const title = utils.createElement('div', {
                    style: {
                        fontWeight: 'bold',
                        fontSize: '14px',
                        marginBottom: '4px'
                    }
                }, settings.title);
                container.appendChild(title);
            }

            if (settings.description) {
                const description = utils.createElement('div', {
                    style: {
                        fontSize: '13px',
                        opacity: '0.8'
                    }
                }, settings.description);
                container.appendChild(description);
            }

            return container;
        },

        createCouponNotification: function(settings) {
            const container = this.createInformationalNotification(settings);
            
            if (settings.coupon_code) {
                const couponCode = utils.createElement('div', {
                    style: {
                        background: settings.button_background_color || '#007cba',
                        color: settings.button_text_color || '#ffffff',
                        padding: '8px 12px',
                        borderRadius: '4px',
                        textAlign: 'center',
                        marginTop: '8px',
                        fontSize: '14px',
                        fontWeight: 'bold',
                        cursor: 'pointer'
                    }
                }, settings.coupon_code);

                couponCode.addEventListener('click', () => {
                    navigator.clipboard.writeText(settings.coupon_code);
                    couponCode.textContent = 'Copied!';
                    setTimeout(() => {
                        couponCode.textContent = settings.coupon_code;
                    }, 2000);
                });

                container.appendChild(couponCode);
            }

            return container;
        },

        createLiveCounterNotification: function(settings, counter) {
            const container = utils.createElement('div', {
                class: 'sp-notification sp-live-counter',
                style: {
                    background: settings.background_color || '#ffffff',
                    color: settings.text_color || '#333333',
                    padding: '12px 16px',
                    borderRadius: '8px',
                    boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px'
                }
            });

            const dot = utils.createElement('div', {
                style: {
                    width: '8px',
                    height: '8px',
                    borderRadius: '50%',
                    background: '#22c55e',
                    animation: 'pulse 2s infinite'
                }
            });

            const text = utils.createElement('span', {}, 
                `${counter || 0} ${settings.title || 'people are viewing this page'}`
            );

            container.appendChild(dot);
            container.appendChild(text);

            return container;
        },

        createEmailCollectorNotification: function(settings) {
            const container = utils.createElement('div', {
                class: 'sp-notification sp-email-collector',
                style: {
                    background: settings.background_color || '#ffffff',
                    color: settings.text_color || '#333333',
                    padding: '20px',
                    borderRadius: '8px',
                    boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
                    maxWidth: '400px'
                }
            });

            if (settings.title) {
                const title = utils.createElement('h3', {
                    style: {
                        margin: '0 0 8px 0',
                        fontSize: '18px',
                        fontWeight: 'bold'
                    }
                }, settings.title);
                container.appendChild(title);
            }

            if (settings.description) {
                const description = utils.createElement('p', {
                    style: {
                        margin: '0 0 16px 0',
                        fontSize: '14px',
                        opacity: '0.8'
                    }
                }, settings.description);
                container.appendChild(description);
            }

            const form = utils.createElement('form', {
                style: {
                    display: 'flex',
                    gap: '8px'
                }
            });

            const input = utils.createElement('input', {
                type: 'email',
                placeholder: settings.input_placeholder || 'Enter your email',
                required: true,
                style: {
                    flex: '1',
                    padding: '10px',
                    border: '1px solid #ddd',
                    borderRadius: '4px',
                    fontSize: '14px'
                }
            });

            const button = utils.createElement('button', {
                type: 'submit',
                style: {
                    background: settings.button_background_color || '#007cba',
                    color: settings.button_text_color || '#ffffff',
                    border: 'none',
                    padding: '10px 16px',
                    borderRadius: '4px',
                    fontSize: '14px',
                    cursor: 'pointer'
                }
            }, settings.button_text || 'Subscribe');

            form.appendChild(input);
            form.appendChild(button);
            container.appendChild(form);

            form.addEventListener('submit', (e) => {
                e.preventDefault();
                const email = input.value;
                if (email) {
                    this.submitConversion(settings.notification_id, { email });
                    container.innerHTML = '<p style="text-align: center; margin: 0;">Thank you for subscribing!</p>';
                    setTimeout(() => {
                        this.hideNotification(container, { id: settings.notification_id });
                    }, 2000);
                }
            });

            return container;
        },

        applyCommonStyles: function(element, settings) {
            // Apply custom CSS if provided
            if (settings.custom_css) {
                const style = document.createElement('style');
                style.textContent = settings.custom_css;
                document.head.appendChild(style);
            }

            // Apply animations
            const onAnimation = settings.on_animation || 'fadeIn';
            element.classList.add(`sp-${onAnimation.toLowerCase().replace(/([A-Z])/g, '-$1')}`);

            // Apply close button if enabled
            if (settings.display_close_button) {
                const closeButton = utils.createElement('div', {
                    class: 'sp-notification-close',
                    style: {
                        color: settings.close_button_color || '#999999'
                    }
                }, '×');

                closeButton.addEventListener('click', (e) => {
                    e.stopPropagation();
                    this.hideNotification(element, { id: settings.notification_id });
                });

                element.appendChild(closeButton);
            }
        },

        applyPositioning: function(element, settings) {
            const position = settings.display_position || 'bottom_right';
            const positions = {
                'top_left': { top: '20px', left: '20px' },
                'top_center': { top: '20px', left: '50%', transform: 'translateX(-50%)' },
                'top_right': { top: '20px', right: '20px' },
                'middle_left': { top: '50%', left: '20px', transform: 'translateY(-50%)' },
                'middle_center': { top: '50%', left: '50%', transform: 'translate(-50%, -50%)' },
                'middle_right': { top: '50%', right: '20px', transform: 'translateY(-50%)' },
                'bottom_left': { bottom: '20px', left: '20px' },
                'bottom_center': { bottom: '20px', left: '50%', transform: 'translateX(-50%)' },
                'bottom_right': { bottom: '20px', right: '20px' }
            };

            Object.assign(element.style, positions[position] || positions['bottom_right']);
        },

        setupNotificationEvents: function(element, notification) {
            let hasHovered = false;

            element.addEventListener('mouseenter', () => {
                if (!hasHovered) {
                    this.trackEvent(notification.id, 'hover');
                    hasHovered = true;
                }
            });

            element.addEventListener('click', () => {
                this.trackEvent(notification.id, 'click');
                
                if (notification.settings.url) {
                    const target = notification.settings.url_new_tab ? '_blank' : '_self';
                    window.open(notification.settings.url, target);
                }
            });
        },

        hideNotification: function(element, notification) {
            const offAnimation = notification.settings?.off_animation || 'fadeOut';
            element.classList.add(`sp-${offAnimation.toLowerCase().replace(/([A-Z])/g, '-$1')}`);

            setTimeout(() => {
                if (element.parentNode) {
                    element.parentNode.removeChild(element);
                }
                this.activeNotifications.delete(notification.id);
            }, 300);
        },

        trackEvent: function(notificationId, type, data = {}) {
            utils.sendRequest(config.api_url, {
                notification_id: notificationId,
                type: type,
                data: data
            });
        },

        submitConversion: function(notificationId, data) {
            utils.sendRequest(config.conversion_url, {
                notification_id: notificationId,
                data: data
            });

            this.trackEvent(notificationId, 'form_submission', data);
        },

        setupScrollTrigger: function(percentage) {
            const handler = utils.debounce(() => {
                const scrolled = (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100;
                if (scrolled >= percentage) {
                    document.removeEventListener('scroll', handler);
                    // Trigger notification
                }
            }, 100);

            document.addEventListener('scroll', handler);
        },

        setupExitIntentTrigger: function() {
            let hasTriggered = false;

            const handler = (e) => {
                if (hasTriggered) return;
                if (e.clientY <= 0) {
                    hasTriggered = true;
                    document.removeEventListener('mouseleave', handler);
                    // Trigger notification
                }
            };

            document.addEventListener('mouseleave', handler);
        }
    };

    // Initialize when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', () => {
            NotificationManager.init();
        });
    } else {
        NotificationManager.init();
    }

    // Expose global API
    window.SocialProof = {
        track: function(notificationId, type, data) {
            NotificationManager.trackEvent(notificationId, type, data);
        },
        conversion: function(notificationId, data) {
            NotificationManager.submitConversion(notificationId, data);
        }
    };

})();