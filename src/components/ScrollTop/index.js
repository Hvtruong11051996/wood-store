import React, { useState } from 'react';
import './scrollTop.css';

function ScrollTop(props) {

    const [show, setShow] = useState(false)
    window.addEventListener('scroll', () => {
        if (window.scrollY > 800) {
            setShow(true)
        }
        else {
            setShow(false)
        }
    })

    return (
        <div className={show ? "active" : "scroll"}
            onClick={() => window.scroll({
                top: 0,
                left: 0,
                behavior: 'smooth'
            })}
        >
            <i className="fas fa-chevron-up"></i>
        </div >
    );
}

export default ScrollTop;