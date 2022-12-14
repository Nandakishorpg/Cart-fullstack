import React from 'react'
import './home.css'
import { Link } from "react-router-dom";
import Nav from './Nav'



export default function Home() {

  return (
    <div>
      


      <Nav></Nav>
      <div className="container">


        <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
          <ol class="carousel-indicators">
            <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
          </ol>
          <div class="carousel-inner">
            <div class="carousel-item active">
              <div className='displayText'>We Selling The Best</div>
              <img class="d-block w-100" src="assets/images/banner-bg.jpg" alt="First slide" />

            </div>
            <div class="carousel-item">
              <div className='displayText'>We Selling The Best</div>
              <img class="d-block w-100" src="assets/images/bg2.jpg" alt="Second slide" />
            </div>
            <div class="carousel-item">
              <div className='displayText'>We Selling The Best</div>
              <img class="d-block w-100" src="assets/images/bgImage.jpg" alt="Third slide" />
            </div>
          </div>
          <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
          </a>
          <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
          </a>
        </div>














        <div className="featured-items">
          <div class="container">
            <div className="row">
              <div className="col-md-12">
                <div className="section-heading">
                  <hr />
                  <Link className='nav-link' underline='none' to={'/products'}><h2 id='ourProducts'>Our Products</h2></Link>

                  <span className='dealText'> DEAL OF THE DAY </span>
                </div>
              </div>




              {/* <div className="featured-item">

                  <img className='imageFeatured' src="assets/images/item-01.jpg" alt="Item 1"></img>
                  <h4>Jeans</h4>
                  <h6>$10.00</h6>
              </div>
              <div className="featured-item">

                  <img className='imageFeatured' src="assets/images/product-03.jpg" alt="Item 1"></img>
                  <h5>Jackets</h5>
                  <h6>$15.00</h6>
              </div>
              <div className="featured-item">

              

                  <img className='imageFeatured' src="assets/images/item-01.jpg" alt="Item 1"></img>
                  <h5>Pants</h5>
                  <h6>$10.00</h6>
              </div> */}









            </div>
          </div>
        </div>



      </div>
      <div className="container">

        <div className="flex-container">

          <div className="box1">
             <img src="assets/images/item-06.jpg" alt="" />
             <span style={{Color:'blue'}}>Shoes</span>
          
          </div>
          <div className="box2"></div>
          <div className="box3"></div>


        </div>
      </div>




    </div >
  )
}
