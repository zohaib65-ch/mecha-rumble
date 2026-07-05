"use client";

import Link from "next/link";
import { Button } from "@/app/components/ui/button";
import AuthField from "../AuthField";

export default function ResetPasswordForm() {
  return (
    <form className="space-y-3">
      <AuthField type="email" name="email" placeholder="Ton adresse e-mail" autoComplete="email" />

      <Button type="submit" variant="gaming" className="h-10 w-full rounded-[10px] bg-gradient text-[10px] font-bold tracking-[0.22em] uppercase hover:from-[#093c99] hover:to-[#24d0ff]">
        ENVOYER LE LIEN
      </Button>

      <p className="text-center text-xs font-custom font-medium leading-4 text-white">
        Remembered it?{" "}
        <Link href="/login" className="font-bold text-white font-custom hover:text-zinc-200">
          Back to login
        </Link>
      </p>
    </form>
  );
}
