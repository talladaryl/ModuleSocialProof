import ListClientApiKeys from './ListClientApiKeys'
import CreateClientApiKey from './CreateClientApiKey'
import EditClientApiKey from './EditClientApiKey'
const Pages = {
    ListClientApiKeys: Object.assign(ListClientApiKeys, ListClientApiKeys),
CreateClientApiKey: Object.assign(CreateClientApiKey, CreateClientApiKey),
EditClientApiKey: Object.assign(EditClientApiKey, EditClientApiKey),
}

export default Pages