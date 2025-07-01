import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyBe9IeINeRNGsDI2P1Jz0UwWIVoORISJaw",
  authDomain: "taskbento.firebaseapp.com",
  projectId: "taskbento",
  storageBucket: "taskbento.firebasestorage.app",
  messagingSenderId: "403654292837",
  appId: "1:403654292837:web:9673c44769eb5debe05d8c",
}
const app = initializeApp(firebaseConfig)
export const db = getFirestore(app)
