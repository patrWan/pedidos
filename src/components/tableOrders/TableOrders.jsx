import React, { useEffect, useState, useContext } from 'react'

import { db } from '../../firebase/firebaseConfig';
import { collection, getDocs, query, where  } from "firebase/firestore";

import UserContext from '../../context/user/UserContext';

import moment from 'moment';

export default function TableOrders() {

    const { userFrom } = useContext(UserContext);

    const [orders, setOrders] = useState([]);
    const [loading, setLoading] = useState(false);

    async function getOrders() {

        const q = query(collection(db, "orders"), where("userId", "==", userFrom.uid));

        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
            console.log(doc.data());

            var order = doc.data();
            order.id = doc.id;

            setOrders(orders => ([...orders, order]));
            
        });
        setLoading(true);
        console.log(orders);
    }

    useEffect(() => {
        getOrders();
        console.log();
    }, [])

    return (
        <div>
            {orders.length}
            <table className='table'>
                <thead>
                    <tr>
                        <th>Numero de orden</th>
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
                                    <td>XXXXXXXX</td>
                                    <td>{moment(x.date).format("DD-MM-yyyy , hh:mm")}</td>
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
