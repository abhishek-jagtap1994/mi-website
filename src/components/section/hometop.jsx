import React, { Component } from 'react';
import Container  from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image'
import config from '../../constant';
import { Button, Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { Link } from "react-scroll";

class HomeTop extends Component {

    render(){
        return(
            <div  className='topHome'  id='home'>
                <Container fluid className=" pb-4  ">

                    <div className='bannerHome' style={{ 
                backgroundImage: `url(/assets/images/mi-web/Banner_home.jpg)` 
              }}>

<Link    to="contact" spy={true} smooth={true} offset={-100} duration={100}
             activeclassname="active"> 
                   <Button className='btn btnYellow'>Admissions Open</Button>

               </Link>

              </div>
                     
                     
                </Container>
            </div>
        );
    }

}

export default HomeTop;