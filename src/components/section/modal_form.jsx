import React, { Component, useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import { Modal } from "react-bootstrap";
import Slider from './slider';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
 import Form from 'react-bootstrap/Form';
import config from '../../constant';
import DatePicker from "react-datepicker";
import format from "date-fns/format";
import "react-datepicker/dist/react-datepicker.css";
import moment from 'moment';


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
const ModalForm = (props) => {

    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
     
     
    const [mailerState2, setMailerState2] = useState({
        name: "",
        phone:"",
        email: "",
        message: "",
      });
  
      function handleStateChange(e) {
        setMailerState2((prevState) => ({
          ...prevState,
          [e.target.name]: e.target.value,
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
         body: JSON.stringify({startDate, endDate , mailerState2 }),
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
           });

         });
         
     };
//console.log("PROPS in MODAL", props);

    return(
        <div>
            <Modal
        show={props.show}
        cancel={props.close}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header  >
          <Modal.Title id="contained-modal-title-vcenter">Book Now</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Container className="my-3">
 
        <Row>
     <Col lg="12">
          <Form  onSubmit={submitEmail}
>
             <Form.Group className="mb-3"  >
                 <Form.Label>Arrival Date</Form.Label>
                 
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
       />
             </Form.Group>
             <Form.Group className="mb-3"  >
                 <Form.Label>Checkout Date  </Form.Label>
                 
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




      />
             </Form.Group>
             <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                 <Form.Label>Name</Form.Label>
                 
                 <Form.Control type="text" required placeholder="name " onChange={handleStateChange}
name="name"  value={mailerState2.name} />
             </Form.Group>
             <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                 <Form.Label>Phone</Form.Label>
                 <Form.Control type="text" required maxLength={10} minLength={10} onKeyPress={validate} onChange={handleStateChange}
name="phone"  value={mailerState2.phone} placeholder="88888 55555" />
             </Form.Group>
             <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                 <Form.Label>Email address</Form.Label>
                 <Form.Control type="email" required placeholder="name@example.com" onChange={handleStateChange}
name="email"
value={mailerState2.email} />
             </Form.Group>
             <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                 <Form.Label>Message</Form.Label>
                 <Form.Control as="textarea" rows={3} onChange={handleStateChange}
name="message"     value={mailerState2.message}/>
             </Form.Group>
             
             <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
             <button type="submit" className='btn btn-success'  >    Submit

</button>
             </Form.Group>

             </Form>
     </Col>
     </Row>
     </Container>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.close}>Cancel</Button>
        </Modal.Footer>
      </Modal>
        </div>
    )
};

 

export default ModalForm;
 
