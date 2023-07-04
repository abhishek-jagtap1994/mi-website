import React, { Component ,  useEffect}  from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import { NavLink } from 'react-router-dom';
import config from '../../constant';
import { useState } from 'react';
import EnquiryForm from '../section/enquiryform';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

     const Footer = () => {

      const [isActive, setIsActive] = useState( );

  const handleClick = event => {
    // 👇️ toggle isActive state on click
    setIsActive(current => !current);
  };


  

     return(
      <>


        <div className='footerSection' id='footer'>
          {/* row-cols-4  */}
     <Container > 
     <footer className="row  py-3  ">
    <Col lg="2">
       
         
      <NavLink to="/"   activeclassname="active"><Image src="/assets/images/mi-web/MI-logo.jpg" alt={config.SITE_NAME}  fluid/>  <br></br></NavLink> 
     
    </Col>

    

    <Col lg="9">
       <Row>
        <Col lg='12'  className=' py-3'>
      <h5><b>Branches   </b></h5>
        
          
       <span> Gondhle nagar |
        Kawadipath |
        Takale Nagar |
        Manjari Greens |
       Phursungi |  Tukai Darshan | Sasane Nagar |
        Indira nagar - Nashik</span>
      
        </Col>


        
         </Row>


       <Row lg='12'>
        {/* <span><i className='fa fa-map-marker'></i>&nbsp;&nbsp;  Sr no 206, Hari Om Niwas, Road No-5, Tukai Darshan, Fursungi, Pune, Phursungi, Maharashtra, 412308   </span> */}
        <span className='pt-2'><i className='fa fa-map-marker'></i>&nbsp;&nbsp;  Anchor House, next to Kiran gas agency, Lullanagar, Kondhwa road, Pune, 411040  </span>

       
          </Row>


      

    </Col>
    <Col lg="1" className='text-center'>

<Row>&nbsp;</Row>
<ul className="nav">
<li> <a href="https://www.facebook.com/profile.php?id=100088243912927" target="_blank"><i class="fa fa-facebook"></i></a> </li>
<li> <a href="https://www.instagram.com/m.i_school_/" target="_blank"><i class="fa fa-instagram"></i></a></li>
</ul>
</Col>
     
 
    
     
     {/* <a href="https://api.whatsapp.com/send?phone=919082309192&amp;text=Hey BICads Digital, Greetings of the day! Need assistance with my Website / Digital Marketing!" class="float" target="_blank">

<i class="fa fa-whatsapp my-float"></i>

</a> */}
  </footer>
    </Container>



    <div id="art-side-form"  className={`art-side-form ${isActive ? 'open' : ''} `}   data-closed="1"  style={{display:'block'}}>
    <div className="close" data-toggle="#art-side-form" onClick={handleClick}> ×</div>
    <div id="art-side-form-tab" className="art-side-form-tab"   onClick={handleClick} >
        <div className="art-side-form-side-text">Franchise</div>
         
    </div>
    <div className="art-side-form-inner">
        <h3>Grow With Us</h3>
        <p>Please Fill The Form to Send Enquiry</p>
                            
<div className="respond form-wrapper">
    
   <EnquiryForm/>

    
 </div>    </div>
</div>

 
        </div>

        </>
    );

}

export default Footer;
