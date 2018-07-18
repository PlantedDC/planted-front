import {AsyncStorage} from 'react-native';

export let setTokenToAsyncStorage = (token) => {
    console.log('token', token)
    AsyncStorage.setItem('token', token);
    return token;
}

export let submitUserLoginInformation = (email, password) => {
    let userInfo = JSON.stringify({"email":email, "password": password});
    return(fetch("https://planted-dc.herokuapp.com/login", 
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
    return fetch("https://planted-dc.herokuapp.com/register", 
        {method: "POST",
            body: userInfo,
            headers: new Headers ({
                "Content-Type": "application/json"
            })
        }
    )
        // .then(res => res.json())
}