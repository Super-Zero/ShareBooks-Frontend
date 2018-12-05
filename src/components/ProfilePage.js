import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import { Link } from 'react-router-dom'
import Main from './Main';
import NavBarAfterLogIn from './NavBarAfterLogIn';




 export default class ProfilePage extends React.Component{

    constructor(props) {
        super(props);
        this.state={
            user: {
                first_name: '',
                last_name: '',
                email:'',
                phone: '',
                student_id:'',
                school: '',
                major:'',
                classification:'',

            },
            ProfileLoaded:false,
        }
     }


     loadProfile=()=>{
        
     };

    render() {
    return (  

        <div>
         <NavBarAfterLogIn/>


        <div className="container">

         <div className= "jumbotron">
            <h1 className="display-4">{`Hello, ${this.state.user.first_name}`}</h1>
             <p className="lead">Welcome to your profile!</p>
             <hr className="my-4"/>
             <p>{`First Name: ${this.state.user.first_name}  LastName: ${this.state.user.first_name}`}</p>
             <p>{`Email: ${this.state.user.email}`}</p>
             <p>{`Phone: ${this.state.user.phone}`}</p>
             <p>{`Student ID: ${this.state.user.student_id}`}</p>
             <p>{`School: ${this.state.user.school}`}</p>
             <p>{`Major: ${this.state.user.major}`}</p>
             <p>{`Classification: ${this.state.user.classification}`}</p>
             
             <Link  to='/viewbooks'  className="btn btn-primary btn-lg"  role="button">My Library</Link> 

         </div>
        </div> 

       </div> 
    );
    
    }
}
  