export let submitUserLoginInformation = (email, password) => {
    let userInfo = JSON.stringify({"email":email, "password": password});
    return(fetch("https://plant-test.herokuapp.com/", 
        // {method: "POST",
        // body: userInfo,
        // headers: new Headers ({
        //     "Content-Type": "application/json"
        // })
        // }
        )
        .then(res => res.json()))
}

export let submitNewUserInformation = (email, password) => {
    let userInfo = JSON.stringify({"email":email, "password": password});
    return(fetch("https://plant-test.herokuapp.com/", 
        // {method: "POST",
        // body: userInfo,
        // headers: new Headers ({
        //     "Content-Type": "application/json"
        // })
        // }
        )
        .then(res => res.json()))
}