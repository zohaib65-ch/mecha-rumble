"use client";

import Link from "next/link";
import { Button } from "@/app/components/ui/button";
import AuthField from "../AuthField";

export default function SignupForm() {
  return (
    <form className="space-y-3">
      <AuthField name="name" placeholder="Enter your full name" autoComplete="name" />

      <AuthField type="email" name="email" placeholder="Ton adresse e-mail" autoComplete="email" />

      <AuthField type="password" name="password" placeholder="Ton mot de passe" autoComplete="new-password" />

      <Button
        type="submit"
        variant="gaming"
        className="h-10 w-full rounded-[10px] bg-gradient-to-r from-[#0b48b6] to-[#0fc1ff] text-[11px] font-bold uppercase tracking-[0.22em] hover:from-[#093c99] hover:to-[#24d0ff]"
      >
        CREER UN COMPTE MECHARUMBLE
      </Button>

      <p className="text-center text-[10px] leading-4 text-zinc-300">
        Already have an account?{" "}
        <Link href="/login" className="font-bold text-white hover:text-zinc-200">
          Sign in
        </Link>
      </p>
    </form>
  );
}
