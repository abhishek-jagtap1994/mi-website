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
 
 class WebsiteDesign extends Component {

    // componentDidMount(){
    //     document.title = "Digital Marketing Services &amp; Website Development | Pune | Mumbai "
    //   }

    render(){

    return(
        <div className='MainServiceDiv'>
 
             <HelmetProvider>
             <meta charSet="utf-8" />
             <title>Website Development Company In Pune and Mumbai</title>
             <meta name="description" content="Website design is part of Web development that creating a user friendly website .It focuses on aesthetic factors like layout, user interface." />

             <link rel="canonical" href="https://bicads.com/website-development-services" />
   </HelmetProvider>
   
           <Header/>
            <SubHeader  Title='Website ' subtitle='Design' BkImg='/assets/images/bicads/Website-Banner.jpg'/>
        {/* ------------------------- intro------------------------------------------------- */}

        <div className='ServiceHeading '>
                <Container className=" pb-5   text-center">
                <h1 className='mainTextH1'>  Website design </h1>

            <h2 className='px-5 '>What makes a company great? <br></br> That’s simple. It’s the people who work here.</h2>

                      
                </Container>
            </div>
        {/* -------------------------------------------------------------------------- */}
       

            <div className='whyConsistent  ServiceBg'>
                <Container className="    ">

                     <Row >
                        <Col lg="6">
                            <div className='serviceFirst'>
                        <h4 className='mainTextH4'> Website Development Company In Pune and Mumbai (India) </h4>

                        <p className=' mainTextP'>A well-designed, well-produced website can get your business in front of your target audience. Your brand visibility is critical to the success of your business. With a professionally designed website, you may be able to leave a lasting impression on your audience and make an impactful first impression. A Website Development Company will help you achieve this goal. </p>  
                        </div>
                                     </Col>
                       <Col lg="6">
                       <Image src="/assets/images/bicads/Website-image.png" alt={config.SITE_NAME} fluid   />
                                             </Col>
                    </Row>
                </Container>
            </div>


 {/* -------------------------------------------------------------------------- */}

 <div className='ServiceHeading '>
                <Container className=" py-5   text-center">
                <h1 className='mainTextH1'>  Our Process </h1>

            <h2 className='px-5 '> We Use An Established SDLC Process <br></br>For Our Design And Development Processs


</h2>

            <Row className='goodWebsite'>
                <Col lg='3'>  
                 <Image src="/assets/images/bicads/Icon-5.png" alt={config.SITE_NAME} fluid   />
                 <h5>Understand Requirement & Analyse</h5>
                 </Col>
                <Col lg='3'>
                    <Image src="/assets/images/bicads/Icon-6.png" alt={config.SITE_NAME} fluid   />
                    <h5>Design & Architecture</h5>

                    
                    </Col>
                <Col lg='3'>
                    <Image src="/assets/images/bicads/Icon-7.png" alt={config.SITE_NAME} fluid   />
                    <h5>Implementation & Coding</h5>

                    </Col>
                <Col lg='3'>
                    <Image src="/assets/images/bicads/Icon-8.png" alt={config.SITE_NAME} fluid   />
                    <h5>Testing</h5>
                    </Col>
            </Row>
                </Container>
            </div>
        {/* -------------------------------------------------------------------------- */}

             {/* -------------------------------------------------------------------------- */}
             <div className='ServiceHeading '>
                <Container className=" pb-5   text-center">
                <h1 className='mainTextH1'>  Good Website </h1>

            <h2 className='px-5 '>A Well Designed & Performing Website Should Have</h2>

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
                       <Image src="/assets/images/bicads/Website development/loading-speed.png" alt={config.SITE_NAME} fluid   />
                                             </Col>

                                             <Col lg="6">
                            <div className=' pt-5  '>
                        <h4 className='mainTextH4'>Optimum Loading Speed
 </h4>

                        <p className=' mainTextP'>Slow loading websites are a lost cause. Your site may be appealing visually, but that doesn't mean squat if the user cannot use it. A poorly loading page is bad for business. This is why you need to know how to make your users happy with a rapid loading speed. It not only improves the user experience, but it also boosts your SEO.</p>  
                        </div>
                                     </Col>
                    </Row>
                </Container>
            </div>
        <div className='ServiceBg ServiceBg2'>
                <Container className="    ">

                     <Row >
                       
                       <Col lg={{span:6 , order:2}}>
                       <Image src="/assets/images/bicads/Website development/SEO-friendly.png" alt={config.SITE_NAME} fluid   />
                                             </Col>

                     <Col lg={{span:6 , order:1}}>
                            <div className=' pt-5  '>
                        <h4 className='mainTextH4'>SEO Friendly Design

 </h4>

                        <p className=' mainTextP'>You don't just want a website that looks good; you need one that loads quickly. The best way to do this is to hire a web design company. They will know all the right techniques for increasing your website traffic and ranking in search engines, resulting in more leads and sales.

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
                       <Image src="/assets/images/bicads/Website development/mobile-responsive.png" alt={config.SITE_NAME} fluid   />
                                             </Col>

                                             <Col lg="6">
                            <div className=' pt-5  '>
                        <h4 className='mainTextH4'>Fully Mobile Responsive
 </h4>

                        <p className=' mainTextP'>Mobile devices have surpassed desktop and laptop computers in terms of use. Mobile devices are now more popular than desktops and laptops, hence websites must be mobile-friendly. It is also important for your audience to be able to find what they are looking for and to view information in a readable format on mobile devices.</p>  
                        </div>
                                     </Col>
                    </Row>
                </Container>
            </div>
        <div className='ServiceBg ServiceBg2'>
                <Container className="    ">

                     <Row >
                       
                       <Col lg={{span:6 , order:2}}>
                       <Image src="/assets/images/bicads/Website development/Content-Placement.png" alt={config.SITE_NAME} fluid   />
                                             </Col>

                     <Col lg={{span:6 , order:1}}>
                            <div className=' pt-5  '>
                        <h4 className='mainTextH4'>Right Content Placement
 </h4>

                        <p className=' mainTextP'>Website content, now more than just an advertising and goods sales mechanism, represents a business’s brand. Incorrect content placement may cost a company money. It is critical to be able to identify where on your website to place the right content in order to attract and convert customers.

</p>  
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
export default WebsiteDesign;