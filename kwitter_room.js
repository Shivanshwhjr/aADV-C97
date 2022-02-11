const firebaseConfig = {
  apiKey: "AIzaSyCQlEcyDXgjJQKH8P59BFw4okxu1BG1Dc8",
  authDomain: "citychatbot-xpvd.firebaseapp.com",
  databaseURL: "https://citychatbot-xpvd-default-rtdb.firebaseio.com",
  projectId: "citychatbot-xpvd",
  storageBucket: "citychatbot-xpvd.appspot.com",
  messagingSenderId: "233289655440",
  appId: "1:233289655440:web:804c34f8d01ae759b5a415",
  measurementId: "G-L3LJ80XCPN"
};

// Initialize Firebase
 firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE

user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML="Welcome " + user_name +"!";

function addRoom()
{
  room_name = document.getElementById("room_name").value;

  firebase.database().ref("/").child(room_name).update({
    purpose : "adding room name"
  });

  localStorage.setItem("room_name", room_name);
  window.location = "kwitter_page.html";
}


function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
    console.log("Room Name -"  + Room_names);
    row = "<div class='room_name' id='+Room_names'onclick='redirectToRoomName(this.id)' >#" + Room_names+"</div<hr>";
     document.getElementById("output").innerHTML += row;
     
    //End code
      });});}
getData();

function redirectToRoomName(name)
{
  console.log(name);
  localStorage.setItem("room_name" , room_name);
  window.location="kwitter_page.html";
}

function logout()
{
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
  window.location = "index.html";
}



