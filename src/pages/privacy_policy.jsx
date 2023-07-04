import React, { Component ,useEffect }  from 'react';
import props from 'prop-types';
import Navbar from 'react-bootstrap/Navbar';
 import config from '../constant';
import { Link } from "react-scroll";
import Footer from '../components/layout/footer';
import Header from '../components/layout/header';
import Nav from 'react-bootstrap/Nav';
import Image from 'react-bootstrap/Image';
import AboutUs from '../components/section/about_us';
 import HomeTop from '../components/section/hometop';
import OurServices from '../components/section/our_services';
import WhyHire from '../components/section/whyHire';
import WhyConsistant from '../components/section/why_consistent';
import Portfolio from '../components/section/portfolio';
import BlogDiv from '../components/section/blog';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
 import { Helmet, HelmetProvider } from "react-helmet-async";
import Owlslider from '../components/section/owlslider';
import ContactMainForm from '../components/section/contact_main_form';
import { Container } from 'react-bootstrap';

//import ContactMainForm from 'section/contact_main_form';
 
 class Privacy_Policy extends Component {

    // componentDidMount(){
    //     document.title = "MISchool | Best pre school in hadapsar"
    //   }

    render(){

    return(
        <div>
 
             <HelmetProvider>
             <meta charSet="utf-8" />
                <title> MISchool | Best pre school in hadapsar</title>
	<meta name="description" content="MISchool | Best pre school in hadapsar" />
	<link rel="canonical" href="https://mi-school.org/?PSE" />   
   </HelmetProvider>
   
   <Navbar collapseOnSelect expand="lg" fixed="top" id='navB' className='justify-content-center mx-auto'>
      <Container >
        <Navbar.Brand  > 
        <a    href="/"  
            ><Image src="/assets/images/mi-web/MI-logo.jpg" alt={config.SITE_NAME}  fluid/>  </a>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="  justify-content-center">
             
              
          </Nav>
          <Nav className=' '>
         
          {/* <Link    to="about" >About Us</Link>
            <Link    to="whyus" >Why Us</Link>
           <Link    to="usp" >USP</Link>
         <Link    to="contact" >Contact</Link> */}
         <a href='/' target='_blank'>Home </a>

<a href='https://innoveraschool.com' target='_blank'>Parent School <small>( CBSE board )</small></a>
{/* <NavLink to="/privacy_policy"  activeclassname="active">Privacy Policy</NavLink>      */}
<a href='/privacy_policy' target='_blank'>Privacy Policy</a>

          </Nav>
        </Navbar.Collapse>
      </Container>


    </Navbar>  
        
 
<Container className='my-5' >
    <Row className='my-5'>

     

 
<Col lg="12" className='my-5'>
<h1 className='mainTextH1' >    <br></br>
 Privacy Policy </h1>
<p>We respect your privacy and are committed to protecting your personal information. Any personal information you provide on this lead form will be used solely for the purpose of contacting you regarding franchise opportunities with our preschool franchise. We will not share or sell your personal information to third parties. Your information will be kept confidential and secure.</p>

<p>By submitting this lead form, you consent to us collecting and using your personal information for the purpose of contacting you regarding franchise opportunities. If you have any questions or concerns about our privacy policy.</p>

</Col>
</Row>
</Container>
          <Footer/>
        </div>
    );
} 
}
export default Privacy_Policy;