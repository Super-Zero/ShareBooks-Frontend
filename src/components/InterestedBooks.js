import React from 'react';
import ReactDOM from 'react-dom';
import { Link, BrowserRouterProps } from 'react-router-dom';
import { Button, Form, FormGroup, Label, Input, FormText, withRouter } from 'reactstrap';
import {interestedBooks} from '../API'


import Alert from 'react-s-alert';
import 'react-s-alert/dist/s-alert-default.css';
import 'react-s-alert/dist/s-alert-css-effects/slide.css';


var divStyle = {

    width: '500px',
   };


   var alertStyle = {

    width: '250px',
};



export default class InterestedBooks extends React.Component{

constructor(props){
    super(props);
    this.state={
            
            book:{
                user_id: props.match.params.id,
            },
            successUpload:false,
        }
    };

//  saveUserId(){
//     this.setState({user:{
//         user_id: this.props.location.state.uid
//     }})

        
            valueChanged = (event) => {
            const {name, value} = event.target;
            this.setState((prevState) => ({
                book: {
                    ...prevState.book,
                    [name]: value
                }
            }));
        };
        
        handleSubmit= (event) => {
            
            event.preventDefault();
            //console.log(this.props.location.state.uid);
            // this.setState({book:{
            //     user_id: this.props.location.state.uid
            // }})
            // var data = this.state.book;
            // data.user_id = this.state.book.user_id.toString();
            //console.log(this.state.book);
              interestedBooks(this.state.book)
                .then(result => {
                    if (result == 401){
                        //alert("The book already exist.");
                        Alert.error('The book already exist!', {
                            position: 'top',
                            effect: 'slide',
                            onShow: function () {
                                console.log('aye!')
                            },
                            beep: false,
                            timeout: 'none',
                            offset: 100
                        });
                    }
        
                    if (result == 201){
                        //alert("You have successfully uploaded.")
                        Alert.success('The book was successfully added!', {
                            position: 'top',
                            effect: 'slide',
                            onShow: function () {
                                console.log('aye!')
                            },
                            onClose: function () {
                               //that.setState({successAccount: true})
                            },
                            beep: false,
                            timeout: 1000,
                            offset: 100
                        });
                    }
                });
        };
        
        render() {
            return (
               <div>

                   <div className="container text-center" style={alertStyle}>
                        <span className="container text-center" style={alertStyle}>
                            {this.props.children}
                        </span>
                        <Alert stack={{limit: 3}} />
                    </div>

                
                    <h1>You can upload Interested Books here</h1>  
                    <div  className="container center-block" style={divStyle}>
                        <form onSubmit={this.handleSubmit}>
                

                            <FormGroup>
                                <Label for="book_isbn">BOOK ISBN Number</Label>
                                <Input onChange={this.valueChanged} type="text" name="book_isbn" id="book_isbn" placeholder="123-JKL-7890" />
                            </FormGroup>

                            <div className="container text-center">
                                <FormGroup>
                                    <Button color="primary">Submit</Button>{' '}
                                </FormGroup>
                            </div>
                        </form>
                    </div>
              </div> 
            );

        }
    }
           
  
  