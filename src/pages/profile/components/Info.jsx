import React, { useState } from 'react'
import useFormValidate from '../../../core/useFormValidate'

export default function Info() {

    let { form, error, inputChange, check } = useFormValidate({
        name: '',
        phone: '',
        fb: '',
        skype: ''
    }, {
        rule: {
            name: {
                required: true
            },
            phone: {
                required: true,
                pattern: 'phone'
            },
            fb: {
                required: true,
                pattern: 'fb'
            },
            skype: {
                required: true
            }
        },
        message: {
            name: {
                required: 'Ho va ten khong duoc de trong'
            }
        },
        option: {
            localStorage: 'profile-info'
        }
    })

    function submitForm() {
        let error = check()
        if (Object.keys(error).length === 0) {
            alert('Thanh Cong') 
        }
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
                    <input value={form.facebook} onChange={inputChange} name="fb" type="text" placeholder="Facebook url" />
                    {error.fb && <p className="error-text">{error.fb}</p>}
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
