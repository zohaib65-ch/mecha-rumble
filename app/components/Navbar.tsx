"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import { navbarLinks } from "../data/mockData";
import { Button } from "@/app/components/ui/button";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full bg-white px-4 sm:px-6 lg:px-8 xl:px-12 sticky top-0 z-50 transition-all duration-300">
      <div className="flex items-center justify-between h-20">
        <div className="flex-shrink-0 flex items-center">
          <a href="/" className="flex flex-col items-start leading-none font-custom text-[#111111] select-none group">
           <img src="/logo-black.svg" alt="Mecha Rumble" className="h-28 w-auto" />
          </a>
        </div>
         <div className="hidden xl:flex items-center space-x-8">
           {navbarLinks.map((link) => (
             <a key={link.name} href={link.href} className="text-sm font-semibold tracking-widest text-zinc-800 hover:text-[#0e77d9] transition-colors duration-200 font-custom">
               {link.name}
             </a>
           ))}
         </div>

         {/* Desktop Action Buttons using shadcn Button */}
         <div className="hidden xl:flex items-center space-x-3">
          <Button asChild variant="gaming" className="text-sm font-semibold tracking-widest h-10 px-4 rounded-md font-custom">
            <a href="/login">SE CONNECTER</a>
          </Button>
          <Button asChild variant="gaming" className="text-sm font-semibold tracking-widest h-10 px-4 rounded-md font-custom">
            <a href="#">DEVENIR PARTENAIRE</a>
          </Button>
          <Button asChild variant="gaming" className="text-sm font-semibold tracking-widest h-10 px-4 rounded-md font-custom">
            <a href="#">NOUS CONTACTER</a>
          </Button>
        </div>

        {/* Mobile hamburger menu button */}
        <div className="flex xl:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            type="button"
            className="inline-flex items-center justify-center p-2 rounded-md text-zinc-800 hover:text-[#0e77d9] hover:bg-zinc-100 focus:outline-none transition-colors"
            aria-controls="mobile-menu"
            aria-expanded={isOpen}
          >
            <span className="sr-only">Open main menu</span>
            {isOpen ? <X className="block h-6 w-6" /> : <Menu className="block h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`${isOpen ? "max-h-[500px] opacity-100 border-t border-zinc-200" : "max-h-0 opacity-0 overflow-hidden"} xl:hidden bg-[#f8f9fa] transition-all duration-350 ease-in-out`}
        id="mobile-menu"
      >
        <div className="px-4 pt-4 pb-6 space-y-4">
          <div className="flex flex-col space-y-3">
            {navbarLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-[13px] font-bold tracking-widest text-zinc-800 hover:text-[#0e77d9] py-2 transition-colors font-custom"
              >
                {link.name}
              </a>
            ))}
          </div>
          <hr className="border-zinc-200 my-4" />
          <div className="flex flex-col space-y-3">
            <Button asChild variant="gaming" className="text-[11px] font-bold tracking-widest py-3 rounded-md w-full font-custom">
              <a href="/login" onClick={() => setIsOpen(false)}>
                SE CONNECTER
              </a>
            </Button>
            <Button asChild variant="gaming" className="text-[11px] font-bold tracking-widest py-3 rounded-md w-full font-custom">
              <a href="#" onClick={() => setIsOpen(false)}>
                DEVENIR PARTENAIRE
              </a>
            </Button>
            <Button asChild variant="gaming" className="text-[11px] font-bold tracking-widest py-3 rounded-md w-full font-custom">
              <a href="#" onClick={() => setIsOpen(false)}>
                NOUS CONTACTER
              </a>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
}
