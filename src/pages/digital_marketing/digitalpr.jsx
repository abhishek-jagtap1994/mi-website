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
 
 class DigitalPr extends Component {

    // componentDidMount(){
    //     document.title = "Digital Marketing Services &amp; Website Development | Pune | Mumbai "
    //   }

    render(){

    return(
        <div className='MainServiceDiv'>
 
             <HelmetProvider>
             <title>Digital PR Services in Pune and Mumbai</title>
	<meta name="description" content="Get your brand the presence it deserves. Our Digital PR Services are tailored of find you the best solution and reach your target audience." />
	<link rel="canonical" href="https://bicads.com/digital-pr" />
   </HelmetProvider>
   
           <Header/>
            <SubHeader  Title='Digital PR' subtitle='Digital PR' BkImg='/assets/images/bicads/Banner/PR.jpg'/>
        {/* ------------------------- intro------------------------------------------------- */}

        <div className='ServiceHeading '>
                <Container className=" pb-5   text-center">
                <h1 className='mainTextH1'> Digital PR</h1>

            <h2 className='px-5 '>Build awareness for your brand</h2>

                      
                </Container>
            </div>
        {/* -------------------------------------------------------------------------- */}
       

            <div className='whyConsistent  ServiceBg'>
                <Container className=" my-4  ">

                     <Row >
                        <Col lg="6">
                            <div className='serviceFirst '>
                        <h4 className='mainTextH4'>Digital PR Services In Pune and Mumbai (India)</h4>

                        <p className=' mainTextP'>A digital PR service provides real value to your target audience by creating compelling pieces of content that increase awareness of your brand and online presence. It combines creative content marketing, SEO, and PR.</p>  
                        </div>
                                     </Col>
                       <Col lg="6">
                       <Image src="/assets/images/bicads/Banner/PR.png" alt={config.SITE_NAME} fluid   />
                                             </Col>
                    </Row>
                </Container>
            </div>

             {/* -------------------------------------------------------------------------- */}
             <div className='ServiceHeading '>
                <Container className=" pb-5   text-center">
                <h1 className='mainTextH1'>How It Works?</h1>

            <h2 className='px-5 '>Boost brand awareness</h2>

            <p>Giving your company a boost in the search results while also providing engaging content that people love to share on social media is what we'll do.</p>
 

                </Container>
            </div>
          {/* -------------------------------------------------------------------------- */}

<div className='serviceSection'>
        <div className='ServiceBg'>
                <Container className="   ">

                     <Row >
                       
                       <Col lg="6">
                       <Image src="/assets/images/bicads/PR/PR-Service-need-for-brand.png" alt={config.SITE_NAME} fluid   />
                                             </Col>

                                             <Col lg="6">
                            <div className=' pt-5  '>
                        <h4 className='mainTextH4'>PR Service Your Brand Needs
 </h4>

                        <p className=' mainTextP'>Our marketing team will create and amplify a valuable piece of content that provides real value to your target audience in order to help your brand gain a competitive advantage in the market. Our SEO, PR, Inbound Marketing and Content Marketing strategies are designed to assist you achieve this goal.</p>  
                        </div>
                                     </Col>
                    </Row>
                </Container>
            </div>
        <div className='ServiceBg ServiceBg2'>
                <Container className="    ">

                     <Row >
                       
                       <Col lg={{span:6 , order:2}}>
                       <Image src="/assets/images/bicads/PR/What-your-target-audience-want.png" alt={config.SITE_NAME} fluid   />
                                             </Col>

                     <Col lg={{span:6 , order:1}}>
                            <div className=' pt-5  '>
                        <h4 className='mainTextH4'>What your target market wants

 </h4>

                        <p className=' mainTextP'>If you want to increase your exposure without exposing yourself to more people, what else can you do? You can deliver the right messaging to the right people and just the right content with Digital PR.

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
                       <Image src="/assets/images/bicads/PR/Connect-with-influncer.png" alt={config.SITE_NAME} fluid   />
                                             </Col>

                                             <Col lg="6">
                            <div className=' pt-5  '>
                        <h4 className='mainTextH4'>Connect with influencers
 </h4>

                        <p className=' mainTextP'>The best way to boost your online presence is to work with the right PR agency. Digital PR Service has the skills and tools you need to connect with influencers and reach new heights.</p>  
                        </div>
                                     </Col>
                    </Row>
                </Container>
            </div>
        <div className='ServiceBg ServiceBg2'>
                <Container className="    ">

                     <Row >
                       
                       <Col lg={{span:6 , order:2}}>
                       <Image src="/assets/images/bicads/PR/Improve-your-website-ranking.png" alt={config.SITE_NAME} fluid   />
                                             </Col>

                     <Col lg={{span:6 , order:1}}>
                            <div className=' pt-5  '>
                        <h4 className='mainTextH4'>Improve your website rankings
 </h4>

                        <p className=' mainTextP'>We create content to promote your brand on your target audience's preferred media. We work with Google, Bing, and other search engines to show up in search engine results, and we use keyword strategies to rank better in search engines.

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
export default DigitalPr;