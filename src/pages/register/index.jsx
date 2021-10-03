import React, { useState } from 'react'

export default function Register() {

    let [form, setForm] = useState({
        name: '',
        phone: '',
        email: '',
        website: '',
        coin: true,
        gender: 'male',
        gender2: '',
        payment: 'chuyen-khoan'
    })

    let [error, setError] = useState({
        name: '',
        phone: '',
        email: '',
        website: '',
        coin: true,
        gender: 'male'
    })

    function inputChange(e){
        let name = e.target.name
        let value = e.target.value,
            type = e.target.type

        if(type === 'checkbox'){
            value = e.target.checked
        }
        setForm({
            ...form,
            [name]: value
        })
    }
    
    
    function btnRegister(){

        let errorObj = {}
        if(form.name === ''){
            errorObj.name = 'Ho va ten khong duoc de trong'
        }

        if(form.phone === ''){
            errorObj.phone = 'So dien thoai khong duoc de trong'
        }

        if(form.email === ''){
            errorObj.email = 'Email khong duoc de trong'
        } else if(!/^[a-z][a-z0-9_\.]{5,32}@[a-z0-9]{2,}(\.[a-z0-9]{2,4}){1,2}$/i.test(form.email)){
            errorObj.email = 'Email khong dung format'
        }

        if(form.website && !/^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/i.test(form.website)){
            errorObj.website = 'Website khong dung dinh dang URL'
        }

        setError(errorObj)
        // if(name === ""){ 
        //     setNameError("Name ko dc de trong")
        // } else {
        //     setNameError('')
        // }

        if(Object.keys(errorObj).length === 0){
            alert('Thanh Cong')
        }

        console.log(form)
    }

    function _selectCustom(value){
        console.log(value)
        setForm({
            ...form,
            payment: value
        })
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
                                    <input type="checkbox" name="coin" checked={form.coin} onChange={inputChange}/>
                                    <span className="checkmark" />
                                </div>
                            </label>
                            <label className="disable">
                                <p>Gioi tinh</p>
                                <div className="checkcontainer">
                                    <input type="radio" name="gender" value="male" checked={form.gender === 'male'} onChange={inputChange}/> Male  
                                    <span className="checkmark" />
                                </div>
                            </label>
                            <label className="disable">
                                {/* <p>Gioi tinh</p> */}
                                <div className="checkcontainer">
                                    <input type="radio" name="gender" value="female" checked={form.gender === 'female'} onChange={inputChange}/> Female
                                    <span className="checkmark" />
                                </div>
                            </label>
                            <label className="disable">
                                <p>Gioi tinh</p>
                                <select name="gender2"  onChange={inputChange}>
                                    <option value="">---Gender---</option>
                                    <option value="male">Male</option>
                                    <option value="female">Female</option>
                                </select>
                            </label>
                            <label>
                                <p>Hình thức thanh toán</p>
                                <div className="select">
                                    <div className="head">Chuyển khoản</div>
                                    <div className="sub">
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
