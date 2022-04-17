const firebaseConfig = {
  apiKey: "AIzaSyBuuPvLRPRGw7sFCHseZ4CpdkSxgxzTdvc",
  authDomain: "promat-103c8.firebaseapp.com",
  databaseURL: "https://promat-103c8-default-rtdb.firebaseio.com",
  projectId: "promat-103c8",
  storageBucket: "promat-103c8.appspot.com",
  messagingSenderId: "889129732013",
  appId: "1:889129732013:web:9e862e94e6380656e30324"
};
  firebase.initializeApp(firebaseConfig);
  const auth = firebase.auth();
  const database = firebase.database();
  function login(){
    getEmail = document.getElementById('getEmail').value;
    getPassword = document.getElementById('getPassword').value;
    
    auth.signInWithEmailAndPassword(getEmail,getPassword)
    .then(function() {
      var user = auth.currentUser
      var databaseRef = database.ref()
      var userData = {
        lastLogin : Date.now()
      }
      databaseRef.child('users/' + user.uid).update(userData)
      window.location.href = "home.html";
    })
    .catch(function(error) {
      var errorMessage = error.message
      alert(errorMessage)
    })
  }
  function forgotpass(){
    var email = document.getElementById("getEmail")
    const promise=auth.sendPasswordResetEmail(email.value)
    promise.then(() => {
        alert("Please check your email for verification link")
    })
    promise.catch((error) => {
          var error_code = error.code
          var error_message = error.message
          alert('This email is not registered')
    });
}