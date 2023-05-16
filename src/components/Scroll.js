import arrow from '../docs/arrow.png'
import React, { useState, useEffect } from "react";

export default function Scroll() {

    const [showButton, setShowButton] = useState(false)

    useEffect(() => {
        const scrollButton = () => {
            window.scrollY > 300 ? setShowButton(true) : setShowButton(false)
        }
        window.addEventListener('scroll', scrollButton)

        return () => {
            window.removeEventListener('scroll', scrollButton)
        }
    }, [])

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }
    return (
        <>
            {showButton && (
                <div className='scroll'>
                    <button className="scrollBtn"
                        onClick={scrollToTop}>
                        <img src={arrow} />
                    </button>
                </div>
            )}
        </>
    )
}