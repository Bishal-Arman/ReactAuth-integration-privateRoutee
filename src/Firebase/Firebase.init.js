import { initializeApp } from "firebase/app";
import firebaseConfig from "./FIrebase.config";

const initializeAuthentication=()=>{
    initializeApp(firebaseConfig);
}
export default initializeAuthentication;