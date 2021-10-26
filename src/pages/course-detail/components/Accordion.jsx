import React, { useEffect, useRef } from 'react'

let $ = window.$

export default function Accordion({ num, title, content, active, handleAccordion }) {

    // cách mở accordion bằng react
    let ref = useRef()
    useEffect(() => {
        if (active) {
            $(ref.current).slideDown(500)
        } else {
            $(ref.current).slideUp(500)
        }
    })

    // Cách đóng mở accordion bằng js thuần
    // function _onClick(e) {
    //     let $parent = $(e.currentTarget).closest('.accordion')
    //     console.log($parent)
    //     $parent.toggleClass('active')
    //     $(e.currentTarget).next().slideToggle(500)
    //     if ($parent.hasClass('active')) {
    //         $('.accordion.active').not($parent).removeClass('active')
    //             .find('.content').slideUp(500)
    //     }
    // }
    return (
        <div className={`accordion ${active ? 'active' : ''}`}>
            <div className="accordion__title" onClick={handleAccordion}>
                <div className="date">Ngày {num}</div>
                <h3>{title}</h3>
            </div>
            <div className="content" ref={ref} >
                {content}
            </div>
        </div>
    )
}
