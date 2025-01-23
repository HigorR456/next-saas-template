"use-client"

import { signIn } from "next-auth/react"

export default function SignIn() {
  const handleSignIn = async () => {
    try {
      await signIn("google", { callbackUrl: "/dashboard" })
    } catch (error) {
      console.error("Sign-in failed:", error)
    }
  }
  return (
    <button onClick={handleSignIn}>
      Login com Google
    </button>
  )
} 