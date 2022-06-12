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

document.getElementById("send-message").addEventListener("submit", postChat);
function postChat(e) {
    e.preventDefault();

    const timestamp = new Date();
    const heure = Date().format('LT');
    const options = { weekday: 'long', year: 'numeric', month: 'short', day: 'numeric' };

    const chatTitre = document.getElementById("chat-titre");
    const chatTxt = document.getElementById("chat-txt");
    const chatName = document.getElementById("username");
    const titre = chatTitre.value;
    const message = chatTxt.value;
    const username = chatName.value;

    chatTxt.value = "";
    db.ref("messages/" + timestamp).set({
        usr: username,
        date: `${timestamp.toLocaleDateString(undefined, options)} à ${heure}`,
        titre: titre,
        msg: message,
    });
}
const fetchChat = db.ref("messages/");
fetchChat.on("child_added", function (snapshot) {
    const messages = snapshot.val();

    const msg = `<div class="comment-box"><div class="comment-head"><div class="comment-info"><div class="comment-name">Par <span id="staffCm">${messages.usr}</span></div><span>${messages.date}</span></div></div><div class="comment-content"><div class="comment-title">${messages.titre} :</div>${messages.msg}</div></div>`;
    document.getElementById("messages").innerHTML += msg;
});
