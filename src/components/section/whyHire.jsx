import React, { Component } from 'react';
import Container  from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image'
import config from '../../constant';
import { Fade } from "react-awesome-reveal";

class WhyHire extends Component {

    render(){
        return(
            <div className='whyHireDiv' id='whyus'>
                <Container className=" pt-5 ">
                <h1 className='mainTextH1 pb-5 '>   WHY US </h1>

               

                     <Row >
                       <Col lg='6'>
                       {/* <Fade direction='left' triggerOnce> */}

                        <div className='whyusBox' style={{backgroundImage: `url(/assets/images/mi-web/Green-box.png)`}}>
                        <div className='title'>
                            <Image src='/assets/images/mi-web/Critical-Abilities.png' />
                            Critical abilities  
                        </div>
                        <div className='whyCaption'>It is important for a child to learn skills rather than just listen to teachers, which is why we employ the best methods to teach reading, logic, concentration, and perseverance, we teach our students these critical abilities.</div>

                        </div>
                        {/* </Fade> */}
                       </Col>
                       <Col lg='6'>
                       {/* <Fade direction='up' triggerOnce> */}
                       <div className='whyusBox ' style={{backgroundImage: `url(/assets/images/mi-web/blue-box.png)`}}>
                        <div className='title text-white'>
                            <Image src='/assets/images/mi-web/Skill-Centric.png' />
                         	SKILL CENTRIC 
                        </div>
                        <div className='whyCaption text-white'>Instead of organising the classrooms according to grades or age, they are organised into different skill stations, as per skill-based curriculum, to provide an immersive learning environment for each and every child.</div>

                        </div>
                        {/* </Fade> */}
                       </Col>
                    </Row>

                    <Row>
                        <Col lg={{order:2 , span:6}}>
                        {/* <Fade direction='right' triggerOnce > */}

                        <div className='whyusBox' style={{backgroundImage: `url(/assets/images/mi-web/Green-box.png)`}}>
                        <div className='title '>
                            <Image src='/assets/images/mi-web/Flexible-Timing.png' />
                            Flexible timings 
                        </div>
                        <div className='whyCaption'>Our flexible school timings allow us to cater to the needs of working parents and their schedules. We offer half-day and full-day options, as well as before- and after-school care. This flexibility allows parents to choose what works best for them and their family.</div>

                        </div>
                        {/* </Fade> */}
                        </Col>
                        <Col lg={{order:1 , span:6}}>
                        {/* <Fade direction='down' triggerOnce> */}

                        <div className='whyusBox' style={{backgroundImage: `url(/assets/images/mi-web/blue-box.png)`}}>
                        <div className='title text-white'>
                            <Image src='/assets/images/mi-web/Personalized-learning.png' />
                             PERSONALISED LEARNING 
                        </div>
                        <div className='whyCaption text-white'>No two kids are the same, then why should they learn the same thing, same way and at the same pace? Multiple Intelligence is one of the top preschools in Pune where kids learn at their own pace and move ahead once they learn rather than at the pace of the teacher.</div>

                        </div>
                        {/* </Fade> */}
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }

}

export default WhyHire;