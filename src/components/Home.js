import React, { PropTypes } from 'react';
import NavBar from './NavBar';
import NavBarAfterLogIn from './NavBarAfterLogIn';

const Home = ({ className }) => {
    return (
    <div>
         {/* <NavBar/> */}
        <div className="jumbotron">
		<h1 className="display-4">Hello, Welcome to ShareBooks!</h1>
		 <p className="lead">You can share your and get another books free of cost using this application.</p>
		 <hr className="my-4"/>
		 
		 
		 <a className="btn btn-primary btn-lg" href="/signupform" role="button">Sign Up For An Account Here !!</a>
         <p>Already have an Acccount ? Then Log In here</p>
		 <a className="btn btn-primary btn-lg" href="/loginform" role="button">Log IN!!</a>

        </div> 
    </div>	
        
    );
};



export default Home;
