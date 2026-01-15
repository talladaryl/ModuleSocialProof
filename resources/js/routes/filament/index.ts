import exports from './exports'
import imports from './imports'
import admin from './admin'
import socialproof from './socialproof'
import socialproofAdmin from './socialproof-admin'
import client from './client'
const filament = {
    exports: Object.assign(exports, exports),
imports: Object.assign(imports, imports),
admin: Object.assign(admin, admin),
socialproof: Object.assign(socialproof, socialproof),
socialproofAdmin: Object.assign(socialproofAdmin, socialproofAdmin),
client: Object.assign(client, client),
}

export default filament