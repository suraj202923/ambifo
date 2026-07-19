import { BarChart3, Target, Route, Shield, RefreshCw, Monitor, Code, Brain, Database, Layers, Cloud, Server, Settings, Sparkles, MessageSquare, Image, Lightbulb } from 'lucide-react'

export const strategyAdvisory = {
  title: 'Strategy & Advisory',
  subtitle: 'Navigate change with confidence. Our experts help you define a clear vision, assess readiness, and build a roadmap for digital transformation.',
  accent: 'blue',
  services: [
    { icon: BarChart3, title: 'Digital Maturity Assessment', desc: 'Analyze your current digital maturity level and receive a strategic roadmap for becoming a digital leader. Evaluate your current digital capabilities and identify growth opportunities across people, process, and technology.', image: '/images/services/strategy.jpg' },
    { icon: Target, title: 'AI Readiness Assessment', desc: 'Identify potential gaps and opportunities to successfully implement AI solutions. Assess your organization\'s preparedness for AI adoption with a structured framework and actionable roadmap.', image: '/images/services/generative-ai.jpg' },
    { icon: Route, title: 'Cloud Advisory Services', desc: 'Develop a winning cloud strategy aligned with your business objectives, covering cloud adoption, operating models, FinOps, and architecture consulting.', image: '/images/services/cloud.jpg' },
    { icon: Shield, title: 'Well-Architected Framework Review', desc: 'Uncover improvement opportunities and elevate your cloud architecture for cost-efficiency, security, and performance. Review your cloud architecture against AWS/Azure best practices.', image: '/images/services/network.jpg' },
    { icon: RefreshCw, title: 'DevSecOps Maturity Assessment', desc: 'Evaluate your DevSecOps practices and identify areas for improvement to streamline development, enhance security, and achieve faster time-to-market.', image: '/images/services/modern-app.jpg' },
    { icon: Lightbulb, title: 'Modernization Assessment', desc: 'Unlock the potential of your legacy systems by identifying the best modernization strategy for your needs. Analyze legacy systems and create a phased modernization roadmap.', image: '/images/services/hardware.jpg' },
  ],
}

export const appModernization = {
  title: 'App Modernization',
  subtitle: 'Build and modernize efficiently. Transform your application portfolio with cloud-native approaches and modern DevOps practices.',
  accent: 'teal',
  services: [
    { icon: Code, title: 'Cloud-Native Rapid Application Development', desc: 'Accelerate innovation with cloud-native apps that leverage the latest technologies and architectures. Build scalable, resilient, and high-performing applications that meet your evolving business needs.' },
    { icon: Shield, title: 'DevSecOps Implementation', desc: 'Build secure applications faster with DevSecOps, integrating security practices throughout your development lifecycle. Identify and address vulnerabilities early in the development process.' },
    { icon: Monitor, title: 'Microsoft Workloads Modernization', desc: 'Optimize your Microsoft applications for the cloud, improving performance, scalability, and cost-efficiency. Modernize your legacy Microsoft applications to unlock new capabilities.' },
    { icon: RefreshCw, title: 'Legacy Modernization', desc: 'Revitalize your legacy systems for the future, transforming them into modern, high-performing solutions. Enhance the performance, scalability, and reliability of your legacy applications.' },
  ],
}

export const aiDataAnalytics = {
  title: 'AI, Data & Analytics',
  subtitle: 'Unlock the power of your data. Transform raw data into strategic assets with AI-driven analytics and modern data platforms.',
  accent: 'purple',
  services: [
    { icon: Brain, title: 'Intelligent Data Applications', desc: 'Build AI-powered data applications that deliver real-time insights and drive smarter decision-making across your organization.' },
    { icon: Database, title: 'Data Management & Engineering', desc: 'Design and implement robust data pipelines, warehouses, and lakes for scalable analytics and reliable data operations.' },
    { icon: Layers, title: 'Data Lakehouse', desc: 'Unify your data lake and warehouse into a single platform for advanced analytics, ML workloads, and real-time insights.' },
    { icon: Server, title: 'Database Modernization', desc: 'Migrate and modernize your databases to cloud-native solutions for better performance, scale, and cost efficiency.' },
    { icon: BarChart3, title: 'MLOps', desc: 'Operationalize machine learning models with automated CI/CD pipelines, robust monitoring, and governance at scale.' },
  ],
}

