import React from "react";
import logo from '../assets/pict1.png';


const Sidebar = () => {
    return (
        <aside>
            <div className="sidebar-title">
                <div className="sidebar-brand">
                    <img src={logo} className="icon_header"/>
                </div>
                <span className="icon close_icon">X</span>
            </div>

            <ul className="sidebar-list">
                <li className="sidebar-list-item">
                    <a href="">Dashboard</a>
                </li>
                <li className="sidebar-list-item">
                    <a href="">Users</a>
                </li>
                <li className="sidebar-list-item">
                    <a href="">Services</a>
                </li>
                <li className="sidebar-list-item">
                    <a href="">Reports</a>
                </li>
                <li className="sidebar-list-item">
                    <a href="">Calender</a>
                </li>
                <li className="sidebar-list-item">
                    <a href="">Vendors</a>
                </li>
            </ul>
        </aside>
    )
}

export default Sidebar;