import PageLayout, { InnerCta } from '../components/PageLayout'
import PortfolioSection from '../components/home/PortfolioSection'

export default function Portfolio() {
  return (
    <PageLayout
      label="Portfolio"
      title="Projects that showcase our expertise"
      description="Explore the solutions we've delivered across cloud, infrastructure, and automation."
    >
      <PortfolioSection showHeader={false} />
      <InnerCta />
    </PageLayout>
  )
}
