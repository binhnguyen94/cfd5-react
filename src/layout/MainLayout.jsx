import React from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Login from '../components/Login'

export default function mainLayout({children}) {
    return (
        <>
            <Header />
            {children}
            <Footer />
            <Login />
        </>
    )
}
