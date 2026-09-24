import fs from "fs";
import path from "path";

const root = path.resolve("C:/Dev/Skynet");
const site = "https://skynetmonitoring.com";

const provider = {
  "@type": "ProfessionalService",
  name: "Skynet Monitoring",
  url: `${site}/`,
  telephone: "+1-678-310-7570",
  address: {
    "@type": "PostalAddress",
    streetAddress: "2470 Windy Hill Road, Suite 300",
    addressLocality: "Marietta",
    addressRegion: "GA",
    postalCode: "30067",
    addressCountry: "US",
  },
};

const header = `  <header class="header" id="header">
    <div class="container">
      <a href="/" class="logo" aria-label="Skynet Monitoring Home">
        <div class="logo-icon">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path d="M13 2L3 14h9l-2 10 10-12h-9l2-10z" />
          </svg>
        </div>
        SKYNET <span>MONITORING</span>
      </a>
      <nav class="nav-links" id="navLinks" aria-label="Main navigation">
        <a href="/#services">Services</a>
        <a href="/#how-it-works">How It Works</a>
        <a href="/#industries">Industries</a>
        <a href="/#why-skynet">Why Skynet</a>
        <a href="/#contact" class="nav-cta">Get a Quote</a>
      </nav>
      <button class="theme-toggle" id="themeToggle" aria-label="Toggle light/dark theme" title="Toggle light/dark theme">
        <svg class="icon-moon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" /></svg>
        <svg class="icon-sun" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="5" /><line x1="12" y1="1" x2="12" y2="3" /><line x1="12" y1="21" x2="12" y2="23" /><line x1="4.22" y1="4.22" x2="5.64" y2="5.64" /><line x1="18.36" y1="18.36" x2="19.78" y2="19.78" /><line x1="1" y1="12" x2="3" y2="12" /><line x1="21" y1="12" x2="23" y2="12" /><line x1="4.22" y1="19.78" x2="5.64" y2="18.36" /><line x1="18.36" y1="5.64" x2="19.78" y2="4.22" /></svg>
      </button>
      <button class="menu-toggle" id="menuToggle" aria-label="Toggle mobile menu" aria-expanded="false"><span></span><span></span><span></span></button>
    </div>
  </header>`;

const footer = `  <footer class="footer" id="footer">
    <div class="container">
      <div class="footer-grid">
        <div class="footer-brand">
          <a href="/" class="logo">
            <div class="logo-icon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M13 2L3 14h9l-2 10 10-12h-9l2-10z" fill="white" /></svg></div>
            SKYNET <span>MONITORING</span>
          </a>
          <p>AI-powered virtual guard services protecting properties nationwide. Proactive security that prevents crime, not just reports it.</p>
        </div>
        <div class="footer-col">
          <h4>Services</h4>
          <a href="/remote-video-monitoring/">Remote Video Monitoring</a>
          <a href="/alarm-verification/">AI Alarm Verification</a>
          <a href="/virtual-guard-tours/">Virtual Guard Tours</a>
          <a href="/audio-intervention/">Audio Intervention</a>
          <a href="/virtual-escorts/">Virtual Escorts</a>
          <a href="/remote-access-control/">Remote Access Control</a>
        </div>
        <div class="footer-col">
          <h4>Industries</h4>
          <a href="/#industry-commercial">Commercial Properties</a>
          <a href="/construction-site-monitoring/">Construction Sites</a>
          <a href="/#industry-residential">Residential &amp; HOA</a>
          <a href="/dealership-security-monitoring/">Auto Dealerships</a>
          <a href="/#industry-warehouse">Warehouses &amp; Logistics</a>
          <a href="/#industry-government">Government</a>
        </div>
        <div class="footer-col">
          <h4>Company</h4>
          <a href="/about/">About</a>
          <a href="/#why-skynet">Why Skynet</a>
          <a href="/#contact">Contact Us</a>
          <a href="tel:+16783107570">(678) 310-7570</a>
          <a href="mailto:sales@skynetmonitoring.com">sales@skynetmonitoring.com</a>
        </div>
      </div>
      <div class="footer-bottom">
        <p>&copy; 2026 Skynet Monitoring. All rights reserved.</p>
        <div class="footer-bottom-links">
          <a href="https://securitycamerasatlanta.com/" target="_blank" rel="noopener">Security Camera Atlanta</a>
          <a href="https://edgecctv.com" target="_blank" rel="noopener">Edge CCTV</a>
        </div>
      </div>
    </div>
  </footer>`;

