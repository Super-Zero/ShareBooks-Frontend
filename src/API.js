const API_URL = "/api/signup";

//var data2 = {first_name: 'example'};

export function createUser(data) {
  console.log(data);
  return fetch("/api/signup", {
    method: "POST",
    // mode: "no-cors",
    //mode: "cors",
    //credentials: "include",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json"
    }
  })
    .then(response => response.status)
    .catch(error => {
      console.error(error);
    });
}

// API for Authentification
export function login(info) {
  console.log(info);
  return (
    fetch("/api/login", {
      method: "POST",
      body: JSON.stringify(info),
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(response => {
        if (response.status === 200) {
          return response.json();
        } else {
          return { user_id: 0 };
        }
      })
      //.then(response => console.log('Success:', JSON.stringify(response)))
      .catch(error => {
        console.error(error);
      })
  );
}

// API to get user's info
export function profile(info) {
  console.log(info);
  return fetch("/api/profile", {
    method: "POST",
    body: JSON.stringify({ user_id: info }),
    headers: {
      "Content-Type": "application/json"
    }
  })
    .then(response => {
      //console.log(response.json());
      return response.json();
    })
    .catch(error => {
      console.error(error);
    });
}

// API to upload books
export function uploadBook(data) {
  console.log("===============================>", data);
  //console.log(data);
  return (
    fetch("/api/uploadbooks", {
      method: "POST",
      // mode: "no-cors",
      //mode: "cors",
      //credentials: "include",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(response => response.status)
      //.then(response => console.log('Success:', JSON.stringify(response)))
      .catch(error => {
        console.error(error);
      })
  );
}

export function googleSearchBooks(data) {
  console.log("What are we looking for?----------------->", data);
  // data = "Introduction to Algorithms";
  let key = "";
  let query = `https://www.googleapis.com/books/v1/volumes?q=intitle:${data}&printType=books&orderBy=newest&key=${key}`;

  return (
    fetch(query, { method: "GET" })
      .then(response => response.json())
      // .then(response => console.log("Google API: ", response.items))
      .catch(error => {
        console.error(error);
      })
  );
}

// API to get all books from user's Library
export async function mylibrary(data) {
  //console.log(data);
  return (
    fetch("/api/mylibrary", {
      method: "POST",
      // mode: "no-cors",
      //mode: "cors",
      //credentials: "include",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(response => response.json())
      //.then(response => console.log('Success:', JSON.stringify(response)))
      .catch(error => {
        console.error(error);
      })
  );
}

// API to find users that have a specific book
export async function findBooks(data) {
  console.log("Find Books API: ");
  return (
    fetch(`/api/findbooks?book_isbn=${data}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(response => response.json())
      // .then(response =>
      //   console.log("Search Books API: ", JSON.stringify(response))
      // )
      .catch(error => {
        console.error(error);
      })
  );
}

// API to interested books
export function interestedBooks(data) {
  console.log(data);
  return (
    fetch("/api/wantedbooks", {
      method: "POST",
      // mode: "no-cors",
      //mode: "cors",
      //credentials: "include",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(response => response.status)
      //.then(response => console.log('Success:', JSON.stringify(response)))
      .catch(error => {
        console.error(error);
      })
  );
}
