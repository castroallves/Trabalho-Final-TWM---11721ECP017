import React from 'react';
import Root from '../data/Root';
import ServicesList from '../../pages/Services';
import { Routes, Route, Link } from "react-router-dom";
import Img1 from '/home/pedro/TWM/React/Trabalho Final pt.1/trabfinalpt1/src/components/utils/carousel_img/desf1.jpg';
import Img2 from '/home/pedro/TWM/React/Trabalho Final pt.1/trabfinalpt1/src/components/utils/carousel_img/desf2.jpg';
import Img3 from '/home/pedro/TWM/React/Trabalho Final pt.1/trabfinalpt1/src/components/utils/carousel_img/desf3.jpg';
import Carousel from 'react-bootstrap/Carousel';
import "/home/pedro/TWM/React/Trabalho Final pt.1/trabfinalpt1/src/components/css/interfaces.css"


export default function CarouselHome()
{
  return(

<div className='homecarousel'>
        <Carousel fade>
          
        
          <Carousel.Item>
          <Link to="/servs">
            <img
              className="krs"
              src={Img1}
              alt="First slide"
            /></Link>
           
            <Carousel.Caption>
              <h3>
              Seguro Habitacional
              </h3>
              <p>
              O cuidado que sua família merece.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
          
          
          <Carousel.Item>
          <Link to="/servs">
            <img
              className="krs"
              src={Img2}
              alt="Second slide"
            />
            </Link>
            <Carousel.Caption>
              <h3>Seguro Auto</h3>
              <p>Seu veículo com total proteção.</p>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
          <Link to="/servs">
            <img
              className="krs"
              src={Img3}
              alt="Third slide"
            />
            </Link>
    
            <Carousel.Caption>
              <h3>Seguros para Contratos e muito mais!</h3>
              <p>
                A _Hit Happens é líder em seguros, confira nossos serviços!
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
    <Routes>

      <Route path="/" element={<Root/>} />
      <Route path="/servs" element={<ServicesList/>} />
    
      </Routes>
        </div>);
}

