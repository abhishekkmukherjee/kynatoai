export interface ServiceNode {
  title: string
  slug: string
  href: string
  keywords?: string
  description?: string
  children?: ServiceNode[]
}

export interface Capability {
  id: string
  title: string
  slug: string
  href: string
  services: ServiceNode[]
}

export interface ServiceLookupResult {
  capability: Capability
  node?: ServiceNode
  parent?: ServiceNode
  ancestors: ServiceNode[]
}

export const capabilities: Capability[] = [
  {
    "id": "cap-1",
    "title": "Search & AI Visibility",
    "slug": "search-ai-visibility",
    "href": "/services/search-ai-visibility/",
    "services": [
      {
        "title": "Search Engine Optimisation and Visibility",
        "slug": "seo",
        "href": "/services/search-ai-visibility/seo/",
        "keywords": "SEO services India, organic search agency India, search engine optimisation India",
        "children": [
          {
            "title": "Technical SEO Services",
            "slug": "technical-seo",
            "href": "/services/search-ai-visibility/seo/technical-seo",
            "keywords": "technical SEO agency India, technical SEO audit India, site health audit India",
            "children": [
              {
                "title": "Core Web Vitals Optimisation",
                "slug": "core-web-vitals",
                "href": "/services/search-ai-visibility/seo/technical-seo/core-web-vitals",
                "keywords": "core web vitals optimisation India, page speed SEO India, LCP INP CLS fix India",
                "children": [
                  {
                    "title": "Largest Contentful Paint (LCP) Fix",
                    "slug": "lcp-fix",
                    "href": "/services/search-ai-visibility/seo/technical-seo/core-web-vitals/lcp-fix",
                    "keywords": "LCP fix India, TTFB fix India, render-blocking resources India"
                  },
                  {
                    "title": "Interaction to Next Paint (INP) Fix",
                    "slug": "inp-fix",
                    "href": "/services/search-ai-visibility/seo/technical-seo/core-web-vitals/inp-fix",
                    "keywords": "INP fix India, interaction latency fix India, INP optimisation India"
                  },
                  {
                    "title": "Cumulative Layout Shift (CLS) Fix",
                    "slug": "cls-fix",
                    "href": "/services/search-ai-visibility/seo/technical-seo/core-web-vitals/cls-fix",
                    "keywords": "CLS fix India, layout shift fix India, visual stability SEO India"
                  }
                ]
              },
              {
                "title": "Crawlability and Indexation Audit",
                "slug": "crawlability-indexation",
                "href": "/services/search-ai-visibility/seo/technical-seo/crawlability-indexation",
                "keywords": "crawlability audit India, indexation audit India, Google index issues India",
                "children": [
                  {
                    "title": "Robots.txt Directive Audit",
                    "slug": "robots-txt",
                    "href": "/services/search-ai-visibility/seo/technical-seo/crawlability-indexation/robots-txt",
                    "keywords": "robots.txt audit India, crawl directive review India"
                  },
                  {
                    "title": "XML Sitemap Health and Submission",
                    "slug": "xml-sitemap",
                    "href": "/services/search-ai-visibility/seo/technical-seo/crawlability-indexation/xml-sitemap",
                    "keywords": "XML sitemap audit India, sitemap submission Google India"
                  },
                  {
                    "title": "Redirect Chain Audit and Unwinding",
                    "slug": "redirect-chains",
                    "href": "/services/search-ai-visibility/seo/technical-seo/crawlability-indexation/redirect-chains",
                    "keywords": "redirect chain fix India, 301 redirect audit India"
                  },
                  {
                    "title": "Canonical Tag Conflict Resolution",
                    "slug": "canonical-audit",
                    "href": "/services/search-ai-visibility/seo/technical-seo/crawlability-indexation/canonical-audit",
                    "keywords": "canonical tag audit India, duplicate content SEO fix India"
                  },
                  {
                    "title": "JavaScript Rendering Crawl Assessment",
                    "slug": "js-rendering",
                    "href": "/services/search-ai-visibility/seo/technical-seo/crawlability-indexation/js-rendering",
                    "keywords": "JavaScript SEO India, JS rendering crawl issues India, client-side rendering SEO"
                  }
                ]
              },
              {
                "title": "Schema Markup Deployment and Validation",
                "slug": "schema-markup",
                "href": "/services/search-ai-visibility/seo/technical-seo/schema-markup",
                "keywords": "schema markup India, structured data SEO India, JSON-LD implementation India, rich results India",
                "children": [
                  {
                    "title": "Organization and Service Schema",
                    "slug": "organization-service-schema",
                    "href": "/services/search-ai-visibility/seo/technical-seo/schema-markup/organization-service-schema",
                    "keywords": "organization schema India, service schema JSON-LD India"
                  },
                  {
                    "title": "FAQ and BreadcrumbList Schema",
                    "slug": "faq-breadcrumb-schema",
                    "href": "/services/search-ai-visibility/seo/technical-seo/schema-markup/faq-breadcrumb-schema",
                    "keywords": "FAQ schema India, breadcrumb schema India, rich snippet FAQ India"
                  },
                  {
                    "title": "LocalBusiness Schema",
                    "slug": "localbusiness-schema",
                    "href": "/services/search-ai-visibility/seo/technical-seo/schema-markup/localbusiness-schema",
                    "keywords": "local business schema India, LocalBusiness JSON-LD India"
                  },
                  {
                    "title": "Schema Validation and Rich Results Testing",
                    "slug": "schema-validation",
                    "href": "/services/search-ai-visibility/seo/technical-seo/schema-markup/schema-validation",
                    "keywords": "rich results test India, schema validation India, Search Console structured data"
                  }
                ]
              },
              {
                "title": "Site Architecture and Internal Linking",
                "slug": "site-architecture",
                "href": "/services/search-ai-visibility/seo/technical-seo/site-architecture",
                "keywords": "site architecture SEO India, internal linking strategy India, topic cluster structure India",
                "children": [
                  {
                    "title": "Topic Cluster and Pillar-to-Spoke Architecture",
                    "slug": "topic-clusters",
                    "href": "/services/search-ai-visibility/seo/technical-seo/site-architecture/topic-clusters",
                    "keywords": "topic cluster SEO India, pillar page internal linking India"
                  },
                  {
                    "title": "Breadcrumb and Navigation Schema",
                    "slug": "breadcrumb-schema",
                    "href": "/services/search-ai-visibility/seo/technical-seo/site-architecture/breadcrumb-schema",
                    "keywords": "breadcrumb schema navigation India, site navigation SEO India"
                  }
                ]
              },
              {
                "title": "On-Page SEO Optimisation",
                "slug": "on-page-seo",
                "href": "/services/search-ai-visibility/seo/technical-seo/on-page-seo",
                "keywords": "on-page SEO India, title tag optimisation India, meta description SEO India, H-tag hierarchy India",
                "children": [
                  {
                    "title": "Title Tag, Meta Description, and H-Tag Hierarchy Optimisation",
                    "slug": "title-meta-htag",
                    "href": "/services/search-ai-visibility/seo/technical-seo/on-page-seo/title-meta-htag",
                    "keywords": "title tag optimisation India, meta description India, H1 H2 tag India, on-page SEO audit India"
                  },
                  {
                    "title": "URL Structure and Slug Optimisation",
                    "slug": "url-slug",
                    "href": "/services/search-ai-visibility/seo/technical-seo/on-page-seo/url-slug",
                    "keywords": "URL SEO India, slug optimisation India, clean URL structure India"
                  },
                  {
                    "title": "Image Optimisation, Alt Text, and Compression",
                    "slug": "image-optimisation",
                    "href": "/services/search-ai-visibility/seo/technical-seo/on-page-seo/image-optimisation",
                    "keywords": "image SEO India, alt text optimisation India, image compression SEO India, WebP India"
                  },
                  {
                    "title": "Internal Anchor Text and CTA Alignment Audit",
                    "slug": "anchor-cta",
                    "href": "/services/search-ai-visibility/seo/technical-seo/on-page-seo/anchor-cta",
                    "keywords": "internal anchor text India, CTA alignment SEO India, internal link text India"
                  }
                ]
              }
            ]
          },
          {
            "title": "Content Strategy and Topical Authority",
            "slug": "content-strategy",
            "href": "/services/search-ai-visibility/seo/content-strategy",
            "keywords": "content strategy India, topical authority SEO India, keyword strategy India, SEO content planning India",
            "children": [
              {
                "title": "Search Intent Research and Optimisation",
                "slug": "search-intent",
                "href": "/services/search-ai-visibility/seo/content-strategy/search-intent",
                "keywords": "search intent optimisation India, user intent SEO India, intent mapping India, informational transactional SEO India",
                "children": [
                  {
                    "title": "Intent Classification Across Informational, Commercial, Transactional, and Navigational Queries",
                    "slug": "intent-classification",
                    "href": "/services/search-ai-visibility/seo/content-strategy/search-intent/intent-classification",
                    "keywords": "intent classification India, informational SEO India, transactional keyword India, commercial intent India"
                  },
                  {
                    "title": "SERP Feature Analysis and Page Archetype Matching",
                    "slug": "serp-archetype",
                    "href": "/services/search-ai-visibility/seo/content-strategy/search-intent/serp-archetype",
                    "keywords": "SERP feature India, page archetype SEO India, featured snippet intent India, intent-matched page India"
                  },
                  {
                    "title": "Intent Mismatch Audit and Cannibalisation Detection",
                    "slug": "intent-mismatch",
                    "href": "/services/search-ai-visibility/seo/content-strategy/search-intent/intent-mismatch",
                    "keywords": "keyword cannibalization India, intent mismatch fix India, duplicate content intent India, SEO cannibalisation audit India"
                  }
                ]
              },
              {
                "title": "Keyword Research and Opportunity Mapping",
                "slug": "keyword-research",
                "href": "/services/search-ai-visibility/seo/content-strategy/keyword-research",
                "keywords": "keyword research India, search intent mapping India, bottom-of-funnel keywords India",
                "children": [
                  {
                    "title": "Commercial and Transactional Keyword Isolation",
                    "slug": "commercial-keywords",
                    "href": "/services/search-ai-visibility/seo/content-strategy/keyword-research/commercial-keywords",
                    "keywords": "commercial keyword research India, transactional SEO keywords India"
                  },
                  {
                    "title": "People Also Ask and Autocomplete Mining",
                    "slug": "paa-autocomplete",
                    "href": "/services/search-ai-visibility/seo/content-strategy/keyword-research/paa-autocomplete",
                    "keywords": "People Also Ask SEO India, Google autocomplete keywords India"
                  },
                  {
                    "title": "Competitor Keyword Gap Analysis",
                    "slug": "competitor-keyword-gap",
                    "href": "/services/search-ai-visibility/seo/content-strategy/keyword-research/competitor-keyword-gap",
                    "keywords": "competitor keyword gap India, SEO gap analysis India"
                  }
                ]
              },
              {
                "title": "Topic Cluster Architecture and Content Planning",
                "slug": "topic-cluster-architecture",
                "href": "/services/search-ai-visibility/seo/content-strategy/topic-cluster-architecture",
                "keywords": "topic cluster strategy India, pillar page SEO India, content cluster planning India",
                "children": [
                  {
                    "title": "Pillar Page Scoping and Production",
                    "slug": "pillar-pages",
                    "href": "/services/search-ai-visibility/seo/content-strategy/topic-cluster-architecture/pillar-pages",
                    "keywords": "pillar page creation India, SEO pillar content India"
                  },
                  {
                    "title": "Cluster Content Brief Production",
                    "slug": "cluster-briefs",
                    "href": "/services/search-ai-visibility/seo/content-strategy/topic-cluster-architecture/cluster-briefs",
                    "keywords": "content brief creation India, SEO content briefs India"
                  },
                  {
                    "title": "Internal Linking Map and Entity Co-Occurrence Planning",
                    "slug": "internal-linking-map",
                    "href": "/services/search-ai-visibility/seo/content-strategy/topic-cluster-architecture/internal-linking-map",
                    "keywords": "internal linking map India, entity co-occurrence SEO India"
                  }
                ]
              },
              {
                "title": "AI Overview and SERP Feature Optimisation",
                "slug": "ai-overview-serp",
                "href": "/services/search-ai-visibility/seo/content-strategy/ai-overview-serp",
                "keywords": "AI Overview SEO India, Google AI Overview optimisation India, featured snippet India, SERP feature optimisation India, zero-click SEO India",
                "children": [
                  {
                    "title": "AI Overview Trigger Analysis and Content Eligibility Audit",
                    "slug": "ai-overview-eligibility",
                    "href": "/services/search-ai-visibility/seo/content-strategy/ai-overview-serp/ai-overview-eligibility",
                    "keywords": "AI Overview trigger India, AI Overview eligibility India, Google SGE content India, AI search content India"
                  },
                  {
                    "title": "Featured Snippet, PAA, and Knowledge Panel Capture Strategy",
                    "slug": "snippet-panel-capture",
                    "href": "/services/search-ai-visibility/seo/content-strategy/ai-overview-serp/snippet-panel-capture",
                    "keywords": "featured snippet India, People Also Ask India, Knowledge Panel India, zero-click SEO India"
                  },
                  {
                    "title": "Zero-Click Content Strategy and Brand Visibility Without Traffic",
                    "slug": "zero-click-strategy",
                    "href": "/services/search-ai-visibility/seo/content-strategy/ai-overview-serp/zero-click-strategy",
                    "keywords": "zero-click India, AI answer visibility India, brand mention SERP India, no-click search India"
                  }
                ]
              }
            ]
          },
          {
            "title": "SEO Content Production",
            "slug": "content-production",
            "href": "/services/search-ai-visibility/seo/content-production",
            "keywords": "SEO content writing India, E-E-A-T content India, B2B content production India, AI content creation India",
            "children": [
              {
                "title": "E-E-A-T Optimised Content Production",
                "slug": "eeat-content",
                "href": "/services/search-ai-visibility/seo/content-production/eeat-content",
                "keywords": "E-E-A-T content India, SEO content writing India, expert-led content India, Google E-E-A-T optimisation",
                "children": [
                  {
                    "title": "Search Intent Annotation and Competitor Outline Analysis",
                    "slug": "intent-annotation",
                    "href": "/services/search-ai-visibility/seo/content-production/eeat-content/intent-annotation",
                    "keywords": "search intent content India, SERP outline analysis India"
                  },
                  {
                    "title": "FAQ and Schema Opportunity Flagging",
                    "slug": "faq-schema-opportunities",
                    "href": "/services/search-ai-visibility/seo/content-production/eeat-content/faq-schema-opportunities",
                    "keywords": "FAQ content strategy India, schema opportunity identification India"
                  },
                  {
                    "title": "Author Bio, Credential, and Byline Optimisation",
                    "slug": "author-optimisation",
                    "href": "/services/search-ai-visibility/seo/content-production/eeat-content/author-optimisation",
                    "keywords": "author bio SEO India, expert byline India, E-E-A-T author India, author schema India"
                  }
                ]
              },
              {
                "title": "AI-Assisted Content Production",
                "slug": "ai-content-production",
                "href": "/services/search-ai-visibility/seo/content-production/ai-content-production",
                "keywords": "AI content creation India, AI blog writing India, SEO content automation India",
                "children": [
                  {
                    "title": "Keyword Brief Input and AI First-Draft Generation",
                    "slug": "keyword-draft",
                    "href": "/services/search-ai-visibility/seo/content-production/ai-content-production/keyword-draft",
                    "keywords": "AI content brief India, AI first draft India"
                  },
                  {
                    "title": "Editorial Review and CMS Publishing Workflow",
                    "slug": "editorial-cms",
                    "href": "/services/search-ai-visibility/seo/content-production/ai-content-production/editorial-cms",
                    "keywords": "CMS publishing automation India, editorial workflow India"
                  }
                ]
              },
              {
                "title": "Content Audit, Refresh, and Cannibalisation Fix",
                "slug": "content-audit",
                "href": "/services/search-ai-visibility/seo/content-production/content-audit",
                "keywords": "content audit India, content refresh SEO India, keyword cannibalization fix India, thin content India",
                "children": [
                  {
                    "title": "Underperforming Page Identification and Refresh Prioritisation",
                    "slug": "refresh-prioritisation",
                    "href": "/services/search-ai-visibility/seo/content-production/content-audit/refresh-prioritisation",
                    "keywords": "content refresh India, underperforming page India, content decay fix India"
                  },
                  {
                    "title": "Cannibalisation Merge, Redirect, and Consolidation Plan",
                    "slug": "cannibalization-fix",
                    "href": "/services/search-ai-visibility/seo/content-production/content-audit/cannibalization-fix",
                    "keywords": "keyword cannibalization India, content merge India, URL consolidation SEO India"
                  }
                ]
              },
              {
                "title": "Content Repurposing and Distribution Automation",
                "slug": "content-distribution",
                "href": "/services/search-ai-visibility/seo/content-production/content-distribution",
                "keywords": "content repurposing India, multi-platform publishing India, automated content publishing India",
                "children": [
                  {
                    "title": "Content Calendar Automation",
                    "slug": "content-calendar",
                    "href": "/services/search-ai-visibility/seo/content-production/content-distribution/content-calendar",
                    "keywords": "content calendar automation India, monthly content planning India, automated content scheduling India"
                  },
                  {
                    "title": "Multi-Platform Publishing Automation",
                    "slug": "multi-platform-publishing",
                    "href": "/services/search-ai-visibility/seo/content-production/content-distribution/multi-platform-publishing",
                    "keywords": "multi-platform publishing India, CMS to social media India, blog to social automation India"
                  },
                  {
                    "title": "Content Performance Monitoring and Pruning",
                    "slug": "performance-monitoring",
                    "href": "/services/search-ai-visibility/seo/content-production/content-distribution/performance-monitoring",
                    "keywords": "content performance tracking India, underperforming content pruning India, content ROI India"
                  }
                ]
              }
            ]
          },
          {
            "title": "Local SEO and Regional Search Visibility",
            "slug": "local-seo",
            "href": "/services/search-ai-visibility/seo/local-seo",
            "keywords": "local SEO India, local SEO agency India, Google Business Profile optimisation India, city SEO India",
            "children": [
              {
                "title": "Google Business Profile Optimisation",
                "slug": "google-business-profile",
                "href": "/services/search-ai-visibility/seo/local-seo/google-business-profile",
                "keywords": "Google Business Profile India, GBP optimisation India, Google Maps ranking India",
                "children": [
                  {
                    "title": "Category and Service Area Configuration",
                    "slug": "categories-service-area",
                    "href": "/services/search-ai-visibility/seo/local-seo/google-business-profile/categories-service-area",
                    "keywords": "GBP category setup India, service area Google Maps India"
                  },
                  {
                    "title": "Review Velocity and Review Response Management",
                    "slug": "review-management",
                    "href": "/services/search-ai-visibility/seo/local-seo/google-business-profile/review-management",
                    "keywords": "Google review management India, review velocity India, GBP review strategy"
                  },
                  {
                    "title": "Q&A and Photo Cadence Optimisation",
                    "slug": "qa-photos",
                    "href": "/services/search-ai-visibility/seo/local-seo/google-business-profile/qa-photos",
                    "keywords": "GBP Q&A optimisation India, Google Business Profile photos India"
                  }
                ]
              },
              {
                "title": "City-Specific Service Page Creation",
                "slug": "city-service-pages",
                "href": "/services/search-ai-visibility/seo/local-seo/city-service-pages",
                "keywords": "city SEO pages India, location-specific SEO India, Tier 2 city SEO India",
                "children": [
                  {
                    "title": "Localised Keyword Integration and Structured Data",
                    "slug": "localised-schema",
                    "href": "/services/search-ai-visibility/seo/local-seo/city-service-pages/localised-schema",
                    "keywords": "local SEO structured data India, city page schema India"
                  },
                  {
                    "title": "Internal Linking from Pillar Pages to City Pages",
                    "slug": "internal-linking",
                    "href": "/services/search-ai-visibility/seo/local-seo/city-service-pages/internal-linking",
                    "keywords": "pillar to city page linking India, local SEO internal links India"
                  }
                ]
              },
              {
                "title": "Citation and Directory Consistency Audit",
                "slug": "citation-audit",
                "href": "/services/search-ai-visibility/seo/local-seo/citation-audit",
                "keywords": "NAP citation audit India, local directory SEO India, Justdial SEO India",
                "children": [
                  {
                    "title": "NAP Audit Across Justdial, IndiaMart, and Sulekha",
                    "slug": "nap-audit",
                    "href": "/services/search-ai-visibility/seo/local-seo/citation-audit/nap-audit",
                    "keywords": "NAP consistency India, Justdial listing audit India, IndiaMart SEO India"
                  },
                  {
                    "title": "Duplicate Suppression and Inconsistency Correction",
                    "slug": "duplicate-suppression",
                    "href": "/services/search-ai-visibility/seo/local-seo/citation-audit/duplicate-suppression",
                    "keywords": "duplicate listing removal India, local SEO duplicate fix India"
                  }
                ]
              },
              {
                "title": "Local Knowledge Graph Entity Linkage",
                "slug": "local-knowledge-graph",
                "href": "/services/search-ai-visibility/seo/local-seo/local-knowledge-graph",
                "keywords": "local Knowledge Graph India, GBP entity linkage India, local entity SEO India",
                "children": [
                  {
                    "title": "GBP Verified Entity and Same-As Schema",
                    "slug": "gbp-entity-schema",
                    "href": "/services/search-ai-visibility/seo/local-seo/local-knowledge-graph/gbp-entity-schema",
                    "keywords": "verified Google entity India, same-as schema local SEO India"
                  },
                  {
                    "title": "Authoritative Local Directory Entity Linkage",
                    "slug": "directory-linkage",
                    "href": "/services/search-ai-visibility/seo/local-seo/local-knowledge-graph/directory-linkage",
                    "keywords": "local directory entity linkage India, local SEO authority India"
                  }
                ]
              }
            ]
          },
          {
            "title": "Off-Page SEO and Link Authority Building",
            "slug": "off-page-seo",
            "href": "/services/search-ai-visibility/seo/off-page-seo",
            "keywords": "link building India, off-page SEO India, backlink acquisition India, digital PR SEO India, domain authority India",
            "children": [
              {
                "title": "Link Building and Backlink Acquisition",
                "slug": "link-building",
                "href": "/services/search-ai-visibility/seo/off-page-seo/link-building",
                "keywords": "link building India, backlink building India, white-hat link building India, SEO link acquisition India",
                "children": [
                  {
                    "title": "Guest Post and Editorial Link Placement",
                    "slug": "guest-posts",
                    "href": "/services/search-ai-visibility/seo/off-page-seo/link-building/guest-posts",
                    "keywords": "guest posting India, editorial backlink India, guest article placement India"
                  },
                  {
                    "title": "Broken Link Reclamation and Resource Page Outreach",
                    "slug": "broken-link-reclamation",
                    "href": "/services/search-ai-visibility/seo/off-page-seo/link-building/broken-link-reclamation",
                    "keywords": "broken link building India, resource page outreach India, link reclamation India"
                  },
                  {
                    "title": "Unlinked Brand Mention Conversion",
                    "slug": "unlinked-mentions",
                    "href": "/services/search-ai-visibility/seo/off-page-seo/link-building/unlinked-mentions",
                    "keywords": "unlinked brand mention India, brand mention to backlink India, mention outreach India"
                  }
                ]
              },
              {
                "title": "Digital PR for SEO Authority",
                "slug": "digital-pr",
                "href": "/services/search-ai-visibility/seo/off-page-seo/digital-pr",
                "keywords": "digital PR India, PR link building India, media backlinks India, expert quote placement India, earned media SEO India",
                "children": [
                  {
                    "title": "Expert Quote and Commentary Placement in Industry Media",
                    "slug": "expert-placement",
                    "href": "/services/search-ai-visibility/seo/off-page-seo/digital-pr/expert-placement",
                    "keywords": "expert quote SEO India, journalist outreach India, PR for backlinks India, thought leadership India"
                  },
                  {
                    "title": "Original Research and Data-Driven Content for Passive Link Earning",
                    "slug": "original-research",
                    "href": "/services/search-ai-visibility/seo/off-page-seo/digital-pr/original-research",
                    "keywords": "original research SEO India, data-driven content India, linkable asset India, statistics page India"
                  },
                  {
                    "title": "Podcast and Webinar Guest Appearance for Authority Building",
                    "slug": "podcast-webinar",
                    "href": "/services/search-ai-visibility/seo/off-page-seo/digital-pr/podcast-webinar",
                    "keywords": "podcast SEO India, webinar backlinks India, podcast guest India, authority building India"
                  }
                ]
              },
              {
                "title": "Backlink Profile Health and Toxic Link Management",
                "slug": "backlink-health",
                "href": "/services/search-ai-visibility/seo/off-page-seo/backlink-health",
                "keywords": "backlink audit India, toxic backlink removal India, disavow file India, link profile health India",
                "children": [
                  {
                    "title": "Full Backlink Profile Audit and Toxic Link Identification",
                    "slug": "backlink-audit",
                    "href": "/services/search-ai-visibility/seo/off-page-seo/backlink-health/backlink-audit",
                    "keywords": "backlink profile audit India, toxic link India, spam link removal India"
                  },
                  {
                    "title": "Disavow File Creation and Submission",
                    "slug": "disavow",
                    "href": "/services/search-ai-visibility/seo/off-page-seo/backlink-health/disavow",
                    "keywords": "Google disavow India, disavow tool India, bad backlink removal India"
                  }
                ]
              }
            ]
          },
          {
            "title": "Knowledge Graph and Brand Entity Building",
            "slug": "knowledge-graph",
            "href": "/services/search-ai-visibility/seo/knowledge-graph",
            "keywords": "Google Knowledge Graph India, brand entity SEO India, entity-based SEO India, Knowledge Panel India",
            "children": [
              {
                "title": "Wikidata Entity Creation",
                "slug": "wikidata",
                "href": "/services/search-ai-visibility/seo/knowledge-graph/wikidata",
                "keywords": "Wikidata brand entity India, Wikidata entity creation India"
              },
              {
                "title": "Google Business Profile Entity Linkage",
                "slug": "gbp-entity",
                "href": "/services/search-ai-visibility/seo/knowledge-graph/gbp-entity",
                "keywords": "Google Business Profile entity India, GBP Knowledge Graph linkage"
              },
              {
                "title": "Same-As Markup Across Authoritative Properties",
                "slug": "same-as-markup",
                "href": "/services/search-ai-visibility/seo/knowledge-graph/same-as-markup",
                "keywords": "same-as schema India, entity signal amplification SEO India"
              }
            ]
          }
        ]
      },
      {
        "title": "AI Search Visibility and Generative Engine Optimisation",
        "slug": "ai-visibility",
        "href": "/services/search-ai-visibility/ai-visibility/",
        "keywords": "AI visibility India, GEO optimisation India, generative engine optimisation India, rank in ChatGPT India, LLM visibility India",
        "children": [
          {
            "title": "AI and Agent Readiness Audit",
            "slug": "ai-readiness-audit",
            "href": "/services/search-ai-visibility/ai-visibility/ai-readiness-audit",
            "keywords": "AI readiness audit India, llms.txt India, AI crawler access India, is my website AI ready India",
            "children": [
              {
                "title": "llms.txt Creation and Deployment",
                "slug": "llms-txt",
                "href": "/services/search-ai-visibility/ai-visibility/ai-readiness-audit/llms-txt",
                "keywords": "llms.txt setup India, AI crawler index India, GPTBot ClaudeBot PerplexityBot access India",
                "children": [
                  {
                    "title": "Page Priority Mapping and Crawler Permission Instructions",
                    "slug": "page-priority",
                    "href": "/services/search-ai-visibility/ai-visibility/ai-readiness-audit/llms-txt/page-priority",
                    "keywords": "AI crawler permissions India, llms.txt page prioritisation India"
                  },
                  {
                    "title": "Crawler Access Verification Across GPTBot, ClaudeBot, and PerplexityBot",
                    "slug": "crawler-verification",
                    "href": "/services/search-ai-visibility/ai-visibility/ai-readiness-audit/llms-txt/crawler-verification",
                    "keywords": "GPTBot access India, ClaudeBot crawl India, AI bot access verification India"
                  }
                ]
              },
              {
                "title": "JavaScript Rendering Remediation for AI Crawlers",
                "slug": "js-rendering-ai",
                "href": "/services/search-ai-visibility/ai-visibility/ai-readiness-audit/js-rendering-ai",
                "keywords": "JavaScript SEO AI crawlers India, SSR for AI bots India, server-side rendering India",
                "children": [
                  {
                    "title": "SSR and SSG Implementation Guidance",
                    "slug": "ssr-ssg",
                    "href": "/services/search-ai-visibility/ai-visibility/ai-readiness-audit/js-rendering-ai/ssr-ssg",
                    "keywords": "server-side rendering India, static site generation SEO India"
                  },
                  {
                    "title": "Pre-Rendering Configuration for AI Crawlers",
                    "slug": "pre-rendering",
                    "href": "/services/search-ai-visibility/ai-visibility/ai-readiness-audit/js-rendering-ai/pre-rendering",
                    "keywords": "pre-rendering AI crawlers India, dynamic rendering SEO India"
                  }
                ]
              },
              {
                "title": "Semantic HTML and Entity Clarity Setup",
                "slug": "semantic-html-entity",
                "href": "/services/search-ai-visibility/ai-visibility/ai-readiness-audit/semantic-html-entity",
                "keywords": "semantic HTML India, entity clarity AI India, heading hierarchy SEO India",
                "children": [
                  {
                    "title": "Heading Hierarchy Restructure",
                    "slug": "heading-hierarchy",
                    "href": "/services/search-ai-visibility/ai-visibility/ai-readiness-audit/semantic-html-entity/heading-hierarchy",
                    "keywords": "heading tag structure SEO India, H1 H2 hierarchy India"
                  },
                  {
                    "title": "Entity Disambiguation Copy and Schema Signals",
                    "slug": "entity-schema",
                    "href": "/services/search-ai-visibility/ai-visibility/ai-readiness-audit/semantic-html-entity/entity-schema",
                    "keywords": "entity disambiguation India, entity schema signals India"
                  }
                ]
              },
              {
                "title": "AI Agent Readiness Verification",
                "slug": "agent-readiness",
                "href": "/services/search-ai-visibility/ai-visibility/ai-readiness-audit/agent-readiness",
                "keywords": "AI agent readiness India, LLM site audit India, post-implementation crawl check India",
                "children": [
                  {
                    "title": "Post-Implementation Crawl Simulation and Entity Recognition Test",
                    "slug": "crawl-simulation",
                    "href": "/services/search-ai-visibility/ai-visibility/ai-readiness-audit/agent-readiness/crawl-simulation",
                    "keywords": "AI crawl simulation India, LLM entity recognition test India"
                  }
                ]
              },
              {
                "title": "Agentic Traffic Monitoring and Page Visibility Audit",
                "slug": "agentic-traffic",
                "href": "/services/search-ai-visibility/ai-visibility/ai-readiness-audit/agentic-traffic",
                "keywords": "agentic traffic India, AI agent site visits India, ChatGPT crawl monitoring India, LLM traffic analytics India",
                "children": [
                  {
                    "title": "AI Agent Session Identification and Page-Level Access Reporting",
                    "slug": "agent-session-reporting",
                    "href": "/services/search-ai-visibility/ai-visibility/ai-readiness-audit/agentic-traffic/agent-session-reporting",
                    "keywords": "agentic session tracking India, AI bot page access India, LLM crawl report India"
                  },
                  {
                    "title": "Zero-Click Visibility Assessment and Content Gap Identification",
                    "slug": "zero-click-audit",
                    "href": "/services/search-ai-visibility/ai-visibility/ai-readiness-audit/agentic-traffic/zero-click-audit",
                    "keywords": "zero-click AI India, AI answer without click India, LLM content gap audit India"
                  }
                ]
              },
              {
                "title": "Schema Actions and Agentic Callability Setup",
                "slug": "schema-actions",
                "href": "/services/search-ai-visibility/ai-visibility/ai-readiness-audit/schema-actions",
                "keywords": "schema actions India, agentic schema India, BuyAction ReserveAction schema India, agent-ready website India",
                "children": [
                  {
                    "title": "BuyAction, ReserveAction, and ScheduleAction Schema Implementation",
                    "slug": "action-schema",
                    "href": "/services/search-ai-visibility/ai-visibility/ai-readiness-audit/schema-actions/action-schema",
                    "keywords": "BuyAction schema India, ReserveAction schema India, AI agent transactional schema India"
                  },
                  {
                    "title": "IndexNow and Real-Time Schema Validation Integration",
                    "slug": "indexnow-validation",
                    "href": "/services/search-ai-visibility/ai-visibility/ai-readiness-audit/schema-actions/indexnow-validation",
                    "keywords": "IndexNow India, real-time indexing India, schema drift detection India, schema validation automation India"
                  }
                ]
              }
            ]
          },
          {
            "title": "Generative Engine Optimisation (GEO)",
            "slug": "geo-optimisation",
            "href": "/services/search-ai-visibility/ai-visibility/geo-optimisation",
            "keywords": "generative engine optimisation India, GEO services India, get cited in ChatGPT India, AI citation building India",
            "children": [
              {
                "title": "Citation Authority Building for AI Search",
                "slug": "citation-authority",
                "href": "/services/search-ai-visibility/ai-visibility/geo-optimisation/citation-authority",
                "keywords": "AI citation authority India, ChatGPT citations India, Perplexity citations India",
                "children": [
                  {
                    "title": "Source Domain Identification Per AI Engine",
                    "slug": "source-domains",
                    "href": "/services/search-ai-visibility/ai-visibility/geo-optimisation/citation-authority/source-domains",
                    "keywords": "AI citation source domains India, Gemini citation sources India"
                  },
                  {
                    "title": "Expert Commentary and Data Seeding on High-Citation Domains",
                    "slug": "expert-seeding",
                    "href": "/services/search-ai-visibility/ai-visibility/geo-optimisation/citation-authority/expert-seeding",
                    "keywords": "expert commentary placement India, AI citation seeding India"
                  }
                ]
              },
              {
                "title": "Prompt Gap Analysis and Content Mapping",
                "slug": "prompt-gap-analysis",
                "href": "/services/search-ai-visibility/ai-visibility/geo-optimisation/prompt-gap-analysis",
                "keywords": "prompt gap analysis India, AI content gap India, buyer AI prompt research India",
                "children": [
                  {
                    "title": "Buyer Prompt Research Across ChatGPT, Perplexity, and Gemini",
                    "slug": "buyer-prompts",
                    "href": "/services/search-ai-visibility/ai-visibility/geo-optimisation/prompt-gap-analysis/buyer-prompts",
                    "keywords": "AI buyer prompt research India, ChatGPT prompt mapping India"
                  },
                  {
                    "title": "Content Brief Production for Unowned High-Value Prompts",
                    "slug": "prompt-briefs",
                    "href": "/services/search-ai-visibility/ai-visibility/geo-optimisation/prompt-gap-analysis/prompt-briefs",
                    "keywords": "AI content brief India, GEO content strategy India"
                  }
                ]
              },
              {
                "title": "E-E-A-T Amplification for AI Engines",
                "slug": "eeat-ai",
                "href": "/services/search-ai-visibility/ai-visibility/geo-optimisation/eeat-ai",
                "keywords": "E-E-A-T for AI search India, author credentials SEO India, expert citation building India",
                "children": [
                  {
                    "title": "Author Credentials and Methodology Documentation",
                    "slug": "author-credentials",
                    "href": "/services/search-ai-visibility/ai-visibility/geo-optimisation/eeat-ai/author-credentials",
                    "keywords": "author schema India, expert author SEO India"
                  },
                  {
                    "title": "Original Data Publication Strategy",
                    "slug": "original-data",
                    "href": "/services/search-ai-visibility/ai-visibility/geo-optimisation/eeat-ai/original-data",
                    "keywords": "original research India, proprietary data SEO India, citable data publication India"
                  }
                ]
              },
              {
                "title": "Digital PR and Offsite Brand Signal Building",
                "slug": "digital-pr",
                "href": "/services/search-ai-visibility/ai-visibility/geo-optimisation/digital-pr",
                "keywords": "digital PR India, AI citation PR India, brand mention building India, earned media AI India, LLM brand signal India",
                "children": [
                  {
                    "title": "AI-Cited Publisher and Media Placement Strategy",
                    "slug": "publisher-placement",
                    "href": "/services/search-ai-visibility/ai-visibility/geo-optimisation/digital-pr/publisher-placement",
                    "keywords": "media placement AI India, AI-cited publications India, B2B digital PR India, expert placement India"
                  },
                  {
                    "title": "Reddit, Quora, and Forum Participation for AI Signal Building",
                    "slug": "ugc-signals",
                    "href": "/services/search-ai-visibility/ai-visibility/geo-optimisation/digital-pr/ugc-signals",
                    "keywords": "Reddit SEO India, Quora brand presence India, forum AI signals India, user-generated brand mentions India"
                  },
                  {
                    "title": "Review Platform Presence on G2, Capterra, and Trustpilot",
                    "slug": "review-platforms",
                    "href": "/services/search-ai-visibility/ai-visibility/geo-optimisation/digital-pr/review-platforms",
                    "keywords": "G2 profile India, Capterra listing India, review platform SEO India, AI citation reviews India"
                  },
                  {
                    "title": "Listicle and Best-Of Placement Acquisition",
                    "slug": "listicle-placement",
                    "href": "/services/search-ai-visibility/ai-visibility/geo-optimisation/digital-pr/listicle-placement",
                    "keywords": "best of listicle India, top 10 list placement India, AI citation listicle India, brand recommendation AI India"
                  }
                ]
              },
              {
                "title": "Brand Co-Occurrence and Semantic Association Building",
                "slug": "brand-co-occurrence",
                "href": "/services/search-ai-visibility/ai-visibility/geo-optimisation/brand-co-occurrence",
                "keywords": "brand co-occurrence India, semantic association AI India, entity co-occurrence LLM India, AI brand association India",
                "children": [
                  {
                    "title": "Category Keyword and Brand Co-Occurrence Mapping",
                    "slug": "co-occurrence-mapping",
                    "href": "/services/search-ai-visibility/ai-visibility/geo-optimisation/brand-co-occurrence/co-occurrence-mapping",
                    "keywords": "brand keyword association India, category co-occurrence India, LLM brand mapping India"
                  },
                  {
                    "title": "Third-Party Content Seeding for Co-Occurrence Signals",
                    "slug": "content-seeding",
                    "href": "/services/search-ai-visibility/ai-visibility/geo-optimisation/brand-co-occurrence/content-seeding",
                    "keywords": "third-party content India, co-occurrence content strategy India, brand entity seeding India"
                  }
                ]
              },
              {
                "title": "Wikipedia and Wikidata Brand Entity Management",
                "slug": "wikipedia-wikidata",
                "href": "/services/search-ai-visibility/ai-visibility/geo-optimisation/wikipedia-wikidata",
                "keywords": "Wikipedia brand India, Wikidata brand entity India, LLM training signal India, knowledge graph brand India",
                "children": [
                  {
                    "title": "Wikipedia Article Creation and Notability Building",
                    "slug": "wikipedia-article",
                    "href": "/services/search-ai-visibility/ai-visibility/geo-optimisation/wikipedia-wikidata/wikipedia-article",
                    "keywords": "Wikipedia brand page India, Wikipedia article creation India, Wikipedia notability India"
                  },
                  {
                    "title": "Wikidata Entry Creation, Maintenance, and sameAs Linking",
                    "slug": "wikidata-entry",
                    "href": "/services/search-ai-visibility/ai-visibility/geo-optimisation/wikipedia-wikidata/wikidata-entry",
                    "keywords": "Wikidata entry India, Wikidata sameAs India, Wikidata brand management India"
                  }
                ]
              },
              {
                "title": "AI Hallucination Detection and Brand Correction",
                "slug": "hallucination-correction",
                "href": "/services/search-ai-visibility/ai-visibility/geo-optimisation/hallucination-correction",
                "keywords": "AI hallucination India, brand hallucination fix India, incorrect AI brand information India, LLM brand accuracy India",
                "children": [
                  {
                    "title": "Cross-LLM Brand Fact Audit (ChatGPT, Perplexity, Gemini, Claude)",
                    "slug": "brand-fact-audit",
                    "href": "/services/search-ai-visibility/ai-visibility/geo-optimisation/hallucination-correction/brand-fact-audit",
                    "keywords": "AI brand fact check India, LLM hallucination audit India, brand accuracy AI India"
                  },
                  {
                    "title": "Structured Data and Source Correction to Override Hallucinations",
                    "slug": "source-correction",
                    "href": "/services/search-ai-visibility/ai-visibility/geo-optimisation/hallucination-correction/source-correction",
                    "keywords": "hallucination fix India, brand data correction India, entity reconciliation India, AI brand override India"
                  },
                  {
                    "title": "Ongoing Hallucination Monitoring and Alert System",
                    "slug": "hallucination-monitoring",
                    "href": "/services/search-ai-visibility/ai-visibility/geo-optimisation/hallucination-correction/hallucination-monitoring",
                    "keywords": "brand hallucination monitoring India, AI inaccuracy alert India, LLM brand watch India"
                  }
                ]
              }
            ]
          },
          {
            "title": "Answer Engine Optimisation (AEO) and Featured Snippet Capture",
            "slug": "aeo",
            "href": "/services/search-ai-visibility/ai-visibility/aeo",
            "keywords": "answer engine optimisation India, featured snippet optimisation India, AI Overview optimisation India",
            "children": [
              {
                "title": "FAQ Schema Implementation and Rich Snippet Capture",
                "slug": "faq-schema",
                "href": "/services/search-ai-visibility/ai-visibility/aeo/faq-schema",
                "keywords": "FAQ schema India, rich snippet India, JSON-LD FAQ India, featured snippet optimisation India",
                "children": [
                  {
                    "title": "Question Research and JSON-LD Authoring",
                    "slug": "question-research",
                    "href": "/services/search-ai-visibility/ai-visibility/aeo/faq-schema/question-research",
                    "keywords": "question keyword research India, FAQ JSON-LD India"
                  },
                  {
                    "title": "Rich Results Validation and Search Console Monitoring",
                    "slug": "rich-results-monitoring",
                    "href": "/services/search-ai-visibility/ai-visibility/aeo/faq-schema/rich-results-monitoring",
                    "keywords": "rich results test India, Search Console rich snippet India"
                  }
                ]
              },
              {
                "title": "Answer-First Content Architecture",
                "slug": "answer-first-content",
                "href": "/services/search-ai-visibility/ai-visibility/aeo/answer-first-content",
                "keywords": "answer-first content India, inverted pyramid SEO India, featured snippet content India",
                "children": [
                  {
                    "title": "Core Answer Compression to 40-60 Words",
                    "slug": "answer-compression",
                    "href": "/services/search-ai-visibility/ai-visibility/aeo/answer-first-content/answer-compression",
                    "keywords": "direct answer SEO India, snippet-ready content India"
                  },
                  {
                    "title": "Depth Layering and Supporting Content Structure",
                    "slug": "depth-layering",
                    "href": "/services/search-ai-visibility/ai-visibility/aeo/answer-first-content/depth-layering",
                    "keywords": "content depth structure SEO India"
                  }
                ]
              },
              {
                "title": "Conversational and Long-Tail Keyword Optimisation",
                "slug": "conversational-keywords",
                "href": "/services/search-ai-visibility/ai-visibility/aeo/conversational-keywords",
                "keywords": "conversational keyword SEO India, long-tail keyword optimisation India, voice search SEO India",
                "children": [
                  {
                    "title": "PAA and Autocomplete Harvesting",
                    "slug": "paa-autocomplete",
                    "href": "/services/search-ai-visibility/ai-visibility/aeo/conversational-keywords/paa-autocomplete",
                    "keywords": "People Also Ask optimisation India, Google autocomplete SEO India"
                  },
                  {
                    "title": "Speakable Schema Deployment",
                    "slug": "speakable-schema",
                    "href": "/services/search-ai-visibility/ai-visibility/aeo/conversational-keywords/speakable-schema",
                    "keywords": "speakable schema India, voice SEO structured data India"
                  }
                ]
              },
              {
                "title": "AI Overview Presence Monitoring",
                "slug": "ai-overview-monitoring",
                "href": "/services/search-ai-visibility/ai-visibility/aeo/ai-overview-monitoring",
                "keywords": "AI Overview India, Google AI Overview monitoring India, SGE optimisation India",
                "children": [
                  {
                    "title": "Keyword-Level AI Overview Trigger Monitoring",
                    "slug": "trigger-monitoring",
                    "href": "/services/search-ai-visibility/ai-visibility/aeo/ai-overview-monitoring/trigger-monitoring",
                    "keywords": "AI Overview trigger India, SGE presence tracking India"
                  },
                  {
                    "title": "Citation Source Identification and Competitive Frequency Tracking",
                    "slug": "citation-tracking",
                    "href": "/services/search-ai-visibility/ai-visibility/aeo/ai-overview-monitoring/citation-tracking",
                    "keywords": "AI Overview citation tracking India, competitor AI Overview India"
                  }
                ]
              },
              {
                "title": "Multimodal Content Optimisation for AI Engines",
                "slug": "multimodal-content",
                "href": "/services/search-ai-visibility/ai-visibility/aeo/multimodal-content",
                "keywords": "multimodal SEO India, video transcript SEO India, podcast AI citation India, image alt text AI India, AI multimodal search India",
                "children": [
                  {
                    "title": "Video Transcript Creation and Indexable Markup",
                    "slug": "video-transcripts",
                    "href": "/services/search-ai-visibility/ai-visibility/aeo/multimodal-content/video-transcripts",
                    "keywords": "video transcript India, YouTube SEO AI India, indexable video content India, AI video citation India"
                  },
                  {
                    "title": "Podcast Transcript Optimisation and Structured Publishing",
                    "slug": "podcast-transcripts",
                    "href": "/services/search-ai-visibility/ai-visibility/aeo/multimodal-content/podcast-transcripts",
                    "keywords": "podcast transcript India, podcast SEO India, AI podcast citation India, audio content AI visibility India"
                  },
                  {
                    "title": "Image Alt Text, Caption, and Visual Schema for AI Parsability",
                    "slug": "image-schema",
                    "href": "/services/search-ai-visibility/ai-visibility/aeo/multimodal-content/image-schema",
                    "keywords": "image schema India, image alt text AI India, visual SEO AI India, image caption optimisation India"
                  }
                ]
              },
              {
                "title": "Solution and Use-Case Page Architecture for AI Relevance",
                "slug": "solution-pages",
                "href": "/services/search-ai-visibility/ai-visibility/aeo/solution-pages",
                "keywords": "solution page SEO India, use case page India, industry page AI India, AI personalised search India, role-based landing page India",
                "children": [
                  {
                    "title": "Industry-Specific and Role-Specific Landing Page Creation",
                    "slug": "industry-role-pages",
                    "href": "/services/search-ai-visibility/ai-visibility/aeo/solution-pages/industry-role-pages",
                    "keywords": "industry landing page India, role-based page India, AI citation solution page India, vertical SEO page India"
                  },
                  {
                    "title": "Integration and Partner Solution Page Optimisation",
                    "slug": "integration-pages",
                    "href": "/services/search-ai-visibility/ai-visibility/aeo/solution-pages/integration-pages",
                    "keywords": "integration page SEO India, partner solution page India, API documentation SEO India, AI integration citation India"
                  },
                  {
                    "title": "FAQ Hub Creation Covering Pricing, Features, and Comparisons",
                    "slug": "faq-hub",
                    "href": "/services/search-ai-visibility/ai-visibility/aeo/solution-pages/faq-hub",
                    "keywords": "FAQ hub India, pricing FAQ SEO India, product comparison page India, AI FAQ citation India"
                  }
                ]
              }
            ]
          },
          {
            "title": "AI Search Brand Authority and Offsite Presence",
            "slug": "brand-authority",
            "href": "/services/search-ai-visibility/ai-visibility/brand-authority",
            "keywords": "AI brand authority India, offsite AI signals India, LLM brand presence India, AI brand visibility India, brand mention AI India",
            "children": [
              {
                "title": "Brand Mention Audit Across AI-Cited Platforms",
                "slug": "mention-audit",
                "href": "/services/search-ai-visibility/ai-visibility/brand-authority/mention-audit",
                "keywords": "brand mention audit India, AI citation audit India, LLM brand mention tracking India",
                "children": [
                  {
                    "title": "Platform-by-Platform Brand Presence Mapping (Reddit, Quora, G2, Wikipedia)",
                    "slug": "platform-mapping",
                    "href": "/services/search-ai-visibility/ai-visibility/brand-authority/mention-audit/platform-mapping",
                    "keywords": "brand presence mapping India, Reddit brand India, G2 brand listing India, Wikipedia brand India"
                  },
                  {
                    "title": "Competitor Share-of-Mention Benchmarking",
                    "slug": "competitor-benchmarking",
                    "href": "/services/search-ai-visibility/ai-visibility/brand-authority/mention-audit/competitor-benchmarking",
                    "keywords": "share of mention India, competitor brand AI India, AI brand share benchmarking India"
                  }
                ]
              },
              {
                "title": "Authoritative Third-Party Profile Optimisation",
                "slug": "third-party-profiles",
                "href": "/services/search-ai-visibility/ai-visibility/brand-authority/third-party-profiles",
                "keywords": "Crunchbase India, LinkedIn brand India, third-party profile SEO India, brand profile AI India",
                "children": [
                  {
                    "title": "LinkedIn Company Page, Crunchbase, and Directory Profile Enrichment",
                    "slug": "profile-enrichment",
                    "href": "/services/search-ai-visibility/ai-visibility/brand-authority/third-party-profiles/profile-enrichment",
                    "keywords": "LinkedIn brand page India, Crunchbase profile India, business directory AI India"
                  },
                  {
                    "title": "NAP and Brand Fact Consistency Audit Across All Platforms",
                    "slug": "nap-consistency",
                    "href": "/services/search-ai-visibility/ai-visibility/brand-authority/third-party-profiles/nap-consistency",
                    "keywords": "brand consistency AI India, NAP audit AI India, brand fact accuracy India"
                  }
                ]
              },
              {
                "title": "Content Freshness and Recency Signal Management",
                "slug": "content-freshness",
                "href": "/services/search-ai-visibility/ai-visibility/brand-authority/content-freshness",
                "keywords": "content freshness AI India, LLM recency signal India, fresh content AI citation India",
                "children": [
                  {
                    "title": "Evergreen Content Update Schedule and Temporal Marker Implementation",
                    "slug": "evergreen-updates",
                    "href": "/services/search-ai-visibility/ai-visibility/brand-authority/content-freshness/evergreen-updates",
                    "keywords": "content update India, evergreen SEO India, temporal marker content India, date freshness AI India"
                  },
                  {
                    "title": "High-Velocity Publishing on AI-Indexed Platforms (LinkedIn, Reddit, YouTube)",
                    "slug": "platform-publishing",
                    "href": "/services/search-ai-visibility/ai-visibility/brand-authority/content-freshness/platform-publishing",
                    "keywords": "LinkedIn publishing AI India, Reddit content strategy India, YouTube SEO AI India, platform publishing India"
                  }
                ]
              },
              {
                "title": "AI Visibility Index and Unified Brand Intelligence Reporting",
                "slug": "ai-visibility-index",
                "href": "/services/search-ai-visibility/ai-visibility/brand-authority/ai-visibility-index",
                "keywords": "AI visibility index India, LLM brand report India, AI brand intelligence India, GEO performance dashboard India",
                "children": [
                  {
                    "title": "Cross-Platform AI Mention, Sentiment, and Accuracy Scoring",
                    "slug": "visibility-scoring",
                    "href": "/services/search-ai-visibility/ai-visibility/brand-authority/ai-visibility-index/visibility-scoring",
                    "keywords": "AI brand score India, LLM mention score India, AI sentiment brand India"
                  },
                  {
                    "title": "Monthly AI Visibility Report with SEO-to-GEO Attribution",
                    "slug": "monthly-report",
                    "href": "/services/search-ai-visibility/ai-visibility/brand-authority/ai-visibility-index/monthly-report",
                    "keywords": "AI visibility report India, GEO SEO attribution India, LLM brand performance India"
                  }
                ]
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "cap-2",
    "title": "Demand Generation",
    "slug": "demand-generation",
    "href": "/services/demand-generation/",
    "services": [
      {
        "title": "Inbound Lead Architecture",
        "slug": "inbound-lead-architecture",
        "href": "/services/demand-generation/inbound-lead-architecture",
        "keywords": "inbound lead generation India, website lead capture India, conversion rate optimisation India",
        "children": [
          {
            "title": "Landing Page and Conversion Rate Optimisation",
            "slug": "landing-page-cro",
            "href": "/services/demand-generation/inbound-lead-architecture/landing-page-cro",
            "keywords": "landing page optimisation India, CRO services India, conversion rate optimisation India",
            "children": [
              {
                "title": "Single-Action Page Design and CTA Optimisation",
                "slug": "single-action-pages",
                "href": "/services/demand-generation/inbound-lead-architecture/landing-page-cro/single-action-pages",
                "keywords": "high-converting landing page India, CTA optimisation India"
              },
              {
                "title": "Mobile Conversion Optimisation for Indian Users",
                "slug": "mobile-cro",
                "href": "/services/demand-generation/inbound-lead-architecture/landing-page-cro/mobile-cro",
                "keywords": "mobile landing page India, mobile CRO India"
              }
            ]
          },
          {
            "title": "Website Chatbot and Conversational Lead Capture",
            "slug": "website-chatbot",
            "href": "/services/demand-generation/inbound-lead-architecture/website-chatbot",
            "keywords": "website chatbot India, lead capture chatbot India, conversational lead generation India",
            "children": [
              {
                "title": "Qualification Logic and CRM Handoff Configuration",
                "slug": "qualification-crm",
                "href": "/services/demand-generation/inbound-lead-architecture/website-chatbot/qualification-crm",
                "keywords": "lead qualification bot India, CRM chatbot integration India"
              }
            ]
          },
          {
            "title": "Interactive Lead Magnet Development",
            "slug": "lead-magnets",
            "href": "/services/demand-generation/inbound-lead-architecture/lead-magnets",
            "keywords": "lead magnet India, ROI calculator India, AI readiness audit tool India, interactive lead tool India",
            "children": [
              {
                "title": "ROI Calculator and Compliance Checklist Tools",
                "slug": "roi-calculator",
                "href": "/services/demand-generation/inbound-lead-architecture/lead-magnets/roi-calculator",
                "keywords": "ROI calculator lead magnet India, compliance tool India"
              },
              {
                "title": "Webinar and Event Lead Funnel Setup",
                "slug": "webinar-funnels",
                "href": "/services/demand-generation/inbound-lead-architecture/lead-magnets/webinar-funnels",
                "keywords": "webinar lead generation India, event registration funnel India"
              }
            ]
          },
          {
            "title": "WhatsApp Business API Lead Integration",
            "slug": "whatsapp-lead-integration",
            "href": "/services/demand-generation/inbound-lead-architecture/whatsapp-lead-integration",
            "keywords": "WhatsApp lead capture India, WhatsApp Business API leads India, ad lead to WhatsApp India",
            "children": [
              {
                "title": "Ad Lead Form to WhatsApp Routing",
                "slug": "ad-routing",
                "href": "/services/demand-generation/inbound-lead-architecture/whatsapp-lead-integration/ad-routing",
                "keywords": "Facebook lead ads WhatsApp India, ad lead WhatsApp routing India"
              },
              {
                "title": "CRM Sync and Lead Assignment Automation",
                "slug": "crm-sync",
                "href": "/services/demand-generation/inbound-lead-architecture/whatsapp-lead-integration/crm-sync",
                "keywords": "CRM lead routing India, lead assignment automation India"
              }
            ]
          }
        ]
      },
      {
        "title": "Outbound and Paid Acquisition",
        "slug": "outbound-paid-acquisition",
        "href": "/services/demand-generation/outbound-paid-acquisition",
        "keywords": "outbound lead generation India, LinkedIn outreach India, cold email agency India, Google Ads India",
        "children": [
          {
            "title": "LinkedIn Outreach Automation",
            "slug": "linkedin-outreach",
            "href": "/services/demand-generation/outbound-paid-acquisition/linkedin-outreach",
            "keywords": "LinkedIn outreach automation India, LinkedIn B2B India, LinkedIn lead generation India",
            "children": [
              {
                "title": "ICP Targeting and Connection Request Sequences",
                "slug": "icp-sequences",
                "href": "/services/demand-generation/outbound-paid-acquisition/linkedin-outreach/icp-sequences",
                "keywords": "ICP LinkedIn India, LinkedIn connection sequence India"
              },
              {
                "title": "Reply Detection and CRM Routing",
                "slug": "reply-crm-routing",
                "href": "/services/demand-generation/outbound-paid-acquisition/linkedin-outreach/reply-crm-routing",
                "keywords": "LinkedIn reply automation India, LinkedIn CRM integration India"
              },
              {
                "title": "LinkedIn Content Scheduling and Posting Automation",
                "slug": "linkedin-content",
                "href": "/services/demand-generation/outbound-paid-acquisition/linkedin-outreach/linkedin-content",
                "keywords": "LinkedIn content automation India, LinkedIn posting schedule India, LinkedIn brand presence India",
                "children": [
                  {
                    "title": "Content Calendar Setup and Approval Workflow",
                    "slug": "calendar-approval",
                    "href": "/services/demand-generation/outbound-paid-acquisition/linkedin-outreach/linkedin-content/calendar-approval",
                    "keywords": "LinkedIn content calendar India, LinkedIn post approval workflow India"
                  }
                ]
              },
              {
                "title": "Instagram DM Automation",
                "slug": "instagram-dm",
                "href": "/services/demand-generation/outbound-paid-acquisition/linkedin-outreach/instagram-dm",
                "keywords": "Instagram DM automation India, Instagram lead generation India, Instagram bot India",
                "children": [
                  {
                    "title": "Trigger Setup, DM Flow Design, and Lead CRM Logging",
                    "slug": "trigger-crm",
                    "href": "/services/demand-generation/outbound-paid-acquisition/linkedin-outreach/instagram-dm/trigger-crm",
                    "keywords": "Instagram DM trigger India, Instagram lead CRM India"
                  }
                ]
              }
            ]
          },
          {
            "title": "Cold Email Sequencing and Deliverability",
            "slug": "cold-email",
            "href": "/services/demand-generation/outbound-paid-acquisition/cold-email",
            "keywords": "cold email agency India, cold email sequencing India, email deliverability India, B2B cold email India",
            "children": [
              {
                "title": "Domain Warm-Up and SPF/DKIM/DMARC Configuration",
                "slug": "domain-warmup",
                "href": "/services/demand-generation/outbound-paid-acquisition/cold-email/domain-warmup",
                "keywords": "email domain warm-up India, SPF DKIM DMARC setup India"
              },
              {
                "title": "AI-Personalised Copy at Scale",
                "slug": "ai-personalisation",
                "href": "/services/demand-generation/outbound-paid-acquisition/cold-email/ai-personalisation",
                "keywords": "AI email personalisation India, cold email AI India"
              },
              {
                "title": "Spam Score Check and Blacklist Status Audit",
                "slug": "spam-blacklist",
                "href": "/services/demand-generation/outbound-paid-acquisition/cold-email/spam-blacklist",
                "keywords": "email spam check India, email blacklist audit India"
              }
            ]
          },
          {
            "title": "Google Ads and Meta Ads Campaign Management",
            "slug": "paid-ads",
            "href": "/services/demand-generation/outbound-paid-acquisition/paid-ads",
            "keywords": "Google Ads India, Meta Ads India, PPC agency India, paid search India",
            "children": [
              {
                "title": "Lead Quality Optimisation and Conversion Tracking",
                "slug": "lead-quality",
                "href": "/services/demand-generation/outbound-paid-acquisition/paid-ads/lead-quality",
                "keywords": "lead quality optimisation India, Google Ads conversion tracking India"
              },
              {
                "title": "Intent-Based Retargeting Audiences",
                "slug": "retargeting",
                "href": "/services/demand-generation/outbound-paid-acquisition/paid-ads/retargeting",
                "keywords": "retargeting India, intent-based retargeting India, behavioural retargeting India"
              }
            ]
          }
        ]
      },
      {
        "title": "AI Lead Scoring, Nurturing, and Qualification",
        "slug": "ai-lead-nurturing",
        "href": "/services/demand-generation/ai-lead-nurturing",
        "keywords": "AI lead nurturing India, AI lead scoring India, automated lead nurturing India, AI sales funnel India",
        "children": [
          {
            "title": "AI Lead Scoring and Automated Routing",
            "slug": "lead-scoring",
            "href": "/services/demand-generation/ai-lead-nurturing/lead-scoring",
            "keywords": "AI lead scoring India, lead scoring model India, automated lead routing India",
            "children": [
              {
                "title": "Scoring Model Design and CRM Integration",
                "slug": "scoring-model",
                "href": "/services/demand-generation/ai-lead-nurturing/lead-scoring/scoring-model",
                "keywords": "lead scoring CRM India, signal-weighted scoring India"
              },
              {
                "title": "Threshold-Based Routing Rules",
                "slug": "routing-rules",
                "href": "/services/demand-generation/ai-lead-nurturing/lead-scoring/routing-rules",
                "keywords": "lead routing automation India, qualified lead escalation India"
              }
            ]
          },
          {
            "title": "Qualification Bot Deployment",
            "slug": "qualification-bot",
            "href": "/services/demand-generation/ai-lead-nurturing/qualification-bot",
            "keywords": "lead qualification bot India, WhatsApp qualification bot India, automated sales qualifier India",
            "children": [
              {
                "title": "Conversation Flow Design and Disqualification Logic",
                "slug": "flow-design",
                "href": "/services/demand-generation/ai-lead-nurturing/qualification-bot/flow-design",
                "keywords": "bot conversation flow India, lead disqualification automation India"
              },
              {
                "title": "Calendar Integration and CRM Handoff",
                "slug": "calendar-crm",
                "href": "/services/demand-generation/ai-lead-nurturing/qualification-bot/calendar-crm",
                "keywords": "meeting booking bot India, bot calendar integration India"
              }
            ]
          },
          {
            "title": "AI-Powered Lead Nurturing Sequences",
            "slug": "nurturing-sequences",
            "href": "/services/demand-generation/ai-lead-nurturing/nurturing-sequences",
            "keywords": "AI nurturing sequence India, automated follow-up India, behavioural trigger nurturing India",
            "children": [
              {
                "title": "Segment-Based Sequence Design and Trigger Logic",
                "slug": "segment-triggers",
                "href": "/services/demand-generation/ai-lead-nurturing/nurturing-sequences/segment-triggers",
                "keywords": "segmented nurture India, behavioural trigger email India"
              },
              {
                "title": "Cold Lead Reactivation System",
                "slug": "cold-lead-reactivation",
                "href": "/services/demand-generation/ai-lead-nurturing/nurturing-sequences/cold-lead-reactivation",
                "keywords": "cold lead reactivation India, dormant lead re-engagement India"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "cap-3",
    "title": "Knowledge & Applied AI",
    "slug": "knowledge-applied-ai",
    "href": "/services/knowledge-applied-ai/",
    "services": [
      {
        "title": "Custom RAG Systems and AI Knowledge Base",
        "slug": "rag-systems",
        "href": "/services/knowledge-applied-ai/rag-systems",
        "keywords": "RAG system India, custom RAG India, AI knowledge base India, document intelligence AI India",
        "children": [
          {
            "title": "RAG System Architecture and Deployment",
            "slug": "rag-architecture",
            "href": "/services/knowledge-applied-ai/rag-systems/rag-architecture",
            "keywords": "RAG system setup India, knowledge base AI India, AI document search India, vector database India",
            "children": [
              {
                "title": "Knowledge Base Ingestion and Structuring",
                "slug": "knowledge-base-ingestion",
                "href": "/services/knowledge-applied-ai/rag-systems/rag-architecture/knowledge-base-ingestion",
                "keywords": "knowledge base ingestion India, document AI indexing India, PDF AI search India",
                "children": [
                  {
                    "title": "Document Parsing and Chunking Strategy",
                    "slug": "document-parsing",
                    "href": "/services/knowledge-applied-ai/rag-systems/rag-architecture/knowledge-base-ingestion/document-parsing",
                    "keywords": "PDF Word Excel parsing AI India, document chunking India"
                  },
                  {
                    "title": "Vector Database Indexing",
                    "slug": "vector-indexing",
                    "href": "/services/knowledge-applied-ai/rag-systems/rag-architecture/knowledge-base-ingestion/vector-indexing",
                    "keywords": "vector database India, Pinecone Qdrant Weaviate India"
                  }
                ]
              },
              {
                "title": "Hybrid Retrieval Pipeline (Semantic + Keyword)",
                "slug": "hybrid-retrieval",
                "href": "/services/knowledge-applied-ai/rag-systems/rag-architecture/hybrid-retrieval",
                "keywords": "hybrid RAG India, semantic search India, BM25 keyword retrieval India",
                "children": [
                  {
                    "title": "Re-Ranking Layer and Retrieval Accuracy Benchmarking",
                    "slug": "re-ranking",
                    "href": "/services/knowledge-applied-ai/rag-systems/rag-architecture/hybrid-retrieval/re-ranking",
                    "keywords": "RAG re-ranking India, retrieval accuracy testing India"
                  }
                ]
              },
              {
                "title": "Domain-Tuned Embedding Models",
                "slug": "domain-embeddings",
                "href": "/services/knowledge-applied-ai/rag-systems/rag-architecture/domain-embeddings",
                "keywords": "domain-specific AI India, legal AI India, accounting AI India, compliance AI India",
                "children": [
                  {
                    "title": "Legal, Accounting, and Compliance-Specific Embedding Fine-Tuning",
                    "slug": "fine-tuning",
                    "href": "/services/knowledge-applied-ai/rag-systems/rag-architecture/domain-embeddings/fine-tuning",
                    "keywords": "legal AI embeddings India, CA firm AI India, compliance document AI India"
                  }
                ]
              },
              {
                "title": "Source Attribution and Hallucination Rate Benchmarking",
                "slug": "hallucination-benchmarking",
                "href": "/services/knowledge-applied-ai/rag-systems/rag-architecture/hallucination-benchmarking",
                "keywords": "AI hallucination reduction India, source attribution AI India, accurate AI answers India",
                "children": [
                  {
                    "title": "Citation Chain Implementation",
                    "slug": "citation-chain",
                    "href": "/services/knowledge-applied-ai/rag-systems/rag-architecture/hallucination-benchmarking/citation-chain",
                    "keywords": "AI answer citations India, document citation AI India"
                  },
                  {
                    "title": "Confidence Scoring Per AI Answer",
                    "slug": "confidence-scoring",
                    "href": "/services/knowledge-applied-ai/rag-systems/rag-architecture/hallucination-benchmarking/confidence-scoring",
                    "keywords": "AI confidence scoring India, answer reliability AI India"
                  }
                ]
              }
            ]
          },
          {
            "title": "Multi-Source RAG Integration",
            "slug": "multi-source-rag",
            "href": "/services/knowledge-applied-ai/rag-systems/multi-source-rag",
            "keywords": "multi-source RAG India, CRM AI integration India, accounting software AI India",
            "children": [
              {
                "title": "CRM, Email, and Document Storage Connector",
                "slug": "crm-email-connector",
                "href": "/services/knowledge-applied-ai/rag-systems/multi-source-rag/crm-email-connector",
                "keywords": "CRM AI connector India, document storage AI India"
              },
              {
                "title": "Accounting Software API Integration",
                "slug": "accounting-connector",
                "href": "/services/knowledge-applied-ai/rag-systems/multi-source-rag/accounting-connector",
                "keywords": "Tally AI India, Zoho Books AI India, accounting AI integration India"
              }
            ]
          }
        ]
      },
      {
        "title": "AI Assistant Deployment",
        "slug": "ai-assistant",
        "href": "/services/knowledge-applied-ai/ai-assistant",
        "keywords": "internal AI assistant India, AI chatbot for business India, customer-facing AI bot India, WhatsApp AI bot India",
        "children": [
          {
            "title": "Internal AI Assistant (WhatsApp and Web)",
            "slug": "internal-assistant",
            "href": "/services/knowledge-applied-ai/ai-assistant/internal-assistant",
            "keywords": "internal AI assistant India, WhatsApp AI for teams India, enterprise AI bot India",
            "children": [
              {
                "title": "Access Control Setup and Team Onboarding",
                "slug": "access-control",
                "href": "/services/knowledge-applied-ai/ai-assistant/internal-assistant/access-control",
                "keywords": "AI access control India, team AI onboarding India"
              }
            ]
          },
          {
            "title": "Customer-Facing AI Assistant",
            "slug": "customer-facing-assistant",
            "href": "/services/knowledge-applied-ai/ai-assistant/customer-facing-assistant",
            "keywords": "customer service AI India, AI chatbot for website India, tier-1 query automation India",
            "children": [
              {
                "title": "Tier-1 Query Scope Definition and Escalation Logic",
                "slug": "query-scope",
                "href": "/services/knowledge-applied-ai/ai-assistant/customer-facing-assistant/query-scope",
                "keywords": "customer AI escalation India, AI support scope India"
              },
              {
                "title": "Tone, Persona Configuration, and Live Deployment",
                "slug": "persona",
                "href": "/services/knowledge-applied-ai/ai-assistant/customer-facing-assistant/persona",
                "keywords": "AI persona India, branded AI assistant India"
              }
            ]
          },
          {
            "title": "Voice and WhatsApp AI Bot Deployment",
            "slug": "voice-whatsapp-bot",
            "href": "/services/knowledge-applied-ai/ai-assistant/voice-whatsapp-bot",
            "keywords": "WhatsApp AI bot India, voice AI bot India, vernacular AI India",
            "children": [
              {
                "title": "Vernacular Language Configuration",
                "slug": "vernacular",
                "href": "/services/knowledge-applied-ai/ai-assistant/voice-whatsapp-bot/vernacular",
                "keywords": "Hindi AI bot India, vernacular chatbot India, Hinglish AI India"
              },
              {
                "title": "RAG Backend Connection and Bot Channel Setup",
                "slug": "rag-channel-setup",
                "href": "/services/knowledge-applied-ai/ai-assistant/voice-whatsapp-bot/rag-channel-setup",
                "keywords": "WhatsApp bot RAG integration India, voice bot backend India, AI bot channel configuration India"
              }
            ]
          }
        ]
      },
      {
        "title": "Document Intelligence and Specialised Search",
        "slug": "document-intelligence",
        "href": "/services/knowledge-applied-ai/document-intelligence",
        "keywords": "document intelligence India, AI document processing India, legal document AI India, GST circular search AI India",
        "children": [
          {
            "title": "Document Intelligence Pipeline",
            "slug": "document-pipeline",
            "href": "/services/knowledge-applied-ai/document-intelligence/document-pipeline",
            "keywords": "document processing AI India, field extraction AI India, document anomaly detection India",
            "children": [
              {
                "title": "Field Extraction Template Design",
                "slug": "field-extraction",
                "href": "/services/knowledge-applied-ai/document-intelligence/document-pipeline/field-extraction",
                "keywords": "AI field extraction India, structured document output India"
              },
              {
                "title": "Anomaly Detection and Structured Summary Generation",
                "slug": "anomaly-detection",
                "href": "/services/knowledge-applied-ai/document-intelligence/document-pipeline/anomaly-detection",
                "keywords": "document anomaly detection AI India, AI document summary India"
              }
            ]
          },
          {
            "title": "Compliance and Regulatory Circular Search",
            "slug": "regulatory-search",
            "href": "/services/knowledge-applied-ai/document-intelligence/regulatory-search",
            "keywords": "GST circular search India, RBI circular AI India, ICAI notification AI India, ITR update tracking India",
            "children": [
              {
                "title": "New Circular Detection and Notification",
                "slug": "circular-alerts",
                "href": "/services/knowledge-applied-ai/document-intelligence/regulatory-search/circular-alerts",
                "keywords": "GST update alert India, RBI notification AI India"
              }
            ]
          },
          {
            "title": "Legal Precedent and Case Search",
            "slug": "legal-search",
            "href": "/services/knowledge-applied-ai/document-intelligence/legal-search",
            "keywords": "legal AI India, case law search AI India, legal precedent AI India, judgment search India",
            "children": [
              {
                "title": "Judgment Corpus Ingestion and Semantic Search",
                "slug": "judgment-corpus",
                "href": "/services/knowledge-applied-ai/document-intelligence/legal-search/judgment-corpus",
                "keywords": "AI judgment search India, legal corpus AI India"
              }
            ]
          },
          {
            "title": "Knowledge Gap Detection",
            "slug": "knowledge-gap-detection",
            "href": "/services/knowledge-applied-ai/document-intelligence/knowledge-gap-detection",
            "keywords": "knowledge gap analysis AI India, organisational knowledge gaps India",
            "children": [
              {
                "title": "Unanswered Query Logging and Monthly Gap Report",
                "slug": "gap-reporting",
                "href": "/services/knowledge-applied-ai/document-intelligence/knowledge-gap-detection/gap-reporting",
                "keywords": "AI knowledge gap report India, unanswered query tracking India"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "cap-4",
    "title": "Agentic Automation",
    "slug": "agentic-automation",
    "href": "/services/agentic-automation/",
    "services": [
      {
        "title": "Agentic Workflow Design and Deployment",
        "slug": "agentic-workflows",
        "href": "/services/agentic-automation/agentic-workflows",
        "keywords": "agentic AI India, AI agent automation India, autonomous AI workflows India, agentic workflow India",
        "children": [
          {
            "title": "Workflow Audit and Automation Scoping",
            "slug": "process-audit",
            "href": "/services/agentic-automation/agentic-workflows/process-audit",
            "keywords": "business process audit India, automation scoping India, process automation consulting India",
            "children": [
              {
                "title": "Manual Process Audit and Time-Cost Analysis",
                "slug": "manual-audit",
                "href": "/services/agentic-automation/agentic-workflows/process-audit/manual-audit",
                "keywords": "manual process audit India, business process mapping India, time-cost analysis India",
                "children": [
                  {
                    "title": "Task Logging, Error Rate Estimation, and Feasibility Scoring",
                    "slug": "feasibility-scoring",
                    "href": "/services/agentic-automation/agentic-workflows/process-audit/manual-audit/feasibility-scoring",
                    "keywords": "automation feasibility India, process error rate India"
                  }
                ]
              },
              {
                "title": "Quick-Win Automation Roadmap",
                "slug": "quick-win-roadmap",
                "href": "/services/agentic-automation/agentic-workflows/process-audit/quick-win-roadmap",
                "keywords": "automation roadmap India, quick win automation India, 30-day automation India",
                "children": [
                  {
                    "title": "Top Automations Ranked by Impact vs Effort",
                    "slug": "impact-effort-ranking",
                    "href": "/services/agentic-automation/agentic-workflows/process-audit/quick-win-roadmap/impact-effort-ranking",
                    "keywords": "automation prioritisation India, impact effort matrix India"
                  }
                ]
              },
              {
                "title": "System Integration and Data Flow Mapping",
                "slug": "integration-mapping",
                "href": "/services/agentic-automation/agentic-workflows/process-audit/integration-mapping",
                "keywords": "system integration mapping India, data flow audit India, API availability check India",
                "children": [
                  {
                    "title": "Tool Stack Audit and Integration Point Identification",
                    "slug": "tool-stack-audit",
                    "href": "/services/agentic-automation/agentic-workflows/process-audit/integration-mapping/tool-stack-audit",
                    "keywords": "tool stack audit India, CRM email accounting integration India"
                  }
                ]
              }
            ]
          },
          {
            "title": "Single-Agent Deployment",
            "slug": "single-agent",
            "href": "/services/agentic-automation/agentic-workflows/single-agent",
            "keywords": "single agent AI India, end-to-end AI agent India, AI agent deployment India",
            "children": [
              {
                "title": "Process Decomposition and Agent Mapping",
                "slug": "process-decomposition",
                "href": "/services/agentic-automation/agentic-workflows/single-agent/process-decomposition",
                "keywords": "process decomposition India, AI agent task mapping India, workflow documentation India",
                "children": [
                  {
                    "title": "Step-by-Step Agent Task Mapping Workshop",
                    "slug": "task-mapping-workshop",
                    "href": "/services/agentic-automation/agentic-workflows/single-agent/process-decomposition/task-mapping-workshop",
                    "keywords": "AI workflow workshop India, agent task mapping India"
                  },
                  {
                    "title": "Decision Point and External API Dependency Mapping",
                    "slug": "api-dependency-mapping",
                    "href": "/services/agentic-automation/agentic-workflows/single-agent/process-decomposition/api-dependency-mapping",
                    "keywords": "AI workflow API mapping India, external API dependency India"
                  }
                ]
              },
              {
                "title": "Agent Build, Tool Integration, and Live Deployment",
                "slug": "build-and-deploy",
                "href": "/services/agentic-automation/agentic-workflows/single-agent/build-and-deploy",
                "keywords": "AI agent build India, agent tool integration India"
              },
              {
                "title": "Human-in-the-Loop Escalation Design",
                "slug": "human-in-loop",
                "href": "/services/agentic-automation/agentic-workflows/single-agent/human-in-loop",
                "keywords": "human-in-the-loop AI India, AI escalation design India, edge case automation India",
                "children": [
                  {
                    "title": "Escalation Trigger Logic and Human Review Interface",
                    "slug": "escalation-logic",
                    "href": "/services/agentic-automation/agentic-workflows/single-agent/human-in-loop/escalation-logic",
                    "keywords": "AI escalation trigger India, human review AI India"
                  }
                ]
              }
            ]
          },
          {
            "title": "Multi-Agent AI Systems and Pipelines",
            "slug": "multi-agent-systems",
            "href": "/services/agentic-automation/agentic-workflows/multi-agent-systems",
            "keywords": "multi-agent AI India, AI pipeline automation India, autonomous AI agents India",
            "children": [
              {
                "title": "Multi-Step Agentic Pipeline Architecture",
                "slug": "pipeline-architecture",
                "href": "/services/agentic-automation/agentic-workflows/multi-agent-systems/pipeline-architecture",
                "keywords": "AI pipeline architecture India, agent chain design India, multi-agent orchestration India",
                "children": [
                  {
                    "title": "Inter-Agent Communication Protocol and Orchestration Layer",
                    "slug": "orchestration",
                    "href": "/services/agentic-automation/agentic-workflows/multi-agent-systems/pipeline-architecture/orchestration",
                    "keywords": "AI orchestration layer India, agent communication protocol India"
                  },
                  {
                    "title": "Error Handling and Retry Logic",
                    "slug": "error-handling",
                    "href": "/services/agentic-automation/agentic-workflows/multi-agent-systems/pipeline-architecture/error-handling",
                    "keywords": "AI error handling India, agent retry logic India"
                  }
                ]
              },
              {
                "title": "Agent Memory and Context Persistence",
                "slug": "agent-memory",
                "href": "/services/agentic-automation/agentic-workflows/multi-agent-systems/agent-memory",
                "keywords": "agent memory AI India, stateful AI agent India, context persistence AI India",
                "children": [
                  {
                    "title": "Short-Term Session Memory and Long-Term Interaction History",
                    "slug": "session-history",
                    "href": "/services/agentic-automation/agentic-workflows/multi-agent-systems/agent-memory/session-history",
                    "keywords": "AI session memory India, long-term AI memory India"
                  }
                ]
              },
              {
                "title": "External Tool and API Integration",
                "slug": "tool-api-integration",
                "href": "/services/agentic-automation/agentic-workflows/multi-agent-systems/tool-api-integration",
                "keywords": "AI CRM integration India, AI accounting integration India, AI calendar booking India",
                "children": [
                  {
                    "title": "CRM, Calendar, and WhatsApp Messaging Integration",
                    "slug": "crm-calendar-whatsapp",
                    "href": "/services/agentic-automation/agentic-workflows/multi-agent-systems/tool-api-integration/crm-calendar-whatsapp",
                    "keywords": "AI CRM write access India, agent WhatsApp India, AI calendar India"
                  },
                  {
                    "title": "Document Storage and Accounting Software Integration",
                    "slug": "document-accounting",
                    "href": "/services/agentic-automation/agentic-workflows/multi-agent-systems/tool-api-integration/document-accounting",
                    "keywords": "AI document storage India, agent accounting software India"
                  }
                ]
              }
            ]
          },
          {
            "title": "AI Agent Monitoring and Reliability",
            "slug": "agent-monitoring",
            "href": "/services/agentic-automation/agentic-workflows/agent-monitoring",
            "keywords": "AI agent monitoring India, AI workflow reliability India, agent performance tracking India",
            "children": [
              {
                "title": "Agent Performance Logging and Audit Trails",
                "slug": "performance-logging",
                "href": "/services/agentic-automation/agentic-workflows/agent-monitoring/performance-logging",
                "keywords": "AI agent logging India, decision audit trail India, compliance AI logs India",
                "children": [
                  {
                    "title": "Step-Level Logging Infrastructure and Output Archive",
                    "slug": "logging-infrastructure",
                    "href": "/services/agentic-automation/agentic-workflows/agent-monitoring/performance-logging/logging-infrastructure",
                    "keywords": "AI step logging India, agent output archive India"
                  }
                ]
              },
              {
                "title": "Failure Detection and Recovery",
                "slug": "failure-detection",
                "href": "/services/agentic-automation/agentic-workflows/agent-monitoring/failure-detection",
                "keywords": "AI failure detection India, agent fallback India, AI error recovery India",
                "children": [
                  {
                    "title": "Network Timeout, Rate Limit, and Unexpected Input Handling",
                    "slug": "timeout-ratelimit",
                    "href": "/services/agentic-automation/agentic-workflows/agent-monitoring/failure-detection/timeout-ratelimit",
                    "keywords": "API rate limit AI India, agent timeout handling India"
                  },
                  {
                    "title": "Human Operator Alerting on Unrecoverable Failure",
                    "slug": "operator-alerting",
                    "href": "/services/agentic-automation/agentic-workflows/agent-monitoring/failure-detection/operator-alerting",
                    "keywords": "AI failure alert India, human escalation AI India"
                  }
                ]
              },
              {
                "title": "Monthly Agent Improvement Cycles",
                "slug": "improvement-cycles",
                "href": "/services/agentic-automation/agentic-workflows/agent-monitoring/improvement-cycles",
                "keywords": "AI agent improvement India, agent accuracy optimisation India, escalation rate reduction India",
                "children": [
                  {
                    "title": "Accuracy Drift Detection and Prompt Refinement",
                    "slug": "accuracy-drift",
                    "href": "/services/agentic-automation/agentic-workflows/agent-monitoring/improvement-cycles/accuracy-drift",
                    "keywords": "AI accuracy drift India, agent prompt refinement India"
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        "title": "Core Business Automation",
        "slug": "core-automation",
        "href": "/services/agentic-automation/core-automation",
        "keywords": "business process automation India, document collection automation India, CRM automation India, invoice automation India",
        "children": [
          {
            "title": "Document Collection Automation",
            "slug": "document-collection",
            "href": "/services/agentic-automation/core-automation/document-collection",
            "keywords": "document collection bot India, WhatsApp document automation India, client document collection India",
            "children": [
              {
                "title": "WhatsApp Bot Flow Design and Document Validation Logic",
                "slug": "whatsapp-flow",
                "href": "/services/agentic-automation/core-automation/document-collection/whatsapp-flow",
                "keywords": "WhatsApp document bot India, document validation automation India"
              },
              {
                "title": "File Naming, Storage Routing, and CRM Status Update",
                "slug": "filing-crm",
                "href": "/services/agentic-automation/core-automation/document-collection/filing-crm",
                "keywords": "automated file storage India, CRM document status India"
              }
            ]
          },
          {
            "title": "Compliance Reminder and Deadline Alert System",
            "slug": "compliance-reminders",
            "href": "/services/agentic-automation/core-automation/compliance-reminders",
            "keywords": "GST reminder automation India, ITR deadline reminder India, compliance alert bot India",
            "children": [
              {
                "title": "Configurable Pre-Deadline Alert Intervals (WhatsApp and Email)",
                "slug": "multi-channel-alerts",
                "href": "/services/agentic-automation/core-automation/compliance-reminders/multi-channel-alerts",
                "keywords": "multi-channel compliance alert India, pre-deadline WhatsApp email India"
              },
              {
                "title": "Escalation on Non-Acknowledgement",
                "slug": "escalation",
                "href": "/services/agentic-automation/core-automation/compliance-reminders/escalation",
                "keywords": "compliance escalation automation India, acknowledgement tracking India"
              }
            ]
          },
          {
            "title": "CRM Auto-Update Pipeline",
            "slug": "crm-auto-update",
            "href": "/services/agentic-automation/core-automation/crm-auto-update",
            "keywords": "CRM automation India, automatic CRM update India, call email WhatsApp CRM logging India",
            "children": [
              {
                "title": "Call, Email, and WhatsApp Message CRM Logging",
                "slug": "logging",
                "href": "/services/agentic-automation/core-automation/crm-auto-update/logging",
                "keywords": "CRM call logging India, email CRM sync India, WhatsApp CRM integration India"
              },
              {
                "title": "Stage Trigger Rules and Duplicate Detection",
                "slug": "stage-triggers",
                "href": "/services/agentic-automation/core-automation/crm-auto-update/stage-triggers",
                "keywords": "CRM pipeline automation India, duplicate lead detection India"
              }
            ]
          },
          {
            "title": "Invoice, Billing, and Payment Automation",
            "slug": "invoice-billing",
            "href": "/services/agentic-automation/core-automation/invoice-billing",
            "keywords": "invoice automation India, billing automation India, payment reminder automation India",
            "children": [
              {
                "title": "Milestone-Triggered Invoice Generation",
                "slug": "milestone-invoicing",
                "href": "/services/agentic-automation/core-automation/invoice-billing/milestone-invoicing",
                "keywords": "milestone invoice automation India, automated invoice generation India"
              },
              {
                "title": "Escalating Payment Reminder and Reconciliation",
                "slug": "payment-reconciliation",
                "href": "/services/agentic-automation/core-automation/invoice-billing/payment-reconciliation",
                "keywords": "payment reminder automation India, invoice reconciliation India"
              }
            ]
          },
          {
            "title": "HR and Onboarding Automation",
            "slug": "hr-onboarding",
            "href": "/services/agentic-automation/core-automation/hr-onboarding",
            "keywords": "HR automation India, onboarding automation India, offer letter automation India, employee onboarding bot India",
            "children": [
              {
                "title": "Offer Letter Generation and Document Collection Bot",
                "slug": "offer-doc-collection",
                "href": "/services/agentic-automation/core-automation/hr-onboarding/offer-doc-collection",
                "keywords": "offer letter automation India, HR document bot India"
              },
              {
                "title": "Training Delivery and Milestone Check-In Automation",
                "slug": "training-milestones",
                "href": "/services/agentic-automation/core-automation/hr-onboarding/training-milestones",
                "keywords": "training automation India, onboarding milestone tracking India"
              }
            ]
          },
          {
            "title": "Reporting and Reconciliation Automation",
            "slug": "reporting-reconciliation",
            "href": "/services/agentic-automation/core-automation/reporting-reconciliation",
            "keywords": "reporting automation India, reconciliation automation India, automated business report India",
            "children": [
              {
                "title": "Multi-Source Data Pull and Anomaly Flagging",
                "slug": "data-pull-anomaly",
                "href": "/services/agentic-automation/core-automation/reporting-reconciliation/data-pull-anomaly",
                "keywords": "automated data pull India, AI anomaly detection India"
              },
              {
                "title": "Formatted Summary Report and Scheduled Delivery",
                "slug": "report-delivery",
                "href": "/services/agentic-automation/core-automation/reporting-reconciliation/report-delivery",
                "keywords": "automated report delivery India, scheduled business report India"
              }
            ]
          },
          {
            "title": "RPA (Robotic Process Automation)",
            "slug": "rpa",
            "href": "/services/agentic-automation/core-automation/rpa",
            "keywords": "RPA services India, robotic process automation India, rule-based automation India",
            "children": [
              {
                "title": "RPA Bot Build for Data Entry and Portal Submissions",
                "slug": "rpa-bot-build",
                "href": "/services/agentic-automation/core-automation/rpa/rpa-bot-build",
                "keywords": "RPA bot India, data entry automation India, portal submission bot India"
              }
            ]
          }
        ]
      },
      {
        "title": "Conversational and Omnichannel Automation",
        "slug": "conversational-automation",
        "href": "/services/agentic-automation/conversational-automation",
        "keywords": "WhatsApp automation India, email automation India, omnichannel automation India, outreach automation India",
        "children": [
          {
            "title": "WhatsApp Business Automation",
            "slug": "whatsapp-automation",
            "href": "/services/agentic-automation/conversational-automation/whatsapp-automation",
            "keywords": "WhatsApp automation for business India, WhatsApp Business API India, WhatsApp chatbot India",
            "children": [
              {
                "title": "WhatsApp Business API Provisioning",
                "slug": "api-provisioning",
                "href": "/services/agentic-automation/conversational-automation/whatsapp-automation/api-provisioning",
                "keywords": "WhatsApp Business API setup India, BSP setup India, WhatsApp template approval India",
                "children": [
                  {
                    "title": "BSP Selection, Phone Number Verification, and Template Approval",
                    "slug": "bsp-verification",
                    "href": "/services/agentic-automation/conversational-automation/whatsapp-automation/api-provisioning/bsp-verification",
                    "keywords": "WhatsApp BSP India, WhatsApp business verification India"
                  }
                ]
              },
              {
                "title": "CRM and WhatsApp Bi-Directional Sync",
                "slug": "crm-sync",
                "href": "/services/agentic-automation/conversational-automation/whatsapp-automation/crm-sync",
                "keywords": "WhatsApp CRM sync India, WhatsApp message CRM logging India, CRM WhatsApp integration India",
                "children": [
                  {
                    "title": "Contact Record Enrichment from WhatsApp Interaction Data",
                    "slug": "enrichment",
                    "href": "/services/agentic-automation/conversational-automation/whatsapp-automation/crm-sync/enrichment",
                    "keywords": "CRM contact enrichment India, WhatsApp data CRM India"
                  }
                ]
              },
              {
                "title": "WhatsApp Lead Capture and Qualification Flow",
                "slug": "lead-qualification",
                "href": "/services/agentic-automation/conversational-automation/whatsapp-automation/lead-qualification",
                "keywords": "WhatsApp lead capture India, WhatsApp sales bot India, WhatsApp qualification flow India",
                "children": [
                  {
                    "title": "Qualification Logic, Non-Fit Routing, and Sales Notification",
                    "slug": "routing",
                    "href": "/services/agentic-automation/conversational-automation/whatsapp-automation/lead-qualification/routing",
                    "keywords": "WhatsApp lead routing India, qualified lead notification India"
                  }
                ]
              },
              {
                "title": "WhatsApp Drip Automation Sequences",
                "slug": "drip-sequences",
                "href": "/services/agentic-automation/conversational-automation/whatsapp-automation/drip-sequences",
                "keywords": "WhatsApp drip campaign India, WhatsApp nurture sequence India, WhatsApp follow-up automation India",
                "children": [
                  {
                    "title": "Trigger Event Configuration and Timing Logic",
                    "slug": "trigger-timing",
                    "href": "/services/agentic-automation/conversational-automation/whatsapp-automation/drip-sequences/trigger-timing",
                    "keywords": "WhatsApp trigger automation India, drip sequence timing India"
                  },
                  {
                    "title": "Opt-Out Handling",
                    "slug": "opt-out",
                    "href": "/services/agentic-automation/conversational-automation/whatsapp-automation/drip-sequences/opt-out",
                    "keywords": "WhatsApp opt-out India, GDPR WhatsApp India"
                  }
                ]
              },
              {
                "title": "WhatsApp Appointment Booking and Payment Automation",
                "slug": "booking-payment",
                "href": "/services/agentic-automation/conversational-automation/whatsapp-automation/booking-payment",
                "keywords": "WhatsApp appointment booking India, WhatsApp payment India, Razorpay WhatsApp India",
                "children": [
                  {
                    "title": "Calendar Integration, Confirmation, and Reschedule Flow",
                    "slug": "calendar-reschedule",
                    "href": "/services/agentic-automation/conversational-automation/whatsapp-automation/booking-payment/calendar-reschedule",
                    "keywords": "WhatsApp calendar booking India, appointment reschedule WhatsApp India"
                  },
                  {
                    "title": "Razorpay and PayU Payment Link Generation and CRM Update",
                    "slug": "payment-crm",
                    "href": "/services/agentic-automation/conversational-automation/whatsapp-automation/booking-payment/payment-crm",
                    "keywords": "WhatsApp Razorpay India, PayU WhatsApp India"
                  }
                ]
              },
              {
                "title": "WhatsApp Broadcast Segmentation and Campaign Management",
                "slug": "broadcast-campaigns",
                "href": "/services/agentic-automation/conversational-automation/whatsapp-automation/broadcast-campaigns",
                "keywords": "WhatsApp broadcast India, WhatsApp campaign management India, WhatsApp segmentation India",
                "children": [
                  {
                    "title": "CRM Tag-Based Audience Segmentation and Template Performance Tracking",
                    "slug": "segmentation-tracking",
                    "href": "/services/agentic-automation/conversational-automation/whatsapp-automation/broadcast-campaigns/segmentation-tracking",
                    "keywords": "WhatsApp audience segmentation India, WhatsApp template analytics India"
                  }
                ]
              }
            ]
          },
          {
            "title": "Email Automation and Deliverability",
            "slug": "email-automation",
            "href": "/services/agentic-automation/conversational-automation/email-automation",
            "keywords": "email automation India, cold email setup India, drip campaign automation India, email sequence India",
            "children": [
              {
                "title": "Cold Email Sequencing and Domain Deliverability",
                "slug": "cold-email-deliverability",
                "href": "/services/agentic-automation/conversational-automation/email-automation/cold-email-deliverability",
                "keywords": "cold email India, email deliverability India, domain warm-up India, SPF DKIM DMARC India",
                "children": [
                  {
                    "title": "Sending Domain Setup and Warm-Up Schedule",
                    "slug": "domain-warmup",
                    "href": "/services/agentic-automation/conversational-automation/email-automation/cold-email-deliverability/domain-warmup",
                    "keywords": "email domain warm-up India, cold email domain India"
                  },
                  {
                    "title": "Spam Score Check and Blacklist Status Audit",
                    "slug": "spam-blacklist",
                    "href": "/services/agentic-automation/conversational-automation/email-automation/cold-email-deliverability/spam-blacklist",
                    "keywords": "email spam check India, email blacklist audit India"
                  }
                ]
              },
              {
                "title": "Drip Campaign Setup and Management",
                "slug": "drip-campaigns",
                "href": "/services/agentic-automation/conversational-automation/email-automation/drip-campaigns",
                "keywords": "drip campaign India, behavioural email automation India, triggered email India",
                "children": [
                  {
                    "title": "Trigger Event Definition and Segment Logic",
                    "slug": "trigger-segment",
                    "href": "/services/agentic-automation/conversational-automation/email-automation/drip-campaigns/trigger-segment",
                    "keywords": "email trigger automation India, segmented drip India"
                  },
                  {
                    "title": "A/B Testing for Subject Lines and CTAs",
                    "slug": "ab-testing",
                    "href": "/services/agentic-automation/conversational-automation/email-automation/drip-campaigns/ab-testing",
                    "keywords": "email A/B testing India, subject line testing India"
                  }
                ]
              },
              {
                "title": "Transactional Email Triggers",
                "slug": "transactional-email",
                "href": "/services/agentic-automation/conversational-automation/email-automation/transactional-email",
                "keywords": "transactional email India, invoice email automation India, confirmation email India",
                "children": [
                  {
                    "title": "Event Trigger Mapping and Delivery Confirmation Logging",
                    "slug": "trigger-logging",
                    "href": "/services/agentic-automation/conversational-automation/email-automation/transactional-email/trigger-logging",
                    "keywords": "email trigger mapping India, transactional email logging India"
                  }
                ]
              },
              {
                "title": "Newsletter and Broadcast Automation",
                "slug": "newsletter-broadcast",
                "href": "/services/agentic-automation/conversational-automation/email-automation/newsletter-broadcast",
                "keywords": "newsletter automation India, email broadcast India, scheduled email India",
                "children": [
                  {
                    "title": "Audience Segmentation, Schedule Setup, and Broadcast Performance Tracking",
                    "slug": "segment-schedule-tracking",
                    "href": "/services/agentic-automation/conversational-automation/email-automation/newsletter-broadcast/segment-schedule-tracking",
                    "keywords": "email newsletter segmentation India, broadcast schedule automation India"
                  }
                ]
              }
            ]
          },
          {
            "title": "SMS and Omnichannel Messaging Automation",
            "slug": "sms-omnichannel",
            "href": "/services/agentic-automation/conversational-automation/sms-omnichannel",
            "keywords": "SMS automation India, omnichannel messaging India, transactional SMS India",
            "children": [
              {
                "title": "SMS Transactional Automation",
                "slug": "sms-automation",
                "href": "/services/agentic-automation/conversational-automation/sms-omnichannel/sms-automation",
                "keywords": "SMS automation India, OTP SMS India, appointment reminder SMS India",
                "children": [
                  {
                    "title": "DLT Registration and OTP Flow Setup",
                    "slug": "dlt-otp",
                    "href": "/services/agentic-automation/conversational-automation/sms-omnichannel/sms-automation/dlt-otp",
                    "keywords": "DLT registration India, SMS OTP flow India"
                  },
                  {
                    "title": "Appointment Reminder and Payment Confirmation SMS",
                    "slug": "reminder-payment-sms",
                    "href": "/services/agentic-automation/conversational-automation/sms-omnichannel/sms-automation/reminder-payment-sms",
                    "keywords": "SMS appointment reminder India, payment confirmation SMS India"
                  }
                ]
              },
              {
                "title": "Omnichannel Inbox Consolidation",
                "slug": "omnichannel-inbox",
                "href": "/services/agentic-automation/conversational-automation/sms-omnichannel/omnichannel-inbox",
                "keywords": "omnichannel inbox India, unified messaging India, WhatsApp email Instagram SMS unified India",
                "children": [
                  {
                    "title": "Contact Record Linkage Across Channels and Team Assignment Rules",
                    "slug": "contact-assignment",
                    "href": "/services/agentic-automation/conversational-automation/sms-omnichannel/omnichannel-inbox/contact-assignment",
                    "keywords": "omnichannel contact management India, team inbox assignment India"
                  }
                ]
              },
              {
                "title": "Multi-Channel Drip Orchestration",
                "slug": "multi-channel-drip",
                "href": "/services/agentic-automation/conversational-automation/sms-omnichannel/multi-channel-drip",
                "keywords": "multi-channel drip India, omnichannel nurture India, cross-channel automation India",
                "children": [
                  {
                    "title": "Channel-Adaptive Sequence Logic and Cross-Platform Timing",
                    "slug": "channel-adaptive",
                    "href": "/services/agentic-automation/conversational-automation/sms-omnichannel/multi-channel-drip/channel-adaptive",
                    "keywords": "channel-adaptive automation India, omnichannel sequence India"
                  }
                ]
              }
            ]
          },
          {
            "title": "LinkedIn and Social Outreach Automation",
            "slug": "social-outreach",
            "href": "/services/agentic-automation/conversational-automation/social-outreach",
            "keywords": "LinkedIn outreach automation India, social media automation India, cross-platform content India",
            "children": [
              {
                "title": "LinkedIn Connection Request and Message Sequences",
                "slug": "linkedin-sequences",
                "href": "/services/agentic-automation/conversational-automation/social-outreach/linkedin-sequences",
                "keywords": "LinkedIn sequence automation India, LinkedIn message automation India, B2B LinkedIn India",
                "children": [
                  {
                    "title": "ICP Targeting Criteria and Follow-Up Message Sequence",
                    "slug": "icp-followup",
                    "href": "/services/agentic-automation/conversational-automation/social-outreach/linkedin-sequences/icp-followup",
                    "keywords": "LinkedIn ICP targeting India, LinkedIn follow-up automation India"
                  },
                  {
                    "title": "Reply Detection and Positive Response CRM Routing",
                    "slug": "reply-routing",
                    "href": "/services/agentic-automation/conversational-automation/social-outreach/linkedin-sequences/reply-routing",
                    "keywords": "LinkedIn reply detection India, LinkedIn CRM routing India"
                  }
                ]
              },
              {
                "title": "LinkedIn Post Generation and Scheduling",
                "slug": "linkedin-posts",
                "href": "/services/agentic-automation/conversational-automation/social-outreach/linkedin-posts",
                "keywords": "LinkedIn post automation India, AI LinkedIn content India, LinkedIn brand voice India",
                "children": [
                  {
                    "title": "Brand Voice Calibration and Topic Brief Input",
                    "slug": "brand-voice",
                    "href": "/services/agentic-automation/conversational-automation/social-outreach/linkedin-posts/brand-voice",
                    "keywords": "LinkedIn brand voice India, AI brand voice calibration India"
                  },
                  {
                    "title": "AI Draft Generation, Human Review, and Publishing",
                    "slug": "draft-publish",
                    "href": "/services/agentic-automation/conversational-automation/social-outreach/linkedin-posts/draft-publish",
                    "keywords": "LinkedIn AI draft India, LinkedIn post review workflow India"
                  }
                ]
              },
              {
                "title": "Cross-Platform Content Repurposing Automation",
                "slug": "content-repurposing",
                "href": "/services/agentic-automation/conversational-automation/social-outreach/content-repurposing",
                "keywords": "content repurposing automation India, blog to LinkedIn WhatsApp India",
                "children": [
                  {
                    "title": "Blog-to-LinkedIn and LinkedIn-to-WhatsApp Distribution Workflow",
                    "slug": "distribution-workflow",
                    "href": "/services/agentic-automation/conversational-automation/social-outreach/content-repurposing/distribution-workflow",
                    "keywords": "blog LinkedIn WhatsApp automation India, content distribution India"
                  },
                  {
                    "title": "Source Content Adaptation to LinkedIn, WhatsApp, and Email Formats",
                    "slug": "format-adaptation",
                    "href": "/services/agentic-automation/conversational-automation/social-outreach/content-repurposing/format-adaptation",
                    "keywords": "content format adaptation India, multi-channel content India"
                  }
                ]
              }
            ]
          },
          {
            "title": "AI Content Production and Distribution Automation",
            "slug": "content-automation",
            "href": "/services/agentic-automation/conversational-automation/content-automation",
            "keywords": "AI content creation India, content automation India, AI blog writing India, content calendar automation India, content repurposing India",
            "children": [
              {
                "title": "AI-Assisted Blog and Long-Form Content Production",
                "slug": "blog-content",
                "href": "/services/agentic-automation/conversational-automation/content-automation/blog-content",
                "keywords": "AI blog writing India, SEO content production India, AI article generation India",
                "children": [
                  {
                    "title": "Keyword Brief Input and AI First-Draft Generation",
                    "slug": "keyword-draft",
                    "href": "/services/agentic-automation/conversational-automation/content-automation/blog-content/keyword-draft",
                    "keywords": "AI content brief India, AI first draft India"
                  },
                  {
                    "title": "Editorial Review and CMS Publishing Workflow",
                    "slug": "editorial-cms",
                    "href": "/services/agentic-automation/conversational-automation/content-automation/blog-content/editorial-cms",
                    "keywords": "CMS publishing automation India, editorial workflow India"
                  }
                ]
              },
              {
                "title": "Content Calendar Automation",
                "slug": "content-calendar",
                "href": "/services/agentic-automation/conversational-automation/content-automation/content-calendar",
                "keywords": "content calendar automation India, monthly content planning India, automated content scheduling India",
                "children": [
                  {
                    "title": "Monthly Topic Plan Generation and Brief Auto-Creation",
                    "slug": "topic-brief-generation",
                    "href": "/services/agentic-automation/conversational-automation/content-automation/content-calendar/topic-brief-generation",
                    "keywords": "AI content planning India, automated content brief India"
                  },
                  {
                    "title": "Approval Workflow and Publishing Schedule Coordination",
                    "slug": "approval-scheduling",
                    "href": "/services/agentic-automation/conversational-automation/content-automation/content-calendar/approval-scheduling",
                    "keywords": "content approval automation India, publishing schedule automation India"
                  }
                ]
              },
              {
                "title": "Multi-Platform Publishing Automation",
                "slug": "multi-platform-publishing",
                "href": "/services/agentic-automation/conversational-automation/content-automation/multi-platform-publishing",
                "keywords": "multi-platform publishing India, automated social publishing India, CMS to social media India",
                "children": [
                  {
                    "title": "CMS Publish Trigger to LinkedIn, WhatsApp, and Email Newsletter",
                    "slug": "cms-trigger",
                    "href": "/services/agentic-automation/conversational-automation/content-automation/multi-platform-publishing/cms-trigger",
                    "keywords": "CMS automation India, blog to social automation India"
                  }
                ]
              },
              {
                "title": "Content Repurposing Workflow Automation",
                "slug": "content-repurposing-workflow",
                "href": "/services/agentic-automation/conversational-automation/content-automation/content-repurposing-workflow",
                "keywords": "content repurposing India, blog to social media India, AI content repurposing India",
                "children": [
                  {
                    "title": "Source Content Adaptation to LinkedIn, WhatsApp, and Email Formats",
                    "slug": "format-adaptation",
                    "href": "/services/agentic-automation/conversational-automation/content-automation/content-repurposing-workflow/format-adaptation",
                    "keywords": "content format adaptation India, multi-channel content India"
                  },
                  {
                    "title": "Format Adaptation Logic and Approval Checkpoint Before Distribution",
                    "slug": "format-approval",
                    "href": "/services/agentic-automation/conversational-automation/content-automation/content-repurposing-workflow/format-approval",
                    "keywords": "content repurposing approval India, format adaptation pipeline India"
                  }
                ]
              },
              {
                "title": "Content Performance Monitoring and Pruning",
                "slug": "performance-monitoring",
                "href": "/services/agentic-automation/conversational-automation/content-automation/performance-monitoring",
                "keywords": "content performance tracking India, social media analytics India, content ROI India",
                "children": [
                  {
                    "title": "Engagement Tracking Per Platform and Content Pruning Recommendations",
                    "slug": "engagement-pruning",
                    "href": "/services/agentic-automation/conversational-automation/content-automation/performance-monitoring/engagement-pruning",
                    "keywords": "content engagement analytics India, underperforming content pruning India"
                  }
                ]
              }
            ]
          },
          {
            "title": "Voice AI and Phone Automation",
            "slug": "voice-ai",
            "href": "/services/agentic-automation/conversational-automation/voice-ai",
            "keywords": "voice AI India, AI phone bot India, AI IVR replacement India, intelligent IVR India",
            "children": [
              {
                "title": "AI Phone Answering and IVR Replacement",
                "slug": "ai-ivr",
                "href": "/services/agentic-automation/conversational-automation/voice-ai/ai-ivr",
                "keywords": "AI IVR India, AI phone answering India, voice bot for business India",
                "children": [
                  {
                    "title": "Intent Classification Model Setup and Call Flow Mapping",
                    "slug": "intent-call-flow",
                    "href": "/services/agentic-automation/conversational-automation/voice-ai/ai-ivr/intent-call-flow",
                    "keywords": "intent-based IVR India, call flow AI India"
                  },
                  {
                    "title": "Missed-Call AI Answering Agent",
                    "slug": "missed-call-agent",
                    "href": "/services/agentic-automation/conversational-automation/voice-ai/ai-ivr/missed-call-agent",
                    "keywords": "missed call AI India, 24/7 call answering AI India, AI call capture India"
                  },
                  {
                    "title": "Enquiry Logging, CRM Entry, and WhatsApp Follow-Up Trigger",
                    "slug": "crm-followup",
                    "href": "/services/agentic-automation/conversational-automation/voice-ai/ai-ivr/missed-call-agent/crm-followup",
                    "keywords": "missed call CRM India, WhatsApp callback trigger India"
                  }
                ]
              },
              {
                "title": "Call Routing and Escalation Logic",
                "slug": "call-routing",
                "href": "/services/agentic-automation/conversational-automation/voice-ai/call-routing",
                "keywords": "AI call routing India, intent-based routing India, urgency detection AI India",
                "children": [
                  {
                    "title": "Caller Profile Matching and Human Agent Handoff with Call Summary",
                    "slug": "handoff-summary",
                    "href": "/services/agentic-automation/conversational-automation/voice-ai/call-routing/handoff-summary",
                    "keywords": "AI call handoff India, call summary AI India"
                  }
                ]
              },
              {
                "title": "Vernacular and Multilingual Voice AI",
                "slug": "vernacular-ai",
                "href": "/services/agentic-automation/conversational-automation/voice-ai/vernacular-ai",
                "keywords": "Hindi AI India, regional language AI India, Hinglish voice AI India, multilingual AI India",
                "children": [
                  {
                    "title": "Accent Handling and Mixed-Language (Hinglish) Support",
                    "slug": "hinglish",
                    "href": "/services/agentic-automation/conversational-automation/voice-ai/vernacular-ai/hinglish",
                    "keywords": "Hinglish voice bot India, Hindi English AI India"
                  }
                ]
              },
              {
                "title": "Voice-Based Document Collection",
                "slug": "voice-document-collection",
                "href": "/services/agentic-automation/conversational-automation/voice-ai/voice-document-collection",
                "keywords": "voice document collection India, AI voice data capture India",
                "children": [
                  {
                    "title": "Data Capture, Validation, and Output Routing",
                    "slug": "capture-routing",
                    "href": "/services/agentic-automation/conversational-automation/voice-ai/voice-document-collection/capture-routing",
                    "keywords": "voice data validation India, AI document routing India"
                  }
                ]
              },
              {
                "title": "Clinic and Hospital Voice Triage Bot",
                "slug": "clinic-triage-bot",
                "href": "/services/agentic-automation/conversational-automation/voice-ai/clinic-triage-bot",
                "keywords": "clinic voice AI India, hospital AI triage India, patient intake AI India, healthcare voice bot India",
                "children": [
                  {
                    "title": "Patient Intake Flow and Urgency Classification",
                    "slug": "intake-urgency",
                    "href": "/services/agentic-automation/conversational-automation/voice-ai/clinic-triage-bot/intake-urgency",
                    "keywords": "AI patient intake India, symptom logging AI India"
                  },
                  {
                    "title": "Appointment Booking and Human Escalation for High-Priority Cases",
                    "slug": "appointment-escalation",
                    "href": "/services/agentic-automation/conversational-automation/voice-ai/clinic-triage-bot/appointment-escalation",
                    "keywords": "AI appointment booking clinic India, voice triage escalation India"
                  }
                ]
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "cap-5",
    "title": "Intelligence & Analytics",
    "slug": "intelligence-analytics",
    "href": "/services/intelligence-analytics/",
    "services": [
      {
        "title": "Unified Search Intelligence and SEO Analytics",
        "slug": "search-intelligence",
        "href": "/services/intelligence-analytics/search-intelligence",
        "keywords": "unified SEO analytics dashboard India, SEO reporting dashboard India, organic performance dashboard India",
        "children": [
          {
            "title": "Multi-Engine Analytics Dashboard",
            "slug": "multi-engine-dashboard",
            "href": "/services/intelligence-analytics/search-intelligence/multi-engine-dashboard",
            "keywords": "SEO analytics dashboard India, Google Search Console dashboard India, multi-engine SEO data India",
            "children": [
              {
                "title": "GSC, Bing, and Yandex Data Consolidation",
                "slug": "gsc-bing-yandex",
                "href": "/services/intelligence-analytics/search-intelligence/multi-engine-dashboard/gsc-bing-yandex",
                "keywords": "Google Search Console API India, Bing Webmaster Tools India, multi-engine SEO data India",
                "children": [
                  {
                    "title": "API Connection Setup and Data Normalisation",
                    "slug": "api-normalisation",
                    "href": "/services/intelligence-analytics/search-intelligence/multi-engine-dashboard/gsc-bing-yandex/api-normalisation",
                    "keywords": "GSC API India, search data normalisation India"
                  }
                ]
              },
              {
                "title": "AI Engine Impressions and Traffic Source Tracking",
                "slug": "ai-engine-tracking",
                "href": "/services/intelligence-analytics/search-intelligence/multi-engine-dashboard/ai-engine-tracking",
                "keywords": "AI traffic tracking India, ChatGPT impressions India, Perplexity traffic India",
                "children": [
                  {
                    "title": "AI-Referred Session Tagging and Percentage Split Reporting",
                    "slug": "ai-session-tagging",
                    "href": "/services/intelligence-analytics/search-intelligence/multi-engine-dashboard/ai-engine-tracking/ai-session-tagging",
                    "keywords": "AI session attribution India, AI traffic split India"
                  }
                ]
              },
              {
                "title": "Smart Analytical Agent for Weekly Intelligence Briefing",
                "slug": "smart-agent",
                "href": "/services/intelligence-analytics/search-intelligence/multi-engine-dashboard/smart-agent",
                "keywords": "AI analytics agent India, automated SEO briefing India, plain-English SEO report India",
                "children": [
                  {
                    "title": "Weekly Brief Generation, Anomaly Detection, and Inbox Delivery",
                    "slug": "weekly-brief",
                    "href": "/services/intelligence-analytics/search-intelligence/multi-engine-dashboard/smart-agent/weekly-brief",
                    "keywords": "weekly SEO brief India, SEO anomaly detection India"
                  }
                ]
              }
            ]
          },
          {
            "title": "SEO Performance Tracking",
            "slug": "seo-performance",
            "href": "/services/intelligence-analytics/search-intelligence/seo-performance",
            "keywords": "SEO performance tracking India, keyword ranking dashboard India, content decay detection India",
            "children": [
              {
                "title": "Keyword Ranking by Topic Cluster",
                "slug": "cluster-ranking",
                "href": "/services/intelligence-analytics/search-intelligence/seo-performance/cluster-ranking",
                "keywords": "keyword ranking India, topic cluster ranking India, SEO ranking dashboard India",
                "children": [
                  {
                    "title": "Dominant, Declining, and Unclaimed Cluster Identification",
                    "slug": "cluster-gap",
                    "href": "/services/intelligence-analytics/search-intelligence/seo-performance/cluster-ranking/cluster-gap",
                    "keywords": "keyword cluster analysis India, declining keyword India"
                  }
                ]
              },
              {
                "title": "Content Decay Detection and Refresh Prioritisation",
                "slug": "content-decay",
                "href": "/services/intelligence-analytics/search-intelligence/seo-performance/content-decay",
                "keywords": "content decay India, traffic loss detection India, content refresh India",
                "children": [
                  {
                    "title": "Decay Threshold Definition and Automated Refresh Priority List",
                    "slug": "refresh-priority",
                    "href": "/services/intelligence-analytics/search-intelligence/seo-performance/content-decay/refresh-priority",
                    "keywords": "content refresh priority India, SEO content audit India"
                  }
                ]
              },
              {
                "title": "Crawl Budget and Indexation Health Monitoring",
                "slug": "crawl-budget-monitoring",
                "href": "/services/intelligence-analytics/search-intelligence/seo-performance/crawl-budget-monitoring",
                "keywords": "crawl budget India, indexation health India, Google Index Coverage API India",
                "children": [
                  {
                    "title": "Daily GSC Index Coverage API Monitoring and Content Pickup Speed",
                    "slug": "index-pickup",
                    "href": "/services/intelligence-analytics/search-intelligence/seo-performance/crawl-budget-monitoring/index-pickup",
                    "keywords": "index coverage monitoring India, content pickup speed India"
                  }
                ]
              },
              {
                "title": "Core Web Vitals Trend Tracking",
                "slug": "cwv-trend-tracking",
                "href": "/services/intelligence-analytics/search-intelligence/seo-performance/cwv-trend-tracking",
                "keywords": "Core Web Vitals tracking India, LCP CLS INP trend India, page experience tracking India",
                "children": [
                  {
                    "title": "Regression Detection After Site Changes and Third-Party Script Impact",
                    "slug": "regression-scripts",
                    "href": "/services/intelligence-analytics/search-intelligence/seo-performance/cwv-trend-tracking/regression-scripts",
                    "keywords": "CWV regression India, third-party script SEO impact India"
                  }
                ]
              },
              {
                "title": "Backlink Profile Monitoring and Authority Assessment",
                "slug": "backlink-monitoring",
                "href": "/services/intelligence-analytics/search-intelligence/seo-performance/backlink-monitoring",
                "keywords": "backlink monitoring India, toxic link detection India, domain authority India",
                "children": [
                  {
                    "title": "New and Lost Link Alerting and Toxic Link Flagging",
                    "slug": "link-alerts",
                    "href": "/services/intelligence-analytics/search-intelligence/seo-performance/backlink-monitoring/link-alerts",
                    "keywords": "lost backlink alert India, toxic link audit India"
                  },
                  {
                    "title": "Anchor Text Distribution and Net Authority Impact Assessment",
                    "slug": "anchor-authority",
                    "href": "/services/intelligence-analytics/search-intelligence/seo-performance/backlink-monitoring/anchor-authority",
                    "keywords": "anchor text audit India, backlink authority India"
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        "title": "AI Visibility Tracking and Brand Citation Intelligence",
        "slug": "ai-visibility-tracking",
        "href": "/services/intelligence-analytics/ai-visibility-tracking",
        "keywords": "AI visibility tracking India, LLM citation tracking India, AI share of voice India, ChatGPT brand monitoring India",
        "children": [
          {
            "title": "AI Share of Voice and Multi-LLM Citation Tracking",
            "slug": "ai-share-of-voice",
            "href": "/services/intelligence-analytics/ai-visibility-tracking/ai-share-of-voice",
            "keywords": "AI share of voice India, brand citation in ChatGPT India, Perplexity brand monitoring India",
            "children": [
              {
                "title": "AI Share of Voice by Keyword Category",
                "slug": "sov-by-category",
                "href": "/services/intelligence-analytics/ai-visibility-tracking/ai-share-of-voice/sov-by-category",
                "keywords": "AI share of voice India, brand vs competitor AI citations India",
                "children": [
                  {
                    "title": "Brand vs Competitor Citation Frequency Measurement",
                    "slug": "citation-frequency",
                    "href": "/services/intelligence-analytics/ai-visibility-tracking/ai-share-of-voice/sov-by-category/citation-frequency",
                    "keywords": "AI citation frequency India, competitor citation tracking India"
                  }
                ]
              },
              {
                "title": "Prompt Performance Tracking",
                "slug": "prompt-performance",
                "href": "/services/intelligence-analytics/ai-visibility-tracking/ai-share-of-voice/prompt-performance",
                "keywords": "AI prompt tracking India, high-value prompt monitoring India, LLM prompt performance India",
                "children": [
                  {
                    "title": "High-Value Prompt Library Definition and Response Monitoring",
                    "slug": "prompt-library",
                    "href": "/services/intelligence-analytics/ai-visibility-tracking/ai-share-of-voice/prompt-performance/prompt-library",
                    "keywords": "prompt library AI India, AI response monitoring India"
                  }
                ]
              },
              {
                "title": "Sentiment Analysis in AI Responses",
                "slug": "ai-sentiment",
                "href": "/services/intelligence-analytics/ai-visibility-tracking/ai-share-of-voice/ai-sentiment",
                "keywords": "AI brand sentiment India, ChatGPT sentiment India, LLM brand framing India",
                "children": [
                  {
                    "title": "Sentiment Classification Per Brand Mention and Issue Flagging",
                    "slug": "sentiment-classification",
                    "href": "/services/intelligence-analytics/ai-visibility-tracking/ai-share-of-voice/ai-sentiment/sentiment-classification",
                    "keywords": "AI sentiment classification India, brand mention sentiment India"
                  }
                ]
              },
              {
                "title": "Multi-LLM Citation Tracking (ChatGPT, Perplexity, Gemini, Claude)",
                "slug": "multi-llm-tracking",
                "href": "/services/intelligence-analytics/ai-visibility-tracking/ai-share-of-voice/multi-llm-tracking",
                "keywords": "multi-LLM citation India, ChatGPT Perplexity Gemini Claude tracking India",
                "children": [
                  {
                    "title": "Cross-Engine Comparison and Engine-Specific Gap Analysis",
                    "slug": "cross-engine-gap",
                    "href": "/services/intelligence-analytics/ai-visibility-tracking/ai-share-of-voice/multi-llm-tracking/cross-engine-gap",
                    "keywords": "LLM citation comparison India, AI engine gap analysis India"
                  }
                ]
              }
            ]
          },
          {
            "title": "Competitive and Market Intelligence",
            "slug": "competitive-intelligence",
            "href": "/services/intelligence-analytics/ai-visibility-tracking/competitive-intelligence",
            "keywords": "competitor tracking India, SEO competitor analysis India, AI competitor monitoring India",
            "children": [
              {
                "title": "Competitor Keyword Gap and Ranking Comparison",
                "slug": "keyword-gap-ranking",
                "href": "/services/intelligence-analytics/ai-visibility-tracking/competitive-intelligence/keyword-gap-ranking",
                "keywords": "competitor SEO tracking India, keyword gap analysis India, competitor ranking India",
                "children": [
                  {
                    "title": "Side-by-Side Rank Tracking and Weekly Automated Report",
                    "slug": "weekly-report",
                    "href": "/services/intelligence-analytics/ai-visibility-tracking/competitive-intelligence/keyword-gap-ranking/weekly-report",
                    "keywords": "competitor rank report India, SEO rank tracker India"
                  }
                ]
              },
              {
                "title": "Competitor AI Citation Frequency Tracking",
                "slug": "competitor-ai-citations",
                "href": "/services/intelligence-analytics/ai-visibility-tracking/competitive-intelligence/competitor-ai-citations",
                "keywords": "competitor AI citations India, AI displacement analysis India",
                "children": [
                  {
                    "title": "Citation Source Analysis and Displacement Opportunity Identification",
                    "slug": "displacement",
                    "href": "/services/intelligence-analytics/ai-visibility-tracking/competitive-intelligence/competitor-ai-citations/displacement",
                    "keywords": "AI citation source India, citation displacement opportunity India"
                  }
                ]
              },
              {
                "title": "Share of SERP Monitoring",
                "slug": "share-of-serp",
                "href": "/services/intelligence-analytics/ai-visibility-tracking/competitive-intelligence/share-of-serp",
                "keywords": "share of SERP India, organic footprint comparison India, featured snippet ownership India",
                "children": [
                  {
                    "title": "SERP Feature Gain and Loss Monitoring",
                    "slug": "serp-feature-tracking",
                    "href": "/services/intelligence-analytics/ai-visibility-tracking/competitive-intelligence/share-of-serp/serp-feature-tracking",
                    "keywords": "SERP feature tracking India, PAA ownership India, featured snippet tracking India"
                  }
                ]
              },
              {
                "title": "Competitor Pricing and Product Launch Monitoring",
                "slug": "pricing-launch",
                "href": "/services/intelligence-analytics/ai-visibility-tracking/competitive-intelligence/pricing-launch",
                "keywords": "competitor price tracking India, product launch monitoring India, competitor intelligence India",
                "children": [
                  {
                    "title": "Target Competitor Monitoring Scope and Weekly Digest Delivery",
                    "slug": "digest",
                    "href": "/services/intelligence-analytics/ai-visibility-tracking/competitive-intelligence/pricing-launch/digest",
                    "keywords": "competitor intelligence digest India, automated competitor tracking India"
                  }
                ]
              },
              {
                "title": "LinkedIn and News Signal Monitoring",
                "slug": "linkedin-news",
                "href": "/services/intelligence-analytics/ai-visibility-tracking/competitive-intelligence/linkedin-news",
                "keywords": "competitor LinkedIn monitoring India, industry news AI India, keyword alert monitoring India",
                "children": [
                  {
                    "title": "Employee Movement, Funding, and Partnership Signal Tracking",
                    "slug": "signals",
                    "href": "/services/intelligence-analytics/ai-visibility-tracking/competitive-intelligence/linkedin-news/signals",
                    "keywords": "competitor hiring signals India, funding news tracking India"
                  }
                ]
              },
              {
                "title": "Regulatory Change Tracking and Alert System",
                "slug": "regulatory-tracking",
                "href": "/services/intelligence-analytics/ai-visibility-tracking/competitive-intelligence/regulatory-tracking",
                "keywords": "GST update tracking India, RBI SEBI ICAI circular monitoring India, regulatory alert India",
                "children": [
                  {
                    "title": "Plain-Language Regulatory Summary and Team Routing",
                    "slug": "summary-routing",
                    "href": "/services/intelligence-analytics/ai-visibility-tracking/competitive-intelligence/regulatory-tracking/summary-routing",
                    "keywords": "regulatory summary AI India, compliance alert routing India"
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        "title": "Business Performance Analytics and Revenue Intelligence",
        "slug": "business-analytics",
        "href": "/services/intelligence-analytics/business-analytics",
        "keywords": "business analytics dashboard India, marketing analytics India, unified analytics dashboard India, ROI tracking India",
        "children": [
          {
            "title": "Marketing and Revenue Analytics",
            "slug": "marketing-analytics",
            "href": "/services/intelligence-analytics/business-analytics/marketing-analytics",
            "keywords": "marketing analytics dashboard India, lead performance tracking India, ROI tracking India",
            "children": [
              {
                "title": "Lead Source and Channel Attribution",
                "slug": "channel-attribution",
                "href": "/services/intelligence-analytics/business-analytics/marketing-analytics/channel-attribution",
                "keywords": "lead attribution India, marketing channel analytics India, UTM tracking India",
                "children": [
                  {
                    "title": "UTM Setup, CRM Source Tagging, and Attribution Model Selection",
                    "slug": "utm-crm",
                    "href": "/services/intelligence-analytics/business-analytics/marketing-analytics/channel-attribution/utm-crm",
                    "keywords": "UTM setup India, CRM attribution India, first-touch last-touch linear attribution India"
                  }
                ]
              },
              {
                "title": "Campaign ROI Tracking Across All Channels",
                "slug": "campaign-roi",
                "href": "/services/intelligence-analytics/business-analytics/marketing-analytics/campaign-roi",
                "keywords": "campaign ROI India, marketing ROI dashboard India, cost per lead India",
                "children": [
                  {
                    "title": "Cost Per Lead, Cost Per Acquisition, and Revenue Per Campaign",
                    "slug": "cpl-cpa-revenue",
                    "href": "/services/intelligence-analytics/business-analytics/marketing-analytics/campaign-roi/cpl-cpa-revenue",
                    "keywords": "cost per lead India, cost per acquisition India, campaign revenue attribution India"
                  }
                ]
              },
              {
                "title": "Funnel Drop-Off and Conversion Analysis",
                "slug": "funnel-analysis",
                "href": "/services/intelligence-analytics/business-analytics/marketing-analytics/funnel-analysis",
                "keywords": "funnel analysis India, lead drop-off India, conversion funnel India",
                "children": [
                  {
                    "title": "Stage-by-Stage Conversion Rate Mapping and A/B Test Logging",
                    "slug": "stage-conversion",
                    "href": "/services/intelligence-analytics/business-analytics/marketing-analytics/funnel-analysis/stage-conversion",
                    "keywords": "funnel conversion rate India, A/B test tracking India"
                  }
                ]
              },
              {
                "title": "WhatsApp and Email Campaign Analytics",
                "slug": "whatsapp-email-analytics",
                "href": "/services/intelligence-analytics/business-analytics/marketing-analytics/whatsapp-email-analytics",
                "keywords": "WhatsApp campaign analytics India, email campaign analytics India, open rate click rate India",
                "children": [
                  {
                    "title": "Sequence-Level Drop-Off and Best-Performing Message Identification",
                    "slug": "sequence-performance",
                    "href": "/services/intelligence-analytics/business-analytics/marketing-analytics/whatsapp-email-analytics/sequence-performance",
                    "keywords": "WhatsApp sequence analytics India, email drop-off tracking India"
                  }
                ]
              }
            ]
          },
          {
            "title": "Automation and Workflow Performance Analytics",
            "slug": "automation-analytics",
            "href": "/services/intelligence-analytics/business-analytics/automation-analytics",
            "keywords": "automation performance tracking India, workflow analytics India, AI workflow reporting India",
            "children": [
              {
                "title": "Workflow Efficiency and Hours-Saved Metrics",
                "slug": "workflow-efficiency",
                "href": "/services/intelligence-analytics/business-analytics/automation-analytics/workflow-efficiency",
                "keywords": "workflow efficiency India, hours saved automation India, automation ROI India",
                "children": [
                  {
                    "title": "Pre- and Post-Automation Time Tracking and Team Capacity Calculation",
                    "slug": "time-capacity",
                    "href": "/services/intelligence-analytics/business-analytics/automation-analytics/workflow-efficiency/time-capacity",
                    "keywords": "automation time tracking India, team capacity AI India"
                  }
                ]
              },
              {
                "title": "Bot and Agent Performance Dashboards",
                "slug": "bot-performance",
                "href": "/services/intelligence-analytics/business-analytics/automation-analytics/bot-performance",
                "keywords": "AI bot performance India, chatbot analytics India, agent dashboard India",
                "children": [
                  {
                    "title": "Response Accuracy, Escalation Rate, and Resolution Time Tracking",
                    "slug": "accuracy-escalation",
                    "href": "/services/intelligence-analytics/business-analytics/automation-analytics/bot-performance/accuracy-escalation",
                    "keywords": "bot accuracy India, escalation rate tracking India, resolution time AI India"
                  }
                ]
              },
              {
                "title": "Error Rate and Escalation Frequency Tracking",
                "slug": "error-escalation",
                "href": "/services/intelligence-analytics/business-analytics/automation-analytics/error-escalation",
                "keywords": "automation error rate India, escalation frequency India, workflow failure tracking India",
                "children": [
                  {
                    "title": "Failure Type Classification and Root Cause Tagging",
                    "slug": "failure-classification",
                    "href": "/services/intelligence-analytics/business-analytics/automation-analytics/error-escalation/failure-classification",
                    "keywords": "automation failure analysis India, root cause tracking India"
                  }
                ]
              },
              {
                "title": "Monthly Automation ROI Report",
                "slug": "automation-roi-report",
                "href": "/services/intelligence-analytics/business-analytics/automation-analytics/automation-roi-report",
                "keywords": "automation ROI report India, monthly automation report India, cost reduction automation India",
                "children": [
                  {
                    "title": "Hours Saved Summary, Cost Reduction Estimate, and Plain-Number Delivery",
                    "slug": "hours-cost-summary",
                    "href": "/services/intelligence-analytics/business-analytics/automation-analytics/automation-roi-report/hours-cost-summary",
                    "keywords": "hours saved report India, automation cost savings India"
                  }
                ]
              }
            ]
          },
          {
            "title": "Predictive Analytics and AI Forecasting",
            "slug": "predictive-analytics",
            "href": "/services/intelligence-analytics/business-analytics/predictive-analytics",
            "keywords": "predictive analytics India, AI revenue forecasting India, churn prediction AI India, demand planning AI India",
            "children": [
              {
                "title": "Churn Prediction and At-Risk Client Identification",
                "slug": "churn-prediction",
                "href": "/services/intelligence-analytics/business-analytics/predictive-analytics/churn-prediction",
                "keywords": "churn prediction India, customer churn AI India, at-risk client detection India",
                "children": [
                  {
                    "title": "Model Training on Historical Churn Data and CRM Alert Integration",
                    "slug": "model-crm",
                    "href": "/services/intelligence-analytics/business-analytics/predictive-analytics/churn-prediction/model-crm",
                    "keywords": "churn model India, AI early warning system India"
                  }
                ]
              },
              {
                "title": "Revenue Forecasting and Pipeline Modelling",
                "slug": "revenue-forecasting",
                "href": "/services/intelligence-analytics/business-analytics/predictive-analytics/revenue-forecasting",
                "keywords": "AI revenue forecasting India, CRM pipeline forecasting India, sales forecast AI India",
                "children": [
                  {
                    "title": "Seasonal Adjustment and Confidence Interval Reporting",
                    "slug": "seasonal-confidence",
                    "href": "/services/intelligence-analytics/business-analytics/predictive-analytics/revenue-forecasting/seasonal-confidence",
                    "keywords": "seasonal revenue forecast India, AI forecast confidence India"
                  }
                ]
              },
              {
                "title": "Demand Planning and Capacity Forecasting",
                "slug": "demand-planning",
                "href": "/services/intelligence-analytics/business-analytics/predictive-analytics/demand-planning",
                "keywords": "demand planning India, AI capacity forecasting India, inventory forecasting AI India",
                "children": [
                  {
                    "title": "Historical Demand Ingestion and Ops Workflow Integration",
                    "slug": "ops-integration",
                    "href": "/services/intelligence-analytics/business-analytics/predictive-analytics/demand-planning/ops-integration",
                    "keywords": "demand forecasting model India, ops AI India"
                  }
                ]
              }
            ]
          }
        ]
      }
    ]
  }
]

function findNodeBySlugPath(
  nodes: ServiceNode[],
  slugParts: string[],
  ancestors: ServiceNode[] = []
): { node: ServiceNode; parent?: ServiceNode; ancestors: ServiceNode[] } | null {
  if (!slugParts.length) return null

  const [currentSlug, ...rest] = slugParts
  const node = nodes.find((item) => item.slug === currentSlug)
  if (!node) return null

  if (!rest.length) {
    return { node, parent: ancestors.at(-1), ancestors: [...ancestors, node] }
  }

  if (!node.children?.length) return null
  return findNodeBySlugPath(node.children, rest, [...ancestors, node])
}

export function findServiceBySlug(slugParts: string[]): ServiceLookupResult | null {
  if (!slugParts.length) return null

  const [capSlug, ...serviceSlugs] = slugParts
  const capability = capabilities.find((c) => c.slug === capSlug)
  if (!capability) return null

  if (!serviceSlugs.length) return { capability, ancestors: [] }

  const found = findNodeBySlugPath(capability.services, serviceSlugs)
  if (!found) return null

  return { capability, ...found }
}

export function slugToTitle(slug: string): string {
  return slug
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ")
}
