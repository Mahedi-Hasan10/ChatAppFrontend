import React, { useEffect } from "react";
import styles from "./JoinChatForm.module.css";
import { io } from "socket.io-client";
const socket = io("http://localhost:3001");

const JoinChatForm = () => {
  useEffect(() => {
    socket.on("connect", () => {
      console.log("socket connection has been established");
    });
    return () => {
      socket.off("connect");
    };
  }, []);
  return (
    <div className={styles.joinChatContainer}>
      <h1 className={styles.heading}>Join a Room to Chat</h1>
      <form className={styles.form}>
        <input
          type="text"
          placeholder="Enter your name"
          className={styles.input}
          required
        />
        <input
          type="text"
          placeholder="Enter a room ID"
          className={styles.input}
          required
        />
        <button type="submit" className={styles.button}>
          Join Room Now
        </button>
      </form>
    </div>
  );
};

export default JoinChatForm;
