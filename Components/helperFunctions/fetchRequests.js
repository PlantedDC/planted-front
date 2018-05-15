
export let getData = (token) => {
    return (fetch('https://radiant-anchorage-62389.herokuapp.com/graphql', {
	headers: {
	    "authorization": token,
    },
	method: 'POST',
	body: `
	query {
	  currentUser {
        user {
            username
            avatar
        }
        plantData {
            temp
            sun
            moist
            humidity
            dataid
        }
	  }
    }`
    })
    .then( res => res.json()))
}