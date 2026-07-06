"use client";

import { useState } from "react";
import { Globe, ChevronUp, ChevronDown } from "lucide-react";
import { footerLinks, socialLinks } from "../data/mockData";
import { Button } from "@/app/components/ui/button";

export default function Footer() {
  const [langOpen, setLangOpen] = useState(false);
  const [currentLang, setCurrentLang] = useState("ENGLISH");
  const languages = ["ENGLISH", "FRANÇAIS", "DEUTSCH"];

  return (
    <footer className="w-full bg-[#040814] relative overflow-hidden bg-cover bg-center" style={{ backgroundImage: "url('/footer-background.png')" }}>
      <div className="absolute top-0 left-0 right-0 h-2.5 bg-gradient z-10" />
      <div className="absolute inset-0 bg-[#003699] opacity-50 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-black/60 to-transparent pointer-events-none" />

      <div className="px-4 sm:px-6 lg:px-8 xl:px-12 py-10 md:py-20 relative z-10 flex flex-col md:flex-row md:justify-between items-start gap-12 md:gap-6">
        {/* Left Column (Links & Copyright) */}
        <div className="flex flex-col justify-between h-full space-y-8">
          <ul className="flex flex-col space-y-2">
            {footerLinks.map((link) => (
              <li key={link.name}>
                <a href={link.href} className="text-[10px] md:text-xs font-bold tracking-widest text-[#0DABEE] hover:text-white transition-colors duration-250 font-sans">
                  {link.name}
                </a>
              </li>
            ))}
          </ul>

          <div className="text-[9px] md:text-[12px] text-white font-bold tracking-widest uppercase font-sans select-none">
            &copy; {new Date().getFullYear()} MECHARUMBLE. ALL RIGHTS
            <br />
            RESERVED.
          </div>
        </div>

        {/* Right Column (Logo, Socials, Language) */}
        <div className="flex flex-col items-start md:items-end justify-between space-y-14">
          {/* Large custom logo */}
          <div className="flex flex-col items-start md:items-end select-none text-white leading-none">
            <a href="/" className="inline-flex">
              <img src="/logo-footer.svg" alt="Logo Footer" className="w-32 md:w-auto" />
            </a>
          </div>

          <div className="flex flex-col md:flex-row md:items-center gap-8 md:gap-14">
            {/* Social Links */}
            <div className="flex flex-col items-start md:items-end space-y-2">
              <span className="text-[8px] md:text-[12px] text-[#0DABEE] font-bold tracking-widest uppercase font-sans">FOLLOW US ON:</span>
              <div className="flex items-center space-x-2 h-10">
                {socialLinks.map((social) => (
                  <a key={social.name} href={social.href} title={social.name} className="p-1 rounded-md hover:bg-zinc-800/40 transition-colors">
                    <img src={social.icon} alt={social.name} className="h-4 w-4 brightness-0 invert hover:brightness-100 transition-all" />
                  </a>
                ))}
              </div>
            </div>

            {/* Language Selector using shadcn Button component */}
            <div className="flex flex-col items-start md:items-end space-y-2 relative">
              <span className="text-[8px] md:text-[12px] text-[#0DABEE] font-bold tracking-widest uppercase font-sans">CHOOSE LANGUAGE</span>
              <Button
                onClick={() => setLangOpen(!langOpen)}
                variant="outline"
                className="bg-white hover:bg-zinc-100 text-zinc-900 text-[10px] font-bold tracking-wider h-10 px-4 rounded-lg flex items-center justify-between space-x-2 border border-zinc-200 shadow transition-colors min-w-[120px] select-none font-sans"
              >
                <Globe className="h-3.5 w-3.5 text-zinc-700" />
                <span>{currentLang}</span>
                {langOpen ? <ChevronUp className="h-3 w-3 text-zinc-500" /> : <ChevronDown className="h-3 w-3 text-zinc-500" />}
              </Button>

              {/* Language Dropdown */}
              {langOpen && (
                <div className="absolute bottom-full mb-2 right-0 bg-white border border-zinc-200 rounded-lg shadow-xl py-1 z-30 min-w-[120px] animate-in fade-in slide-in-from-bottom-2 duration-200">
                  {languages.map((lang) => (
                    <button
                      key={lang}
                      onClick={() => {
                        setCurrentLang(lang);
                        setLangOpen(false);
                      }}
                      className="w-full text-left px-4 py-2 text-[10px] font-black text-zinc-700 hover:bg-zinc-100 hover:text-zinc-900 transition-colors uppercase"
                    >
                      {lang}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
