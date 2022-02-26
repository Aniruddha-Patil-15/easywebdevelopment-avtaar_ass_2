var firebaseConfig = {
  apiKey: " AIzaSyDuk3_Bs_FhQ5w1jm5GBEI32MLZmnznXzM ",
  authDomain: "login-fe7dc.firebaseapp.com",
  projectId: "login-fe7dc",
  storageBucket: "login-fe7dc.appspot.com",
  messagingSenderId: "374282514444",
  appId: "1:374282514444:web:c6db5f4fd4263808677e29",
  measurementId: "G-PQP00PRCPF"
};
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
function signUp() {
  var email = document.getElementById("email");
  var password = document.getElementById("password");
  const promise = auth.createUserWithEmailAndPassword(email.value, password.value);
  promise.catch(e => alert(e.message));
  firebase.auth().onAuthStateChanged(user => {
    if (user) {
      window.location = 'login.html';
    }
  });
  alert("You have successfully signed in!");

}
function signIn() {
  var email = document.getElementById("email");
  var password = document.getElementById("password");
  const promise = auth.signInWithEmailAndPassword(email.value, password.value);
  promise.catch(e => alert(e.message));
  firebase.auth().onAuthStateChanged(user => {
    if (user) {
      window.location = 'text.html';
    }
  });

}
function signOut() {
  auth.signOut();
  window.location = 'login.html';
  alert("You have signed out!");
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      var email = user.email;
      alert("User signed" + email);
    }
    else {
      alert('no users found!');
    }
  })
}