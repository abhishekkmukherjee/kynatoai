export interface ServiceDescription {
  description: string
  what?: string[]
}

const descriptions: Record<string, ServiceDescription> = {

  // ═══════════════════════════════════════════════════════════════════════════
  // CAP 1 — SEARCH & AI VISIBILITY
  // ═══════════════════════════════════════════════════════════════════════════

  "/services/search-ai-visibility/": {
    description:
      "Kynato's Search & AI Visibility practice makes your brand discoverable in traditional search results and inside AI-generated answers from ChatGPT, Perplexity, Gemini, and Google AI Overviews. We combine technical SEO, content strategy, GEO, and AEO into a single compounding programme.",
    what: [
      "Technical SEO and site health audits",
      "Content strategy and topical authority building",
      "AI Overview and SERP feature optimisation",
      "Generative Engine Optimisation (GEO)",
      "Answer Engine Optimisation (AEO)",
      "Brand citation and AI visibility tracking",
    ],
  },

  // L1: SEO
  "/services/search-ai-visibility/seo/": {
    description:
      "Kynato's SEO practice delivers measurable organic growth for B2B businesses in India — combining technical SEO, content strategy, topical authority building, local SEO, and link authority into a single, monitored programme that compounds over time.",
    what: [
      "Technical SEO and Core Web Vitals remediation",
      "Keyword research and content cluster planning",
      "E-E-A-T optimised content production",
      "Local SEO and Google Business Profile management",
      "Off-page link authority building",
      "Knowledge Graph and entity signal building",
    ],
  },

  // L2: Technical SEO
  "/services/search-ai-visibility/seo/technical-seo": {
    description:
      "A comprehensive technical SEO engagement addressing Core Web Vitals, crawlability, indexation health, schema markup deployment, site architecture, and on-page optimisation. Every audit produces a prioritised fix list mapped to expected rank and traffic outcomes.",
    what: [
      "Core Web Vitals: LCP, INP, and CLS diagnosis and fix",
      "Crawlability audit — robots.txt, XML sitemap, redirect chains, canonicals, JS rendering",
      "Schema markup deployment: Organization, FAQ, LocalBusiness, and BreadcrumbList",
      "Site architecture review and internal linking restructure",
      "Title tag, meta description, H-tag, and URL optimisation",
      "Image optimisation, alt text, and compression",
    ],
  },

  // L3: Technical SEO children
  "/services/search-ai-visibility/seo/technical-seo/core-web-vitals": {
    description:
      "Kynato diagnoses and fixes all three Core Web Vitals metrics — LCP, INP, and CLS — with server-level, asset-level, and JavaScript-level interventions that move your pages from failing to passing within defined sprint cycles.",
    what: [
      "LCP: render-blocking resource removal, image prioritisation, server response time",
      "INP: JavaScript execution audit, interaction latency fix",
      "CLS: layout shift root cause analysis and stabilisation",
      "Field and lab data benchmarking before and after",
    ],
  },

  "/services/search-ai-visibility/seo/technical-seo/crawlability-indexation": {
    description:
      "Kynato audits every factor that determines whether Google can find, crawl, and index your pages — identifying and fixing robots.txt directive errors, XML sitemap health issues, redirect chains, canonical conflicts, and JavaScript rendering failures.",
    what: [
      "Robots.txt directive audit and rewrite",
      "XML sitemap health check and submission",
      "Redirect chain identification and unwinding",
      "Canonical tag conflict detection and resolution",
      "JavaScript rendering crawl assessment",
    ],
  },

  "/services/search-ai-visibility/seo/technical-seo/schema-markup": {
    description:
      "Kynato deploys and validates structured data across your entire site — implementing Organisation, Service, FAQ, BreadcrumbList, and LocalBusiness JSON-LD schema to enable rich results and improve entity clarity for both search engines and AI models.",
    what: [
      "Organization and Service schema implementation",
      "FAQ and BreadcrumbList schema deployment",
      "LocalBusiness schema for local search presence",
      "Rich results validation and Search Console monitoring",
    ],
  },

  "/services/search-ai-visibility/seo/technical-seo/site-architecture": {
    description:
      "Kynato reviews and rebuilds your site's information architecture — creating topic cluster and pillar-to-spoke link hierarchies that distribute authority efficiently and signal comprehensive topical depth to search engines.",
    what: [
      "Topic cluster and pillar-to-spoke architecture planning",
      "Breadcrumb and navigation schema implementation",
      "Internal link audit and restructure",
      "Authority distribution mapping across the content hierarchy",
    ],
  },

  "/services/search-ai-visibility/seo/technical-seo/on-page-seo": {
    description:
      "Kynato audits and optimises every on-page element across your site — title tags, meta descriptions, heading hierarchies, URL slugs, image alt text, and internal anchor text — with changes prioritised by measurable ranking impact.",
    what: [
      "Title tag, meta description, and H-tag hierarchy optimisation",
      "URL structure and slug cleanup",
      "Image optimisation, alt text, and compression",
      "Internal anchor text and CTA alignment audit",
    ],
  },

  // L2: Content Strategy
  "/services/search-ai-visibility/seo/content-strategy": {
    description:
      "Kynato maps search intent across your target topics, builds keyword cluster architecture, plans pillar-to-spoke content structures, and optimises for AI Overviews and SERP features — creating a documented content plan that compounds topical authority over time.",
    what: [
      "Search intent research and classification",
      "Keyword research and commercial keyword isolation",
      "People Also Ask and autocomplete mining",
      "Topic cluster and pillar-to-spoke architecture planning",
      "AI Overview eligibility audit and SERP feature strategy",
      "Zero-click and featured snippet content strategy",
    ],
  },

  // L3: Content Strategy children
  "/services/search-ai-visibility/seo/content-strategy/search-intent": {
    description:
      "Kynato classifies search intent across your target keyword set — segmenting informational, commercial, transactional, and navigational queries and matching each to the right page archetype so your content satisfies what both users and search engines expect to find.",
    what: [
      "Intent classification across all four query types",
      "SERP feature analysis and page archetype matching",
      "Intent mismatch audit and keyword cannibalisation detection",
    ],
  },

  "/services/search-ai-visibility/seo/content-strategy/keyword-research": {
    description:
      "Kynato builds a complete keyword opportunity map for your business — isolating high-value commercial and transactional keywords, mining PAA and autocomplete data, and identifying the specific keyword gaps where competitors rank and you don't.",
    what: [
      "Commercial and transactional keyword isolation",
      "People Also Ask and autocomplete harvesting",
      "Competitor keyword gap analysis and prioritisation",
    ],
  },

  "/services/search-ai-visibility/seo/content-strategy/topic-cluster-architecture": {
    description:
      "Kynato designs the content cluster architecture that builds topical authority — producing pillar page scopes, cluster content briefs, and internal linking maps that signal comprehensive expertise across every subject your business needs to rank for.",
    what: [
      "Pillar page scoping and production planning",
      "Cluster content brief production",
      "Internal linking map and entity co-occurrence planning",
    ],
  },

  "/services/search-ai-visibility/seo/content-strategy/ai-overview-serp": {
    description:
      "Kynato audits your content's eligibility for AI Overviews and featured snippets — analysing trigger patterns, optimising for snippet capture, and building zero-click content strategies that maintain brand visibility even when buyers get their answer without clicking.",
    what: [
      "AI Overview trigger analysis and content eligibility audit",
      "Featured snippet, PAA, and Knowledge Panel capture strategy",
      "Zero-click content strategy and brand visibility without traffic",
    ],
  },

  // L2: Content Production
  "/services/search-ai-visibility/seo/content-production": {
    description:
      "From E-E-A-T-optimised long-form articles to AI-assisted content at scale, Kynato produces SEO content built to rank — aligned to search intent, annotated with FAQ and schema opportunities, and published through a documented editorial workflow.",
    what: [
      "E-E-A-T content with intent annotation and SERP outline analysis",
      "Author bio, credential, and byline optimisation",
      "AI-assisted first-draft generation and editorial review",
      "Content audit, refresh, and keyword cannibalisation fix",
      "Content calendar automation and multi-platform distribution",
      "Content performance monitoring and pruning",
    ],
  },

  // L3: Content Production children
  "/services/search-ai-visibility/seo/content-production/eeat-content": {
    description:
      "Kynato produces content built to satisfy Google's E-E-A-T signals — with search intent annotation, competitor outline analysis, FAQ schema opportunity flagging, and author bio and credential optimisation on every piece.",
    what: [
      "Search intent annotation and competitor outline analysis",
      "FAQ and schema opportunity flagging",
      "Author bio, credential, and byline optimisation",
    ],
  },

  "/services/search-ai-visibility/seo/content-production/ai-content-production": {
    description:
      "Kynato runs AI-assisted content workflows — from keyword brief through AI draft generation, editorial review, and CMS publishing — maintaining high content output without sacrificing accuracy or brand alignment.",
    what: [
      "Keyword brief input and AI first-draft generation",
      "Editorial review and quality assurance",
      "CMS publishing workflow and scheduling",
    ],
  },

  "/services/search-ai-visibility/seo/content-production/content-audit": {
    description:
      "Kynato audits your full content library to identify underperforming pages, content decay patterns, and keyword cannibalisation — then delivers a prioritised refresh, merge, redirect, and consolidation plan.",
    what: [
      "Underperforming page identification and refresh prioritisation",
      "Cannibalisation merge, redirect, and consolidation plan",
    ],
  },

  "/services/search-ai-visibility/seo/content-production/content-distribution": {
    description:
      "Kynato builds the systems that keep your content engine running — content calendar automation, multi-platform publishing workflows, and performance monitoring with pruning recommendations for content that has decayed.",
    what: [
      "Content calendar automation and scheduling",
      "Multi-platform publishing automation",
      "Content performance monitoring and pruning",
    ],
  },

  // L2: Local SEO
  "/services/search-ai-visibility/seo/local-seo": {
    description:
      "Kynato manages every local SEO lever for Indian businesses — Google Business Profile optimisation, city-specific service pages, NAP citation audits across Justdial, IndiaMart, and Sulekha, and local Knowledge Graph entity linkage.",
    what: [
      "Google Business Profile optimisation and review management",
      "City-specific service page creation with localised schema",
      "NAP citation audit and duplicate suppression",
      "Local Knowledge Graph entity linkage and same-as schema",
    ],
  },

  // L3: Local SEO children
  "/services/search-ai-visibility/seo/local-seo/google-business-profile": {
    description:
      "Kynato optimises your Google Business Profile for maximum Maps and local pack visibility — configuring categories, service areas, Q&A, and photo cadence while managing review velocity, review response strategy, and GBP entity linkage.",
    what: [
      "Category and service area configuration",
      "Review velocity and review response management",
      "Q&A and photo cadence optimisation",
    ],
  },

  "/services/search-ai-visibility/seo/local-seo/city-service-pages": {
    description:
      "Kynato creates city-specific service pages with localised keyword integration and LocalBusiness schema — each linked from the pillar page hierarchy to distribute authority and signal relevance for regional and hyper-local search queries.",
    what: [
      "Localised keyword integration and structured data",
      "Internal linking from pillar pages to city pages",
    ],
  },

  "/services/search-ai-visibility/seo/local-seo/citation-audit": {
    description:
      "Kynato audits your NAP consistency across all Indian directories — Justdial, IndiaMart, Sulekha, and others — suppressing duplicates and correcting inconsistencies that erode local ranking trust signals.",
    what: [
      "NAP audit across Justdial, IndiaMart, and Sulekha",
      "Duplicate suppression and inconsistency correction",
    ],
  },

  "/services/search-ai-visibility/seo/local-seo/local-knowledge-graph": {
    description:
      "Kynato builds the local entity footprint required for Knowledge Panel appearance — linking your GBP verified entity across authoritative local directories using same-as schema and establishing entity consistency for AI citation accuracy.",
    what: [
      "GBP verified entity and same-as schema implementation",
      "Authoritative local directory entity linkage",
    ],
  },

  // L2: Off-Page SEO
  "/services/search-ai-visibility/seo/off-page-seo": {
    description:
      "Kynato builds domain authority through targeted, white-hat link acquisition — guest post placements, broken link reclamation, digital PR for earned media, and toxic backlink remediation — with full backlink profile monitoring.",
    what: [
      "Guest post and editorial link placement",
      "Broken link reclamation and resource page outreach",
      "Unlinked brand mention conversion",
      "Digital PR and expert commentary placement",
      "Full backlink profile audit and toxic link remediation",
    ],
  },

  // L3: Off-Page SEO children
  "/services/search-ai-visibility/seo/off-page-seo/link-building": {
    description:
      "Kynato runs white-hat link acquisition programmes — guest post placements in relevant Indian and international publications, broken link reclamation, and unlinked brand mention conversion — with every campaign tied to ranking movement, not raw link volume.",
    what: [
      "Guest post and editorial link placement",
      "Broken link reclamation and resource page outreach",
      "Unlinked brand mention conversion",
    ],
  },

  "/services/search-ai-visibility/seo/off-page-seo/digital-pr": {
    description:
      "Kynato builds domain authority through earned media — placing expert quotes and commentary in industry publications, producing original research for passive link earning, and securing podcast and webinar guest appearances for sustainable authority growth.",
    what: [
      "Expert quote and commentary placement in industry media",
      "Original research and data-driven content for passive links",
      "Podcast and webinar guest appearance strategy",
    ],
  },

  "/services/search-ai-visibility/seo/off-page-seo/backlink-health": {
    description:
      "Kynato audits your full backlink profile, identifies toxic and spammy links, creates and submits disavow files, and continuously monitors new and lost links — maintaining a clean, growing authority profile.",
    what: [
      "Full backlink profile audit and toxic link identification",
      "Disavow file creation and submission",
      "New and lost link alerting",
    ],
  },

  // L2: Knowledge Graph
  "/services/search-ai-visibility/seo/knowledge-graph": {
    description:
      "Kynato creates and maintains your brand's entity signals across Wikidata, Google Business Profile, and same-as markup — building the entity footprint that underpins Knowledge Panel appearance and AI citation accuracy.",
    what: [
      "Wikidata entity creation and maintenance",
      "GBP verified entity linkage",
      "Same-as markup across authoritative web properties",
    ],
  },

  // L3: Knowledge Graph children
  "/services/search-ai-visibility/seo/knowledge-graph/wikidata": {
    description:
      "Kynato creates and maintains your brand's Wikidata entity — establishing a machine-readable knowledge graph entry that search engines and AI models use to form accurate, consistent brand opinions.",
  },
  "/services/search-ai-visibility/seo/knowledge-graph/gbp-entity": {
    description:
      "Kynato links your verified Google Business Profile to your brand entity in the Knowledge Graph — establishing the entity connection required for Knowledge Panel eligibility and AI citation consistency.",
  },
  "/services/search-ai-visibility/seo/knowledge-graph/same-as-markup": {
    description:
      "Kynato implements same-as schema markup across your authoritative web properties — signalling entity consistency to search engines and AI models that cross-reference multiple sources when forming brand opinions.",
  },

  // ─────────────────────────────────────────────────────────────────────────
  // L1: AI Visibility
  "/services/search-ai-visibility/ai-visibility/": {
    description:
      "Buyers now get answers from ChatGPT, Perplexity, and Google AI Overviews before visiting any website. Kynato's AI Search Visibility practice ensures your brand appears, is cited accurately, and is recommended inside AI-generated responses across every major engine.",
    what: [
      "AI and agent readiness audit (llms.txt, JS rendering, semantic HTML)",
      "Generative Engine Optimisation (GEO) for ChatGPT, Perplexity, and Gemini",
      "Answer Engine Optimisation (AEO) for featured snippets and AI Overviews",
      "Brand citation authority building across AI-cited platforms",
      "AI hallucination detection and brand accuracy correction",
      "AI visibility index and cross-platform reporting",
    ],
  },

  // L2: AI Readiness Audit
  "/services/search-ai-visibility/ai-visibility/ai-readiness-audit": {
    description:
      "Before your brand can be cited by AI engines, your site must be readable by them. Kynato audits your llms.txt setup, JavaScript rendering, semantic HTML clarity, entity schema signals, schema actions, and agentic accessibility — then delivers a prioritised remediation plan.",
    what: [
      "llms.txt creation and AI crawler access verification",
      "JavaScript rendering remediation for AI crawlers",
      "Semantic HTML and heading hierarchy restructure",
      "Entity disambiguation copy and schema signals",
      "AI agent readiness verification and crawl simulation",
      "Agentic traffic monitoring and zero-click audit",
    ],
  },

  // L3: AI Readiness Audit children
  "/services/search-ai-visibility/ai-visibility/ai-readiness-audit/llms-txt": {
    description:
      "Kynato creates and deploys your llms.txt file — mapping page priority, setting crawler permissions, and verifying access for GPTBot, ClaudeBot, and PerplexityBot to ensure AI engines can read and index your most important content.",
    what: [
      "Page priority mapping and crawler permission instructions",
      "Crawler access verification across GPTBot, ClaudeBot, and PerplexityBot",
    ],
  },
  "/services/search-ai-visibility/ai-visibility/ai-readiness-audit/js-rendering-ai": {
    description:
      "Kynato identifies JavaScript rendering issues blocking AI crawlers and implements SSR or pre-rendering solutions so your content is visible to AI bots that can't execute client-side JavaScript.",
    what: [
      "SSR and SSG implementation guidance",
      "Pre-rendering configuration for AI crawlers",
    ],
  },
  "/services/search-ai-visibility/ai-visibility/ai-readiness-audit/semantic-html-entity": {
    description:
      "Kynato restructures your heading hierarchy and adds entity disambiguation copy and schema signals — ensuring AI models accurately understand what your brand is, what it does, and how it differs from competitors.",
    what: [
      "Heading hierarchy restructure",
      "Entity disambiguation copy and schema signals",
    ],
  },
  "/services/search-ai-visibility/ai-visibility/ai-readiness-audit/agent-readiness": {
    description:
      "Kynato runs post-implementation crawl simulations and entity recognition tests across AI agents — verifying that your site is correctly parsed and your brand is accurately represented after all readiness improvements are deployed.",
    what: [
      "Post-implementation crawl simulation",
      "Entity recognition test across AI agents",
    ],
  },
  "/services/search-ai-visibility/ai-visibility/ai-readiness-audit/agentic-traffic": {
    description:
      "Kynato monitors AI agent session patterns in your analytics — identifying which pages AI bots access, which they skip, and where your brand is generating AI-driven traffic vs zero-click brand mentions.",
    what: [
      "AI agent session identification and page-level access reporting",
      "Zero-click visibility assessment and content gap identification",
    ],
  },
  "/services/search-ai-visibility/ai-visibility/ai-readiness-audit/schema-actions": {
    description:
      "Kynato implements schema actions (BuyAction, ReserveAction, ScheduleAction) that make your site's key conversion flows callable by AI agents, and integrates IndexNow for real-time schema drift detection.",
    what: [
      "BuyAction, ReserveAction, and ScheduleAction schema implementation",
      "IndexNow and real-time schema validation integration",
    ],
  },

  // L2: GEO Optimisation
  "/services/search-ai-visibility/ai-visibility/geo-optimisation": {
    description:
      "Kynato builds the citation authority, prompt gap strategy, E-E-A-T amplification, and offsite brand signals your brand needs to be consistently cited by ChatGPT, Perplexity, Gemini, and Claude.",
    what: [
      "Citation authority building across AI-indexed source domains",
      "Buyer prompt gap research and content brief production",
      "E-E-A-T amplification: author credentials and original data",
      "Digital PR for AI-cited publisher placement",
      "Wikipedia and Wikidata brand entity management",
      "AI hallucination detection and correction",
    ],
  },

  // L3: GEO Optimisation children
  "/services/search-ai-visibility/ai-visibility/geo-optimisation/citation-authority": {
    description:
      "Kynato identifies the source domains that most influence AI citations in your category, then builds expert commentary and data seeding programmes to establish authoritative brand presence on those platforms.",
    what: [
      "Source domain identification per AI engine",
      "Expert commentary and data seeding on high-citation domains",
    ],
  },
  "/services/search-ai-visibility/ai-visibility/geo-optimisation/prompt-gap-analysis": {
    description:
      "Kynato researches the buyer prompts your ICP types into ChatGPT, Perplexity, and Gemini — mapping content gaps where your brand should appear and producing content briefs for the pages required.",
    what: [
      "Buyer prompt research across ChatGPT, Perplexity, and Gemini",
      "Content brief production for unowned high-value prompts",
    ],
  },
  "/services/search-ai-visibility/ai-visibility/geo-optimisation/eeat-ai": {
    description:
      "Kynato builds E-E-A-T signals specifically for AI engine consumption — documenting author credentials and research methodologies, and publishing original data that AI models can attribute directly to your brand.",
    what: [
      "Author credentials and methodology documentation",
      "Original data publication strategy for AI citation",
    ],
  },
  "/services/search-ai-visibility/ai-visibility/geo-optimisation/digital-pr": {
    description:
      "Kynato builds offsite AI citation signals through placements in AI-indexed publications, strategic Reddit and Quora participation, review platform presence on G2 and Capterra, and best-of listicle acquisition.",
    what: [
      "AI-cited publisher and media placement strategy",
      "Reddit, Quora, and forum participation for AI signals",
      "Review platform presence on G2, Capterra, and Trustpilot",
      "Listicle and best-of placement acquisition",
    ],
  },
  "/services/search-ai-visibility/ai-visibility/geo-optimisation/brand-co-occurrence": {
    description:
      "Kynato maps category keyword and brand co-occurrence patterns across AI-indexed content and runs third-party content seeding programmes to strengthen your brand's semantic association with your target category in LLM training data.",
    what: [
      "Category keyword and brand co-occurrence mapping",
      "Third-party content seeding for co-occurrence signals",
    ],
  },
  "/services/search-ai-visibility/ai-visibility/geo-optimisation/wikipedia-wikidata": {
    description:
      "Kynato manages your brand's Wikipedia and Wikidata presence — handling article creation, notability building, entity record maintenance, and sameAs linking to strengthen your Knowledge Graph footprint across AI training sources.",
    what: [
      "Wikipedia article creation and notability building",
      "Wikidata entry creation, maintenance, and sameAs linking",
    ],
  },
  "/services/search-ai-visibility/ai-visibility/geo-optimisation/hallucination-correction": {
    description:
      "Kynato audits AI-generated descriptions of your brand across ChatGPT, Perplexity, Gemini, and Claude — identifying inaccuracies, correcting them through structured data and source remediation, and monitoring for recurrence monthly.",
    what: [
      "Cross-LLM brand fact audit",
      "Structured data and source correction to override hallucinations",
      "Ongoing hallucination monitoring and alert system",
    ],
  },

  // L2: AEO
  "/services/search-ai-visibility/ai-visibility/aeo": {
    description:
      "Kynato structures your content architecture to capture featured snippets, People Also Ask positions, AI Overview citations, and Knowledge Panels — using FAQ schema, answer-first content design, and multimodal optimisation.",
    what: [
      "FAQ schema implementation and rich snippet capture",
      "Answer-first content architecture",
      "Conversational and long-tail keyword optimisation",
      "Speakable schema for voice search",
      "AI Overview presence monitoring",
      "Multimodal content optimisation for AI parsability",
    ],
  },

  // L3: AEO children
  "/services/search-ai-visibility/ai-visibility/aeo/faq-schema": {
    description:
      "Kynato researches question-format keywords, authors JSON-LD FAQ schema, and monitors rich results performance in Search Console — systematically capturing FAQ snippet positions for high-value queries in your category.",
    what: [
      "Question research and JSON-LD authoring",
      "Rich results validation and Search Console monitoring",
    ],
  },
  "/services/search-ai-visibility/ai-visibility/aeo/answer-first-content": {
    description:
      "Kynato restructures your content to lead with compressed, snippet-eligible answers — compressing core answers to 40-60 words and layering supporting depth content beneath to satisfy both snippet capture and AI citation requirements.",
    what: [
      "Core answer compression to 40-60 words",
      "Depth layering and supporting content structure",
    ],
  },
  "/services/search-ai-visibility/ai-visibility/aeo/conversational-keywords": {
    description:
      "Kynato optimises for the conversational and long-tail queries appearing in People Also Ask boxes and voice search — including speakable schema deployment for audio and voice content parsability.",
    what: [
      "PAA and autocomplete harvesting",
      "Speakable schema deployment",
    ],
  },
  "/services/search-ai-visibility/ai-visibility/aeo/ai-overview-monitoring": {
    description:
      "Kynato monitors your presence in Google AI Overviews at keyword level — tracking trigger patterns, citation source identity, and competitor citation frequency to identify and close AI Overview gaps systematically.",
    what: [
      "Keyword-level AI Overview trigger monitoring",
      "Citation source identification and competitive frequency tracking",
    ],
  },
  "/services/search-ai-visibility/ai-visibility/aeo/multimodal-content": {
    description:
      "Kynato optimises your video transcripts, podcast content, and image schema for AI parsability — ensuring all multimodal content is indexable, attributable, and citable by AI engines searching across text, audio, and visual content.",
    what: [
      "Video transcript creation and indexable markup",
      "Podcast transcript optimisation and structured publishing",
      "Image alt text, caption, and visual schema for AI parsability",
    ],
  },
  "/services/search-ai-visibility/ai-visibility/aeo/solution-pages": {
    description:
      "Kynato creates and optimises industry-specific, role-specific, integration, and FAQ hub pages — designed to match AI-generated recommendation patterns and win citations when buyers ask AI systems for category-specific solutions.",
    what: [
      "Industry-specific and role-specific landing page creation",
      "Integration and partner solution page optimisation",
      "FAQ hub creation covering pricing, features, and comparisons",
    ],
  },

  // L2: Brand Authority
  "/services/search-ai-visibility/ai-visibility/brand-authority": {
    description:
      "Kynato audits, builds, and monitors your brand's offsite presence across AI-cited platforms — tracking citation frequency, sentiment, competitor share of voice, profile consistency, and content freshness.",
    what: [
      "Brand mention audit across Reddit, Quora, G2, and Wikipedia",
      "Competitor share-of-mention benchmarking",
      "LinkedIn, Crunchbase, and directory profile enrichment",
      "Content freshness and recency signal management",
      "Monthly AI visibility index and cross-platform reporting",
    ],
  },

  // L3: Brand Authority children
  "/services/search-ai-visibility/ai-visibility/brand-authority/mention-audit": {
    description:
      "Kynato maps your brand's current presence across every AI-cited platform — Reddit, Quora, G2, Wikipedia, and LinkedIn — and benchmarks citation frequency and sentiment against your key competitors.",
    what: [
      "Platform-by-platform brand presence mapping",
      "Competitor share-of-mention benchmarking",
    ],
  },
  "/services/search-ai-visibility/ai-visibility/brand-authority/third-party-profiles": {
    description:
      "Kynato enriches your LinkedIn Company Page, Crunchbase profile, and key directory listings with complete, AI-readable brand information and audits NAP and brand fact consistency across all platforms where AI models look.",
    what: [
      "LinkedIn, Crunchbase, and directory profile enrichment",
      "NAP and brand fact consistency audit across all platforms",
    ],
  },
  "/services/search-ai-visibility/ai-visibility/brand-authority/content-freshness": {
    description:
      "Kynato manages your content freshness signals for AI engines — scheduling evergreen content updates with temporal markers and maintaining a publishing cadence on AI-indexed platforms like LinkedIn, Reddit, and YouTube.",
    what: [
      "Evergreen content update schedule and temporal marker implementation",
      "High-velocity publishing on AI-indexed platforms",
    ],
  },
  "/services/search-ai-visibility/ai-visibility/brand-authority/ai-visibility-index": {
    description:
      "Kynato delivers a monthly AI visibility index — tracking cross-platform mention frequency, sentiment classification, and accuracy scoring, with SEO-to-GEO attribution for every activity in the programme.",
    what: [
      "Cross-platform AI mention, sentiment, and accuracy scoring",
      "Monthly AI visibility report with SEO-to-GEO attribution",
    ],
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // CAP 2 — DEMAND GENERATION
  // ═══════════════════════════════════════════════════════════════════════════

  "/services/demand-generation/": {
    description:
      "Kynato builds demand generation systems that fill your pipeline from both directions — inbound architectures that capture intent, outbound programmes that reach the right decision-makers, and AI-powered nurturing that converts every lead into a qualified opportunity.",
    what: [
      "Landing page and conversion rate optimisation",
      "Website chatbots and lead capture automation",
      "LinkedIn outreach and cold email sequencing",
      "Google Ads and Meta Ads campaign management",
      "AI lead scoring and automated routing",
      "Qualification bots and nurturing sequences",
    ],
  },

  // L1: Inbound Lead Architecture
  "/services/demand-generation/inbound-lead-architecture": {
    description:
      "Kynato builds inbound lead systems that capture, qualify, and route high-intent buyers — from landing page CRO and website chatbots to interactive lead magnets and WhatsApp API integration.",
    what: [
      "Single-action landing page design and CTA optimisation",
      "Mobile conversion optimisation",
      "Qualification chatbot with CRM handoff",
      "Interactive lead magnets: ROI calculators and compliance tools",
      "Webinar and event lead funnels",
      "WhatsApp Business API lead routing",
    ],
  },

  // L3: Inbound children
  "/services/demand-generation/inbound-lead-architecture/landing-page-cro/single-action-pages": {
    description:
      "Kynato designs high-converting single-action landing pages with a clear CTA hierarchy, minimal distraction, and mobile-first layouts optimised for the conversion patterns of Indian B2B buyers.",
  },
  "/services/demand-generation/inbound-lead-architecture/landing-page-cro/mobile-cro": {
    description:
      "Kynato optimises landing pages specifically for mobile conversion in Indian markets — addressing page speed, thumb-friendly CTA placement, WhatsApp-first contact flows, and UX patterns that convert on smaller screens.",
  },
  "/services/demand-generation/inbound-lead-architecture/website-chatbot/qualification-crm": {
    description:
      "Kynato configures chatbot qualification logic — defining the question sequence, disqualification rules, and CRM handoff — so that only sales-ready leads reach your team, with full conversation context logged automatically.",
  },
  "/services/demand-generation/inbound-lead-architecture/lead-magnets/roi-calculator": {
    description:
      "Kynato builds interactive ROI calculator and compliance checklist tools that capture high-intent leads by delivering immediate, personalised value — while collecting the firmographic data that improves qualification accuracy.",
  },
  "/services/demand-generation/inbound-lead-architecture/lead-magnets/webinar-funnels": {
    description:
      "Kynato sets up webinar and virtual event lead funnels — registration pages, confirmation sequences, reminder automations, and post-event follow-up flows — turning every event into a structured lead generation pipeline.",
  },
  "/services/demand-generation/inbound-lead-architecture/whatsapp-lead-integration/ad-routing": {
    description:
      "Kynato routes Facebook and Google ad leads directly to WhatsApp — eliminating the drop-off that happens when users are asked to fill forms, and capturing intent at the moment it is highest.",
  },
  "/services/demand-generation/inbound-lead-architecture/whatsapp-lead-integration/crm-sync": {
    description:
      "Kynato connects WhatsApp lead flows to your CRM — syncing contact records, conversation history, and lead status in real time, with intelligent assignment rules routing leads to the right team member instantly.",
  },

  // L1: Outbound & Paid Acquisition
  "/services/demand-generation/outbound-paid-acquisition": {
    description:
      "Kynato runs outbound and paid acquisition programmes targeting decision-makers at the right moment — LinkedIn automation, AI-personalised cold email, and intent-based paid campaigns on Google and Meta.",
    what: [
      "ICP targeting and LinkedIn connection request sequences",
      "Reply detection, CRM routing, and LinkedIn content scheduling",
      "Cold email domain warm-up and deliverability configuration",
      "AI-personalised cold email copy at scale",
      "Google Ads and Meta Ads with lead quality optimisation",
      "Intent-based retargeting audiences",
    ],
  },

  // L3: Outbound children
  "/services/demand-generation/outbound-paid-acquisition/linkedin-outreach/icp-sequences": {
    description:
      "Kynato builds ICP-targeted LinkedIn outreach sequences — defining targeting criteria, crafting connection request copy, and designing multi-touch follow-up flows that generate replies from the decision-makers you need to reach.",
  },
  "/services/demand-generation/outbound-paid-acquisition/linkedin-outreach/reply-crm-routing": {
    description:
      "Kynato sets up reply detection and automatic CRM routing for LinkedIn outreach — so every positive response is logged, categorised, and assigned without manual monitoring of the campaign inbox.",
  },
  "/services/demand-generation/outbound-paid-acquisition/linkedin-outreach/linkedin-content": {
    description:
      "Kynato builds and operates LinkedIn content scheduling and posting automation — running content calendar setup, approval workflows, and scheduled publishing to maintain consistent brand presence alongside the outreach campaign.",
    what: [
      "Content calendar setup and approval workflow",
    ],
  },
  "/services/demand-generation/outbound-paid-acquisition/linkedin-outreach/instagram-dm": {
    description:
      "Kynato sets up Instagram DM automation for lead generation — configuring comment triggers, DM flow sequences, and CRM logging so every social interaction is captured and followed up systematically.",
    what: [
      "Trigger setup, DM flow design, and lead CRM logging",
    ],
  },
  "/services/demand-generation/outbound-paid-acquisition/cold-email/domain-warmup": {
    description:
      "Kynato configures your cold email infrastructure from scratch — domain warm-up schedules, SPF, DKIM, and DMARC records — giving your outreach the technical foundation for high inbox placement rates.",
  },
  "/services/demand-generation/outbound-paid-acquisition/cold-email/ai-personalisation": {
    description:
      "Kynato writes AI-personalised cold email copy at scale — generating sequences that reference each prospect's specific role, company, and context, dramatically improving reply rates over generic template-based approaches.",
  },
  "/services/demand-generation/outbound-paid-acquisition/cold-email/spam-blacklist": {
    description:
      "Kynato audits your sending domain's spam score and blacklist status — identifying deliverability problems before they compound and implementing the fixes required to maintain inbox placement across sending volumes.",
  },
  "/services/demand-generation/outbound-paid-acquisition/paid-ads/lead-quality": {
    description:
      "Kynato configures Google Ads and Meta Ads campaigns with lead quality as the primary optimisation target — setting up accurate conversion tracking, audience targeting filters, and bid strategies that reduce cost per qualified lead.",
  },
  "/services/demand-generation/outbound-paid-acquisition/paid-ads/retargeting": {
    description:
      "Kynato builds intent-based retargeting audiences from your website visitors, video viewers, and CRM segments — running campaigns that re-engage high-fit prospects at the moment they are most likely to convert.",
  },

  // L1: AI Lead Nurturing
  "/services/demand-generation/ai-lead-nurturing": {
    description:
      "Most leads are lost between capture and close — not because they aren't interested, but because follow-up breaks. Kynato's AI-powered nurturing systems score every lead, qualify them automatically, and trigger the right sequence at every funnel stage.",
    what: [
      "AI lead scoring model design and CRM integration",
      "Threshold-based routing rules to sales",
      "Qualification bot with conversation flow and disqualification logic",
      "Calendar integration and CRM handoff",
      "Segment-based nurturing sequences with behavioural triggers",
      "Cold lead reactivation system",
    ],
  },

  // L3: AI Lead Nurturing children
  "/services/demand-generation/ai-lead-nurturing/lead-scoring/scoring-model": {
    description:
      "Kynato designs the signal-weighted scoring model for your lead funnel — defining which behaviours, firmographic attributes, and engagement signals indicate high sales-readiness, and integrating the model into your CRM.",
  },
  "/services/demand-generation/ai-lead-nurturing/lead-scoring/routing-rules": {
    description:
      "Kynato configures threshold-based routing rules that automatically escalate high-scoring leads to sales, route medium-score leads into nurturing sequences, and deprioritise leads below the fit threshold.",
  },
  "/services/demand-generation/ai-lead-nurturing/qualification-bot/flow-design": {
    description:
      "Kynato designs the qualification bot conversation flow — structuring the question sequence, disqualification logic, and escalation triggers so the bot efficiently separates sales-ready leads from poor fits.",
  },
  "/services/demand-generation/ai-lead-nurturing/qualification-bot/calendar-crm": {
    description:
      "Kynato connects the qualification bot to your calendar and CRM — enabling the bot to book sales meetings for qualified leads directly and log all interaction data without manual intervention.",
  },
  "/services/demand-generation/ai-lead-nurturing/nurturing-sequences/segment-triggers": {
    description:
      "Kynato builds segment-specific nurturing sequences with behavioural triggers — designing email and WhatsApp flows that respond to specific lead actions (page visits, email opens, link clicks) with relevant, timely content.",
  },
  "/services/demand-generation/ai-lead-nurturing/nurturing-sequences/cold-lead-reactivation": {
    description:
      "Kynato builds cold lead reactivation systems that re-engage contacts who went quiet months ago — using new content hooks, changed context messaging, and multi-channel sequences designed specifically for dormant pipeline.",
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // CAP 3 — KNOWLEDGE & APPLIED AI
  // ═══════════════════════════════════════════════════════════════════════════

  "/services/knowledge-applied-ai/": {
    description:
      "Kynato builds AI systems that give your organisation intelligent access to its own knowledge — custom RAG systems, AI assistants for teams and customers, and document intelligence pipelines that turn unstructured data into queryable intelligence.",
    what: [
      "Custom RAG system architecture and deployment",
      "Multi-source knowledge base integration",
      "Internal AI assistants for WhatsApp and web",
      "Customer-facing AI assistants",
      "Voice and WhatsApp AI bots with vernacular support",
      "Document intelligence and regulatory search pipelines",
    ],
  },

  // L1: RAG Systems
  "/services/knowledge-applied-ai/rag-systems": {
    description:
      "Kynato builds custom RAG systems that turn your documents, compliance circulars, databases, and internal knowledge into an intelligent AI layer — one that gives source-backed, accurate answers in seconds.",
    what: [
      "Knowledge base ingestion, document parsing, and chunking",
      "Vector database indexing",
      "Hybrid retrieval combining semantic and keyword search",
      "Re-ranking and retrieval accuracy benchmarking",
      "Domain-tuned embedding models for legal and compliance",
      "Source attribution and hallucination benchmarking",
      "Multi-source RAG: CRM, email, document storage, accounting",
    ],
  },

  // L3: RAG Systems children
  "/services/knowledge-applied-ai/rag-systems/rag-architecture/knowledge-base-ingestion": {
    description:
      "Kynato builds the document ingestion pipeline for your RAG system — parsing PDFs, Word files, Excel sheets, and emails, applying the right chunking strategy for retrieval accuracy, and indexing everything into your vector database.",
    what: [
      "Document parsing and chunking strategy",
      "Vector database indexing",
    ],
  },
  "/services/knowledge-applied-ai/rag-systems/rag-architecture/hybrid-retrieval": {
    description:
      "Kynato configures the hybrid retrieval layer of your RAG system — combining semantic vector search with BM25 keyword retrieval and adding a re-ranking layer to maximise answer accuracy across all query types.",
    what: [
      "Re-ranking layer configuration",
      "Retrieval accuracy benchmarking",
    ],
  },
  "/services/knowledge-applied-ai/rag-systems/rag-architecture/domain-embeddings": {
    description:
      "Kynato fine-tunes embedding models for your domain — adapting them to legal, accounting, or compliance-specific language so that retrieval accuracy remains high even for domain-specific terminology and regulatory language.",
    what: [
      "Legal, accounting, and compliance-specific embedding fine-tuning",
    ],
  },
  "/services/knowledge-applied-ai/rag-systems/rag-architecture/hallucination-benchmarking": {
    description:
      "Kynato implements source attribution and confidence scoring in your RAG system — creating a citation chain for every answer and scoring confidence to flag low-certainty responses before they reach end users.",
    what: [
      "Citation chain implementation",
      "Confidence scoring per AI answer",
    ],
  },
  "/services/knowledge-applied-ai/rag-systems/multi-source-rag/crm-email-connector": {
    description:
      "Kynato builds connectors that pull CRM records, email archives, and document storage into your RAG system — giving the AI access to the full picture of your organisation's communications and relationship data.",
  },
  "/services/knowledge-applied-ai/rag-systems/multi-source-rag/accounting-connector": {
    description:
      "Kynato integrates your accounting software — Tally, Zoho Books, or others — into your RAG system, enabling AI-powered queries over financial records, vendor data, and transaction history.",
  },

  // L1: AI Assistant
  "/services/knowledge-applied-ai/ai-assistant": {
    description:
      "Kynato deploys AI assistants built on your knowledge base — integrated into WhatsApp, web chat, or internal tools, configured with your brand persona and access controls, and connected to your RAG backend for accurate responses.",
    what: [
      "Internal AI assistant deployment on WhatsApp and web",
      "Access control setup and team onboarding",
      "Customer-facing assistant with escalation logic",
      "Tone and persona configuration",
      "Voice and WhatsApp AI bots with vernacular language support",
    ],
  },

  // L3: AI Assistant children
  "/services/knowledge-applied-ai/ai-assistant/internal-assistant/access-control": {
    description:
      "Kynato configures role-based access controls for your internal AI assistant — defining which staff levels can access which knowledge scopes and documenting the onboarding process for new team members.",
  },
  "/services/knowledge-applied-ai/ai-assistant/customer-facing-assistant/query-scope": {
    description:
      "Kynato defines the tier-1 query scope for your customer-facing AI assistant — specifying which question categories the bot handles autonomously, which trigger a human handoff, and what context is passed at escalation.",
  },
  "/services/knowledge-applied-ai/ai-assistant/customer-facing-assistant/persona": {
    description:
      "Kynato configures the tone, personality, and brand voice of your customer-facing assistant — and manages the full live deployment process including testing, integration, and go-live monitoring.",
  },
  "/services/knowledge-applied-ai/ai-assistant/voice-whatsapp-bot/vernacular": {
    description:
      "Kynato configures your voice or WhatsApp AI bot for Hindi, Hinglish, and regional Indian languages — handling mixed-language inputs, code-switching patterns, and vernacular-specific response calibration.",
  },
  "/services/knowledge-applied-ai/ai-assistant/voice-whatsapp-bot/rag-channel-setup": {
    description:
      "Kynato connects your RAG knowledge backend to your WhatsApp or voice bot channel — configuring the retrieval pipeline, response generation, and channel-specific formatting for accurate, source-grounded bot responses.",
  },

  // L1: Document Intelligence
  "/services/knowledge-applied-ai/document-intelligence": {
    description:
      "Kynato's document intelligence pipelines extract, classify, and structure data from PDFs, scanned documents, contracts, and compliance circulars — transforming unstructured document volumes into searchable, queryable intelligence.",
    what: [
      "Field extraction template design and structured output routing",
      "Anomaly detection and summary generation",
      "GST, RBI, ICAI, and ITR circular search and alert system",
      "Legal precedent and case law semantic search",
      "Knowledge gap detection and monthly reporting",
    ],
  },

  // L3: Document Intelligence children
  "/services/knowledge-applied-ai/document-intelligence/document-pipeline/field-extraction": {
    description:
      "Kynato designs field extraction templates for your specific document types — defining the structured output format and routing rules so extracted data flows automatically into your CRM, accounting system, or document storage.",
  },
  "/services/knowledge-applied-ai/document-intelligence/document-pipeline/anomaly-detection": {
    description:
      "Kynato adds anomaly detection to your document processing pipeline — flagging unusual values, missing mandatory fields, and document-level inconsistencies that require human review before processing continues.",
  },
  "/services/knowledge-applied-ai/document-intelligence/regulatory-search/circular-alerts": {
    description:
      "Kynato deploys automated monitoring for new GST, RBI, and ICAI circulars — detecting new notifications, generating plain-language summaries, routing them to the relevant team members, and ingesting them into your RAG knowledge base.",
  },
  "/services/knowledge-applied-ai/document-intelligence/legal-search/judgment-corpus": {
    description:
      "Kynato ingests your target judgment corpus and deploys semantic search over it — enabling legal teams to search case law by concept, argument type, or legal principle rather than only by citation.",
  },
  "/services/knowledge-applied-ai/document-intelligence/knowledge-gap-detection/gap-reporting": {
    description:
      "Kynato's knowledge gap detection system logs every unanswered or low-confidence query from your AI assistant — delivering monthly gap reports that prioritise knowledge base expansion based on actual usage patterns.",
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // CAP 4 — AGENTIC AUTOMATION
  // ═══════════════════════════════════════════════════════════════════════════

  "/services/agentic-automation/": {
    description:
      "Kynato designs and deploys autonomous AI systems — from single-agent deployments to multi-agent pipelines — and automates your core business processes and conversational channels at scale.",
    what: [
      "Agentic workflow design and deployment",
      "Core business process automation",
      "WhatsApp, email, and SMS automation",
      "LinkedIn and social outreach automation",
      "AI content production and distribution",
      "Voice AI and intelligent IVR replacement",
    ],
  },

  // L1: Agentic Workflows
  "/services/agentic-automation/agentic-workflows": {
    description:
      "Kynato designs and deploys agentic AI systems — single and multi-agent pipelines that reason, use tools, handle edge cases, and complete complex multi-step work without constant human oversight.",
    what: [
      "Manual process audit and automation feasibility scoring",
      "Quick-win automation roadmap",
      "Single-agent process decomposition and build",
      "Human-in-the-loop escalation design",
      "Multi-agent pipeline architecture",
      "Agent memory and context persistence",
      "Agent monitoring, logging, and improvement cycles",
    ],
  },

  // L3: Agentic Workflows children
  "/services/agentic-automation/agentic-workflows/process-audit/manual-audit": {
    description:
      "Kynato conducts a structured manual process audit — mapping current workflows, measuring time and error cost, and scoring each process for automation feasibility — producing the evidence base for the automation roadmap.",
    what: [
      "Task logging and error rate estimation",
      "Feasibility scoring per process",
    ],
  },
  "/services/agentic-automation/agentic-workflows/process-audit/quick-win-roadmap": {
    description:
      "Kynato produces a quick-win automation roadmap ranked by impact-vs-effort — identifying the automations that deliver the fastest measurable return and sequencing the build programme accordingly.",
    what: [
      "Top automations ranked by impact vs effort",
    ],
  },
  "/services/agentic-automation/agentic-workflows/process-audit/integration-mapping": {
    description:
      "Kynato maps your tool stack and identifies integration points — auditing API availability, data flow between systems, and the technical feasibility of connecting each tool in the automation scope.",
    what: [
      "Tool stack audit and integration point identification",
    ],
  },
  "/services/agentic-automation/agentic-workflows/single-agent/process-decomposition": {
    description:
      "Kynato decomposes your target process into discrete agent tasks — mapping decision points, external API dependencies, and edge cases through a structured workshop before any code is written.",
    what: [
      "Step-by-step agent task mapping workshop",
      "Decision point and API dependency mapping",
    ],
  },
  "/services/agentic-automation/agentic-workflows/single-agent/build-and-deploy": {
    description:
      "Kynato builds and deploys the single agent — integrating the required tools, testing against edge cases, and managing the go-live process with monitoring in place from day one.",
  },
  "/services/agentic-automation/agentic-workflows/single-agent/human-in-loop": {
    description:
      "Kynato designs the human-in-the-loop escalation layer for your agent — defining trigger logic, building the human review interface, and configuring the handoff protocol for edge cases outside the agent's confidence threshold.",
    what: [
      "Escalation trigger logic and human review interface",
    ],
  },
  "/services/agentic-automation/agentic-workflows/multi-agent-systems/pipeline-architecture": {
    description:
      "Kynato architects multi-agent pipelines — designing inter-agent communication protocols, orchestration layers, error handling, and retry logic so that complex multi-step operations run reliably at scale.",
    what: [
      "Inter-agent communication protocol and orchestration layer",
      "Error handling and retry logic",
    ],
  },
  "/services/agentic-automation/agentic-workflows/multi-agent-systems/agent-memory": {
    description:
      "Kynato implements agent memory and context persistence — configuring short-term session memory and long-term interaction history so agents can maintain context across multiple interactions with the same user or process.",
    what: [
      "Short-term session memory and long-term interaction history",
    ],
  },
  "/services/agentic-automation/agentic-workflows/multi-agent-systems/tool-api-integration": {
    description:
      "Kynato integrates external tools into your multi-agent system — connecting CRM, calendar, WhatsApp, document storage, and accounting software so agents can read and write across your full tool stack.",
    what: [
      "CRM, calendar, and WhatsApp messaging integration",
      "Document storage and accounting software integration",
    ],
  },
  "/services/agentic-automation/agentic-workflows/agent-monitoring/performance-logging": {
    description:
      "Kynato builds step-level logging infrastructure for your agent — recording every decision, tool call, and output in an auditable archive that supports compliance review, debugging, and performance analysis.",
    what: [
      "Step-level logging infrastructure and output archive",
    ],
  },
  "/services/agentic-automation/agentic-workflows/agent-monitoring/failure-detection": {
    description:
      "Kynato implements failure detection and recovery logic — handling network timeouts, API rate limits, and unexpected inputs gracefully, and alerting human operators when the agent encounters an unrecoverable failure.",
    what: [
      "Network timeout, rate limit, and unexpected input handling",
      "Human operator alerting on unrecoverable failure",
    ],
  },
  "/services/agentic-automation/agentic-workflows/agent-monitoring/improvement-cycles": {
    description:
      "Kynato runs monthly agent improvement cycles — analysing accuracy drift, escalation rate trends, and output quality, then refining prompts, retrieval configurations, and decision logic to improve performance continuously.",
    what: [
      "Accuracy drift detection and prompt refinement",
    ],
  },

  // L1: Core Automation
  "/services/agentic-automation/core-automation": {
    description:
      "Kynato automates the operational backbone of Indian businesses — document collection, compliance reminders, CRM updates, invoice generation, HR onboarding, reporting pipelines, and RPA for structured repetitive tasks.",
    what: [
      "WhatsApp document collection bot",
      "Multi-channel compliance reminder system",
      "CRM auto-update from calls, emails, and WhatsApp",
      "Invoice generation and payment reconciliation",
      "HR onboarding automation",
      "Automated reporting and reconciliation",
      "RPA for data entry and portal submissions",
    ],
  },

  // L3: Core Automation children
  "/services/agentic-automation/core-automation/document-collection/whatsapp-flow": {
    description:
      "Kynato builds the WhatsApp bot flow for document collection — designing the conversation sequence, document request logic, format validation, and rejection-and-retry flows that make client document collection fully automated.",
  },
  "/services/agentic-automation/core-automation/document-collection/filing-crm": {
    description:
      "Kynato automates the filing and CRM update pipeline — naming submitted documents according to your conventions, routing them to the correct folders, and updating CRM status automatically when collection is complete.",
  },
  "/services/agentic-automation/core-automation/compliance-reminders/multi-channel-alerts": {
    description:
      "Kynato configures multi-channel compliance alert systems — sending pre-deadline reminders via WhatsApp and email at configurable intervals (30 days, 7 days, 1 day) for GST, ITR, TDS, and audit milestones.",
  },
  "/services/agentic-automation/core-automation/compliance-reminders/escalation": {
    description:
      "Kynato adds escalation logic to your compliance reminder system — detecting non-acknowledgement and automatically escalating to senior contacts or flagging for manual follow-up when the standard reminder sequence fails.",
  },
  "/services/agentic-automation/core-automation/crm-auto-update/logging": {
    description:
      "Kynato builds the pipeline that automatically logs calls, emails, and WhatsApp messages to CRM contact records — giving your sales team a complete interaction history without any manual data entry.",
  },
  "/services/agentic-automation/core-automation/crm-auto-update/stage-triggers": {
    description:
      "Kynato configures stage trigger rules in your CRM — automating pipeline stage updates based on conversation events, time triggers, and deal signals, while adding duplicate detection to keep your database clean.",
  },
  "/services/agentic-automation/core-automation/invoice-billing/milestone-invoicing": {
    description:
      "Kynato automates milestone-triggered invoice generation — connecting project management or CRM milestone events to your invoicing system so invoices are generated and delivered automatically at the right moment.",
  },
  "/services/agentic-automation/core-automation/invoice-billing/payment-reconciliation": {
    description:
      "Kynato sets up escalating payment reminder sequences and automated reconciliation — matching incoming payments to outstanding invoices and flagging discrepancies without manual accounts receivable management.",
  },
  "/services/agentic-automation/core-automation/hr-onboarding/offer-doc-collection": {
    description:
      "Kynato automates offer letter generation and new hire document collection — creating personalised offer letters on approval, sending them automatically, and following up for signed acceptance and required documents via WhatsApp.",
  },
  "/services/agentic-automation/core-automation/hr-onboarding/training-milestones": {
    description:
      "Kynato automates training delivery scheduling and milestone check-in sequences — sending training materials at the right time, tracking completion, and following up on outstanding modules without manual HR coordination.",
  },
  "/services/agentic-automation/core-automation/reporting-reconciliation/data-pull-anomaly": {
    description:
      "Kynato builds automated data pull pipelines that consolidate data from multiple sources and run anomaly detection — flagging outliers and inconsistencies in your business data before they appear in the final report.",
  },
  "/services/agentic-automation/core-automation/reporting-reconciliation/report-delivery": {
    description:
      "Kynato configures formatted summary report generation and scheduled delivery — producing consistent, branded business reports automatically and delivering them to the right inboxes on schedule.",
  },
  "/services/agentic-automation/core-automation/rpa/rpa-bot-build": {
    description:
      "Kynato builds RPA bots for rule-based data entry tasks, web portal submissions, and structured repetitive processes — automating the operational work that can't yet be handled by LLM-based agents.",
  },

  // L1: Conversational Automation
  "/services/agentic-automation/conversational-automation": {
    description:
      "Kynato builds and operates the full conversational automation stack — WhatsApp flows, email sequences, SMS triggers, LinkedIn outreach, AI phone systems, and content distribution pipelines across every channel.",
    what: [
      "WhatsApp Business API provisioning and campaign management",
      "Cold email and drip campaign setup",
      "SMS transactional automation and omnichannel inbox",
      "LinkedIn connection sequences and post generation",
      "AI blog and content production automation",
      "AI phone answering and IVR replacement",
      "Voice AI with vernacular language support",
    ],
  },

  // L3: Conversational Automation — WhatsApp children
  "/services/agentic-automation/conversational-automation/whatsapp-automation/api-provisioning": {
    description:
      "Kynato handles the full WhatsApp Business API provisioning process — BSP selection, phone number verification, and WhatsApp template approval — giving your business a production-ready WhatsApp API setup.",
    what: [
      "BSP selection, phone number verification, and template approval",
    ],
  },
  "/services/agentic-automation/conversational-automation/whatsapp-automation/crm-sync": {
    description:
      "Kynato connects WhatsApp and your CRM in both directions — syncing every inbound and outbound message to contact records and enriching CRM data from WhatsApp interaction patterns.",
    what: [
      "Contact record enrichment from WhatsApp interaction data",
    ],
  },
  "/services/agentic-automation/conversational-automation/whatsapp-automation/lead-qualification": {
    description:
      "Kynato builds the WhatsApp lead qualification flow — defining the question sequence, non-fit routing logic, and sales notification triggers so that only qualified leads reach your team.",
    what: [
      "Qualification logic, non-fit routing, and sales notification",
    ],
  },
  "/services/agentic-automation/conversational-automation/whatsapp-automation/drip-sequences": {
    description:
      "Kynato designs and deploys WhatsApp drip automation sequences — configuring trigger events, timing logic, and opt-out handling for nurturing flows that maintain engagement without crossing into spam.",
    what: [
      "Trigger event configuration and timing logic",
      "Opt-out handling and compliance",
    ],
  },
  "/services/agentic-automation/conversational-automation/whatsapp-automation/booking-payment": {
    description:
      "Kynato builds WhatsApp appointment booking and payment flows — integrating calendar confirmation and reschedule logic with Razorpay and PayU payment link generation for end-to-end WhatsApp commerce.",
    what: [
      "Calendar integration, confirmation, and reschedule flow",
      "Razorpay and PayU payment link generation and CRM update",
    ],
  },
  "/services/agentic-automation/conversational-automation/whatsapp-automation/broadcast-campaigns": {
    description:
      "Kynato manages WhatsApp broadcast campaigns — building CRM tag-based audience segmentation and tracking template performance to improve open rate, reply rate, and conversion across broadcast sends.",
    what: [
      "CRM tag-based audience segmentation and template performance tracking",
    ],
  },

  // L3: Email Automation children
  "/services/agentic-automation/conversational-automation/email-automation/cold-email-deliverability": {
    description:
      "Kynato sets up cold email infrastructure with a warm-up schedule, SPF/DKIM/DMARC configuration, spam score monitoring, and blacklist status auditing — ensuring high inbox placement rates from day one.",
    what: [
      "Sending domain setup and warm-up schedule",
      "Spam score check and blacklist status audit",
    ],
  },
  "/services/agentic-automation/conversational-automation/email-automation/drip-campaigns": {
    description:
      "Kynato builds and manages drip campaigns with behavioural trigger logic — setting up segment-specific sequences, A/B testing for subject lines and CTAs, and optimising send timing for your audience.",
    what: [
      "Trigger event definition and segment logic",
      "A/B testing for subject lines and CTAs",
    ],
  },
  "/services/agentic-automation/conversational-automation/email-automation/transactional-email": {
    description:
      "Kynato sets up transactional email triggers for invoices, order confirmations, appointment confirmations, and account events — with event trigger mapping and delivery confirmation logging.",
    what: [
      "Event trigger mapping and delivery confirmation logging",
    ],
  },
  "/services/agentic-automation/conversational-automation/email-automation/newsletter-broadcast": {
    description:
      "Kynato configures newsletter and broadcast email automation — building audience segmentation, scheduling setup, and broadcast performance tracking for regular email communications.",
    what: [
      "Audience segmentation, schedule setup, and broadcast performance tracking",
    ],
  },

  // L3: SMS & Omnichannel children
  "/services/agentic-automation/conversational-automation/sms-omnichannel/sms-automation": {
    description:
      "Kynato sets up SMS transactional automation with DLT registration, OTP flow configuration, appointment reminder sequences, and payment confirmation SMS — fully compliant with Indian telecom regulations.",
    what: [
      "DLT registration and OTP flow setup",
      "Appointment reminder and payment confirmation SMS",
    ],
  },
  "/services/agentic-automation/conversational-automation/sms-omnichannel/omnichannel-inbox": {
    description:
      "Kynato consolidates WhatsApp, email, SMS, and Instagram messages into a single inbox — linking contact records across channels and configuring team assignment rules for unified response management.",
    what: [
      "Contact record linkage across channels and team assignment rules",
    ],
  },
  "/services/agentic-automation/conversational-automation/sms-omnichannel/multi-channel-drip": {
    description:
      "Kynato builds multi-channel drip orchestration — designing channel-adaptive sequence logic that selects the right channel (WhatsApp, email, SMS) based on contact behaviour and cross-platform timing.",
    what: [
      "Channel-adaptive sequence logic and cross-platform timing",
    ],
  },

  // L3: Social Outreach children
  "/services/agentic-automation/conversational-automation/social-outreach/linkedin-sequences": {
    description:
      "Kynato automates LinkedIn connection request and message sequences — defining ICP targeting criteria, multi-touch follow-up flows, reply detection, and positive response CRM routing.",
    what: [
      "ICP targeting criteria and follow-up message sequence",
      "Reply detection and positive response CRM routing",
    ],
  },
  "/services/agentic-automation/conversational-automation/social-outreach/linkedin-posts": {
    description:
      "Kynato builds LinkedIn post generation and scheduling automation — calibrating brand voice, generating AI drafts, managing the human review step, and publishing on a consistent schedule.",
    what: [
      "Brand voice calibration and topic brief input",
      "AI draft generation, human review, and publishing",
    ],
  },
  "/services/agentic-automation/conversational-automation/social-outreach/content-repurposing": {
    description:
      "Kynato builds cross-platform content repurposing automation — adapting blog posts and long-form content into LinkedIn updates, WhatsApp messages, and email formats, with distribution workflow automation.",
    what: [
      "Blog-to-LinkedIn and LinkedIn-to-WhatsApp distribution workflow",
      "Source content adaptation to multiple formats",
    ],
  },

  // L3: Content Automation children
  "/services/agentic-automation/conversational-automation/content-automation/blog-content": {
    description:
      "Kynato builds AI-assisted blog and long-form content production systems — from keyword brief input through AI first-draft generation, editorial review, and CMS publishing workflow.",
    what: [
      "Keyword brief input and AI first-draft generation",
      "Editorial review and CMS publishing workflow",
    ],
  },
  "/services/agentic-automation/conversational-automation/content-automation/content-calendar": {
    description:
      "Kynato builds content calendar automation — generating monthly topic plans, producing content briefs automatically, and managing the approval workflow and publishing schedule coordination.",
    what: [
      "Monthly topic plan generation and brief auto-creation",
      "Approval workflow and publishing schedule coordination",
    ],
  },
  "/services/agentic-automation/conversational-automation/content-automation/multi-platform-publishing": {
    description:
      "Kynato automates multi-platform content publishing — triggering LinkedIn posts, WhatsApp messages, and email newsletter sends automatically when new content is published in your CMS.",
    what: [
      "CMS publish trigger to LinkedIn, WhatsApp, and email newsletter",
    ],
  },
  "/services/agentic-automation/conversational-automation/content-automation/content-repurposing-workflow": {
    description:
      "Kynato builds the content repurposing workflow — adapting source content to LinkedIn, WhatsApp, and email formats with format adaptation logic and a human approval checkpoint before distribution.",
    what: [
      "Source content adaptation to multiple formats",
      "Format adaptation logic and approval checkpoint",
    ],
  },
  "/services/agentic-automation/conversational-automation/content-automation/performance-monitoring": {
    description:
      "Kynato tracks content engagement per platform — monitoring performance metrics and generating pruning recommendations for underperforming content across your distribution channels.",
    what: [
      "Engagement tracking per platform and content pruning recommendations",
    ],
  },

  // L3: Voice AI children
  "/services/agentic-automation/conversational-automation/voice-ai/ai-ivr": {
    description:
      "Kynato deploys AI phone answering systems that replace traditional IVR — with intent classification, real-time call flow mapping, missed-call capture, and CRM logging with WhatsApp follow-up triggers.",
    what: [
      "Intent classification model setup and call flow mapping",
      "Missed-call AI answering agent",
      "Enquiry logging, CRM entry, and WhatsApp follow-up trigger",
    ],
  },
  "/services/agentic-automation/conversational-automation/voice-ai/call-routing": {
    description:
      "Kynato builds intelligent call routing and escalation logic — matching caller profiles to the right agent or department and generating call summaries at handoff so human agents have full context immediately.",
    what: [
      "Caller profile matching and human agent handoff with call summary",
    ],
  },
  "/services/agentic-automation/conversational-automation/voice-ai/vernacular-ai": {
    description:
      "Kynato configures vernacular and multilingual voice AI — handling Hindi, Hinglish, and regional language inputs with accent handling, code-switching support, and mixed-language response calibration.",
    what: [
      "Accent handling and mixed-language (Hinglish) support",
    ],
  },
  "/services/agentic-automation/conversational-automation/voice-ai/voice-document-collection": {
    description:
      "Kynato builds voice-based document collection flows — capturing structured data from callers via AI conversation, validating inputs against expected formats, and routing outputs to the correct system.",
    what: [
      "Data capture, validation, and output routing",
    ],
  },
  "/services/agentic-automation/conversational-automation/voice-ai/clinic-triage-bot": {
    description:
      "Kynato deploys AI voice triage bots for clinics and hospitals — handling patient intake, classifying urgency, booking appointments for routine cases, and escalating immediately for high-priority medical situations.",
    what: [
      "Patient intake flow and urgency classification",
      "Appointment booking and human escalation for high-priority cases",
    ],
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // CAP 5 — INTELLIGENCE & ANALYTICS
  // ═══════════════════════════════════════════════════════════════════════════

  "/services/intelligence-analytics/": {
    description:
      "Kynato builds the intelligence layer that ties every programme together — unified search analytics, AI brand visibility tracking, competitor intelligence, marketing ROI dashboards, automation performance reporting, and predictive analytics.",
    what: [
      "Unified search intelligence dashboard",
      "AI share of voice and multi-LLM citation tracking",
      "Competitive intelligence and regulatory change monitoring",
      "Marketing and revenue analytics with channel attribution",
      "Automation and bot performance dashboards",
      "Predictive analytics for churn and revenue forecasting",
    ],
  },

  // L1: Search Intelligence
  "/services/intelligence-analytics/search-intelligence": {
    description:
      "Kynato's search intelligence layer consolidates GSC, Bing, and AI engine data into a unified dashboard — delivering weekly briefings, anomaly alerts, cluster ranking tracking, content decay detection, and CWV monitoring.",
    what: [
      "GSC, Bing, and Yandex data consolidation",
      "AI engine impressions and traffic source tracking",
      "Smart analytical agent with weekly plain-English briefing",
      "Keyword ranking by topic cluster",
      "Content decay detection and refresh prioritisation",
      "Crawl budget and indexation health monitoring",
      "Core Web Vitals trend tracking",
      "Backlink profile monitoring",
    ],
  },

  // L3: Search Intelligence children
  "/services/intelligence-analytics/search-intelligence/multi-engine-dashboard/gsc-bing-yandex": {
    description:
      "Kynato connects Google Search Console, Bing Webmaster Tools, and Yandex APIs — normalising data across engines into a single unified view for consistent cross-engine performance analysis.",
    what: [
      "API connection setup and data normalisation",
    ],
  },
  "/services/intelligence-analytics/search-intelligence/multi-engine-dashboard/ai-engine-tracking": {
    description:
      "Kynato tags and tracks AI-referred sessions in your analytics — identifying traffic originating from ChatGPT, Perplexity, and other AI engines and reporting the percentage split in your search intelligence dashboard.",
    what: [
      "AI-referred session tagging and percentage split reporting",
    ],
  },
  "/services/intelligence-analytics/search-intelligence/multi-engine-dashboard/smart-agent": {
    description:
      "Kynato deploys a smart analytical agent over your search data — generating weekly plain-English intelligence briefings, flagging anomalies, and delivering them to your inbox automatically.",
    what: [
      "Weekly brief generation, anomaly detection, and inbox delivery",
    ],
  },
  "/services/intelligence-analytics/search-intelligence/seo-performance/cluster-ranking": {
    description:
      "Kynato tracks keyword ranking by topic cluster — identifying dominant, declining, and unclaimed clusters so your content investment is directed at the highest-impact keyword opportunities.",
    what: [
      "Dominant, declining, and unclaimed cluster identification",
    ],
  },
  "/services/intelligence-analytics/search-intelligence/seo-performance/content-decay": {
    description:
      "Kynato monitors your content library for traffic decay — setting decay thresholds, flagging declining pages automatically, and generating a prioritised refresh list before decay compounds into significant traffic loss.",
    what: [
      "Decay threshold definition and automated refresh priority list",
    ],
  },
  "/services/intelligence-analytics/search-intelligence/seo-performance/crawl-budget-monitoring": {
    description:
      "Kynato monitors crawl budget allocation and indexation health daily — using the GSC Index Coverage API to track content pickup speed and flag crawl budget waste or indexation failures.",
    what: [
      "Daily GSC Index Coverage API monitoring and content pickup speed",
    ],
  },
  "/services/intelligence-analytics/search-intelligence/seo-performance/cwv-trend-tracking": {
    description:
      "Kynato tracks Core Web Vitals trends over time — detecting regressions triggered by site changes or new third-party scripts and alerting the team before ranking impact occurs.",
    what: [
      "Regression detection after site changes and third-party script impact",
    ],
  },
  "/services/intelligence-analytics/search-intelligence/seo-performance/backlink-monitoring": {
    description:
      "Kynato monitors your backlink profile continuously — alerting on new and lost links, flagging toxic links as they appear, and assessing anchor text distribution and net authority impact.",
    what: [
      "New and lost link alerting and toxic link flagging",
      "Anchor text distribution and net authority assessment",
    ],
  },

  // L1: AI Visibility Tracking
  "/services/intelligence-analytics/ai-visibility-tracking": {
    description:
      "Kynato tracks your brand's presence in AI-generated answers across ChatGPT, Perplexity, Gemini, and Claude — monitoring citation frequency, sentiment, accuracy, competitor share of voice, and regulatory signal changes.",
    what: [
      "AI share of voice by keyword category",
      "Prompt performance tracking",
      "Sentiment analysis in AI responses",
      "Multi-LLM citation tracking",
      "Competitor keyword gap and ranking comparison",
      "Share of SERP monitoring",
      "Regulatory change tracking and alerts",
    ],
  },

  // L3: AI Visibility Tracking children
  "/services/intelligence-analytics/ai-visibility-tracking/ai-share-of-voice/sov-by-category": {
    description:
      "Kynato measures AI share of voice by keyword category — tracking how often your brand appears vs competitors across multiple LLMs and reporting citation frequency trends over time.",
    what: [
      "Brand vs competitor citation frequency measurement",
    ],
  },
  "/services/intelligence-analytics/ai-visibility-tracking/ai-share-of-voice/prompt-performance": {
    description:
      "Kynato defines a high-value prompt library for your category and monitors AI response performance against each prompt — tracking which prompts cite your brand, which cite competitors, and how responses change over time.",
    what: [
      "High-value prompt library definition and response monitoring",
    ],
  },
  "/services/intelligence-analytics/ai-visibility-tracking/ai-share-of-voice/ai-sentiment": {
    description:
      "Kynato classifies the sentiment of every AI-generated brand mention — flagging neutral, positive, and negative framings and alerting the team when brand sentiment in AI responses deteriorates.",
    what: [
      "Sentiment classification per brand mention and issue flagging",
    ],
  },
  "/services/intelligence-analytics/ai-visibility-tracking/ai-share-of-voice/multi-llm-tracking": {
    description:
      "Kynato tracks brand citation across ChatGPT, Perplexity, Gemini, and Claude — comparing performance engine-by-engine and identifying gaps specific to individual AI systems.",
    what: [
      "Cross-engine comparison and engine-specific gap analysis",
    ],
  },
  "/services/intelligence-analytics/ai-visibility-tracking/competitive-intelligence/keyword-gap-ranking": {
    description:
      "Kynato tracks competitor keyword rankings side-by-side with yours — delivering weekly automated reports that identify where competitors are gaining ground and where your content should target.",
    what: [
      "Side-by-side rank tracking and weekly automated report",
    ],
  },
  "/services/intelligence-analytics/ai-visibility-tracking/competitive-intelligence/competitor-ai-citations": {
    description:
      "Kynato tracks how often competitors are cited by AI engines in your category — identifying the source domains driving their citations and the displacement opportunities where your content can take their place.",
    what: [
      "Citation source analysis and displacement opportunity identification",
    ],
  },
  "/services/intelligence-analytics/ai-visibility-tracking/competitive-intelligence/share-of-serp": {
    description:
      "Kynato monitors your share of SERP features against competitors — tracking featured snippet ownership, PAA appearances, and SERP feature gains and losses on a continuous basis.",
    what: [
      "SERP feature gain and loss monitoring",
    ],
  },
  "/services/intelligence-analytics/ai-visibility-tracking/competitive-intelligence/pricing-launch": {
    description:
      "Kynato monitors competitor pricing changes, product launch announcements, and other market signals — delivering a consolidated weekly intelligence digest on competitor moves in your space.",
    what: [
      "Target competitor monitoring scope and weekly digest delivery",
    ],
  },
  "/services/intelligence-analytics/ai-visibility-tracking/competitive-intelligence/linkedin-news": {
    description:
      "Kynato monitors competitor LinkedIn activity and industry news — tracking employee movement, funding announcements, and partnership signals that indicate competitive shifts before they appear in the market.",
    what: [
      "Employee movement, funding, and partnership signal tracking",
    ],
  },
  "/services/intelligence-analytics/ai-visibility-tracking/competitive-intelligence/regulatory-tracking": {
    description:
      "Kynato monitors regulatory change across GST, RBI, SEBI, and ICAI — generating plain-language summaries of new circulars and routing them to the relevant team members automatically.",
    what: [
      "Plain-language regulatory summary and team routing",
    ],
  },

  // L1: Business Analytics
  "/services/intelligence-analytics/business-analytics": {
    description:
      "Kynato builds analytics systems that connect marketing activities to revenue outcomes — tracking lead attribution, campaign ROI, funnel conversion, automation efficiency, and predictive signals like churn and demand.",
    what: [
      "Lead source attribution with UTM setup and CRM tagging",
      "Campaign ROI across all channels",
      "Funnel drop-off and conversion analysis",
      "WhatsApp and email campaign analytics",
      "Automation efficiency and bot performance dashboards",
      "Predictive analytics for churn and revenue forecasting",
    ],
  },

  // L3: Business Analytics children
  "/services/intelligence-analytics/business-analytics/marketing-analytics/channel-attribution": {
    description:
      "Kynato sets up lead source attribution from end to end — configuring UTM parameters, CRM source tagging, and attribution model selection so every lead and conversion is traced back to the exact channel and campaign.",
    what: [
      "UTM setup, CRM source tagging, and attribution model selection",
    ],
  },
  "/services/intelligence-analytics/business-analytics/marketing-analytics/campaign-roi": {
    description:
      "Kynato builds campaign ROI tracking across all channels — calculating cost per lead, cost per acquisition, and revenue per campaign for every active marketing programme.",
    what: [
      "Cost per lead, cost per acquisition, and revenue per campaign",
    ],
  },
  "/services/intelligence-analytics/business-analytics/marketing-analytics/funnel-analysis": {
    description:
      "Kynato maps stage-by-stage conversion rates across your full funnel — identifying drop-off points, logging A/B test results, and building the data foundation for systematic funnel improvement.",
    what: [
      "Stage-by-stage conversion rate mapping and A/B test logging",
    ],
  },
  "/services/intelligence-analytics/business-analytics/marketing-analytics/whatsapp-email-analytics": {
    description:
      "Kynato tracks WhatsApp and email campaign performance at sequence level — identifying drop-off points across nurturing flows and the best-performing messages in each sequence.",
    what: [
      "Sequence-level drop-off and best-performing message identification",
    ],
  },
  "/services/intelligence-analytics/business-analytics/automation-analytics/workflow-efficiency": {
    description:
      "Kynato measures the efficiency of your automation programmes — tracking hours saved per workflow, before-and-after time comparisons, and team capacity released by each automation deployment.",
    what: [
      "Pre- and post-automation time tracking and team capacity calculation",
    ],
  },
  "/services/intelligence-analytics/business-analytics/automation-analytics/bot-performance": {
    description:
      "Kynato tracks bot and agent performance metrics — monitoring response accuracy, escalation rate, and resolution time to identify where AI systems need refinement.",
    what: [
      "Response accuracy, escalation rate, and resolution time tracking",
    ],
  },
  "/services/intelligence-analytics/business-analytics/automation-analytics/error-escalation": {
    description:
      "Kynato tracks automation error rates and escalation frequency — classifying failure types and tagging root causes so systematic issues are identified and resolved before they compound.",
    what: [
      "Failure type classification and root cause tagging",
    ],
  },
  "/services/intelligence-analytics/business-analytics/automation-analytics/automation-roi-report": {
    description:
      "Kynato delivers monthly automation ROI reports — summarising hours saved, cost reduction estimates, and efficiency gains in plain numbers that justify continued investment in each automation programme.",
    what: [
      "Hours saved summary, cost reduction estimate, and plain-number delivery",
    ],
  },
  "/services/intelligence-analytics/business-analytics/predictive-analytics/churn-prediction": {
    description:
      "Kynato builds churn prediction models trained on your historical CRM data — generating early-warning scores for at-risk clients and triggering CRM alerts so your team can intervene before churn occurs.",
    what: [
      "Model training on historical churn data and CRM alert integration",
    ],
  },
  "/services/intelligence-analytics/business-analytics/predictive-analytics/revenue-forecasting": {
    description:
      "Kynato builds revenue forecasting models over your CRM pipeline data — incorporating seasonal adjustments and confidence intervals to give your leadership team a realistic forward-looking revenue picture.",
    what: [
      "Seasonal adjustment and confidence interval reporting",
    ],
  },
  "/services/intelligence-analytics/business-analytics/predictive-analytics/demand-planning": {
    description:
      "Kynato builds demand planning and capacity forecasting models — ingesting historical demand data and integrating forecasts into your operational workflow so capacity is planned ahead of demand shifts.",
    what: [
      "Historical demand ingestion and ops workflow integration",
    ],
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // MISSING L2 — CAP 2: DEMAND GENERATION
  // ═══════════════════════════════════════════════════════════════════════════

  "/services/demand-generation/inbound-lead-architecture/landing-page-cro": {
    description:
      "Kynato designs and optimises landing pages for maximum lead conversion — single-action page layouts, mobile-first CTA placement, and conversion testing built for Indian B2B buyer behaviour.",
    what: [
      "Single-action page design and CTA hierarchy",
      "Mobile conversion optimisation for Indian users",
    ],
  },
  "/services/demand-generation/inbound-lead-architecture/website-chatbot": {
    description:
      "Kynato deploys website chatbots that qualify visitors, capture lead data, and route sales-ready contacts to the right team — with full CRM handoff and conversation logging.",
    what: [
      "Qualification logic and question sequence design",
      "CRM handoff and conversation logging",
    ],
  },
  "/services/demand-generation/inbound-lead-architecture/lead-magnets": {
    description:
      "Kynato builds interactive lead magnets — ROI calculators, compliance checklists, and self-assessment tools — that capture high-intent leads by delivering immediate personalised value.",
    what: [
      "ROI calculator and compliance checklist tools",
      "Webinar and event lead funnel setup",
    ],
  },
  "/services/demand-generation/inbound-lead-architecture/whatsapp-lead-integration": {
    description:
      "Kynato connects your ad campaigns and inbound channels to WhatsApp — routing leads from Facebook, Google, and website forms directly into WhatsApp conversations with full CRM sync.",
    what: [
      "Ad lead form to WhatsApp routing",
      "CRM sync and lead assignment automation",
    ],
  },
  "/services/demand-generation/outbound-paid-acquisition/linkedin-outreach": {
    description:
      "Kynato runs LinkedIn outreach automation programmes — ICP-targeted connection sequences, reply detection, CRM routing, and supporting content scheduling to build pipeline from decision-makers.",
    what: [
      "ICP targeting and connection request sequences",
      "Reply detection and CRM routing",
      "LinkedIn content scheduling and posting",
      "Instagram DM automation",
    ],
  },
  "/services/demand-generation/outbound-paid-acquisition/cold-email": {
    description:
      "Kynato builds cold email infrastructure and sequences — domain warm-up, SPF/DKIM/DMARC configuration, AI-personalised copy, and spam score monitoring for high inbox placement rates.",
    what: [
      "Domain warm-up and deliverability configuration",
      "AI-personalised copy at scale",
      "Spam score and blacklist status audit",
    ],
  },
  "/services/demand-generation/outbound-paid-acquisition/paid-ads": {
    description:
      "Kynato manages Google Ads and Meta Ads campaigns with lead quality as the primary metric — accurate conversion tracking, intent-based retargeting, and bid strategies optimised for cost per qualified lead.",
    what: [
      "Lead quality optimisation and conversion tracking",
      "Intent-based retargeting audiences",
    ],
  },
  "/services/demand-generation/ai-lead-nurturing/lead-scoring": {
    description:
      "Kynato builds AI lead scoring models that rank every contact by sales-readiness — integrating signal-weighted scoring into your CRM and routing high-score leads to sales automatically.",
    what: [
      "Scoring model design and CRM integration",
      "Threshold-based routing rules",
    ],
  },
  "/services/demand-generation/ai-lead-nurturing/qualification-bot": {
    description:
      "Kynato deploys qualification bots on WhatsApp and web — running structured conversation flows that separate sales-ready leads from poor fits and hand off directly to calendar booking.",
    what: [
      "Conversation flow design and disqualification logic",
      "Calendar integration and CRM handoff",
    ],
  },
  "/services/demand-generation/ai-lead-nurturing/nurturing-sequences": {
    description:
      "Kynato builds AI-powered nurturing sequences that trigger based on lead behaviour — segment-specific email and WhatsApp flows for active leads, and reactivation campaigns for dormant pipeline.",
    what: [
      "Segment-based sequence design and trigger logic",
      "Cold lead reactivation system",
    ],
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // MISSING L2 — CAP 3: KNOWLEDGE & APPLIED AI
  // ═══════════════════════════════════════════════════════════════════════════

  "/services/knowledge-applied-ai/ai-assistant/internal-assistant": {
    description:
      "Kynato deploys internal AI assistants on WhatsApp and web — connected to your knowledge base, with role-based access controls and team onboarding so every staff member can query organisational knowledge instantly.",
    what: [
      "Access control setup and team onboarding",
      "RAG backend connection and channel deployment",
    ],
  },
  "/services/knowledge-applied-ai/ai-assistant/customer-facing-assistant": {
    description:
      "Kynato builds and deploys customer-facing AI assistants — defining tier-1 query scope, escalation logic, brand persona, and live deployment monitoring for always-on automated customer support.",
    what: [
      "Tier-1 query scope definition and escalation logic",
      "Tone, persona configuration, and live deployment",
    ],
  },
  "/services/knowledge-applied-ai/ai-assistant/voice-whatsapp-bot": {
    description:
      "Kynato deploys voice and WhatsApp AI bots with vernacular language support — handling Hindi, Hinglish, and regional Indian language inputs connected to your RAG backend for accurate, source-grounded responses.",
    what: [
      "Vernacular language configuration",
      "RAG backend connection and bot channel setup",
    ],
  },
  "/services/knowledge-applied-ai/document-intelligence/document-pipeline": {
    description:
      "Kynato builds document intelligence pipelines that extract structured data from PDFs, scanned documents, and contracts — flagging anomalies and generating summaries automatically.",
    what: [
      "Field extraction template design",
      "Anomaly detection and structured summary generation",
    ],
  },
  "/services/knowledge-applied-ai/document-intelligence/regulatory-search": {
    description:
      "Kynato deploys AI-powered monitoring for GST, RBI, ICAI, and ITR regulatory circulars — detecting new notifications, summarising changes, and routing alerts to the relevant team members.",
    what: [
      "New circular detection and notification",
    ],
  },
  "/services/knowledge-applied-ai/document-intelligence/legal-search": {
    description:
      "Kynato builds legal precedent and case search systems — ingesting judgment corpora and enabling semantic search over case law by legal concept, argument type, or principle.",
    what: [
      "Judgment corpus ingestion and semantic search",
    ],
  },
  "/services/knowledge-applied-ai/document-intelligence/knowledge-gap-detection": {
    description:
      "Kynato monitors unanswered and low-confidence queries in your AI assistant — generating monthly gap reports that prioritise knowledge base expansion based on actual user questions.",
    what: [
      "Unanswered query logging and monthly gap report",
    ],
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // MISSING L2 — CAP 4: AGENTIC AUTOMATION
  // ═══════════════════════════════════════════════════════════════════════════

  "/services/agentic-automation/agentic-workflows/process-audit": {
    description:
      "Kynato audits your existing workflows to identify automation opportunities — mapping manual processes, measuring time and error cost, and producing a quick-win roadmap ranked by impact vs effort.",
    what: [
      "Manual process audit and time-cost analysis",
      "Quick-win automation roadmap",
      "System integration and data flow mapping",
    ],
  },
  "/services/agentic-automation/agentic-workflows/single-agent": {
    description:
      "Kynato designs, builds, and deploys single-agent AI systems — decomposing the target process, mapping API dependencies, building the agent, and implementing human-in-the-loop escalation.",
    what: [
      "Process decomposition and agent mapping",
      "Agent build, tool integration, and live deployment",
      "Human-in-the-loop escalation design",
    ],
  },
  "/services/agentic-automation/agentic-workflows/multi-agent-systems": {
    description:
      "Kynato architects and deploys multi-agent AI pipelines — designing orchestration layers, inter-agent communication, agent memory, external tool integration, and error handling for complex automated workflows.",
    what: [
      "Multi-step agentic pipeline architecture",
      "Agent memory and context persistence",
      "External tool and API integration",
    ],
  },
  "/services/agentic-automation/agentic-workflows/agent-monitoring": {
    description:
      "Kynato implements end-to-end monitoring for deployed agents — step-level logging, failure detection and recovery, human operator alerting, and monthly improvement cycles to keep accuracy high.",
    what: [
      "Agent performance logging and audit trails",
      "Failure detection and recovery",
      "Monthly agent improvement cycles",
    ],
  },
  "/services/agentic-automation/core-automation/document-collection": {
    description:
      "Kynato automates client document collection via WhatsApp — building the bot flow, validation logic, rejection-and-retry sequences, file naming, storage routing, and CRM status updates.",
    what: [
      "WhatsApp bot flow design and document validation logic",
      "File naming, storage routing, and CRM status update",
    ],
  },
  "/services/agentic-automation/core-automation/compliance-reminders": {
    description:
      "Kynato builds multi-channel compliance reminder systems — configuring pre-deadline alerts via WhatsApp and email for GST, ITR, TDS, and audit milestones, with escalation on non-acknowledgement.",
    what: [
      "Configurable pre-deadline alert intervals",
      "Escalation on non-acknowledgement",
    ],
  },
  "/services/agentic-automation/core-automation/crm-auto-update": {
    description:
      "Kynato builds pipelines that automatically log calls, emails, and WhatsApp messages to CRM records — with stage trigger rules and duplicate detection to keep your pipeline data clean and current.",
    what: [
      "Call, email, and WhatsApp message CRM logging",
      "Stage trigger rules and duplicate detection",
    ],
  },
  "/services/agentic-automation/core-automation/invoice-billing": {
    description:
      "Kynato automates invoice generation and payment follow-up — milestone-triggered invoice creation, escalating payment reminder sequences, and automated reconciliation of incoming payments.",
    what: [
      "Milestone-triggered invoice generation",
      "Escalating payment reminder and reconciliation",
    ],
  },
  "/services/agentic-automation/core-automation/hr-onboarding": {
    description:
      "Kynato automates the full HR onboarding journey — offer letter generation, document collection via WhatsApp, training delivery scheduling, and milestone check-in sequences without manual coordination.",
    what: [
      "Offer letter generation and document collection bot",
      "Training delivery and milestone check-in automation",
    ],
  },
  "/services/agentic-automation/core-automation/reporting-reconciliation": {
    description:
      "Kynato automates business reporting pipelines — pulling data from multiple sources, running anomaly detection, and delivering formatted summary reports on schedule to the right inboxes.",
    what: [
      "Multi-source data pull and anomaly flagging",
      "Formatted summary report and scheduled delivery",
    ],
  },
  "/services/agentic-automation/core-automation/rpa": {
    description:
      "Kynato builds RPA bots for rule-based repetitive tasks — data entry, web portal submissions, and structured process automation that sits outside the scope of LLM-based agents.",
    what: [
      "RPA bot build for data entry and portal submissions",
    ],
  },
  "/services/agentic-automation/conversational-automation/whatsapp-automation": {
    description:
      "Kynato builds and operates the full WhatsApp Business automation stack — API provisioning, lead qualification flows, drip sequences, appointment booking, payment integration, and broadcast campaign management.",
    what: [
      "WhatsApp Business API provisioning",
      "CRM and WhatsApp bi-directional sync",
      "Lead capture and qualification flow",
      "Drip automation sequences",
      "Appointment booking and payment automation",
      "Broadcast segmentation and campaign management",
    ],
  },
  "/services/agentic-automation/conversational-automation/email-automation": {
    description:
      "Kynato builds email automation infrastructure from the ground up — domain deliverability setup, drip campaigns with behavioural triggers, transactional email configuration, and newsletter broadcast management.",
    what: [
      "Cold email sequencing and domain deliverability",
      "Drip campaign setup and management",
      "Transactional email triggers",
      "Newsletter and broadcast automation",
    ],
  },
  "/services/agentic-automation/conversational-automation/sms-omnichannel": {
    description:
      "Kynato sets up SMS transactional automation with DLT compliance, builds omnichannel inbox consolidation across WhatsApp, email, and SMS, and orchestrates multi-channel drip sequences.",
    what: [
      "SMS transactional automation",
      "Omnichannel inbox consolidation",
      "Multi-channel drip orchestration",
    ],
  },
  "/services/agentic-automation/conversational-automation/social-outreach": {
    description:
      "Kynato automates LinkedIn and social outreach — connection request sequences, post generation and scheduling, and cross-platform content repurposing from blog to LinkedIn, WhatsApp, and email.",
    what: [
      "LinkedIn connection request and message sequences",
      "LinkedIn post generation and scheduling",
      "Cross-platform content repurposing automation",
    ],
  },
  "/services/agentic-automation/conversational-automation/content-automation": {
    description:
      "Kynato builds AI-assisted content production and distribution systems — blog production automation, content calendar management, multi-platform publishing triggers, and content repurposing workflows.",
    what: [
      "AI-assisted blog and long-form content production",
      "Content calendar automation",
      "Multi-platform publishing automation",
      "Content repurposing workflow automation",
      "Content performance monitoring and pruning",
    ],
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // MISSING L2 — CAP 5: INTELLIGENCE & ANALYTICS
  // ═══════════════════════════════════════════════════════════════════════════

  "/services/intelligence-analytics/search-intelligence/multi-engine-dashboard": {
    description:
      "Kynato builds a unified search intelligence dashboard — consolidating Google Search Console, Bing, and Yandex data, tagging AI-referred sessions, and deploying a smart analytical agent for weekly plain-English briefings.",
    what: [
      "GSC, Bing, and Yandex data consolidation",
      "AI engine impressions and traffic source tracking",
      "Smart analytical agent for weekly intelligence briefing",
    ],
  },
  "/services/intelligence-analytics/search-intelligence/seo-performance": {
    description:
      "Kynato tracks SEO performance across keyword clusters, content decay, crawl budget, Core Web Vitals trends, and backlink profile health — delivering continuous monitoring with actionable alerting.",
    what: [
      "Keyword ranking by topic cluster",
      "Content decay detection and refresh prioritisation",
      "Crawl budget and indexation health monitoring",
      "Core Web Vitals trend tracking",
      "Backlink profile monitoring and authority assessment",
    ],
  },
  "/services/intelligence-analytics/ai-visibility-tracking/ai-share-of-voice": {
    description:
      "Kynato measures your brand's AI share of voice — tracking citation frequency, sentiment, and prompt performance across ChatGPT, Perplexity, Gemini, and Claude with competitor benchmarking.",
    what: [
      "AI share of voice by keyword category",
      "Prompt performance tracking",
      "Sentiment analysis in AI responses",
      "Multi-LLM citation tracking",
    ],
  },
  "/services/intelligence-analytics/ai-visibility-tracking/competitive-intelligence": {
    description:
      "Kynato monitors the competitive landscape across SEO, AI citations, SERP features, pricing, LinkedIn signals, and regulatory changes — delivering consolidated weekly intelligence digests.",
    what: [
      "Competitor keyword gap and ranking comparison",
      "Competitor AI citation frequency tracking",
      "Share of SERP monitoring",
      "Competitor pricing and product launch monitoring",
      "LinkedIn and news signal monitoring",
      "Regulatory change tracking and alerts",
    ],
  },
  "/services/intelligence-analytics/business-analytics/marketing-analytics": {
    description:
      "Kynato builds marketing analytics dashboards that connect every channel to revenue — lead source attribution, campaign ROI tracking, funnel drop-off analysis, and WhatsApp and email campaign performance.",
    what: [
      "Lead source and channel attribution",
      "Campaign ROI tracking across all channels",
      "Funnel drop-off and conversion analysis",
      "WhatsApp and email campaign analytics",
    ],
  },
  "/services/intelligence-analytics/business-analytics/automation-analytics": {
    description:
      "Kynato tracks the performance and ROI of every automation — workflow efficiency metrics, bot and agent dashboards, error rate monitoring, and monthly automation ROI reports in plain numbers.",
    what: [
      "Workflow efficiency and hours-saved metrics",
      "Bot and agent performance dashboards",
      "Error rate and escalation frequency tracking",
      "Monthly automation ROI report",
    ],
  },
  "/services/intelligence-analytics/business-analytics/predictive-analytics": {
    description:
      "Kynato builds predictive models for churn risk, revenue forecasting, and demand planning — giving leadership teams forward-looking intelligence derived from historical CRM and operational data.",
    what: [
      "Churn prediction and at-risk client identification",
      "Revenue forecasting and pipeline modelling",
      "Demand planning and capacity forecasting",
    ],
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // L4 — CAP 1: TECHNICAL SEO
  // ═══════════════════════════════════════════════════════════════════════════

  "/services/search-ai-visibility/seo/technical-seo/core-web-vitals/lcp-fix": {
    description:
      "Kynato diagnoses and fixes Largest Contentful Paint — addressing render-blocking resources, unoptimised images, slow server response time (TTFB), and lazy-loading configuration to bring LCP under 2.5 seconds.",
  },
  "/services/search-ai-visibility/seo/technical-seo/core-web-vitals/inp-fix": {
    description:
      "Kynato reduces Interaction to Next Paint by auditing JavaScript execution on the main thread, removing long tasks, and implementing event handler optimisations that cut interaction latency to acceptable thresholds.",
  },
  "/services/search-ai-visibility/seo/technical-seo/core-web-vitals/cls-fix": {
    description:
      "Kynato identifies and eliminates the root causes of Cumulative Layout Shift — sizing attributes for images and embeds, font loading strategies, and dynamic content insertion fixes that stabilise your visual layout.",
  },
  "/services/search-ai-visibility/seo/technical-seo/crawlability-indexation/robots-txt": {
    description:
      "Kynato audits your robots.txt directives line by line — identifying rules that accidentally block important pages and rewriting the file to ensure the right content is crawlable and nothing critical is excluded.",
  },
  "/services/search-ai-visibility/seo/technical-seo/crawlability-indexation/xml-sitemap": {
    description:
      "Kynato audits your XML sitemap for errors, missing pages, and non-canonical URLs — then resubmits a corrected sitemap to Google Search Console and Bing Webmaster Tools for faster content discovery.",
  },
  "/services/search-ai-visibility/seo/technical-seo/crawlability-indexation/redirect-chains": {
    description:
      "Kynato identifies and unwinds redirect chains across your site — detecting multi-hop redirects that waste crawl budget and dilute link equity, and replacing them with direct 301 connections.",
  },
  "/services/search-ai-visibility/seo/technical-seo/crawlability-indexation/canonical-audit": {
    description:
      "Kynato resolves canonical tag conflicts — identifying pages with contradictory self-referencing, cross-domain, and parameter canonicals, and implementing a consistent canonical structure that signals the correct indexable version to search engines.",
  },
  "/services/search-ai-visibility/seo/technical-seo/crawlability-indexation/js-rendering": {
    description:
      "Kynato assesses how search engines render your JavaScript-dependent pages — identifying content that isn't visible to crawlers and recommending SSR, pre-rendering, or server-side data injection solutions.",
  },
  "/services/search-ai-visibility/seo/technical-seo/schema-markup/organization-service-schema": {
    description:
      "Kynato implements Organisation and Service JSON-LD schema — establishing the entity signals that help search engines and AI models accurately understand your brand, what it offers, and how it operates.",
  },
  "/services/search-ai-visibility/seo/technical-seo/schema-markup/faq-breadcrumb-schema": {
    description:
      "Kynato deploys FAQ and BreadcrumbList schema across your site — creating the structured data that enables rich snippet FAQ results and breadcrumb display in search engine results pages.",
  },
  "/services/search-ai-visibility/seo/technical-seo/schema-markup/localbusiness-schema": {
    description:
      "Kynato implements LocalBusiness JSON-LD schema with accurate address, opening hours, contact, and service area data — strengthening local search presence and supporting Knowledge Panel eligibility.",
  },
  "/services/search-ai-visibility/seo/technical-seo/schema-markup/schema-validation": {
    description:
      "Kynato validates all deployed schema through Google's Rich Results Test and Search Console structured data reports — catching errors before they prevent rich results eligibility and monitoring for schema drift over time.",
  },
  "/services/search-ai-visibility/seo/technical-seo/site-architecture/topic-clusters": {
    description:
      "Kynato designs and implements topic cluster and pillar-to-spoke link architectures — creating the internal linking hierarchy that signals comprehensive topical authority to search engines across every subject you need to rank for.",
  },
  "/services/search-ai-visibility/seo/technical-seo/site-architecture/breadcrumb-schema": {
    description:
      "Kynato implements breadcrumb schema across your navigation structure — creating the structured data that enables breadcrumb display in SERPs and reinforces the authority hierarchy of your content architecture.",
  },
  "/services/search-ai-visibility/seo/technical-seo/on-page-seo/title-meta-htag": {
    description:
      "Kynato rewrites title tags, meta descriptions, and H-tag hierarchies across your priority pages — aligning every element with target keyword intent and eliminating the duplicate, missing, and over-length tags that limit ranking potential.",
  },
  "/services/search-ai-visibility/seo/technical-seo/on-page-seo/url-slug": {
    description:
      "Kynato audits and cleans up URL structures — removing unnecessary parameters, dates, and ID strings, and standardising slugs to keyword-rich, hyphen-separated formats that improve both crawlability and click-through rates.",
  },
  "/services/search-ai-visibility/seo/technical-seo/on-page-seo/image-optimisation": {
    description:
      "Kynato optimises every image on your site — writing descriptive alt text, converting to WebP format, applying compression without quality loss, and implementing lazy loading to reduce page weight and improve Core Web Vitals.",
  },
  "/services/search-ai-visibility/seo/technical-seo/on-page-seo/anchor-cta": {
    description:
      "Kynato audits internal anchor text and CTA placement — replacing generic link text (\"click here\", \"learn more\") with keyword-rich descriptive anchors and aligning CTA placement with the intent stage of each page.",
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // L4 — CAP 1: CONTENT STRATEGY
  // ═══════════════════════════════════════════════════════════════════════════

  "/services/search-ai-visibility/seo/content-strategy/search-intent/intent-classification": {
    description:
      "Kynato classifies every target keyword across informational, commercial, transactional, and navigational intent types — giving each page a clear intent label that determines content format, structure, and CTA strategy.",
  },
  "/services/search-ai-visibility/seo/content-strategy/search-intent/serp-archetype": {
    description:
      "Kynato analyses the actual SERP for each target keyword — identifying whether Google rewards a listicle, comparison, guide, or product page format, and mapping each keyword to the page archetype most likely to rank.",
  },
  "/services/search-ai-visibility/seo/content-strategy/search-intent/intent-mismatch": {
    description:
      "Kynato detects intent mismatches and keyword cannibalisation — identifying where two or more pages compete for the same query and delivering a consolidation or separation plan to restore ranking clarity.",
  },
  "/services/search-ai-visibility/seo/content-strategy/keyword-research/commercial-keywords": {
    description:
      "Kynato isolates the commercial and transactional keywords in your category — the queries buyers type when actively evaluating options or ready to purchase — and prioritises them as the highest-return ranking targets.",
  },
  "/services/search-ai-visibility/seo/content-strategy/keyword-research/paa-autocomplete": {
    description:
      "Kynato systematically mines People Also Ask boxes and Google autocomplete suggestions for your priority topics — extracting long-tail and question-format keywords that represent real buyer queries at every funnel stage.",
  },
  "/services/search-ai-visibility/seo/content-strategy/keyword-research/competitor-keyword-gap": {
    description:
      "Kynato identifies every keyword where competitors rank in the top 10 and you don't — producing a prioritised gap list of ranking opportunities that represent defensible organic traffic you are currently missing.",
  },
  "/services/search-ai-visibility/seo/content-strategy/topic-cluster-architecture/pillar-pages": {
    description:
      "Kynato scopes and produces comprehensive pillar pages for each content cluster — defining the target keyword, content depth, internal linking hub structure, and SERP feature eligibility before production begins.",
  },
  "/services/search-ai-visibility/seo/content-strategy/topic-cluster-architecture/cluster-briefs": {
    description:
      "Kynato produces cluster content briefs for every spoke page in your topic architecture — including target keyword, intent classification, competitor outline analysis, word count, and internal linking instructions.",
  },
  "/services/search-ai-visibility/seo/content-strategy/topic-cluster-architecture/internal-linking-map": {
    description:
      "Kynato builds an internal linking map for your full content cluster — specifying which pages link to which, using what anchor text, and planning entity co-occurrence patterns that strengthen topical authority signals.",
  },
  "/services/search-ai-visibility/seo/content-strategy/ai-overview-serp/ai-overview-eligibility": {
    description:
      "Kynato analyses which of your target queries trigger Google AI Overviews, audits whether your content meets the eligibility criteria, and produces a prioritised list of pages and edits needed to enter AI Overview citations.",
  },
  "/services/search-ai-visibility/seo/content-strategy/ai-overview-serp/snippet-panel-capture": {
    description:
      "Kynato targets featured snippet, People Also Ask, and Knowledge Panel positions — identifying the exact format, word count, and structure required for each target query and rewriting content to match.",
  },
  "/services/search-ai-visibility/seo/content-strategy/ai-overview-serp/zero-click-strategy": {
    description:
      "Kynato builds a zero-click content strategy for queries where AI Overviews or featured snippets consume the click — optimising for brand visibility and citation within the AI answer even when no traffic results.",
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // L4 — CAP 1: CONTENT PRODUCTION
  // ═══════════════════════════════════════════════════════════════════════════

  "/services/search-ai-visibility/seo/content-production/eeat-content/intent-annotation": {
    description:
      "Kynato annotates each content piece with the verified search intent of its target keyword and analyses the top-ranking SERP competitors — ensuring every piece of content matches what Google already rewards for that query.",
  },
  "/services/search-ai-visibility/seo/content-production/eeat-content/faq-schema-opportunities": {
    description:
      "Kynato identifies FAQ schema opportunities within each content piece — flagging the questions and answers most likely to earn rich snippet eligibility and structuring the FAQ section for maximum JSON-LD deployment.",
  },
  "/services/search-ai-visibility/seo/content-production/eeat-content/author-optimisation": {
    description:
      "Kynato optimises author bios and bylines for E-E-A-T signals — writing credential-forward author profiles, linking to authoritative third-party profiles, and implementing author schema markup on every published piece.",
  },
  "/services/search-ai-visibility/seo/content-production/ai-content-production/keyword-draft": {
    description:
      "Kynato takes a keyword brief and generates a structured AI first draft — covering the required headings, word count, competitor outline gaps, and FAQ opportunities before editorial review begins.",
  },
  "/services/search-ai-visibility/seo/content-production/ai-content-production/editorial-cms": {
    description:
      "Kynato manages the editorial review and CMS publishing workflow — verifying accuracy, adding expert commentary where required, formatting for the target CMS, and scheduling publication according to the content calendar.",
  },
  "/services/search-ai-visibility/seo/content-production/content-audit/refresh-prioritisation": {
    description:
      "Kynato identifies underperforming pages in your content library — measuring traffic decay, ranking drop, and CTR deterioration, then prioritising pages for refresh based on recovery potential vs effort.",
  },
  "/services/search-ai-visibility/seo/content-production/content-audit/cannibalization-fix": {
    description:
      "Kynato resolves keyword cannibalisation by producing a documented merge, redirect, or consolidation plan — specifying which URL becomes canonical, which gets redirected, and how internal links should be updated.",
  },
  "/services/search-ai-visibility/seo/content-production/content-distribution/content-calendar": {
    description:
      "Kynato builds and manages content calendar automation — planning monthly topics, scheduling publication dates, and setting up automated reminders and approval checkpoints that keep the content programme running on time.",
  },
  "/services/search-ai-visibility/seo/content-production/content-distribution/multi-platform-publishing": {
    description:
      "Kynato automates multi-platform publishing — triggering LinkedIn posts, newsletter sections, and social content automatically when new blog posts go live in the CMS, with format-specific adaptation per channel.",
  },
  "/services/search-ai-visibility/seo/content-production/content-distribution/performance-monitoring": {
    description:
      "Kynato monitors content performance at page level — tracking traffic, ranking, and engagement trends, and flagging decaying pages for refresh or consolidation before the decline compounds.",
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // L4 — CAP 1: LOCAL SEO
  // ═══════════════════════════════════════════════════════════════════════════

  "/services/search-ai-visibility/seo/local-seo/google-business-profile/categories-service-area": {
    description:
      "Kynato configures your Google Business Profile categories and service area settings — selecting the primary and secondary categories that best match search intent and defining the service area boundaries for local pack visibility.",
  },
  "/services/search-ai-visibility/seo/local-seo/google-business-profile/review-management": {
    description:
      "Kynato builds a review velocity strategy for your GBP — creating the process for requesting reviews, writing response templates for positive and negative feedback, and maintaining the review activity that signals active local relevance.",
  },
  "/services/search-ai-visibility/seo/local-seo/google-business-profile/qa-photos": {
    description:
      "Kynato manages GBP Q&A and photo cadence — seeding your own Q&A with high-value questions and answers, and maintaining a consistent photo upload schedule that signals ongoing engagement to Google's local ranking algorithm.",
  },
  "/services/search-ai-visibility/seo/local-seo/city-service-pages/localised-schema": {
    description:
      "Kynato integrates localised keyword variations and LocalBusiness schema into each city service page — giving each page the entity signals needed to rank for hyper-local queries in that specific city or region.",
  },
  "/services/search-ai-visibility/seo/local-seo/city-service-pages/internal-linking": {
    description:
      "Kynato builds internal links from pillar pages and top-level service pages to each city page — distributing authority down the local hierarchy and signalling to search engines that city pages are legitimate, relevant destinations.",
  },
  "/services/search-ai-visibility/seo/local-seo/citation-audit/nap-audit": {
    description:
      "Kynato audits your Name, Address, and Phone number data across Justdial, IndiaMart, Sulekha, and other major Indian directories — identifying every inconsistency that erodes local ranking trust signals.",
  },
  "/services/search-ai-visibility/seo/local-seo/citation-audit/duplicate-suppression": {
    description:
      "Kynato identifies and suppresses duplicate business listings across Indian local directories — removing or merging duplicates that confuse search engines and split the authority of your local entity.",
  },
  "/services/search-ai-visibility/seo/local-seo/local-knowledge-graph/gbp-entity-schema": {
    description:
      "Kynato links your verified Google Business Profile to your brand entity in the Knowledge Graph using same-as schema — establishing the entity connection required for Knowledge Panel eligibility and AI citation accuracy.",
  },
  "/services/search-ai-visibility/seo/local-seo/local-knowledge-graph/directory-linkage": {
    description:
      "Kynato builds authoritative local directory entity linkage — connecting your brand entity across Justdial, IndiaMart, and other high-authority local directories to amplify local entity signals for AI and search engines.",
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // L4 — CAP 1: OFF-PAGE SEO
  // ═══════════════════════════════════════════════════════════════════════════

  "/services/search-ai-visibility/seo/off-page-seo/link-building/guest-posts": {
    description:
      "Kynato places guest posts and editorial links in relevant Indian and international publications — identifying target domains, pitching topics, managing the writing process, and securing followed links that build domain authority.",
  },
  "/services/search-ai-visibility/seo/off-page-seo/link-building/broken-link-reclamation": {
    description:
      "Kynato finds broken links pointing to resource pages and competitor content in your niche — then pitches your content as the replacement, converting dead outbound links into live editorial backlinks.",
  },
  "/services/search-ai-visibility/seo/off-page-seo/link-building/unlinked-mentions": {
    description:
      "Kynato identifies every online mention of your brand that does not carry a link — and runs outreach to the authors and editors to convert those brand mentions into followed backlinks.",
  },
  "/services/search-ai-visibility/seo/off-page-seo/digital-pr/expert-placement": {
    description:
      "Kynato pitches your subject matter experts as commentators and sources to industry journalists and media outlets — building a regular pipeline of expert quotes that earn editorial backlinks from high-authority publications.",
  },
  "/services/search-ai-visibility/seo/off-page-seo/digital-pr/original-research": {
    description:
      "Kynato produces original research and data-driven content designed to earn passive links — industry surveys, benchmark reports, and statistics pages that journalists and bloggers cite as primary sources.",
  },
  "/services/search-ai-visibility/seo/off-page-seo/digital-pr/podcast-webinar": {
    description:
      "Kynato secures podcast guest appearances and webinar speaking slots for your executives — building authority signals through audio and video content that generates backlinks, brand mentions, and expert association.",
  },
  "/services/search-ai-visibility/seo/off-page-seo/backlink-health/backlink-audit": {
    description:
      "Kynato conducts a full backlink profile audit — using Ahrefs, Semrush, and GSC data to identify toxic, spammy, and irrelevant links that are dragging down domain authority and triggering algorithmic penalties.",
  },
  "/services/search-ai-visibility/seo/off-page-seo/backlink-health/disavow": {
    description:
      "Kynato creates a Google-compliant disavow file from the toxic links identified in the audit — submitting it through Search Console and documenting every disavowed domain for ongoing reference.",
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // L4 — CAP 1: AI READINESS AUDIT
  // ═══════════════════════════════════════════════════════════════════════════

  "/services/search-ai-visibility/ai-visibility/ai-readiness-audit/llms-txt/page-priority": {
    description:
      "Kynato maps your most important pages in the llms.txt file — assigning priority signals and crawler permission instructions so AI engines index the content that matters most to your brand first.",
  },
  "/services/search-ai-visibility/ai-visibility/ai-readiness-audit/llms-txt/crawler-verification": {
    description:
      "Kynato verifies that GPTBot, ClaudeBot, and PerplexityBot can access your site after llms.txt deployment — simulating crawler requests and confirming correct permission responses for each AI bot.",
  },
  "/services/search-ai-visibility/ai-visibility/ai-readiness-audit/js-rendering-ai/ssr-ssg": {
    description:
      "Kynato provides implementation guidance for server-side rendering (SSR) and static site generation (SSG) — ensuring your page content is fully rendered in the HTML response that AI crawlers read, not dependent on client-side JavaScript.",
  },
  "/services/search-ai-visibility/ai-visibility/ai-readiness-audit/js-rendering-ai/pre-rendering": {
    description:
      "Kynato configures pre-rendering for AI crawler user-agents — serving fully rendered HTML to known AI bots without requiring a full SSR migration on your existing tech stack.",
  },
  "/services/search-ai-visibility/ai-visibility/ai-readiness-audit/semantic-html-entity/heading-hierarchy": {
    description:
      "Kynato restructures your heading hierarchy across all pages — ensuring a logical H1→H2→H3 flow that AI models can parse to extract the topical structure and key claims of each page accurately.",
  },
  "/services/search-ai-visibility/ai-visibility/ai-readiness-audit/semantic-html-entity/entity-schema": {
    description:
      "Kynato adds entity disambiguation copy and schema signals — writing about-us, product, and service copy that clearly identifies what your brand is and does, then reinforcing those signals with Organisation and Service JSON-LD.",
  },
  "/services/search-ai-visibility/ai-visibility/ai-readiness-audit/agent-readiness/crawl-simulation": {
    description:
      "Kynato runs post-implementation crawl simulations and entity recognition tests — verifying that AI agents correctly parse your content, extract entity attributes, and represent your brand accurately after all readiness improvements are live.",
  },
  "/services/search-ai-visibility/ai-visibility/ai-readiness-audit/agentic-traffic/agent-session-reporting": {
    description:
      "Kynato identifies AI agent sessions in your web analytics — tagging GPTBot, ClaudeBot, and PerplexityBot visits at page level and reporting which content AI engines access most and which they skip.",
  },
  "/services/search-ai-visibility/ai-visibility/ai-readiness-audit/agentic-traffic/zero-click-audit": {
    description:
      "Kynato assesses your zero-click AI visibility — measuring how often your brand is cited in AI-generated answers without generating a website visit, and identifying content gaps where AI answers your buyers' questions using competitor content instead.",
  },
  "/services/search-ai-visibility/ai-visibility/ai-readiness-audit/schema-actions/action-schema": {
    description:
      "Kynato implements BuyAction, ReserveAction, and ScheduleAction schema — making your site's key conversion flows callable by AI agents so buyers can complete transactional intent without leaving the AI interface.",
  },
  "/services/search-ai-visibility/ai-visibility/ai-readiness-audit/schema-actions/indexnow-validation": {
    description:
      "Kynato integrates IndexNow for real-time schema change notification and sets up automated schema drift detection — ensuring search engines receive immediate updates when your structured data changes.",
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // L4 — CAP 1: GEO OPTIMISATION
  // ═══════════════════════════════════════════════════════════════════════════

  "/services/search-ai-visibility/ai-visibility/geo-optimisation/citation-authority/source-domains": {
    description:
      "Kynato identifies the specific domains that ChatGPT, Perplexity, Gemini, and Claude most frequently cite when answering queries in your category — mapping the exact publication and platform landscape your brand needs to penetrate.",
  },
  "/services/search-ai-visibility/ai-visibility/geo-optimisation/citation-authority/expert-seeding": {
    description:
      "Kynato places expert commentary, data contributions, and thought leadership content on the high-citation domains identified in the source domain analysis — seeding your brand's expert voice where AI engines are most likely to find and cite it.",
  },
  "/services/search-ai-visibility/ai-visibility/geo-optimisation/prompt-gap-analysis/buyer-prompts": {
    description:
      "Kynato researches the exact prompts your ideal buyers type into ChatGPT, Perplexity, and Gemini when evaluating solutions in your category — mapping every prompt to the current AI response and identifying where competitors appear and you don't.",
  },
  "/services/search-ai-visibility/ai-visibility/geo-optimisation/prompt-gap-analysis/prompt-briefs": {
    description:
      "Kynato produces content briefs for every high-value prompt your brand doesn't yet own — defining the format, depth, and entity signals required to earn an AI citation for that specific buyer query.",
  },
  "/services/search-ai-visibility/ai-visibility/geo-optimisation/eeat-ai/author-credentials": {
    description:
      "Kynato documents author credentials and research methodologies for all published content — creating the evidence of expertise, experience, and authority that AI engines use to assess whether content is citation-worthy.",
  },
  "/services/search-ai-visibility/ai-visibility/geo-optimisation/eeat-ai/original-data": {
    description:
      "Kynato develops an original data publication strategy — designing surveys, studies, or proprietary benchmarks that generate citable statistics AI models can attribute directly to your brand in responses.",
  },
  "/services/search-ai-visibility/ai-visibility/geo-optimisation/digital-pr/publisher-placement": {
    description:
      "Kynato secures placements in the specific publications that AI engines cite in your category — pitching expert commentary, data contributions, and thought leadership to editors at the media properties that influence AI training and retrieval.",
  },
  "/services/search-ai-visibility/ai-visibility/geo-optimisation/digital-pr/ugc-signals": {
    description:
      "Kynato builds strategic brand presence on Reddit, Quora, and relevant forums — contributing genuine expert answers and discussions that generate brand mentions in the user-generated content AI engines frequently cite.",
  },
  "/services/search-ai-visibility/ai-visibility/geo-optimisation/digital-pr/review-platforms": {
    description:
      "Kynato establishes and optimises your brand's presence on G2, Capterra, and Trustpilot — creating the verified review platform profiles that AI engines cite when recommending software and services.",
  },
  "/services/search-ai-visibility/ai-visibility/geo-optimisation/digital-pr/listicle-placement": {
    description:
      "Kynato secures placements in best-of and top-10 listicles that AI engines frequently reference — identifying the specific list pages that drive AI citations in your category and running outreach to earn inclusion.",
  },
  "/services/search-ai-visibility/ai-visibility/geo-optimisation/brand-co-occurrence/co-occurrence-mapping": {
    description:
      "Kynato maps how often your brand appears alongside category keywords across AI-indexed content — identifying the co-occurrence patterns that establish your brand as a natural recommendation in that context.",
  },
  "/services/search-ai-visibility/ai-visibility/geo-optimisation/brand-co-occurrence/content-seeding": {
    description:
      "Kynato runs third-party content seeding campaigns — placing brand mentions alongside your target category keywords in guest articles, forums, and directory entries to strengthen co-occurrence signals in LLM training data.",
  },
  "/services/search-ai-visibility/ai-visibility/geo-optimisation/wikipedia-wikidata/wikipedia-article": {
    description:
      "Kynato manages the Wikipedia article creation process — building the notability evidence, drafting a policy-compliant article, and navigating the editorial review process to establish your brand's Wikipedia presence.",
  },
  "/services/search-ai-visibility/ai-visibility/geo-optimisation/wikipedia-wikidata/wikidata-entry": {
    description:
      "Kynato creates and maintains your Wikidata entity record — adding all relevant brand attributes, linking to authoritative sources, and establishing sameAs connections to your other verified web properties.",
  },
  "/services/search-ai-visibility/ai-visibility/geo-optimisation/hallucination-correction/brand-fact-audit": {
    description:
      "Kynato audits brand-related AI responses across ChatGPT, Perplexity, Gemini, and Claude — documenting every inaccurate claim, hallucinated detail, and missing attribute in AI-generated descriptions of your business.",
  },
  "/services/search-ai-visibility/ai-visibility/geo-optimisation/hallucination-correction/source-correction": {
    description:
      "Kynato corrects the structured data, source content, and entity signals that caused AI hallucinations — updating the underlying authoritative sources so AI engines have accurate data to draw from in future responses.",
  },
  "/services/search-ai-visibility/ai-visibility/geo-optimisation/hallucination-correction/hallucination-monitoring": {
    description:
      "Kynato runs ongoing monthly hallucination monitoring — repeatedly querying key AI engines with brand-related prompts and alerting your team when new inaccuracies appear before they become established in model responses.",
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // L4 — CAP 1: AEO
  // ═══════════════════════════════════════════════════════════════════════════

  "/services/search-ai-visibility/ai-visibility/aeo/faq-schema/question-research": {
    description:
      "Kynato researches question-format keywords for your target topics — identifying the specific questions appearing in People Also Ask boxes, search autocomplete, and AI responses that represent high-value FAQ schema opportunities.",
  },
  "/services/search-ai-visibility/ai-visibility/aeo/faq-schema/rich-results-monitoring": {
    description:
      "Kynato validates deployed FAQ schema through Google's Rich Results Test and monitors Search Console for rich snippet eligibility status — tracking which pages earn FAQ rich results and alerting on any schema errors.",
  },
  "/services/search-ai-visibility/ai-visibility/aeo/answer-first-content/answer-compression": {
    description:
      "Kynato rewrites target page openings to lead with a compressed 40-60 word direct answer — structuring the core response before elaboration, making the content eligible for featured snippet extraction.",
  },
  "/services/search-ai-visibility/ai-visibility/aeo/answer-first-content/depth-layering": {
    description:
      "Kynato structures supporting content beneath the compressed answer — layering elaboration, examples, and evidence in a hierarchy that satisfies both snippet capture requirements and AI citation depth standards.",
  },
  "/services/search-ai-visibility/ai-visibility/aeo/conversational-keywords/paa-autocomplete": {
    description:
      "Kynato harvests People Also Ask questions and autocomplete suggestions for every priority topic — building a database of conversational queries to target in content production and AEO optimisation.",
  },
  "/services/search-ai-visibility/ai-visibility/aeo/conversational-keywords/speakable-schema": {
    description:
      "Kynato deploys Speakable schema markup on pages with voice search potential — identifying the sections of content eligible for audio readout and implementing the structured data that enables voice AI citation.",
  },
  "/services/search-ai-visibility/ai-visibility/aeo/ai-overview-monitoring/trigger-monitoring": {
    description:
      "Kynato monitors which of your target keywords trigger Google AI Overviews — tracking trigger frequency, the content sources cited, and changes in AI Overview presence that indicate algorithmic updates or content eligibility shifts.",
  },
  "/services/search-ai-visibility/ai-visibility/aeo/ai-overview-monitoring/citation-tracking": {
    description:
      "Kynato identifies which sources Google cites in AI Overviews for your target queries and measures how often competitors appear vs your brand — producing the competitive frequency data needed to prioritise citation gap closure.",
  },
  "/services/search-ai-visibility/ai-visibility/aeo/multimodal-content/video-transcripts": {
    description:
      "Kynato creates accurate transcripts for your YouTube and video content and adds indexable markup — enabling search engines and AI engines to parse video content as text and cite it in multimodal search responses.",
  },
  "/services/search-ai-visibility/ai-visibility/aeo/multimodal-content/podcast-transcripts": {
    description:
      "Kynato produces structured podcast transcripts and publishes them with proper schema markup — transforming audio content into indexable, citable text that AI engines can reference when answering related queries.",
  },
  "/services/search-ai-visibility/ai-visibility/aeo/multimodal-content/image-schema": {
    description:
      "Kynato adds descriptive alt text, optimised captions, and ImageObject schema to your visual content — giving AI engines the structured signals they need to understand, attribute, and cite your images in multimodal search.",
  },
  "/services/search-ai-visibility/ai-visibility/aeo/solution-pages/industry-role-pages": {
    description:
      "Kynato creates industry-specific and role-specific solution pages optimised for the AI recommendation patterns triggered by vertical queries — designed to appear when buyers ask AI systems for solutions tailored to their sector or job function.",
  },
  "/services/search-ai-visibility/ai-visibility/aeo/solution-pages/integration-pages": {
    description:
      "Kynato builds and optimises integration and partner solution pages — structured to capture AI citations when buyers ask about tools that connect with or complement your product.",
  },
  "/services/search-ai-visibility/ai-visibility/aeo/solution-pages/faq-hub": {
    description:
      "Kynato creates a comprehensive FAQ hub covering pricing, features, comparisons, and objections — structured with FAQ schema to capture AI citations when buyers ask evaluative questions before purchase.",
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // L4 — CAP 1: BRAND AUTHORITY
  // ═══════════════════════════════════════════════════════════════════════════

  "/services/search-ai-visibility/ai-visibility/brand-authority/mention-audit/platform-mapping": {
    description:
      "Kynato maps your brand's current presence platform by platform — Reddit, Quora, G2, Wikipedia, and LinkedIn — documenting citation frequency, sentiment, and content accuracy on each to produce a prioritised improvement plan.",
  },
  "/services/search-ai-visibility/ai-visibility/brand-authority/mention-audit/competitor-benchmarking": {
    description:
      "Kynato benchmarks your share of AI brand mentions against your key competitors — measuring who gets cited more, on which platforms, and with what sentiment, to identify the specific gaps your programme needs to close.",
  },
  "/services/search-ai-visibility/ai-visibility/brand-authority/third-party-profiles/profile-enrichment": {
    description:
      "Kynato enriches your LinkedIn Company Page, Crunchbase profile, and key business directory listings with complete, AI-readable brand information — descriptions, product details, team data, and links to authoritative properties.",
  },
  "/services/search-ai-visibility/ai-visibility/brand-authority/third-party-profiles/nap-consistency": {
    description:
      "Kynato audits brand fact consistency across all platforms where AI models look — ensuring your name, address, founding date, employee count, and product descriptions are consistent and accurate everywhere.",
  },
  "/services/search-ai-visibility/ai-visibility/brand-authority/content-freshness/evergreen-updates": {
    description:
      "Kynato builds an evergreen content update schedule — adding temporal markers (\"updated [month] [year]\") and refreshing statistics, examples, and references on a defined cadence to signal recency to AI engines.",
  },
  "/services/search-ai-visibility/ai-visibility/brand-authority/content-freshness/platform-publishing": {
    description:
      "Kynato maintains a high-velocity publishing cadence on AI-indexed platforms — LinkedIn articles, Reddit posts, and YouTube content — building the recency signals that influence how current AI models treat your brand's information.",
  },
  "/services/search-ai-visibility/ai-visibility/brand-authority/ai-visibility-index/visibility-scoring": {
    description:
      "Kynato scores your brand's AI visibility across platforms — measuring mention frequency, sentiment classification, and brand accuracy in AI responses to produce a composite AI visibility index that tracks programme impact.",
  },
  "/services/search-ai-visibility/ai-visibility/brand-authority/ai-visibility-index/monthly-report": {
    description:
      "Kynato delivers a monthly AI visibility report — documenting citation counts, sentiment shifts, accuracy improvements, and SEO-to-GEO attribution so every activity in the programme is tied to measurable outcomes.",
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // L4 — CAP 2: DEMAND GENERATION
  // ═══════════════════════════════════════════════════════════════════════════

  "/services/demand-generation/outbound-paid-acquisition/linkedin-outreach/linkedin-content/calendar-approval": {
    description:
      "Kynato sets up the content calendar and approval workflow for LinkedIn — scheduling posts, routing drafts for sign-off, and managing publishing so your brand maintains a consistent LinkedIn presence alongside outreach.",
  },
  "/services/demand-generation/outbound-paid-acquisition/linkedin-outreach/instagram-dm/trigger-crm": {
    description:
      "Kynato configures Instagram DM triggers, designs the lead flow sequence, and sets up CRM logging so every Instagram interaction is captured, qualified, and tracked without manual inbox monitoring.",
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // L4 — CAP 3: KNOWLEDGE & APPLIED AI
  // ═══════════════════════════════════════════════════════════════════════════

  "/services/knowledge-applied-ai/rag-systems/rag-architecture/knowledge-base-ingestion/document-parsing": {
    description:
      "Kynato builds the document parsing layer for your RAG system — handling PDFs, Word files, Excel sheets, and emails, applying the chunking strategy (sentence, paragraph, or semantic) that maximises retrieval accuracy for your document type.",
  },
  "/services/knowledge-applied-ai/rag-systems/rag-architecture/knowledge-base-ingestion/vector-indexing": {
    description:
      "Kynato indexes your parsed document chunks into a vector database — selecting and configuring Pinecone, Qdrant, or Weaviate to match your retrieval latency requirements and document volume.",
  },
  "/services/knowledge-applied-ai/rag-systems/rag-architecture/hybrid-retrieval/re-ranking": {
    description:
      "Kynato adds a re-ranking layer to your RAG retrieval pipeline — scoring and reordering candidate chunks after initial retrieval to significantly improve answer accuracy for ambiguous or multi-part queries.",
  },
  "/services/knowledge-applied-ai/rag-systems/rag-architecture/domain-embeddings/fine-tuning": {
    description:
      "Kynato fine-tunes embedding models on your domain-specific corpus — improving semantic search accuracy for legal, accounting, and compliance terminology that generic embedding models consistently misrepresent.",
  },
  "/services/knowledge-applied-ai/rag-systems/rag-architecture/hallucination-benchmarking/citation-chain": {
    description:
      "Kynato implements a citation chain in your RAG system — attaching source document references to every AI-generated answer so users can verify responses and trust the system's outputs.",
  },
  "/services/knowledge-applied-ai/rag-systems/rag-architecture/hallucination-benchmarking/confidence-scoring": {
    description:
      "Kynato adds confidence scoring to your RAG pipeline — flagging responses with low retrieval confidence before they reach end users, reducing hallucination risk in production deployments.",
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // L4 — CAP 4: AGENTIC WORKFLOWS
  // ═══════════════════════════════════════════════════════════════════════════

  "/services/agentic-automation/agentic-workflows/process-audit/manual-audit/feasibility-scoring": {
    description:
      "Kynato scores each audited process for automation feasibility — measuring task volume, error rate, decision complexity, and system integration requirements to produce an evidence-based automation priority ranking.",
  },
  "/services/agentic-automation/agentic-workflows/process-audit/quick-win-roadmap/impact-effort-ranking": {
    description:
      "Kynato ranks your automation candidates by impact vs effort — placing the fastest-return, lowest-complexity automations first and sequencing the full programme to deliver measurable value within the first 30 days.",
  },
  "/services/agentic-automation/agentic-workflows/process-audit/integration-mapping/tool-stack-audit": {
    description:
      "Kynato audits your tool stack for integration readiness — inventorying CRM, email, accounting, and project management tools, identifying available APIs, and mapping the data flow required to connect them in the automation.",
  },
  "/services/agentic-automation/agentic-workflows/single-agent/process-decomposition/task-mapping-workshop": {
    description:
      "Kynato runs a structured workshop to decompose the target process into discrete agent tasks — documenting each step, its inputs and outputs, and the decision logic required, before any development begins.",
  },
  "/services/agentic-automation/agentic-workflows/single-agent/process-decomposition/api-dependency-mapping": {
    description:
      "Kynato maps every external API dependency in the agent's workflow — documenting authentication requirements, rate limits, data formats, and fallback behaviour for each external system the agent must call.",
  },
  "/services/agentic-automation/agentic-workflows/single-agent/human-in-loop/escalation-logic": {
    description:
      "Kynato defines the escalation trigger logic for your agent — specifying the confidence thresholds, error conditions, and edge case patterns that should route a task to a human reviewer rather than completing autonomously.",
  },
  "/services/agentic-automation/agentic-workflows/multi-agent-systems/pipeline-architecture/orchestration": {
    description:
      "Kynato designs the orchestration layer for your multi-agent pipeline — defining how agents communicate, pass context, and coordinate work across steps without creating bottlenecks or data inconsistencies.",
  },
  "/services/agentic-automation/agentic-workflows/multi-agent-systems/pipeline-architecture/error-handling": {
    description:
      "Kynato implements error handling and retry logic across the agent pipeline — specifying how each agent responds to failed API calls, malformed inputs, and timeout conditions before escalating to a human.",
  },
  "/services/agentic-automation/agentic-workflows/multi-agent-systems/agent-memory/session-history": {
    description:
      "Kynato configures short-term session memory and long-term interaction history for your agents — enabling agents to recall previous conversations, user preferences, and prior decisions to improve response quality over time.",
  },
  "/services/agentic-automation/agentic-workflows/multi-agent-systems/tool-api-integration/crm-calendar-whatsapp": {
    description:
      "Kynato integrates CRM write access, calendar booking, and WhatsApp messaging into your multi-agent system — giving agents the tools to update records, schedule meetings, and send messages without human intervention.",
  },
  "/services/agentic-automation/agentic-workflows/multi-agent-systems/tool-api-integration/document-accounting": {
    description:
      "Kynato connects document storage systems and accounting software (Tally, Zoho Books) to your agent pipeline — enabling agents to retrieve, file, and update financial and operational documents automatically.",
  },
  "/services/agentic-automation/agentic-workflows/agent-monitoring/performance-logging/logging-infrastructure": {
    description:
      "Kynato builds step-level logging infrastructure for your deployed agents — recording every tool call, decision, input, and output in a structured archive that supports debugging, compliance review, and performance analysis.",
  },
  "/services/agentic-automation/agentic-workflows/agent-monitoring/failure-detection/timeout-ratelimit": {
    description:
      "Kynato implements graceful handling for network timeouts, API rate limits, and unexpected input formats — configuring retry logic and fallback responses so agents degrade gracefully rather than failing silently.",
  },
  "/services/agentic-automation/agentic-workflows/agent-monitoring/failure-detection/operator-alerting": {
    description:
      "Kynato sets up human operator alerting for unrecoverable agent failures — notifying the right team member immediately when an agent encounters a situation it cannot resolve autonomously.",
  },
  "/services/agentic-automation/agentic-workflows/agent-monitoring/improvement-cycles/accuracy-drift": {
    description:
      "Kynato detects accuracy drift in deployed agents — comparing current output quality to baseline benchmarks and running prompt refinement, retrieval adjustments, or tool configuration changes to restore performance.",
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // L4 — CAP 4: CONVERSATIONAL AUTOMATION (WhatsApp)
  // ═══════════════════════════════════════════════════════════════════════════

  "/services/agentic-automation/conversational-automation/whatsapp-automation/api-provisioning/bsp-verification": {
    description:
      "Kynato handles BSP selection, phone number verification, and WhatsApp message template approval — completing the full onboarding process for the WhatsApp Business API so your business is production-ready on WhatsApp.",
  },
  "/services/agentic-automation/conversational-automation/whatsapp-automation/crm-sync/enrichment": {
    description:
      "Kynato enriches CRM contact records with data from WhatsApp interactions — capturing response patterns, engagement timing, and conversation content to improve lead scoring and personalisation.",
  },
  "/services/agentic-automation/conversational-automation/whatsapp-automation/lead-qualification/routing": {
    description:
      "Kynato configures qualification logic, non-fit routing, and sales notification triggers in your WhatsApp lead flow — ensuring qualified leads are escalated immediately and non-fits are handled gracefully without human review.",
  },
  "/services/agentic-automation/conversational-automation/whatsapp-automation/drip-sequences/trigger-timing": {
    description:
      "Kynato configures the trigger events and timing logic for WhatsApp drip sequences — defining the specific user actions, time delays, and conditions that activate each message in the nurturing flow.",
  },
  "/services/agentic-automation/conversational-automation/whatsapp-automation/drip-sequences/opt-out": {
    description:
      "Kynato implements WhatsApp opt-out handling — configuring compliant STOP keyword detection, suppression list management, and opt-out confirmation messaging to meet TRAI and WhatsApp Business Policy requirements.",
  },
  "/services/agentic-automation/conversational-automation/whatsapp-automation/booking-payment/calendar-reschedule": {
    description:
      "Kynato integrates calendar booking into your WhatsApp flow — sending available slot options, confirming bookings, and managing reschedule requests entirely within the WhatsApp conversation.",
  },
  "/services/agentic-automation/conversational-automation/whatsapp-automation/booking-payment/payment-crm": {
    description:
      "Kynato integrates Razorpay and PayU payment link generation into WhatsApp — sending payment requests, confirming receipt, and updating CRM payment status automatically when the transaction completes.",
  },
  "/services/agentic-automation/conversational-automation/whatsapp-automation/broadcast-campaigns/segmentation-tracking": {
    description:
      "Kynato builds CRM tag-based audience segmentation for WhatsApp broadcasts and tracks template performance — measuring open rates, reply rates, and conversions per template to improve future campaign targeting.",
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // L4 — CAP 4: CONVERSATIONAL AUTOMATION (Email)
  // ═══════════════════════════════════════════════════════════════════════════

  "/services/agentic-automation/conversational-automation/email-automation/cold-email-deliverability/domain-warmup": {
    description:
      "Kynato configures a sending domain warm-up schedule — gradually increasing daily send volume over 4-6 weeks to build sender reputation and avoid spam filters before the full outreach campaign launches.",
  },
  "/services/agentic-automation/conversational-automation/email-automation/cold-email-deliverability/spam-blacklist": {
    description:
      "Kynato audits your sending domain's spam score and checks it against major email blacklists — identifying deliverability risks and implementing the DNS, content, and sending-practice fixes required to maintain inbox placement.",
  },
  "/services/agentic-automation/conversational-automation/email-automation/drip-campaigns/trigger-segment": {
    description:
      "Kynato defines the trigger events and segment logic for your drip campaigns — mapping which contact actions (page visit, form submission, email open) activate which sequence for which audience segment.",
  },
  "/services/agentic-automation/conversational-automation/email-automation/drip-campaigns/ab-testing": {
    description:
      "Kynato runs A/B tests on subject lines and CTAs within your drip sequences — configuring split tests, defining statistical significance thresholds, and applying the winning variant to improve sequence performance over time.",
  },
  "/services/agentic-automation/conversational-automation/email-automation/transactional-email/trigger-logging": {
    description:
      "Kynato maps every transactional trigger event (invoice sent, appointment confirmed, account created) to the appropriate email and logs delivery confirmation — ensuring no transactional communication is missed or delayed.",
  },
  "/services/agentic-automation/conversational-automation/email-automation/newsletter-broadcast/segment-schedule-tracking": {
    description:
      "Kynato configures audience segmentation, send schedules, and performance tracking for newsletter and broadcast emails — measuring open rates, click rates, and unsubscribes per segment to improve each send.",
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // L4 — CAP 4: CONVERSATIONAL AUTOMATION (SMS, Social, Content, Voice)
  // ═══════════════════════════════════════════════════════════════════════════

  "/services/agentic-automation/conversational-automation/sms-omnichannel/sms-automation/dlt-otp": {
    description:
      "Kynato handles DLT registration on Indian telecom infrastructure and configures OTP delivery flows — ensuring your transactional SMS meets TRAI regulations and delivers reliably across all Indian operators.",
  },
  "/services/agentic-automation/conversational-automation/sms-omnichannel/sms-automation/reminder-payment-sms": {
    description:
      "Kynato configures appointment reminder and payment confirmation SMS triggers — sending the right message at the right moment based on CRM status changes, calendar events, and payment gateway webhooks.",
  },
  "/services/agentic-automation/conversational-automation/sms-omnichannel/omnichannel-inbox/contact-assignment": {
    description:
      "Kynato links contact records across WhatsApp, email, SMS, and Instagram in the unified inbox — and configures team assignment rules so every incoming message is routed to the right agent immediately.",
  },
  "/services/agentic-automation/conversational-automation/sms-omnichannel/multi-channel-drip/channel-adaptive": {
    description:
      "Kynato designs channel-adaptive drip sequences that select the right channel per contact — switching between WhatsApp, email, and SMS based on previous engagement behaviour and cross-platform timing optimisation.",
  },
  "/services/agentic-automation/conversational-automation/social-outreach/linkedin-sequences/icp-followup": {
    description:
      "Kynato defines ICP targeting criteria for LinkedIn outreach and builds the multi-touch follow-up message sequence — ensuring each connection request and follow-up is relevant, personalised, and timed for maximum reply rate.",
  },
  "/services/agentic-automation/conversational-automation/social-outreach/linkedin-sequences/reply-routing": {
    description:
      "Kynato configures reply detection in your LinkedIn outreach system — automatically identifying positive responses, classifying intent, and routing hot leads to CRM with full conversation context attached.",
  },
  "/services/agentic-automation/conversational-automation/social-outreach/linkedin-posts/brand-voice": {
    description:
      "Kynato calibrates your LinkedIn brand voice — analysing your existing content, documenting tone and style guidelines, and configuring the AI generation system to produce posts that sound like your brand, not a bot.",
  },
  "/services/agentic-automation/conversational-automation/social-outreach/linkedin-posts/draft-publish": {
    description:
      "Kynato manages the AI draft generation, human review, and publishing workflow for LinkedIn posts — producing first drafts, routing for approval, and scheduling publication on a consistent cadence.",
  },
  "/services/agentic-automation/conversational-automation/social-outreach/content-repurposing/distribution-workflow": {
    description:
      "Kynato builds the blog-to-LinkedIn and LinkedIn-to-WhatsApp distribution workflow — automatically triggering channel-specific content adaptations when new long-form content is published.",
  },
  "/services/agentic-automation/conversational-automation/social-outreach/content-repurposing/format-adaptation": {
    description:
      "Kynato adapts source content to the format requirements of each channel — transforming a blog post into a LinkedIn carousel hook, a WhatsApp message summary, and an email newsletter section without manual rewriting.",
  },
  "/services/agentic-automation/conversational-automation/content-automation/blog-content/keyword-draft": {
    description:
      "Kynato takes a keyword brief and generates a structured AI first draft for blog or long-form content — covering required headings, competitor outline gaps, and FAQ opportunities before the editorial review step.",
  },
  "/services/agentic-automation/conversational-automation/content-automation/blog-content/editorial-cms": {
    description:
      "Kynato manages editorial review, fact verification, and CMS publishing for AI-generated content — ensuring quality and brand alignment before every piece is scheduled and published.",
  },
  "/services/agentic-automation/conversational-automation/content-automation/content-calendar/topic-brief-generation": {
    description:
      "Kynato automates monthly topic plan generation and content brief creation — producing a full content calendar with SEO briefs automatically so the content programme runs without manual planning each cycle.",
  },
  "/services/agentic-automation/conversational-automation/content-automation/content-calendar/approval-scheduling": {
    description:
      "Kynato builds the approval workflow and publishing schedule coordination layer — routing briefs and drafts for sign-off and automatically scheduling approved content for publication at optimal times.",
  },
  "/services/agentic-automation/conversational-automation/content-automation/multi-platform-publishing/cms-trigger": {
    description:
      "Kynato configures CMS publish triggers that automatically fire LinkedIn posts, WhatsApp messages, and email newsletter sections whenever new content goes live — eliminating the manual cross-posting step entirely.",
  },
  "/services/agentic-automation/conversational-automation/content-automation/content-repurposing-workflow/format-adaptation": {
    description:
      "Kynato adapts source content into LinkedIn, WhatsApp, and email formats using format-specific adaptation logic — maintaining the core message while adjusting length, tone, and structure for each channel.",
  },
  "/services/agentic-automation/conversational-automation/content-automation/content-repurposing-workflow/format-approval": {
    description:
      "Kynato adds a human approval checkpoint to the content repurposing pipeline — routing adapted content for review before distribution so brand voice and accuracy are verified before any automated publishing.",
  },
  "/services/agentic-automation/conversational-automation/content-automation/performance-monitoring/engagement-pruning": {
    description:
      "Kynato tracks engagement metrics per content piece per platform — identifying underperforming content and generating pruning recommendations to keep your content library focused on what actually drives results.",
  },
  "/services/agentic-automation/conversational-automation/voice-ai/ai-ivr/intent-call-flow": {
    description:
      "Kynato builds the intent classification model and call flow map for your AI IVR — training the system to recognise caller intent categories and route each call type through the appropriate automated or human-assisted flow.",
  },
  "/services/agentic-automation/conversational-automation/voice-ai/ai-ivr/missed-call-agent": {
    description:
      "Kynato deploys a missed-call AI answering agent — capturing every unanswered call with an AI response, logging the enquiry, creating a CRM entry, and triggering a WhatsApp follow-up automatically.",
  },
  "/services/agentic-automation/conversational-automation/voice-ai/ai-ivr/missed-call-agent/crm-followup": {
    description:
      "Kynato configures the CRM entry creation and WhatsApp follow-up trigger that fires after every missed-call AI interaction — ensuring no inbound enquiry is lost and every caller receives a timely, personalised follow-up.",
  },
  "/services/agentic-automation/conversational-automation/voice-ai/call-routing/handoff-summary": {
    description:
      "Kynato builds caller profile matching and human agent handoff logic — identifying the caller from CRM data, routing to the right team member, and generating a call summary brief so the agent has full context at handoff.",
  },
  "/services/agentic-automation/conversational-automation/voice-ai/vernacular-ai/hinglish": {
    description:
      "Kynato configures accent handling and mixed-language Hinglish support for your voice AI — training the system to understand code-switched Hindi-English inputs and respond naturally in the caller's preferred language register.",
  },
  "/services/agentic-automation/conversational-automation/voice-ai/voice-document-collection/capture-routing": {
    description:
      "Kynato builds the data capture, validation, and output routing layer for voice document collection — verifying spoken inputs against expected formats and routing validated data to the correct CRM field or document store.",
  },
  "/services/agentic-automation/conversational-automation/voice-ai/clinic-triage-bot/intake-urgency": {
    description:
      "Kynato builds the patient intake flow and urgency classification model for your clinic triage bot — collecting presenting symptoms, medication history, and reason for contact, then classifying urgency for routing decisions.",
  },
  "/services/agentic-automation/conversational-automation/voice-ai/clinic-triage-bot/appointment-escalation": {
    description:
      "Kynato configures the appointment booking and high-priority escalation paths for the clinic triage bot — booking routine cases directly into the calendar and immediately alerting clinical staff for urgent presentations.",
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // L4 — CAP 5: SEARCH INTELLIGENCE
  // ═══════════════════════════════════════════════════════════════════════════

  "/services/intelligence-analytics/search-intelligence/multi-engine-dashboard/gsc-bing-yandex/api-normalisation": {
    description:
      "Kynato connects the Google Search Console, Bing Webmaster Tools, and Yandex APIs — normalising data schemas and metrics across engines so you can compare cross-engine performance in a single unified view.",
  },
  "/services/intelligence-analytics/search-intelligence/multi-engine-dashboard/ai-engine-tracking/ai-session-tagging": {
    description:
      "Kynato tags AI-referred sessions in your analytics platform — identifying traffic from ChatGPT, Perplexity, and other AI referrers and reporting the percentage split between AI and traditional search traffic.",
  },
  "/services/intelligence-analytics/search-intelligence/multi-engine-dashboard/smart-agent/weekly-brief": {
    description:
      "Kynato's smart analytical agent generates a weekly plain-English SEO intelligence brief — surfacing ranking changes, traffic anomalies, and content opportunities in a digest delivered directly to your inbox.",
  },
  "/services/intelligence-analytics/search-intelligence/seo-performance/cluster-ranking/cluster-gap": {
    description:
      "Kynato identifies dominant, declining, and completely unclaimed topic clusters in your keyword portfolio — showing where you lead, where you're losing ground, and where no page exists to capture available traffic.",
  },
  "/services/intelligence-analytics/search-intelligence/seo-performance/content-decay/refresh-priority": {
    description:
      "Kynato sets decay thresholds for your content library and generates an automated refresh priority list — ranking decaying pages by traffic loss severity and recovery potential so content investment goes where it has the highest return.",
  },
  "/services/intelligence-analytics/search-intelligence/seo-performance/crawl-budget-monitoring/index-pickup": {
    description:
      "Kynato monitors GSC Index Coverage API data daily — tracking content pickup speed, identifying newly published pages that haven't been indexed, and flagging crawl budget waste from error pages and soft 404s.",
  },
  "/services/intelligence-analytics/search-intelligence/seo-performance/cwv-trend-tracking/regression-scripts": {
    description:
      "Kynato detects Core Web Vitals regressions triggered by site deployments or newly added third-party scripts — alerting the team before ranking impact occurs and pinpointing the specific script or change responsible.",
  },
  "/services/intelligence-analytics/search-intelligence/seo-performance/backlink-monitoring/link-alerts": {
    description:
      "Kynato sends alerts for new and lost backlinks — notifying the team when high-value links are gained or removed, and flagging newly acquired toxic links for immediate disavow consideration.",
  },
  "/services/intelligence-analytics/search-intelligence/seo-performance/backlink-monitoring/anchor-authority": {
    description:
      "Kynato assesses anchor text distribution across your backlink profile — identifying over-optimised exact-match anchors and analysing the net authority impact of your link acquisition programme over time.",
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // L4 — CAP 5: AI VISIBILITY TRACKING
  // ═══════════════════════════════════════════════════════════════════════════

  "/services/intelligence-analytics/ai-visibility-tracking/ai-share-of-voice/sov-by-category/citation-frequency": {
    description:
      "Kynato measures how often your brand vs competitors is cited per keyword category across AI engines — delivering citation frequency data that shows exactly where you lead, where you trail, and where no brand dominates.",
  },
  "/services/intelligence-analytics/ai-visibility-tracking/ai-share-of-voice/prompt-performance/prompt-library": {
    description:
      "Kynato defines the high-value prompt library for your category — the specific buyer queries most relevant to your business — and monitors AI response content for each prompt across ChatGPT, Perplexity, and Gemini.",
  },
  "/services/intelligence-analytics/ai-visibility-tracking/ai-share-of-voice/ai-sentiment/sentiment-classification": {
    description:
      "Kynato classifies the sentiment of every AI-generated brand mention — tagging positive, neutral, and negative framings and immediately flagging brand mentions that carry inaccurate or damaging characterisations.",
  },
  "/services/intelligence-analytics/ai-visibility-tracking/ai-share-of-voice/multi-llm-tracking/cross-engine-gap": {
    description:
      "Kynato compares your brand's citation performance engine-by-engine — identifying which AI systems underrepresent you relative to others and diagnosing the content or source gaps specific to each engine.",
  },
  "/services/intelligence-analytics/ai-visibility-tracking/competitive-intelligence/keyword-gap-ranking/weekly-report": {
    description:
      "Kynato delivers a weekly automated competitor rank tracking report — showing side-by-side rankings for your target keywords so you can see gains and losses clearly without manual reporting overhead.",
  },
  "/services/intelligence-analytics/ai-visibility-tracking/competitive-intelligence/competitor-ai-citations/displacement": {
    description:
      "Kynato analyses the source domains driving competitor AI citations — identifying which publications and platforms are responsible for their citation frequency and the content gaps you can fill to displace them.",
  },
  "/services/intelligence-analytics/ai-visibility-tracking/competitive-intelligence/share-of-serp/serp-feature-tracking": {
    description:
      "Kynato tracks SERP feature gains and losses across your target keyword set — monitoring featured snippets, PAA appearances, and AI Overview presence for both your brand and competitors on a continuous basis.",
  },
  "/services/intelligence-analytics/ai-visibility-tracking/competitive-intelligence/pricing-launch/digest": {
    description:
      "Kynato defines the competitor monitoring scope and delivers a consolidated weekly intelligence digest — covering pricing changes, product announcements, and market moves across your defined competitive set.",
  },
  "/services/intelligence-analytics/ai-visibility-tracking/competitive-intelligence/linkedin-news/signals": {
    description:
      "Kynato monitors competitor LinkedIn activity and industry news for strategic signals — tracking employee movement, funding announcements, and partnership news that indicate competitive shifts before they affect your market.",
  },
  "/services/intelligence-analytics/ai-visibility-tracking/competitive-intelligence/regulatory-tracking/summary-routing": {
    description:
      "Kynato generates plain-language summaries of new regulatory circulars and routes them to the relevant team members — translating dense GST, RBI, SEBI, and ICAI notifications into actionable briefs.",
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // L4 — CAP 5: BUSINESS ANALYTICS
  // ═══════════════════════════════════════════════════════════════════════════

  "/services/intelligence-analytics/business-analytics/marketing-analytics/channel-attribution/utm-crm": {
    description:
      "Kynato configures UTM parameter structures, CRM source tagging, and attribution model selection — giving your team clean, consistent lead source data and the ability to choose first-touch, last-touch, or linear attribution.",
  },
  "/services/intelligence-analytics/business-analytics/marketing-analytics/campaign-roi/cpl-cpa-revenue": {
    description:
      "Kynato calculates cost per lead, cost per acquisition, and revenue per campaign across every active marketing channel — tying ad spend and content investment to actual pipeline and revenue outcomes.",
  },
  "/services/intelligence-analytics/business-analytics/marketing-analytics/funnel-analysis/stage-conversion": {
    description:
      "Kynato maps stage-by-stage conversion rates across your full funnel — identifying the specific transition points where leads drop out and logging A/B test results to build a continuous improvement data foundation.",
  },
  "/services/intelligence-analytics/business-analytics/marketing-analytics/whatsapp-email-analytics/sequence-performance": {
    description:
      "Kynato analyses WhatsApp and email sequence performance at message level — identifying the specific messages where recipients drop out and the highest-performing variations that should be applied across all sequences.",
  },
  "/services/intelligence-analytics/business-analytics/automation-analytics/workflow-efficiency/time-capacity": {
    description:
      "Kynato measures pre- and post-automation time investment per workflow — quantifying hours saved per team member and calculating the additional capacity released for higher-value work.",
  },
  "/services/intelligence-analytics/business-analytics/automation-analytics/bot-performance/accuracy-escalation": {
    description:
      "Kynato tracks response accuracy, escalation rate, and resolution time for every deployed bot and agent — delivering the metrics that identify where AI systems are performing well and where they need refinement.",
  },
  "/services/intelligence-analytics/business-analytics/automation-analytics/error-escalation/failure-classification": {
    description:
      "Kynato classifies automation failures by type — input errors, API failures, decision logic gaps — and tags root causes so systematic problems can be diagnosed and fixed rather than repeatedly escalated.",
  },
  "/services/intelligence-analytics/business-analytics/automation-analytics/automation-roi-report/hours-cost-summary": {
    description:
      "Kynato delivers a monthly automation ROI report in plain numbers — hours saved per workflow, cost reduction per automation, and total programme return — giving leadership a clear picture of automation value.",
  },
  "/services/intelligence-analytics/business-analytics/predictive-analytics/churn-prediction/model-crm": {
    description:
      "Kynato trains a churn prediction model on your historical CRM data — generating early-warning risk scores for current clients and integrating CRM alerts that fire when an account crosses a defined churn risk threshold.",
  },
  "/services/intelligence-analytics/business-analytics/predictive-analytics/revenue-forecasting/seasonal-confidence": {
    description:
      "Kynato builds revenue forecasting models that incorporate seasonal patterns and deliver confidence interval reporting — giving leadership both a central forecast and an honest range that reflects real uncertainty.",
  },
  "/services/intelligence-analytics/business-analytics/predictive-analytics/demand-planning/ops-integration": {
    description:
      "Kynato builds demand planning models from historical demand data and integrates the output into your operational workflow — ensuring procurement, staffing, and capacity decisions are informed by forward-looking AI forecasts.",
  },
}

export function getServiceDescription(href: string): ServiceDescription | undefined {
  const clean = href.replace(/\/$/, "")
  return descriptions[clean] ?? descriptions[clean + "/"] ?? descriptions[href]
}
