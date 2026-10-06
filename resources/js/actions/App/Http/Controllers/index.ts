import AuthController from './AuthController'
import AdminController from './AdminController'
import DokterController from './DokterController'
import JadwalDokterController from './JadwalDokterController'
import ArtikelController from './ArtikelController'
import LayananController from './LayananController'
import BannerController from './BannerController'
import KontakController from './KontakController'
import Admin from './Admin'
import Settings from './Settings'
const Controllers = {
    AuthController: Object.assign(AuthController, AuthController),
AdminController: Object.assign(AdminController, AdminController),
DokterController: Object.assign(DokterController, DokterController),
JadwalDokterController: Object.assign(JadwalDokterController, JadwalDokterController),
ArtikelController: Object.assign(ArtikelController, ArtikelController),
LayananController: Object.assign(LayananController, LayananController),
BannerController: Object.assign(BannerController, BannerController),
KontakController: Object.assign(KontakController, KontakController),
Admin: Object.assign(Admin, Admin),
Settings: Object.assign(Settings, Settings),
}

export default Controllers