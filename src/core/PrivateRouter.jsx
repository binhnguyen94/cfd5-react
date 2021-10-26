import { Redirect, Route } from "react-router";
import useAuth from "./useAuth";


export default function PrivateRouter(props){
    let { login } = useAuth()

    if(login) {
        return <Route { ...props } />
    }
    return <Redirect path="/" />
}