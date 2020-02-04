import firebase from 'firebase/app'
import axios from "axios"

const getIdToken = () => {
    firebase.auth().currentUser.getIdToken(true).then((idToken) => {
        console.log(idToken);
        return idToken;
    })
    .then(result => {
        console.log("this is token")
        console.log(result);
        axios.post("http://localhost:8080/jwt", {
            token: result
        })
    })
    .catch((error) => {
        console.log(error);
    });
};

export {
    getIdToken
};