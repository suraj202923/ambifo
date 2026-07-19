import { lazy, Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'
import Layout from './components/layout/Layout'
import ErrorBoundary from './components/common/ErrorBoundary'

const HomePage = lazy(() => import('./pages/HomePage'))
const StrategyAdvisory = lazy(() => import('./pages/services/StrategyAdvisory'))
const AppModernization = lazy(() => import('./pages/services/AppModernization'))
const AIDataAnalytics = lazy(() => import('./pages/services/AIDataAnalytics'))
const CloudInfrastructure = lazy(() => import('./pages/services/CloudInfrastructure'))
const GenerativeAI = lazy(() => import('./pages/services/GenerativeAI'))
const GenAISolutionFactory = lazy(() => import('./pages/solutions/GenAISolutionFactory'))
const Industries = lazy(() => import('./pages/industries/Industries'))
const IndustryDetail = lazy(() => import('./pages/industries/IndustryDetail'))
const Media = lazy(() => import('./pages/insights/Media'))
const CaseStudies = lazy(() => import('./pages/insights/CaseStudies'))
const Blog = lazy(() => import('./pages/insights/Blog'))
const Events = lazy(() => import('./pages/insights/Events'))
const About = lazy(() => import('./pages/company/About'))
const Leadership = lazy(() => import('./pages/company/Leadership'))
const Partners = lazy(() => import('./pages/company/Partners'))
const Careers = lazy(() => import('./pages/company/Careers'))
const ContactPage = lazy(() => import('./pages/ContactPage'))
const NotFound = lazy(() => import('./pages/NotFound'))
const PrivacyPolicy = lazy(() => import('./pages/PrivacyPolicy'))
const Terms = lazy(() => import('./pages/Terms'))
const CSRPolicy = lazy(() => import('./pages/CSRPolicy'))
// Strategy sub-pages
const DigitalMaturityAssessment = lazy(() => import('./pages/services/strategy/DigitalMaturityAssessment'))
const AIReadinessAssessment = lazy(() => import('./pages/services/strategy/AIReadinessAssessment'))
const CloudAdvisoryServices = lazy(() => import('./pages/services/strategy/CloudAdvisoryServices'))
const WellArchitectedFrameworkReview = lazy(() => import('./pages/services/strategy/WellArchitectedFrameworkReview'))
const DevSecOpsMaturityAssessments = lazy(() => import('./pages/services/strategy/DevSecOpsMaturityAssessments'))
const ModernizationAssessment = lazy(() => import('./pages/services/strategy/ModernizationAssessment'))
// App Modernization sub-pages
const LegacyModernization = lazy(() => import('./pages/services/app-modernization/LegacyModernization'))
const DevSecOpsSub = lazy(() => import('./pages/services/app-modernization/DevSecOps'))
const MicrosoftWorkloadsModernization = lazy(() => import('./pages/services/app-modernization/MicrosoftWorkloadsModernization'))
// AI, Data & Analytics sub-pages
const IntelligentDataApplication = lazy(() => import('./pages/services/ai-data/IntelligentDataApplication'))
const DataManagementAndEngineering = lazy(() => import('./pages/services/ai-data/DataManagementAndEngineering'))
const DataLakehouse = lazy(() => import('./pages/services/ai-data/DataLakehouse'))
const DatabaseModernisation = lazy(() => import('./pages/services/ai-data/DatabaseModernisation'))
const MLOps = lazy(() => import('./pages/services/ai-data/MLOps'))
// Cloud Infrastructure sub-pages
const CloudMigration = lazy(() => import('./pages/services/cloud-infra/CloudMigration'))
const DisasterRecovery = lazy(() => import('./pages/services/cloud-infra/DisasterRecovery'))
const ManagedServices = lazy(() => import('./pages/services/cloud-infra/ManagedServices'))
const AzureExpertMSP = lazy(() => import('./pages/services/cloud-infra/AzureExpertMSP'))
const CloudFinOps = lazy(() => import('./pages/services/cloud-infra/CloudFinOps'))
const SAPCloudSolutions = lazy(() => import('./pages/services/cloud-infra/SAPCloudSolutions'))
// Platform pages
const Entisense = lazy(() => import('./pages/platforms/Entisense'))
const FastDataBroker = lazy(() => import('./pages/platforms/FastDataBroker'))
const Swayam = lazy(() => import('./pages/solutions/Swayam'))

function LoadingSpinner() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center">
      <div className="w-10 h-10 border-4 border-blue-600/20 border-t-blue-600 rounded-full animate-spin" />
    </div>
  )
}

