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
 
 class Ecommerce extends Component {

    // componentDidMount(){
    //     document.title = "Digital Marketing Services &amp; Website Development | Pune | Mumbai "
    //   }

    render(){

    return(
        <div className='MainServiceDiv'>
 
             <HelmetProvider>
             <title>Ecommerce Website Development In Pune and Mumbai</title>
	<meta name="description" content="Ecommerce website should provide information, support, and examples of how the products can meet all of the company&#039;s requirements." />
	<link rel="canonical" href="https://bicads.com/e-commerce-website-development" />
   </HelmetProvider>
   
           <Header/>
            <SubHeader  Title='Website ' subtitle='Design' BkImg='/assets/images/bicads/Banner/Ecommerce.jpg'/>
        {/* ------------------------- intro------------------------------------------------- */}

        <div className='ServiceHeading '>
                <Container className=" pb-5   text-center">
                <h1 className='mainTextH1'> Ecommerce Website </h1>

            <h2 className='px-5 '>Got A Passion?  <br></br> Take It Online With Us!!</h2>

                      
                </Container>
            </div>
        {/* -------------------------------------------------------------------------- */}
       

            <div className='whyConsistent  ServiceBg'>
                <Container className=" my-4  ">

                     <Row >
                        <Col lg="6">
                            <div className='serviceFirst '>
                        <h4 className='mainTextH4'>Ecommerce Website Development Services In Pune & Mumbai (India)
 </h4>

                        <p className='mainTextP'>Setting up an e-commerce website is considerably less expensive than setting up an offline business. All of the sales procedures for your business are automated online. E-commerce websites allow you to do business anywhere, without being constrained by geographic locations. Amazon's online shopping website has grown to become a successful platform by adapting to customers' demands and monitoring products closely. As a result, they're now able to sell a wide range of products in many different markets.

</p>  
                        </div>
                                     </Col>
                       <Col lg="6">
                       <Image src="/assets/images/bicads/Banner/Ecommerce.png" alt={config.SITE_NAME} fluid   />
                                             </Col>
                    </Row>
                </Container>
            </div>

             {/* -------------------------------------------------------------------------- */}
             <div className='ServiceHeading '>
                <Container className=" pb-5   text-center">
                <h1 className='mainTextH1'>  Services 24/7 </h1>

            <h2 className='px-5 '>Sell Your Products & Services 24/7</h2>
            <p>Setting up an ecommerce website is a fantastic method to sell your items and services 24 hours a day, seven days a week. You may have up to 10 items, no up-front expenses or contracts, if you wish to begin an online business. An ecommerce website may be developed using the proper platform. You may sell your items and services to customers worldwide using an automated sales system, saving time and money.</p>

 
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
                       <Image src="/assets/images/bicads/Ecommerce Website/Build-Your-Business.png" alt={config.SITE_NAME} fluid   />
                                             </Col>

                                             <Col lg="6">
                            <div className=' pt-5  '>
                        <h4 className='mainTextH4'>Build your business for less
 </h4>

                        <p className=' mainTextP'>Setting up an e-commerce website is cheaper than setting up a brick and mortar company. This means you can build your business for less and that you don't have to limit your customers to a certain time of day. E-commerce websites eliminate any geographic restrictions you would normally confront with an office-based business, so your potential customers may view your website at any time.</p>  
                        </div>
                                     </Col>
                    </Row>
                </Container>
            </div>
        <div className='ServiceBg ServiceBg2'>
                <Container className="    ">

                     <Row >
                       
                       <Col lg={{span:6 , order:2}}>
                       <Image src="/assets/images/bicads/Ecommerce Website/Work-from-anywere.png" alt={config.SITE_NAME} fluid   />
                                             </Col>

                     <Col lg={{span:6 , order:1}}>
                            <div className=' pt-5  '>
                        <h4 className='mainTextH4'>Work from anywhere

 </h4>

                        <p className=' mainTextP'>The greatest thing about an e-commerce website is that everything is ever-changing. There is no need to worry about technicalities or keeping track of a large development team because everything may be updated on the fly. You simply input the content and leave the website development to the website builders.
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
                       <Image src="/assets/images/bicads/Ecommerce Website/Measure-your-success.png" alt={config.SITE_NAME} fluid   />
                                             </Col>

                                             <Col lg="6">
                            <div className=' pt-5  '>
                        <h4 className='mainTextH4'>You can measure success
 </h4>

                        <p className=' mainTextP'>Having an ecommerce website will provide you with detailed analytics that measure everything from clicks to conversions to session counts. It’s never been easier to get real-time feedback on the success of your company. With modern web development, you may now not just generate leads but also monitor how much revenue you generate from them. Make educated decisions with access to detailed analytics that measure everything from clicks to conversions to session counts.</p>  
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
export default Ecommerce;