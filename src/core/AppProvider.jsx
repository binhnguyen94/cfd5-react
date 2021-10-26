import React, { useEffect, useState } from 'react'
import { BrowserRouter, useHistory } from 'react-router-dom'

export let Context = React.createContext()

function Provider({ children }) {

    let [auth, setAuth] = useState(JSON.parse(localStorage.getItem('auth')) || {
        login: false,
        user: null
    })

    useEffect(() => {
        localStorage.setItem('auth', JSON.stringify(auth))
    }, [auth])

    async function handleLogin() {
        let res = await 
        setAuth({
            login: true,
            user: {
                name: 'Nguyen Thai Binh'
            }
        })
    }

    function logout() {
        setAuth({
            login: false,
            user: null
        })
    }

    let history = useHistory()

    function linkLoading(e) {
        document.body.classList.remove('menu-is-show')
        document.querySelector('.loading-page').style.transform = 'scale(20)'
        e.preventDefault()
        setTimeout(() => {
            history.push(e.target.href?.replace(window.location.origin, '') || '')
            document.querySelector('.loading-page').style.transform = 'scale(0)'
        }, 1000)
    }

    function popupLogin (e = true) {
        document.getElementById('popuplogin').style.display = e ? 'flex' : 'none'
    }

    return (
        <Context.Provider value={{ ...auth, handleLogin, logout, linkLoading, popupLogin }}>
                {children}
        </Context.Provider>
    );
}

export default function AppProvider({ children }){
    return (
        <BrowserRouter>
            <Provider>
                {children}
            </Provider>
        </BrowserRouter>
    )
}