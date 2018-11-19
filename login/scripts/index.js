// Initialize Firebase
var config = {
    apiKey: "AIzaSyAS4eP5OxjbqdOfigIf9s3ICIfLB723WjM",
    authDomain: "project-medicine-e92db.firebaseapp.com",
    databaseURL: "https://project-medicine-e92db.firebaseio.com",
    projectId: "project-medicine-e92db",
    storageBucket: "project-medicine-e92db.appspot.com",
    messagingSenderId: "625232278011"
};
firebase.initializeApp(config);

//Elements (Thanks firebase)
const textEmail = document.getElementById("email");
const textPassword = document.getElementById("password");
const login = document.getElementById("logIn");
const signUp = document.getElementById("signUp");
const signOut = document.getElementById("signOut")

//Login event
login.addEventListener("click", e =>{
    const email = textEmail.value;
    const password = textPassword.value;
    const auth = firebase.auth();
    //Sign in
    const promise = auth.signInWithEmailAndPassword(email, password);
    promise.catch(e => console.log(e.message));
});

//Signup event
signUp.addEventListener("click", e => {
    // TODO: check for real email.
    const email = textEmail.value;
    const password = textPassword.value;
    const auth = firebase.auth();
    //Sign up
    const promise = auth.createUserWithEmailAndPassword(email, password);
    promise.catch(e => console.log(e.message));
})

//Add a realtime addEventListener
firebase.auth().onAuthStateChanged(firebaseUser => {
    if (firebaseUser) {
        console.log(firebaseUser);
    } else {
        console.log("not logged in");
    }
})
