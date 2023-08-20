import { initializeApp } from 'firebase/app';
import { getFirestore, connectFirestoreEmulator } from 'firebase/firestore';
import { getAuth, connectAuthEmulator } from 'firebase/auth';
import { config } from './config';

export function init() {
    const firebaseApp = initializeApp(config.firebase);
    const auth = getAuth(firebaseApp);
    const firestore = getFirestore(firebaseApp);

    // We can use webpack to not bundle this code in production 
    if(location.hostname === 'localhost') {
        connectAuthEmulator(auth, 'http://localhost:9099', { disableWarnings: true });
        connectFirestoreEmulator(firestore, 'localhost', 8080);    
    }

    return { firebaseApp, auth, firestore }
}
