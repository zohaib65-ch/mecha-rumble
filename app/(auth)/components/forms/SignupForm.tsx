"use client";

import Link from "next/link";
import { Button } from "@/app/components/ui/button";
import AuthField from "../AuthField";

export default function SignupForm() {
  return (
    <form className="space-y-3">
      <AuthField name="name" placeholder="Saisissez votre nom complet" autoComplete="name" />
      <AuthField type="email" name="email" placeholder="Ton adresse e-mail" autoComplete="email" />
      <AuthField type="password" name="password" placeholder="Ton mot de passe" autoComplete="new-password" />
      <Button type="submit" variant="gaming" className="h-10 w-full rounded-[10px] bg-gradient text-[11px] font-bold uppercase tracking-[0.22em] hover:from-[#093c99] hover:to-[#24d0ff]">
        CREER UN COMPTE MECHARUMBLE
      </Button>

      <p className="text-center text-xs font-custom font-medium leading-4 text-white">
        Already have an account?
        <Link href="/login" className="font-bold text-white font-custom hover:text-zinc-200">
          Sign in
        </Link>
      </p>
    </form>
  );
}
