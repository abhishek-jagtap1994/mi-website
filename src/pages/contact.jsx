import React, { Component } from 'react';
import Header from '../components/layout/header';
import Contactform from '../components/section/contactform';
import Footer from '../components/layout/footer';
import Googlemap from '../components/section/googlemap';
import SubHeader from '../components/layout/subheader';
import config from '../constant';
import { Helmet, HelmetProvider } from "react-helmet-async";
import Container  from 'react-bootstrap/Container';

class Contact extends Component {

  
    // componentDidMount(){
    //     document.title = "Contact | Hotel Green County"
    //   }

    render(){
        return(
            <div>
                
             <HelmetProvider>
             <title>Contact | BICads Digital - Website Development &amp; Digital Marketing</title>
	<link rel="canonical" href="https://bicads.com/contact/" />
   </HelmetProvider>
            <Header/>  
            <SubHeader  Title='Contact' subtitle='Contact' BkImg='/assets/images/bicads/About-Us-B-1.jpg'/> 

             {/* ------------------------- intro------------------------------------------------- */}

        <div className='ServiceHeading '>
                <Container className=" pb-5   text-center">
                <h1 className='mainTextH1'>Contact</h1>

            <h2 className='px-5 '>Get in touch with us to see how our company can help you
grow your business online.
</h2>

                      
                </Container>
            </div>
        {/* -------------------------------------------------------------------------- */}
             {/* <CardSec/>     */}
             <Contactform/>
             <Googlemap/>
             <Footer/>
            </div>
        )
    }
}

export default Contact;