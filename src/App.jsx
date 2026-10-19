import "./App.css";

const capabilities = [
  {
    icon: "architecture",
    title: "Information Architecture",
    tagline: "Give information a consistent structure.",
    description:
      "Define how information is classified, described, and organized so people and systems can interpret it consistently.",
  },
  {
    icon: "knowledge",
    title: "Knowledge Management",
    tagline: "Preserve and connect organizational knowledge.",
    description:
      "Capture institutional knowledge, preserve important context, and connect information to the people and processes that make it useful.",
  },
  {
    icon: "governance",
    title: "Information Governance",
    tagline: "Establish meaning, ownership, and accountability.",
    description:
      "Define standards, ownership, metadata requirements, and rules that help information remain trustworthy and manageable.",
  },
  {
    icon: "discovery",
    title: "Enterprise Discovery",
    tagline: "Find information beyond individual systems.",
    description:
      "Create a foundation for discovering relevant information across documents, repositories, applications, and organizational boundaries.",
  },
  {
    icon: "intelligence",
    title: "AI & Intelligence",
    tagline: "Give AI better information to work with.",
    description:
      "Establish the context, relationships, and structured information that can support more reliable AI-assisted discovery and decision-making.",
  },
  {
    icon: "systems",
    title: "Connected Systems",
    tagline: "Connect information across the enterprise.",
    description:
      "Define how information relates across applications, platforms, and data sources without requiring every system to store information in the same place.",
  },
];

const principles = [
  {
    title: "Define",
    description:
      "Establish shared terminology, definitions, classifications, and metadata so information has consistent meaning.",
  },
  {
    title: "Connect",
    description:
      "Represent relationships between documents, data, people, processes, systems, and organizational knowledge.",
  },
  {
    title: "Govern",
    description:
      "Establish standards, ownership, accountability, and validation rules that help information remain reliable.",
  },
  {
    title: "Activate",
    description:
      "Use connected information as a foundation for discovery, interoperability, knowledge management, and AI.",
  },
];

function CapabilityIcon({ type }) {
  const commonProps = {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.6,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    "aria-hidden": true,
  };

  switch (type) {
    case "architecture":
      return (
        <svg {...commonProps}>
          <rect x="9" y="2.5" width="6" height="5" rx="1" />
          <rect x="2.5" y="16.5" width="6" height="5" rx="1" />
          <rect x="15.5" y="16.5" width="6" height="5" rx="1" />
          <path d="M12 7.5v4M5.5 16.5v-5h13v5" />
        </svg>
      );

    case "knowledge":
      return (
        <svg {...commonProps}>
          <path d="M12 7.5C9.5 5.5 6 5 3 6v13c3-1 6.5-.5 9 1.5" />
          <path d="M12 7.5C14.5 5.5 18 5 21 6v13c-3-1-6.5-.5-9 1.5" />
          <path d="M12 7.5v13M6 10h3M6 13h3M15 10h3M15 13h3" />
        </svg>
      );

    case "governance":
      return (
        <svg {...commonProps}>
          <path d="M12 2.5 20 6v5.5c0 5-3.5 8.5-8 10-4.5-1.5-8-5-8-10V6z" />
          <path d="m8.5 12 2.5 2.5 4.5-5" />
        </svg>
      );

    case "discovery":
      return (
        <svg {...commonProps}>
          <circle cx="10.5" cy="10.5" r="6.5" />
          <path d="m15.5 15.5 5 5M8 10.5h5M10.5 8v5" />
        </svg>
      );

    case "intelligence":
      return (
        <svg {...commonProps}>
          <circle cx="12" cy="12" r="3" />
          <circle cx="5" cy="5" r="2" />
          <circle cx="19" cy="5" r="2" />
          <circle cx="5" cy="19" r="2" />
          <circle cx="19" cy="19" r="2" />
          <path d="m7 6.5 3 3M17 6.5l-3 3M7 17.5l3-3M17 17.5l-3-3" />
        </svg>
      );

    case "systems":
      return (
        <svg {...commonProps}>
          <rect x="2.5" y="3" width="7" height="7" rx="1.5" />
          <rect x="14.5" y="14" width="7" height="7" rx="1.5" />
          <rect x="14.5" y="3" width="7" height="7" rx="1.5" />
          <rect x="2.5" y="14" width="7" height="7" rx="1.5" />
          <path d="M9.5 6.5h5M6 10v4M18 10v4M9.5 17.5h5" />
        </svg>
      );

    default:
      return null;
  }
}

