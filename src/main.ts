import "lenis/dist/lenis.css";
import "./styles/base.css";
import "./styles/sections/observation.css";
import "./styles/sections/aise-kaise.css";
import "./styles/sections/contradictions.css";
import "./styles/sections/corporate.css";
import "./styles/sections/person.css";

import siteJson from "../data/site.json";
import showsJson from "../data/shows.json";
import materialJson from "../data/material.json";

import type { MaterialItem, ShowsFile, SiteContent } from "./lib/types";
import { renderNav } from "./sections/nav";
import { renderObservation } from "./sections/observation";
import { renderAiseKaise } from "./sections/aise-kaise";
import { renderContradictions } from "./sections/contradictions";
import { renderCorporate } from "./sections/corporate";
import { renderPerson } from "./sections/person";
import { renderFooter } from "./sections/footer";
import { setupMotion } from "./motion/setup";

const site = siteJson as SiteContent;
const shows = showsJson as ShowsFile;
const material = materialJson as MaterialItem[];

const app = document.querySelector<HTMLDivElement>("#app");
if (!app) {
  throw new Error("Missing #app root element");
}

app.innerHTML = `
  ${renderNav(site)}
  <main id="main-content">
    ${renderObservation(site)}
    ${renderAiseKaise(site, shows.events)}
    ${renderContradictions(material)}
    ${renderCorporate(site)}
    ${renderPerson(site)}
  </main>
  ${renderFooter(site)}
`;

void setupMotion();
