"use client";

import React, { useState } from "react";
import MyInput from "@/component/MyInput";

const ExploreComponents = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!email || !password) {
      setError("Email and password are required");
      return;
    }

    setError("");
    console.log({ email, password });
    alert("Logged in!");
  };

  return (
    <div className="min-h-screen flex flex-col items-start justify-center bg-slate-100 p-12">
      <h1>Inputs</h1>
      <div className="flex flex-col gap-6">
        <MyInput placeholder="Simple Input" />
        <MyInput placeholder="Simple Input" label="Label" />
        <MyInput placeholder="Simple Input" label="Label" error="Test error " />
      </div>
    </div>
  );
};
export default ExploreComponents;
