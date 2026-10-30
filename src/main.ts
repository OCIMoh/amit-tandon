import "lenis/dist/lenis.css";
import "./styles/base.css";
import "./styles/sections/observation.css";
import "./styles/sections/contradictions.css";
import "./styles/sections/aise-kaise.css";
import "./styles/sections/corporate.css";
import "./styles/sections/slot-machine.css";

import siteJson from "../data/site.json";
import showsJson from "../data/shows.json";
import materialJson from "../data/material.json";

import type { MaterialItem, ShowsFile, SiteContent } from "./lib/types";
import { renderNav } from "./sections/nav";
import { renderObservation } from "./sections/observation";
import { renderTicker } from "./sections/ticker";
import { renderContradictions } from "./sections/contradictions";
import { renderAiseKaise } from "./sections/aise-kaise";
import { renderCorporate } from "./sections/corporate";
import { renderSlotMachine } from "./sections/slot-machine";
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
    ${renderTicker()}
    ${renderContradictions(material)}
    ${renderAiseKaise(site, shows.events)}
    ${renderCorporate(site)}
    ${renderSlotMachine()}
  </main>
  ${renderFooter(site)}
`;

void setupMotion();
