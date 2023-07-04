import React, { Component }  from 'react';
import Footer from '../components/layout/footer';
import Header from '../components/layout/header';
import AboutUs from '../components/section/about_us';
import Owlslider from '../components/section/owlslider';


class Attraction extends Component {
    componentDidMount(){
        document.title = "About | Hotel Green County"
      }
        render(){
    return(
        <div>
            <Header/>
            <AboutUs/>
           <div style={{ backgroundColor:'#f1f1f1' }}><Owlslider/></div> 
            <Footer/>


        </div>
    );

}
    }
export default Attraction;