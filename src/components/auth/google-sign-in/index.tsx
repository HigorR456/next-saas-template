"use-client"
import * as Style from "../styles"
import { signIn } from "next-auth/react"
import { FcGoogle } from "react-icons/fc";

export default function GoogleSignIn({ children, callbackUrl, showGoogleIcon = true }: { children: string, callbackUrl: string, showGoogleIcon?: boolean }) {
  const handleSignIn = async () => {
    try {
      await signIn("google", { callbackUrl })
    } catch (error) {
      console.error("Sign-in failed:", error)
    }
  }
  return (
    <Style.SignInButton onClick={handleSignIn}>
      {showGoogleIcon && (
        <FcGoogle />
      )}
      {children}
    </Style.SignInButton>
  )
} 