import React from 'react'
import Banner from '../home/components/Banner'
import Section2 from './components/section-2'
import Section3 from './components/section-3'
import Section4 from './components/section-4'

export default function CourseDetail() {
    return (
        <main className="course-detail" id="main">
            <Banner />
            <Section2 />
            <Section3 />
            <Section4 />
        </main>
    )
}
