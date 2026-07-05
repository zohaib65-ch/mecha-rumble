import LoginForm from "./forms/LoginForm";
import SignupForm from "./forms/SignupForm";
import ResetPasswordForm from "./forms/ResetPasswordForm";

interface AuthFormProps {
  mode: "login" | "signup" | "reset";
}

export default function AuthForm({ mode }: AuthFormProps) {
  if (mode === "login") return <LoginForm />;
  if (mode === "signup") return <SignupForm />;
  return <ResetPasswordForm />;
}
