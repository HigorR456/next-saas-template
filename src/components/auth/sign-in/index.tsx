"use-client"
import * as Style from "../styles"
import { signIn } from "next-auth/react";
import { useState } from "react";

export default function SignIn() {
  const [form, setForm] = useState({ email: "", password: "" });

  const handleSubmit = async (e: React.FormEvent) => {
    if (form.email.length < 1 || form.password.length < 1) {
      alert("Please fill in all fields");
      return;
    }
    e.preventDefault();
    try {
      await signIn("credentials", {
        email: form.email,
        password: form.password,
        redirect: true,
        callbackUrl: "/account",
      });
    } catch(e) {
      alert("Invalid credentials");
    }
  };

  return (
    <Style.CredentialsFormWrap onSubmit={handleSubmit}>
      <input
        type="email"
        placeholder="Email"
        value={form.email}
        onChange={(e) => setForm({ ...form, email: e.target.value })}
        required
      />
      <input
        type="password"
        placeholder="Password"
        value={form.password}
        onChange={(e) => setForm({ ...form, password: e.target.value })}
        required
      />
      <button type="submit">Login</button>
    </Style.CredentialsFormWrap>
  );
}
