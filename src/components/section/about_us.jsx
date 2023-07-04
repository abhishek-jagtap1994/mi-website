import React, { Component } from 'react';
import Container  from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image'
import config from '../../constant';
import { NavLink } from 'react-router-dom';

class AboutUs extends Component {

    render(){
        return(
            <div className=" AboutUs py-5 " id='about'>
                <Container  className=" py-5  ">
                <h1 className='mainTextH1 text-center'> About Us </h1>

                     <Row >
                        <Col lg="6">
                        <Image src="/assets/images/mi-web/About-us-image.png" alt={config.SITE_NAME} fluid  rounded/>
 
                                             </Col>
                       <Col lg="6"  className='py-5  ps-4 animateBtn'>
                       
                        <h4>A place where your child can grow and explore their multiple intelligence!</h4>
<p> At, Multiple Intelligence, we know that every child is a genius, and we celebrate them for who they are instead of trying to push them into what we want them to become. Every child at Multiple Intelligence receives a customised learning approach based on their strengths, needs, and skill level to keep them interested and satisfied. That is why it is one of the finest preschools in Pune.</p>
<p>We believe that every person has the ability to learn more. That's why we're working hard to change the world.
</p>

                                             </Col>
                    </Row>
                </Container>
            </div>
        );
    }

}

export default AboutUs;