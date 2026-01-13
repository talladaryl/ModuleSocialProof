import ListTeamMembers from './ListTeamMembers'
import CreateTeamMember from './CreateTeamMember'
import EditTeamMember from './EditTeamMember'
const Pages = {
    ListTeamMembers: Object.assign(ListTeamMembers, ListTeamMembers),
CreateTeamMember: Object.assign(CreateTeamMember, CreateTeamMember),
EditTeamMember: Object.assign(EditTeamMember, EditTeamMember),
}

export default Pages