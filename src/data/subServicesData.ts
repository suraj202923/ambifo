export interface SubServiceData {
  parent: string
  accent: 'blue' | 'teal' | 'purple' | 'orange' | 'green'
  title: string
  subtitle: string
  heroDesc: string
  features: { icon: string; title: string; desc: string }[]
  details: { title: string; items: string[] }[]
  ctaText?: string
  ctaDesc?: string
}

const SUB: Record<string, SubServiceData> = {
  // ── Strategy & Advisory ──────────────────────────────────
  'digital-maturity-assessment': {
    parent: 'Strategy & Advisory',
    accent: 'blue',
    title: 'Digital Maturity Assessment',
    subtitle: 'Evaluate & Accelerate Your Digital Journey',
    heroDesc: 'Analyze your current digital maturity level and receive a strategic roadmap for becoming a digital leader. Our comprehensive assessment evaluates your capabilities across people, process, and technology to identify growth opportunities and create a clear path forward.',
    features: [
      { icon: 'Lightbulb', title: 'Current State Analysis', desc: 'Evaluate existing digital capabilities, infrastructure, and skill sets across your organization to establish a baseline maturity score.' },
      { icon: 'Zap', title: 'Gap Identification', desc: 'Identify critical gaps between current capabilities and industry best practices, pinpointing areas needing immediate attention.' },
      { icon: 'Star', title: 'Strategic Roadmap', desc: 'Develop a prioritized, actionable roadmap with clear milestones, timelines, and resource requirements for digital transformation.' },
      { icon: 'Target', title: 'Benchmarking', desc: 'Compare your digital maturity against industry peers and competitors using proven frameworks and benchmarks.' },
      { icon: 'BarChart3', title: 'KPI Framework', desc: 'Define measurable KPIs and success metrics to track progress and demonstrate ROI throughout your transformation journey.' },
      { icon: 'Shield', title: 'Risk Assessment', desc: 'Identify digital risks and vulnerabilities, including cybersecurity gaps, compliance issues, and operational dependencies.' },
    ],
    details: [
      { title: 'Assessment Framework', items: ['Evaluate digital capabilities across 5 key dimensions: strategy, culture, technology, operations, and data', 'Use industry-standard maturity models (DCMM, DMM, or custom frameworks)', 'Conduct stakeholder interviews and workshops for qualitative insights', 'Deploy automated assessment tools for quantitative analysis', 'Generate comprehensive maturity scorecards and heat maps'] },
      { title: 'Deliverables', items: ['Detailed maturity assessment report with current state analysis', 'Visual maturity heatmap across all assessed dimensions', 'Prioritized gap analysis with impact and effort ratings', 'Strategic transformation roadmap with phased approach', 'Business case with ROI projections and resource estimates'] },
      { title: 'Engagement Timeline', items: ['Week 1-2: Discovery and stakeholder alignment', 'Week 3-4: Data collection and assessment execution', 'Week 5-6: Analysis and gap identification', 'Week 7-8: Roadmap development and validation', 'Week 9: Final presentation and next steps planning'] },
    ],
  },
  'ai-readiness-assessment': {
    parent: 'Strategy & Advisory',
    accent: 'blue',
    title: 'AI Readiness Assessment',
    subtitle: 'Prepare Your Organization for AI Adoption',
    heroDesc: 'Identify potential gaps and opportunities to successfully implement AI solutions. Our structured framework evaluates your organization\'s data infrastructure, talent, and processes to create a clear AI adoption roadmap.',
    features: [
      { icon: 'Database', title: 'Data Infrastructure Review', desc: 'Assess data quality, accessibility, and infrastructure readiness for supporting AI and machine learning workloads.' },
      { icon: 'Brain', title: 'AI Maturity Evaluation', desc: 'Evaluate organizational AI maturity, existing capabilities, and talent gaps across business units.' },
      { icon: 'Target', title: 'Use Case Identification', desc: 'Identify high-impact AI use cases aligned with business objectives and technical feasibility.' },
      { icon: 'Route', title: 'Adoption Roadmap', desc: 'Develop a structured, phased AI adoption roadmap with clear milestones and resource requirements.' },
      { icon: 'Shield', title: 'Governance Framework', desc: 'Define ethical AI frameworks, governance policies, and responsible AI practices for your organization.' },
      { icon: 'BarChart3', title: 'ROI Analysis', desc: 'Estimate potential ROI, cost savings, and competitive advantages from AI implementation across use cases.' },
    ],
    details: [
      { title: 'Assessment Areas', items: ['Data infrastructure quality, accessibility, and governance readiness', 'Organizational AI maturity and digital culture assessment', 'Talent gap analysis across data science, ML engineering, and MLOps', 'Technology stack evaluation for AI/ML compatibility', 'Ethical and regulatory compliance requirements review'] },
      { title: 'Deliverables', items: ['AI readiness scorecard with detailed findings', 'Prioritized list of high-impact AI use cases', 'Talent and skill gap analysis with recommendations', 'Phased AI adoption roadmap with timeline and budget', 'Governance framework and ethical AI guidelines'] },
    ],
  },
  'cloud-advisory-services': {
    parent: 'Strategy & Advisory',
    accent: 'blue',
    title: 'Cloud Advisory Services',
    subtitle: 'Develop Your Winning Cloud Strategy',
    heroDesc: 'Develop a comprehensive cloud strategy aligned with your business objectives. Our advisory services cover cloud adoption planning, operating model design, FinOps, and architecture consulting to ensure your cloud journey delivers measurable business value.',
    features: [
      { icon: 'Route', title: 'Cloud Strategy Development', desc: 'Create a comprehensive cloud adoption strategy aligned with business goals, covering workload prioritization and migration sequencing.' },
      { icon: 'Settings', title: 'Operating Model Design', desc: 'Design cloud operating models including governance, team structures, processes, and tools for effective cloud management.' },
      { icon: 'BarChart3', title: 'Cloud FinOps', desc: 'Implement financial operations practices for cost optimization, budgeting, forecasting, and chargeback mechanisms.' },
      { icon: 'Shield', title: 'Architecture Consulting', desc: 'Provide expert guidance on cloud architecture decisions, including multi-cloud, hybrid, and cloud-native designs.' },
      { icon: 'Target', title: 'Vendor Evaluation', desc: 'Evaluate cloud providers (AWS, Azure, GCP) and recommend the best fit based on technical requirements and cost.' },
      { icon: 'Zap', title: 'Migration Planning', desc: 'Develop detailed migration plans with phased approaches, risk mitigation, and business continuity strategies.' },
    ],
    details: [
      { title: 'Strategy Components', items: ['Business-aligned cloud vision and strategic objectives', 'Workload assessment and migration prioritization framework', 'Cloud provider selection criteria and evaluation', 'Total cost of ownership (TCO) and ROI analysis', 'Risk assessment and mitigation strategies'] },
      { title: 'Operating Model Design', items: ['Cloud Center of Excellence (CCoE) establishment', 'Team structure and role definitions', 'Governance and compliance frameworks', 'DevOps and platform engineering alignment', 'Managed services and vendor management strategy'] },
      { title: 'FinOps Implementation', items: ['Cloud cost governance and policy establishment', 'Cost allocation and chargeback mechanisms', 'Reserved instance and savings plan optimization', 'Automated cost monitoring and anomaly detection', 'Financial reporting and forecasting dashboards'] },
    ],
  },
  'well-architected-framework-review': {
    parent: 'Strategy & Advisory',
    accent: 'blue',
    title: 'Well-Architected Framework Review',
    subtitle: 'Optimize Your Cloud Architecture',
    heroDesc: 'Uncover improvement opportunities and elevate your cloud architecture for cost-efficiency, security, and performance. Our review leverages AWS/Azure Well-Architected frameworks to provide actionable recommendations.',
    features: [
      { icon: 'Shield', title: 'Security Assessment', desc: 'Evaluate security posture including identity management, access controls, encryption, and incident response capabilities.' },
      { icon: 'Zap', title: 'Reliability Review', desc: 'Assess architecture for fault tolerance, disaster recovery, backup strategies, and service level agreements.' },
      { icon: 'Settings', title: 'Performance Efficiency', desc: 'Review compute, storage, and network architecture for optimal performance, scaling, and resource utilization.' },
      { icon: 'BarChart3', title: 'Cost Optimization', desc: 'Identify cost-saving opportunities through right-sizing, reserved instances, storage optimization, and eliminating waste.' },
      { icon: 'Route', title: 'Operational Excellence', desc: 'Evaluate operational practices including monitoring, automation, change management, and incident response procedures.' },
      { icon: 'Lightbulb', title: 'Sustainability', desc: 'Assess environmental impact and identify opportunities to reduce carbon footprint through efficient architecture.' },
    ],
    details: [
      { title: 'Review Pillars', items: ['Security: IAM, encryption, network security, compliance', 'Reliability: HA/DR design, backup strategies, SLAs', 'Performance Efficiency: right-sizing, scaling, optimization', 'Cost Optimization: spending analysis, waste elimination', 'Operational Excellence: monitoring, automation, DevOps', 'Sustainability: carbon footprint, efficient design'] },
      { title: 'Deliverables', items: ['Comprehensive Well-Architected review report', 'Pillar-by-pillar risk assessment and scoring', 'Prioritized recommendation list with effort estimates', 'Architecture improvement roadmap', 'Executive summary with business impact analysis'] },
    ],
  },
  'dev-secops-maturity-assessments': {
    parent: 'Strategy & Advisory',
    accent: 'blue',
    title: 'DevSecOps Maturity Assessment',
    subtitle: 'Build Secure Software Faster',
    heroDesc: 'Evaluate your DevSecOps practices and identify areas for improvement to streamline development, enhance security, and achieve faster time-to-market. Our assessment covers the entire software delivery lifecycle.',
    features: [
      { icon: 'RefreshCw', title: 'CI/CD Pipeline Review', desc: 'Assess continuous integration and deployment pipelines for automation, reliability, and security integration.' },
      { icon: 'Shield', title: 'Security Integration', desc: 'Evaluate how security practices are embedded throughout the development lifecycle from planning to operations.' },
      { icon: 'Target', title: 'Process Assessment', desc: 'Review development workflows, code review practices, testing strategies, and deployment procedures.' },
      { icon: 'Zap', title: 'Toolchain Analysis', desc: 'Assess the effectiveness and integration of DevOps toolchain including SCM, CI/CD, monitoring, and security tools.' },
      { icon: 'BarChart3', title: 'Metrics & KPIs', desc: 'Define and measure key DevSecOps metrics including deployment frequency, lead time, MTTR, and change failure rate.' },
      { icon: 'Route', title: 'Improvement Roadmap', desc: 'Create a prioritized transformation roadmap addressing identified gaps and maturing DevSecOps capabilities.' },
    ],
    details: [
      { title: 'Assessment Dimensions', items: ['Culture: collaboration, shared responsibility, learning culture', 'Automation: CI/CD maturity, infrastructure as code, testing', 'Security: shift-left security, SAST/DAST, dependency scanning', 'Measurement: DORA metrics, SLIs, SLOs, error budgets', 'Sharing: feedback loops, blameless retrospectives, knowledge sharing'] },
      { title: 'Deliverables', items: ['Maturity scorecard across all dimensions', 'Identified gaps with severity ratings', 'Toolchain effectiveness analysis', 'Prioritized improvement initiatives', '6-month transformation roadmap'] },
    ],
  },
  'modernization-assessment': {
    parent: 'Strategy & Advisory',
    accent: 'blue',
    title: 'Modernization Assessment',
    subtitle: 'Unlock the Potential of Your Legacy Systems',
    heroDesc: 'Unlock the potential of your legacy systems by identifying the best modernization strategy for your needs. Our assessment analyzes your application portfolio to create a phased modernization roadmap.',
    features: [
      { icon: 'Lightbulb', title: 'Portfolio Analysis', desc: 'Comprehensive analysis of application portfolio including dependencies, technical debt, and business criticality.' },
      { icon: 'Route', title: 'Strategy Selection', desc: 'Identify optimal modernization patterns for each application: rehost, replatform, refactor, rebuild, or replace.' },
      { icon: 'BarChart3', title: 'Technical Debt Assessment', desc: 'Quantify technical debt including code quality, outdated frameworks, and infrastructure deficiencies.' },
      { icon: 'Target', title: 'Business Impact Analysis', desc: 'Assess business impact of modernization on operations, revenue, compliance, and competitive advantage.' },
      { icon: 'Zap', title: 'Phased Roadmap', desc: 'Create a phased modernization roadmap with clear milestones, risk mitigation, and business continuity planning.' },
      { icon: 'Database', title: 'Cost-Benefit Analysis', desc: 'Estimate costs, benefits, and ROI for each modernization approach, including TCO comparisons.' },
    ],
    details: [
      { title: 'Analysis Approach', items: ['Application portfolio inventory and classification', 'Dependency mapping and integration analysis', 'Technical debt quantification and scoring', 'Business value and criticality assessment', 'Risk and complexity evaluation'] },
      { title: 'Modernization Patterns', items: ['Rehost: lift-and-shift to cloud with minimal changes', 'Replatform: optimize for cloud without changing core code', 'Refactor: re-architect for cloud-native capabilities', 'Rebuild: completely rebuild using modern technologies', 'Replace: adopt SaaS or commercial alternatives'] },
      { title: 'Deliverables', items: ['Application portfolio assessment report', 'Modernization strategy recommendation per application', 'Phased implementation roadmap with timeline', 'TCO analysis and ROI projections', 'Risk assessment and mitigation plan'] },
    ],
  },

  // ── App Modernization ────────────────────────────────────
  'legacy-modernization': {
    parent: 'App Modernization',
    accent: 'teal',
    title: 'Legacy Modernization',
    subtitle: 'Transform Legacy Systems into Modern Solutions',
    heroDesc: 'Revitalize your legacy systems for the future, transforming them into modern, high-performing solutions. Enhance performance, scalability, and reliability while reducing technical debt and operational costs.',
    features: [
      { icon: 'RefreshCw', title: 'Application Assessment', desc: 'Comprehensive analysis of legacy applications including architecture, dependencies, and modernization feasibility.' },
      { icon: 'Code', title: 'Microservices Extraction', desc: 'Decompose monolithic applications into independently deployable microservices using strangler fig pattern.' },
      { icon: 'Cloud', title: 'Cloud Migration', desc: 'Migrate legacy workloads to modern cloud infrastructure with minimal disruption and maximum business continuity.' },
      { icon: 'Database', title: 'Data Modernization', desc: 'Modernize legacy databases to cloud-native solutions with improved performance, scalability, and cost efficiency.' },
      { icon: 'Shield', title: 'Security Enhancement', desc: 'Upgrade security posture of modernized applications with modern authentication, encryption, and compliance controls.' },
      { icon: 'Zap', title: 'Performance Optimization', desc: 'Optimize application performance through code modernization, caching strategies, and infrastructure improvements.' },
    ],
    details: [
      { title: 'Modernization Approaches', items: ['Strangler Fig pattern for incremental migration', 'Database decomposition and schema modernization', 'API gateway implementation for service integration', 'Containerization and orchestration setup', 'Observability and monitoring implementation'] },
      { title: 'Technical Improvements', items: ['Upgrade to modern frameworks and runtimes', 'Implement automated testing and CI/CD pipelines', 'Adopt infrastructure as code for consistent deployments', 'Implement comprehensive logging and monitoring', 'Establish performance benchmarks and SLAs'] },
    ],
  },
  devsecops: {
    parent: 'App Modernization',
    accent: 'teal',
    title: 'DevSecOps Implementation',
    subtitle: 'Build Secure Applications Faster',
    heroDesc: 'Integrate security practices throughout your development lifecycle with DevSecOps. Identify and address vulnerabilities early, automate security controls, and deliver secure software at speed.',
    features: [
      { icon: 'Shield', title: 'Shift-Left Security', desc: 'Embed security testing early in the development process with SAST, DAST, and dependency scanning integrated into CI/CD.' },
      { icon: 'RefreshCw', title: 'Pipeline Automation', desc: 'Automate security checks, compliance validation, and policy enforcement within your CI/CD pipelines.' },
      { icon: 'Code', title: 'Infrastructure as Code', desc: 'Apply security best practices to infrastructure as code with automated compliance checking and policy guardrails.' },
      { icon: 'Settings', title: 'Secrets Management', desc: 'Implement secure secrets management for API keys, passwords, and certificates across all environments.' },
      { icon: 'Target', title: 'Compliance Automation', desc: 'Automate compliance validation for industry standards including SOC2, HIPAA, PCI-DSS, and GDPR.' },
      { icon: 'Zap', title: 'Container Security', desc: 'Secure containerized applications with image scanning, runtime protection, and Kubernetes security policies.' },
    ],
    details: [
      { title: 'Security Controls', items: ['SAST integration for early code vulnerability detection', 'DAST for runtime application security testing', 'Software Composition Analysis for open-source dependencies', 'Container image scanning and vulnerability management', 'Infrastructure as code security scanning'] },
      { title: 'Pipeline Integration', items: ['Automated security gates in CI/CD pipelines', 'Policy as code for compliance enforcement', 'Automated secrets rotation and management', 'Vulnerability prioritization and automated remediation', 'Security dashboard and reporting integration'] },
    ],
  },
  'microsoft-workloads-modernization': {
    parent: 'App Modernization',
    accent: 'teal',
    title: 'Microsoft Workloads Modernization',
    subtitle: 'Optimize Your Microsoft Applications for the Cloud',
    heroDesc: 'Optimize your Microsoft applications for the cloud, improving performance, scalability, and cost-efficiency. Modernize your legacy Microsoft workloads to unlock new capabilities and reduce operational overhead.',
    features: [
      { icon: 'Monitor', title: '.NET Modernization', desc: 'Migrate and modernize .NET Framework applications to .NET Core/8+ for cross-platform support and improved performance.' },
      { icon: 'Database', title: 'SQL Server Optimization', desc: 'Modernize SQL Server databases with Azure SQL Managed Instance, Azure SQL DB, or SQL Server on Azure VMs.' },
      { icon: 'RefreshCw', title: 'Azure DevOps', desc: 'Implement Azure DevOps for end-to-end automation, CI/CD pipelines, and integrated project management.' },
      { icon: 'Shield', title: 'Active Directory', desc: 'Modernize Active Directory with Azure AD, implement hybrid identity, and enable single sign-on.' },
      { icon: 'Settings', title: 'SharePoint Migration', desc: 'Migrate SharePoint on-premises to SharePoint Online for modern collaboration and reduced maintenance.' },
      { icon: 'Cloud', title: 'Windows Server Migration', desc: 'Migrate Windows Server workloads to Azure, including Virtual Desktop, and modernize licensing with Azure Hybrid Benefit.' },
    ],
    details: [
      { title: 'Modernization Areas', items: ['.NET Framework to .NET 8 migration and containerization', 'SQL Server to Azure SQL Managed Instance migration', 'Active Directory to Azure AD Connect and hybrid identity', 'SharePoint on-premises to SharePoint Online migration', 'Windows Server to Azure IaaS and Azure Virtual Desktop'] },
      { title: 'Benefits', items: ['Reduced infrastructure and licensing costs with Azure Hybrid Benefit', 'Improved application performance and scalability', 'Enhanced security with Microsoft 365 Defender integration', 'Simplified management with unified Azure portal', 'Automatic updates and reduced maintenance overhead'] },
    ],
  },

  // ── AI, Data & Analytics ─────────────────────────────────
  'intelligent-data-application': {
    parent: 'AI, Data & Analytics',
    accent: 'purple',
    title: 'Intelligent Data Applications',
    subtitle: 'Build AI-Powered Applications That Drive Decisions',
    heroDesc: 'Build AI-powered data applications that deliver real-time insights and drive smarter decision-making across your organization. Leverage machine learning, natural language processing, and predictive analytics.',
    features: [
      { icon: 'Brain', title: 'Predictive Analytics', desc: 'Build applications that forecast trends, predict customer behavior, and anticipate business outcomes using ML models.' },
      { icon: 'MessageSquare', title: 'Natural Language Processing', desc: 'Integrate NLP capabilities for text analysis, sentiment analysis, chatbots, and intelligent document processing.' },
      { icon: 'Image', title: 'Computer Vision', desc: 'Deploy computer vision solutions for image recognition, object detection, and visual quality inspection.' },
      { icon: 'BarChart3', title: 'Real-Time Analytics', desc: 'Build real-time dashboards and analytics applications that process streaming data for immediate insights.' },
      { icon: 'Zap', title: 'Personalization Engines', desc: 'Create AI-driven personalization engines that deliver tailored content, recommendations, and user experiences.' },
      { icon: 'Database', title: 'Data Integration', desc: 'Integrate diverse data sources including structured, unstructured, and streaming data into unified AI applications.' },
    ],
    details: [
      { title: 'Application Types', items: ['Predictive analytics and forecasting dashboards', 'Intelligent document processing and OCR systems', 'Conversational AI and chatbot applications', 'Recommendation and personalization engines', 'Anomaly detection and fraud prevention systems'] },
      { title: 'Technology Stack', items: ['Python, R, or Java for ML model development', 'TensorFlow, PyTorch, or scikit-learn for ML frameworks', 'Apache Kafka or Azure Event Hubs for streaming data', 'Power BI or Tableau for visualization', 'Azure ML, SageMaker, or Vertex AI for MLOps'] },
    ],
  },
  'data-management-and-engineering': {
    parent: 'AI, Data & Analytics',
    accent: 'purple',
    title: 'Data Management & Engineering',
    subtitle: 'Build Robust Data Infrastructure',
    heroDesc: 'Design and implement robust data pipelines, warehouses, and lakes for scalable analytics and reliable data operations. Ensure your data infrastructure supports both current needs and future growth.',
    features: [
      { icon: 'Database', title: 'Data Pipeline Design', desc: 'Design and implement scalable batch and streaming data pipelines for ingesting, processing, and transforming data.' },
      { icon: 'Server', title: 'Data Warehousing', desc: 'Build enterprise data warehouses optimized for analytics, reporting, and business intelligence workloads.' },
      { icon: 'Layers', title: 'Data Lake Architecture', desc: 'Design and implement data lake architectures for storing and analyzing structured and unstructured data at scale.' },
      { icon: 'BarChart3', title: 'Data Governance', desc: 'Implement data cataloging, metadata management, data lineage, and quality frameworks for trusted data.' },
      { icon: 'Shield', title: 'Data Security', desc: 'Establish data security controls including encryption, access management, masking, and auditing.' },
      { icon: 'Zap', title: 'Performance Optimization', desc: 'Optimize data storage, query performance, and processing efficiency for cost-effective operations.' },
    ],
    details: [
      { title: 'Engineering Services', items: ['Batch and real-time data pipeline development', 'Data warehouse design and implementation (Snowflake, Redshift, BigQuery, Synapse)', 'Data lake implementation (Delta Lake, Apache Iceberg)', 'Data catalog and metadata management (Datahub, Atlan)', 'Data quality monitoring and alerting'] },
      { title: 'Governance Framework', items: ['Data classification and sensitivity labeling', 'Access control and RBAC implementation', 'Data lineage tracking and impact analysis', 'Data retention and archival policies', 'Compliance reporting for GDPR, CCPA, SOC2'] },
    ],
  },
  'data-lakehouse': {
    parent: 'AI, Data & Analytics',
    accent: 'purple',
    title: 'Data Lakehouse',
    subtitle: 'Unify Your Data Lake and Warehouse',
    heroDesc: 'Unify your data lake and warehouse into a single platform for advanced analytics, ML workloads, and real-time insights. Simplify your data architecture with open formats and ACID transactions.',
    features: [
      { icon: 'Layers', title: 'Unified Platform', desc: 'Combine data lake flexibility with warehouse reliability on a single platform for all data workloads.' },
      { icon: 'Database', title: 'ACID Transactions', desc: 'Implement ACID-compliant transactions on data lake storage for reliable data operations with Delta Lake or Iceberg.' },
      { icon: 'BarChart3', title: 'BI & ML Convergence', desc: 'Support both business intelligence and machine learning workloads on the same data foundation.' },
      { icon: 'Zap', title: 'Real-Time Processing', desc: 'Enable real-time data ingestion and processing with streaming capabilities integrated into the lakehouse.' },
      { icon: 'Code', title: 'Open Formats', desc: 'Use open table formats (Parquet, Delta Lake, Iceberg) for interoperability across tools and engines.' },
      { icon: 'Settings', title: 'Schema Evolution', desc: 'Support schema evolution and time travel for flexible data management and historical analysis.' },
    ],
    details: [
      { title: 'Lakehouse Components', items: ['Object storage (ADLS, S3, GCS) as the foundation', 'Open table format (Delta Lake, Apache Iceberg, Hudi)', 'Unified catalog and metadata management', 'Compute engines (Spark, Presto, Dremio, Databricks)', 'BI tool connectivity (Power BI, Tableau, Looker)'] },
      { title: 'Implementation Benefits', items: ['Reduced data duplication and storage costs', 'Single source of truth for all analytics', 'Simplified data architecture and reduced complexity', 'Support for streaming, batch, and interactive analytics', 'Open standards prevent vendor lock-in'] },
    ],
  },
  'database-modernisation': {
    parent: 'AI, Data & Analytics',
    accent: 'purple',
    title: 'Database Modernization',
    subtitle: 'Migrate and Modernize Your Databases',
    heroDesc: 'Migrate and modernize your databases to cloud-native solutions for better performance, scale, and cost efficiency. Reduce operational overhead while improving reliability and security.',
    features: [
      { icon: 'Database', title: 'Migration Planning', desc: 'Comprehensive assessment and planning for database migration including compatibility analysis and risk assessment.' },
      { icon: 'Cloud', title: 'Cloud Migration', desc: 'Migrate on-premises databases to managed cloud services including Azure SQL, Amazon RDS, and Cloud SQL.' },
      { icon: 'RefreshCw', title: 'Open Source Adoption', desc: 'Modernize commercial databases to open-source alternatives like PostgreSQL and MySQL for cost savings.' },
      { icon: 'Zap', title: 'Performance Tuning', desc: 'Optimize database performance through query tuning, indexing strategies, and configuration optimization.' },
      { icon: 'Shield', title: 'High Availability', desc: 'Implement HA/DR configurations including replication, failover clusters, and geographic redundancy.' },
      { icon: 'Server', title: 'Managed Services', desc: 'Adopt fully managed database services to eliminate operational overhead of patching, backups, and scaling.' },
    ],
    details: [
      { title: 'Migration Scenarios', items: ['Oracle to PostgreSQL or Azure SQL migration', 'SQL Server to Azure SQL Managed Instance', 'MySQL/PostgreSQL to cloud-managed services', 'MongoDB to Azure Cosmos DB migration', 'Cassandra to managed NoSQL services'] },
      { title: 'Modernization Benefits', items: ['50-70% reduction in database operational costs', 'Automated patching, backups, and high availability', 'Built-in encryption, auditing, and compliance features', 'Elastic scaling without application downtime', 'Integrated monitoring and performance insights'] },
    ],
  },
  'ml-ops': {
    parent: 'AI, Data & Analytics',
    accent: 'purple',
    title: 'MLOps',
    subtitle: 'Operationalize Machine Learning at Scale',
    heroDesc: 'Operationalize machine learning models with automated CI/CD pipelines, robust monitoring, and governance at scale. Bridge the gap between data science and production operations.',
    features: [
      { icon: 'RefreshCw', title: 'ML Pipeline Automation', desc: 'Automate end-to-end ML pipelines including data validation, model training, evaluation, and deployment.' },
      { icon: 'Server', title: 'Model Registry', desc: 'Implement model versioning, registry, and governance for tracking model lineage and managing deployments.' },
      { icon: 'BarChart3', title: 'Model Monitoring', desc: 'Monitor model performance, drift detection, and data quality in production with automated alerting.' },
      { icon: 'Zap', title: 'A/B Testing', desc: 'Implement A/B testing and canary deployments for safe model rollout and performance comparison.' },
      { icon: 'Shield', title: 'Governance & Compliance', desc: 'Establish ML governance including model documentation, bias detection, explainability, and audit trails.' },
      { icon: 'Code', title: 'Feature Store', desc: 'Implement feature stores for reusable, consistent feature engineering across models and teams.' },
    ],
    details: [
      { title: 'MLOps Components', items: ['ML pipeline orchestration (Airflow, Kubeflow, Azure ML)', 'Model registry and versioning (MLflow, DVC)', 'Feature store implementation (Feast, Tecton)', 'Model monitoring and observability', 'Automated retraining and CI/CD for ML'] },
      { title: 'Maturity Levels', items: ['Level 0: Manual, script-driven ML processes', 'Level 1: ML pipeline automation with CI/CD', 'Level 2: Automated model retraining and deployment', 'Level 3: Full MLOps with governance and monitoring', 'Level 4: Autonomous ML operations with self-healing'] },
    ],
  },

  // ── Cloud Infrastructure & Security ──────────────────────
  'cloud-migration': {
    parent: 'Cloud Infrastructure & Security',
    accent: 'orange',
    title: 'Cloud Migration',
    subtitle: 'Seamlessly Migrate to the Cloud',
    heroDesc: 'Migrate your data center workloads to the cloud with a seamless migration process, cost optimization strategies, and improved security and compliance. Minimize downtime and maximize business continuity.',
    features: [
      { icon: 'Cloud', title: 'Discovery & Assessment', desc: 'Comprehensive discovery of on-premises workloads, dependencies, and migration feasibility assessment.' },
      { icon: 'Route', title: 'Migration Strategy', desc: 'Develop a detailed migration strategy with workload prioritization, migration waves, and rollback planning.' },
      { icon: 'Zap', title: 'Execution & Testing', desc: 'Execute migration with automated tools, validate workloads, and conduct thorough testing and optimization.' },
      { icon: 'Shield', title: 'Security & Compliance', desc: 'Implement security controls, compliance frameworks, and governance policies in the target cloud environment.' },
      { icon: 'BarChart3', title: 'Cost Optimization', desc: 'Right-size resources, implement auto-scaling, and optimize reserved instances for cost efficiency.' },
      { icon: 'Settings', title: 'Operations Handover', desc: 'Transition to operational management with runbooks, monitoring, and managed services support.' },
    ],
    details: [
      { title: 'Migration Phases', items: ['Discover: workload discovery, dependency mapping, TCO analysis', 'Assess: migration feasibility, risk assessment, strategy selection', 'Plan: migration waves, timeline, resource planning, testing strategy', 'Migrate: execution using Azure Migrate, AWS MGN, or GPC Migrate', 'Optimize: right-sizing, cost optimization, performance tuning', 'Operate: handover, runbooks, monitoring, managed services'] },
      { title: 'Migration Scenarios', items: ['Data center exit: complete migration from on-premises', 'Hybrid cloud: extended data center with cloud bursting', 'Application migration: specific workload migration', 'Database migration: SQL, NoSQL, and data warehouse migration', 'Desktop virtualization: VDI migration to cloud'] },
    ],
  },
  'disaster-recovery': {
    parent: 'Cloud Infrastructure & Security',
    accent: 'orange',
    title: 'Disaster Recovery',
    subtitle: 'Ensure Business Continuity',
    heroDesc: 'Ensure business continuity in the face of disruptions with comprehensive disaster recovery plans, minimized downtime and data loss, and enhanced business resilience.',
    features: [
      { icon: 'Shield', title: 'DR Planning', desc: 'Design comprehensive disaster recovery plans with clearly defined RPO, RTO, and recovery procedures.' },
      { icon: 'Server', title: 'Automated Failover', desc: 'Implement automated failover and failback procedures to minimize manual intervention and recovery time.' },
      { icon: 'Zap', title: 'Data Replication', desc: 'Establish continuous data replication across geographic regions for data protection and availability.' },
      { icon: 'Settings', title: 'Testing & Validation', desc: 'Conduct regular DR testing and validation exercises to ensure plans remain effective and up to date.' },
      { icon: 'BarChart3', title: 'Monitoring & Alerting', desc: 'Implement monitoring and alerting for DR readiness, replication health, and potential failure scenarios.' },
      { icon: 'Route', title: 'Multi-Region Architecture', desc: 'Design multi-region active-active or active-passive architectures for maximum resilience.' },
    ],
    details: [
      { title: 'DR Strategies', items: ['Backup & Restore: cost-effective with longer RTO', 'Pilot Light: minimal replica with on-demand scale-up', 'Warm Standby: scaled-down production replica', 'Multi-Site Active-Active: full production in multiple regions', 'Multi-Region with Azure Site Recovery or AWS DR'] },
      { title: 'Implementation Steps', items: ['Business impact analysis and RPO/RTO definition', 'DR architecture design and tool selection', 'Replication configuration and testing', 'Failover runbook development and automation', 'Regular DR drills and compliance reporting'] },
    ],
  },
  'managed-services': {
    parent: 'Cloud Infrastructure & Security',
    accent: 'orange',
    title: 'Managed Services',
    subtitle: 'Focus on Innovation, We Handle Operations',
    heroDesc: 'Focus on innovation while we engineer your cloud reliability with 24/7 monitoring and support, reduced complexity, and expert cloud management. Let our certified engineers manage your cloud operations.',
    features: [
      { icon: 'Settings', title: '24/7 Monitoring', desc: 'Round-the-clock proactive monitoring of cloud infrastructure, applications, and security with immediate incident response.' },
      { icon: 'Shield', title: 'Security Management', desc: 'Continuous security monitoring, patch management, vulnerability remediation, and compliance enforcement.' },
      { icon: 'BarChart3', title: 'Cost Optimization', desc: 'Ongoing cloud cost optimization including right-sizing, reserved instance management, and waste elimination.' },
      { icon: 'Zap', title: 'Performance Tuning', desc: 'Regular performance reviews and optimizations to ensure optimal application and infrastructure performance.' },
      { icon: 'Server', title: 'Backup Management', desc: 'Automated backup management, retention policy enforcement, and regular restore testing for data protection.' },
      { icon: 'Route', title: 'Cloud Governance', desc: 'Establish and enforce cloud governance policies including tagging, access control, and compliance standards.' },
    ],
    details: [
      { title: 'Service Scope', items: ['Infrastructure monitoring and incident management (24/7)', 'Security operations including patch and vulnerability management', 'Cloud cost optimization and FinOps management', 'Backup and disaster recovery operations', 'Cloud governance and compliance enforcement'] },
      { title: 'Service Levels', items: ['Bronze: 8x5 monitoring with 4-hour response', 'Silver: 12x6 monitoring with 2-hour response', 'Gold: 24x7 monitoring with 1-hour response', 'Platinum: 24x7 with 30-minute response and dedicated engineer', 'Custom: tailored SLAs for enterprise requirements'] },
    ],
  },
  'azure-expert-msp': {
    parent: 'Cloud Infrastructure & Security',
    accent: 'orange',
    title: 'Azure Expert MSP',
    subtitle: 'Premium Azure Managed Services',
    heroDesc: 'Leverage our Azure Expert MSP status for premium managed services and support. As a Microsoft Azure Expert MSP, we deliver the highest standard of cloud management and optimization.',
    features: [
      { icon: 'Shield', title: 'Azure Governance', desc: 'Implement Azure Policy, RBAC, management groups, and landing zones for enterprise-grade governance.' },
      { icon: 'Settings', title: 'Cost Management', desc: 'Expert Azure cost management including reservations, savings plans, and budget enforcement.' },
      { icon: 'Zap', title: 'Performance Optimization', desc: 'Optimize Azure workloads for performance using Azure Advisor, Well-Architected Review, and best practices.' },
      { icon: 'Server', title: 'Hybrid Management', desc: 'Manage hybrid environments with Azure Arc, connecting on-premises and multi-cloud resources.' },
      { icon: 'Code', title: 'Infrastructure as Code', desc: 'Implement IaC with ARM/Bicep/Terraform for consistent, repeatable Azure deployments.' },
      { icon: 'BarChart3', title: 'Azure Native Tools', desc: 'Leverage Azure Monitor, Sentinel, Defender, and native tools for comprehensive management.' },
    ],
    details: [
      { title: 'Azure Expert MSP Capabilities', items: ['Azure landing zone design and implementation', 'Enterprise-scale governance with Azure Policy', 'Cost management with Azure Cost Management + Billing', 'Security operations with Azure Sentinel and Defender', 'Hybrid management with Azure Arc'] },
      { title: 'MSP Benefits', items: ['Direct access to Microsoft engineering support', 'Early access to Azure preview features', 'Co-innovation opportunities with Microsoft', 'Joint customer success engagements', 'Advanced Azure training and certifications'] },
    ],
  },
  'cloud-finops': {
    parent: 'Cloud Infrastructure & Security',
    accent: 'orange',
    title: 'Cloud FinOps',
    subtitle: 'Optimize Cloud Costs and Maximize ROI',
    heroDesc: 'Optimize your cloud costs and maximize ROI by gaining control of cloud spending, identifying and eliminating waste, and improving cloud budgeting and forecasting with financial operations best practices.',
    features: [
      { icon: 'BarChart3', title: 'Cost Visibility', desc: 'Gain comprehensive visibility into cloud spending with detailed cost allocation, tagging, and reporting.' },
      { icon: 'Target', title: 'Waste Elimination', desc: 'Identify and eliminate cloud waste including idle resources, oversized instances, and unattached storage.' },
      { icon: 'Zap', title: 'Rightsizing', desc: 'Right-size cloud resources to match workload demands, eliminating over-provisioning and under-utilization.' },
      { icon: 'Shield', title: 'Reserved Instances', desc: 'Optimize reserved instance and savings plan purchases for maximum discount with minimum commitment risk.' },
      { icon: 'Settings', title: 'Budget Governance', desc: 'Implement cloud budget policies, automated alerts, and governance controls to prevent cost overruns.' },
      { icon: 'Route', title: 'FinOps Culture', desc: 'Establish a FinOps culture with cross-team collaboration, training, and accountability for cloud spending.' },
    ],
    details: [
      { title: 'FinOps Capabilities', items: ['Cost allocation with tagging and hierarchy', 'Budget management with automated alerts', 'Reserved instance and savings plan optimization', 'Rightsizing recommendations and automation', 'Anomaly detection and cost forecasting'] },
      { title: 'FinOps Maturity Model', items: ['Level 1: Visibility — basic cost reporting and tagging', 'Level 2: Optimization — rightsizing and waste elimination', 'Level 3: Governance — budgets, policies, and controls', 'Level 4: Automation — automated optimization and remediation', 'Level 5: Culture — FinOps embedded in organizational processes'] },
    ],
  },
  'sap-cloud-solutions': {
    parent: 'Cloud Infrastructure & Security',
    accent: 'orange',
    title: 'SAP Cloud Solutions',
    subtitle: 'Unlock the Power of SAP in the Cloud',
    heroDesc: 'Unlock the power of SAP in the cloud with secure and scalable SAP solutions, enhanced agility, and improved security and compliance. Run your SAP workloads on optimized cloud infrastructure.',
    features: [
      { icon: 'Cloud', title: 'SAP Migration', desc: 'Migrate SAP workloads to cloud infrastructure with minimal disruption and optimized architecture.' },
      { icon: 'Database', title: 'SAP HANA on Cloud', desc: 'Deploy SAP HANA on cloud with high availability, optimized performance, and automated management.' },
      { icon: 'Shield', title: 'SAP Security', desc: 'Implement comprehensive SAP security including access control, encryption, and compliance monitoring.' },
      { icon: 'Zap', title: 'Performance Optimization', desc: 'Optimize SAP architecture for cloud with right-sized infrastructure and performance tuning.' },
      { icon: 'Settings', title: 'SAP Management', desc: 'Ongoing management of SAP environments including patches, upgrades, and performance monitoring.' },
      { icon: 'BarChart3', title: 'Cost Optimization', desc: 'Optimize SAP licensing and infrastructure costs with cloud-specific savings programs.' },
    ],
    details: [
      { title: 'SAP on Cloud Options', items: ['SAP S/4HANA on Azure/AWS/GCP optimized infrastructure', 'SAP HANA Large Instances for demanding workloads', 'SAP Business Suite on cloud for existing deployments', 'SAP BW/4HANA for analytics workloads', 'Hybrid SAP with on-premises and cloud integration'] },
      { title: 'Migration Approach', items: ['SAP workload assessment and discovery', 'SAP architecture design for cloud', 'Technical migration planning and execution', 'Performance validation and user acceptance testing', 'Operations handover and managed services'] },
    ],
  },
}

export function getSubServiceData(slug: string): SubServiceData | undefined {
  return SUB[slug]
}

export function getSubServiceSlugs(): string[] {
  return Object.keys(SUB)
}
