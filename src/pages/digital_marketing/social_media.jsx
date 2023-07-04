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
 
 class SocialMedia extends Component {

    // componentDidMount(){
    //     document.title = "Digital Marketing Services &amp; Website Development | Pune | Mumbai "
    //   }

    render(){

    return(
        <div className='MainServiceDiv'>
 
             <HelmetProvider>
             <title>Social Media Marketing Company In Pune and Mumbai</title>
	<meta name="description" content="Social media marketing using social media platforms to drive website traffic and build a company&#039;s brand by social networks and sharing info." />
	<link rel="canonical" href="https://bicads.com/social-media-marketing-company" />
   </HelmetProvider>
   
           <Header/>
            <SubHeader  Title='Social Media Marketing' subtitle='Social Media Marketing' BkImg='/assets/images/bicads/Banner/Social-Media-Marketing.jpg'/>
        {/* ------------------------- intro------------------------------------------------- */}

        <div className='ServiceHeading '>
                <Container className=" pb-5   text-center">
                <h1 className='mainTextH1'> Social Media Marketing</h1>

            <h2 className='px-5 '>Your Business Should Be Available Where Your Audience Are</h2>

                      
                </Container>
            </div>
        {/* -------------------------------------------------------------------------- */}
       

            <div className='whyConsistent  ServiceBg'>
                <Container className=" my-4  ">

                     <Row >
                        <Col lg="6">
                            <div className='serviceFirst'>
                        <h4 className='mainTextH4'>SMM – Social Media Marketing Company In Pune and Mumbai (India) </h4>

                        <p className=' mainTextP'>Social media networks are now a major part of every marketing strategy, and the cost-effective resource of a social media marketing company is so tremendous that anyone who isn't taking advantage of it is losing out on an outstanding marketing opportunity.</p>  
                        </div>
                                     </Col>
                       <Col lg="6">
                       <Image src="/assets/images/bicads/Banner/Social-Media-Marketing.png" alt={config.SITE_NAME} fluid   />
                                             </Col>
                    </Row>
                </Container>
            </div>

             {/* -------------------------------------------------------------------------- */}
             <div className='ServiceHeading '>
                <Container className=" pb-5   text-center">
                <h1 className='mainTextH1'>How It Works?</h1>

            <h2 className='px-5 '>How Social Media Marketing Can Help You

</h2>

            <p>Social media marketing is loaded with advantages, so you want to use it. With just a few hours each week, you can boost your brand awareness and attract more traffic. Using a social media marketing company can help you get started.</p>

 
            <Row className='goodWebsite d-none'>
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
                       <Image src="/assets/images/bicads/Social Media Marketing/ROI.png" alt={config.SITE_NAME} fluid   />
                                             </Col>

                                             <Col lg="6">
                            <div className=' pt-5  '>
                        <h4 className='mainTextH4'>Increase ROI with existing traffic
 </h4>

                        <p className=' mainTextP'>Social media is an important part of any marketing plan, and the benefits are unquestionable. Yet, if you do not include it, you are missing out on an excellent marketing opportunity. Consumers report that social media provided huge exposure for their company. Every post that is shared will be introduced to a network of people, which might result in potential clients.</p>  
                        </div>
                                     </Col>
                    </Row>
                </Container>
            </div>
        <div className='ServiceBg ServiceBg2'>
                <Container className="    ">

                     <Row >
                       
                       <Col lg={{span:6 , order:2}}>
                       <Image src="/assets/images/bicads/Social Media Marketing/Improve-Brand-loyalty.png" alt={config.SITE_NAME} fluid   />
                                             </Col>

                     <Col lg={{span:6 , order:1}}>
                            <div className=' pt-5  '>
                        <h4 className='mainTextH4'>Improve on brand loyalty and customer satisfaction

 </h4>

                        <p className=' mainTextP'>Want to find a social media marketing firm that can aid you in the ever-changing social media sector? Our team of experts has years of experience in this area, and our social media marketing services can help you build customer loyalty and satisfaction.
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
                       <Image src="/assets/images/bicads/Social Media Marketing/Why-hire-us.png" alt={config.SITE_NAME} fluid   />
                                             </Col>

                                             <Col lg="6">
                            <div className=' pt-5  '>
                        <h4 className='mainTextH4'>Why hire our services?
 </h4>

                        <p className=' mainTextP'>Marketing activities are planned, executed, and measured against objectives using data-driven methods. We use the DMAIC protocol for quality control and continuous improvement to our campaigns to ensure accountability.</p>  
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
export default SocialMedia;