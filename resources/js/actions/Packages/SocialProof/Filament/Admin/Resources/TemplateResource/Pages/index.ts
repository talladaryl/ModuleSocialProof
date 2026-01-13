import ListTemplates from './ListTemplates'
import CreateTemplate from './CreateTemplate'
import ViewTemplate from './ViewTemplate'
import EditTemplate from './EditTemplate'
const Pages = {
    ListTemplates: Object.assign(ListTemplates, ListTemplates),
CreateTemplate: Object.assign(CreateTemplate, CreateTemplate),
ViewTemplate: Object.assign(ViewTemplate, ViewTemplate),
EditTemplate: Object.assign(EditTemplate, EditTemplate),
}

export default Pages