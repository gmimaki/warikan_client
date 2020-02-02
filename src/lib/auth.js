import firebase from 'firebase/app'

const getIdToken = () => {
    firebase.auth().currentUser.getIdToken(true).then((idToken) => {
        console.log(idToken);
        return idToken;
    }).catch((error) => {
        console.log(error);
    });
};

export {
    getIdToken
};