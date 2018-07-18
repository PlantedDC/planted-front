
export let getData = (token) => {
    return (fetch('https://planted-dc.herokuapp.com/graphql', {
	headers: {
	    "authorization": token,
    },
	method: 'POST',
	body:` 
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
              created
              dataid
          }
	     }
    }`
    })
    .then( res => res.json()))
}