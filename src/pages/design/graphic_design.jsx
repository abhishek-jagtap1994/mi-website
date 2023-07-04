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
 
 class GraphicDesign extends Component {

    // componentDidMount(){
    //     document.title = "Digital Marketing Services &amp; Website Development | Pune | Mumbai "
    //   }

    render(){

    return(
        <div className='MainServiceDiv'>
 
             <HelmetProvider>
             <title>Graphic Design Company In Pune and Mumbai</title>
	<meta name="description" content="Graphic design is the profession and academic discipline concerned with designing visual communications to transmit messages to the society." />
	<link rel="canonical" href="https://bicads.com/graphic-design-services" />
	
   </HelmetProvider>
   
           <Header/>
            <SubHeader  Title='Graphic Design' subtitle='Design' BkImg='/assets/images/bicads/Banner/Graphic-Designing.jpg'/>
        {/* ------------------------- intro------------------------------------------------- */}

        <div className='ServiceHeading '>
                <Container className=" pb-5   text-center">
                <h1 className='mainTextH1'> Graphic Design</h1>

            <h2 className='px-5 '>Customized Designs For Better Communication</h2>

                      
                </Container>
            </div>
        {/* -------------------------------------------------------------------------- */}
       

            <div className='whyConsistent  ServiceBg'>
                <Container className=" my-4  ">

                     <Row >
                        <Col lg="6">
                            <div className='serviceFirst'>
                        <h4 className='mainTextH4'>Graphic Design Company In Pune and Mumbai (India)

 </h4>

                        <p className=' mainTextP'>Graphic design is the arrangement of textual and pictorial elements to communicate a message or idea. Elements may include icons, shapes, colors, text, and pictures. Graphic design may be applied to a variety of printed material types, including posters, brochures, website interfaces, and more.

</p>  
                        </div>
                                     </Col>
                       <Col lg="6">
                       <Image src="/assets/images/bicads/Banner/Graphic-Designing.png" alt={config.SITE_NAME} fluid   />
                                             </Col>
                    </Row>
                </Container>
            </div>

             {/* -------------------------------------------------------------------------- */}
             <div className='ServiceHeading '>
                <Container className=" pb-5   text-center">
                <h1 className='mainTextH1'>Design Matters</h1>

            <h2 className='px-5 '>Good Graphic Design For A Business
</h2>

            <p>A professional graphic designer can produce effective marketing materials like brochures, business cards, leaflets, banners, and mobile apps in addition to designing a logo. It combines photography, illustration, motion graphics to create attractive images which can capture the audience's attention, convert them into sales, and open up new channels of commerce.</p>

 
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
                       <Image src="/assets/images/bicads/Graphic Design/Impression.png" alt={config.SITE_NAME} fluid   />
                                             </Col>

                                             <Col lg="6">
                            <div className=' pt-5  '>
                        <h4 className='mainTextH4'>Make a lasting impression
 </h4>

                        <p className=' mainTextP'>Creating a positive first impression on your customers is a goal of professional graphic design. We are able to design logos and marketing materials that are clear and consistent with your business' branding message. Your target audience can be drawn out by emphasising the most important aspects of your brand.</p>  
                        </div>
                                     </Col>
                    </Row>
                </Container>
            </div>
        <div className='ServiceBg ServiceBg2'>
                <Container className="    ">

                     <Row >
                       
                       <Col lg={{span:6 , order:2}}>
                       <Image src="/assets/images/bicads/Graphic Design/Right-Design-can-do.png" alt={config.SITE_NAME} fluid   />
                                             </Col>

                     <Col lg={{span:6 , order:1}}>
                            <div className=' pt-5  '>
                        <h4 className='mainTextH4'>Right design can do wonders

 </h4>

                        <p className=' mainTextP'>Our team of graphic designers is skilled at branding, illustration, and layout design. We are capable of producing professional marketing materials of any size business. From small companies to large corporations, we can produce materials for any type of business.

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
                       <Image src="/assets/images/bicads/Graphic Design/Boost-marketing.png" alt={config.SITE_NAME} fluid   />
                                             </Col>

                                             <Col lg="6">
                            <div className=' pt-5  '>
                        <h4 className='mainTextH4'>Boost your marketing
 </h4>

                        <p className=' mainTextP'>The use of graphic design is vital to businesses. It can help them to produce powerful marketing materials that can attract customers and convert them into customers. Boost your business with a graphic design company.</p>  
                        </div>
                                     </Col>
                    </Row>
                </Container>
            </div>
        <div className='ServiceBg ServiceBg2'>
                <Container className="    ">

                     <Row >
                       
                       <Col lg={{span:6 , order:2}}>
                       <Image src="/assets/images/bicads/Graphic Design/Increase-Sales.png" alt={config.SITE_NAME} fluid   />
                                             </Col>

                     <Col lg={{span:6 , order:1}}>
                            <div className=' pt-5  '>
                        <h4 className='mainTextH4'>Increase Sales & Market Position
 </h4>

                        <p className=' mainTextP'>There's no room for confusion when you need to communicate the right message to the right audience. You need a professional graphic designer who understands your objectives and can help you communicate them in a simple and direct manner. With our Graphic Design Services, you'll have the ability to convey your ideas clearly and effectively, ensuring that your messages stick with consumers and turn them into sales.

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
export default GraphicDesign;