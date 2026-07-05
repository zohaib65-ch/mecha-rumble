import { ReactNode } from "react";

interface AuthShellProps {
  eyebrow: string;
  title: string;
  description: string;
  children: ReactNode;
  footerNote?: ReactNode;
  sideTitle?: string;
  sideDescription?: string;
  sideImage?: string;
  showAuthMark?: boolean;
}

export default function AuthShell({ title, description, children, footerNote, sideImage = "/logo-in-img.svg" }: AuthShellProps) {
  return (
    <section className="w-full py-6 md:py-8 px-4 sm:px-6 lg:px-8 xl:px-12">
      <div className="mx-auto overflow-hidden rounded-[24px] bg-black shadow-2xl ring-1 ring-black/10">
        <div className="grid min-h-[700px] lg:grid-cols-2">
          <div className="relative flex items-center justify-center px-6 py-10 sm:px-10 lg:px-12">
            <div className="absolute inset-0 bg-black" />
            <div className="relative z-10 w-full max-w-[430px] text-center">
              <div className="space-y-3 text-white">
                <h1 className="text-[24px] leading-none font-bold uppercase tracking-[0.12em]">{title}</h1>
                <p className="mx-auto max-w-[650px] font-normal font-custom text-[14px] md:text-[17px]">{description}</p>
              </div>
              <div className="my-4 rounded-[22px] bg-black px-2 py-1">{children}</div>
              {footerNote ? <div className="mt-4 text-[10px] leading-5 text-white">{footerNote}</div> : null}
            </div>
          </div>

          <div className="hidden lg:block relative min-h-[320px] lg:min-h-full bg-zinc-900">
            <img src={sideImage} alt="Auth visual" className="absolute inset-0 h-full w-full object-cover opacity-95" />
          </div>
        </div>
      </div>
    </section>
  );
}
