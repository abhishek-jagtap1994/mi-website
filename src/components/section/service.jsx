import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
 
export const images = [
    {
         imgCaption:'general knowledge',
         imgDesc:'We believe that all children should have access to the general knowledge that will help them succeed in life.'
    },
    {
         imgCaption:'experiential learning',
         imgDesc:"Experiential learning impacts children's to learn things easily"
    },
    {
         imgCaption:'language development',
         imgDesc:'Our preschool values language development and promotes opportunities for children to develop their speech and vocabulary.'
    },
    {
         imgCaption:'multiple intelligence',
         imgDesc:'we believe that intelligence is multi-dimensional and can be nurtured and developed in each child.'
    },
    {
         imgCaption:'parents involvement',
         imgDesc:'Parents involvement builds strong relationship between the stakeholders '
    },
    {
         imgCaption:'moral education',
         imgDesc:'we believe that moral education is essential for children. we provide a safe, nurturing environment in which our preschoolers can learn about the rights and wrongs.'
    },
    {
         imgCaption:'creativity',
         imgDesc:"make the child use their creativity skill, at a young age help us understand the child's potential"
    },
    {
         imgCaption:'discipline',
         imgDesc:'Discipline is the first stepping stone for success. We inculcate discipline from a very young age.'
         
    }
    
     
    

]
class Service extends Component {

   
    render(){
        return(
            <div>
              <Container className="pb-3">
            <h1 className="py-2">Speciality</h1>
            <Row className="justify-content-center text-center">

                        {images.map( (val , i) => (     
                        <Col lg="4" key={i}>   
                         <div className="productDiv" style={{ 
      backgroundImage: `url( ${val.imgUrl} )` 
    }} >
					        <div className="captionDiv">
						    <h3>{`${val.imgCaption}`} </h3>
						    <span className="plus"><a href="https://www.jadefinance.org/green_climate_funding">+</a></span>
					     </div>
				         </div>
                         </Col>
                         )  )}


                         
                       
                     </Row>
                </Container>
            </div>
        )
    }
}

export default Service;