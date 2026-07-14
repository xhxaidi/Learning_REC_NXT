"use client";
import { useState } from "react";
import Image from "next/image";

export default function Home() {
  const [title, setTitle] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();

    const res = await fetch("/api/todos", {
      method: "post",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        title,
        completed: false,
      }),
    });

    const data = await res.json();
    if (data.success) {
      setMessage("Todo Created:" + data.todo.title);
    } else {
      setMessage("Failed to create todo");
    }
  };

  return (
    <div>
      <h2>Create Todo</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Your Title "
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <button type="submit">Submit</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
}
