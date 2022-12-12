import React from 'react'
import { Link } from "react-router-dom";
import './nav.css';
import { useState, useEffect } from 'react'
import { Button } from '@mui/material'




export default function Nav() {

    const [cart, setCart] = useState([])


    useEffect(() => {



        const userId = JSON.parse(localStorage.getItem("userDetails"))
        console.log(userId.userid)

        setCart(userId.userid)







    }, [])


    const clear =()=>{
        const clears = JSON.parse(localStorage.clear("userDetails"))

        console.log(clears);

    }
    console.log(cart);


    return (
        <div className='navContainer'>





            <nav className="navbar navbar-expand-lg navbar-dark bg-dark static-top" id='vf'>
                <div class="container">
                    {/* <a class="navbar-brand" href="#"> */}
                    <img src="assets/images/header-logo.png" className='logoHeader' alt=""></img>
                    {/* </a> */}
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarResponsive">
                        <ul class="navbar-nav ml-auto" >


                            <li class="nav-item">

                                <Link className='nav-link' padding={1} to="/" underline='none'><span className='linkSpan'>Home</span>
                                </Link>


                            </li>
                            <li class="nav-item">

                                <Link className='nav-link' padding={1} to="/register" underline='none'><span className='linkSpan'>Register</span>
                                </Link>


                            </li>
                            <li class="nav-item">

                                <Link className='nav-link' padding={1} to="/login" underline='none'><span className='linkSpan'>Login</span>
                                </Link>


                            </li>
                           
                            <li class="nav-item">

                                <Link className='nav-link' padding={1} to="/productview" underline='none'><span className='linkSpan'>ProductView</span>
                                </Link>


                            </li>
                            <li class="nav-item">
                                <Link className='nav-link' padding={1} to="/shopcart" underline='none'><span className='linkSpan'>Cart</span>
                                </Link>

                            </li>

                            {cart?.length !=0 ?

                                <li class="nav-item">
                                    <Link className='nav-link' padding={1} to="/login" underline='none'><span className='linkSpan'><Button style={{color:'grey',textDecorationStyle:'none'}} className='logout' onClick={clear}>LogOut</Button></span>
                                    </Link>

                                </li> : ""}
                                

                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}
