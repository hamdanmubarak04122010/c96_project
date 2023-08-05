//YOUR FIREBASE LINKS
var firebaseConfig = {
      apiKey: "AIzaSyDov49O5pAivcAMChYc1K6l3ZixljE_y50",
      authDomain: "kwitterdatabase-aff46.firebaseapp.com",
      databaseURL: "https://kwitterdatabase-aff46-default-rtdb.firebaseio.com",
      projectId: "kwitterdatabase-aff46",
      storageBucket: "kwitterdatabase-aff46.appspot.com",
      messagingSenderId: "855774581805",
      appId: "1:855774581805:web:000cbb93f1bf80bb0014a4"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

    user_name = localStorage.getItem("user_name");
room_name = localStorage.getItem("room_name");

    function send()
    {
      msg = document.getElementById("msg").value ;
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

//End code
      } });  }); }
getData();
