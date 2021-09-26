import React from 'react'
import Login from '../../components/Login'
import Action from './components/Action'
import Banner from './components/Banner'
import CourseList from './components/CourseList'
import Different from './components/Different'
import Gallery from './components/Gallery'
import Testimonial from './components/Testimonial'

export default function Home() {
    return (
        <>
            <main className="homepage" id="main">
                <Banner />
                <CourseList />
                <Different />
                <Testimonial />
                <Gallery />
                <Action />
            </main>

            {/* popup video homepage */}
            <div className="popup-video" style={{ display: 'none' }}>
                <div className="wrap">
                    <div className="video-src" />
                </div>
                <div className="close" />
            </div>
            <Login />
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
            </div>
        </>
    )
}