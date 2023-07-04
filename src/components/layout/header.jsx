import React, { Component }  from 'react';
 import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Image from 'react-bootstrap/Image'
import { NavLink } from 'react-router-dom';
import config from '../../constant';
import { Link } from "react-scroll";
import HomeTop from '../section/hometop';

   class Header extends Component {
    
    render(){
    return(
<>
        <Navbar collapseOnSelect expand="lg" fixed="top" id='navB' className='justify-content-center mx-auto'>
      <Container >
        <Navbar.Brand  > 
        <Link    to="home" spy={true} smooth={true} offset={0} duration={100}
            ><Image src="/assets/images/mi-web/MI-logo.jpg" alt={config.SITE_NAME}  fluid/>  </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="  justify-content-center">
             
              
          </Nav>
          <Nav className=' '>
         
         
          <Link    to="about" spy={true} smooth={true} offset={-30} duration={100}
             activeclassname="active">About Us</Link>
            <Link    to="whyus" spy={true} smooth={true} offset={-70} duration={100}
             activeclassname="active">Why Us</Link>

<Link    to="usp" spy={true} smooth={true} offset={-100} duration={100}
             activeclassname="active">USP</Link>

<Link    to="contact" spy={true} smooth={true} offset={-100} duration={100}
             activeclassname="active">Contact</Link>

<a href='https://innoveraschool.com' target='_blank'>Parent School <small>( CBSE board )</small></a>
{/* <NavLink to="/privacy_policy"  activeclassname="active">Privacy Policy</NavLink>      */}
<a href='/privacy_policy' target='_blank'>Privacy Policy</a>
<NavDropdown title="Login" id="basic-nav-dropdown"  renderMenuOnMount={true} align="end">

  <NavDropdown.Item href="https://login.mi-school.org/" target="_blank" > Center Login</NavDropdown.Item>
  <NavDropdown.Item href="https://login.mi-school.org/" target="_blank" >Admin Login </NavDropdown.Item>

 </NavDropdown> 
          </Nav>
        </Navbar.Collapse>
      </Container>


    </Navbar>
          </>
           );
}

  }
export default Header;
