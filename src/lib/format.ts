export function formatShowDate(isoDate: string): string {
  const d = new Date(`${isoDate}T12:00:00`);
  if (Number.isNaN(d.getTime())) return isoDate;
  return d.toLocaleDateString("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}

export function cityShort(city: string): string {
  return city.split(",")[0]?.trim() || city;
}

export interface FormattedDateParts {
  day: string;
  month: string;
  year: string;
  weekday: string;
  fullDate: string;
}

export function parseShowDate(isoDate: string): FormattedDateParts {
  const d = new Date(`${isoDate}T12:00:00`);
  if (Number.isNaN(d.getTime())) {
    return { day: "—", month: "TBA", year: "2026", weekday: "TBA", fullDate: isoDate };
  }
  return {
    day: d.toLocaleDateString("en-GB", { day: "2-digit" }),
    month: d.toLocaleDateString("en-GB", { month: "short" }).toUpperCase(),
    year: d.toLocaleDateString("en-GB", { year: "numeric" }),
    weekday: d.toLocaleDateString("en-GB", { weekday: "short" }).toUpperCase(),
    fullDate: d.toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric" }),
  };
}

export function getTicketingPlatform(href: string): string {
  if (href.includes("bookmyshow.com")) return "BookMyShow";
  if (href.includes("southbankcentre.co.uk")) return "Southbank Centre";
  if (href.includes("sydneyoperahouse.com")) return "Sydney Opera House";
  if (href.includes("tickettailor.com") || href.includes("buytickets.at")) return "TicketTailor";
  if (href.includes("eventbrite")) return "Eventbrite";
  if (href.includes("platinumlist")) return "Platinumlist";
  if (href.includes("sistic")) return "SISTIC";
  if (href.includes("monash.edu")) return "Monash PAC";
  return "Official Box Office";
}

export function getShowStatus(index: number, time: string, city: string): { label: string; type: "fast" | "seats" | "extra" | "finale" | "festive" } {
  const c = city.toLowerCase();
  if (c.includes("sydney")) return { label: "TOUR FINALE", type: "finale" };
  if (c.includes("mumbai")) return { label: "CHRISTMAS SPECIAL", type: "festive" };
  if (c.includes("delhi")) {
    if (time.includes("15") || time.includes("16")) return { label: "MATINÉE ADDED", type: "extra" };
    return { label: "FAST FILLING", type: "fast" };
  }
  if (c.includes("london") && time.includes("16")) return { label: "2ND SHOW ADDED", type: "extra" };
  if (c.includes("london") || c.includes("doha") || c.includes("singapore")) return { label: "SELLING FAST", type: "fast" };
  if (index % 4 === 0) return { label: "LIMITED SEATS", type: "seats" };
  if (index % 3 === 0) return { label: "HIGH DEMAND", type: "fast" };
  return { label: "FEW SEATS LEFT", type: "seats" };
}

export function getRegion(city: string): "uk-europe" | "india" | "australia" | "middle-east-asia" {
  const c = city.toLowerCase();
  if (
    c.includes("uk") ||
    c.includes("germany") ||
    c.includes("switzerland") ||
    c.includes("netherlands") ||
    c.includes("finland") ||
    c.includes("london") ||
    c.includes("cardiff") ||
    c.includes("manchester") ||
    c.includes("geneva") ||
    c.includes("frankfurt") ||
    c.includes("munich") ||
    c.includes("basel") ||
    c.includes("helsinki") ||
    c.includes("eindhoven") ||
    c.includes("reading") ||
    c.includes("slough") ||
    c.includes("birmingham") ||
    c.includes("cambridge") ||
    c.includes("milton keynes")
  ) {
    return "uk-europe";
  }
  if (
    c.includes("india") ||
    c.includes("delhi") ||
    c.includes("mumbai") ||
    c.includes("jaipur") ||
    c.includes("chandigarh") ||
    c.includes("kolkata") ||
    c.includes("ludhiana")
  ) {
    return "india";
  }
  if (
    c.includes("australia") ||
    c.includes("new zealand") ||
    c.includes("sydney") ||
    c.includes("melbourne") ||
    c.includes("auckland") ||
    c.includes("adelaide") ||
    c.includes("canberra")
  ) {
    return "australia";
  }
  return "middle-east-asia";
}

