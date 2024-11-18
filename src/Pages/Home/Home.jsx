import React, { useRef } from 'react'
import Profile from '../../Components/Profile/Profile'
import Skills from '../../Components/Skills/Skills'
import Project from '../../Components/Projects/Project'
import Education from '../../Components/Education/Education'
import Contact from '../../Components/Contact/Contact'
import ScrollToTop from '../../Utilities/ScrollToTop/ScrollToTop'
import Footer from '../../Components/Footer/Footer'

const Home = ({lenis}) => {
    const skillsRef = useRef(null)
    return (
        <>
            <section id='profile-section'>
                <Profile />
            </section>
            <section  ref={skillsRef}  id='skills-section'>
                <Skills />
            </section>
            <ScrollToTop skillsRef={skillsRef} lenis={lenis} />
            <section id='project-section'>
                <Project />
            </section>
            <section id='education-section'>
                <Education />
            </section>
            <section id='contact-section'>
                <Contact />
            </section>
            <Footer />
        </>
    )
}

export default Home