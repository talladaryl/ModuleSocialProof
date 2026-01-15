import ListClientNotifications from './ListClientNotifications'
import CreateClientNotification from './CreateClientNotification'
import EditClientNotification from './EditClientNotification'
const Pages = {
    ListClientNotifications: Object.assign(ListClientNotifications, ListClientNotifications),
CreateClientNotification: Object.assign(CreateClientNotification, CreateClientNotification),
EditClientNotification: Object.assign(EditClientNotification, EditClientNotification),
}

export default Pages