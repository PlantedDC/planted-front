let setLoginToAsyncStorage = (userInfo) => {
    AsyncStorage.setItem('userObject', JSON.stringify(userInfo));
    return userInfo;
}

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
        .then(res => res.json())
        .then(res=> setLoginToAsyncStorage(userInfo)))
}

export let submitNewUserInformation = (email, password, username) => {
    let userInfo = JSON.stringify({"username": username, "email":email, "password": password});
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