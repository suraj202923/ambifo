import SubServiceLayout from '../../../components/common/SubServiceLayout'
import { getSubServiceData } from '../../../data/subServicesData'

const slug = 'legacy-modernization'

export default function LegacyModernization() {
  const data = getSubServiceData(slug)
  if (!data) return null
  return (
    <SubServiceLayout
      title={data.title}
      subtitle={data.subtitle}
      heroDesc={data.heroDesc}
      accent={data.accent}
      features={data.features}
      details={data.details}
      ctaText={data.ctaText}
      ctaDesc={data.ctaDesc}
      parentService={data.parent}
    />
  )
}
