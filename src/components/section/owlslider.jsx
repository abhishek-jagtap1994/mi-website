import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import Image from 'react-bootstrap/Image'

import { images } from './service'; 

const options = {
    margin: 30,
    responsiveClass: true,
    nav: false,
    dots: false,
    autoplayTimeout	:1800,
    autoplay: true,
    navText: ['<img src="assets/images/hotel/Left-Arrow.png">', '<img src="assets/images/hotel/Right-Arrow.png">'],
    smartSpeed: 1000,
    responsive: {
        0: {
            items: 1,
        },
        400: {
            items: 1,
        },
        600: {
            items: 2,
        },
        700: {
            items: 3,
        },
        1000: {
            items: 4,

        }
    },
};
    class Owlslider extends Component {
    
    render() {
    return(
        <>
        <Container>
        <h1 className='mainTextH1 text-center pb-3'> 8 Roots </h1>

         </Container>
        <div className='AboutBg ' style={{ 
            backgroundImage: `url(/assets/images/mi-web/Background/Value-Slider-Green.png)` 
          }} >
        <Container className=" ">

            <Row className="justify-content-center text-center">
            {/* <Col xs lg="6">1 of 2</Col> */}
        {/* <OwlCarousel className='owl-theme'  {...options}> */}
        
        {images.map( (val , i) => (  
                       <Col xs="12" lg="4">
    
    <div className='item' key={i}>
    {/* <Image src={val.imgUrl} alt={`${val.imgCaption}`} fluid />    */}

<div className="productDiv" style={{ 
      backgroundImage: `url('/assets/images/mi-web/Value-Board.png')` 
    }} >
					        <div className="captionDiv">
						    <h3>{`${val.imgCaption}`} </h3>
                            <p>{`${val.imgDesc}`}</p>
 					     </div>
				         </div>
                         </div>
                         </Col>

                         )  )}

{/* </OwlCarousel> */}
</Row>
</Container>
</div>
</>
    );
}

}



export default Owlslider;