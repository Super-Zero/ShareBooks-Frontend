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