import React from "react";
import MenuIcon from '@mui/icons-material/Menu';

const showMenu = () =>{
    console.log("Show Menu")
}

const NavbarMobile = () => {
    return (
        <div className="bg-fuchsia-300">
            <nav className="md:hidden flex flex-col items-center justify-center">
                <div>
                    <MenuIcon onClick={showMenu}/>
                </div>
                <div>
                    <p>Samridh Srivastava</p>
                </div>
                <div>
            <ul>
                <li>
                    <a>Home</a>
                </li>
                <li>
                    <a>About Me</a>
                </li>
                <li>
                    <a>Projects</a>
                </li>
                <li>
                    <a>Experience</a>
                </li>
            </ul>
            
            </div>
            </nav>
            
        </div>
    )
}

export default NavbarMobile;