function schemaFor(page) {
  const url = `${site}/${page.slug}/`;
  const graph = [
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: `${site}/` },
        { "@type": "ListItem", position: 2, name: page.crumb, item: url },
      ],
    },
  ];
  if (page.serviceType) {
    graph.push({
      "@type": "Service",
      name: page.crumb,
      serviceType: page.serviceType,
      url,
      description: page.description,
      provider,
      areaServed: [
        { "@type": "City", name: "Atlanta" },
        { "@type": "City", name: "Marietta" },
      ],
    });
  } else {
    graph.push({
      "@type": "AboutPage",
      name: page.title,
      url,
      description: page.description,
      about: provider,
    });
  }
  return JSON.stringify({ "@context": "https://schema.org", "@graph": graph }, null, 2);
}

function render(page) {
  const url = `${site}/${page.slug}/`;
  if (page.description.length > 160) {
    console.warn(`LONG DESC ${page.slug}: ${page.description.length}`);
  }
  if (page.title.length > 60) {
    console.warn(`LONG TITLE ${page.slug}: ${page.title.length} ${page.title}`);
  }
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <script async src="https://www.googletagmanager.com/gtag/js?id=G-JDWJHD9QR2"></script>
  <script>
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-JDWJHD9QR2');
  </script>
  <title>${page.title}</title>
  <meta name="description" content="${page.description}">
  <meta name="robots" content="index, follow">
  <link rel="canonical" href="${url}">
  <meta property="og:type" content="website">
  <meta property="og:url" content="${url}">
  <meta property="og:title" content="${page.title}">
  <meta property="og:description" content="${page.description}">
  <meta property="og:image" content="${site}/hero-bg.webp">
  <meta property="og:locale" content="en_US">
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="${page.title}">
  <meta name="twitter:description" content="${page.description}">
  <meta name="twitter:image" content="${site}/hero-bg.webp">
  <script type="application/ld+json">
  ${schemaFor(page)}
  </script>
  <link rel="stylesheet" href="/index.css">
  <link rel="icon" type="image/svg+xml" href="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'%3E%3Crect width='32' height='32' rx='6' fill='%23f97316'/%3E%3Cpath d='M16 8 L10 14 L16 14 L14 24 L22 16 L16 16 Z' fill='white'/%3E%3C/svg%3E">
</head>
<body>
${header}
  <main>
    <section class="page-hero">
      <div class="container">
        <p class="breadcrumb"><a href="/">Home</a> / ${page.crumb}</p>
        <h1>${page.h1}</h1>
        <p class="lede">${page.lede}</p>
        <a href="/#contact" class="btn btn-primary">Request Free Assessment</a>
      </div>
    </section>
    <section class="page-body">
      <div class="container page-copy">
        ${page.body}
        <div class="page-links">
          <a href="/#contact">Talk to the monitoring desk</a>
          <a href="/about/">About Skynet Monitoring</a>
          <a href="tel:+16783107570">(678) 310-7570</a>
        </div>
      </div>
    </section>
  </main>
${footer}
  <script src="/main.js" defer></script>
</body>
</html>
`;
}

const pages = [
  {
    slug: "remote-video-monitoring",
    crumb: "Remote Video Monitoring",
    serviceType: "Remote Video Monitoring",
    title: "Remote Video Monitoring in Atlanta | Skynet",
    description: "Live remote video monitoring from a 24/7 Marietta operations center. Agents watch Atlanta properties and act on verified events.",
    h1: "Remote Video Monitoring in Atlanta",
    lede: "Trained agents watch your cameras from our Security Operations Center in Marietta, day and night.",
    body: `
        <h2>What the monitoring desk does</h2>
        <p>Remote video monitoring puts a person on your cameras without stationing a guard at the property. High-definition feeds connect to Skynet Monitoring's 24/7 Security Operations Center. Agents watch for people, vehicles, and activity in the zones you care about, including parking lots, gates, docks, and perimeters.</p>
        <p>The desk is staffed around the clock. When something needs a decision, an agent makes it then: talk down through a speaker, call a manager, or request police. You get the incident report and the clip, instead of a hard drive full of footage nobody reviewed.</p>
        <h2>How a property gets connected</h2>
        <ul>
          <li>We assess the site and mark the cameras, detection zones, and hours that need a person watching.</li>
          <li>Technicians install new cameras or connect the system you already have.</li>
          <li>Feeds land in the Marietta operations center and agents start live monitoring.</li>
          <li>Verified events produce an audio warning, a dispatch request, and a written report.</li>
        </ul>
        <p>This service pairs with <a href="/alarm-verification/">AI alarm verification</a> so agents spend time on real activity, and with <a href="/audio-intervention/">live audio intervention</a> when a voice on the speaker will stop someone before they act.</p>
        <p>Skynet Monitoring is at 2470 Windy Hill Road, Suite 300, Marietta, GA 30067. Atlanta properties are the home market. The same desk can cover sites farther away once the cameras are online.</p>`,
  },
  {
    slug: "alarm-verification",
    crumb: "AI Alarm Verification",
    serviceType: "AI Alarm Verification",
    title: "AI Alarm Verification | Skynet Monitoring",
    description: "AI alarm verification for Atlanta businesses. Animals, weather, and shadows are filtered so only verified threats reach dispatch.",
    h1: "AI Alarm Verification",
    lede: "Analytics sort out animals, weather, and shadows. Agents confirm what is left before anyone calls the police.",
    body: `
        <h2>Why unverified alarms cost you</h2>
        <p>A motion alert is not a crime. Animals, rain, headlights, and flags trip the same sensors as a person at a door. If every alert becomes a police call, the property earns a reputation for false alarms and the people who should respond stop treating the next one as urgent.</p>
        <p>Skynet Monitoring runs AI analytics on the camera view first. The software is there to drop the noise. A trained agent then looks at what remains. Only a verified threat moves to a talk-down or a dispatch request.</p>
        <h2>What you receive</h2>
        <ul>
          <li>Alerts that a person has already reviewed, not a raw motion ping.</li>
          <li>A record of why an event was closed or escalated.</li>
          <li>Video you can hand to a manager, an insurer, or the police.</li>
        </ul>
        <p>The monitoring page on this site states a 99.9% false-alarm reduction on verified monitoring. That figure depends on camera placement and the rules set for your site. We set those rules during the assessment, before the desk goes live.</p>
        <p>Alarm verification sits in front of <a href="/remote-video-monitoring/">remote video monitoring</a>. The same agents handle <a href="/virtual-guard-tours/">virtual guard tours</a> when you want a scheduled walk of the property, not only alarm-driven checks.</p>`,
  },
  {
    slug: "virtual-guard-tours",
    crumb: "Virtual Guard Tours",
    serviceType: "Virtual Guard Tours",
    title: "Virtual Guard Tours | Skynet Monitoring",
    description: "Scheduled virtual guard tours from Marietta. Agents patrol your cameras, check the perimeter, and document what they find.",
    h1: "Virtual Guard Tours",
    lede: "A scheduled camera patrol of the property, run by an agent, with notes and video from each pass.",
    body: `
        <h2>A patrol that does not require a car</h2>
        <p>A virtual guard tour is a planned walk through your cameras. An agent opens the views in order, checks gates, doors, lots, and equipment yards, and writes down what they see. You can schedule the tour on a clock, or request one when a manager wants a look after hours.</p>
        <p>The tour is the remote version of a guard walking the fence. The agent can speak through speakers if someone is on site, and can escalate a verified problem the same way live monitoring does. The difference is the tour happens on purpose, even when no alarm has fired.</p>
        <h2>What a tour covers</h2>
        <ul>
          <li>Perimeter and gate positions you list in the post orders.</li>
          <li>Lots, docks, and storage areas that are empty after close.</li>
          <li>A short report and the clips from anything that was not routine.</li>
        </ul>
        <p>Tours work alongside <a href="/remote-video-monitoring/">live remote video monitoring</a>. Monitoring reacts. Tours confirm the property is still the way you left it. Many Atlanta commercial sites use both: live coverage overnight, and a documented tour at open and at close.</p>`,
  },
  {
    slug: "audio-intervention",
    crumb: "Live Audio Intervention",
    serviceType: "Live Audio Intervention",
    title: "Live Audio Intervention | Skynet Monitoring",
    description: "Live audio intervention from the Skynet desk. Agents speak to trespassers through on-site speakers before a crime is finished.",
    h1: "Live Audio Intervention",
    lede: "Two-way speakers let an agent address someone on the property in the moment, not after the police report.",
    body: `
        <h2>A voice on the lot</h2>
        <p>Cameras record. Speakers interrupt. Live audio intervention gives the Marietta desk a way to talk to a person who is somewhere they should not be. The agent identifies themselves, tells the person to leave, and stays on the camera while they do. That voice-down is often enough. People who thought the lot was empty leave when a specific voice tells them they are on camera.</p>
        <p>Audio is not a recording played on a timer. An agent chooses the words for that event, after the alarm has been verified. If the person stays, the same agent can request police and keep watching until they arrive.</p>
        <h2>Where speakers help</h2>
        <ul>
          <li>Parking lots and dealership rows after the store closes.</li>
          <li>Construction yards where materials sit unattended overnight.</li>
          <li>Loading docks and rear doors that are out of sight from the street.</li>
        </ul>
        <p>Audio intervention is part of <a href="/remote-video-monitoring/">remote video monitoring</a>. It is the step between "we saw someone" and "we called the police." If you want that step, the assessment includes speaker placement with the cameras.</p>`,
  },
  {
    slug: "virtual-escorts",
    crumb: "Virtual Escorts",
    serviceType: "Virtual Escort Services",
    title: "Virtual Escort Services | Skynet Monitoring",
    description: "Virtual escorts for employees closing up or walking to a car. An agent watches the cameras until they are off the property.",
    h1: "Virtual Escort Services",
    lede: "An agent stays on the cameras while someone closes the building or walks to a vehicle.",
    body: `
        <h2>A person watching the walk out</h2>
        <p>Closing staff and property managers are often the last people on site. A virtual escort is a live watch for that walk. The employee calls or uses the method in your post orders. An agent opens the cameras that cover the path from the door to the car, or through the building, and stays with them until they are clear.</p>
        <p>If someone else is in the path, the agent can use <a href="/audio-intervention/">live audio</a> and can call for help. The escort is short, specific, and tied to a person, which is different from all-night monitoring of an empty lot.</p>
        <h2>Typical uses</h2>
        <ul>
          <li>Retail and office closers walking to a parking deck.</li>
          <li>Property managers showing a unit after dark.</li>
          <li>A single employee re-entering a warehouse for a late pickup.</li>
        </ul>
        <p>Escorts sit on top of <a href="/remote-video-monitoring/">remote video monitoring</a>. The cameras and the desk are already there. The escort is a named watch for a named person, with a start and a finish.</p>`,
  },
  {
    slug: "remote-access-control",
    crumb: "Remote Access Control",
    serviceType: "Remote Access Control",
    title: "Remote Access Control | Skynet Monitoring",
    description: "Remote gate and door access from the Skynet desk. Agents verify visitors and keep a log of who was let in.",
    h1: "Remote Access Control",
    lede: "Agents check who is at the gate, door, or barrier, then grant entry and log the event.",
    body: `
        <h2>Someone answers the gate</h2>
        <p>Remote access control is how a delivery, a resident, or a contractor gets in when nobody from your staff is standing at the gate. The intercom or camera reaches the Security Operations Center. The agent checks the person against your list or your instructions, opens the gate or door if they should enter, and writes down the time and the reason.</p>
        <p>The same desk can refuse entry and use audio if someone tries to follow a vehicle through. Access decisions stay with your rules. The agent is applying them at 2 a.m. the same way they would at 2 p.m.</p>
        <h2>What gets logged</h2>
        <ul>
          <li>Who requested entry and which gate or door they used.</li>
          <li>Whether entry was granted or refused, and why.</li>
          <li>Video of the event when the camera covers that point.</li>
        </ul>
        <p>Gated communities and job sites use this with <a href="/virtual-guard-tours/">virtual guard tours</a>. The tour checks that gates latched. Access control decides who is allowed to open them. Ask for both in the <a href="/#contact">free assessment</a> if the property has a barrier and after-hours traffic.</p>`,
  },
  {
    slug: "construction-site-monitoring",
    crumb: "Construction Site Monitoring",
    serviceType: "Construction Site Monitoring",
    title: "Construction Site Monitoring in Atlanta | Skynet",
    description: "Remote monitoring for Atlanta construction sites. Cameras watch materials and equipment, including yards on temporary power.",
    h1: "Construction Site Monitoring in Atlanta",
    lede: "Cameras and a live desk on materials, equipment, and unfinished structures, including sites that only have temporary power.",
    body: `
        <h2>What leaves a job site overnight</h2>
        <p>Construction yards lose copper, tools, equipment, and unfinished work because the site is dark and unstaffed. A virtual guard covers that gap without a trailer guard sitting in a truck. Cameras watch the laydown yard, the fence line, and the equipment. Agents in Marietta verify an event and can talk through a speaker before someone finishes loading a truck.</p>
        <p>Sites with temporary power are part of the work. The assessment covers how the cameras are powered and how the video gets back to the operations center. If a camera is down, the desk should know, instead of discovering a gap after a theft.</p>
        <h2>What we watch</h2>
        <ul>
          <li>Material piles, conex boxes, and equipment that should not move after shift.</li>
          <li>Gates and fence lines where a vehicle can pull in.</li>
          <li>After-hours activity that is not on the delivery schedule.</li>
        </ul>
        <p>Construction monitoring uses <a href="/remote-video-monitoring/">remote video monitoring</a>, <a href="/alarm-verification/">alarm verification</a>, and <a href="/audio-intervention/">audio intervention</a>. A scheduled <a href="/virtual-guard-tours/">virtual guard tour</a> at the end of the shift documents that the yard was secure when the crew left.</p>`,
  },
  {
    slug: "dealership-security-monitoring",
    crumb: "Dealership Security Monitoring",
    serviceType: "Auto Dealership Security Monitoring",
    title: "Dealership Security Monitoring | Skynet",
    description: "After-hours dealership lot monitoring. Agents watch inventory, catalytic converter theft, and people on the rows.",
    h1: "Dealership Security Monitoring",
    lede: "After-hours watch on the inventory rows, aimed at vehicle theft and people under cars.",
    body: `
        <h2>The lot after the lights go down</h2>
        <p>Dealership inventory sits outside. The losses that hurt are a vehicle leaving the row, or someone under a car for a catalytic converter. Cameras aimed at the rows, the exits, and the service drive give the Marietta desk a view of both. An agent verifies the person is not a technician on a work order, then uses a speaker and, if they stay, asks for police.</p>
        <p>Monitoring is overnight and on the days the store is closed. Daytime floor traffic is your sales staff. The desk is for the hours the lot is supposed to be empty.</p>
        <h2>Coverage that matches the lot</h2>
        <ul>
          <li>Rows and exits, so a vehicle moving after close is an event.</li>
          <li>Low views where someone would work under a car.</li>
          <li>A report and clip for the manager before the store opens.</li>
        </ul>
        <p>Dealership plans use <a href="/remote-video-monitoring/">remote video monitoring</a> and <a href="/audio-intervention/">live audio intervention</a>. Audio matters here because a voice that names the row will move most people off the lot before a car is damaged.</p>`,
  },
  {
    slug: "about",
    crumb: "About",
    serviceType: null,
    title: "About Skynet Monitoring | Marietta, GA",
    description: "Skynet Monitoring runs a 24/7 security operations center at 2470 Windy Hill Road, Suite 300, Marietta, GA 30067.",
    h1: "About Skynet Monitoring",
    lede: "A 24/7 security operations center in Marietta that monitors cameras for Atlanta businesses and sites beyond the metro.",
    body: `
        <h2>The operations center</h2>
        <p>Skynet Monitoring provides virtual guard services: remote video monitoring, AI alarm verification, virtual guard tours, live audio intervention, virtual escorts, and remote access control. Agents work from 2470 Windy Hill Road, Suite 300, Marietta, GA 30067.</p>
        <p>Phone: <a href="tel:+16783107570">(678) 310-7570</a><br>
        Email: <a href="mailto:sales@skynetmonitoring.com">sales@skynetmonitoring.com</a></p>
        <p>The desk is staffed seven days a week. An assessment comes first: we look at the property, the cameras you have or need, and the events you want a person to handle. Technicians then install or connect the cameras, and the operations center takes the feeds.</p>
        <h2>What we publish about results</h2>
        <p>The monitoring pages on this site state up to 90% savings versus an on-site guard post, a target response under 30 seconds, a 99.9% reduction in false alarms on verified monitoring, and 500+ properties protected. Those figures describe the service as we run it. They are not a quote for your site until the assessment is done. Camera count, hours, and speaker coverage change the plan.</p>
        <p>Sister companies you may already know are linked in the footer: Edge CCTV and Security Camera Atlanta. Skynet Monitoring is the monitoring desk. Camera installation questions can start with either company. Monitoring questions start here.</p>
        <p>Start with the <a href="/#contact">free assessment</a> or go straight to <a href="/remote-video-monitoring/">remote video monitoring</a>.</p>`,
  },
];

for (const page of pages) {
  const dir = path.join(root, page.slug);
  fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(path.join(dir, "index.html"), render(page), "utf8");
  console.log("wrote", page.slug, "title", page.title.length, "desc", page.description.length);
}

const urls = ["", ...pages.map((p) => p.slug)];
const body = urls
  .map(
    (slug) => `  <url>
    <loc>${site}/${slug}${slug ? "/" : ""}</loc>
    <lastmod>2026-09-24</lastmod>
  </url>`
  )
  .join("\n");
fs.writeFileSync(
  path.join(root, "sitemap.xml"),
  `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${body}
</urlset>
`,
  "utf8"
);
console.log("sitemap", urls.length);
