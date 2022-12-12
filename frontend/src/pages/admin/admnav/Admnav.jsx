import React from 'react';
import { Link } from 'react-router-dom';
import Button from '@mui/material'
import './admnav.css'



export default function Admnav() {
    return (
        <div>
            <div className='navContainer'>
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark static-top" id='vf'>
                    <div class="container">
                        <img src="assets/images/header-logo.png" className='logoHeader' alt=""></img>
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

                                    <Link className='nav-link' padding={1} to="/addproduct" underline='none'><span className='linkSpan'>Add Products</span>
                                    </Link>


                                </li>
                                <li class="nav-item">

                                    <Link className='nav-link' padding={1} to="/admproduct" underline='none'><span className='linkSpan'>Products</span>
                                    </Link>


                                </li>
                                <li class="nav-item">

                                    <Link className='nav-link' padding={1} to="/admorder" underline='none'><span className='linkSpan'>Order</span>
                                    </Link>


                                </li>
                                
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    )
}
