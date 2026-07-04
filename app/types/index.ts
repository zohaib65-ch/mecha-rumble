export interface NavLink {
  name: string;
  href: string;
}

export interface MatchTeam {
  name: string;
  logo: string;
}

export interface Match {
  id: number;
  date: string;
  location: string;
  team1: MatchTeam;
  team2: MatchTeam;
}

export interface Team {
  name: string;
  logo: string;
}

export interface NewsItem {
  id: number;
  year: string;
  title: string;
  description: string;
  imagePath: string;
}


export interface Partner {
  id: number;
  name: string;
  logoKey: string;
}

export interface FooterLink {
  name: string;
  href: string;
}

export interface SocialLink {
  name: string;
  href: string;
  iconKey: string;
}

