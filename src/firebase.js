import * as firebase from 'firebase';

const config = {
    apiKey: "AIzaSyBQPbuU3hkMQYxOm4oD4NZhPtsOcnpBO-c",
    authDomain: "goalcoach-4dcc6.firebaseapp.com",
    databaseURL: "https://goalcoach-4dcc6.firebaseio.com",
    projectId: "goalcoach-4dcc6",
    storageBucket: "",
    messagingSenderId: "766586867445"
};

export const firebaseApp = firebase.initializeApp(config);
export const goalRef = firebase.database().ref('goals');
export const completeGoalRef = firebase.database().ref('completeGoals');