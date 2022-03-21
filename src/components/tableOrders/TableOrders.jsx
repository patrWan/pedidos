import React, { useEffect, useState } from 'react'

import { db } from '../../firebase/firebaseConfig';
import { collection, getDocs } from "firebase/firestore";

export default function TableOrders() {

    const [orders, setOrders] = useState([]);
    const [loading, setLoading] = useState(false);

    async function getOrders() {

        const querySnapshot = await getDocs(collection(db, "orders"));
        querySnapshot.forEach((doc) => {
            console.log(doc.data());
            setOrders(orders => ([...orders, doc.data()]));
            
        });
        setLoading(true);
        console.log(orders);
    }

    useEffect(() => {
        getOrders();
    }, [])

    return (
        <div>
            {orders.length}
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
                                <tr key={x.uid}>
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
