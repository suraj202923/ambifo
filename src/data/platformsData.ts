import { Shield, CheckCircle, Cpu, Monitor, Globe, Zap, Lock, Database, Eye, AlertTriangle, Target, Activity, Server, GitBranch, RefreshCw } from 'lucide-react'

export interface PlatformCapability {
  icon: React.ComponentType<{ className?: string }>
  title: string
  description: string
}

export interface PlatformOutcome {
  label: string
  description: string
}

export interface PlatformProblem {
  icon: React.ComponentType<{ className?: string }>
  text: string
}

export interface PlatformSolution {
  icon: React.ComponentType<{ className?: string }>
  text: string
}

export interface EngagementStage {
  icon: React.ComponentType<{ className?: string }>
  title: string
  description: string
}

export interface PlatformData {
  heroTag: string
  heroTitle: string
  heroSubtitle: string
  heroDescription: string
  ctaText: string
  platformTitle: string
  platformDescription: string
  platformFeatures: PlatformCapability[]
  problemsTitle: string
  problems: PlatformProblem[]
  solutionsTitle: string
  solutions: PlatformSolution[]
  reframeText: string
  capabilitiesTitle: string
  capabilities: PlatformCapability[]
  outcomesTitle: string
  outcomes: PlatformOutcome[]
  differentiators: PlatformCapability[]
  engagementTitle: string
  engagementStages: EngagementStage[]
  ctaHeading: string
  ctaDescription: string
}

