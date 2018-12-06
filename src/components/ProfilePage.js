import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import { Link, BrowserRouterProps } from 'react-router-dom'
import Main from './Main';
import NavBarAfterLogIn from './NavBarAfterLogIn';
import {profile} from '../API'


 export default class ProfilePage extends React.Component{

    constructor(props) {
        super(props);
        this.state={
            user_id: null,
            user: {
                first_name: '',
                last_name:'',
                email: '',
                phone: '',
                student_id: '',
                school: '',
                major:'',
                classification:''
            },
            ProfileLoaded:false,
            isDisable: true,
        }
     }

     updateProfile=(event)=>{
        event.preventDefault();
        this.setState({isDisable: false})
     };

     setUserInfo(data){
         this.setState({
             user:{
                first_name: data.first_name,
                last_name: data.last_name,
                email: data.email,
                phone: data.phone,
                student_id: data.student_id,
                school: data.school,
                major: data.student_major,
                classification: data.student_classification
             }
         });
     };

     loadProfile(){
        this.setState({user_id: this.props.location.state.uid});
        profile(this.props.location.state.uid)
        .then(res =>{
            // console.log(res);
            this.setUserInfo(res);
        })
     }

    render() {      
        if (!this.state.ProfileLoaded){
            this.loadProfile();
            this.setState({ProfileLoaded: true})
        }

    return (  
        
        <div className="container">

            <div className="jumbotron text-center">
                    <h1 className="display-4">{`Welcome to your profile, ${this.state.user.first_name}`}</h1>
            </div>

            <div className= "container">

                <form>
                    <FormGroup>
                        <Label for="first_name">First Name</Label>
                        <Input onChange={this.valueChanged} type="text" name="first_name" id="first_name" defaultValue={this.state.user.first_name} disabled={this.state.isDisable}/>
                    </FormGroup>

                    <FormGroup>
                        <Label for="last_name">Last Name</Label>
                        <Input onChange={this.valueChanged} type="text" name="last_name" id="last_name" defaultValue={this.state.user.last_name} disabled={this.state.isDisable}/>
                    </FormGroup>

                    <FormGroup>
                        <Label for="email">Email</Label>
                        <Input onChange={this.valueChanged} type="email" name="email" id="email" defaultValue={this.state.user.email} disabled={this.state.isDisable}/>
                    </FormGroup>

                    <FormGroup>
                        <Label for="phone">Phone</Label>
                        <Input onChange={this.valueChanged} type="text" name="phone" id="phone" defaultValue={this.state.user.phone} disabled={this.state.isDisable}/>
                    </FormGroup>

                    <FormGroup>
                        <Label for="student_id">Student ID</Label>
                        <Input onChange={this.valueChanged} type="text" name="student_id" id="student_id" defaultValue={this.state.user.student_id} disabled={this.state.isDisable}/>
                    </FormGroup>

                    <FormGroup>
                        <Label for="student_major">Major</Label>
                        <Input onChange={this.valueChanged} type="text" name="student_major" id="student_major" defaultValue={this.state.user.major} disabled={this.state.isDisable}/>
                    </FormGroup>

                    <FormGroup>
                        <Label for="school">Select School</Label>
                        <Input onChange={this.valueChanged} type="select" name="school" id="school" defaultValue={this.state.user.school} disabled={this.state.isDisable}>
                            <option>York College</option>
                            <option>Hunter College</option>
                            <option>City College</option>
                            <option>Brooklyn College</option>
                            <option>Queens College</option>
                        </Input>
                    </FormGroup>

                    <FormGroup>
                        <Label for="student_classification">Classification</Label>
                        <Input onChange={this.valueChanged} type="select" name="student_classification" id="student_classification" defaultValue={this.state.user.student_classification} disabled={this.state.isDisable}>
                            <option>Freshmen</option>
                            <option>Sophmore</option>
                            <option>Junior</option>
                            <option>Senior</option>
                        </Input>
                    </FormGroup>

                    <br></br>

                    <div className="container">
                        <div className="row">
                            <div className="col-sm text-center">
                                <Button onClick={this.updateProfile} color="primary">Update</Button>
                            </div>

                            <div className="col-sm text-center">
                                <Button  color="primary">Submit</Button>
                            </div>

                            <div className="col-sm text-center">
                                <Link to={{
                                    pathname: '/uploadbook',
                                    state:{uid: this.state.user_id}
                                }}>
                                    <Button className="center-block bg-primary">Upload Books</Button>
                                 </Link>
                            </div>

                        </div>
                    </div>
                </form>
            </div>
        </div> 
    );
    
    }
}
  