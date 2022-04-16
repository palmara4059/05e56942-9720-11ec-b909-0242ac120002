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
    
    const fetchChat = db.ref("messages/");
    fetchChat.on("child_added", function (snapshot) {
    const messages = snapshot.val();
    
    const msg = `<div class="comment-box"><div class="comment-head"><div class="comment-info"><div class="comment-name">Par <span id="staffCm">${messages.usr}</span></div><span>${messages.date}</span></div></div><div class="comment-content"><div class="comment-title">${messages.titre} :</div>${messages.msg}</div></div>`;
    document.getElementById("messages").innerHTML += msg;
});
