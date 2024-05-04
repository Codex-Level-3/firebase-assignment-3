"use client";

import { addDoc, collection } from "firebase/firestore";
import { useState } from "react";
import { db } from "./firebaseConfig";

export default function SimpleForm() {
  const [user, setUser] = useState("");
  const [message, setMessage] = useState("");

  const addMessage = async (msg) => {
    const docRef = await addDoc(collection(db, "messages"), msg);
    console.log("Document written with ID:", docRef.id);
  };

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      console.log(user, message);
      await addMessage({ user, message });
      console.log("Message added successfully");
      setUser("");
      setMessage("");
    } catch (error) {
      console.error("Error submitting: ", error);
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        User Name:
        <input
          onChange={(e) => setUser(e.target.value)}
          value={user}
          type="text"
          name="user"
          id="user"
        />
      </label>
      <label>
        Message:
        <input
          onChange={(e) => setMessage(e.target.value)}
          value={message}
          type="text"
          name="message"
          id="message"
        />
      </label>
      <button>Add Message!</button>
    </form>
  );
}
