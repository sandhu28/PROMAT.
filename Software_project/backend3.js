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
  var DatabaseRef = database.ref('applicant')
  document.querySelector('#apply').addEventListener('click',()=>{
             applicantName = document.getElementById('getName').value,
             cg = document.getElementById('getCG').value,
             experience = document.getElementById('getExperience').value,
             motivation = document.getElementById('getMotivation').value,
             vision = document.getElementById('getVision').value
      if (checkLength(experience, motivation)==true && checkCG(cg)==true){
          var applicant = {
            applicantName :  applicantName,
            cg : cg,
            experience : experience,
            motivation : motivation,
            vision : vision
          }
        DatabaseRef.set(applicant)
        alert("application successful!!!")
        window.location.href = "home.html"
      }
      else {
          alert("invalid details!!!")
      }
  })
  function checkLength(experience, motivation)
  {  	  
     if(motivation.length > 200 || experience.length > 200 )
        {  	
            alert("motivation and experience cannot exceed 200 characters");
            return false;
        }
     else
        {  	
           return true;
        }  
  }
function checkCG(cg){
    if (cg >= 0 && cg <=10)
    {
        return true;
    }
    else {
        alert("invalid cg!!")
        return false;
    }
}