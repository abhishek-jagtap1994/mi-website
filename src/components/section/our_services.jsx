import React, { Component } from 'react';
import Container  from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image'
import config from '../../constant';
import { NavLink } from 'react-router-dom';
class OurServices extends Component {

    render(){
        return(
            <div className=" ourServices animateBtn ">
                <Container >
                     <Row >
                        <Col lg="6" className='pt-4  '>
                        <h1 className='mainTextH1'>   Our services </h1>
                        <h4>Sky Rocket Your Business With Our Digital Marketing Services
</h4>
<p>The most significant element for any and every enterprise is to be where their customers are, as it builds trust, loyalty, and stimulates new sales. With ever-improving technology, individuals from diverse fields are able to connect via a variety of online platforms.</p>

<p>
With Right Digital Marketing, you can connect with the right target audience. We provide a wide range of services to help you establish and maintain your company online.

</p>

<NavLink  to="/our-services"   activeclassname="active"><button type="button" class="btn btn-primary btn-md  draw ">View All Services</button></NavLink>
                                          </Col>
                       <Col lg="6" className='pt-5 serviceIcons'>

                        <Row>
                            <Col lg='3'>
                              <Image src="/assets/images/bicads/OurService-icon-1.png" alt={config.SITE_NAME} fluid  rounded/>
                                </Col>
                            <Col lg='9'>
                                <h4>Website Design & Development</h4>
                                <p>With our thoughtful designs for CRM, websites and mobile applications, we help your business with centrally managed database, build & maintain online presence and keep the customers engaged. 
</p>
                            </Col>
                        </Row>
                        <Row>
                            <Col lg='3'>   
                                                <Image src="/assets/images/bicads/OurService-icon-2.png" alt={config.SITE_NAME} fluid  rounded/>
</Col>
                            <Col lg='9'>
                                <h4>Digital Marketing</h4>
                                <p>We offer wide range of services like SEO, optimizing your social media and performance marketing (PPC) on all platforms that will boost your business for online sales.</p>
                            </Col>
                        </Row>
                        <Row>
                            <Col lg='3'>                       <Image src="/assets/images/bicads/OurService-icon-3.png" alt={config.SITE_NAME} fluid  rounded/>
</Col>
                            <Col lg='9'>
                            <h4>Wikipedia & PR</h4>
                                <p>Wikipedia & digital PR will help your business build reputation. Reputation management is essential for any company as it helps maintain brand equity, keep customers happy, and retain team trust.</p>
                            </Col>
                        </Row>
                                              </Col>
                    </Row>
                </Container>
            </div>
        );
    }

}

export default OurServices;