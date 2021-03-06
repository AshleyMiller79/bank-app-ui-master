import React from "react";
import Istanbul from "../images/istanbul.jpg";
import Antep from "../images/antep.jpeg";
import { Carousel } from "react-bootstrap";
import Pamukkale from "../images/pamukkale.jpg";
import Kapadokya from "../images/kapa.jpg";
import "./Banner.css";
import "bootstrap/dist/css/bootstrap.min.css";
const Banner = () => {
  return (
    <div>
      <header class="container-fluid">
        <div
          id="carouselExampleDark"
          class="carousel carousel-light slide"
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
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleDark"
              data-bs-slide-to="3"
              aria-label="Slide 4"
            ></button>
          </div>

          <Carousel fade pause="hover">
            <Carousel.Item interval={2000}>
              <img className="d-block w-100" src={Istanbul} alt="First slide" />
              <Carousel.Caption className="ist">
                <h3>
                  Internet banking for banking transactions wherever you are
                </h3>

                <a
                  className="btn btn-dark rounded-pill border border-light"
                  href="https://alister-bank.cmsmasters.net/services/ "
                >
                  Find out more
                </a>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={2000}>
              <img className="d-block w-100" src={Antep} alt="Second slide" />{" "}
              <Carousel.Caption className="ant">
                <h3>To Add value for your money</h3>

                <a
                  className="btn btn-light rounded-pill border border-warning"
                  href="https://alister-bank.cmsmasters.net/services/ "
                >
                  Find out more
                </a>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={2000}>
              <img
                className="d-block w-100"
                src={Pamukkale}
                alt="Third slide"
              />
              <Carousel.Caption className="pam">
                <h3>Summer is here vacation loan to see new places</h3>

                <a
                  className="btn btn-danger rounded-pill border border-light"
                  href="https://alister-bank.cmsmasters.net/services/ "
                >
                  Find out more
                </a>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={2000}>
              <img
                className="d-block w-100"
                src={Kapadokya}
                alt="Fourth slide"
              />
              <Carousel.Caption className="kap">
                <h3>Individual retirement to be comfortable in retirement</h3>
                <a
                  className="btn btn-primary rounded-pill border border-light"
                  href="https://alister-bank.cmsmasters.net/services/ "
                >
                  {" "}
                  Find out more{" "}
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
