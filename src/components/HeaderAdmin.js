import React from "react";
import justify from '../assets/justified.png'
import bell from '../assets/bell.png'
import envelope from '../assets/envelop.png'
import search from '../assets/search.png'
import Admin from "../components/MainAdmin";

const HeaderAdmin = () => {
    return (
        <header className="header">
            <div className="menu-icon">
                <img src={justify} alt="" className="icon"/>
            </div>

            <div className="header-right">
                <img src={bell} className="icon"/>
                <img src={envelope} className="icon"/>
            </div>
        </header>
    )
}

export default HeaderAdmin;