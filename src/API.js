const API_URL ="/api/signup";

//var data2 = {first_name: 'example'};

export function createUser(data){
    //console.log(data);
    return fetch(API_URL, {
        method: 'POST',
        // mode: "no-cors",
        //mode: "cors", 
        //credentials: "include",
        body: JSON.stringify(data),
        headers:{
            'Content-Type': 'application/json'  
        },
        // redirect: "follow",
        
        })
        .then(response => response.status)
        // .then(response => console.log('Success:', JSON.stringify(response)))
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
    .then(response => response.json())
    .then(response => console.log(response))
    .catch((error) => {
        console.error(error);
    })
}

// API to get user's info
export function profile(info){
    return fetch("/api/profile", {
        method: 'GET',
        body: JSON.stringify(info),
        headers:{
            'Content-Type': 'application/json'
        },
    })
    .then(response => response.json())
    .then(response => console.log(response))
    .catch((error) => {
        console.error(error);
    })
}