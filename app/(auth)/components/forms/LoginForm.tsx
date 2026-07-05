"use client";

import { useState } from "react";
import Link from "next/link";
import { Eye, EyeOff } from "lucide-react";
import { Button } from "@/app/components/ui/button";
import AuthField from "../AuthField";

export default function LoginForm() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <form className="space-y-3">
      <div className="space-y-3 pb-2">
        <div className="flex items-center justify-center gap-2">
          {[
            { key: "G", icon: "/google.svg" },
            { key: "T", icon: "/twitch.svg" },
            { key: "B", icon: "/discord.svg" },
          ].map((item) => (
            <button
              key={item.key}
              type="button"
              className="flex h-11 w-11 items-center justify-center rounded-[6px] bg-white shadow-sm transition-colors hover:bg-zinc-100"
            >
              <img src={item.icon} alt={item.key} className="h-4 w-4 object-contain" />
            </button>
          ))}
        </div>
        <div className="flex items-center gap-3 text-[13px] font-custom tracking-[0.14em] text-white">
          <span className="h-px flex-1 bg-white" />
          ou continue avec
          <span className="h-px flex-1 bg-white" />
        </div>
      </div>

      <AuthField type="email" name="email" placeholder="Ton adresse e-mail" autoComplete="email" />

      <AuthField
        type={showPassword ? "text" : "password"}
        name="password"
        placeholder="Ton mot de passe"
        autoComplete="current-password"
        endAdornment={
          <button
            type="button"
            onClick={() => setShowPassword((value) => !value)}
            aria-label={showPassword ? "Hide password" : "Show password"}
            className="flex items-center justify-center text-zinc-600 hover:text-zinc-900"
          >
            {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
          </button>
        }
      />

      <div className="flex items-center justify-end text-[10px] text-zinc-300">
        <Link href="/reset-password" className="font-bold text-zinc-300 hover:text-white">
          Forgot password?
        </Link>
      </div>

      <Button
        type="submit"
        variant="gaming"
        className="h-10 w-full rounded-[10px] bg-gradient text-[11px] font-bold uppercase tracking-[0.22em] hover:from-[#093c99] hover:to-[#24d0ff]"
      >
        SE CONNECTER
      </Button>

      <div className="pt-1">
        <Button
          asChild
          variant="outline"
          className="h-10 w-full rounded-[10px] border-white/10 bg-[#EAEAEA] text-xs font-bold uppercase text-black hover:bg-zinc-100"
        >
          <Link href="/signup">Create an account MechaRumble</Link>
        </Button>
        <p className="mt-3 text-center font-custom text-xs text-white">
          Tu ne te souviens plus de ton mot de passe ? Pas de souci, tu peux le
          r&eacute;cup&eacute;rer facilement en quelques &eacute;tapes. R&eacute;cup&egrave;re-le maintenant !
        </p>
      </div>
    </form>
  );
}
