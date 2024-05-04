"use client";

import { collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "./firebaseConfig";

export default function DataDisplay() {
  const [messages, setMessages] = useState([]);
  useEffect(() => {
    const fetchMessages = async () => {
      const querySnapshot = await getDocs(collection(db, "messages"));
      const messageArray = [];
      querySnapshot.forEach((doc) => {
        messageArray.push({ id: doc.id, ...doc.data() });
      });
      setMessages(messageArray);
    };
    fetchMessages();
  }, []);
  return (
    <div>
      <h2>Messages</h2>
      <ul>
        {messages.map((msg) => (
          <li key={msg.id}>
            <h3>{msg.user}</h3>
            <p>{msg.message}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
