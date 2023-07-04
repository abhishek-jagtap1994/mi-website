import React, { Component } from 'react';
import Container  from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

 import Button from 'react-bootstrap/Button';

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

class CardSec extends Component {
    render(){
        return(
          <div className="cardSection">
            <Container className="pt-4 pb-5">
               <h1 className="py-2 mt-0">Rooms</h1>
               {/* row-cols-3  */}
                     <Row className=" ">

                      { cardImages.map( ( val, i )=> (
                         <Col lg='4' key = {i}>
                        <Card className="mb-4 mb-md-0"  style={{ width: '100%' }}>
            <Card.Img variant="top" src={`${val.imgUrl}`}  alt=""/>
            <Card.Body>
              <Card.Title className='Cardtitle'>{`${val.imgCaption}`} </Card.Title>
              {/* <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text> 
              <Button variant="primary">Go somewhere</Button>*/}
            </Card.Body>
          </Card>

                        </Col>
) )  }
 
                    </Row>
            </Container>
            </div>
            
        );
    }
}
export default CardSec;