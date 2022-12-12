import axios from 'axios'
import React from 'react'
import { useState, useEffect } from 'react'
import { Button, Card, CardContent, CardMedia } from '@mui/material';
import { Link } from 'react-router-dom'
import './admproduct.css'


export default function Admproduct() {
    const [viewProduct, setviewProduct] = useState([])
    useEffect(() => {

        axios.get('http://localhost:5000/productView').then((data) => {


            setviewProduct(data.data.data)
            console.log(viewProduct);
        })

    }, [])
    const remove = (id) => {
        console.log("id", id);
        axios.get(`http://localhost:5000/productView/delete/${id}`).then((response) => {
            console.log("resp", response);
            window.location.reload()

        })


    }

    return (
        <div className='admProduct'>
            <div className="Container">
                <div className="row" id='productsPage'>
                    {viewProduct.map((products) => (
                        <Card className='cardFirst' sx={{ maxWidth: 300, maxHeight: 350 }}>
                            <Link to='/notebook'> <CardMedia className='cardPic'
                                component="img"
                                alt="..."
                                height="130"
                                image={products.image}
                            /> </Link>
                            <CardContent>

                                <span className='proName'>{products.productName}</span>
                            </CardContent>
                            <CardContent>

                                <span className='proName'>Rs:{products.price}</span>
                            </CardContent>


                            <CardContent>
                                <Button onClick={() => { remove(products._id) }}>Delete</Button>


                            </CardContent>





                        </Card>
                    ))}

                </div>
            </div>


        </div>

    )
}
