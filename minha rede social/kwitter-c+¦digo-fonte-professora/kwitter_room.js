  //Adicione os links de configurações de seu App Firebase
  const firebaseConfig = {
    apiKey: "AIzaSyB9n9RKrSsZeyvIGEDZLYSomrKS4UX_VoE",
    authDomain: "site-78456.firebaseapp.com",
    databaseURL: "https://site-78456-default-rtdb.firebaseio.com",
    projectId: "site-78456",
    storageBucket: "site-78456.appspot.com",
    messagingSenderId: "10485521680",
    appId: "1:10485521680:web:529b2e46a4fc1008369995"
  };
    // Inicializar Firebase
   firebase.initializeApp(firebaseConfig);
  
  user_name = localStorage.getItem("user_name");
  
  document.getElementById("user_name").innerHTML = "Bem-vindo(a) " + user_name + "!";
  
  function addRoom()
  {
    room_name = document.getElementById("room_name").value;
  
    firebase.database().ref("/").child(room_name).update({
      purpose : "adicionando nome da sala"
    });
  
      localStorage.setItem("room_name", room_name);
      
      window.location = "kwitter_page.html";
  }
  
  function getData() {  firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
         Room_names = childKey;
         console.log("Nome da Sala - " + Room_names);
        row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
        document.getElementById("output").innerHTML += row;
      });
    });
  
  }
  
  getData();
  
  function redirectToRoomName(name)
  {
    console.log(name);
    localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
  }
  
  function logout() {
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
        window.location = "index.html";
  }
  