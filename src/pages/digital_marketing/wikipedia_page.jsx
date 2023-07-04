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
 
 class WikipediaPage extends Component {

    // componentDidMount(){
    //     document.title = "Digital Marketing Services &amp; Website Development | Pune | Mumbai "
    //   }

    render(){

    return(
        <div className='MainServiceDiv'>
 
             <HelmetProvider>
             <title>Wikipedia Page Creation Services In Pune and Mumbai</title>
	<meta name="description" content="Wikipedia page is using by Contributors may make multiple edits to their article drafts to ensure comprehensive editing and proofreading." />
	<link rel="canonical" href="https://bicads.com/wikipedia-page-creation-service" />
   </HelmetProvider>
   
           <Header/>
            <SubHeader  Title='Wikipedia Page Creation' subtitle='Wikipedia Page Creation' BkImg='/assets/images/bicads/Banner/Wikipedia.jpg'/>
        {/* ------------------------- intro------------------------------------------------- */}

        <div className='ServiceHeading '>
                <Container className=" pb-5   text-center">
                <h1 className='mainTextH1'> Wikipedia Page Creation</h1>

            <h2 className='px-5 '>Get The Extra Edge On Search Engines & Brand Value</h2>

                      
                </Container>
            </div>
        {/* -------------------------------------------------------------------------- */}
       

            <div className='whyConsistent  ServiceBg'>
                <Container className=" my-4  ">

                     <Row >
                        <Col lg="6">
                            <div className='serviceSecond pt-5'>
                        <h4 className='mainTextH4'>Wikipedia Page Creation Services In Pune and Mumbai (India)
</h4>

                        <p className=' mainTextP'>A Wikipedia page acts as a sound online presence and recognition of your brand. Because Wikipedia is usually in the top five ranks on Google, your business page gets an automatic SEO boost. Your business page will get a reflex SEO boost from Google. You can create, add or modify content on Wikipedia.

</p>  
                        </div>
                                     </Col>
                       <Col lg="6">
                       <Image src="/assets/images/bicads/Banner/Wikipedia.png" alt={config.SITE_NAME} fluid   />
                                             </Col>
                    </Row>
                </Container>
            </div>

             {/* -------------------------------------------------------------------------- */}
             <div className='ServiceHeading '>
                <Container className=" pb-5   text-center">
                <h1 className='mainTextH1'>How It Works?</h1>

            <h2 className='px-5 '>Get Your Brand On Wikipedia</h2>

            <p>Our team of content developers, editors, and designers will create a Wikipedia page for your business that is packed with information and is SEO-friendly. Don’t bother figuring out Google’s ranking algorithm guidelines; we’ll take care of it for you.
</p>
 

  
                </Container>
            </div>
          {/* -------------------------------------------------------------------------- */}

<div className='serviceSection'>
        <div className='ServiceBg'>
                <Container className="   ">

                     <Row >
                       
                       <Col lg="6">
                       <Image src="/assets/images/bicads/Wikipedia/Your-brand-online-recognition.png" alt={config.SITE_NAME} fluid   />
                                             </Col>

                                             <Col lg="6">
                            <div className=' pt-5  '>
                        <h4 className='mainTextH4'>Your brand’s online recognition
 </h4>

                        <p className=' mainTextP'>With a Wikipedia page, your brand’s visibility and recognition can be enhanced, and your content can rank in search engine results pages (SERPs) on Google. A Wikipedia page also comes with the benefit of an SEO boost because it ranks high on Google. One of the top five positions on Google helps your other webpages to rank higher too.</p>  
                        </div>
                                     </Col>
                    </Row>
                </Container>
            </div>
        <div className='ServiceBg ServiceBg2'>
                <Container className="    ">

                     <Row >
                       
                       <Col lg={{span:6 , order:2}}>
                       <Image src="/assets/images/bicads/Wikipedia/Put-your-brand-out-there.png" alt={config.SITE_NAME} fluid   />
                                             </Col>

                     <Col lg={{span:6 , order:1}}>
                            <div className=' pt-5  '>
                        <h4 className='mainTextH4'>Put your Brand out there

 </h4>

                        <p className=' mainTextP'>Your business page on Wikipedia is an excellent addition to your Google campaign. It provides massive exposure and recognition to your brand. Click on 'Get your page now!
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
                       <Image src="/assets/images/bicads/Wikipedia/Build-your-brand-and-relax.png" alt={config.SITE_NAME} fluid   />
                                             </Col>

                                             <Col lg="6">
                            <div className=' pt-5  '>
                        <h4 className='mainTextH4'>Build your brand and enjoy a reflex SEO boost
 </h4>

                        <p className=' mainTextP'>460 million people visit Wikipedia every month, which makes it one of the world's most recognizable websites. Wikipedia's reflex SEO boost programme is a shrewd investment. Without hard work, perseverance, and dedication, it would be impossible to build a large online presence. You should definitely join this opportunity.</p>  
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
export default WikipediaPage;