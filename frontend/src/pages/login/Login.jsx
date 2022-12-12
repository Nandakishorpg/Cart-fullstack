import React, { useState } from 'react'
import { FormControl, TextField, InputLabel, Input } from '@material-ui/core';
import './login.css'
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom'



export default function Login() {
    const navigate = useNavigate()

    const [login, Setlogin] = useState({})
    const setChangeLogin = (event) => {

        const name = event.target.name;
        const value = event.target.value;
        Setlogin({ ...login, [name]: value })
        console.log(login);



    }

    const setSubmitLogin = (event) => {
        event.preventDefault()
        console.log(login);

        axios.post("http://localhost:5000/login/log", login).then((re) => {
            console.log(re);

            console.log('hii');

            const data = {
                name: re.data.name,
                userid: re.data.registerid,
                role: re.data.role
            }

            localStorage.setItem('userDetails', JSON.stringify(data))

            console.log("adm",data);
            if (data.role==0){
                navigate('/admhome')

            }else{
                navigate('/home')

            }
           
            

            // navigate('/home')



        }).catch((err) => {

            console.log(err);
            toast(err.response.data.message)

        })


        axios.get("http://localhost:5000/login/log").then((ad) =>{

        console.log("adm",ad);

        
        })

    }

    return (
        <div>


            <div className="loginContainer">





                <InputLabel ><span> <b>Login Here</b> </span> </InputLabel>





                <FormControl>
                    <form onSubmit={setSubmitLogin}>


                        <TextField className="standard-basic" label="username" name='username' variant="outlined" margin='normal' onChange={setChangeLogin}



                        />

                        <TextField className="standard-basic" name='password' label="Password" type='password' variant="outlined" margin='normal' onChange={setChangeLogin}
                        />

                        <div className="ff">


                            <Input type='submit' style={{ textDecoration: 'none' }}>submit</Input>

                        </div>

                    </form>
                </FormControl>
            </div>


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
