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
 
 class SearchEngine extends Component {

    // componentDidMount(){
    //     document.title = "Digital Marketing Services &amp; Website Development | Pune | Mumbai "
    //   }

    render(){

    return(
        <div className='MainServiceDiv'>
 
             <HelmetProvider>
             <title>Search Engine Optimization Company In Pune and Mumbai</title>
	<meta name="description" content="search engine optimization is used for Increasing the amount and quality of traffic to a website or web page from search engines ." />
	<link rel="canonical" href="https://bicads.com/search-engine-optimization-company" />
   </HelmetProvider>
   
           <Header/>
            <SubHeader  Title='Search Engine Optimization' subtitle='Search Engine Optimization' BkImg='/assets/images/bicads/Banner/SEO.jpg'/>
        {/* ------------------------- intro------------------------------------------------- */}

        <div className='ServiceHeading '>
                <Container className=" pb-5   text-center">
                <h1 className='mainTextH1'> Search Engine Optimization</h1>

            <h2 className='px-5 '>Driving more traffic to your website by increasing rank using search engine optimization
</h2>

                      
                </Container>
            </div>
        {/* -------------------------------------------------------------------------- */}
       

            <div className='whyConsistent  ServiceBg'>
                <Container className=" my-4  ">

                     <Row >
                        <Col lg="6">
                            <div className='serviceSecond pt-4'>
                        <h4 className='mainTextH4'>SEO – Search Engine Optimization Company In Pune and Mumbai (India)
</h4>

                        <p className=' mainTextP'>According to 57% of B2B marketers, SEO leads produce more leads than any other marketing strategy. SEO leads have a 14.6% close rate, but outbound leads only have a 1.7% close rate. You don’t have to pay search engines to have your high-value-providing webpage appear at the top of search results once you’ve created it. This is in contrast to Pay Per Click advertisements, which charge a fee each time a person clicks and views your website.
</p>  
                        </div>
                                     </Col>
                       <Col lg="6">
                       <Image src="/assets/images/bicads/Banner/SEO.png" alt={config.SITE_NAME} fluid   />
                                             </Col>
                    </Row>
                </Container>
            </div>

             {/* -------------------------------------------------------------------------- */}
             <div className='ServiceHeading '>
                <Container className=" pb-5   text-center">
                <h1 className='mainTextH1'>How It Works?</h1>

            <h2 className='px-5 '>How SEO Will Benefit You

</h2>

            <p>SEO is a method for elevating a website's ranking on search engine results pages without paying for advertisement clicks. Those who invest in SEO typically outrank the competition and gain market share. SEO can help you attract anyone who has interest in a purchase at any point in the purchasing funnel, no matter what stage of the consumer's purchasing funnel they are in.
</p>

                </Container>
            </div>
          {/* -------------------------------------------------------------------------- */}

<div className='serviceSection'>
        <div className='ServiceBg'>
                <Container className="   ">

                     <Row >
                       
                       <Col lg="6">
                       <Image src="/assets/images/bicads/SEO/Organic-research.png" alt={config.SITE_NAME} fluid   />
                                             </Col>

                                             <Col lg="6">
                            <div className=' pt-5  '>
                        <h4 className='mainTextH4'>Your organic results will speak
 </h4>

                        <p className=' mainTextP'>Search engine algorithms place a premium on quality and relevance when determining where a website appears in search results. That's why optimizing your website for search engines is so beneficial—you can spend less money on advertising and still have people clicking on to it.</p>  
                        </div>
                                     </Col>
                    </Row>
                </Container>
            </div>
        <div className='ServiceBg ServiceBg2'>
                <Container className="    ">

                     <Row >
                       
                       <Col lg={{span:6 , order:2}}>
                       <Image src="/assets/images/bicads/SEO/Stay-ahead.png" alt={config.SITE_NAME} fluid   />
                                             </Col>

                     <Col lg={{span:6 , order:1}}>
                            <div className=' pt-5  '>
                        <h4 className='mainTextH4'>Stay Ahead Of The Competition

 </h4>

                        <p className=' mainTextP'> To keep up with the Joneses, you must have a strategy for optimising your website. That doesn’t have to wait until tomorrow. Why not start now? Search results for high-value pages are not determined by pay per click advertisements, which charge a fee when someone clicks and views your page. Pay per click advertisements differ from this since they charge a fee each time someone views your page.
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
                       <Image src="/assets/images/bicads/SEO/Brand-awarness.png" alt={config.SITE_NAME} fluid   />
                                             </Col>

                                             <Col lg="6">
                            <div className=' pt-5  '>
                        <h4 className='mainTextH4'>Gain brand awareness
 </h4>

                        <p className=' mainTextP'>The more people know about your great product or service, the higher your chances are of making money as a business. Search Engine Optimization Services can help you do this by increasing your brand awareness online and getting you more quality leads.</p>  
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
export default SearchEngine;