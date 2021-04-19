
//ADD YOUR FIREBASE LINKS HERE


  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyAHxVZtROTkiOg8cDAHm-SS6OffEkWzqzI",
    authDomain: "greetingbot--tsow.firebaseapp.com",
    projectId: "greetingbot--tsow",
    storageBucket: "greetingbot--tsow.appspot.com",
    messagingSenderId: "684851533854",
    appId: "1:684851533854:web:7f9a53129a72bde720760f"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "Welcome " + user_name + "....!!";

function addRoom(){
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
      console.log("room name" + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='RedirectToRoomName(this.id)'>#"+Room_names+"</div><hr>";
      document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();

function RedirectToRoomName(name) {
  console.log(name);
  localStorage.setItem("room_name", name);
  window.location = "kwitter_page.html";
}