import React, { PropTypes } from 'react';
import NavBar from './NavBar';
import NavBarAfterLogIn from './NavBarAfterLogIn';


const font={
    fontWeight: 'bold'
}

export default class ProfilePage extends React.Component{
    render(){
        return (
            <div>
                <div className="jumbotron text-center">
                    <h1 className="display-4">Welcome to ShareBooks!</h1>
                    <img src={require('../images/home.png')} class="img-fluid" alt="Responsive image"></img>
                    <p className="lead" style={font}>You can exchange books with other students from the same college.</p>
                    <hr className="my-4"/>
                 
                 
                    <div className="container text-center">
                        <div className="row text-center">
                            <div className="col-md text-center">
                                <a className="btn btn-primary btn-lg" href="/loginform" role="button">Login</a>
                            </div>
        
                            <div className="col-md text-center">
                                <a className="btn btn-primary btn-lg" href="/signupform" role="button">Sign Up</a>
                            </div>
                        </div>
                    </div>
                </div> 
            </div>	
            );
    }
}


