import React from 'react'
import TeamList from './components/TeamList'
import Top from './components/Top'

export default function Team() {
    return (
        <>
            <main className="team" id="main">
                <section>
                    <div className="container">
                        <Top />
                        <TeamList />
                    </div>
                </section>
            </main>
        </>
    )
}
