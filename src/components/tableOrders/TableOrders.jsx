import React, { useEffect, useState } from 'react'

import { db } from '../../firebase/firebaseConfig';
import { collection, getDocs } from "firebase/firestore";

export default function TableOrders() {

    const [orders, setOrders] = useState([]);
    const [loading, setLoading] = useState(false);

    async function getOrders() {

        const querySnapshot = await getDocs(collection(db, "orders"));
        querySnapshot.forEach((doc) => {
            // doc.data() is never undefined for query doc snapshots
            console.log(doc.id, " => ", doc.data());
            setOrders([...orders, doc.data()]);
            
        });
        setLoading(true);
    }

    useEffect(() => {
        getOrders();
    }, [])

    return (
        <div>
            <table className='table'>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Fecha</th>
                        <th>Total</th>
                        <th>Detalles</th>
                    </tr>
                </thead>
                <tbody>
                    {loading ?
                        orders.map((x) => {
                            return (
                                <tr key={x.id}>
                                    <td>{x.id}</td>
                                    <td>{x.date}</td>
                                    <td>{x.total}</td>
                                </tr>
                            )
                        })
                        :
                        <tr>
                            <td>Cargando...</td>
                        </tr>
                    }


                </tbody>
            </table>
        </div>
    )
}
