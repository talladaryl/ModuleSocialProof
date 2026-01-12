import Api from './Api'
import DashboardController from './DashboardController'
import WidgetController from './WidgetController'
import CampaignController from './CampaignController'
import NotificationExtendedController from './NotificationExtendedController'
import DomainController from './DomainController'
import NotificationHandlerController from './NotificationHandlerController'
import PixelController from './PixelController'
const Controllers = {
    Api: Object.assign(Api, Api),
DashboardController: Object.assign(DashboardController, DashboardController),
WidgetController: Object.assign(WidgetController, WidgetController),
CampaignController: Object.assign(CampaignController, CampaignController),
NotificationExtendedController: Object.assign(NotificationExtendedController, NotificationExtendedController),
DomainController: Object.assign(DomainController, DomainController),
NotificationHandlerController: Object.assign(NotificationHandlerController, NotificationHandlerController),
PixelController: Object.assign(PixelController, PixelController),
}

export default Controllers