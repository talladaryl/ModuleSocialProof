import ListSites from './ListSites'
import CreateSite from './CreateSite'
import ViewSite from './ViewSite'
import EditSite from './EditSite'
const Pages = {
    ListSites: Object.assign(ListSites, ListSites),
CreateSite: Object.assign(CreateSite, CreateSite),
ViewSite: Object.assign(ViewSite, ViewSite),
EditSite: Object.assign(EditSite, EditSite),
}

export default Pages