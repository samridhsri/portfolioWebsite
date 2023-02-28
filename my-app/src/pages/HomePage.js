import React from "react";
import Navbar from "../components/navbar";
import NavbarMobile from "../components/navbarMobile";

const HomePage = () => {
    return(
        <div>
            <Navbar />
            <NavbarMobile />
            <h1 className="font-mon">This is Home page</h1>
        </div>
    )
}

export default HomePage;