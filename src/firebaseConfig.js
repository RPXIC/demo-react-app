require('dotenv').config()
const API_KEY= process.env.REACT_APP_FIREBASE_API_KEY

export default {
    apiKey: API_KEY,
    authDomain: "fir-auth-9bca6.firebaseapp.com",
    databaseURL: "https://fir-auth-9bca6.firebaseio.com",
    projectId: "fir-auth-9bca6",
    storageBucket: "fir-auth-9bca6.appspot.com",
    messagingSenderId: "612938146034",
    appId: "1:612938146034:web:ce462b5737d5078cc7f06b",
    measurementId: "G-N2N4L1PHWS"
}