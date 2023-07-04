import React, { Component, useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
 import Form from 'react-bootstrap/Form';
 
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

    const useFetch = url => {
        const [data, setData] = useState(null);
        const [loading, setLoading] = useState(true);
      
        const fetchUser = async () => {
          const response = await fetch(url);
          const data = await response.json();
          const [user] = data.results;
          setData(user);
          setLoading(false);
        };
      
        useEffect(() => {
          fetchUser();
        }, []);
      
        return { data, loading };
      };

      const Contactform = () => {
        const { data, loading } = useFetch('https://api.randomuser.me/');

         return(
             <Container className="my-3">
<div className="App">
      {loading ? (
        <div>Loading...</div>
      ) : (
        <React.Fragment>
          <div className="name">
            {data.name.first} {data.name.last}
          </div>
          <img className="cropper" src={data.picture.large} alt="avatar" />
        </React.Fragment>
      )}
    </div>
                <Row>
                    <Col lg="6">
                        <h3  className="py-3">Contact Us</h3>
                        <Form    onSubmit={handleSubmit}>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label>Name</Form.Label>
                                
                                <Form.Control type="text" required placeholder="name " />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label>Phone</Form.Label>
                                <Form.Control type="text" required maxLength={10} minLength={10} onKeyPress={validate}  placeholder="88888 55555" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" required placeholder="name@example.com" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                <Form.Label>Example textarea</Form.Label>
                                <Form.Control as="textarea" rows={3} />
                            </Form.Group>
                            
                            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                            <button type="submit" className='btn btn-success'>Submit</button>

                            </Form.Group>

                            </Form>
                    </Col>
                    <Col  lg="6" className="contactUS">
                    <h3  className="py-3">Inquire Now</h3>

<h4 className="pt-3">Address</h4>

<p># 214, C-3, Bramha Majestic. NIBM Road, Kondhwa 
Pune – 411048<br/>
Maharashtra INDIA  
</p>
    <hr/>


      <h4>Email</h4>
<p><i className="fa fa-envelope"></i> <a href="mailto:enhancist@enhancist.com">enhancist@enhancist.com </a></p>

<hr/>


      <h4>Phone Office</h4>
<p><i className="fa fa-mobile"></i> <a href="tel: +91 8484 97 2274"> +91 8484 97 2274</a></p>
                    </Col>
                </Row>
            </Container>

            
         )
    }


export default Contactform;