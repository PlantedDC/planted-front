import {AsyncStorage} from 'react-native';

export let setLoginToAsyncStorage = (userInfo) => {
    AsyncStorage.setItem('token', JSON.stringify(userInfo));
    return userInfo;
}

export let submitUserLoginInformation = (email, password) => {
    let userInfo = JSON.stringify({"email":email, "password": password});
    return(fetch("https://radiant-anchorage-62389.herokuapp.com/login", 
        {
            method: "POST",
            body: userInfo,
            headers: new Headers ({
                "Content-Type": "application/json"
            })
        }
        )
    )
}

export let submitNewUserInformation = (email, password, username, avatar) => {
    let userInfo = JSON.stringify({"username": username, "email":email, "password": password, "avatar": avatar});
    return(fetch("https://radiant-anchorage-62389.herokuapp.com/register", 
        {method: "POST",
        body: userInfo,
        headers: new Headers ({
            "Content-Type": "application/json"
        })
        }
        )
        .then(res => res.json()))
}