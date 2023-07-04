import React ,{ Component } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image'

class AboutHome extends Component {
        render() {

    return(
        <div>
            <Container className="py-5 text-center">
                <h1 class="py-2">{this.props.Name} {this.props.Surname}</h1>
                <Row>
                    <Col sm="6" lg="4">  <Image src='assets/images/banner_1.jpg' alt="" fluid /> </Col>
                    <Col  sm="6" lg="4">   <Image src='assets/images/banner_2.jpg'  alt="" fluid />   </Col>
                    <Col  sm="6" lg="4">  <Image src='assets/images/banner_3.jpg' alt="" fluid /> </Col>
                </Row>
            </Container>
        </div>
    );
}
    }
export default AboutHome;