import React from "react";
import Sidebar from "../components/Sidebaradm";
import HeaderAdmin from "../components/HeaderAdmin";
import "../style/Main-admin.css";
import Admin from "../components/MainAdmin";

const MainAdmin = () => {
    return (
        <>
            <div className="grid-container">
                <HeaderAdmin/>
                <Sidebar/>
                <Admin/>
            </div>
        </>
    )
}

export default MainAdmin;