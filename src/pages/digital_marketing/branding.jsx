import React, { Component ,useEffect }  from 'react';
import props from 'prop-types';
import Container  from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image'
 import { Helmet, HelmetProvider } from "react-helmet-async";
import SubHeader from '../../components/layout/subheader';
import config from '../../constant';
import Header from '../../components/layout/header';
import Footer from '../../components/layout/footer';
 
 class Branding extends Component {

    // componentDidMount(){
    //     document.title = "Digital Marketing Services &amp; Website Development | Pune | Mumbai "
    //   }

    render(){

    return(
        <div className='MainServiceDiv'>
 
             <HelmetProvider>
             <title>Branding Services In Pune and Mumbai</title>
	<meta name="description" content="Branding services is one of the firm&#039;s brands that can be developed and delivered in comprehensive solutions, logo creation and identity." />
	<link rel="canonical" href="https://bicads.com/branding-services" />
   </HelmetProvider>
   
           <Header/>
            <SubHeader  Title='Branding Services' subtitle='Branding Services' BkImg='/assets/images/bicads/Banner/Branding-Services.jpg'/>
        {/* ------------------------- intro------------------------------------------------- */}

        <div className='ServiceHeading '>
                <Container className=" pb-5   text-center">
                <h1 className='mainTextH1'> Branding Services</h1>

            <h2 className='px-5 '>We Will Help Your Brand Get The Recognition It Deserves</h2>

                      
                </Container>
            </div>
        {/* -------------------------------------------------------------------------- */}
       

            <div className='whyConsistent  ServiceBg'>
                <Container className=" my-4  ">

                     <Row >
                        <Col lg="6">
                            <div className='serviceSecond pt-5'>
                        <h4 className='mainTextH4'>Branding Services In Pune and Mumbai (India)


</h4>

                        <p className=' mainTextP'>Your business should be represented by the best in the industry. We can work with you to design a logo, colour scheme, and aesthetic language that expresses your personal identity. Beyond just a logo, branding is about guiding the public's perception of who you are, what you stand for, and how you deliver your products or services to customers. We can assist you create visual messages that are clear and effective to the right audience.







</p>  
                        </div>
                                     </Col>
                       <Col lg="6">
                       <Image src="/assets/images/bicads/Banner/Branding-Services.png" alt={config.SITE_NAME} fluid   />
                                             </Col>
                    </Row>
                </Container>
            </div>

             {/* -------------------------------------------------------------------------- */}
             <div className='ServiceHeading '>
                <Container className=" pb-5   text-center">
                <h1 className='mainTextH1'>How It Works?</h1>

            <h2 className='px-5 '>Stand Out From The Crowd With A Custom Brand</h2>

            <p>Creative branding services are the key to every successful business brand. It is not enough to just have a unique logo; colours must also stand out. Stand out from the crowd and give your company a head start with our creative branding services.</p>

                </Container>
            </div>
            {/* -------------------------------------------------------------------------- */}

<div className='serviceSection'>
        <div className='ServiceBg'>
                <Container className="   ">

                     <Row >
                       
                       <Col lg="6">
                       <Image src="/assets/images/bicads/Brand service/Communicate-your-message.png" alt={config.SITE_NAME} fluid   />
                                             </Col>

                                             <Col lg="6">
                            <div className=' pt-5  '>
                        <h4 className='mainTextH4'>Communicate your message
 </h4>

                        <p className=' mainTextP'>Today, a company’s image and workforce are both important. That’s why branding is important to us. We are a team of graphic designers who produce logos, brochures, and other marketing materials. We also provide a range of services to assist you in your communication efforts, including infographics!</p>  
                        </div>
                                     </Col>
                    </Row>
                </Container>
            </div>
        <div className='ServiceBg ServiceBg2'>
                <Container className="    ">

                     <Row >
                       
                       <Col lg={{span:6 , order:2}}>
                       <Image src="/assets/images/bicads/Ecommerce Website/Measure-your-success.png" alt={config.SITE_NAME} fluid   />
                                             </Col>

                     <Col lg={{span:6 , order:1}}>
                            <div className=' pt-5  '>
                        <h4 className='mainTextH4'>Build trust and loyalty

 </h4>

                        <p className=' mainTextP'>Every successful purchase is based on trust, which is at the heart of every relationship. Consumers and companies build trust through consistent, personal interactions. The best way to offer value is to provide it. Quality, price, and time and location are all examples of extrinsic value. Customers can also be persuaded to remain loyal to a particular brand by upselling, cross-selling, and other loyalty-building initiatives.
</p>  
                        </div>
                                     </Col>
                    </Row>
                </Container>
            </div>
            <div className='ServiceBg'>
                <Container className="   ">

                     <Row >
                       
                       <Col lg="6">
                       <Image src="/assets/images/bicads/Brand service/Diferentiate-your-business.png" alt={config.SITE_NAME} fluid   />
                                             </Col>

                                             <Col lg="6">
                            <div className=' pt-5  '>
                        <h4 className='mainTextH4'>Differentiate your company
 </h4>

                        <p className=' mainTextP'>Create a visually appealing video to set your company apart from competitors and attract your audience. We'll work with you to create a video that appeals to your audience and satisfies your needs.</p>  
                        </div>
                                     </Col>
                    </Row>
                </Container>
            </div>
            </div>
        {/* -------------------------------------------------------------------------- */}

             <Footer/>
        </div>
    );
} 
}
export default Branding;