import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

const defaultProps = {
    center: {
      lat: 10.99835602,
      lng: 77.01502627
    },
    zoom: 11
  };

const mapStyle = [
   { width:'100%' ,
    height:'450px',
    border:0,
    allowFullScreen:'',
    loading:'lazy',
    referrerPolicy:'no-referrer-when-downgrade'
}
]
class Googlemap extends Component {
    render(){
        return(   
            
            <Container className="py-5">
            <Row>
                <Col>
                <div  className="d-none" style={{ height: '10vh', width: '100%' }}>
                <GoogleMapReact 
    bootstrapURLKeys={{ key: "" }}
    defaultCenter={defaultProps.center}
    defaultZoom={defaultProps.zoom}
  >
    <AnyReactComponent
      lat={59.955413}
      lng={30.337844}
      text="My Marker"
    />
  </GoogleMapReact>
  </div>
   
  <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7568.247630354424!2d73.891458!3d18.47805!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x7e99cb6a012a5908!2sBICAds%20Digital%20Marketing%20Agency%20%7C%20Website%20Development%20Company%20in%20Pune.%20(Kondhwa)!5e0!3m2!1sen!2sin!4v1665840518395!5m2!1sen!2sin" allowFullScreen=''loading='lazy' referrerPolicy='no-referrer-when-downgrade' style={{ height: '50vh', width: '100%'  }}/>

                </Col>
            </Row>
        </Container>  
        )
    }
}

export default Googlemap;