import React, { Component, PropTypes } from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';


var divStyle = {

 width: '500px',
};



class SignupForm extends Component {
   // static propTypes = {
   //     className: PropTypes.string,
   // };

   // constructor(props) {
   //     super(props);
   // }


   render() {
       return (

           <div  className="container center-block" style={divStyle}>
               <FormGroup>

                    <Label for="firstName">First Name</Label>
                     <Input type="text" name="firstName" id="firstName" placeholder="Carlos" />
                 </FormGroup>

                <FormGroup>
                    <Label for="lastName">Last Name</Label>
                     <Input type="text" name="lastName" id="lastName" placeholder="Andrade" />
                </FormGroup>

                 <FormGroup>
                    <Label for="email">Email</Label>
                    <Input type="email" name="email" id="email" placeholder="Carlos@gmail.com" />
                 </FormGroup>

                <FormGroup>
                    <Label for="password">Password</Label>
                    <Input type="password" name="password" id="password" placeholder="password placeholder" />
                </FormGroup>
                
                <FormGroup>
                 <Label for="phone">Phone</Label>
                 <Input type="text" name="phone" id="phone" placeholder="789-056-9876" />
                </FormGroup>

               <FormGroup>
                    <Label for="studentId">StudentId</Label>
                    <Input type="text" name="studentId" id="studentId" placeholder="67893458" />
               </FormGroup>

                   <FormGroup>
                    <Label for="major">Major</Label>
                    <Input type="text" name="major" id="major" placeholder="Computer Science" />
               </FormGroup>

                   <FormGroup>
         <Label for="selectSchool">Select School</Label>
         <Input type="select" name="selectSchool" id="selectSchool">
           <option>York College</option>
           <option>Hunter College</option>
           <option>City College</option>
           <option>Brooklyn College</option>
           <option>Queens College</option>
         </Input>
          </FormGroup>

          <FormGroup>
         <Label for="selectLevel">What year you are in??</Label>
         <Input type="select" name="selectLevel" id="selectLevel">
           <option>Freshmen</option>
           <option>Sophmore</option>
           <option>Junior</option>
           <option>Senior</option>
           </Input>
          </FormGroup>

       <FormGroup>
        <Button color="primary">Submit</Button>{' '}
       </FormGroup>
     </div>

       );
   }
}

export default SignupForm;