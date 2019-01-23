import Firebase from 'firebase'
import config from './firebaseConfig'

const fbApp = Firebase.initializeApp(config)
const db = fbApp.database()
export const dbMenuRef = db.ref('menu')
