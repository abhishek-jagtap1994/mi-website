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
 
 class MobileApp extends Component {

    // componentDidMount(){
    //     document.title = "Digital Marketing Services &amp; Website Development | Pune | Mumbai "
    //   }

    render(){

    return(
        <div className='MainServiceDiv'>
 
             <HelmetProvider>
             <title>Mobile App Development Company In Pune and Mumbai</title>
	<meta name="description" content="Mobile app development is the procedure for writing software for small, wireless computing devices, like smartphones and other devices." />
	<link rel="canonical" href="https://bicads.com/mobile-app-development-company" />
	
   </HelmetProvider>
   
           <Header/>
            <SubHeader  Title='Mobile App' subtitle='Development' BkImg='/assets/images/bicads/Banner/Mobile-App-development.jpg'/>
        {/* ------------------------- intro------------------------------------------------- */}

        <div className='ServiceHeading '>
                <Container className=" pb-5   text-center">
                <h1 className='mainTextH1'> Mobile App Development </h1>

            <h2 className='px-5 '>We’ll create web or mobile applications specifically for your company.
</h2>

                      
                </Container>
            </div>
        {/* -------------------------------------------------------------------------- */}
       

            <div className='whyConsistent  ServiceBg'>
                <Container className=" my-4  ">

                     <Row >
                        <Col lg="6">
                            <div className='serviceFirst'>
                        <h4 className='mainTextH4'>Mobile Application Development Company In Pune and Mumbai (India)


 </h4>

                        <p className=' mainTextP'>Getting a mobile app for your business is a great way to keep customers and gain new ones in today's competitive economy. Mobile app development is an excellent method for businesses to keep up with the competition. Mobile apps allow firms to stay up to date with the competition.
</p>  
                        </div>
                                     </Col>
                       <Col lg="6">
                       <Image src="/assets/images/bicads/Banner/Mobile-App-development.png" alt={config.SITE_NAME} fluid   />
                                             </Col>
                    </Row>
                </Container>
            </div>

             {/* -------------------------------------------------------------------------- */}
             <div className='ServiceHeading '>
                <Container className=" pb-5   text-center">
                <h1 className='mainTextH1'>  Mobile app development</h1>

            <h2 className='px-5 '>Mobile app development is a powerful weapon in the world of business
</h2>

            <p>Mobile app development and deployment make it easier for businesses to take a step further in their competition by making it easier for the consumer to make payments. Mobile app development is cheaper and more convenient as a result, as well as a great marketing tool for businesses to use to highlight their brand.</p>

 
            <Row className='goodWebsite'>
                <Col lg='3'>  
                 <Image src="/assets/images/bicads/Icon-1.png" alt={config.SITE_NAME} fluid   />
                 <h5>Optimum Loading Speed</h5>
                 </Col>
                <Col lg='3'>
                    <Image src="/assets/images/bicads/Icon-2.png" alt={config.SITE_NAME} fluid   />
                    <h5>SEO Friendly Design</h5>

                    
                    </Col>
                <Col lg='3'>
                    <Image src="/assets/images/bicads/Icon-3.png" alt={config.SITE_NAME} fluid   />
                    <h5>Fully Mobile Responsive</h5>

                    </Col>
                <Col lg='3'>
                    <Image src="/assets/images/bicads/Icon-4.png" alt={config.SITE_NAME} fluid   />
                    <h5>Right Content Placement</h5>
                    </Col>
            </Row>
                </Container>
            </div>
         {/* -------------------------------------------------------------------------- */}

<div className='serviceSection'>
        <div className='ServiceBg'>
                <Container className="   ">

                     <Row >
                       
                       <Col lg="6">
                       <Image src="/assets/images/bicads/Mobile Development/How-to-drive-business.png" alt={config.SITE_NAME} fluid   />
                                             </Col>

                                             <Col lg="6">
                            <div className=' pt-5  '>
                        <h4 className='mainTextH4'>How to drive your business ahead
 </h4>

                        <p className=' mainTextP'>Want us to develop a mobile app or host, maintain, and optimize it for you? We have all the resources and expertise you need to make sure your customers get a great app! Contact us today and we'll work with you to develop a finished product that your customers will enjoy!</p>  
                        </div>
                                     </Col>
                    </Row>
                </Container>
            </div>
        <div className='ServiceBg ServiceBg2'>
                <Container className="    ">

                     <Row >
                       
                       <Col lg={{span:6 , order:2}}>
                       <Image src="/assets/images/bicads/Mobile Development/Mobile-app-make-all-difference.png" alt={config.SITE_NAME} fluid   />
                                             </Col>

                     <Col lg={{span:6 , order:1}}>
                            <div className=' pt-5  '>
                        <h4 className='mainTextH4'>Mobile app makes all the difference

 </h4>

                        <p className=' mainTextP'>A mobile app is a cost-effective and effective marketing tool. Mobile apps are a great way to emphasise your brand, as they are a cheaper and more effective marketing campaign than traditional methods. With a mobile app, you can make payments for your customers easier and boost your conversion rate with valuable offers.
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
                       <Image src="/assets/images/bicads/Mobile Development/Reach-Customer.png" alt={config.SITE_NAME} fluid   />
                                             </Col>

                                             <Col lg="6">
                            <div className=' pt-5  '>
                        <h4 className='mainTextH4'>Reach more of your customers
 </h4>

                        <p className=' mainTextP'>Mobile app development is critical to success in today’s demanding economy. With the right financial resources, a competent team and a constrained timeline, we will develop and deploy your app so that you may accept payments on the go.</p>  
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
export default MobileApp;