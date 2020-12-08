import React, { useState, useEffect} from 'react'
import './NavBar.css'

function NavBar() {
    const [show, handleShow] = useState(false);
    useEffect(() => {
        window.addEventListener("scroll", () => {
            if(window.scrollY > 100){
                handleShow(true)
            }else handleShow(false);
        });
        return () => {
            window.removeEventListener("scroll");
        };
    },[]);
    
    return (
        <div className={`nav ${show && "nav__black"}`}>
            <img 
                className="nav__logo"
                src="netflix_logo.png"
                alt="Netflix logo"
            />

            <img 
                className="nav__avatar"
                src="netflix-avatar.jpg"
                alt="User Avatar"
            />
        </div>
    )
}

export default NavBar