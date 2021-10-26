import { useEffect, useState } from "react";

let emailPattern = /^[a-z][a-z0-9_\.]{5,32}@[a-z0-9]{2,}(\.[a-z0-9]{2,4}){1,2}$/i,
    phonePattern = /(84|0[3|5|7|8|9])+([0-9]{8,10})\b/i,
    urlPattern = /^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/i

export default function useFormValidate(initialForm, validate){

    let { rule, message, option } = validate;
    if(!option) option = {}

    let v = initialForm
    if(option.localStorage) {
        v = JSON.parse(localStorage.getItem(option.localStorage)) || initialForm
    }

    let [form, setForm] = useState(v)
    let [error, setError] = useState({})

    useEffect(() => {
        if(option.localStorage){
            localStorage.setItem(option.localStorage, JSON.stringify(form))

            // dùng để xóa giá trị trong Local Storage khi chuyển trang
            return () => {
                localStorage.removeItem(option.localStorage)
            }
        }
    }, [form])

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

    function check(){
        let errorObj = {}

        for(let i in rule){
            let r = rule[i]
            let m = message?.[i] || null

            if(r.required && !form[i]){
                errorObj[i] = m?.required || 'Truong nay khong duoc de trong'
            }

            if(r.pattern && form[i]){
                let pattern = r.pattern
                if(pattern === 'email') pattern = emailPattern
                if(pattern === 'phone') pattern = phonePattern
                if(pattern === 'url') pattern = urlPattern

                try {
                    if(!pattern.test(form[i])){
                        errorObj[i] = m?.pattern || 'Truong nay khong dung dinh dang'
                    }
                } catch (err) {}
            }
        }

        setError(errorObj)
        return errorObj
    }

    return {
        form, error, inputChange, check
    }
}