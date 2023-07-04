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
 
 class ContentMarketing extends Component {

    // componentDidMount(){
    //     document.title = "Digital Marketing Services &amp; Website Development | Pune | Mumbai "
    //   }

    render(){

    return(
        <div className='MainServiceDiv'>
 
             <HelmetProvider>
             <title>Content Marketing Services In Pune and Mumbai</title>
	<meta name="description" content="Content marketing is Creating and sharing relevant articles, videos, podcasts, and other media to engage, retain, and attract audiences." />
	<link rel="canonical" href="https://bicads.com/content-marketing-services" />
   </HelmetProvider>
   
           <Header/>
            <SubHeader  Title='Content Marketing' subtitle='Content Marketing' BkImg='/assets/images/bicads/Banner/Content-Marketing.jpg'/>
        {/* ------------------------- intro------------------------------------------------- */}

        <div className='ServiceHeading '>
                <Container className=" pb-5   text-center">
                <h1 className='mainTextH1'> Content Marketing</h1>

            <h2 className='px-5 '>Right Content For Better Business Communication</h2>

                      
                </Container>
            </div>
        {/* -------------------------------------------------------------------------- */}
       

            <div className='whyConsistent  ServiceBg'>
                <Container className=" my-4  ">

                     <Row >
                        <Col lg="6">
                            <div className='serviceSecond pt-3'>
                        <h4 className='mainTextH4'>Content Marketing Services In Pune and Mumbai (India)


</h4>

                        <p className=' mainTextP'>Content marketing refers to creating online content, including photographs, infographics, podcasts, videos, and blogs, for the purpose of promoting a product in a passive manner. In hard marketing strategies like Facebook Advertising, prospects may be repelled, which could have detrimental consequences for your company and brand. A content marketing company will assist you by providing value to the viewers and maintaining a small affiliation with your brand. Content marketing has become one of the most popular marketing strategies in recent years, and it is utilised by all the biggest corporations and websites.





</p>  
                        </div>
                                     </Col>
                       <Col lg="6">
                       <Image src="/assets/images/bicads/Banner/Content-Marketing.png" alt={config.SITE_NAME} fluid   />
                                             </Col>
                    </Row>
                </Container>
            </div>

             {/* -------------------------------------------------------------------------- */}
             <div className='ServiceHeading '>
                <Container className=" pb-5   text-center">
                <h1 className='mainTextH1'>How It Works?</h1>

            <h2 className='px-5 '>Developing Content To Grow Your Business



</h2>

            <p>We begin by determining what your audience should be able to do after reading your content. We then produce blog posts, infographics, podcasts, videos, and other marketing materials that help you achieve your goals.</p>
 
                </Container>
            </div>
            {/* -------------------------------------------------------------------------- */}

<div className='serviceSection'>
        <div className='ServiceBg'>
                <Container className="   ">

                     <Row >
                       
                       <Col lg="6">
                       <Image src="/assets/images/bicads/Content Marketing/Increase-leads.png" alt={config.SITE_NAME} fluid   />
                                             </Col>

                                             <Col lg="6">
                            <div className=' pt-5  '>
                        <h4 className='mainTextH4'>Increase your leads
 </h4>

                        <p className=' mainTextP'>Instead of pushing your product or service down customers' throats, content marketing refers to the production of online content, such as infographics, podcasts, videos, and blogs, that provide value to consumers. Content marketing companies assist companies in delivering value to viewers while avoiding being pushy. It has become a popular marketing strategy among big corporations and websites.</p>  
                        </div>
                                     </Col>
                    </Row>
                </Container>
            </div>
        <div className='ServiceBg ServiceBg2'>
                <Container className="    ">

                     <Row >
                       
                       <Col lg={{span:6 , order:2}}>
                       <Image src="/assets/images/bicads/Content Marketing/Convert-more-leads.png" alt={config.SITE_NAME} fluid   />
                                             </Col>

                     <Col lg={{span:6 , order:1}}>
                            <div className=' pt-5  '>
                        <h4 className='mainTextH4'>Convert more leads

 </h4>

                        <p className=' mainTextP'>Create high-quality content to increase leads and inquiries. By planning a strategically planned editorial calendar, you'll see an increase in traffic to your website, conversions, and inquiries for your products. You'll make your voice heard and be seen as a credible source of information if you have a strategy behind it.

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
                       <Image src="/assets/images/bicads/Content Marketing/Become-a-trusted-brand.png" alt={config.SITE_NAME} fluid   />
                                             </Col>

                                             <Col lg="6">
                            <div className=' pt-5  '>
                        <h4 className='mainTextH4'>Become a trusted brand
 </h4>

                        <p className=' mainTextP'>Creating content that is of superior quality and that respects the time of its audience is the key to long-term customer success. It's time to invest in content marketing if you want to grow your business. Content marketing services help brands create high-quality content that engages their audience and drives business growth.</p>  
                        </div>
                                     </Col>
                    </Row>
                </Container>
            </div>
        <div className='ServiceBg ServiceBg2'>
                <Container className="    ">

                     <Row >
                       
                       <Col lg={{span:6 , order:2}}>
                       <Image src="/assets/images/bicads/Content Marketing/Think-beyond.png" alt={config.SITE_NAME} fluid   />
                                             </Col>

                     <Col lg={{span:6 , order:1}}>
                            <div className=' pt-5  '>
                        <h4 className='mainTextH4'>Think beyond advertising
 </h4>

                        <p className=' mainTextP'>The right content marketing services can help you outrank your competitors and support your SEO efforts. By producing online content in a strategic manner, you may improve your position in search engine rankings and support your SEO efforts. It is possible to produce high-quality content using the assistance of content marketing services.

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
export default ContentMarketing;