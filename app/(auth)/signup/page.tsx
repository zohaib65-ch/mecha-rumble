import AuthShell from "../components/AuthShell";
import AuthForm from "../components/AuthForm";

export default function SignupPage() {
  return (
    <AuthShell eyebrow="Créer un compte" title="CREER UN COMPTE" description="Crée ton compte MechaRumble en quelques secondes pour rejoindre l'univers de la ligue.">
      <AuthForm mode="signup" />
    </AuthShell>
  );
}
