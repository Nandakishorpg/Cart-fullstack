import React from 'react'
import './newcart.css'
import { useState, useEffect } from 'react'
import axios from 'axios';
import Nav from './Nav';
import { Button } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import IconButton from '@mui/material/IconButton';




export default function Newcart() {

  const [cart, setCart] = useState([])
  const [total, setTotal] = useState([])
  // const [rid, setRid] = useState([])






  useEffect(() => {



    const userId = JSON.parse(localStorage.getItem("userDetails"))
    console.log(userId?.userid)
    axios.get(`http://localhost:5000/cart/cartdata/${userId?.userid}`).then((response) => {


      console.log(response.data.data);

      setCart(response.data.data)

    })

  }, [])

  useEffect(() => {
    let sum = 0
    cart.forEach(price => {

      sum += price.count * price.price


      setTotal(sum)
      console.log(total)
      // window.location.reload()

    })
  }, [cart])


  const remove = (id) => {

    console.log(id);

    // const productId =

    axios.get(`http://localhost:5000/cart/cartdatas/${id}`).then((response) => {

      console.log(response);


    })


  }



  const removeUser = () => {

    const user = JSON.parse(localStorage.getItem("userDetails"))
    console.log(user.userid)
    const userId = user.userid
    console.log(userId);


    axios.get(`http://localhost:5000/cart/cartdatass/${userId}`).then((response) => {

      console.log(response);


    })

  }
  useEffect(() => {

    console.log(cart);




  }, [])


  const increase = (id) => {

    console.log("increase", id);
    axios.get(`http://localhost:5000/cart/increase/${id}`).then((response) => {

      console.log(response);
      window.location.reload()

    })
  }
  const decrease = (id) => {

    console.log("decrease", id);
    axios.get(`http://localhost:5000/cart/decrease/${id}`).then((response) => {

      console.log(response);
      window.location.reload()



    })
  }

  const checkout = () => {
    const headers = {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',

    }
    cart.map((datas) => (

      axios.post("http://localhost:5000/order", datas, headers).then((order => {

        console.log("order", order);

      }))
    ))
    toast("Product will be delivered soon")



  }


  const cartData = () => {






    return cart.map((value) => (



      <div class="Cart-Items">
        <div class="image-box">
          <img alt='img' src={value.image} style={{ height: "110px", maxWidth: '130px', borderRadius: '5px' }} />
        </div>
        <div class="about">
          <h3 class="title">


            {value.productName}
          </h3>
          <h4 class="subtitle">Quantity:{value.count}


            <IconButton onClick={() => { increase(value._id) }} color="success">
              <AddIcon></AddIcon>
            </IconButton>
            <IconButton onClick={() => { decrease(value._id) }} color="success">

              <RemoveIcon />
            </IconButton>

          </h4>
        </div>

        <div className="productType">
          {value.type}
        </div>

        <div class="prices">
          <div class="amount">Rs:
            {value.count * value.price}
          </div>
          <div class="remove"><u>
            <Button onClick={() => { remove(value._id) }}>Remove</Button>
          </u></div>
          <hr />
        </div>
      </div>

    ))
  }



  return (

    <div className="div">

      <Nav />

      <div className='cart-container'>



        <div class="Header">

          <h3 class="Heading">Shopping Cart</h3>
          <h5 class="Action">
            <Button onClick={removeUser}> Remove all
            </Button>
          </h5>
        </div>

        {cartData()}

        <hr />
        <div class="checkout">
          <div class="total">
            <div>
              <div class="Subtotal"> Total : {total}</div>
              {/* <div class="items">2 items</div> */}
            </div>
            <div class="total-amount"></div>
          </div>
          <button onClick={checkout} class="button">Checkout</button>
        </div>



      </div >
      <ToastContainer>position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      </ToastContainer>
    </div>
  )
}
