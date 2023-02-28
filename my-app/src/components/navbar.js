import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <div>
            <nav className="hidden md:flex justify-between items-center p-2 w-full mx-auto bg-lightBlack">
                <div className="w-auto">
                    {/* <p className="text-white border-white"><span className="font-regular">Samridh</span> <span className="text-pink font-semibold">Srivastava</span></p> */}
                    <p className="text-white">Samridh Srivastava</p>
                </div>
                <div className="items-center">
                    <ul className="flex items-center gap-[6vw]">
                        <li>
                            <Link to="/"><a className="text-white hover:border-b-2 hover:border-pink">Home</a></Link>
                        </li>
                        <li>
                            <Link to="/"><a className="text-white hover:border-b-2 hover:border-pink">About Me</a></Link>
                        </li>
                        <li>
                            <Link to="/"><a className="text-white hover:border-b-2 hover:border-pink">Projects</a></Link>
                        </li>
                        <li>
                            <Link to="/"> <a className="text-white hover:border-b-2 hover:border-pink">Experience</a></Link>
                        </li>
                    </ul>

                </div>
                <div class="flex items-center gap-6">
                    <button class="text-white">[Add Twitter Logo here] / GitHub</button>
                    <ion-icon onclick="onToggleMenu(this)" name="menu" class="text-3xl cursor-pointer md:hidden"></ion-icon>
                </div>
            </nav>
        </div>
    )
}

export default Navbar;