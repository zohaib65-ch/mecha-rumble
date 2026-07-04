import Link from "next/link";
import { ArrowLeft, Home } from "lucide-react";
import { Button } from "./components/ui/button";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#f8f9fa] text-zinc-900 flex items-center justify-center px-4 py-10">
      <main className="w-full max-w-5xl">
        <div className="bg-black rounded-[32px] md:rounded-[48px] overflow-hidden border border-zinc-900 shadow-2xl relative">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[280px] h-[280px] md:w-[500px] md:h-[500px] bg-blue-600/10 rounded-full blur-[80px] pointer-events-none" />
          <div className="absolute bottom-0 right-0 w-[220px] h-[220px] md:w-[360px] md:h-[360px] bg-cyan-600/10 rounded-full blur-[80px] pointer-events-none" />

          <div className="relative z-10 grid gap-10 lg:grid-cols-[1.15fr_0.85fr] items-center p-6 sm:p-10 md:p-14 lg:p-16">
            <section className="flex flex-col gap-6 md:gap-8">
              <div className="inline-flex w-fit items-center rounded-full border border-zinc-800 bg-[#151517] px-4 py-2 text-[10px] font-black tracking-[0.35em] text-zinc-300 font-custom">
                PAGE INTROUVABLE
              </div>

              <div className="flex flex-col leading-none select-none">
                <span className="text-[64px] sm:text-[92px] md:text-[118px] lg:text-[138px] font-black tracking-wider text-white font-custom">
                  404
                </span>
                <span className="mt-2 text-[26px] sm:text-[36px] md:text-[44px] lg:text-[54px] font-black tracking-wider text-white font-custom">
                  NOT FOUND
                </span>
              </div>

              <p className="max-w-xl text-sm sm:text-base md:text-lg text-zinc-400 leading-relaxed">
                The page you’re looking for doesn’t exist or may have moved.
                Return to the home page to continue exploring Mecha Rumble.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <Button
                  asChild
                  variant="gaming"
                  size="xl"
                  className="rounded-full px-8 font-custom text-[11px] tracking-[0.28em]"
                >
                  <Link href="/">
                    <Home className="h-4 w-4" />
                    BACK HOME
                  </Link>
                </Button>

                <Button
                  asChild
                  variant="gaming"
                  size="xl"
                  className="rounded-full px-8 font-custom text-[11px] tracking-[0.28em] bg-[#1d1d1f] hover:bg-[#28282b]"
                >
                  <Link href="/" scroll={false}>
                    <ArrowLeft className="h-4 w-4" />
                    GO BACK
                  </Link>
                </Button>
              </div>
            </section>

            <aside className="bg-[#151517] border border-zinc-800 rounded-[28px] p-6 sm:p-8 md:p-10 shadow-inner">
              <div className="flex items-center justify-between gap-4">
                <span className="text-[10px] font-black tracking-[0.35em] text-zinc-500 font-custom">
                  ERROR SIGNAL
                </span>
                <span className="text-[10px] font-black tracking-[0.35em] text-blue-400 font-custom">
                  OFFLINE
                </span>
              </div>

              <div className="mt-8 grid gap-4">
                <div className="rounded-2xl border border-zinc-800 bg-black/70 p-4">
                  <div className="text-[10px] font-bold tracking-[0.3em] text-zinc-500 font-custom">
                    STATUS
                  </div>
                  <div className="mt-2 text-lg font-black text-white font-custom">
                    ROUTE NOT RESOLVED
                  </div>
                </div>

                <div className="rounded-2xl border border-zinc-800 bg-black/70 p-4">
                  <div className="text-[10px] font-bold tracking-[0.3em] text-zinc-500 font-custom">
                    NEXT STEP
                  </div>
                  <div className="mt-2 text-lg font-black text-white font-custom">
                    RETURN TO THE ARENA
                  </div>
                </div>
              </div>

              <div className="mt-8 rounded-2xl border border-zinc-800 bg-black/80 p-4 sm:p-5">
                <p className="text-[11px] uppercase tracking-[0.3em] text-zinc-500 font-custom">
                  Quick recovery
                </p>
                <p className="mt-3 text-sm text-zinc-300 leading-relaxed">
                  Use the home button to get back to the main experience and
                  continue from the landing page.
                </p>
              </div>
            </aside>
          </div>
        </div>
      </main>
    </div>
  );
}
