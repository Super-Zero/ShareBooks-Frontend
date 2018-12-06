const API_URL ="/api/signup";

//var data2 = {first_name: 'example'};

export function createUser(data){
    console.log(data);
    return fetch('/api/signup', {
        method: 'POST',
        // mode: "no-cors",
        //mode: "cors", 
        //credentials: "include",
        body: JSON.stringify(data),
        headers:{
            'Content-Type': 'application/json'  
        },
        })
        .then(response => response.status)
        .catch((error) => {
            console.error(error);
        });
}

// API for Authentification
export function login(info){
    return fetch("/api/login", {
        method: 'POST',
        body: JSON.stringify(info),
        headers:{
            'Content-Type': 'application/json'
        },
    })
    .then(response => {
        if(response.status === 200) {
          return response.json();
        }
        else{
            return {user_id: 0};
        }
      })
    .catch((error) => {
        console.error(error);
    })
}

// API to get user's info
export function profile(info){

    console.log(info);
    return fetch("/api/profile", {
        method: 'POST',
        body: JSON.stringify({user_id: info}),
        headers:{
            'Content-Type': 'application/json'
        },
    })
    .then(response => {
        //console.log(response.json());
        return response.json();
    })
    .catch((error) => {
        console.error(error);
    })
}

// API to upload books
export function uploadBook(data){
    //console.log(data);
    return fetch('/api/uploadbooks', {
        method: 'POST',
        // mode: "no-cors",
        //mode: "cors",
        //credentials: "include",
        body: JSON.stringify(data),
        headers:{
            'Content-Type': 'application/json'
        },
        })
        .then(response => response.status)
        //.then(response => console.log('Success:', JSON.stringify(response)))
        .catch((error) => {
            console.error(error);
        });
 }


 // API to get all books from user's Library
 export function getBooks(data){
    //console.log(data);
    return fetch('/api/mylibrary', {
        method: 'POST',
        // mode: "no-cors",
        //mode: "cors",
        //credentials: "include",
        body: JSON.stringify(data),
        headers:{
            'Content-Type': 'application/json'
        },
        })
        .then(response => response.status)
        //.then(response => console.log('Success:', JSON.stringify(response)))
        .catch((error) => {
            console.error(error);
        });
 }