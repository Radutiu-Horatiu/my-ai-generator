import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyBCvglFCvGlrPb1RDFDQH1smX31yXqwJSk',
  authDomain: 'my-ai-generator.firebaseapp.com',
  projectId: 'my-ai-generator',
  storageBucket: 'my-ai-generator.appspot.com',
  messagingSenderId: '874722938280',
  appId: '1:874722938280:web:bb8dc3e14519968985a19d',
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
