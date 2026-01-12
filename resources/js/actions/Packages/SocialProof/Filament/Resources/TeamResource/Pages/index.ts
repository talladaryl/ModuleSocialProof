import ListTeams from './ListTeams'
import CreateTeam from './CreateTeam'
import ViewTeam from './ViewTeam'
import EditTeam from './EditTeam'
const Pages = {
    ListTeams: Object.assign(ListTeams, ListTeams),
CreateTeam: Object.assign(CreateTeam, CreateTeam),
ViewTeam: Object.assign(ViewTeam, ViewTeam),
EditTeam: Object.assign(EditTeam, EditTeam),
}

export default Pages