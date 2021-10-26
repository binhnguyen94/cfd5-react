import React, { useState } from 'react'
import useFormValidate from '../../core/useFormValidate'
let $ = window.$

export default function Register() {

    // let [form, setForm] = useState({
    //     name: '',
    //     phone: '',
    //     email: '',
    //     website: '',
    //     coin: true,
    //     gender: 'male',
    //     gender2: '',
    //     payment: 'chuyen-khoan'
    // })

    // let [error, setError] = useState({
    //     name: '',
    //     phone: '',
    //     email: '',
    //     website: '',
    //     coin: true,
    //     gender: 'male'
    // })
    let { form, error, inputChange, check } = useFormValidate({
        name: '',
        phone: '',
        email: '',
        website: '',
        coin: true,
        gender: 'male',
        gender2: '',
        payment: 'chuyen-khoan'
    }, {
        rule: {
            name: {
                required: true
            },
            phone: {
                required: true,
                pattern: 'phone'
            },
            email: {
                required: true,
                pattern: 'email'
            },
            website: {
                required: true,
                pattern: 'website'
            }
        },
        message: {
            name: {
                required: 'Ho va ten khong duoc de trong'
            }
        }
    })

    function btnRegister() {

        let error = check()
        if (Object.keys(error).length === 0) {
            alert('Thanh Cong') 
        }

        console.log(form)
    }

    function _selectCustom(value) {
        // console.log(value)
        // setForm({
        //     ...form,
        //     payment: value
        // })
    }

    function open(){
        // document.querySelector('.select .head .sub').style.display = "block"
        $('.select .head').on('click', function (e) {
            // e.stopPropagation();
            let $select = $(this).closest('.select');
            $select.find('.sub').fadeToggle(0, function () {
                if ($select.hasClass('active')) {
                    $select.removeClass('active');
                } else {
                    $select.addClass('active')
                }
            });
        })
    
        $('.select .sub a').on('click', function (e) {
            e.preventDefault();
            let value = $(this).text();
            $(this).closest('.select').find('.head').text(value);
            $(this).closest('.select').find('.sub').fadeOut(200);
        });
    }


    return (
        <main className="register-course" id="main">
            <section>
                <div className="container">
                    <div className="wrap container">
                        <div className="main-sub-title">ĐĂNG KÝ</div>
                        <h1 className="main-title">Thực chiến front-end căn bản </h1>
                        <div className="main-info">
                            <div className="date"><strong>Khai giảng:</strong> 15/11/2020</div>
                            <div className="time"><strong>Thời lượng:</strong> 18 buổi</div>
                            <div className="time"><strong>Học phí:</strong> 6.000.000 VND</div>
                        </div>
                        <div className="form">
                            <label>
                                <p>Họ và tên<span>*</span></p>
                                <input type="text" value={form.name} onChange={inputChange} name="name" placeholder="Họ và tên bạn" />
                                {error.name && <p className="error-text">{error.name}</p>}
                            </label>
                            <label>
                                <p>Số điện thoại<span>*</span></p>
                                <input type="text" value={form.phone} onChange={inputChange} name="phone" placeholder="Số điện thoại" />
                                {error.phone && <p className="error-text">{error.phone}</p>}
                            </label>
                            <label>
                                <p>Email<span>*</span></p>
                                <input type="text" value={form.email} onChange={inputChange} name="email" placeholder="Email của bạn" />
                                {error.email && <p className="error-text">{error.email}</p>}
                            </label>
                            <label>
                                <p>URL Facebook<span>*</span></p>
                                <input type="text" value={form.website} onChange={inputChange} name="website" placeholder="https://facebook.com" />
                                {error.website && <p className="error-text">{error.website}</p>}
                            </label>
                            <label className="disable">
                                <p>Sử dụng COIN</p>
                                <div className="checkcontainer">
                                    Hiện có <strong>300 COIN</strong>
                                    {/* Giảm giá còn <span><strong>5.800.000 VND</strong>, còn lại 100 COIN</span> */}
                                    {/* Cần ít nhất 200 COIN để giảm giá */}
                                    <input type="checkbox" name="coin" checked={form.coin} onChange={inputChange} />
                                    <span className="checkmark" />
                                </div>
                            </label>
                            <label className="disable">
                                <p>Gioi tinh</p>
                                <div className="checkcontainer">
                                    <input type="radio" name="gender" value="male" checked={form.gender === 'male'} onChange={inputChange} /> Male
                                    <span className="checkmark" />
                                </div>
                            </label>
                            <label className="disable">
                                {/* <p>Gioi tinh</p> */}
                                <div className="checkcontainer">
                                    <input type="radio" name="gender" value="female" checked={form.gender === 'female'} onChange={inputChange} /> Female
                                    <span className="checkmark" />
                                </div>
                            </label>
                            <label className="disable">
                                <p>Gioi tinh</p>
                                <select name="gender2" onChange={inputChange}>
                                    <option value="">---Gender---</option>
                                    <option value="male">Male</option>
                                    <option value="female">Female</option>
                                </select>
                            </label>
                            <label>
                                <p>Hình thức thanh toán</p>
                                <div className="select" onClick={open}>
                                    <div className="head">Chuyển khoản</div>
                                    <div className="sub" >
                                        <a href="#" onClick={_selectCustom.bind(null, "chuyen-khoan")}>Chuyển khoản</a>
                                        <a href="#" onClick={_selectCustom.bind(null, "tien-mat")}>Thanh toán tiền mặt</a>
                                    </div>
                                </div>
                            </label>
                            <label>
                                <p>Ý kiến cá nhân</p>
                                <input type="text" placeholder="Mong muốn cá nhân và lịch bạn có thể học." />
                            </label>
                            <div className="btn main rect" onClick={btnRegister}>đăng ký</div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}
