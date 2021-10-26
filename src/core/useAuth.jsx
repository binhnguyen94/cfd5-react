import { useContext } from "react"
import { Context } from "./AppProvider"

export default function useAuth(){
    let { login, user, handleLogin, logout, popupLogin} = useContext(Context)

    return { login, user, handleLogin, logout, popupLogin}
}