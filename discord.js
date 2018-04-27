"use strict";

(function () {
    // Discord Bot Token here
    const BOT_TOKEN = "";
    
    // Discord Gateway url
    const GATEWAY_URL = "wss://gateway.discord.gg/?v=6&encoding=json";
    
    // Websocket object
    let ws = null;
    
    // when page loads, connect to gateway
    window.onload = function () {
        connect();
    };
    
    // connect to gateway
    function connect() {
        
    }
    
    // called with websocket onmessage event
    function messageHandler(message) {
        
    }
    
    // logins to gateway with the given info
    function doLogin() {
        let msg = { // required parameters in order to identify as the bot user
            "token": BOT_TOKEN,
            "properties": {
                "$os": "browser",
                "$browser": "chrome",
                "$device": "cloud9"
            },
            "compress": false
        };
        
    }
    
    // provided the strings of avatar hash, username, and message, it appends a message element to the chatbox
    function insertMessage(avatar, userid, username, message) {
        let chatbox = document.getElementById("chatbox"); // whole outer chatbox containing all msgs
        
        let parent = document.createElement("div"); // a message container. contains avatar, username, and msg
        parent.classList.add("msg");
        
        let avatarImg = document.createElement("img"); // create img for avatar
        avatarImg.classList.add("avatar");
        avatarImg.src = "https://cdn.discordapp.com/avatars/" + userid + "/" + avatar + ".png";
        parent.appendChild(avatarImg);
        
        let usernameDiv = document.createElement("div"); // username text element
        usernameDiv.classList.add("author");
        usernameDiv.innerText = username;
        parent.appendChild(usernameDiv);
        
        let messageDiv = document.createElement("div"); // message text element
        messageDiv.classList.add("msg");
        messageDiv.innerText = message;
        parent.appendChild(messageDiv);
        
        chatbox.appendChild(parent); // last but not least, add message container to the chatbox
    }
})();