import React, {useState} from 'react'

export default function Info() {
    let [form, setForm] = useState({
        name: '',
        phone: '',
        facebook: '',
        skype: ''
    })

    let [error, setError] = useState({
        name: '',
        phone: '',
        facebook: '',
        skype: ''
    })

    function inputChange(e){
        let name = e.target.name
        let value = e.target.value

        setForm({
            ...form,
            [name]: value
        })
    }

    function submitForm(){
        let errorObj = {}

        if(form.name === ''){
            errorObj.name = 'Ho va ten khong duoc de trong'
        }

        if(form.phone === ''){
            errorObj.phone = 'Phone khong duoc de trong'
        } else if(!(form.phone.length >= 9 && form.phone.length <= 11)){
            errorObj.phone = 'So dien thoai khong it hon 9 va nhieu hon 11'
        } 

        if(form.facebook && !/^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/i.test(form.facebook)){
            errorObj.facebook = 'dinh dang URL sai'
        }

        if(form.skype && !/^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/i.test(form.skype)){
            errorObj.skype = 'dinh dang URL sai'
        }

        setError(errorObj)
        
    }

    return (
        <>
            <div className="tab1">
                <label>
                    <p>Họ và tên<span>*</span></p>
                    <input value={form.name} onChange={inputChange} name="name" type="text" placeholder="Nguyễn Văn A" />
                    {error.name && <p className="error-text">{error.name}</p>}
                </label>
                <label>
                    <p>Số điện thoại<span>*</span></p>
                    <input value={form.phone} onChange={inputChange} name="phone" type="text" placeholder="0949******" />
                    {error.phone && <p className="error-text">{error.phone}</p>}
                </label>
                <label>
                    <p>Email<span>*</span></p>
                    <input defaultValue="vuong.dang@dna.vn" disabled type="text" />
                </label>
                <label>
                    <p>Facebook<span>*</span></p>
                    <input value={form.facebook} onChange={inputChange} name="facebook" type="text" placeholder="Facebook url" />
                    {error.facebook && <p className="error-text">{error.facebook}</p>}
                </label>
                <label>
                    <p>Skype<span>*</span></p>
                    <input value={form.skype} onChange={inputChange} name="skype" type="text" placeholder="Skype url" />
                    {error.skype && <p className="error-text">{error.skype}</p>}
                </label>
                <div className="btn main rect" onClick={submitForm}>LƯU LẠI</div>
            </div>
        </>
    )
}
