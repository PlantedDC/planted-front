import {AsyncStorage} from 'react-native';

let setLoginToAsyncStorage = (userInfo) => {
    AsyncStorage.setItem('token', JSON.stringify(userInfo));
    return userInfo;
}

export let submitUserLoginInformation = (email, password) => {
    let userInfo = JSON.stringify({"email":email, "password": password});
    return(fetch("https://radiant-anchorage-62389.herokuapp.com/login", 
        {method: "POST",
        body: userInfo,
        headers: new Headers ({
            "Content-Type": "application/json"
        })
        }
        )
        .then((res) => {
            if (res.status === 200) {
                return (res.text()
                .then(res => setLoginToAsyncStorage(res)));
            } else {
                return null
            }
        }))
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