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
        className="h-10 w-full rounded-[10px] bg-red-600 text-[11px] font-bold uppercase tracking-[0.22em] hover:bg-red-500"
      >
        TEST CHANGE
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
