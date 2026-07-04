import { NavLink, Match, Team, NewsItem, Partner, FooterLink, SocialLink } from "../types";

export const navbarLinks: NavLink[] = [
  { name: "LIGUE", href: "#" },
  { name: "TOURNOI", href: "#" },
  { name: "NEWS", href: "#" },
  { name: "LIVE", href: "#" },
  { name: "PARTENAIRES", href: "#" },
];

export const upcomingMatches: Match[] = [
  {
    id: 1,
    date: "Dimanche 25 Juin - 12h00",
    location: "Nantes, France",
    team1: { name: "INSA LYON", logo: "/team-insa.svg" },
    team2: { name: "CENTRAL NANTE", logo: "/central-nante.svg" },
  },
  {
    id: 2,
    date: "Dimanche 25 Juin - 14h20",
    location: "Nantes, France",
    team1: { name: "INSA LYON", logo: "/team-insa.svg" },
    team2: { name: "CENTRAL NANTE", logo: "/central-nante.svg" },
  },
  {
    id: 3,
    date: "Dimanche 25 Juin - 16h00",
    location: "Nantes, France",
    team1: { name: "INSA LYON", logo: "/team-insa.svg" },
    team2: { name: "CENTRAL NANTE", logo: "/central-nante.svg" },
  },
  {
    id: 4,
    date: "Dimanche 25 Juin - 18h00",
    location: "Nantes, France",
    team1: { name: "INSA LYON", logo: "/team-insa.svg" },
    team2: { name: "CENTRAL NANTE", logo: "/central-nante.svg" },
  },
];

export const teamsList: Team[] = [
  { name: "FNATIC", logo: "/team/team1.svg" },
  { name: "FLUXO", logo: "/team/team2.svg" },
  { name: "EDWARD GAMING", logo: "/team/team3.svg" },
  { name: "CLOUD9", logo: "/team/team4.svg" },
  { name: "ALPHA7 ESPORTS", logo: "/team/team5.svg" },
  { name: "ALPHA7 ESPORTS", logo: "/team/team5.svg" },
  { name: "ALPHA7 ESPORTS", logo: "/team/team5.svg" },
  { name: "ALPHA7 ESPORTS", logo: "/team/team5.svg" },
  { name: "ALPHA7 ESPORTS", logo: "/team/team5.svg" },
];

export const newsList: NewsItem[] = [
  {
    id: 1,
    year: "2026",
    title: "CÉRÉMONIE D'OUVERTURE DE L'EWC26 AVEC DJ SNAKE, AYA...",
    description: "L'Esports World Cup 2026 débute officiellement avec une cérémonie d'ouverture en direct de La Seine...",
    imagePath: "/news_opening.png",
  },
  {
    id: 2,
    year: "2026",
    title: "INSCRIVEZ-VOUS AUX LAST CHANCE QUALIFIERS !",
    description: "Les inscriptions pour les Last Chance Qualifiers sont désormais ouvertes.",
    imagePath: "/news_key.png",
  },
  {
    id: 3,
    year: "2026",
    title: "BILLETS DISPONIBLES DÈS MAINTENANT",
    description: "Préparez-vous à vivre l'ambiance électrique des arènes esport, à repérer vos clubs et joueurs préférés, et à...",
    imagePath: "/news_tickets.png",
  },
  {
    id: 4,
    year: "2026",
    title: "L'ESPORTS WORLD CUP 2026 SE TIENDRA À PARIS, EN FRANCE",
    description: "L'Esports World Cup 2026 se tiendra désormais à Paris, en France, du 6 juillet au 23 août.",
    imagePath: "/news_paris.png",
  },
  {
    id: 5,
    year: "2026",
    title: "L'ESPORTS WORLD CUP 2026 SE TIENDRA À PARIS, EN FRANCE",
    description: "L'Esports World Cup 2026 se tiendra désormais à Paris, en France, du 6 juillet au 23 août.",
    imagePath: "/news_paris.png",
  },
];

export const partnersList: Partner[] = [
  { id: 1, name: "stc", logo: "/brand/brand1.svg" },
  { id: 2, name: "Qiddiya", logo: "/brand/brand2.svg" },
  { id: 3, name: "aramco", logo: "/brand/brand3.svg" },
  { id: 4, name: "SONY", logo: "/brand/brand4.svg" },
  { id: 5, name: "baras", logo: "/brand/brand5.svg" },
  { id: 6, name: "Hilton", logo: "/brand/brand6.svg" },
  { id: 7, name: "ALBAIK", logo: "/brand/brand7.svg" },
  { id: 8, name: "SECRET LAB", logo: "/brand/brand8.svg" },
  { id: 9, name: "SECRET LAB", logo: "/brand/brand8.svg" },
  { id: 10, name: "SECRET LAB", logo: "/brand/brand8.svg" },
];

export const footerLinks: FooterLink[] = [
  { name: "FAQ", href: "#" },
  { name: "PRESS ROOM", href: "#" },
  { name: "CLUB PROGRAM", href: "#" },
  { name: "RULES AND REGULATION", href: "#" },
  { name: "COOKIE POLICY", href: "#" },
  { name: "PRIVACY POLICY", href: "#" },
  { name: "TERMS & CONDITIONS", href: "#" },
];

export const socialLinks: SocialLink[] = [
  { name: "X", href: "#", icon: "/footerLogo/x.svg" },
  { name: "Instagram", href: "#", icon: "/footerLogo/instagram.svg" },
  { name: "YouTube", href: "#", icon: "/footerLogo/youtube.svg" },
  { name: "TikTok", href: "#", icon: "/footerLogo/tiktok.svg" },
  { name: "Twitch", href: "#", icon: "/footerLogo/twitch.svg" },
  { name: "Facebook", href: "#", icon: "/footerLogo/fb.svg" },
  { name: "Thread", href: "#", icon: "/footerLogo/thread.svg" },
  { name: "Discord", href: "#", icon: "/footerLogo/discord.svg" },
];
