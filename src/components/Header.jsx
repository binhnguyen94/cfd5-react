import React, { useContext } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Context } from '../core/AppProvider';
import useAuth from '../core/useAuth';

export default function Header() {

    let { linkLoading } = useContext(Context);

    let { login, user, handleLogin, logout, popupLogin } = useAuth()

    function openMenu() {
        document.body.classList.toggle('menu-is-show')
    }

    return (
        <>
            <header id="header">
                <div className="wrap">
                    <div className="menu-hambeger" onClick={openMenu}>
                        <div className="button">
                            <span />
                            <span />
                            <span />
                        </div>
                        <span className="text">menu</span>
                    </div>
                    <Link to="/" className="logo" onClick={linkLoading}>
                        <img src="/img/logo.svg" alt="" />
                        <h1>CFD</h1>
                    </Link>
                    <div className="right">
                        {
                            login ? (
                                <div className="have-login">
                                    <div className="account">
                                        <a href="#" className="info">
                                            <div className="name">{user.name}</div>
                                            <div className="avatar">
                                                <img src="/img/avt.png" alt="" />
                                            </div>
                                        </a>
                                    </div>
                                    <div className="hamberger">
                                    </div>
                                    <div className="sub">
                                        <Link to="#">Khóa học của tôi</Link>
                                        <Link to="/profile" onClick={linkLoading} >Thông tin tài khoản</Link>
                                        <a href="#" onClick={(e) => {e.preventDefault(); logout()} }>Đăng xuất</a>
                                    </div>
                                </div>
                            ) : (
                                <div className="not-login bg-none">
                                    <a href="#" className="btn-register" onClick={popupLogin}>Đăng nhập</a>
                                    <Link to="/login" className="btn main btn-open-login">Đăng ký</Link>
                                </div>
                            )
                        }
                    </div>
                </div>
            </header>
            <nav className="nav">
                <ul>
                    <li className="li_login">
                        <a href="#">Đăng nhập</a>
                        <a href="#">Đăng ký</a>
                    </li>
                    <li>
                        <NavLink exact onClick={linkLoading} to="/">Trang chủ</NavLink>
                    </li>
                    <li>
                        <NavLink onClick={linkLoading} to="/team">CFD Team</NavLink>
                    </li>
                    <li>
                        <NavLink onClick={linkLoading} to="/courses">Khóa Học</NavLink>
                    </li>
                    <li>
                        <NavLink onClick={linkLoading} to="/project">Dự Án</NavLink>
                    </li>
                    <li>
                        <NavLink onClick={linkLoading} to="/contact">Liên hệ</NavLink>
                    </li>
                </ul>
            </nav>
            <div className="overlay_nav" />
        </>
    );
};