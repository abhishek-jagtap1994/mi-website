import React, { useState, useEffect } from "react";
import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';
import ModalForm from './modal_form';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
 import config from '../../constant';
import DatePicker from "react-datepicker";
import format from "date-fns/format";
import "react-datepicker/dist/react-datepicker.css";
import moment from 'moment';
import InputGroup from 'react-bootstrap/InputGroup';
import NumericInput from 'react-numeric-input';
import Container from 'react-bootstrap/Container';

 
function validate(evt) {
    var theEvent = evt || window.event;
    var key = theEvent.keyCode || theEvent.which;
    key = String.fromCharCode( key );
    var regex = /[0-9]|\./;
    if( !regex.test(key) ) {
      theEvent.returnValue = false;
      if(theEvent.preventDefault) theEvent.preventDefault();
    }
  }
  //============================================
      
const BookingForm = () => {

    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
     
  

    const [mailerState2, setMailerState2] = useState({
        name: "",
        phone:"",
        email: "",
        message: "",
        adults:"",
        rooms:"",
        child:""
      });
  
      function handleStateChange(e) {
        setMailerState2((prevState) => ({
          ...prevState,
          [e.target.name]: e.target.value
        }));
      }

      
  
      const submitEmail = async (e) => {
        e.preventDefault();
       //console.log({ mailerState2 });
       const response = await fetch(config.BASE_URL+"send_booking/", {
         
         method: "POST",
         headers: {
           "Content-type": "application/json"
         },
         body: JSON.stringify({startDate, endDate, mailerState2 }),
       })
         .then((res) => res.json())
         .then(async (res) => {
           const resData = await res;
           console.log(resData);
           if (resData.status === "success") {
             alert("Message Sent");
           } else if (resData.status === "fail") {
             alert("Message failed to send");
           }
         })
         .then(() => {
           setMailerState2({
             email: "",
             name: "",
             phone:"",
             message: "",
             adults:"",
             rooms:"",
             child:""
           });
            

         });
         
     };
    return(
        <>
        <Container className="pb-4 mt-4">
        <Form onSubmit={submitEmail} className="bookingform">
      <Row className="pt-4">
        <Col lg="3" xs="6">
         <Form.Label>Check In</Form.Label>

        <DatePicker
        selected={startDate}
       onChange={(date) => setStartDate(date)}
         
               selectsStart
        startDate={startDate}
        endDate={endDate}
        name="start_date"
        dateFormat="dd/MM/yyyy"
        className="form-control"
        minDate={new Date()}
        value={startDate}
        required
       />
        </Col>
        <Col lg="3"  xs="6">
        <Form.Label>Check Out</Form.Label>   
        <DatePicker
        selected={endDate}
        onChange={(date) => setEndDate(date)}
        selectsEnd
        startDate={startDate}
        endDate={endDate}
        minDate={startDate}
        name="end_date"
        className="form-control"
        dateFormat="dd/MM/yyyy"
        value={ endDate}
        required
      />
        </Col>
        <Col lg="2"  xs="4">
         <Form.Label>Rooms</Form.Label>
      <Form.Control   
	
	 required     maxLength={2} minLength={1} onKeyPress={validate} onChange ={handleStateChange}  name="rooms"
  value={mailerState2.rooms} />
    </Col>
    <Col lg="2" xs="4">
    <Form.Label>Adults</Form.Label>

      <Form.Control   
	    type="text" required maxLength={2} minLength={1} onKeyPress={validate} onChange ={handleStateChange} name="adults"
   value={mailerState2.adults}/>
    </Col>
    <Col lg="2" xs="4">
    <Form.Label>Childrens</Form.Label>
      <Form.Control   
	    required maxLength={2} minLength={1} onKeyPress={validate} onChange ={handleStateChange} name="child"
  value={mailerState2.child}/>
         </Col>
        
      </Row>
      <Row className="pt-md-4 pt-xs-0"  >
      <Col lg="4" xs="4" >
      <Form.Label>Name</Form.Label>

      <Form.Control aria-label="Name" type="text" required placeholder="name " onChange={handleStateChange}
name="name"  value={mailerState2.name} />
</Col>
<Col lg="4" xs="4">
       <Form.Label>Phone</Form.Label>
      <Form.Control aria-label="Last name" type="text" required maxLength={10} minLength={10} onKeyPress={validate} onChange={handleStateChange}
name="phone"  value={mailerState2.phone} placeholder="88888 55555" />
</Col>
<Col lg="4" xs="4">

        <Form.Label>Email</Form.Label>
      <Form.Control aria-label="Last name" type="email" required placeholder="name@example.com" onChange={handleStateChange}
name="email"
value={mailerState2.email} />
         </Col>
      </Row>
      <Row className="py-4">
        <Col>  <button type="submit" className='btn btn-success'  > Submit </button></Col>
       </Row>
    </Form>
    </Container>
        </>

    );
}


export default BookingForm;