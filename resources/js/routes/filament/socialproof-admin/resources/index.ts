import apiKeys from './api-keys'
import auditLogs from './audit-logs'
import bannedIps from './banned-ips'
import campaigns from './campaigns'
import clients from './clients'
import conversions from './conversions'
import displayRules from './display-rules'
import domains from './domains'
import events from './events'
import logs from './logs'
import notificationExtendeds from './notification-extendeds'
import notificationHandlers from './notification-handlers'
import plans from './plans'
import quotaUsages from './quota-usages'
import sites from './sites'
import subscriptions from './subscriptions'
import teamMembers from './team-members'
import teams from './teams'
import templates from './templates'
import trackNotifications from './track-notifications'
import widgets from './widgets'
const resources = {
    apiKeys: Object.assign(apiKeys, apiKeys),
auditLogs: Object.assign(auditLogs, auditLogs),
bannedIps: Object.assign(bannedIps, bannedIps),
campaigns: Object.assign(campaigns, campaigns),
clients: Object.assign(clients, clients),
conversions: Object.assign(conversions, conversions),
displayRules: Object.assign(displayRules, displayRules),
domains: Object.assign(domains, domains),
events: Object.assign(events, events),
logs: Object.assign(logs, logs),
notificationExtendeds: Object.assign(notificationExtendeds, notificationExtendeds),
notificationHandlers: Object.assign(notificationHandlers, notificationHandlers),
plans: Object.assign(plans, plans),
quotaUsages: Object.assign(quotaUsages, quotaUsages),
sites: Object.assign(sites, sites),
subscriptions: Object.assign(subscriptions, subscriptions),
teamMembers: Object.assign(teamMembers, teamMembers),
teams: Object.assign(teams, teams),
templates: Object.assign(templates, templates),
trackNotifications: Object.assign(trackNotifications, trackNotifications),
widgets: Object.assign(widgets, widgets),
}

export default resources