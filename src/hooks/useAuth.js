import { useContext } from "react/cjs/react.development"
import { AuthContext } from "../context/Authprovider";


const useAuth=()=>{
    return useContext(AuthContext)
}
export default useAuth;