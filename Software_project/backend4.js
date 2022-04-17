const firebaseConfig = {
    apiKey: "AIzaSyCT0fh7pQN97ZrtfvYn9uWHKXsKgE7ayto",
    authDomain: "promat-ced9d.firebaseapp.com",
    projectId: "promat-ced9d",
    storageBucket: "promat-ced9d.appspot.com",
    messagingSenderId: "752525991579",
    appId: "1:752525991579:web:62891053e9c0fac341703e"
  };
  firebaseConfig.initializeApp(firebaseConfig);
  var firebaseRef = firebase.database.ref("project")
  snapshot.forEach(function(element){
      document.querySelector('#root').innerHTML() += `
      <div> ${element.val()} </div>
      `
  });
  