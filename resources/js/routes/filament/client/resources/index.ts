import clientSites from './client-sites'
import clientWidgets from './client-widgets'
import clientCampaigns from './client-campaigns'
import clientNotifications from './client-notifications'
import clientTemplates from './client-templates'
import clientDisplayRules from './client-display-rules'
import clientEvents from './client-events'
import clientConversions from './client-conversions'
import clientTrackNotifications from './client-track-notifications'
import clientApiKeys from './client-api-keys'
import clientTeamMembers from './client-team-members'
import clientSubscriptions from './client-subscriptions'
const resources = {
    clientSites: Object.assign(clientSites, clientSites),
clientWidgets: Object.assign(clientWidgets, clientWidgets),
clientCampaigns: Object.assign(clientCampaigns, clientCampaigns),
clientNotifications: Object.assign(clientNotifications, clientNotifications),
clientTemplates: Object.assign(clientTemplates, clientTemplates),
clientDisplayRules: Object.assign(clientDisplayRules, clientDisplayRules),
clientEvents: Object.assign(clientEvents, clientEvents),
clientConversions: Object.assign(clientConversions, clientConversions),
clientTrackNotifications: Object.assign(clientTrackNotifications, clientTrackNotifications),
clientApiKeys: Object.assign(clientApiKeys, clientApiKeys),
clientTeamMembers: Object.assign(clientTeamMembers, clientTeamMembers),
clientSubscriptions: Object.assign(clientSubscriptions, clientSubscriptions),
}

export default resources