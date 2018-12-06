import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import UploadBookForm from './UploadBookForm';



export default class UploadBook extends React.Component{

            constructor(props){
                super(props);
                this.state={
                    book: {
                     img:'',
                     title:'',
                     description:'',
                     book_isbn: '',
                     type:'',
                     img: '',


                     },
                    successUpload:false,
                }
        
            };
        
            valueChanged = (event) => {
            const {name, value} = event.target;
            this.setState((prevState) => ({
                user: {
                    ...prevState.user,
                    [name]: value
                }
            }));
        };
        
        handleSubmit= (event) => {
            event.preventDefault();
            var data = this.state.user
              UploadBook(data)
                .then(result => {
                    if (result == 401){
                        alert("There was a problem uploading your book.Please try again");
                    }
        
                    if (result == 201){
                        alert("You have successfully uploaded your book.")
                    }
                });
        };
        




        render() {
            return (
               <div>
                <h1>You can upload Books here</h1>  
                <UploadBookForm/>
              </div> 
            );

           }
            
     }
  
  