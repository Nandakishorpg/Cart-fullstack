import axios from 'axios';
import React from 'react'
import { useState } from 'react';
import './addproduct.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from "react-router-dom";
import Admnav from '../admnav/Admnav';




export default function Addproduct() {

    const [product, Setproduct] = useState([])
    const [file, SetFile] = useState("")
    

    const changeProduct = ((event) => {
        const name = event.target.name;
        const value = event.target.value;
        Setproduct({ ...product, [name]: value })
        

        console.log(product);
        console.log(file);


    })
 

    const addProduct = (event) => {
        event.preventDefault()
        console.log(product)
        if (file) {

            let data = new FormData()
            const filename =file.name
            data.append("name",filename)
            data.append("file",file)
            console.log(data);
            axios.post("http://localhost:5000/product/upload",data)

        }
        toast("Product added successfully")



        const headers = {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',

        }

        axios.post("http://localhost:5000/product", product, headers).then((products) => {

            console.log(products);


        })



         

       




    }



    return (
        <div className='addP'>
            <Admnav></Admnav>
            <div className="container">
                <form className='formClass' onSubmit={addProduct}>

                    <div class="form-group">
                        <input type="text" name='productName' className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="productName" onChange={changeProduct} />

                    </div>
                    <div class="form-group">

                        <input type="text" name='price' class="form-control" id="exampleInputPassword1" placeholder="Price" onChange={changeProduct} />

                    </div>
                    <div class="form-group">

                        <input type="text" name='type' class="form-control" id="exampleInputPassword1" placeholder="Product Type" onChange={changeProduct} />

                    </div>
                    <div class="form-group">

                        <input type="text" name='quantity' class="form-control" id="exampleInputPassword1" placeholder="quantity" onChange={changeProduct} />

                    </div>
                    <div class="form-group">

                        <input type="text" name='description' class="form-control" id="exampleInputPassword1" placeholder="description" onChange={changeProduct} />

                    </div>
                    <div class="form-group">

                        <input type="file" name='image' class="form-control" id="exampleInputPassword1" placeholder="choose image" onChange={(e) => { SetFile(e.target.files[0]); Setproduct({ ...product, image: e.target.files[0].name }) }} />

                    </div>


                    <button type="submit" class="btn btn-primary">Submit</button>

                </form>


                <Link className='nav-link' padding={1} to="/view" underline='none'><span className='linkSpan'>ViewProducts</span>
                </Link>


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


        </div>
    )
}
