import React, { PropTypes } from 'react';
import NavBar from './NavBar';
import NavBarAfterLogIn from './NavBarAfterLogIn';
import {Carousel} from 'react-bootstrap'

import CarouselHomePage from './CarouselHomePage'

const font={
    fontWeight: 'bold'
};

const divStyle = {
    // backgroundColor: 'gray',
    color: 'white',
    fontWeight: 'bold'
  };


  
export default class ProfilePage extends React.Component{
    render(){
        return (
            <body className="bg-default">
                <div className="main-content">

                    {/* NAVIGATION BAR */}
                    <NavBar />
                    
                    {/* HEADER */}
                    <div className="header bg-gradient-primary py-7 py-lg-9">
                        <div className="container">
                            <div className="header-body text-center mb-0">
                            <div className="row justify-content-center">
                                <div className="col-lg-5 col-md-6">
                                    <h1 className="text-white">Welcome to ShareBooks</h1>
                                    
                                </div>
                            </div>
                            </div>
                        </div>
                        <div className="separator separator-bottom separator-skew zindex-100">
                            <svg x="0" y="0" viewBox="0 0 2560 100" preserveAspectRatio="none" version="1.1" xmlns="http://www.w3.org/2000/svg">
                            <polygon className="fill-default" points="2560 0 2560 100 0 100"></polygon>
                            </svg>
                        </div>
                    </div>
                

                    {/* CONTENT */}
                
                    <div className="container mt--9 pb-9">
                        <div className="container">
                            <CarouselHomePage />
                        </div>
                    </div> 
                    
                </div>	
            </body>
        );
    }
}


