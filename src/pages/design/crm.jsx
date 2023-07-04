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
 
 class Crm extends Component {

    // componentDidMount(){
    //     document.title = "Digital Marketing Services &amp; Website Development | Pune | Mumbai "
    //   }

    render(){

    return(
        <div className='MainServiceDiv'>
 
             <HelmetProvider>
             <title>CRM-CMS Development Company In Pune and Mumbai</title>
	<meta name="description" content="The combination of CMS and CRM systems is crucial to any enterprise. A CMS can help your enterprise manage its clients effectively." />
	<link rel="canonical" href="https://bicads.com/crm-cms-development-services" />
   </HelmetProvider>
   
           <Header/>
            <SubHeader  Title='CRM/CMS ' subtitle='Development' BkImg='/assets/images/bicads/Banner/CRM.jpg'/>
        {/* ------------------------- intro------------------------------------------------- */}

        <div className='ServiceHeading '>
                <Container className=" pb-5   text-center">
                <h1 className='mainTextH1'> CRM/CMS Development </h1>

            <h2 className='px-5 '>Centrally Manage Your Business. Never Miss A Lead.<br></br> Ensure Your Customers Are Happy Always
   Take It Online With Us!!</h2>

                      
                </Container>
            </div>
        {/* -------------------------------------------------------------------------- */}
       

            <div className='whyConsistent  ServiceBg'>
                <Container className=" my-4  ">

                     <Row >
                        <Col lg="6">
                            <div className='serviceFirst'>
                        <h4 className='mainTextH4'>CRM/CMS Development Company In Pune and Mumbai (India)

 </h4>

                        <p className=' mainTextP'>A CRM system is a tremendous tool for managing your company and your salespeople. It records and maintains all of the information you exchange with clients and prospective clients. CRMs enable salespeople to find the right data without having to search through records and files. All the details about the deal are saved in a central database. CRM is without a doubt the best feature since everything is saved in a central location.



</p>  
                        </div>
                                     </Col>
                       <Col lg="6">
                       <Image src="/assets/images/bicads/Banner/CRM.png" alt={config.SITE_NAME} fluid   />
                                             </Col>
                    </Row>
                </Container>
            </div>

             {/* -------------------------------------------------------------------------- */}
             <div className='ServiceHeading '>
                <Container className=" pb-5   text-center">
                <h1 className='mainTextH1'>  CRM</h1>

            <h2 className='px-5 '>Your CRM should work for you, not the other way around</h2>

            <p>Your custom software should be adapted to match your CRM in order to serve as an extension of your business. That's why we offer a variety of CRM options that are tailored to your particular business requirements when building software. From healthcare providers to manufacturing companies, restaurants to retail outlets, there are CRMs for all types of businesses.

</p>

 
            <Row className='goodWebsite  d-none'>
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
                       <Image src="/assets/images/bicads/CRM CMS Development/Maximus-your-sales.png" alt={config.SITE_NAME} fluid   />
                                             </Col>

                                             <Col lg="6">
                            <div className=' pt-5  '>
                        <h4 className='mainTextH4'>Maximize your sales potential
 </h4>

                        <p className=' mainTextP'>Prioritize sales over administrative tasks and spend more time chatting with prospective clients. With CRM development, you'll have everything you need in one place to close more deals. You'll be able to centralize your database and utilise it from anywhere, making your marketing and sales efforts much simpler.</p>  
                        </div>
                                     </Col>
                    </Row>
                </Container>
            </div>
        <div className='ServiceBg ServiceBg2'>
                <Container className="    ">

                     <Row >
                       
                       <Col lg={{span:6 , order:2}}>
                       <Image src="/assets/images/bicads/CRM CMS Development/Reduce-time-spend.png" alt={config.SITE_NAME} fluid   />
                                             </Col>

                     <Col lg={{span:6 , order:1}}>
                            <div className=' pt-5  '>
                        <h4 className='mainTextH4'>Reduce time spent on admin

 </h4>

                        <p className=' mainTextP'>Having all your contact information in one place can save you hours of time each day. Paper records and CRMs like them may no longer be used because they save hours of time. No longer having to hunt through files and records can save you time.

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
                       <Image src="/assets/images/bicads/CRM CMS Development/Keep-leads-warm.png" alt={config.SITE_NAME} fluid   />
                                             </Col>

                                             <Col lg="6">
                            <div className=' pt-5  '>
                        <h4 className='mainTextH4'>Keep leads warm
 </h4>

                        <p className=' mainTextP'>Using a CRM to track everything will reduce the amount of time you spend trying to warm up a customer who is already sold on your product by cutting down on the amount of manual work. You should be spending your time prospecting and generating leads, not going back and forth with an old lead trying to convince them to buy from you.</p>  
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
export default Crm;