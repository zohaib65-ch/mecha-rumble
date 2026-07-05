import AuthShell from "../components/AuthShell";
import AuthForm from "../components/AuthForm";

export default function LoginPage() {
  return (
    <AuthShell eyebrow="Se connecter" title="SE CONNECTER" description="Tu peux te connecter rapidement avec une de nos options de connexion unique.">
      <AuthForm mode="login" />
    </AuthShell>
  );
}
