const API_URL ="http://localhost:8000/api/signup";

//var data2 = {first_name: 'example'};

export function createUser(data){
    console.log(data);
    return fetch(API_URL, {
        method: 'POST',
        // mode: "no-cors",
        mode: "cors", 
        credentials: "include",
        body: JSON.stringify(data),
        headers:{
            'Content-Type': 'application/json'  
        },
        // redirect: "follow",
        
        }).then(res => res.json())
        .then(response => console.log('Success:', JSON.stringify(response)))
          .catch((error) => {
            console.error(error);
          });
    // fetch(API_URL,{
    //     method: 'POST',
    //     mode : 'no-cors',
    //     body: JSON.stringify(user),
    //     headers:{
    //         'content-type': 'application/json'
    //     }
    // })
    // .then(res => res.json())
    // .catch((error) => {
    //     console.log(error);
    //   });
}


// fetch(API_URL, {
//   method: 'POST',
//   headers: {
//     Accept: 'application/json',
//     'Content-Type': 'application/json',
//   },
//   body: JSON.stringify(user),
// }).then((response) => response.json())
//     .then((responseJson) => {
//       return responseJson.user;
//     })
//     .catch((error) => {
//       console.error(error);
//     });