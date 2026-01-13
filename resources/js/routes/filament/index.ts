import exports from './exports'
import imports from './imports'
import admin from './admin'
import socialproof from './socialproof'
import socialproofAdmin from './socialproof-admin'
const filament = {
    exports: Object.assign(exports, exports),
imports: Object.assign(imports, imports),
admin: Object.assign(admin, admin),
socialproof: Object.assign(socialproof, socialproof),
socialproofAdmin: Object.assign(socialproofAdmin, socialproofAdmin),
}

export default filament