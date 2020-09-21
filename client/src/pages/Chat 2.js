import React from "react";
import "../index.css";
function Chat() {
  return (
    <body>
      <ul id="messages"></ul>
      <form action="/" method="POST" id="chatForm">
        <input
          id="txt"
          autocomplete="off"
          autofocus="on"
          oninput="isTyping()"
          placeholder="type your message here..."
        />
        <button>Send</button>
      </form>
    </body>
  );
}

export default Chat;
