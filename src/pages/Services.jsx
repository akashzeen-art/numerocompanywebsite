import PageLayout, { InnerCta } from '../components/PageLayout'
import ServicesSection from '../components/home/ServicesSection'

export default function Services() {
  return (
    <PageLayout
      label="Services"
      title="End-to-end IT services for modern businesses"
      description="Below are the services which we offer — from infrastructure to automation."
    >
      <ServicesSection showHeader={false} />
      <InnerCta />
    </PageLayout>
  )
}
