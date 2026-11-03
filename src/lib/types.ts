export type Credit = {
  label: string;
  value: string;
};

export type StatItem = {
  value: string;
  label: string;
  sub: string;
};

export type GyanBite = {
  id: number;
  ruleNumber: string;
  tag: string;
  badge: string;
  quote: string;
  observation: string;
  image: string;
  shares: string;
};

export type CorporateContent = {
  title: string;
  tagline: string;
  bio: string;
  bullets: string[];
};

export type SiteContent = {
  project: string;
  concept: string;
  tagline: string;
  subject: string;
  officialSite: string;
  showsHub: string;
  contact: {
    email: string;
    phone: string;
    whatsapp: string;
  };
  social: {
    instagram: string;
    youtube: string;
    facebook: string;
    x: string;
  };
  currentShow: {
    title: string;
    sub?: string;
    theme: string;
  };
  stats?: StatItem[];
  gyanBites?: GyanBite[];
  corporate?: CorporateContent;
  about: {
    short: string;
    journeyLine: string;
    credits: Credit[];
  };
};

export type ShowEvent = {
  date: string;
  time: string;
  city: string;
  show?: string;
  venueHint?: string;
  price?: string;
  href: string;
};

export type ShowsFile = {
  source: string;
  scrapedAt: string;
  events: ShowEvent[];
};

export type MaterialItem = {
  title: string;
  role: "featured" | "list" | "split";
  platform: string;
  href: string;
  note: string;
};
