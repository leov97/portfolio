import { useState } from "react"

const Menu= () =>{
   
    return (
        <>
        <header>
            <h2 className="logo">logo</h2>
            <input type="checkbox" id="check"/>
            <label htmlFor="check" className="mostrar-menu"><i className="bi bi-list" htmlFor="check"></i></label>
            <nav className="menu">
                <ul >
                    <li>
                        <a href="#home">Home</a>
                    </li>
                   
                    <li>
                        <a href="#portfolio">Portfolio</a>
                    </li>

                    <li>
                    <a href="#contact"> contact</a>
                    </li>
                    
                    <a href="#contact" className="contact">Get in Touch</a>
                </ul>
                <label htmlFor="check" className="esconder-menu" >
                <i className="bi bi-x-lg" htmlFor="check"></i>
                </label>
            </nav>
        </header>
        
        </>
    )
}

export default Menu