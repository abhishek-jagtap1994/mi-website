import React, { Component, useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
 import Form from 'react-bootstrap/Form';
import config from '../../constant';
 import FloatingLabel from 'react-bootstrap/FloatingLabel';

     
   
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

  
      const Contactform = () => {
 
       
     

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
                alert("Message Sent");
              } else if (resData.status === "fail") {
                alert("Message failed to send");
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
          <div className=' AboutBgRight ContactDiv'>
             <Container className="py-5">
 
                <Row>
                    <Col lg="6">
                        <h3  className="py-3">Contact Us</h3>
                        <Form  onSubmit={submitEmail}
>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label>Name</Form.Label>
                                
                                <Form.Control type="text" required placeholder="name " onChange={handleStateChange}
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
                            <button type="submit" className='btn btn-primary'  >    Submit

    </button>
                            </Form.Group>

                            </Form>
                    </Col>
                    <Col  lg="6" className="contactUS">
 
<h4 className="pt-3">Address</h4>

<p><b>Pune : </b>C-12, Mayfair Eleganza Phase 1,<br></br> <span class="newline"></span>NIBM Road, Kondhwa,<br></br> <span class="newline"></span>Pune - 411048.
</p>

<p><b>Mumbai : </b>Boston House, Innov8, 7th Floor,<br></br><span class="newline"></span>Suren Rd, Chakala, Gundavali,<br></br><span class="newline"></span>Andheri East,<br></br><span class="newline"></span>Mumbai - 400093
</p>
    <hr/>


      <h4>Email</h4>
<p><i className="fa fa-envelope"></i> <a href="mailto:support@bicads.com">support@bicads.com </a></p>

<hr/>


      <h4>Phone Office</h4>  
<p><i className="fa fa-mobile"></i> <a href="tel: +919082309192"> +91 90823 09192</a> | <a href="tel: +91 93730 80664"> +91 93730 80664</a></p>
                     </Col>
                </Row>
            </Container>

            </div>
         )
    }


export default Contactform;