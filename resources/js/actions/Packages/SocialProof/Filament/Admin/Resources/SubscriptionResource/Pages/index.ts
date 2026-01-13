import ListSubscriptions from './ListSubscriptions'
import CreateSubscription from './CreateSubscription'
import ViewSubscription from './ViewSubscription'
import EditSubscription from './EditSubscription'
const Pages = {
    ListSubscriptions: Object.assign(ListSubscriptions, ListSubscriptions),
CreateSubscription: Object.assign(CreateSubscription, CreateSubscription),
ViewSubscription: Object.assign(ViewSubscription, ViewSubscription),
EditSubscription: Object.assign(EditSubscription, EditSubscription),
}

export default Pages