function InformationNetwork() {
  return (
    <div className="network-panel">
      <div className="network-heading">
        <span>The Information Landscape</span>

        <span className="network-status">
          <span className="status-dot" />
          CONNECTED
        </span>
      </div>

      <div
        className="network-visual"
        role="img"
        aria-label="Conceptual illustration of the Enterprise Information Network connecting documents, data, people, processes, systems, and knowledge."
      >
        <svg
          className="network-lines"
          viewBox="0 0 500 420"
          fill="none"
          aria-hidden="true"
        >
          <path d="M250 210 L110 95" />
          <path d="M250 210 L390 95" />
          <path d="M250 210 L85 210" />
          <path d="M250 210 L415 210" />
          <path d="M250 210 L125 335" />
          <path d="M250 210 L375 335" />

          <path className="network-line-soft" d="M110 95 L390 95" />
          <path className="network-line-soft" d="M85 210 L125 335" />
          <path className="network-line-soft" d="M415 210 L375 335" />
        </svg>

        <div className="network-node node-documents">
          <span className="node-symbol">D</span>
          <span>Documents</span>
        </div>

        <div className="network-node node-data">
          <span className="node-symbol">D</span>
          <span>Data</span>
        </div>

        <div className="network-node node-people">
          <span className="node-symbol">P</span>
          <span>People</span>
        </div>

        <div className="network-node node-processes">
          <span className="node-symbol">P</span>
          <span>Processes</span>
        </div>

        <div className="network-node node-systems">
          <span className="node-symbol">S</span>
          <span>Systems</span>
        </div>

        <div className="network-node node-knowledge">
          <span className="node-symbol">K</span>
          <span>Knowledge</span>
        </div>

        <div className="network-center">
          <span className="network-center-mark">DI</span>
          <strong>Enterprise</strong>
          <strong>Information</strong>
          <strong>Network</strong>
          <span className="network-center-caption">EIN FRAMEWORK</span>
        </div>
      </div>

      <div className="network-footer">
        <span>MEANING</span>
        <span className="network-footer-dot">•</span>
        <span>RELATIONSHIPS</span>
        <span className="network-footer-dot">•</span>
        <span>CONTEXT</span>
      </div>
    </div>
  );
}

