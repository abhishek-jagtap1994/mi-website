import React, { Component ,useState, useEffect }  from 'react';
import props from 'prop-types';

import Footer from '../components/layout/footer';
import Header from '../components/layout/header';
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
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';

//import ContactMainForm from 'section/contact_main_form';
 
const Home = () => {

    // componentDidMount(){
    //     document.title = "MISchool | Best pre school in hadapsar"
    //   }

    const [displayPopUp, setDisplayPopUp] = useState(true);

    // when pop-up is closed this function triggers
    const closePopUp = () => {
      // setting key "seenPopUp" with value true into localStorage
      localStorage.setItem("seenPopUp", true);
      // setting state to false to not display pop-up
      setDisplayPopUp(false);
    };
  
    // the useEffect to trigger on first render and check if in the localStorage we already have data about user seen and closed the pop-up
    useEffect(() => {
      // getting value of "seenPopUp" key from localStorage
      let returningUser = localStorage.getItem("seenPopUp");
      // if it's not there, for a new user, it will be null
      // if it's there it will be boolean true
      // setting the opposite to state, false for returning user, true for a new user
      //setDisplayPopUp(!returningUser);
      setDisplayPopUp(returningUser);

    }, []);


    return(
        <div>
 
             <HelmetProvider>
             <meta charSet="utf-8" />
                <title> MISchool | Best pre school in hadapsar</title>
	<meta name="description" content="MISchool | Best pre school in hadapsar" />
	<link rel="canonical" href="https://mi-school.org/?PSE" />   
   </HelmetProvider>
   
        <div className='MainTopHome'> 
        <Header  />  
        </div>
        <HomeTop /> 

       <AboutUs/>
        {/* <Slider /> 
        <BookingForm/>
        <AboutUs/>
        {/* <AboutHome  Name="Abhi" Surname="Jagtap" />     */}
        {/* <Goal isGoal = {true}/> */}
        <Owlslider/>
        <WhyHire/>
        <Portfolio/>

 <div id='contact' className='py-5'>

<Container>
    <Row>

    
<Col lg={{span:6 , offset:3}} >

<h1 className='mainTextH1'> Contact Us </h1>

 <ContactMainForm/>

</Col>
 

</Row>
</Container>
</div>
         <Footer/>


         <Modal show={displayPopUp} onHide={closePopUp}>
         
         <Modal.Body><Image src="assets/images/mi-web/Innovera-WA.jpg" fluid />
         <h4 className='text-center mt-3'><a href="https://quiz.mi-school.org/index.php?bid=9"  target="_blank">Click here to join!!</a></h4>
         </Modal.Body>
         <Modal.Footer>
           <Button variant="secondary" onClick={closePopUp}>
             Close
           </Button>
           
         </Modal.Footer>
       </Modal>
        </div>
    );
 
}
export default Home;