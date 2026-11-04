import "lenis/dist/lenis.css";
import "./styles/base.css";
import "./styles/sections/observation.css";
import "./styles/sections/perspective.css";
import "./styles/sections/contradictions.css";
import "./styles/sections/aise-kaise.css";

import siteJson from "../data/site.json";
import showsJson from "../data/shows.json";
import materialJson from "../data/material.json";

import type { MaterialItem, ShowsFile, SiteContent } from "./lib/types";
import { renderNav } from "./sections/nav";
import { renderObservation } from "./sections/observation";
import { renderPerspective } from "./sections/perspective";
import { renderContradictions } from "./sections/contradictions";
import { renderAiseKaise } from "./sections/aise-kaise";
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
  <div class="stage-mouse-spotlight" id="stage-mouse-spotlight" aria-hidden="true"></div>
  <div class="stage-film-grain" aria-hidden="true"></div>
  ${renderNav(site)}
  <main id="main-content">
    ${renderObservation(site)}
    ${renderPerspective(site)}
    ${renderContradictions(material)}
    ${renderAiseKaise(site, shows.events)}
  </main>
  ${renderFooter(site)}
`;

void setupMotion();
