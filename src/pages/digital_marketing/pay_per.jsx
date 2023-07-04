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
 
 class PayPerClick extends Component {

    // componentDidMount(){
    //     document.title = "Digital Marketing Services &amp; Website Development | Pune | Mumbai "
    //   }

    render(){

    return(
        <div className='MainServiceDiv'>
 
             <HelmetProvider>
             <title>Pay Per Click Marketing Services In Pune and Mumbai</title>
	<meta name="description" content="An advertiser pays a publisher every time an advertisement link is “clicked” on in a pay-per-click advertising model." />
	<link rel="canonical" href="https://bicads.com/ppc-pay-per-click-marketing-services" />

   </HelmetProvider>
   
           <Header/>
            <SubHeader  Title='Pay-Per-Click' subtitle='Pay-Per-Click' BkImg='/assets/images/bicads/Banner/PPC.jpg'/>
        {/* ------------------------- intro------------------------------------------------- */}

        <div className='ServiceHeading '>
                <Container className=" pb-5   text-center">
                <h1 className='mainTextH1'> Pay-Per-Click</h1>

            <h2 className='px-5 '>Sky Rocket Your Business With Quality Leads</h2>

                      
                </Container>
            </div>
        {/* -------------------------------------------------------------------------- */}
       

            <div className='whyConsistent  ServiceBg'>
                <Container className=" my-4  ">

                     <Row >
                        <Col lg="6">
                            <div className='serviceSecond pt-4'>
                        <h4 className='mainTextH4'>PPC – Pay Per Click Marketing Services In Pune and Mumbai (India)

</h4>

                        <p className=' mainTextP'>Companies can pay a publisher each time someone clicks or views an ad on a search result, a website, a social media post, or some other digital platform by using this marketing method. This approach is better at obtaining attention than the (more long-term) technique of earning it organically. Traffic-driving (more intent-based) PPC platforms are usually more common than programmatic (PPC) platforms.



</p>  
                        </div>
                                     </Col>
                       <Col lg="6">
                       <Image src="/assets/images/bicads/Banner/PPC.png" alt={config.SITE_NAME} fluid   />
                                             </Col>
                    </Row>
                </Container>
            </div>

             {/* -------------------------------------------------------------------------- */}
             <div className='ServiceHeading '>
                <Container className=" pb-5   text-center">
                <h1 className='mainTextH1'>How It Works?</h1>

            <h2 className='px-5 '>Grow your business without the expensive upfront costs


</h2>

            <p>We can help you set up campaigns that target the specific interests of your ideal customers via Google AdWords or Facebook Ads. We can help you optimize your website's content to receive more organic traffic from Google and Facebook by identifying keyword and keyword groupings that your target customers are likely to type into Google or Facebook search boxes. We can also set up PPC campaigns with Google Shopping and Facebook Commerce. By identifying products that your target customers are likely to search for on Google and Facebook, we can help you generate more traffic to your website and increase your website conversion rate. If you have a physical retail store, you may also be able to set up a Google Merchant Center AdWords campaign to generate more offline foot traffic.</p>
 

  
                </Container>
            </div>
        {/* -------------------------------------------------------------------------- */}

<div className='serviceSection'>
        <div className='ServiceBg'>
                <Container className="   ">

                     <Row >
                       
                       <Col lg="6">
                       <Image src="/assets/images/bicads/PPC/Sucessful-campaign.png" alt={config.SITE_NAME} fluid   />
                                             </Col>

                                             <Col lg="6">
                            <div className=' pt-5  '>
                        <h4 className='mainTextH4'>Build a successful PPC campaign
 </h4>

                        <p className=' mainTextP'>We know how to maximise the effectiveness of Google Ads, Facebook ads, Twitter ads, and other pay-per-click (PPC) platforms. We'll use our expertise in conversion optimization together with your budget to create the ideal campaign.</p>  
                        </div>
                                     </Col>
                    </Row>
                </Container>
            </div>
        <div className='ServiceBg ServiceBg2'>
                <Container className="    ">

                     <Row >
                       
                       <Col lg={{span:6 , order:2}}>
                       <Image src="/assets/images/bicads/PPC/Generate-for-social-media.png" alt={config.SITE_NAME} fluid   />
                                             </Col>

                     <Col lg={{span:6 , order:1}}>
                            <div className=' pt-5  '>
                        <h4 className='mainTextH4'>Generate leads from social media

 </h4>

                        <p className=' mainTextP'>PPC marketing on social media is a great way to generate leads. It is affordable, scalable and measurable, making it a powerful marketing strategy. In addition to being fun, it can also be effective. We assist small businesses in gaining success on social media with pay-per-click ads like Facebook, LinkedIn, Twitter, and Instagram.

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
                       <Image src="/assets/images/bicads/PPC/Reach-target-audience.png" alt={config.SITE_NAME} fluid   />
                                             </Col>

                                             <Col lg="6">
                            <div className=' pt-5  '>
                        <h4 className='mainTextH4'>Reach your target audience, Faster
 </h4>

                        <p className=' mainTextP'>PPC advertising can help you reach your target audience and generate revenue efficiently and quickly. Google Ads, pay-per-click channels, or programmatic (PPC) channels can be utilised to buy ad space on sites like Yahoo! and Bing. Regardless of your goals, PPC marketing services are a proven way to increase your ROI.</p>  
                        </div>
                                     </Col>
                    </Row>
                </Container>
            </div>
        <div className='ServiceBg ServiceBg2'>
                <Container className="    ">

                     <Row >
                       
                       <Col lg={{span:6 , order:2}}>
                       <Image src="/assets/images/bicads/PPC/Get-instant-visiblity-for-business.png" alt={config.SITE_NAME} fluid   />
                                             </Col>

                     <Col lg={{span:6 , order:1}}>
                            <div className=' pt-5  '>
                        <h4 className='mainTextH4'>Get instant visibility for your business
 </h4>

                        <p className=' mainTextP'>Pay per click marketing services are the perfect choice if you want to reach a larger audience. With this approach, you can immediately purchase visibility rather than building it over time (organic). This will increase your business's visibility and boost its identification in a matter of minutes.

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
export default PayPerClick;