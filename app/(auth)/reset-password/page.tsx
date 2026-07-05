import AuthShell from "../components/AuthShell";
import AuthForm from "../components/AuthForm";

export default function ResetPasswordPage() {
  return (
    <AuthShell
      eyebrow="Mot de passe"
      title="RESET PASSWORD"
      description="Entre ton email pour recevoir le lien de reinitialisation."
      sideDescription="Le reset reprend le meme language visuel pour garder la coherence entre tous les ecrans auth."
    >
      <AuthForm mode="reset" />
    </AuthShell>
  );
}
