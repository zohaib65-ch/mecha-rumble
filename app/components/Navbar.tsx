"use client";

import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { navbarLinks } from "../data/mockData";
import { Button } from "@/app/components/ui/button";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full bg-[#f8f9fa] border-b border-zinc-200 sticky top-0 z-50 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo Section */}
          <div className="flex-shrink-0 flex items-center">
            <a href="#" className="flex flex-col items-start leading-none font-custom text-[#111111] select-none group">
              <span className="text-[20px] font-black tracking-wider leading-[0.8] font-custom">MECHA</span>
              <span className="text-[20px] font-black tracking-wider leading-[0.8] font-custom">RUMBLE</span>
            </a>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            {navbarLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-[12px] font-bold tracking-widest text-zinc-800 hover:text-[#0e77d9] transition-colors duration-200 font-custom"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Desktop Action Buttons using shadcn Button */}
          <div className="hidden md:flex items-center space-x-3">
            <Button
              asChild
              variant="gaming"
              className="text-[11px] font-bold tracking-widest h-10 px-4 rounded-md font-custom"
            >
              <a href="#">SE CONNECTER</a>
            </Button>
            <Button
              asChild
              variant="gaming"
              className="text-[11px] font-bold tracking-widest h-10 px-4 rounded-md font-custom"
            >
              <a href="#">DEVENIR PARTENAIRE</a>
            </Button>
            <Button
              asChild
              variant="gaming"
              className="text-[11px] font-bold tracking-widest h-10 px-4 rounded-md font-custom"
            >
              <a href="#">NOUS CONTACTER</a>
            </Button>
          </div>

          {/* Mobile hamburger menu button */}
          <div className="flex md:hidden">
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
      </div>

      {/* Mobile Menu */}
      <div
        className={`${
          isOpen ? "max-h-[500px] opacity-100 border-t border-zinc-200" : "max-h-0 opacity-0 overflow-hidden"
        } md:hidden bg-[#f8f9fa] transition-all duration-350 ease-in-out`}
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
            <Button
              asChild
              variant="gaming"
              className="text-[11px] font-bold tracking-widest py-3 rounded-md w-full font-custom"
            >
              <a href="#" onClick={() => setIsOpen(false)}>SE CONNECTER</a>
            </Button>
            <Button
              asChild
              variant="gaming"
              className="text-[11px] font-bold tracking-widest py-3 rounded-md w-full font-custom"
            >
              <a href="#" onClick={() => setIsOpen(false)}>DEVENIR PARTENAIRE</a>
            </Button>
            <Button
              asChild
              variant="gaming"
              className="text-[11px] font-bold tracking-widest py-3 rounded-md w-full font-custom"
            >
              <a href="#" onClick={() => setIsOpen(false)}>NOUS CONTACTER</a>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
}
