import React, { Component } from 'react';
import Container  from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image'
import config from '../../constant';

class WhyConsistant extends Component {

    render(){
        return(
            <div className='whyConsistent'>
                <Container className=" py-5  ">

                     <Row >
                        <Col lg="6">
                        <h1 className='mainTextH1'> Why We Are Consistent! </h1>

                        <p className='pt-3'>We follow DMAIC process to deliver good results on your marketing investments and be consistent.

</p>  
                                             </Col>
                       <Col lg="6">
                       <Image src="/assets/images/bicads/why-we-are-constant.png" alt={config.SITE_NAME} fluid  rounded/>
                                             </Col>
                    </Row>
                </Container>
            </div>
        );
    }

}

export default WhyConsistant;