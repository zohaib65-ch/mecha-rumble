"use client";

import React, { useState } from "react";
import { Globe, ChevronUp, ChevronDown } from "lucide-react";
import { footerLinks, socialLinks } from "../data/mockData";
import { Button } from "@/app/components/ui/button";

export default function Footer() {
  const [langOpen, setLangOpen] = useState(false);
  const [currentLang, setCurrentLang] = useState("ENGLISH");

  const languages = ["ENGLISH", "FRANÇAIS", "DEUTSCH"];

  // Helper to map social icon keys to simple custom SVGs or text
  const renderSocialIcon = (key: string) => {
    const baseClass = "h-3.5 w-3.5 fill-white text-white hover:text-[#00f2fe] transition-colors";
    switch (key) {
      case "x":
        return (
          <svg className={baseClass} viewBox="0 0 24 24">
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
          </svg>
        );
      case "instagram":
        return (
          <svg className={baseClass} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
            <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
          </svg>
        );
      case "youtube":
        return (
          <svg className={baseClass} viewBox="0 0 24 24" fill="currentColor">
            <path d="M23.498 6.163a3.003 3.003 0 0 0-2.11-2.11C19.518 3.545 12 3.545 12 3.545s-7.518 0-9.388.508a3.003 3.003 0 0 0-2.11 2.11C0 8.033 0 12 0 12s0 3.967.502 5.837a3.003 3.003 0 0 0 2.11 2.11c1.87.508 9.388.508 9.388.508s7.518 0 9.388-.508a3.003 3.003 0 0 0 2.11-2.11C24 15.967 24 12 24 12s0-3.967-.502-5.837zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
          </svg>
        );
      case "tiktok":
        return (
          <svg className={baseClass} viewBox="0 0 24 24" fill="currentColor">
            <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.17-2.86-.74-3.94-1.74-.22-.2-.42-.42-.61-.65v7.55c.03 1.93-.5 3.94-1.79 5.37-1.47 1.66-3.76 2.5-5.95 2.37-2.34-.04-4.71-1.12-5.99-3.09-1.54-2.27-1.7-5.46-.38-7.79 1.19-2.13 3.52-3.54 5.96-3.66.12-.01.24-.01.36-.01v4.03c-1.04-.04-2.13.33-2.86 1.07-.9.89-1.06 2.37-.44 3.49.57 1.07 1.83 1.73 3.04 1.63 1.34-.05 2.62-1.07 2.82-2.39.06-.39.04-.79.04-1.18V.02z" />
          </svg>
        );
      case "twitch":
        return (
          <svg className={baseClass} viewBox="0 0 24 24" fill="currentColor">
            <path d="M11.571 4.714h1.715v5.143H11.57zm4.715 0H18v5.143h-1.714zM6 0L1.714 4.286v15.428h5.143V24l4.286-4.286h3.428L22.286 12V0zm14.571 11.143l-3.428 3.428h-3.429l-3 3v-3H6.857V1.714h13.714Z" />
          </svg>
        );
      case "facebook":
        return (
          <svg className={baseClass} viewBox="0 0 24 24" fill="currentColor">
            <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
          </svg>
        );
      case "discord":
        return (
          <svg className={baseClass} viewBox="0 0 24 24" fill="currentColor">
            <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994.021-.041.001-.09-.041-.106a13.094 13.094 0 0 1-1.873-.894.077.077 0 0 1-.008-.128c.126-.093.252-.19.372-.287a.075.075 0 0 1 .077-.011c3.92 1.793 8.18 1.793 12.061 0a.073.073 0 0 1 .078.009c.12.099.246.195.373.289a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.894.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.156-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.156 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.156-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.156 2.418z" />
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <footer className="w-full bg-[#040814] relative overflow-hidden border-t-3 border-transparent" style={{ borderImage: "linear-gradient(to right, #005cf9, #00f2fe) 1" }}>
      {/* Background abstract mesh grids */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-950/20 via-transparent to-transparent pointer-events-none" />
      <div className="absolute -bottom-24 -left-24 w-72 h-72 bg-cyan-900/10 rounded-full blur-[80px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 py-12 md:py-20 relative z-10 flex flex-col md:flex-row md:justify-between items-start gap-12 md:gap-6">
        
        {/* Left Column (Links & Copyright) */}
        <div className="flex flex-col justify-between h-full space-y-8 md:space-y-16">
          <ul className="flex flex-col space-y-3">
            {footerLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className="text-[10px] md:text-xs font-black tracking-widest text-[#00f2fe]/90 hover:text-white transition-colors duration-250 font-sans"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>

          <div className="text-[9px] md:text-[10px] text-zinc-500 font-extrabold tracking-widest uppercase font-sans select-none">
            &copy; {new Date().getFullYear()} MECHARUMBLE. ALL RIGHTS
            <br />
            RESERVED.
          </div>
        </div>

        {/* Right Column (Logo, Socials, Language) */}
        <div className="flex flex-col items-start md:items-end justify-between space-y-10 md:space-y-16">
          {/* Large custom logo */}
          <div className="flex flex-col items-start md:items-end select-none font-custom text-white leading-none">
            <span className="text-[36px] md:text-[52px] font-black tracking-wider leading-[0.8] font-custom">
              MECHA
            </span>
            <span className="text-[36px] md:text-[52px] font-black tracking-wider leading-[0.8] font-custom mt-1">
              RUMBLE
            </span>
          </div>

          <div className="flex flex-col md:flex-row md:items-end gap-8 md:gap-14">
            {/* Social Links */}
            <div className="flex flex-col items-start md:items-end space-y-3">
              <span className="text-[8px] md:text-[9px] text-[#00f2fe]/80 font-black tracking-widest uppercase font-sans">
                FOLLOW US ON:
              </span>
              <div className="flex items-center space-x-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    title={social.name}
                    className="p-1 rounded-md hover:bg-zinc-800/40 transition-colors"
                  >
                    {renderSocialIcon(social.iconKey)}
                  </a>
                ))}
              </div>
            </div>

            {/* Language Selector using shadcn Button component */}
            <div className="flex flex-col items-start md:items-end space-y-3 relative">
              <span className="text-[8px] md:text-[9px] text-[#00f2fe]/80 font-black tracking-widest uppercase font-sans">
                CHOOSE LANGUAGE
              </span>
              <Button
                onClick={() => setLangOpen(!langOpen)}
                variant="outline"
                className="bg-white hover:bg-zinc-100 text-zinc-900 text-[10px] font-black tracking-wider h-10 px-4 rounded-lg flex items-center justify-between space-x-2 border border-zinc-200 shadow transition-colors min-w-[120px] select-none font-sans"
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
