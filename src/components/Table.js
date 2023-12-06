import React, {useEffect, useState} from 'react';
import axios from 'axios';
import "../style/table.css";


const Table = ( {data, column}) => {
    const [history, setHistory] = useState([]);

    useEffect(() => {
        getHistory();
    },[]);

    const getHistory = async () => {
        const dataHistory = await axios.get('http://localhost:8080/history');
        setHistory(dataHistory.data);
    }

    const deleteHistory = async (id) => {
        await axios.delete('http://localhost:8080/history/${id}');
        getHistory();
    }


    return (
        <table className='table'>
            <thead className='thead-dark'>
                <tr>
                    <th>No</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>Package</th>
                    <th>Address</th>
                    <th>Message</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {history.map((dataHistory, index) => (
                    <tr key={dataHistory.id}>
                        <td>{index + 1}</td>
                        <td>{dataHistory.nama}</td>
                        <td>{dataHistory.email}</td>
                        <td>{dataHistory.phone}</td>
                        <td>{dataHistory.paket}</td>
                        <td>{dataHistory.alamat}</td>
                        <td>{dataHistory.pesan}</td>
                        <td>
                            <button className='btn btn-warning mr-2'>update</button>
                            <button onClick={() => deleteHistory(dataHistory.id)} className='btn btn-danger'>delete</button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}

export default Table;