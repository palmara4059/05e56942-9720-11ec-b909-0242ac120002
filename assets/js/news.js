const firebaseConfig = {
  apiKey: "AIzaSyC8p9qamYfxFdwNQw30Zmb9aV4dURjG260",
  authDomain: "test-fa739.firebaseapp.com",
  databaseURL: "https://test-fa739-default-rtdb.firebaseio.com",
  projectId: "test-fa739",
  storageBucket: "test-fa739.appspot.com",
  messagingSenderId: "200803360340",
  appId: "1:200803360340:web:029fd77ee24616110f57c1"
};
    firebase.initializeApp(firebaseConfig);
    const db = firebase.database();
    
    const fetchChat = db.ref("messages/");
    fetchChat.on("child_added", function (snapshot) {
    const messages = snapshot.val();
    
    const msg = `<div class="comment-box"><div class="comment-head"><div class="comment-info"><div class="comment-name">Par <span id="staffCm">${messages.usr}</span></div><span>${messages.date}</span></div></div><div class="comment-content"><div class="comment-title">${messages.titre} :</div>${messages.msg}</div></div>`;
    document.getElementById("messages").innerHTML += msg;
});
