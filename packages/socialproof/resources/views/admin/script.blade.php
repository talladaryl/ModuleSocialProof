<script>
(function() {
    'use strict';

    // Configuration
    const config = {
        pixelKey: '{{ $campaign->pixel_key }}',
        apiUrl: '{{ route("socialproof.pixel.track") }}',
        conversionUrl: '{{ route("socialproof.pixel.conversion") }}',
        notifications: @json($notifications ?? [])
    };

    // Notification Manager
    const NotificationManager = {
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
                @keyframes spFadeIn {
                    from { opacity: 0; }
                    to { opacity: 1; }
                }
                @keyframes spFadeOut {
                    from { opacity: 1; }
                    to { opacity: 0; }
                }
            `;
            
            const style = document.createElement('style');
            style.textContent = css;
            document.head.appendChild(style);
        },

        processNotifications: function() {
            config.notifications.forEach(notification => {
                this.scheduleNotification(notification);
            });
        },

        scheduleNotification: function(notification) {
            const settings = notification.settings;
            const delay = (settings.display_trigger_value || 0) * 1000;

            setTimeout(() => {
                this.showNotification(notification);
            }, delay);
        },

        showNotification: function(notification) {
            const element = this.createNotificationElement(notification);
            document.body.appendChild(element);

            // Track impression
            this.trackEvent(notification.id, 'impression');

            // Auto-hide if duration is set
            const duration = notification.settings.display_duration;
            if (duration && duration > 0) {
                setTimeout(() => {
                    this.hideNotification(element);
                }, duration * 1000);
            }
        },

        createNotificationElement: function(notification) {
            const settings = notification.settings;
            
            const container = document.createElement('div');
            container.className = 'sp-notification sp-fade-in';
            container.style.cssText = `
                background: ${settings.background_color || '#ffffff'};
                color: ${settings.text_color || '#333333'};
                padding: 16px;
                border-radius: 8px;
                box-shadow: 0 4px 12px rgba(0,0,0,0.15);
                max-width: 320px;
                min-width: 280px;
                bottom: 20px;
                right: 20px;
            `;

            let content = '';
            if (settings.title) {
                content += `<div style="font-weight: bold; font-size: 14px; margin-bottom: 4px;">${settings.title}</div>`;
            }
            if (settings.description) {
                content += `<div style="font-size: 13px; opacity: 0.8;">${settings.description}</div>`;
            }

            container.innerHTML = content;

            // Add event listeners
            container.addEventListener('click', () => {
                this.trackEvent(notification.id, 'click');
                if (settings.url) {
                    window.open(settings.url, settings.url_new_tab ? '_blank' : '_self');
                }
            });

            return container;
        },

        hideNotification: function(element) {
            element.classList.remove('sp-fade-in');
            element.classList.add('sp-fade-out');

            setTimeout(() => {
                if (element.parentNode) {
                    element.parentNode.removeChild(element);
                }
            }, 300);
        },

        trackEvent: function(notificationId, type, data = {}) {
            fetch(config.apiUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'X-Requested-With': 'XMLHttpRequest'
                },
                body: JSON.stringify({
                    pixel_key: config.pixelKey,
                    notification_id: notificationId,
                    type: type,
                    path: window.location.pathname + window.location.search,
                    data: data
                })
            }).catch(error => {
                console.error('SocialProof tracking error:', error);
            });
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
        }
    };

})();
</script>