export const entisenseData: PlatformData = {
  heroTag: 'Decision Intelligence · Commerce-First',
  heroTitle: 'Turn catalog chaos into explainable, ranked decisions.',
  heroSubtitle: 'Entisense is Ambifo\'s Enterprise Decision Intelligence Platform for Commerce — unifying product data from PIMs, ERPs and supplier feeds, scoring catalog health continuously, and recommending the highest-impact actions with a clear explanation behind every score and every suggestion. Your team stays in control of every decision.',
  heroDescription: 'Entisense unifies your product data, scores catalog health, and generates explainable AI recommendations — turning raw data into trusted commerce decisions.',
  ctaText: 'Book Now!',
  platformTitle: 'Entisense — Enterprise Decision Intelligence for Commerce',
  platformDescription: 'Entisense sits alongside your existing PIM and ERP as an intelligence layer — reconciling data across systems, scoring catalog health at the SKU level, and generating explainable, ranked recommendations. Where traditional tools stop at dashboards, Entisense adds a closed-loop AI engine that predicts, recommends and learns from every outcome — helping merchandisers and commerce teams act with confidence at scale.',
  platformFeatures: [
    { icon: Database, title: 'Unified Data Hub', description: 'Ingest and reconcile product data from PIM, ERP, supplier feeds and spreadsheets into one versioned, trustable record — the foundation every score and recommendation builds from.' },
    { icon: Activity, title: 'Catalog Intelligence', description: 'Continuous, category-aware health scoring for every SKU — flagging incomplete listings, compliance gaps and data decay before they cost a sale.' },
    { icon: Eye, title: 'Explainable AI', description: 'Every score and recommendation traces back to weighted, evidence-linked factors — factor-level breakdowns, source records and benchmarks, not black-box outputs.' },
    { icon: Target, title: 'Decision Engine', description: 'Ranked recommendations tied to expected business impact — priority, confidence and evidence surfaced so merchandisers can verify the reasoning, not just the result.' },
    { icon: RefreshCw, title: 'Continuous Learning', description: 'Every decision your team makes feeds back into the model — the system refines its recommendations over time, becoming more accurate with every approval and override.' },
    { icon: Shield, title: 'AI Governance', description: 'Approval workflows, role-based access, workspace isolation and full audit trails — oversight built in, not bolted on, for every model and every decision.' },
  ],
  problemsTitle: 'Catalog quality problems don\'t announce themselves',
  problems: [
    { icon: AlertTriangle, text: 'Nobody can say which SKUs need attention first — issues scattered across PIM, ERP and spreadsheets' },
    { icon: AlertTriangle, text: 'AI recommendations that can\'t be explained get ignored by merchandisers who know the category best' },
    { icon: AlertTriangle, text: 'Compliance can\'t approve what it can\'t audit — as AI touches pricing and customer-facing content' },
    { icon: AlertTriangle, text: 'Catalog health only discovered after a lost sale, rejected listing or customer complaint' },
    { icon: AlertTriangle, text: 'Teams react to problems instead of catching them before they cost revenue' },
  ],
  solutionsTitle: 'How Entisense closes the gap',
  solutions: [
    { icon: CheckCircle, text: 'One continuous loop: unify data, score the catalog, explain reasoning, recommend action, learn from outcomes' },
    { icon: CheckCircle, text: 'Every output breaks down into weighted, traceable factors linked to source data — verification, not faith' },
    { icon: CheckCircle, text: 'Recommendations ranked by expected business impact, not just severity — highest ROI actions first' },
    { icon: CheckCircle, text: 'Category-aware scoring adapts to attributes, risks and workflows specific to your industry' },
    { icon: CheckCircle, text: 'Full governance: approval workflows, audit trails and role-based access for every model and decision' },
  ],
  reframeText: 'The shift for commerce leaders: the question is no longer "can we store and manage product data?" It is "can every SKU instantly tell us its health, show us the evidence, and recommend what to do next?" Entisense is decision intelligence by design — its AI explains, recommends and learns, not just reports.',
  capabilitiesTitle: 'Six modules that work from one shared understanding',
  capabilities: [
    { icon: Database, title: 'Data Hub', description: 'Unify product data from your PIM, ERP, and supplier feeds into one versioned record — the single source of truth every downstream intelligence module reads from.' },
    { icon: Activity, title: 'Catalog Intelligence', description: 'Continuous, category-aware health scoring for every SKU — flagging incomplete listings, data decay and compliance gaps before they cost a sale.' },
    { icon: Eye, title: 'Explainability', description: 'Every score and recommendation traces back to weighted, evidence-linked factors with direct links to source records — verification, not faith.' },
    { icon: Target, title: 'Decision Engine', description: 'Ranked recommendations tied to expected business impact — priority, confidence and evidence surfaced so merchandisers can verify the reasoning.' },
    { icon: RefreshCw, title: 'Learning', description: 'The system refines its recommendations from every decision your team makes — approvals and overrides both improve accuracy over time.' },
    { icon: Shield, title: 'AI Governance', description: 'Approval workflows, workspace isolation, role-based access and full audit trails for every model and every decision — oversight built in.' },
  ],
  outcomesTitle: 'Outcomes Entisense delivers',
  outcomes: [
    { label: '78/100', description: 'Average catalog health score improvement within 6 weeks' },
    { label: '50M+', description: 'SKUs scored per deployment across categories' },
    { label: '100%', description: 'Recommendations with a traceable reason' },
    { label: '24/7', description: 'Continuous catalog re-scoring and monitoring' },
    { label: '4-8 wks', description: 'Typical time to first live scores' },
    { label: '10x', description: 'Faster SKU triage vs manual spreadsheets' },
  ],
  differentiators: [
    { icon: Eye, title: 'Explainable by Design', description: 'Every output shows its work — factor-level breakdowns, source records and benchmarks. Your merchandisers verify the reasoning, not just the result.' },
    { icon: Shield, title: 'Governance Built In', description: 'Approval workflows, audit trails and role-based access for every model — oversight that\'s continuous, not a periodic scramble.' },
    { icon: RefreshCw, title: 'Commerce-Native, Not Generic', description: 'Scoring adapts to attributes, risks and workflows specific to fashion, electronics, furniture, beauty, grocery and general commerce.' },
    { icon: Zap, title: 'No Rip-and-Replace', description: 'Entisense sits alongside your existing PIM and ERP — an intelligence layer, not a migration project.' },
  ],
  engagementTitle: 'A low-risk path from pilot to production',
  engagementStages: [
    { icon: Eye, title: 'Discovery', description: 'Catalog audit, data quality assessment and use-case prioritisation to frame the value case with real data.' },
    { icon: Monitor, title: 'Pilot', description: 'Live data ingestion, health scoring, explainability and accuracy benchmarks on a representative category.' },
    { icon: Cpu, title: 'Production', description: 'Full integration, Decision Engine, governance workflows and APIs — closed-loop intelligence switched on module by module.' },
    { icon: Target, title: 'Scale', description: 'New categories, additional data sources, advanced AI governance and enterprise SSO — run as a managed service or self-hosted.' },
  ],
  ctaHeading: 'See Entisense on your own catalog.',
  ctaDescription: 'Bring a sample of your product data to the call. We\'ll show you exactly what Entisense finds — no generic demo data.',
}

