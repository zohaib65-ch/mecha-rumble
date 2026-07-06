import Link from "next/link";
import { ArrowLeft, Home } from "lucide-react";
import { Button } from "./components/ui/button";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col bg-[#f8f9fa] text-zinc-900">
      <Navbar />

      <main className="flex-1 px-4 sm:px-6 lg:px-8 xl:px-12 py-10 md:py-16 flex items-center">
        <div className="w-full max-w-5xl mx-auto">
          <div className="bg-black rounded-[28px] md:rounded-[40px] border border-zinc-900 shadow-2xl overflow-hidden">
            <div className="h-2 bg-gradient" />
            <div className="p-6 sm:p-10 md:p-14 lg:p-16">
              <div className="max-w-3xl mx-auto text-center flex flex-col items-center gap-6 md:gap-8">
                <div className="inline-flex items-center rounded-full border border-zinc-800 bg-[#111] px-4 py-2 text-[10px] font-black tracking-[0.35em] text-[#0DABEE] font-sans">
                  PAGE NOT FOUND
                </div>

                <div className="flex flex-col leading-none select-none">
                  <span className="text-[72px] sm:text-[100px] md:text-[132px] font-black tracking-wider text-white ">
                    404
                  </span>
                  <span className="mt-2 text-[20px] sm:text-[28px] md:text-[36px] font-black tracking-wider text-white ">
                    YOU WENT OFF TRACK
                  </span>
                </div>

                <p className="max-w-xl text-sm sm:text-base md:text-lg leading-relaxed text-zinc-400">
                  The page you&apos;re looking for doesn&apos;t exist. Use the
                  button below to return to the home page.
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
                      GO HOME
                    </Link>
                  </Button>

                  <Button
                    asChild
                    variant="outline"
                    size="xl"
                    className="rounded-full border-zinc-700 bg-transparent px-8 font-custom text-[11px] tracking-[0.28em] text-white hover:bg-white hover:text-black"
                  >
                    <Link href="/" scroll={false}>
                      <ArrowLeft className="h-4 w-4" />
                      GO BACK
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
