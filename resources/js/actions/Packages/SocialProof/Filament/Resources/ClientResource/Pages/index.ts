import ListClients from './ListClients'
import CreateClient from './CreateClient'
import ViewClient from './ViewClient'
import EditClient from './EditClient'
const Pages = {
    ListClients: Object.assign(ListClients, ListClients),
CreateClient: Object.assign(CreateClient, CreateClient),
ViewClient: Object.assign(ViewClient, ViewClient),
EditClient: Object.assign(EditClient, EditClient),
}

export default Pages