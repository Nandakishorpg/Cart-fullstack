import React, { useState } from 'react'
import Nav from './Nav'
import './register.css'
import axios from 'axios';
import { Button } from '@mui/material'
// import { useEffect } from 'react';




export default function Register() {
    const [reg, setReg] = useState([])
    // const [data, setData] = useState([])

    const getval = ((event) => {
        const name = event.target.name;
        const value = event.target.value;
        setReg({ ...reg, [name]: value })
        console.log(reg);

    });

    // useEffect(() => {
    //     fetch('http://localhost:5000/user/users').then((hhh)=>{
    //      setData(hhh);
    //      })
        

    // }, [])
    // console.log("data====>",data);

    const submit = (event) => {
        event.preventDefault();
        console.log(reg);

        const headers = {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',

        }

        axios.post("http://localhost:5000/register", reg, headers).then((reg) => {

            console.log(reg);


        }
        )
    };





    return (
        <div>

            <Nav />

            <div className="container">

                <div class="login-box">
                    <h2>Sign up</h2>
                    <form onSubmit={submit}>
                        <div class="user-box">
                            <input type="text" name="name" required="" onChange={getval} />
                            <label>Name</label>
                        </div>
                        <div class="user-box">
                            <input type="text" name="email" required="" onChange={getval} />
                            <label>Email</label>
                        </div>
                        <div class="user-box">
                            <input type="text" name="phoneno" required="" onChange={getval} />
                            <label>Phone No</label>
                        </div>
                        <div class="user-box">
                            <input type="text" name="address" required="" onChange={getval} />
                            <label>Address</label>
                        </div>
                        <div class="user-box">
                            <input type="text" name="username" required="" onChange={getval} />
                            <label>Username</label>
                        </div>
                        <div class="user-box">
                            <input type="password" onChange={getval} name="password" required="" />
                            <label>Password</label>
                        </div>
                        {/* <a href="#">
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            Submit

                        </a> */}
                        {/* <Input  type='submit' className='subs'> <span className='sub'>submit</span> </Input> */}

                        <Button variant='outlined' type='submit'>Submit</Button>




                    </form>

                </div>

            </div>
        </div>
    )
}

