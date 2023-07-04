import React, { Component }  from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import { NavLink } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';

 class SubHeader extends Component {
  render(){
    return( 
        <div>
            <section className="breadcrumb-area d-flex align-items-center"   style={{  backgroundImage: `url( ${ this.props.BkImg} )`, }}  >
                <div className="container">
                    <div className="row align-items-center d-none">
                        <div className="col-xl-12 col-lg-12">
                            <div className="breadcrumb-wrap text-left">
                                <div className="breadcrumb-title">
                                    <h2>{this.props.Title} {this.props.subtitle} </h2>    
                                    <div className="breadcrumb-wrap">
                              
                                <nav aria-label="breadcrumb">
                                    <ol className="breadcrumb">
                                        <li className="breadcrumb-item"> <NavLink to="/ " > &nbsp;Home </NavLink> </li>
                                        <li className="breadcrumb-item active" aria-current="page">{this.props.Title} {this.props.subtitle} </li>
                                    </ol>
                                </nav>
                            </div>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </section>
        </div>
    );

}
}
export default SubHeader;
