import { useState } from "react";
import "./chatApp.css";

export default function ChatApp() {
  const [genChat, setGenChat] = useState([]);
  const [chat1, setChat1] = useState("");
  const [chat2, setChat2] = useState("");
  const [user1, setUser1] = useState("User 1");
  const [user2, setUser2] = useState("User 2");

  return (
    <div className="chat-container">
      <form
        id="chat1Form"
        onSubmit={(e) => {
          e.preventDefault();
          let chat = chat1.trim();
          if (chat.length > 0) {
            setGenChat((genChat) => {
              const newGenChat = [...genChat];
              newGenChat.push(user1 + ":" + chat);
              return newGenChat;
            });
            setChat1("");
          }
        }}
      >
        <input
          type="text"
          value={user1}
          onChange={(e) => setUser1(e.target.value)}
        />
        <br />
        <br />
        <textarea
          id="chat1"
          value={chat1}
          onChange={(e) => setChat1(e.target.value)}
          cols="30"
          rows="20"
        ></textarea>
        <br />
        <button className="send" htmlFor="chat1Form">
          Send
        </button>
      </form>
      <br />
      <form
        onSubmit={(e) => {
          e.preventDefault();
          setGenChat([]);
        }}
      >
        <label htmlFor="genChat">General Chat</label>
        <br />
        <br />
        <textarea
          id="genChat"
          value={genChat.join("\n")}
          readOnly
          cols="70"
          rows="20"
        ></textarea>
        <br />
        <button className="send" htmlFor="genChat">
          clear
        </button>
      </form>
      <br />
      <form
        id="chat2Form"
        onSubmit={(e) => {
          e.preventDefault();
          let chat = chat2.trim();
          if (chat.length > 0) {
            setGenChat((genChat) => {
              const newGenChat = [...genChat];
              newGenChat.push(user2 + ":" + chat);
              return newGenChat;
            });
            setChat2("");
          }
        }}
      >
        <input
          type="text"
          value={user2}
          onChange={(e) => setUser2(e.target.value)}
        />
        <br />
        <br />
        <textarea
          id="chat2"
          value={chat2}
          onChange={(e) => setChat2(e.target.value)}
          cols="30"
          rows="20"
        ></textarea>
        <br />
        <button className="send" htmlFor="chat2Form">
          Send
        </button>
      </form>
    </div>
  );
}
