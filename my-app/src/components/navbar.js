import React from "react";

const Navbar = () => {
    return (
        <div>
            <nav className="hidden md:flex justify-between items-center w-[92%] mx-auto">
                <div className="w-auto">
                    <p>Samridh Srivastava</p>
                </div>
                <div className="items-center">
                    <ul className="flex items-center gap-[6vw]">
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
                <div class="flex items-center gap-6">
                <button class="">[Add Twitter Logo here] / GitHub</button>
                <ion-icon onclick="onToggleMenu(this)" name="menu" class="text-3xl cursor-pointer md:hidden"></ion-icon>
            </div>
            </nav>
        </div>
    )
}

export default Navbar;