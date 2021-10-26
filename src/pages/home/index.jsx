import React, { useEffect, useState } from 'react'
import Action from './components/Action'
import Banner from './components/Banner'
import CourseList from './components/CourseList'
import Different from './components/Different'
import Gallery from './components/Gallery'
import Testimonial from './components/Testimonial'

export default function Home() {

    let [state, setState] = useState({
        gallery: [],
        offline: [],
        online: [],
        review: [], 
        loading: true
    })

    useEffect(() => {
        fetch('https://cfd-reactjs.herokuapp.com/elearning/v4/home')
        .then(res => res.json())
        .then((res) => {
            setState({
                ...res,
                loading: false
            })
        })
    }, [])

    if(state.loading) return 'Loading.....'

    return (
        <>
            <main className="homepage" id="main">
                <Banner />
                <CourseList offline={state.offline} online={state.online} />
                <Different />
                <Testimonial review={state.review}/>
                <Gallery images={state.gallery} />
                <Action />
            </main>
            
            {/* popup video homepage */}
            {/* <div className="popup-video" style={{ display: 'none' }}>
                <div className="wrap">
                    <div className="video-src" />
                </div>
                <div className="close" />
            </div>
            
            <div className="popup-form popup-login" style={{ display: 'none' }}>
                <div className="wrap">
                    <h2 className="title">Đăng ký</h2>
                    <div className="btn btn-icon rect white btn-google">
                        <img src="/img/google.svg" alt="" />
                        Google
                    </div>
                    <p className="policy">
                        Bằng việc đăng kí, bạn đã đồng ý <a href="#">Điều khoản bảo mật</a> của CFD
                    </p>
                    <div className="close">
                        <img src="/img/close-icon.png" alt="" />
                    </div>
                </div>
            </div> */}
        </>
    )
}