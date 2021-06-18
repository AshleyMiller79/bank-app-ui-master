import React from "react";
import Banner1 from "../images/banner1.png";
import { Carousel } from "react-bootstrap";
import Image1 from "../images/image1.jpg";
import Image2 from "../images/images.jpg";
import "./Banner.css";
import "bootstrap/dist/css/bootstrap.min.css";

const Banner = () => {
  return (
    <div>
      <header class="container-fluid">
        <div
          id="carouselExampleDark"
          class="carousel carousel-dark slide"
          data-bs-ride="carousel"
        >
          <div class="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleDark"
              data-bs-slide-to="0"
              class="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleDark"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleDark"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>{" "}
          </div>

          <Carousel fade pause="hover">
            <Carousel.Item interval={2000}>
              <img className="d-block w-100" src={Banner1} alt="First slide" />{" "}
            </Carousel.Item>
            <Carousel.Item interval={2000}>
              <img className="d-block w-100" src={Image1} alt="Second slide" />
            </Carousel.Item>
            <Carousel.Item interval={2000}>
              <img className="d-block w-100" src={Image2} alt="Third slide" />
              <Carousel.Caption className="dom">
                <h3>Connecting all your banking needs</h3>

                <a
                  href="https://alister-bank.cmsmasters.net/services/ "
                  className="btn btn-danger"
                >
                  Find out more
                </a>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>
      </header>
    </div>
  );
};

export default Banner;
