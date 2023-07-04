import React, { useState, useEffect } from "react";
import Carousel from 'react-bootstrap/Carousel';
 

 const SliderObj = [
    {
        imgUrl: '/assets/images/hotel/banner_01.jpg',
        imgAlt: 'about icon rajibraj91 rajibraj',
        title: 'Skilled Instructors',
        desc: 'Distinctively provide acces mutfuncto users whereas communicate leveraged services',  
    },
    {
        imgUrl: '/assets/images/hotel/banner_02.jpg',
        imgAlt: 'about icon rajibraj91 rajibraj2',
        title: 'Get Certificate',
        desc: 'Distinctively provide acces mutfuncto users whereas communicate leveraged services',
    },
    {
        imgUrl: '/assets/images/hotel/banner_03.jpg',
        imgAlt: 'about icon rajibraj91 rajibraj33',
        title: 'Online Classes',
        desc: 'Distinctively provide acces mutfuncto users whereas communicate leveraged services',
    },
      { imgUrl: '/assets/images/hotel/bannar_04.jpg',
      imgAlt: 'about icon rajibraj91 rajibraj33',
      title: 'Online Classes',
      desc: 'Distinctively provide acces mutfuncto users whereas communicate leveraged services',
  },

];

  

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
    
 
const Slider = () => {

  
//console.log("PROPS in MODAL", props);

//  const [showLogin, setShowLogin] = useState(false);

   
    return(
      
    <Carousel fade interval={1000}>
       {
    SliderObj.map( (val , i) => (     
      <Carousel.Item key={i}>
        <img
          className="d-block w-100"
          src={`${val.imgUrl}`}
          alt={`${val.imgAlt}`}
        />
        <Carousel.Caption  >
          {/* <h3>{`${val.title}`}</h3>
          <p>{`${val.desc}`}</p> */}
      {/* <Button className="btn btn-success" onClick={() => setShowLogin(true)}>Book Now</Button>
        <ModalForm show={showLogin} close={() => setShowLogin(false)}  />   */}

        
            </Carousel.Caption>
      </Carousel.Item>
)
)
}  
 
    </Carousel>
       
        );
}
   
export default Slider;