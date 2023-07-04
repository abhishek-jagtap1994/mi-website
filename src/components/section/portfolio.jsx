import React, { Component } from 'react';
import Container  from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image'
import config from '../../constant';
import EnquiryForm from './enquiryform';

class Portfolio extends Component {

    render(){
        return(
            <div className='USP' id='usp'>
                <Container className=" py-5   text-center">
                <h1 className='mainTextH1'> USP </h1>
 
                <Row className='pt-3'>
                    <Col lg="6">
                        <h4  className='learnH4' style={{backgroundImage:`url('/assets/images/mi-web/Usp-header-1.png')`}}> SAFE AND NURTURING ENVIRONMENT</h4>
                        <p>Multiple Intelligence provides a safe and nurturing environment for your child. We have a secure entry system, and all of our classrooms are equipped with safety features like fire extinguishers and first aid kits. Our teachers are all certified in CPR and first aid, and they receive regular training in child development and safety. We also have a nurse on staff at all times.</p>
                    </Col>
                    <Col lg="6">
                        <Image src='/assets/images/mi-web/Safe-and-nutering-environment.png'/>
                    </Col>
                    </Row> 

                <Row className='pt-3'>
                    <Col lg={{span:6, order:2}}> 
                        <h4 style={{backgroundImage:`url('/assets/images/mi-web/Usp-header-2.png')`}}> 	SOCIAL AND EMOTIONAL SKILLS</h4>
                        <p>Your child will learn how to take turns, cooperate, and share with others while playing at Multiple Intelligence. They will also learn how to communicate their needs and emotions, and how to negotiate conflicts. These abilities will assist your child in school and future relationships</p>
                    </Col>
                    <Col lg={{span:6, order:1}}>
                    <Image src='/assets/images/mi-web/Social-and-emotional-skills.png'/>
  </Col>
                </Row>


                <Row className='pt-3'>
                    <Col lg="6">
                        <h4 style={{backgroundImage:`url('/assets/images/mi-web/Usp-header-3.png')`}}>  	DEVELOP COGNITIVE SKILLS</h4>
                        <p>There are many ways Multiple Intelligence can help your child develop important cognitive skills. Some of the ways include providing opportunities for your child to explore and experiment, to ask questions and seek answers, to practice problem solving, and to develop critical thinking skills.</p>
                    </Col>
                    <Col lg="6">
                        <Image src='/assets/images/mi-web/Develop-and-congnative-skills.png'/>
                    </Col>
                    </Row> 

                <Row className='pt-3'> 
                    <Col lg={{span:6, order:2}}> 
                        <h4 className='learnH4' style={{backgroundImage:`url('/assets/images/mi-web/Usp-header-4.png')`}}>  	LEARN AND EXPERIENCE DIFFERENT CULTURES</h4>
                        <p>One way that Multiple Intelligence give children a chance to learn about and experience different cultures is by incorporating culturally diverse books, toys, and games into the classroom. This can help children to understand and appreciate the differences between their own culture and others. Additionally, we invite guest speakers from different cultures to come and talk to the children about their experiences. This can be a great way for children to learn about the customs and traditions of others.</p>
                    </Col>
                    <Col lg={{span:6, order:1}}>
                    <Image src='/assets/images/mi-web/Learn-and-experience-different-culture.png'/>
  </Col>
                </Row>


                <Row className='pt-3'>
                    <Col lg="6">
                        <h4 style={{backgroundImage:`url('/assets/images/mi-web/Usp-header-5.png')`}}>  	 	DEVELOP LOVE FOR LEARNING</h4>
                        <p>We have special classes & activities that help children learn about different topics, such as math, science, or reading. Additionally, We have a variety of books, toys, and games that children can use to explore their interests. By providing children with a variety of stimulating and engaging activities, We can help foster a love for learning in young students.</p>
                    </Col>
                    <Col lg="6">
                        <Image src='/assets/images/mi-web/Deploy-love-for-learning.png'/>
                    </Col>
                    </Row> 

                
               
             

                      
                </Container>
            </div>
        );
    }

}

export default Portfolio;