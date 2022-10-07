// Your web app's Firebase configuration
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
    apiKey: "AIzaSyASe8Wha5TKDYtBzlqubVjQp0q4RnZKlVc",
    authDomain: "project-100-303ee.firebaseapp.com",
    databaseURL: "https://project-100-303ee-default-rtdb.firebaseio.com",
    projectId: "project-100-303ee",
    storageBucket: "project-100-303ee.appspot.com",
    messagingSenderId: "31794684711",
    appId: "1:31794684711:web:46982a7047488175543f02",
    measurementId: "G-H0GLFEWD28"
  };
  
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);
const analytics = getAnalytics(app);




function addUser()
{
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose : "adding user"
    });
    
    localStorage.setItem("user_name", user_name);

    window.location = "chat_room.html";
    
}



