import Auth from './Auth'
import ProfileController from './ProfileController'
import MediaManagerController from './MediaManagerController'
import Management from './Management'
const Admin = {
    Auth: Object.assign(Auth, Auth),
ProfileController: Object.assign(ProfileController, ProfileController),
MediaManagerController: Object.assign(MediaManagerController, MediaManagerController),
Management: Object.assign(Management, Management),
}

export default Admin