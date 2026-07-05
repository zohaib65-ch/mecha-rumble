"use client";

import { forwardRef } from "react";
import type { ReactNode } from "react";
import { cn } from "@/app/lib/utils";

interface AuthFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  hint?: string;
  error?: string;
  endAdornment?: ReactNode;
}

const AuthField = forwardRef<HTMLInputElement, AuthFieldProps>(({ hint, error, className, endAdornment, ...props }, ref) => {
  return (
    <label className="block space-y-2">
      <div className="relative">
        <input
          ref={ref}
          className={cn(
            "h-11 w-full rounded-[12px] border border-zinc-200 bg-[#f5f5f5] px-4 text-[14px] font-semibold text-zinc-950 outline-none transition-all placeholder:text-zinc-500 focus:border-[#0e77d9] focus:ring-2 focus:ring-[#0e77d9]/15",
            endAdornment ? "pr-12" : "",
            className,
          )}
          {...props}
        />
        {endAdornment ? <div className="pointer-events-none absolute inset-y-0 right-4 flex items-center text-zinc-600">{endAdornment}</div> : null}
      </div>
      {hint ? <p className="text-[11px] text-zinc-400">{hint}</p> : null}
      {error ? <p className="text-[11px] text-rose-400">{error}</p> : null}
    </label>
  );
});

AuthField.displayName = "AuthField";

export default AuthField;
