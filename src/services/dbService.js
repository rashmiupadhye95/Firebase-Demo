import { db, firebaseApp } from './config';

export const registerUser = (userInfo) => {
    // db.ref('/users').push(userInfo, (err) => {
    //     console.log(err);
   return firebaseApp.createUserWithEmailAndPassword(userInfo.email, userInfo.password)
    
}
export const loginUser = (userInfo) => {
    //logic to handle Login
    return firebaseApp.signInWithEmailAndPassword(userInfo.email, userInfo.password);
}

export const setLocation = (locationInfo) => {
    db.ref('/location').push(locationInfo, (err) => {
        console.log(err);
    })
}