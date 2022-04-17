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
 function register(){
         getName = document.getElementById('getName').value;
         getAge = document.getElementById('getAge').value;
         getProfession = document.getElementById ('getProfession').value;
         getEmail = document.getElementById('getEmail').value;
         getContact = document.getElementById('getContact').value;
         getPassword = document.getElementById('getPassword').value;
         if (validateEmail(getEmail)==false)
         {
          alert("only @iitj.ac.in can register");
          return;
         }
         if (validatePassword(getPassword)==false){
          alert("password strength is weak. Try again!!!");
          return;
         }
         if (validateContact(getContact)==false){
          alert("Invalid contact no -");
          return;
         }
        
        auth.createUserWithEmailAndPassword(getEmail, getPassword)
        .then(function() {
          console.log("hello")
          // Declare user variable
          var user = auth.currentUser
      
          // Add this user to Firebase Database
          var databaseRef = database.ref()
      
          // Create User data
          var userData = {
            Name: getName,
            Age: getAge,
            Profession: getProfession,
            Email : getEmail,
            Contact : getContact,
            Password : getPassword,
            last_Login : Date.now()
          }
          // Push to Firebase Database
          databaseRef.child('users/' + user.uid).set(userData)
          // alert("user created")
          window.location.href = "index.html"
        })
        .catch(function(error) {
          // Firebase will use this to alert of its errors
          var errorMessage = error.message
          alert(errorMessage)
        })
      }
 function validateEmail(email){
// exp = /^[^@]+@\w+(\.\w+)+\w$/;
 exp = /^[^@]+@iitj+(\.ac+)+(\.in)$/;
if(exp.test(email))
 {return true;}
else
{
return false;
}
}
 function validatePassword(pass){
    var exp = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,20}$/;
     if (exp.test(pass))
     {return true;}
     else {
         return false;
     }
 }
 function validateContact(con){
    var exp = /^\d{10}$/;
    if((exp.test(con)))
          {
        return true;
          }
        else
          {
          return false;
          }
 }