function App() {
  return (
    <div className="site-shell">
      <header className="site-header">
        <div className="container header-inner">
          <a className="brand" href="#home" aria-label="DocumentInformation.com home">
            <span className="brand-mark">DI</span>

            <span className="brand-name">
              DocumentInformation
              <span className="brand-domain">.com</span>
            </span>
          </a>

          <nav className="main-nav" aria-label="Main navigation">
            <a href="#about">About</a>
            <a href="#framework">The EIN Framework</a>
            <a href="#capabilities">Capabilities</a>
            <a href="#vision">Our Vision</a>
          </nav>

          <a className="header-cta" href="#framework">
            Explore EIN <span aria-hidden="true">→</span>
          </a>
        </div>
      </header>

      <main>
        {/* HERO */}

        <section className="hero container" id="home">
          <div className="hero-copy">
            <div className="eyebrow">
              <span className="status-dot" />
              A FRAMEWORK FOR CONNECTED INFORMATION
            </div>

            <h1>
              Enterprise information,
              <span className="headline-accent">
                connected by design.
              </span>
            </h1>

            <p className="hero-description">
              Enterprise information is more valuable when its meaning,
              relationships, and context are connected.
            </p>

            <p className="hero-description">
              DocumentInformation.com is developing the Enterprise
              Information Network (EIN)—a framework for organizing,
              connecting, and governing information across documents,
              data, people, processes, and systems.
            </p>

            <div className="hero-actions">
              <a className="button button-primary" href="#framework">
                Explore the EIN Framework
                <span aria-hidden="true">→</span>
              </a>

              <a className="button button-secondary" href="#vision">
                Explore the Vision
              </a>
            </div>

            <p className="hero-note">
              A stronger foundation for organizational knowledge,
              discovery, interoperability, and AI.
            </p>
          </div>

          <InformationNetwork />
        </section>

        {/* THE CHALLENGE */}

        <section className="challenge-section section" id="about">
          <div className="container">
            <div className="section-heading">
              <span className="section-eyebrow">THE CHALLENGE</span>

              <h2>
                Information is everywhere.
                <span>Understanding it is another challenge.</span>
              </h2>

              <p className="section-description">
                Organizations create enormous amounts of information,
                but that information often lives in disconnected systems,
                uses inconsistent terminology, and loses the context
                needed to make it useful.
              </p>
            </div>

            <div className="challenge-grid">
              <article className="challenge-card">
                <div className="challenge-symbol" aria-hidden="true">
                  <svg viewBox="0 0 24 24">
                    <rect x="3" y="4" width="7" height="7" rx="1.5" />
                    <rect x="14" y="13" width="7" height="7" rx="1.5" />
                    <path d="M10 7h4v6M14 13h-4" />
                  </svg>
                </div>

                <h3>Fragmented Information</h3>

                <p>
                  Documents, data, and knowledge are spread across
                  repositories, applications, and departments.
                </p>
              </article>

              <article className="challenge-card">
                <div className="challenge-symbol" aria-hidden="true">
                  <svg viewBox="0 0 24 24">
                    <circle cx="7" cy="7" r="3" />
                    <circle cx="17" cy="17" r="3" />
                    <path d="M10 7h4a3 3 0 0 1 3 3v4M14 17h-4a3 3 0 0 1-3-3v-1" />
                  </svg>
                </div>

                <h3>Inconsistent Meaning</h3>

                <p>
                  The same terms can mean different things across
                  teams, systems, and business processes.
                </p>
              </article>

              <article className="challenge-card">
                <div className="challenge-symbol" aria-hidden="true">
                  <svg viewBox="0 0 24 24">
                    <circle cx="12" cy="12" r="9" />
                    <path d="M12 7v5l3 2M4 4l3 3" />
                  </svg>
                </div>

                <h3>Lost Organizational Context</h3>

                <p>
                  Important relationships, decisions, and institutional
                  knowledge can become difficult to find or preserve.
                </p>
              </article>
            </div>
          </div>
        </section>

        {/* THE EIN FRAMEWORK */}

        <section className="framework-section section" id="framework">
          <div className="container framework-layout">
            <div className="framework-copy">
              <span className="section-eyebrow">THE EIN FRAMEWORK</span>

              <h2>
                A shared foundation for enterprise information.
              </h2>

              <p>
                The Enterprise Information Network is a developing
                framework for modeling, organizing, connecting, and
                understanding enterprise information.
              </p>

              <p>
                It focuses on the definitions, structures, and
                relationships that allow information to be interpreted
                consistently across organizational boundaries.
              </p>

              <p>
                Rather than requiring every system to work the same way,
                EIN aims to establish a shared information foundation
                that helps different systems and people understand how
                their information relates.
              </p>
            </div>

            <div className="framework-details">
              <article className="framework-detail">
                <span className="detail-mark">01</span>

                <div>
                  <h3>Shared Definitions</h3>

                  <p>
                    Establish consistent meanings for important
                    enterprise concepts and terminology.
                  </p>
                </div>
              </article>

              <article className="framework-detail">
                <span className="detail-mark">02</span>

                <div>
                  <h3>Entities & Relationships</h3>

                  <p>
                    Describe the things an organization needs to
                    understand and how those things relate.
                  </p>
                </div>
              </article>

              <article className="framework-detail">
                <span className="detail-mark">03</span>

                <div>
                  <h3>Taxonomies & Ontologies</h3>

                  <p>
                    Organize concepts and define their meaning,
                    classifications, and relationships.
                  </p>
                </div>
              </article>

              <article className="framework-detail">
                <span className="detail-mark">04</span>

                <div>
                  <h3>Metadata & Standards</h3>

                  <p>
                    Define common properties, naming conventions,
                    and validation rules for information.
                  </p>
                </div>
              </article>
            </div>
          </div>
        </section>

        {/* CAPABILITIES */}

        <section className="capabilities-section section" id="capabilities">
          <div className="container">
            <div className="section-heading">
              <span className="section-eyebrow">
                CAPABILITY AREAS
              </span>

              <h2>
                What connected information can help make possible.
              </h2>

              <p className="section-description">
                The EIN vision spans six complementary areas. Together,
                they describe how a shared information foundation could
                support better organization, discovery, governance,
                and intelligence.
              </p>
            </div>

            <div className="capabilities-grid">
              {capabilities.map((capability) => (
                <article
                  className="capability-card"
                  key={capability.title}
                >
                  <div className="capability-icon">
                    <CapabilityIcon type={capability.icon} />
                  </div>

                  <h3>{capability.title}</h3>

                  <p className="capability-tagline">
                    {capability.tagline}
                  </p>

                  <p className="capability-description">
                    {capability.description}
                  </p>

                  <div className="capability-card-bottom">
                    <span>Part of the EIN vision</span>
                    <span aria-hidden="true">↗</span>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* PRINCIPLES */}

        <section className="principles-section section" id="principles">
          <div className="container">
            <div className="section-heading">
              <span className="section-eyebrow">
                GUIDING PRINCIPLES
              </span>

              <h2>
                From information to understanding.
              </h2>

              <p className="section-description">
                Four guiding principles describe the intended direction
                of the EIN framework, from establishing shared meaning
                to enabling new ways of using connected information.
              </p>
            </div>

            <div className="principles-grid">
              {principles.map((principle) => (
                <article className="principle-card" key={principle.title}>
                  <span className="principle-indicator" />

                  <h3>{principle.title}</h3>

                  <p>{principle.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* VISION */}

        <section className="vision-section section" id="vision">
          <div className="container">
            <div className="vision-panel">
              <div className="vision-content">
                <span className="section-eyebrow">
                  THE LONG-TERM VISION
                </span>

                <h2>
                  Build the foundation before building the intelligence.
                </h2>

                <p>
                  AI and advanced analytics are only as useful as the
                  information and context available to them. A more
                  connected information foundation can help organizations
                  move toward better discovery, stronger knowledge
                  continuity, and more context-aware intelligence.
                </p>

                <p>
                  DocumentInformation.com is developing the concepts,
                  specifications, and architecture needed to explore
                  that opportunity through the Enterprise Information
                  Network.
                </p>

                <a className="button button-primary" href="#framework">
                  Explore the Framework
                  <span aria-hidden="true">→</span>
                </a>
              </div>

              <div className="vision-graphic" aria-hidden="true">
                <div className="vision-ring ring-outer" />
                <div className="vision-ring ring-middle" />
                <div className="vision-ring ring-inner" />

                <div className="vision-core">
                  <span className="vision-core-mark">DI</span>
                  <strong>Connected</strong>
                  <strong>Information</strong>
                </div>

                <span className="vision-orbit orbit-top">MEANING</span>
                <span className="vision-orbit orbit-right">
                  KNOWLEDGE
                </span>
                <span className="vision-orbit orbit-bottom">CONTEXT</span>
                <span className="vision-orbit orbit-left">
                  RELATIONSHIPS
                </span>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}

      <footer className="site-footer">
        <div className="container footer-inner">
          <a className="brand footer-brand" href="#home">
            <span className="brand-mark">DI</span>

            <span className="brand-name">
              DocumentInformation
              <span className="brand-domain">.com</span>
            </span>
          </a>

          <p>
            Exploring a better foundation for connected enterprise
            information.
          </p>

          <a className="footer-top-link" href="#home">
            Back to top ↑
          </a>
        </div>

        <div className="container footer-bottom">
          <span>
            © {new Date().getFullYear()} DocumentInformation.com
          </span>

          <span>
            Enterprise Information Network (EIN) — A developing framework
          </span>
        </div>
      </footer>
    </div>
  );
}

export default App;