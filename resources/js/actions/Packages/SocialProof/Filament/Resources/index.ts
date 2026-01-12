import TeamResource from './TeamResource'
import PlanResource from './PlanResource'
import ClientResource from './ClientResource'
import CampaignResource from './CampaignResource'
import NotificationExtendedResource from './NotificationExtendedResource'
import WidgetResource from './WidgetResource'
const Resources = {
    TeamResource: Object.assign(TeamResource, TeamResource),
PlanResource: Object.assign(PlanResource, PlanResource),
ClientResource: Object.assign(ClientResource, ClientResource),
CampaignResource: Object.assign(CampaignResource, CampaignResource),
NotificationExtendedResource: Object.assign(NotificationExtendedResource, NotificationExtendedResource),
WidgetResource: Object.assign(WidgetResource, WidgetResource),
}

export default Resources