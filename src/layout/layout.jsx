import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import Navbar from '../components/Navbar/Navbar'
import Footer from '../components/Footer/Footer'

const Layout = ({ children }) => {
    const location = useLocation()

    useEffect(() => {
        const revealElements = document.querySelectorAll('.reveal')
        const options = {
            threshold: 0.15,
            rootMargin: '0px 0px -10% 0px',
        }

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('reveal-active')
                    observer.unobserve(entry.target)
                }
            })
        }, options)

        revealElements.forEach((el) => observer.observe(el))

        return () => observer.disconnect()
    }, [location])

    return (
        <>
            <Navbar />
            {children}
            <Footer />
        </>
    )
}

export default Layout       