import teams from './teams'
import plans from './plans'
import clients from './clients'
import campaigns from './campaigns'
import notificationExtendeds from './notification-extendeds'
import widgets from './widgets'
const resources = {
    teams: Object.assign(teams, teams),
plans: Object.assign(plans, plans),
clients: Object.assign(clients, clients),
campaigns: Object.assign(campaigns, campaigns),
notificationExtendeds: Object.assign(notificationExtendeds, notificationExtendeds),
widgets: Object.assign(widgets, widgets),
}

export default resources