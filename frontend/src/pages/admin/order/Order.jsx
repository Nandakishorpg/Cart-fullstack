import axios from 'axios';
import React from 'react';
import { useEffect, useState } from 'react';
import Admnav from '../admnav/Admnav';



export default function Order() {
  const [orders, setOrders] = useState([])

  useEffect(() => {
    axios.get("http://localhost:5000/order/view").then((data) => {
      console.log(JSON.stringify(data.data.data));
      setOrders(data.data.data)
    })


  }, [])
  console.log("order Data",orders);
  // console.log("hehhehe",JSON.stringify(orders.productName));



  return (

    <div>
      <Admnav />

      <div className="container">

        <table className="table">
          <thead>
            <tr>
              <th scope="col">Username</th>
              <th scope="col">UserID</th>
              <th scope="col">Product</th>
              <th scope="col">Quantity</th>
              <th scope="col">Price</th>
            </tr>
          </thead>
          {orders.map((products) => (

          <tbody>
            <tr>
              <td>{products.userName}</td>
              <td>{products.userId}</td>
              <td>{products.productName}</td>
              <td>{products.quantity}</td>
              <td>{products.price}</td>
            </tr>

          </tbody>
            ))}
        </table>
    

      </div>
    </div>
  )
}
