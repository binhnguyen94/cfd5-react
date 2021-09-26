import React from 'react'

export default function Section4() {
    return (
        <section className="section-4">
            <div className="container">
                <div className="textbox">
                    <h3 className="sub-title">Khóa học</h3>
                    <h2 className="main-title">Liên quan</h2>
                </div>
                <div className="list row">
                    <div className="col-md-4 course">
                        <div className="wrap">
                            <a href="#" className="cover">
                                <img src="img/img.png" alt="" />
                            </a>
                            <div className="info">
                                <a className="name" href="#">
                                    Front-end căn bản
                                </a>
                                <p className="des">
                                    One of the best corporate fashion brands in Sydney
                                </p>
                            </div>
                            <div className="bottom">
                                <div className="teacher">
                                    <div className="avatar">
                                        <img src="img/avt.png" alt="" />
                                    </div>
                                    <div className="name">Vương Đặng</div>
                                </div>
                                <div className="register-btn">Đăng Ký</div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 course">
                        <div className="wrap">
                            <a href="#" className="cover">
                                <img src="img/img2.png" alt="" />
                            </a>
                            <div className="info">
                                <a className="name" href="#">
                                    Front-end nâng cao
                                </a>
                                <p className="des">
                                    One of the best corporate fashion brands in Sydney
                                </p>
                            </div>
                            <div className="bottom">
                                <div className="teacher">
                                    <div className="avatar">
                                        <img src="img/avt.png" alt="" />
                                    </div>
                                    <div className="name">Trần Nghĩa</div>
                                </div>
                                <div className="register-btn">Đăng Ký</div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 course">
                        <div className="wrap">
                            <a href="#" className="cover">
                                <img src="img/img3.png" alt="" />
                            </a>
                            <div className="info">
                                <a className="name" href="#">
                                    Laravel framework
                                </a>
                                <p className="des">
                                    One of the best corporate fashion brands in Sydney
                                </p>
                            </div>
                            <div className="bottom">
                                <div className="teacher">
                                    <div className="avatar">
                                        <img src="img/avt.png" alt="" />
                                    </div>
                                    <div className="name">Trần Nghĩa</div>
                                </div>
                                <div className="register-btn">Đăng Ký</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
