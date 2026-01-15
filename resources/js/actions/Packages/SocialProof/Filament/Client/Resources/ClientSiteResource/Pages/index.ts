import ListClientSites from './ListClientSites'
import CreateClientSite from './CreateClientSite'
import ViewClientSite from './ViewClientSite'
import EditClientSite from './EditClientSite'
const Pages = {
    ListClientSites: Object.assign(ListClientSites, ListClientSites),
CreateClientSite: Object.assign(CreateClientSite, CreateClientSite),
ViewClientSite: Object.assign(ViewClientSite, ViewClientSite),
EditClientSite: Object.assign(EditClientSite, EditClientSite),
}

export default Pages