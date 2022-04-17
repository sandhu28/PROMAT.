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
  const database = firebase.database();
//   const auth = firebase.auth();
var DatabaseRef = database.ref('project')
document.querySelector('#add').addEventListener('click',()=>{
   projectName = document.getElementById('getProjectName').value,
   domain = document.getElementById('getDomain').value,
   details = document.getElementById('getDetails').value,
   deliverables = document.getElementById('getDeliverables').value,
   eligibilityCriteria  = document.getElementById('getEligibilityCriteria').value
    if (checkLength(details,deliverables)){
        var project = {
          projectName :  projectName,
          domain : domain,
          details : details,
          deliverables : deliverables,
          eligibilityCriteria : eligibilityCriteria
        }
      DatabaseRef.set(project)
      alert("project uploaded!!!")
      window.location.href = "home.html"
    }
    else {
        alert("invalid details!!!")
    }
})
  function checkLength(details, deliverables)
  {  	  
     if(details.length > 200 || deliverables.length > 200 )
        {  	
          return false;
        }
     else
        {  	
           return true;
        }  
  }
  