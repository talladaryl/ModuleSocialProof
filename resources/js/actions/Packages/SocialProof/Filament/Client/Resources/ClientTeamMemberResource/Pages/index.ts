import ListClientTeamMembers from './ListClientTeamMembers'
import CreateClientTeamMember from './CreateClientTeamMember'
import EditClientTeamMember from './EditClientTeamMember'
const Pages = {
    ListClientTeamMembers: Object.assign(ListClientTeamMembers, ListClientTeamMembers),
CreateClientTeamMember: Object.assign(CreateClientTeamMember, CreateClientTeamMember),
EditClientTeamMember: Object.assign(EditClientTeamMember, EditClientTeamMember),
}

export default Pages