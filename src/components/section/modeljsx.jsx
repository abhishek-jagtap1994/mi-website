import React, { Component } from 'react';
import Container  from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image'

class Modeljsx extends Component {

    render(){
        return(
            <div>
                <Container className=" py-4  ">
                    
                    <h1 className=" pb-3  mt-0">About Us</h1>
                    <Row >
                        <Col lg="6">
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi numquam laudantium laboriosam at porro officia, ipsam deleniti illo, explicabo doloribus repellendus cumque magnam non hic natus ratione nobis quas accusantium.</p>   
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi numquam laudantium laboriosam at porro officia, ipsam deleniti illo, explicabo doloribus repellendus cumque magnam non hic natus ratione nobis quas accusantium.</p>  
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi numquam laudantium laboriosam at porro officia, ipsam deleniti illo, explicabo doloribus repellendus cumque magnam non hic natus ratione nobis quas accusantium.</p>  
                                             </Col>
                       <Col lg="6">
                       <Image src="/assets/images/hotel/bannar_04.jpg" alt="Green county" fluid  rounded/>
                                             </Col>
                    </Row>
                </Container>
            </div>
        );
    }

}

export default Modeljsx;