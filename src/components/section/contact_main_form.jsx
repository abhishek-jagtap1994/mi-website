import React, { Component, useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
 import Form from 'react-bootstrap/Form';
import config from '../../constant';
 import FloatingLabel from 'react-bootstrap/FloatingLabel';
 import SubHeader from '../layout/subheader';
 import { NavLink } from 'react-router-dom';
 import Nav from 'react-bootstrap/Nav';
   import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
  
   
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

  
      const ContactMainForm = () => {
 
       
     

        const [mailerState, setMailerState] = useState({
          name: "",
          phone:"",
          email: "",
          message: "",
        });
    
        function handleStateChange(e) {
          setMailerState((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value,
          }));
        }
    
        const submitEmail = async (e) => {
           e.preventDefault();
          //console.log({ mailerState });
          const response = await fetch(config.BASE_URL+"send/", {
            
            method: "POST",
            headers: {
              "Content-type": "application/json"
            },
            body: JSON.stringify({ mailerState }),
          })
            .then((res) => res.json())
            .then(async (res) => {
              const resData = await res;
              console.log(resData);
              if (resData.status === "success") {
                //alert("Message Sent");
                toast.success("Message Sent!" , {autoClose: 2000})

              } else if (resData.status === "fail") {
               // alert("Message failed to send");
                toast.success("Message failed to send!", {autoClose: 2000})

              }
            })
            .then(() => {
              setMailerState({
                email: "",
                name: "",
                phone:"",
                message: "",
              });
 
            });
            
        };
    
         return(


          <div>
              
            
              <Container className="  ">
              <ToastContainer />

                <Row>
                    <Col lg="12">
                     

                        <Form  onSubmit={submitEmail}
>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label>Name</Form.Label>
                                
                                <Form.Control type="text" required placeholder="Name " onChange={handleStateChange}
 name="name"  value={mailerState.name} />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label>Phone</Form.Label>
                                <Form.Control type="text" required maxLength={10} minLength={10} onKeyPress={validate} onChange={handleStateChange}
 name="phone"  value={mailerState.phone} placeholder="88888 55555" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" required placeholder="name@example.com" onChange={handleStateChange}
           name="email"
           value={mailerState.email} />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                <Form.Label>Message</Form.Label>
                                <Form.Control as="textarea" rows={3} onChange={handleStateChange}
           name="message"     value={mailerState.message}/>
                            </Form.Group>
                            
                            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                            <button type="submit" className='btn btn-success '  >    Submit

    </button>
                            </Form.Group>

                            </Form>
                    </Col>
                     </Row>
                     </Container>
 
         </div>
            
         )
    }


export default ContactMainForm;