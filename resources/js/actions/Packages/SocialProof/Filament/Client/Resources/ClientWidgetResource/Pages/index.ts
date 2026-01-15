import ListClientWidgets from './ListClientWidgets'
import CreateClientWidget from './CreateClientWidget'
import ViewClientWidget from './ViewClientWidget'
import EditClientWidget from './EditClientWidget'
const Pages = {
    ListClientWidgets: Object.assign(ListClientWidgets, ListClientWidgets),
CreateClientWidget: Object.assign(CreateClientWidget, CreateClientWidget),
ViewClientWidget: Object.assign(ViewClientWidget, ViewClientWidget),
EditClientWidget: Object.assign(EditClientWidget, EditClientWidget),
}

export default Pages