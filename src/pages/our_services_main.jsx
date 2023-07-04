import React, { Component }  from 'react';
import Footer from '../components/layout/footer';
import Header from '../components/layout/header';
import SubHeader from '../components/layout/subheader';
import AboutUs from '../components/section/about_us';
import Owlslider from '../components/section/owlslider';
import { Helmet, HelmetProvider } from "react-helmet-async";

import Container  from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image'
import config from '../constant';
import { NavLink } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import { Button } from 'react-bootstrap';

export const cardImages = [
    {
      imgUrl: 'assets/images/hotel/Deluxe_Ac_Room.png',
      imgCaption:'Deluxe Ac Room'
  },
    {
      imgUrl: 'assets/images/hotel/standard_Ac_Room.png',
      imgCaption:'standard Ac Room'
  },
  {
      imgUrl: 'assets/images/hotel/Super_Deluxe_Ac_Room.png',
      imgCaption:'Super Deluxe Ac  Room'
  },
  
   ]

class OurServiceMain extends Component {
    componentDidMount(){
        document.title = "BICAds Digital - Website Development and Digital marketing"
      }
        render(){
    return(
        <div>
               <HelmetProvider>
             <title>Website development and digital marketing agency</title>
	<meta name="description" content="360° solutions under one roof for your online presence. Web Design| Social Media| SEO| Performance Marketing| PR| Wikipedia" />
	<link rel="canonical" href="https://bicads.com/our-services" />
   </HelmetProvider>
            <Header/>
            <SubHeader  Title='Our ' subtitle='Services' BkImg='/assets/images/bicads/about/About-us-banner.jpg' />
 
             {/* ------------------------- intro------------------------------------------------- */}

        <div className='ServiceHeading '>
                <Container className=" pb-4   text-center">
                <h1 className='mainTextH1'>Our Services</h1>

              
                </Container>
            </div>
{/* --------------------------------------------------------- */}
            <div className='shipSection text-center ServicePageDiv1'>

                
            <Container className='py-4'>
            <h2 >Design And Development</h2>

 
<p> It's simple to create your own design these days. However, having a professional website design company create your site for you would certainly provide you with several advantages. Despite the fact that a professional website company can create your website / mobile app / crm, there are several advantages to doing so.  Unprofessionally designed or antiquated website would harm search engine ranking performance. You need to invest properly in a website in order to stay at the top of the search engine rankings. Google takes website investment very seriously. </p> 

   <Row>

               <Col lg='4' >
             <Card className="mb-4 mb-md-4 animateBtn"  style={{ width: '100%' }}>
 <div  className='OurServiceBox' style={{  backgroundImage: 'url(/assets/images/bicads/Website-Banner.jpg)'}}></div> 
  <Card.Body>
   <Card.Title className='Cardtitle'> Website Design </Card.Title>
   <Card.Text>
   A well-designed website can get your business in front of your target audience. Brand visibility is critical for business success. A website development company can help you achieve this goal.
   </Card.Text> 
   <NavLink  to="/website-development-services"   activeclassname="active">  <button type="button" class="btn btn-primary btn-md  draw"> Read More</button>
                 </NavLink>   
 </Card.Body>
</Card>

             </Col>

             <Col lg='4' >
             <Card className="mb-4 mb-md-4 animateBtn"  style={{ width: '100%' }}>
 <div  className='OurServiceBox' style={{  backgroundImage: 'url(/assets/images/bicads/Banner/Ecommerce.jpg)'}}></div> 
  <Card.Body>
   <Card.Title className='Cardtitle'> Ecommerce Website </Card.Title>
   <Card.Text>
   E-commerce websites are cheaper than offline businesses because all of the sales procedures are automated online. E-commerce websites allow you to do business anywhere.
   </Card.Text> 
   <NavLink  to="/e-commerce-website-development"   activeclassname="active">  <button type="button" class="btn btn-primary btn-md  draw"> Read More</button>
                 </NavLink>   
 </Card.Body>
</Card>

             </Col>


             <Col lg='4' >
             <Card className="mb-4 mb-md-4 animateBtn"  style={{ width: '100%' }}>
 <div  className='OurServiceBox' style={{  backgroundImage: 'url(/assets/images/bicads/Banner/CRM.jpg)'}}></div> 
  <Card.Body>
   <Card.Title className='Cardtitle'>CRM/CMS DEVELOPMENT </Card.Title>
   <Card.Text>
   A CRM system records and manages all of the information exchanged with clients and prospective clients, enabling salespeople to find the right data. A central database holds all the details of the deal.
   </Card.Text> 
   <NavLink  to="/crm-cms-development-services"   activeclassname="active">  <button type="button" class="btn btn-primary btn-md  draw"> Read More</button>
                 </NavLink>   
 </Card.Body>
</Card>

             </Col>

         </Row>  

         <Row >   
         <Col lg={{ offset:'2' , span:'4' }} >
             <Card className="mb-4 mb-md-4 animateBtn"  style={{ width: '100%' }}>
 <div  className='OurServiceBox' style={{  backgroundImage: 'url(/assets/images/bicads/Banner/Mobile-App-development.jpg)'}}></div> 
  <Card.Body>
   <Card.Title className='Cardtitle'>MOBILE APP DEVELOPMENT</Card.Title>
   <Card.Text>
   App development is a great way to keep customers and gain new ones in today's competitive economy. Mobile apps allow firms to stay up to date with the competition.
   </Card.Text> 
   <NavLink  to="/mobile-app-development-company"   activeclassname="active">  <button type="button" class="btn btn-primary btn-md  draw"> Read More</button>
                 </NavLink>   
 </Card.Body>
</Card>

             </Col>


             <Col lg='4' >
             <Card className="mb-4 mb-md-4 animateBtn"  style={{ width: '100%' }}>
 <div  className='OurServiceBox' style={{  backgroundImage: 'url(/assets/images/bicads/Banner/Graphic-Designing.jpg)'}}></div> 
  <Card.Body>
   <Card.Title className='Cardtitle'>GRAPHIC DESIGN</Card.Title>
   <Card.Text>
   Graphic design is the art of applying elements such as icons, shapes, colors, text, and pictures to printed material such as posters, brochures, websites, and more.
   </Card.Text> 
   <NavLink  to="/graphic-design-services"   activeclassname="active">  <button type="button" class="btn btn-primary btn-md  draw"> Read More</button>
                 </NavLink>   
 </Card.Body>
</Card>

             </Col>
         
            </Row> 
                
            </Container>
        </div>

{/* --------------------------------------------------------- */}

<div className='weBelive   text-center ServicePageDiv'>

<Container className='py-5'>
            <h2 >Digital Marketing</h2>

 
<p> The most important element of any enterprise is to be where their customers are. With the help of technology, individuals from diverse fields are able to connect online. With digital marketing, you can connect with the right target audience. We provide a wide range of services to help you establish and maintain your company online.</p> 

   <Row >

               <Col lg='4' >
             <Card className="mb-4 mb-md-4 animateBtn"  style={{ width: '100%' }}>
 <div  className='OurServiceBox' style={{  backgroundImage: 'url(/assets/images/bicads/Banner/Social-Media-Marketing.jpg)'}}></div> 
  <Card.Body>
   <Card.Title className='Cardtitle'> Social media marketing </Card.Title>
   <Card.Text>
   Social media networks are a cost-effective marketing opportunity. Anyone who isn't using them is missing out.
   </Card.Text> 
   <NavLink  to="/social-media-marketing-company"   activeclassname="active">  <button type="button" class="btn btn-primary btn-md  draw"> Read More</button>
                 </NavLink>   
 </Card.Body>
</Card>

             </Col>

             <Col lg='4' >
             <Card className="mb-4 mb-md-4 animateBtn"  style={{ width: '100%' }}>
 <div  className='OurServiceBox' style={{  backgroundImage: 'url(/assets/images/bicads/Banner/SEO.jpg)'}}></div> 
  <Card.Body>
   <Card.Title className='Cardtitle'> SEO </Card.Title>
   <Card.Text>
   E-commerce websites are cheaper than offline businesses because all of the sales procedures are automated online. E-commerce websites allow you to do business anywhere.
   </Card.Text> 
   <NavLink  to="/search-engine-optimization-company"   activeclassname="active">  <button type="button" class="btn btn-primary btn-md  draw"> Read More</button>
                 </NavLink>   
 </Card.Body>
</Card>

             </Col>


             <Col lg='4' >
             <Card className="mb-4 mb-md-4 animateBtn"  style={{ width: '100%' }}>
 <div  className='OurServiceBox' style={{  backgroundImage: 'url(/assets/images/bicads/Banner/PPC.jpg)'}}></div> 
  <Card.Body>
   <Card.Title className='Cardtitle'>Pay Per Click </Card.Title>
   <Card.Text>
   We can help you set up campaigns that target your ideal customers with Google AdWords or Facebook Ads. We understand how to maximise the effectiveness of the campaign.
   </Card.Text> 
   <NavLink  to="/ppc-pay-per-click-marketing-services"   activeclassname="active">  <button type="button" class="btn btn-primary btn-md  draw"> Read More</button>
                 </NavLink>   
 </Card.Body>
</Card>

             </Col>

         </Row>  

         <Row >   
         <Col lg='4' >
             <Card className="mb-4 mb-md-4 animateBtn"  style={{ width: '100%' }}>
 <div  className='OurServiceBox' style={{  backgroundImage: 'url(/assets/images/bicads/Banner/Content-Marketing.jpg)'}}></div> 
  <Card.Body>
   <Card.Title className='Cardtitle'>Content Marketing</Card.Title>
   <Card.Text>
   To achieve your goals, we determine what your audience should be able to do, produce blog posts, infographics, podcasts, videos, and more.
   </Card.Text> 
   <NavLink  to="/content-marketing-services"   activeclassname="active">  <button type="button" class="btn btn-primary btn-md  draw"> Read More</button>
                 </NavLink>   
 </Card.Body>
</Card>

             </Col>


             <Col lg='4' >
             <Card className="mb-4 mb-md-4 animateBtn"  style={{ width: '100%' }}>
 <div  className='OurServiceBox' style={{  backgroundImage: 'url(/assets/images/bicads/Banner/Branding-Services.jpg)'}}></div> 
  <Card.Body>
   <Card.Title className='Cardtitle'>Branding Services</Card.Title>
   <Card.Text>
   Your business should be represented by the best in the industry. We can work with you to design a logo, colour scheme, and aesthetic language that expresses your personal identity.
   </Card.Text> 
   <NavLink  to="/branding-services"   activeclassname="active">  <button type="button" class="btn btn-primary btn-md  draw"> Read More</button>
                 </NavLink>   
 </Card.Body>
</Card>

             </Col>


             
             <Col lg='4' >
             <Card className="mb-4 mb-md-4 animateBtn"  style={{ width: '100%' }}>
 <div  className='OurServiceBox' style={{  backgroundImage: 'url(/assets/images/bicads/Banner/PR.jpg)'}}></div> 
  <Card.Body>
   <Card.Title className='Cardtitle'>Digital PR</Card.Title>
   <Card.Text>
   A Digital PR Service provides value to your target audience by creating compelling content that increases awareness of the brand and online presence.
   </Card.Text> 
   <NavLink  to="/digital-pr"   activeclassname="active">  <button type="button" class="btn btn-primary btn-md  draw"> Read More</button>
                 </NavLink>   
 </Card.Body>
</Card>

             </Col>
         
         
            </Row> 

            <Row >   

                <Col lg={{ offset:'4' , span:'4' }}>

                <Card className="mb-4 mb-md-4 animateBtn"  style={{ width: '100%' }}>
 <div  className='OurServiceBox' style={{  backgroundImage: 'url(/assets/images/bicads/Banner/Wikipedia.jpg)'}}></div> 
  <Card.Body>
   <Card.Title className='Cardtitle'>Wikipedia Page</Card.Title>
   <Card.Text>
   A Digital PR Service provides value to your target audience by creating compelling content that increases awareness of the brand and online presence.
   </Card.Text> 
   <NavLink  to="/wikipedia-page-creation-service"   activeclassname="active">  <button type="button" class="btn btn-primary btn-md  draw"> Read More</button>
                 </NavLink>   
 </Card.Body>
</Card>
                </Col>
            </Row>
                
            </Container>

</div>

{/* --------------------------------------------------------- */}

             <Footer/>


        </div>
    );

}
    }
export default OurServiceMain;