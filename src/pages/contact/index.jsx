import React, { useState } from 'react'

export default function Contact() {
    // let [name, setName] = useState('')
    // let [nameError, setNameError] = useState('')
    // let [phone, setPhone] = useState('')
    // let [email, setEmail] = useState('')
    // let [website, setWebsite] = useState('')
    // let [title, setTitle] = useState('')
    // let [content, setContent] = useState('')

    let [form, setForm] = useState({
        name: '',
        phone: '',
        email: '',
        website: '',
        title: '',
        content: ''
    })
    let [error, setError] = useState({
        name: '',
        phone: '',
        email: '',
        website: '',
        title: '',
        content: ''
    })

    function inputChange(e){
        let name = e.target.name
        let value = e.target.value

        if(name === 'phone'){
            if(!(value.length >= 9 && value.length <= 11)){
                setError({
                    ...error,
                    phone: 'Phone phai lon hon 9 va nho hon 10'
                })
            } 
            else {
                setError({
                    ...error,
                    phone: ''
                })
            }
        }

        setForm({
            ...form,
            [e.target.name]: e.target.value
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

        if(form.title === ''){
            errorObj.title = 'Tieu de khong duoc de trong'
        }

        if(form.content === ''){
            errorObj.content = 'Noi dung khong duoc de trong'
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
    }
    return (
        <main className="register-course" id="main">
            <section className="section-1 wrap container">
                {/* <div class="main-sub-title">liên hệ</div> */}
                <h2 className="main-title">HỢP TÁC CÙNG CFD</h2>
                <p className="top-des">
                    Đừng ngần ngại liên hệ với <strong>CFD</strong> để cùng nhau tạo ra những sản phẩm giá trị, cũng như
                    việc hợp tác với các đối tác tuyển dụng và công ty trong và ngoài nước.
                </p>
                <div className="form">
                    <label>
                        <p>Họ và tên<span>*</span></p>
                        <input value={form.name} onChange={inputChange} name="name" type="text" placeholder="Họ và tên bạn" />
                        {error.name && <p className="error-text">{error.name}</p>}
                    </label>
                    <label>
                        <p>Số điện thoại</p>
                        <input value={form.phone} onChange={inputChange} name="phone" type="text" placeholder="Số điện thoại" />
                        {error.phone && <p className="error-text">{error.phone}</p>}
                    </label>
                    <label>
                        <p>Email<span>*</span></p>
                        <input value={form.email} onChange={inputChange} name="email" type="text" placeholder="Email của bạn" />
                        {error.email && <p className="error-text">{error.email}</p>}
                    </label>
                    <label>
                        <p>Website</p>
                        <input value={form.website} onChange={inputChange} name="website" type="text" placeholder="Đường dẫn website http://" />
                        {error.website && <p className="error-text">{error.website}</p>}
                    </label>
                    <label>
                        <p>Tiêu đề<span>*</span></p>
                        <input value={form.title} onChange={inputChange} name="title" type="text" placeholder="Tiêu đề liên hệ" />
                        {error.title && <p className="error-text">{error.title}</p>}
                    </label>
                    <label>
                        <p>Nội dung<span>*</span></p>
                        <textarea value={form.content} onChange={inputChange} name="content" id cols={30} rows={10} defaultValue={""} />
                        {error.content && <p className="error-text">{error.content}</p>}
                    </label>
                    <div className="btn main rect" onClick={btnRegister}>đăng ký</div>
                </div>
            </section>
        </main>
    )
}
