import { useState, useEffect } from "react";
import axios from 'axios';
import Table from "../components/Table";


const History = ()=> {
    

   
    return (
        <div className="container">
            <h1>History</h1>
            <Table/>
        </div>
    )
}

export default History;