export default function App() {
  return (
    <ErrorBoundary>
      <Suspense fallback={<LoadingSpinner />}>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/services/strategy-and-advisory" element={<StrategyAdvisory />} />
            <Route path="/services/app-modernization" element={<AppModernization />} />
            <Route path="/services/ai-data-analytics" element={<AIDataAnalytics />} />
            <Route path="/services/cloud-infrastructure" element={<CloudInfrastructure />} />
            <Route path="/services/generative-ai" element={<GenerativeAI />} />
            {/* Strategy sub-routes */}
            <Route path="/services/strategy-and-advisory/digital-maturity-assessment" element={<DigitalMaturityAssessment />} />
            <Route path="/services/strategy-and-advisory/ai-readiness-assessment" element={<AIReadinessAssessment />} />
            <Route path="/services/strategy-and-advisory/cloud-advisory-services" element={<CloudAdvisoryServices />} />
            <Route path="/services/strategy-and-advisory/well-architected-framework-review" element={<WellArchitectedFrameworkReview />} />
            <Route path="/services/strategy-and-advisory/dev-secops-maturity-assessments" element={<DevSecOpsMaturityAssessments />} />
            <Route path="/services/strategy-and-advisory/modernization-assessment" element={<ModernizationAssessment />} />
            {/* App Modernization sub-routes */}
            <Route path="/services/app-modernization/legacy-modernization" element={<LegacyModernization />} />
            <Route path="/services/app-modernization/devsecops" element={<DevSecOpsSub />} />
            <Route path="/services/app-modernization/microsoft-workloads-modernization" element={<MicrosoftWorkloadsModernization />} />
            {/* AI, Data & Analytics sub-routes */}
            <Route path="/services/ai-data-analytics/intelligent-data-application" element={<IntelligentDataApplication />} />
            <Route path="/services/ai-data-analytics/data-management-and-engineering" element={<DataManagementAndEngineering />} />
            <Route path="/services/ai-data-analytics/data-lakehouse" element={<DataLakehouse />} />
            <Route path="/services/ai-data-analytics/database-modernisation" element={<DatabaseModernisation />} />
            <Route path="/services/ai-data-analytics/ml-ops" element={<MLOps />} />
            {/* Cloud Infrastructure sub-routes */}
            <Route path="/services/cloud-infrastructure-security/cloud-migration" element={<CloudMigration />} />
            <Route path="/services/cloud-infrastructure-security/disaster-recovery" element={<DisasterRecovery />} />
            <Route path="/services/cloud-infrastructure-security/managed-services" element={<ManagedServices />} />
            <Route path="/services/cloud-infrastructure-security/azure-expert-msp" element={<AzureExpertMSP />} />
            <Route path="/services/cloud-infrastructure-security/cloud-finops" element={<CloudFinOps />} />
            <Route path="/services/cloud-infrastructure-security/sap-cloud-solutions" element={<SAPCloudSolutions />} />
            <Route path="/platforms/entisense" element={<Entisense />} />
            <Route path="/platforms/fastdatabroker" element={<FastDataBroker />} />
            <Route path="/solutions/gen-ai-solution-factory" element={<GenAISolutionFactory />} />
            <Route path="/solutions/swayam" element={<Swayam />} />
            <Route path="/industries" element={<Industries />} />
            <Route path="/industries/:industry" element={<IndustryDetail />} />
            <Route path="/insights-resources/media" element={<Media />} />
            <Route path="/insights-resources/case-study" element={<CaseStudies />} />
            <Route path="/insights-resources/blog-posts" element={<Blog />} />
            <Route path="/insights-resources/events-webinars" element={<Events />} />
            <Route path="/company/about-us" element={<About />} />
            <Route path="/company/leadership" element={<Leadership />} />
            <Route path="/company/partners" element={<Partners />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/contact-us" element={<ContactPage />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/csr-policy" element={<CSRPolicy />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </Suspense>
    </ErrorBoundary>
  )
}
