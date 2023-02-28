import React from "react";
import MenuIcon from '@mui/icons-material/Menu';
import { pink } from '@mui/material/colors';
import { Link } from 'react-router-dom';
// import theme from '../materialUIColorPalette.js';
const showMenu = () => {
    console.log("Show Menu")
    const navbtn = document.querySelector('#navbar-btn');
    const navContent = document.querySelector('#navContent');
    navbtn.addEventListener('click', () => {
        navContent.classList.toggle('hidden');
    });
}



const NavbarMobile = () => {
    return (
        <div className="bg-lightBlack">
            <nav className="md:hidden flex flex-col ">
                <div className="flex flex-row-reverse justify-between md:mx-3">
                    <div>
                        <MenuIcon id="navbar-btn" sx={{ color: pink[500] }} fontSize="large" className="lg:hidden float-right cursor-pointer m-2 relative" onClick={showMenu} />
                    </div>
                    <div className="">
                        <p className="text-2xl text-white p-2">Samridh Srivastava</p>
                    </div>
                </div>
                <div id="navContent" className="items-center justify-center flex flex-col">

                    <div>
                        <ul>
                            <li>
                                <Link to="/"> <a className="text-xl text-white font-mon font-medium p-2">Home</a> </Link>
                            </li>
                            <li>
                                <Link to="/">  <a className="text-xl text-white font-mon font-medium p-2">About Me</a> </Link>
                            </li>
                            <li>
                                <Link to="/"> <a className="text-xl text-white font-mon font-medium p-2">Projects</a></Link>
                            </li>
                            <li>
                                <Link to="/"> <a className="text-xl text-white font-mon font-medium p-2">Experience</a></Link>
                            </li>
                        </ul>

                    </div>
                </div>
            </nav>

        </div>
    )
}

export default NavbarMobile;