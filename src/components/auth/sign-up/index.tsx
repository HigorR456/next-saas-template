"use client";
import { signIn } from "next-auth/react";
import * as Style from "../styles"
import { useRef, useState } from "react";
import Swal from "sweetalert2";

export default function SignUp() {
  const [form, setForm] = useState({ name: "", email: "", password: "", confirmPassword: "" });
  const [errorMessage, setErrorMessage] = useState({ name: "", email: "", password: "", confirmPassword: "" });
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState("password");
  const lastSubmittedEmail = useRef("");
  const passwordRegex = /^(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[a-zA-Z]).{8,}$/;

  function handleShowPassword() {
    if (showPassword === "password") {
      setShowPassword("text")
    } else {
      setShowPassword("password")
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    if (loading) {
      return;
    }

    setErrorMessage({ name: "", email: "", password: "", confirmPassword: "" });
    Swal.resetValidationMessage();
    setLoading(true);
    e.preventDefault();


    if (lastSubmittedEmail.current.length > 0 && lastSubmittedEmail.current === form.email) {
      setErrorMessage({ ...errorMessage, email: "This email is already in use" });
      setLoading(false);
      return;
    }

    if (form.password !== form.confirmPassword) {
      setErrorMessage({ ...errorMessage, confirmPassword: "Passwords do not match." });
      setLoading(false);
      return;
    }

    if (!passwordRegex.test(form.password)) {
      setErrorMessage({ ...errorMessage, password: "Password must contain at least one number, one special character, and be at least 8 characters long." });
      setLoading(false);
      return;
    }

    try {
      Swal.showLoading();

      const res = await fetch("/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        await signIn("credentials", {
          email: form.email,
          password: form.password,
          callbackUrl: "/account",
        });
        alert("User registered and logged in successfully!");
        return;
      }

      if (res.status === 409) {
        lastSubmittedEmail.current = form.email;
        setErrorMessage({ ...errorMessage, email: "This email is already in use" });
        setLoading(false);
        return;
      }

      throw new Error();
    } catch (error) {
      Swal.showValidationMessage("Registration failed, try agian");
      Swal.hideLoading();
      setTimeout(() => setLoading(false), 5000);
    }
  };

  return (
    <Style.CredentialsFormWrap onSubmit={handleSubmit}>
      <label>
        Name
        <input
          type="text"
          placeholder="Name"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          required
        />
        <span>{errorMessage.name}</span>
      </label>

      <label>
        Email
        <input
          type="email"
          placeholder="Email"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          required
        />
        <span>{errorMessage.email}</span>
      </label>

      <label>
        Password
        <input
          type={showPassword}
          placeholder="Password"
          value={form.password}
          onChange={(e) => setForm({ ...form, password: e.target.value })}
          required
          pattern={passwordRegex.source}
        />
        <small>Min 8 characters, 1 number and 1 special character</small>
        <span>{errorMessage.password}</span>
        <Style.ShowPasswordWrap style={{ display: "flex" }}>
          <input type="checkbox" onClick={handleShowPassword} />
          <small>Show password</small>
        </Style.ShowPasswordWrap>
      </label>

      <label>
        Confirm Password
        <input
          type={showPassword}
          placeholder="Confirm Password"
          value={form.confirmPassword}
          onChange={(e) => setForm({ ...form, confirmPassword: e.target.value })}
          required
          pattern={passwordRegex.source}
        />
        <span>{errorMessage.confirmPassword}</span>
      </label>
      <button type="submit" disabled={loading}>{loading ? "..." : "Register"}</button>
    </Style.CredentialsFormWrap>
  );
}
