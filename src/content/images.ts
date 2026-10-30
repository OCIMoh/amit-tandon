/** High-resolution web-ready image assets for Amit Tandon's flagship website */
export const images = {
  hero: "/images/hero1.jpg",
  heroStage: "/images/hero3.jpg",
  heroInteraction: "/images/hero2.jpg",
  aboutBanner: "/images/about.jpg",
  portrait: "/images/amit.jpg",
  icon: "/images/icon.png",
  appleIcon: "/images/apple-icon.png",
  material: {
    familyTandoncies: "/images/material-YT1-family-tandoncies.jpg",
    tooMuchTechnology: "/images/material-YT2-too-much-technology.jpg",
    paisaAaGaya: "/images/material-YT3-paisa-aa-gaya.jpg",
    masalaSandwich: "/images/material-YT4-masala-sandwich.jpg",
    daughter: "/images/material-YT5-daughter.jpg",
    bathroom: "/images/material-YT6-bathroom-ka-evolution.jpg",
  },
} as const;

export const materialImageByTitle: Record<string, string> = {
  "Family Tandoncies": images.material.familyTandoncies,
  "Too Much Technology Right Now": images.material.tooMuchTechnology,
  "Paisa Aa Gaya… Class Nahi Aayi!": images.material.paisaAaGaya,
  "Masala Sandwich": images.material.masalaSandwich,
  Daughter: images.material.daughter,
  "Bathroom ka Evolution": images.material.bathroom,
};