export const cloudInfrastructure = {
  title: 'Cloud Infrastructure & Security',
  subtitle: 'Securely scale in the cloud. Build a resilient, secure, and cost-optimized cloud infrastructure that grows with your business.',
  accent: 'orange',
  services: [
    { icon: Cloud, title: 'Cloud Migration', desc: 'Migrate your data center workloads to the cloud with a seamless migration process, cost optimization strategies, and improved security and compliance.' },
    { icon: Server, title: 'Disaster Recovery', desc: 'Ensure business continuity in the face of disruptions with comprehensive disaster recovery plans, minimized downtime and data loss, and enhanced business resilience.' },
    { icon: Settings, title: 'Managed Services', desc: 'Focus on innovation while we engineer your cloud reliability with 24/7 monitoring and support, reduced complexity, and expert cloud management.' },
    { icon: Shield, title: 'Azure Expert MSP', desc: 'Leverage Ambifo\'s Azure Expert MSP status for premium Microsoft Azure management, migration, and optimization services.' },
    { icon: BarChart3, title: 'Cloud FinOps', desc: 'Optimize your cloud costs and maximize ROI by gaining control of cloud spending, identifying and eliminating cloud waste, and improving cloud budgeting and forecasting.' },
    { icon: Database, title: 'SAP Cloud Solutions', desc: 'Unlock the power of SAP in the cloud with secure and scalable SAP solutions, enhanced agility, and improved security and compliance.' },
  ],
}

export const generativeAI = {
  title: 'Generative AI',
  subtitle: 'Unlock the transformative power of generative AI. From automation to content creation, we help you harness AI for real business impact.',
  accent: 'green',
  services: [
    { icon: Sparkles, title: 'Intelligent Automation', desc: 'Automate complex business processes with generative AI models that understand context, reason about problems, and generate accurate outputs at scale.' },
    { icon: BarChart3, title: 'Advanced Data Analysis', desc: 'Leverage AI to analyze unstructured data, generate comprehensive reports, and uncover actionable insights at unprecedented speed and accuracy.' },
    { icon: MessageSquare, title: 'AI-Powered Content Generation', desc: 'Generate high-quality text, images, code, and multimedia content using cutting-edge generative AI models tailored to your business needs.' },
    { icon: Image, title: 'Automated Video Storytelling', desc: 'Transform text into engaging video content with AI-powered storytelling, enabling rapid creation of marketing, training, and communication materials.' },
    { icon: Brain, title: 'Digital Virtual Assistant', desc: 'Deploy intelligent virtual assistants that understand natural language, learn from interactions, and provide personalized customer experiences 24/7.' },
    { icon: Code, title: 'Chatbot & AI Agents', desc: 'Build sophisticated AI agents and chatbots that handle complex queries, automate workflows, and drive operational efficiency across your organization.' },
  ],
}

export const accentMap = {
  blue: { from: 'from-blue-600', bg: 'bg-blue-100', text: 'text-blue-600', hover: 'hover:border-blue-200', group: 'group-hover:bg-blue-600', groupText: 'group-hover:text-white' },
  teal: { from: 'from-teal-500', bg: 'bg-teal-100', text: 'text-teal-600', hover: 'hover:border-teal-200', group: 'group-hover:bg-teal-600', groupText: 'group-hover:text-white' },
  purple: { from: 'from-purple-500', bg: 'bg-purple-100', text: 'text-purple-600', hover: 'hover:border-purple-200', group: 'group-hover:bg-purple-600', groupText: 'group-hover:text-white' },
  orange: { from: 'from-orange-500', bg: 'bg-orange-100', text: 'text-orange-600', hover: 'hover:border-orange-200', group: 'group-hover:bg-orange-600', groupText: 'group-hover:text-white' },
  green: { from: 'from-green-500', bg: 'bg-green-100', text: 'text-green-600', hover: 'hover:border-green-200', group: 'group-hover:bg-green-600', groupText: 'group-hover:text-white' },
}

export const whyChooseIcons = [
  { label: 'Enterprise-Grade Expertise', icon: '/images/services/icons/rocket.svg' },
  { label: 'Industry-Specific Solutions', icon: '/images/services/icons/factory.svg' },
  { label: 'Comprehensive Service Suite', icon: '/images/services/icons/cloud-data.svg' },
  { label: 'Thought Leadership & Innovation', icon: '/images/services/icons/bulb.svg' },
  { label: 'Measurable ROI', icon: '/images/services/icons/chart.svg' },
]

export const blueTickIcon = '/images/services/icons/blue-tick.svg'
export const arrowIcon = '/images/services/icons/arrow.svg'
export const whiteArrowIcon = '/images/services/icons/down-arrow.svg'
