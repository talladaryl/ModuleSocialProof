import ClientDashboard from './ClientDashboard'
import ClientAnalytics from './ClientAnalytics'
import WidgetBuilder from './WidgetBuilder'
import ClientSettings from './ClientSettings'
import ClientBilling from './ClientBilling'
const Pages = {
    ClientDashboard: Object.assign(ClientDashboard, ClientDashboard),
ClientAnalytics: Object.assign(ClientAnalytics, ClientAnalytics),
WidgetBuilder: Object.assign(WidgetBuilder, WidgetBuilder),
ClientSettings: Object.assign(ClientSettings, ClientSettings),
ClientBilling: Object.assign(ClientBilling, ClientBilling),
}

export default Pages