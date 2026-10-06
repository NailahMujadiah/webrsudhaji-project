import AdminArtikelController from './AdminArtikelController'
import AdminDokterController from './AdminDokterController'
import AdminJadwalDokterController from './AdminJadwalDokterController'
import AdminProfilDireksiController from './AdminProfilDireksiController'
const Management = {
    AdminArtikelController: Object.assign(AdminArtikelController, AdminArtikelController),
AdminDokterController: Object.assign(AdminDokterController, AdminDokterController),
AdminJadwalDokterController: Object.assign(AdminJadwalDokterController, AdminJadwalDokterController),
AdminProfilDireksiController: Object.assign(AdminProfilDireksiController, AdminProfilDireksiController),
}

export default Management