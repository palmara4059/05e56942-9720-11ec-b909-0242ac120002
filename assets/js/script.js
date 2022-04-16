const firebaseConfig = {
    apiKey: "AIzaSyAx0cx6p5NwWV6s0IQP705jhims2IzltTo",
    authDomain: "news-hyder.firebaseapp.com",
    databaseURL: "https://news-hyder-default-rtdb.firebaseio.com",
    projectId: "news-hyder",
    storageBucket: "news-hyder.appspot.com",
    messagingSenderId: "509607434666",
    appId: "1:509607434666:web:ccfe8a3e56d49c1beab3d3"
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
        date: `${timestamp.toLocaleDateString(undefined, options)}`,
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
