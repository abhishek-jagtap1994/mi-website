import React, { Component ,useEffect }  from 'react';
import props from 'prop-types';

import Footer from '../components/layout/footer';
import Header from '../components/layout/header';
import AboutHome from '../components/section/about_home';
import CardSec from '../components/section/cards';
import Goal from '../components/section/goal';
import Service from '../components/section/service';
import Slider from '../components/section/slider';


 class Speciality extends Component {

    componentDidMount(){
        document.title = "Speciality |  Hotel Green County"
      }s

    render(){

    return(
        <div>
        <Header  />   
           <Service/> 
        {/* <Goal isGoal = {true}/> */}
        <Footer/>
        </div>
    );
} 
}
export default Speciality;