export const fastDataBrokerData: PlatformData = {
  heroTag: 'Ultra-Fast · Zero-Loss · Production-Ready',
  heroTitle: '2-3ms latency. 912K msg/sec. Zero message loss.',
  heroSubtitle: 'FastDataBroker is Ambifo\'s ultra-fast distributed message queue — built with a Rust core and SDKs for Python, Go, Java, JavaScript and C#. Delivering 2-3ms P99 latency, 912K messages per second per broker, 3-way replication with zero message loss, and built-in clustering — at 4-11x lower cost than Kafka or RabbitMQ.',
  heroDescription: 'FastDataBroker is a high-performance, production-ready distributed message queue with a Rust core, multi-language SDKs, and enterprise-grade reliability.',
  ctaText: 'Get Started',
  platformTitle: 'FastDataBroker — Ultra-Fast Distributed Message Queue',
  platformDescription: 'FastDataBroker combines a Rust-engineered core with native SDKs across five languages to deliver messaging performance that traditional queues can\'t match. With 2-3ms P99 latency, 912K msg/sec throughput per broker, 3-way replication for zero message loss, automatic failover in under 5 seconds, and linear scaling to millions of messages per second — all running on standard hardware at a fraction of the cost.',
  platformFeatures: [
    { icon: Zap, title: 'Lightning Fast', description: '2-3ms P99 latency — 10x faster than Kafka. 912K msg/sec per broker with linear scaling to millions of messages per second across a 4-node cluster.' },
    { icon: Shield, title: 'Zero Message Loss', description: '3-way replication with quorum-based writes ensures every message is stored on 3 brokers before acknowledgment — zero data loss, guaranteed.' },
    { icon: GitBranch, title: 'Built-in Clustering', description: 'Multi-broker clusters out of the box with automatic failover in under 5 seconds. Tolerate 1 broker failure with a 4-node setup — no extra configuration needed.' },
    { icon: Server, title: 'Multi-Language SDKs', description: 'Native SDKs for Python, Go, Java, JavaScript and C# — each with full async support, consumer groups, priority queues, and comprehensive test suites.' },
    { icon: Globe, title: 'Multi-Protocol', description: 'HTTP, WebSocket, gRPC, QUIC and Email notification channels — connect any system, any language, any architecture.' },
    { icon: Activity, title: 'Enterprise Grade', description: 'Token-based authorization, multi-tenant support, Prometheus/Grafana metrics, Kubernetes-ready with StatefulSet examples and Terraform modules.' },
  ],
  problemsTitle: 'Traditional message queues are slow, expensive and complex',
  problems: [
    { icon: AlertTriangle, text: 'Kafka requires 5+ brokers for high availability — thousands of dollars per month in infrastructure costs' },
    { icon: AlertTriangle, text: 'RabbitMQ caps at 50K msg/sec — too slow for real-time analytics, live streaming and high-throughput event processing' },
    { icon: AlertTriangle, text: 'Complex configuration and DevOps expertise required just to get a basic cluster running' },
    { icon: AlertTriangle, text: 'Single points of failure without built-in replication — message loss risk without expensive add-ons' },
    { icon: AlertTriangle, text: 'Vendor lock-in with proprietary protocols — migration between queues is painful and risky' },
  ],
  solutionsTitle: 'How FastDataBroker solves them',
  solutions: [
    { icon: CheckCircle, text: '2-3ms P99 latency with 912K msg/sec per broker — 10x faster than Kafka at a fraction of the cost' },
    { icon: CheckCircle, text: 'Built-in 4-node clustering with 3-way replication — zero message loss without extra configuration' },
    { icon: CheckCircle, text: 'Under 1 hour to production — Docker Compose for dev, Kubernetes for prod, Terraform for AWS' },
    { icon: CheckCircle, text: '500+ tests across Rust core and all SDKs — 100% pass rate, production-proven reliability' },
    { icon: CheckCircle, text: '$400/month for a 4-broker cluster — 4-11x cheaper than Kafka or RabbitMQ for equivalent throughput' },
  ],
  reframeText: 'The shift for engineering leaders: the question is no longer "which message queue do we adopt?" It is "can we get 10x better performance at 1/4 the cost, with zero message loss and under an hour to production?" FastDataBroker is engineered for exactly this — Rust-speed, enterprise-grade, and open for every language.',
  capabilitiesTitle: 'Performance that speaks for itself',
  capabilities: [
    { icon: Zap, title: 'Ultra-Low Latency', description: 'P50: 1.5ms, P90: 1.8ms, P95: 2.0ms, P99: 2.5ms — consistent sub-3ms delivery that traditional queues can\'t match at any price point.' },
    { icon: Activity, title: 'Massive Throughput', description: '912K msg/sec per single broker, scaling linearly to 3.6M/sec on 4 nodes and 7.2M/sec on 8 — no throughput cliff as you grow.' },
    { icon: Shield, title: 'Zero-Loss Replication', description: '3-way replication with quorum-based writes — every message stored on 3 brokers before acknowledgment, automatic failover in under 5 seconds.' },
    { icon: GitBranch, title: 'Multi-Language SDKs', description: 'Python with async/await, Go with goroutines, Java with ExecutorService, JavaScript with TypeScript, C# with .NET — native idioms, not wrappers.' },
    { icon: Server, title: 'Cloud-Native Deployment', description: 'Docker Compose in 30 seconds, Kubernetes StatefulSet in 2 minutes, Terraform AWS provisioning in 5 minutes — pick your path.' },
    { icon: Lock, title: 'Enterprise Security', description: 'Token-based authorization, multi-tenant isolation, workspace-level access controls — built in, not bolted on as afterthoughts.' },
  ],
  outcomesTitle: 'Outcomes FastDataBroker delivers',
  outcomes: [
    { label: '2-3ms', description: 'P99 latency — 10x faster than Kafka' },
    { label: '912K', description: 'Messages per second per broker' },
    { label: '0%', description: 'Message loss with 3-way replication' },
    { label: '<5 sec', description: 'Automatic failover recovery' },
    { label: '$400', description: 'Monthly cost for 4-broker cluster' },
    { label: '500+', description: 'Tests across core and all SDKs' },
  ],
  differentiators: [
    { icon: Zap, title: 'Rust-Core Performance', description: 'Engineered in Rust for memory safety and zero-cost abstractions — 10x faster P99 latency than Kafka, without the JVM overhead.' },
    { icon: GitBranch, title: '5 Native SDKs', description: 'Python, Go, Java, JavaScript and C# — each SDK uses native idioms and patterns, not thin REST wrappers.' },
    { icon: Shield, title: 'Zero-Loss by Default', description: '3-way replication with quorum writes is the default, not an expensive add-on — every deployment gets enterprise durability.' },
    { icon: Globe, title: 'Open & Portable', description: 'MIT licensed, Docker/K8s/Terraform ready, multi-protocol support — no vendor lock-in, runs anywhere.' },
  ],
  engagementTitle: 'From proof-of-concept to production in hours',
  engagementStages: [
    { icon: Eye, title: 'Evaluate', description: 'Run the 60-second quickstart, benchmark against your current queue, measure latency and throughput on your hardware.' },
    { icon: Monitor, title: 'Pilot', description: 'Deploy a 4-node cluster via Docker or Kubernetes, migrate a non-critical workload, validate zero-loss and failover behavior.' },
    { icon: Cpu, title: 'Production', description: 'Full cluster with monitoring, alerting, token auth and consumer groups — production traffic flowing with SLA guarantees.' },
    { icon: Target, title: 'Scale', description: 'Linear scaling to millions of msg/sec, multi-region deployment, enterprise governance and managed operations under SLA.' },
  ],
  ctaHeading: 'Run the benchmark on your hardware.',
  ctaDescription: 'Deploy a 4-node cluster in under an hour and compare latency, throughput and cost against your current message queue. MIT licensed, no strings attached.',
}
