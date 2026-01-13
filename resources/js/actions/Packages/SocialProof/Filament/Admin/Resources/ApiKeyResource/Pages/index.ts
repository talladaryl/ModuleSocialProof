import ListApiKeys from './ListApiKeys'
import CreateApiKey from './CreateApiKey'
import ViewApiKey from './ViewApiKey'
import EditApiKey from './EditApiKey'
const Pages = {
    ListApiKeys: Object.assign(ListApiKeys, ListApiKeys),
CreateApiKey: Object.assign(CreateApiKey, CreateApiKey),
ViewApiKey: Object.assign(ViewApiKey, ViewApiKey),
EditApiKey: Object.assign(EditApiKey, EditApiKey),
}

export default Pages