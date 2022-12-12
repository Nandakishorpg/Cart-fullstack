import React from 'react'
import { Button, Card, CardContent, CardMedia } from '@mui/material'
import { Link } from 'react-router-dom'
import Nav from './Nav'
import './products.css'
import { useState, useEffect } from 'react'
import axios from 'axios'






export default function ProductView() {

    const [viewProduct, setviewProduct] = useState([])


    useEffect(() => {


        axios.get('http://localhost:5000/productView').then((data) => {


            setviewProduct(data.data.data)


        })


    }, [])

    const moreDetails=(()=>{

        
    })

    const addCart = (id) => {

        const user = JSON.parse(localStorage.getItem("userDetails"))
        const data = {
            p_id: id,
            u_id: user.userid

        }
        console.log(user);
        console.log("cartData",data);
        axios.post('http://localhost:5000/cart', data).then((res) => {
            console.log(res);

        })


    }
    console.log(viewProduct);


    return (
        <div>
            <Nav></Nav>

            <div className="cardContainer">
                <div className="row" id='productsPage'>
                    {viewProduct.map((products) => (
                        <Card className='cardFirst' sx={{ maxWidth: 300 }}>
                            <Link to='/notebook'> <CardMedia className='cardPic'
                                component="img"
                                alt="..."
                                height="230"
                                image={products.image}
                            /> </Link>
                            <CardContent>

                                <span className='proName'>{products.productName}</span>
                            </CardContent>
                            <CardContent>

                                <span className='proName'>Rs:{products.price}</span>
                            </CardContent>
                         

                            <CardContent>
                                <span></span>


                            </CardContent>

                            <Button onClick={moreDetails}>More details</Button>


                            <p>
                            <Button onClick={() => { addCart(products._id) }}>Add Product</Button>

                            </p>
                            

                        </Card>
                    ))}

                </div>
            </div>



        </div>
    )
}
