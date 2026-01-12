import WidgetController from './WidgetController'
import EventController from './EventController'
import NotificationController from './NotificationController'
const Api = {
    WidgetController: Object.assign(WidgetController, WidgetController),
EventController: Object.assign(EventController, EventController),
NotificationController: Object.assign(NotificationController, NotificationController),
}

export default Api