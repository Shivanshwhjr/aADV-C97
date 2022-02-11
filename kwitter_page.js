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
//YOUR FIREBASE LINKS
user_name = localStorage.getItem("user_name"); 
room_name = localStorage.getItem("room_name");

function send()
{
      msg = document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name:user_name,
            message:msg,
            like:0
      });

      document.getElementById("msg").value = "";
}
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code
console.log(firebase_message_id);
console.log(message_data);
name = message_data ['name'];
message = message_data ['message'];
like = message_data ['Like'];
name_with_tag = "<h4>" + name+"<img class='user-tick' src ='tick.png'> </h4>";
message_with_tag = "<h4 class='message_h4'>"+ message +"</h4>";
Like_button = "<button class = 'btn btn-warning' id="+firebase_message_id+"value="+ like+" onclick = 'updateLike(this.id)'>";
span_with_tag = "<span class='glyphicon glyphicon-thumbs-up'>Like:"+ like +"</span></button><hr>";

row = name_with_tag + message_with_tag +Like_button +span_with_tag;
document.getElementById("output").innerHTML += row;
//End code
      } });  }); }
getData();

function updateLike(message_id)
{
      console.log("Clicked on the like button -" + message_id);
      button_id = message_id;
      likes =document.getElementById(button_id).value;
      updated_likes = Number(likes) +1;
      console.log(updated_likes);

      firebase.database().ref(room_name).child(message_id).update({
            like : updated_likes
      });
}

function logout()
{
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location.replace("index.html");
}