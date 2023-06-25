import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
//******code that help to establish connecton btwn react and firebase*****
const firebaseConfig = {
  apiKey: "AIzaSyChV-B9bi_I1Sq7-F2iBkoK-0L7yNblb5Q",
  authDomain: "auth-demo-64471.firebaseapp.com",
  projectId: "auth-demo-64471",
  storageBucket: "auth-demo-64471.appspot.com",
  messagingSenderId: "754854101565",
  appId: "1:754854101565:web:58ecfa49f3bdffa2e7e054",
  measurementId: "G-JK4BS6W2W4",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
export { auth, provider };
