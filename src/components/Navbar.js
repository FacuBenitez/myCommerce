import React from 'react';
import './NavbarStyles.scss';
import CardWidget from './CarWidget';



const Navbar = () => {
    return (
        <>
            <nav>
                <p>myCommerce</p>

                <li>Home</li>
                <li>Contact us</li>
                <li>Services</li>

                <CardWidget></CardWidget>
            </nav>

        </>
    )
}

export default Navbar
