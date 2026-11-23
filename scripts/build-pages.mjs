import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const root = path.resolve(path.dirname(__filename), "..");
const site = "https://skynetmonitoring.com";
const lastmod = "2026-11-23";

const provider = {
  "@type": "ProfessionalService",
  name: "Skynet Monitoring",
  url: `${site}/`,
  telephone: "+1-678-310-7570",
  email: "sales@skynetmonitoring.com",
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
        <a href="tel:+16783107570" class="nav-phone">(678) 310-7570</a>
        <a href="#contact" class="nav-cta">Get a Quote</a>
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
          <p>AI-powered virtual guard monitoring from our 24/7 Security Operations Center in Marietta, Georgia (2470 Windy Hill Road, Suite 300, Marietta, GA 30067), serving commercial properties across Metro Atlanta and Georgia.</p>
        </div>
        <div class="footer-col">
          <h4>Services</h4>
          <a href="/remote-video-monitoring/">Remote Video Monitoring</a>
          <a href="/alarm-verification/">AI Alarm Verification</a>
          <a href="/virtual-guard-tours/">Virtual Guard Tours</a>
          <a href="/audio-intervention/">Audio Intervention</a>
          <a href="/virtual-escorts/">Security Escorts</a>
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
          <a href="#contact">Contact Us</a>
          <a href="/skynet-monitoring-brochure.pdf" target="_blank" rel="noopener">Download Brochure (PDF)</a>
          <a href="tel:+16783107570">(678) 310-7570</a>
          <a href="mailto:sales@skynetmonitoring.com">sales@skynetmonitoring.com</a>
        </div>
      </div>
      <div class="footer-bottom">
        <p>&copy; 2026 Skynet Monitoring. All rights reserved. Georgia Low Voltage Contractor License No. LVU407024.</p>
        <div class="footer-bottom-links">
          <a href="https://edgebusinesssecuritycameras.com/" target="_blank" rel="noopener">Edge CCTV</a>
          <a href="https://securitycamerasatlanta.com/" target="_blank" rel="noopener">Security Cameras Atlanta</a>
          <a href="https://edgebusinesssecuritycameras.com/privacy-policy/" target="_blank" rel="noopener">Privacy Policy</a>
          <a href="https://edgebusinesssecuritycameras.com/terms/" target="_blank" rel="noopener">Terms</a>
        </div>
      </div>
    </div>
  </footer>`;

function renderFaqSection(faqs) {
  const items = faqs
    .map(
      (f) => `          <div class="faq-item">
            <h3>${f.q}</h3>
            <p>${f.a}</p>
          </div>`
    )
    .join("\n");
  return `    <section class="faq" id="faq">
      <div class="container">
        <div class="section-label">Questions</div>
        <h2 class="section-title">Frequently Asked Questions</h2>
        <div class="faq-list">
${items}
        </div>
      </div>
    </section>`;
}

function renderContactSection(page) {
  return `    <section class="contact" id="contact">
      <div class="container">
        <div class="contact-wrapper">
          <div class="contact-info">
            <div class="section-label">Contact Us</div>
            <h2 class="section-title">Request a Metro Atlanta <span class="text-gradient">Monitoring Assessment</span></h2>
            <p class="section-subtitle">Speak directly with our Marietta Security Operations Center team about protecting your cameras, gates, or job site across Metro Atlanta and Georgia.</p>
            <div class="contact-details">
              <div class="contact-item">
                <div class="contact-item-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
                </div>
                <div>
                  <h4>Phone</h4>
                  <a href="tel:+16783107570">(678) 310-7570</a>
                </div>
              </div>
              <div class="contact-item">
                <div class="contact-item-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" /></svg>
                </div>
                <div>
                  <h4>Email</h4>
                  <a href="mailto:sales@skynetmonitoring.com">sales@skynetmonitoring.com</a>
                </div>
              </div>
              <div class="contact-item">
                <div class="contact-item-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" /></svg>
                </div>
                <div>
                  <h4>Operations Center</h4>
                  <p>2470 Windy Hill Road, Suite 300<br>Marietta, GA 30067</p>
                </div>
              </div>
            </div>
          </div>
          <div class="contact-form-wrapper">
            <h3>Request a Free Security Assessment</h3>
            <p>Tell us about your property, camera count, and monitoring hours.</p>
            <form id="contactForm" action="https://formsubmit.co/sales@skynetmonitoring.com" method="POST">
              <input type="hidden" name="_subject" value="New Assessment Request (${page.crumb}) — Skynet Monitoring">
              <input type="hidden" name="_captcha" value="false">
              <input type="hidden" name="_template" value="table">
              <input type="hidden" name="source_page" value="/${page.slug}/">
              <input type="text" name="_honey" style="display:none">
              <div class="form-grid">
                <div class="form-group">
                  <label for="name">Full Name *</label>
                  <input type="text" id="name" name="name" required placeholder="John Smith">
                </div>
                <div class="form-group">
                  <label for="company">Company</label>
                  <input type="text" id="company" name="company" placeholder="Your company name">
                </div>
                <div class="form-group">
                  <label for="email">Email Address *</label>
                  <input type="email" id="email" name="email" required placeholder="john@company.com">
                </div>
                <div class="form-group">
                  <label for="phone">Phone Number *</label>
                  <input type="tel" id="phone" name="phone" required placeholder="(678) 555-0199">
                </div>
                <div class="form-group full-width">
                  <label for="property-type">Property Type</label>
                  <select id="property-type" name="property_type">
                    <option value="">Select property type...</option>
                    <option value="commercial"${page.defaultProperty === "commercial" ? " selected" : ""}>Commercial Property</option>
                    <option value="construction"${page.defaultProperty === "construction" ? " selected" : ""}>Construction Site</option>
                    <option value="residential"${page.defaultProperty === "residential" ? " selected" : ""}>Residential / HOA</option>
                    <option value="auto-dealership"${page.defaultProperty === "auto-dealership" ? " selected" : ""}>Auto Dealership</option>
                    <option value="warehouse"${page.defaultProperty === "warehouse" ? " selected" : ""}>Warehouse / Logistics</option>
                    <option value="government"${page.defaultProperty === "government" ? " selected" : ""}>Government / Municipal</option>
                    <option value="retail">Retail</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div class="form-group full-width">
                  <label for="message">Tell Us About Your Security Needs</label>
                  <textarea id="message" name="message" placeholder="Describe your Atlanta-area property, current cameras or gates, and overnight monitoring needs..."></textarea>
                </div>
              </div>
              <div class="form-submit">
                <button type="submit" class="btn btn-primary" id="submitBtn">
                  Submit Assessment Request
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                </button>
              </div>
              <div class="form-status" id="formStatus"></div>
            </form>
          </div>
        </div>
      </div>
    </section>`;
}

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
        { "@type": "AdministrativeArea", name: "Georgia" },
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
  if (page.faqs && page.faqs.length > 0) {
    graph.push({
      "@type": "FAQPage",
      mainEntity: page.faqs.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: {
          "@type": "Answer",
          text: f.a,
        },
      })),
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
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link rel="preconnect" href="https://www.googletagmanager.com">
  <link rel="dns-prefetch" href="https://formsubmit.co">
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
  <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Outfit:wght@400;500;600;700;800;900&display=swap" media="print" onload="this.media='all'">
  <noscript>
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Outfit:wght@400;500;600;700;800;900&display=swap">
  </noscript>
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
        <div class="page-hero-actions">
          <a href="#contact" class="btn btn-primary">Request Free Assessment</a>
          <a href="tel:+16783107570" class="page-hero-phone">Call (678) 310-7570</a>
        </div>
      </div>
    </section>
    <section class="page-body">
      <div class="container page-copy">
        ${page.body}
        <div class="page-links">
          <a href="#contact">Schedule a site assessment</a>
          <a href="/skynet-monitoring-brochure.pdf" target="_blank" rel="noopener">Download Brochure (PDF)</a>
          <a href="/about/">About our Marietta SOC</a>
          <a href="tel:+16783107570">(678) 310-7570</a>
        </div>
      </div>
    </section>
${renderFaqSection(page.faqs)}
${renderContactSection(page)}
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
    defaultProperty: "commercial",
    title: "Remote Video Monitoring Atlanta | Skynet Monitoring",
    description: "24/7 live remote video monitoring from our Marietta SOC for Atlanta commercial properties. Call (678) 310-7570 for a site assessment.",
    h1: "Remote Video Monitoring in Atlanta, GA",
    lede: "Trained operators watch your commercial cameras around the clock from our Security Operations Center in Marietta, Georgia.",
    body: `
        <h2>Proactive Monitoring From Metro Atlanta</h2>
        <p>Remote video monitoring puts a live operator on your cameras without paying for an unattended guard booth or waiting until morning to pull recorded footage. From our Security Operations Center at 2470 Windy Hill Road in Marietta, GA, trained monitoring specialists watch commercial perimeters, loading docks, gated entries, and parking lots across Atlanta, Buckhead, Sandy Springs, Alpharetta, Kennesaw, and surrounding Georgia corridors.</p>
        <p>Unlike passive alarm companies that only react after a door sensor trips, our desk combines analytics with real-time human judgment. When a person or vehicle crosses into a restricted zone after business hours, an agent reviews the live feed immediately, issues a custom talk-down warning through on-site horn speakers, notifies your designated manager, and stays on the cameras while coordinating verified police dispatch if the intruder refuses to leave.</p>
        <h2>How Your Property Connects to the SOC</h2>
        <ul>
          <li><strong>Site &amp; Camera Audit:</strong> We walk your property or inspect your existing NVR/IP camera coverage to map blind spots, lighting conditions, detection lines, and monitoring schedules.</li>
          <li><strong>Licensed Field Installation:</strong> Need new 4K IP cameras, outdoor speakers, or point-to-point links? Sister division Edge CCTV completes commercial installation under Georgia Low Voltage Contractor License No. LVU407024.</li>
          <li><strong>Custom Post Orders &amp; Analytics:</strong> We configure perimeter rules around your closing times, shift changes, and vendor schedules so regular staff traffic does not trigger nuisance alerts.</li>
          <li><strong>24/7 Intervention &amp; Incident Clips:</strong> Every verified escalation produces an audio deterrence attempt, a clear dispatch briefing for local law enforcement, and timestamped video clips in your morning summary.</li>
        </ul>
        <h2>Common Metro Atlanta Monitoring Applications</h2>
        <p>Atlanta businesses typically pair <a href="/remote-video-monitoring/">remote video monitoring</a> with <a href="/alarm-verification/">AI alarm verification</a> and <a href="/audio-intervention/">live audio intervention</a> across multi-tenant office parks, retail strip centers, equipment yards along I-75 and I-285, <a href="/construction-site-monitoring/">construction laydown sites</a>, and <a href="/dealership-security-monitoring/">automotive inventory lots</a>.</p>
        <p>Plans cost up to 90% less than staffing an on-site guard around the clock while eliminating shift fatigue, blind patrols, and uncovered breaks. Whether we are monitoring five critical perimeter cameras or a multi-acre campus, every post order is tailored during your assessment.</p>`,
    faqs: [
      {
        q: "Can Skynet monitor our existing commercial security cameras in Atlanta?",
        a: "Often yes. During the free site assessment we check camera placement, night visibility, upload bandwidth, and ONVIF/NVR compatibility so you do not replace working hardware unnecessarily."
      },
      {
        q: "Where do Skynet Monitoring operators work from?",
        a: "Our 24/7 Security Operations Center is located locally at 2470 Windy Hill Road, Suite 300, Marietta, GA 30067, serving Metro Atlanta and commercial properties throughout Georgia."
      },
      {
        q: "What happens if an intruder ignores the live speaker warning?",
        a: "The operator escalates immediately according to your post orders, contacting local law enforcement with real-time visual confirmation of location, suspect description, and movement."
      }
    ],
  },
  {
    slug: "alarm-verification",
    crumb: "AI Alarm Verification",
    serviceType: "AI Alarm Verification",
    defaultProperty: "commercial",
    title: "AI Alarm Verification Atlanta | Skynet Monitoring",
    description: "Human-verified AI alarm monitoring in Atlanta. Our Marietta operations center filters weather and animals before requesting police dispatch.",
    h1: "AI-Assisted Alarm Verification in Atlanta",
    lede: "Analytics remove weather, shadows, and wildlife triggers so live Marietta operators focus only on genuine human and vehicle intrusions.",
    body: `
        <h2>Stop Paying for False Alarm Dispatches</h2>
        <p>Standard motion detection cannot tell a windblown tree branch, headlights on I-285, rain glare, or a roaming animal from someone cutting a fence lock. When raw motion alerts go straight to central station dispatch or flood managers' phones at 3 a.m., legitimate emergencies get buried under noise — and Atlanta municipalities penalize repeat false dispatches.</p>
        <p>Skynet Monitoring places an AI classification layer and a trained human operator in front of every escalation. Object detection identifies human silhouettes and vehicles crossing defined intrusion zones during armed hours, and our Marietta SOC verifies the video clip in real time before anyone picks up the phone to request police response.</p>
        <h2>What Verified Alarm Triage Delivers</h2>
        <ul>
          <li><strong>Cleaner Escalations:</strong> Shadows, insects on IR lenses, rain, and foliage alerts are dropped automatically before reaching dispatch workflows.</li>
          <li><strong>Visual Priority With Police:</strong> Law enforcement responds differently to a live operator reporting a visually confirmed trespasser inside a fenced yard versus an unverified door contact.</li>
          <li><strong>Documented Event Trails:</strong> Managers receive concise incident reports with direct video clips showing why an event was cleared or escalated.</li>
          <li><strong>Reduced False-Alarm Fines:</strong> Because only human-confirmed threats trigger police dispatch, your site avoids nuisance false-alarm citations across Fulton, Cobb, DeKalb, and Gwinnett jurisdictions.</li>
        </ul>
        <h2>Seamless Pairing With Live Audio &amp; Guard Tours</h2>
        <p>Verified intrusion monitoring connects directly to <a href="/audio-intervention/">live audio intervention</a> so the operator who confirms a person on your loading dock can immediately issue a stern voice-down warning. For quiet periods where you also want proactive proof of perimeter integrity, add scheduled <a href="/virtual-guard-tours/">virtual guard tours</a> at closing, midnight, and pre-open.</p>`,
    faqs: [
      {
        q: "Do we need new cameras to use AI alarm verification?",
        a: "Not always. Even when older cameras lack built-in analytics, our platform can apply server-side person and vehicle analytics at the monitoring intake after inspecting stream quality."
      },
      {
        q: "Does AI replace human operators?",
        a: "No. AI handles the first-pass filtering of animals, weather, and headlights. A live operator in our Marietta SOC inspects the alert before speaking on speakers or calling police."
      },
      {
        q: "How fast are alarm triggers reviewed?",
        a: "Our monitoring desk targets under-30-second triage on incoming verified alerts, depending on site connectivity and simultaneous escalation volume."
      }
    ],
  },
  {
    slug: "virtual-guard-tours",
    crumb: "Virtual Guard Tours",
    serviceType: "Virtual Guard Tours",
    defaultProperty: "commercial",
    title: "Virtual Guard Tours Atlanta | Skynet Monitoring",
    description: "Scheduled virtual guard camera patrols across Metro Atlanta gates, loading docks, and lots from our Marietta SOC. Call (678) 310-7570.",
    h1: "Virtual Guard Tours for Atlanta Properties",
    lede: "Structured live camera patrols run by Marietta operators on a fixed schedule — checking doors, gates, lots, and equipment yards with written logs.",
    body: `
        <h2>Scheduled Patrol Accountability Without Patrol Cars</h2>
        <p>Traditional roving patrol guards spend a few minutes driving through a parking lot once or twice a night, often missing areas behind buildings or between trailers. A virtual guard tour turns your perimeter cameras into an on-time, documented walkthrough run by an operator inside our Marietta Security Operations Center.</p>
        <p>Following your custom tour checklist, an operator inspects each camera zone in sequence — checking whether dock doors closed properly, chain-link gates are latched, lighting is functioning, or unauthorized vehicles remain parked behind retail suites or industrial bays. If someone appears during a patrol, the agent immediately triggers <a href="/audio-intervention/">live audio intervention</a> and stays with the camera view.</p>
        <h2>Included in Every Virtual Tour Program</h2>
        <ul>
          <li><strong>Custom Camera Route Checklist:</strong> You specify which gates, dumpster corrals, roof hatches, loading bays, and fuel islands our operators inspect on each pass.</li>
          <li><strong>Fixed Time Windows or On-Demand Checks:</strong> Common Metro Atlanta schedules include post-close verification, mid-night sweeps, and pre-opening readiness checks.</li>
          <li><strong>Compliance &amp; Maintenance Flags:</strong> Beyond trespassing, tours catch propped doors, burnt-out lot lighting, blocked fire lanes, and offline cameras before workday disruptions.</li>
          <li><strong>Audit-Ready Tour Logs:</strong> Management receives regular timestamped summaries confirming each patrol ran as scheduled, along with clips from any exception.</li>
        </ul>
        <h2>Combining Tours With Continuous Alarm Coverage</h2>
        <p>While <a href="/remote-video-monitoring/">remote video monitoring</a> responds within seconds to active intrusion lines, virtual guard tours verify static conditions that might never trip a motion line — like an unlocked bay door left open by the late shift. Together they deliver stronger coverage across Cobb, Fulton, and Gwinnett properties at a fraction of roving security contracts.</p>`,
    faqs: [
      {
        q: "How often can virtual guard tours run each night?",
        a: "Tour frequency is configured to your post orders — from an opening and closing verification sweep to hourly or multi-pass overnight checks."
      },
      {
        q: "Can operators report open doors or burned-out lights?",
        a: "Yes. Tour checklists routinely include checking that warehouse overhead doors are down, entry gates are closed, and site floodlights are operational."
      },
      {
        q: "What happens if a patrol uncovers an intruder?",
        a: "The agent transitions immediately into live intervention mode: addressing the individual over two-way horn speakers and coordinating police dispatch if they remain on site."
      }
    ],
  },
  {
    slug: "audio-intervention",
    crumb: "Live Audio Intervention",
    serviceType: "Live Audio Intervention",
    defaultProperty: "commercial",
    title: "Live Audio Intervention Atlanta | Skynet Monitoring",
    description: "Two-way live audio voice-down deterrence from our Marietta monitoring desk stops Atlanta trespassers before theft or damage happens.",
    h1: "Live Audio Intervention in Atlanta",
    lede: "High-output two-way IP horn speakers let our Marietta SOC speak directly to intruders in real time — stopping crime before glass breaks or equipment walks.",
    body: `
        <h2>Stop Trespassers Before Police Even Arrive</h2>
        <p>Even a fast police response takes several minutes — plenty of time to pry a service door, strip copper wire, or smash truck windows. Live audio intervention closes that gap inside seconds. As soon as our Marietta Security Operations Center verifies an unauthorized person on your lot, the operator keys up the nearest outdoor speaker and speaks directly to them.</p>
        <p>These are not pre-recorded robotic loops that repeaters quickly learn to ignore. Our operators address the person by specific details — clothing color, vehicle location, or exact corner of the building — proving a live person is watching in real time. Most trespassers leave the property immediately once challenged by voice.</p>
        <h2>Strategic Speaker Zones for Commercial Sites</h2>
        <ul>
          <li><strong>Dealership Inventory Rows:</strong> Challenge loiterers entering back lots or kneeling beside vehicles after closing hours.</li>
          <li><strong>Construction Laydown Yards:</strong> Warn trespassers approaching tool trailers, copper pallets, and fuel tanks before locks are cut.</li>
          <li><strong>Loading Docks &amp; Dumpster Pads:</strong> Curb illegal dumping, after-hours catalytic converter theft, and rear-door break-in attempts behind shopping centers and warehouses.</li>
          <li><strong>Multifamily Amenities &amp; Gates:</strong> Clear unauthorized groups from pool decks, mailrooms, and entry barriers without confronting residents in person.</li>
        </ul>
        <h2>Adding Speakers to Existing Camera Installations</h2>
        <p>If your Atlanta site already has IP cameras but lacks audio deterrence, our licensed partner Edge CCTV (GA License No. LVU407024) can mount PoE horn speakers tied directly into our SOC workflow. Paired with <a href="/alarm-verification/">AI alarm verification</a> and <a href="/remote-video-monitoring/">24/7 video monitoring</a>, audio intervention turns passive surveillance into immediate crime deterrence.</p>`,
    faqs: [
      {
        q: "Are voice-down announcements pre-recorded or spoken live?",
        a: "They are spoken live by the Marietta SOC operator watching your camera feed, using real details such as location, clothing, or vehicle so intruders know a live guard is watching."
      },
      {
        q: "Do I already need speakers installed on our building?",
        a: "No. If you do not have outdoor IP horn speakers, our Georgia-licensed low-voltage installation team (LVU407024) can add weatherproof PoE speakers during onboarding."
      },
      {
        q: "Won't loud speakers disturb neighbors at night?",
        a: "During site design we orient directional horn speakers into your lot and tune volume profiles by time window so announcements stay clear on your property without blasting neighboring streets."
      }
    ],
  },
  {
    slug: "virtual-escorts",
    crumb: "Employee Security Escorts",
    serviceType: "Employee Security Escort Monitoring",
    defaultProperty: "commercial",
    title: "Employee Security Escort Monitoring Atlanta | Skynet",
    description: "Live remote camera security escorts from our Marietta SOC for Atlanta employees closing up late or walking to parking areas.",
    h1: "Remote Security Camera Escorts for Atlanta Staff",
    lede: "Live remote camera oversight from our Marietta operations desk while closing employees, managers, or lone workers lock up and walk safely to their vehicles.",
    body: `
        <h2>Remote Camera Oversight During High-Risk Transitions</h2>
        <p>Opening before dawn and locking up late at night are the moments when commercial employees feel most exposed — walking across dark rear parking lots, carrying till bags, locking standalone retail storefronts, or securing gate chains in industrial corridors. Hiring a dedicated on-site security officer solely to cover 15-minute shift transitions is expensive and impractical across multi-site Atlanta operations.</p>
        <p>Skynet Monitoring's commercial employee security escorts provide real-time camera companionship from our 24/7 Security Operations Center in Marietta, Georgia. Before stepping outside or unlocking the building alone, your employee contacts our monitoring desk by phone or designated code. An operator pulls up the interior exit and exterior lot cameras covering their exact path and watches live until they are safely inside their vehicle and clear of the property.</p>
        <h2>How Commercial Security Escorts Work</h2>
        <ul>
          <li><strong>Check-In at Lockup or Arrival:</strong> A closing manager, technician, or late-shift associate contacts the Marietta desk when preparing to exit or open a facility.</li>
          <li><strong>Continuous Camera Handoff:</strong> The operator tracks the employee across exterior parking lot, walkway, and entry-door cameras in real time, keeping eyes on surrounding blind spots.</li>
          <li><strong>Instant Audio &amp; Dispatch Escalation:</strong> If anyone loiters along the path or approaches unexpectedly, the operator triggers <a href="/audio-intervention/">live two-way audio</a> warnings and immediately dispatches police if required.</li>
          <li><strong>Timestamped Escort Log:</strong> Every escort session starts and closes with an audited timestamp tied to your site's post orders.</li>
        </ul>
        <h2>Ideal for Metro Atlanta Workplaces</h2>
        <p>Commercial escorts integrate effortlessly onto sites already running <a href="/remote-video-monitoring/">remote video monitoring</a> or <a href="/remote-access-control/">remote access control</a>: retail managers in Buckhead and Perimeter, medical clinic staff leaving after dusk, warehouse supervisors locking rear bays along Fulton Industrial, and property managers showing suites after hours.</p>`,
    faqs: [
      {
        q: "Who is this service built for?",
        a: "Remote security escorts are strictly a B2B workplace safety service for commercial closing teams, retail managers, medical clinic staff, and lone late-shift employees walking to vehicles."
      },
      {
        q: "How does an employee request a live camera escort?",
        a: "During onboarding we set a dedicated desk check-in process and passphrase in your site post orders so staff only call in when locking up or arriving after hours."
      },
      {
        q: "Does an escort work alongside overnight lot monitoring?",
        a: "Yes. Most clients pair closing employee escorts with overnight perimeter alarm verification on the exact same cameras, adding zero extra hardware when parking views are covered."
      }
    ],
  },
  {
    slug: "remote-access-control",
    crumb: "Remote Access Control",
    serviceType: "Remote Access Control",
    defaultProperty: "commercial",
    title: "Remote Access Control Monitoring Atlanta | Skynet",
    description: "24/7 remote gate, barrier, and delivery door access control from our Marietta SOC for Atlanta commercial sites, yards, and HOAs.",
    h1: "Remote Gate &amp; Door Access Control in Atlanta",
    lede: "Live video verification and remote gate release from our Marietta desk for after-hours deliveries, contractor entries, and gated communities.",
    body: `
        <h2>Stop Leaving Gates Propped Open or Guard Shacks Understaffed</h2>
        <p>Unmanned gates create two costly problems for Atlanta logistics yards, HOA communities, and commercial properties: either drivers get stuck blocking street lanes for hours, or staff give out static PIN codes that stay active for months after contractors leave. Remote access control puts a live video operator in Marietta on your intercom and barrier gate around the clock.</p>
        <p>When a delivery driver, utility tech, or after-hours visitor presses the call button, the audio/video call routes directly to our Security Operations Center. The agent sees the driver and license zone on camera, verifies credentials against your approved vendor schedule or callback rules, opens the gate remotely, and watches on video to confirm tailgating did not occur before the barrier closes.</p>
        <h2>Gate &amp; Entry Functions Covered 24/7</h2>
        <ul>
          <li><strong>After-Hours Vendor &amp; Freight Entry:</strong> Verify bills of lading, technician work orders, or emergency utility dispatches before opening loading gates.</li>
          <li><strong>HOA &amp; Multifamily Visitor Screening:</strong> Manage guest entry during unstaffed gatehouse hours without paying overnight gate-attendant payroll.</li>
          <li><strong>Anti-Tailgating Audio Deterrence:</strong> Immediately warn trailing vehicles via speaker if someone tries to follow an authorized truck through the barrier arm.</li>
          <li><strong>Searchable Access Audit Trails:</strong> Every entry request records who called, what was approved or denied, and linked video clips from the gate cameras.</li>
        </ul>
        <h2>Hardware Integration Under Georgia License LVU407024</h2>
        <p>Need intercoms, IP relays, or gate-arm tie-ins? Sister division Edge CCTV handles compliant commercial access-control installation under Georgia Low Voltage Contractor License No. LVU407024. Combine gate screening with scheduled <a href="/virtual-guard-tours/">virtual guard tours</a> so operators also confirm perimeter gates lock cleanly throughout the night.</p>`,
    faqs: [
      {
        q: "Can Skynet control existing lift gates and IP intercoms?",
        a: "In many cases yes — we inspect your gate controller, relay module, and intercom/camera path during your site assessment to verify compatibility."
      },
      {
        q: "How do operators verify unexpected after-hours contractors?",
        a: "Every property sets strict verification rules in advance: driver photo ID on camera, authorized vendor list, work-order match, or live phone sign-off from an on-call manager."
      },
      {
        q: "Is video saved for every gate opening?",
        a: "Yes. Denied and approved entries are logged with timestamps and paired with camera footage covering the gate lane."
      }
    ],
  },
  {
    slug: "construction-site-monitoring",
    crumb: "Construction Site Monitoring",
    serviceType: "Construction Site Monitoring",
    defaultProperty: "construction",
    title: "Construction Site Monitoring Atlanta | Skynet",
    description: "24/7 Atlanta construction site video monitoring for laydown yards, copper, and temporary-power job sites from our Marietta SOC.",
    h1: "Construction Site Video Monitoring in Atlanta",
    lede: "Protect copper, heavy equipment, generators, and unfinished builds across Metro Atlanta — including remote sites running on temporary power.",
    body: `
        <h2>Stop Jobsite Theft Without Paying Trailer Guard Overhead</h2>
        <p>Across Atlanta's fast-growing commercial and multifamily corridors — Midtown, Westside, Alpharetta, Marietta, and airport industrial parks — unstaffed nights and weekends invite copper stripping, tool-crib break-ins, appliance theft, and equipment tampering. One stolen skid-steer or cut electrical rough-in can stall subcontractors for weeks.</p>
        <p>Skynet Monitoring delivers continuous after-hours protection from our Marietta Security Operations Center. High-mount site cameras, pole-mounted towers, and cellular links feed live alerts to operators who verify movement in seconds, issue booming two-way speaker voice-downs, and stay with local police dispatch until your laydown yard is secure again.</p>
        <h2>Built Around Active Construction Workflows</h2>
        <ul>
          <li><strong>Dynamic Perimeter &amp; Schedule Rules:</strong> Arming adjusts seamlessly around early-morning concrete pours, crane setups, and weekend trade shifts without false alarms.</li>
          <li><strong>Temporary-Power &amp; Cellular Ready:</strong> Paired with solar-trailer rentals or temporary power poles via sister divisions Edge CCTV and Security Cameras Atlanta, monitoring goes live long before permanent fiber arrives.</li>
          <li><strong>Gate &amp; Laydown Accountability:</strong> Combine <a href="/audio-intervention/">live audio intervention</a> with opening/closing <a href="/virtual-guard-tours/">virtual guard tours</a> to verify conex boxes, fuel tanks, and perimeter fencing stay sealed.</li>
          <li><strong>Camera Health Watch:</strong> Power drops and offline feeds are flagged proactively by the monitoring desk instead of being discovered after a weekend loss.</li>
        </ul>
        <h2>Hardware + Live Desk Under One Roof</h2>
        <p>Because Edge CCTV (GA Low Voltage License No. LVU407024) handles camera poles and solar surveillance trailers locally across Metro Atlanta while Skynet monitors feeds 24/7 in Marietta, general contractors get one accountable team from groundbreaking through certificate of occupancy.</p>`,
    faqs: [
      {
        q: "What if our Atlanta construction site does not have permanent internet or power yet?",
        a: "We pair with temporary-power pole kits and solar cellular surveillance trailers so cameras transmit cleanly to our Marietta SOC before utilities are finished."
      },
      {
        q: "Can monitoring hours shift when subcontractors work weekends?",
        a: "Yes. Superintendents can update active monitoring windows whenever weekend work or early pours are scheduled."
      },
      {
        q: "How quickly can jobsite cameras be connected?",
        a: "After a quick site walk, pole/trailer hardware and live SOC connection are typically scheduled within days so active phases stay covered."
      }
    ],
  },
  {
    slug: "dealership-security-monitoring",
    crumb: "Auto Dealership Monitoring",
    serviceType: "Auto Dealership Security Monitoring",
    defaultProperty: "auto-dealership",
    title: "Auto Dealership Monitoring Atlanta | Skynet",
    description: "After-hours auto dealership lot security monitoring across Metro Atlanta for inventory rows, service drives, and catalytic converters.",
    h1: "Auto Dealership Lot Security Monitoring in Atlanta",
    lede: "Live after-hours perimeter protection across inventory rows, key drops, and service drives — deterring vehicle theft, wheel theft, and catalytic converter crews.",
    body: `
        <h2>Protect Open Inventory Lots Along Every Metro Corridor</h2>
        <p>Dealership rows along Cobb Parkway, Thornton Road, Peachtree Industrial, and I-85 carry millions in outdoor inventory with open frontage that is impossible for a single walking guard to cover simultaneously. Thieves target key lockboxes, late-model trucks, wheel sets, and catalytic converters — often finishing in under two minutes when only passive cameras are recording.</p>
        <p>Skynet Monitoring protects Metro Atlanta auto dealerships from our 24/7 Marietta Security Operations Center. As soon as analytics flag a person entering inventory rows or kneeling near a chassis after closing hours, a live operator reviews the feed, challenges the suspect over outdoor horn speakers by row and clothing description, and coordinates police dispatch if anyone stays on the lot.</p>
        <h2>Targeted Coverage for Dealership Risk Zones</h2>
        <ul>
          <li><strong>Frontline &amp; Overflow Inventory Lots:</strong> Active line-crossing detection on perimeter curbs, fence gaps, and overflow inventory rows.</li>
          <li><strong>Service Bays, Parts Drops &amp; Body Shops:</strong> Watch overnight customer drop-off keys, parts deliveries, and tire storage bays.</li>
          <li><strong>Low-Angle Undercarriage Views:</strong> Catch crews sliding under trucks and vans before saws come out — not the next morning.</li>
          <li><strong>Dealer Morning Briefings:</strong> Receive clear incident clips and after-hours summaries so general managers know exactly what happened overnight.</li>
        </ul>
        <h2>Existing Cameras or Fresh Upgrade — Zero Guard Gaps</h2>
        <p>Most franchise and independent lots already have dozens of outdoor cameras that simply need live human eyes and speakers added. Where blind spots exist, licensed partner Edge CCTV (GA License LVU407024) upgrades night-color cameras and weatherproof horn speakers seamlessly alongside <a href="/alarm-verification/">AI alarm verification</a> and <a href="/audio-intervention/">live audio deterrence</a>.</p>`,
    faqs: [
      {
        q: "Can you monitor our existing dealership camera system?",
        a: "Often yes. We test existing row and service-drive cameras during your free night-coverage assessment and tell you honestly if any corner needs higher low-light clarity or speaker add-ons."
      },
      {
        q: "How do operators handle late service technicians or night porters?",
        a: "Your lot manager approves scheduled service hours and an exception call-in procedure so authorized night porters or haulers are cleared without false police calls."
      },
      {
        q: "Why add live horn speakers on top of perimeter cameras?",
        a: "Calling out an intruder by vehicle row and jacket color drives most crews off the lot within seconds — preventing broken glass, wheel damage, or cut exhaust systems before police arrive."
      }
    ],
  },
  {
    slug: "about",
    crumb: "About",
    serviceType: null,
    defaultProperty: "commercial",
    title: "About Skynet Monitoring Atlanta | Marietta SOC",
    description: "Skynet Monitoring operates a 24/7 Security Operations Center in Marietta, GA protecting Metro Atlanta businesses. License LVU407024.",
    h1: "About Skynet Monitoring in Marietta, GA",
    lede: "A 24/7 Security Operations Center in Marietta protecting Metro Atlanta commercial properties with real-time human verification and audio intervention.",
    body: `
        <h2>Local 24/7 Security Operations Center in Marietta</h2>
        <p>Skynet Monitoring is the dedicated 24/7 remote monitoring division operating out of 2470 Windy Hill Road, Suite 300, Marietta, GA 30067. Built to protect Metro Atlanta and Georgia businesses, our operations center puts trained human security specialists behind AI-assisted camera alerts — closing the gap between passive video recording and expensive on-site guard payroll.</p>
        <p><strong>Phone:</strong> <a href="tel:+16783107570">(678) 310-7570</a><br>
        <strong>Email:</strong> <a href="mailto:sales@skynetmonitoring.com">sales@skynetmonitoring.com</a><br>
        <strong>Brochure:</strong> <a href="/skynet-monitoring-brochure.pdf" target="_blank" rel="noopener">Download Skynet Monitoring Brochure (PDF)</a></p>
        <h2>One Integrated Team From Hardware to Live Response</h2>
        <p>Most monitoring providers never walk your site — they rely on unfamiliar third-party installers and generic central stations thousands of miles away. Skynet Monitoring works side-by-side with our sister brands, <a href="https://edgebusinesssecuritycameras.com/" target="_blank" rel="noopener">Edge CCTV</a> (Georgia Low Voltage Contractor License No. LVU407024) and <a href="https://securitycamerasatlanta.com/" target="_blank" rel="noopener">Security Cameras Atlanta</a>.</p>
        <ul>
          <li><strong>Hardware &amp; Cabling Compliance:</strong> When your facility needs 4K IP cameras, PoE horn speakers, access-control relays, or mobile surveillance trailers, Edge CCTV handles design and installation across Metro Atlanta and Georgia.</li>
          <li><strong>Human-Verified Monitoring:</strong> Our Marietta operators provide <a href="/remote-video-monitoring/">remote video monitoring</a>, <a href="/alarm-verification/">AI alarm verification</a>, <a href="/virtual-guard-tours/">virtual guard tours</a>, <a href="/audio-intervention/">live audio intervention</a>, <a href="/virtual-escorts/">employee security escorts</a>, and <a href="/remote-access-control/">remote access control</a>.</li>
          <li><strong>Transparent Scope &amp; Pricing:</strong> Virtual guard coverage typically costs up to 90% less than staffing an on-site guard post around the clock and targets under-30-second alarm triage, scoped precisely to your camera count and hours during a free site assessment.</li>
        </ul>`,
    faqs: [
      {
        q: "How are Skynet Monitoring, Edge CCTV, and Security Cameras Atlanta related?",
        a: "Skynet Monitoring is the dedicated 24/7 Marietta Security Operations Center division. Edge CCTV (Georgia Low Voltage Contractor License No. LVU407024) and Security Cameras Atlanta handle commercial camera, speaker, trailer, and access-control installations."
      },
      {
        q: "Where does Skynet Monitoring provide coverage?",
        a: "We focus on commercial properties across Metro Atlanta (Marietta, Atlanta, Buckhead, Sandy Springs, Alpharetta, Roswell, Kennesaw, Decatur, and surrounding counties) and throughout Georgia."
      },
      {
        q: "How do we start a monitoring assessment?",
        a: "Call (678) 310-7570 or submit the assessment form below with your property type and camera setup — we schedule a walkthrough to map zones, lighting, and custom post orders."
      }
    ],
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
    <lastmod>${lastmod}</lastmod>
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
