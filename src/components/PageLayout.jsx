import { Link } from 'react-router-dom'
import Footer from './Footer'
import Header from './Header'

function PageHero({ label, title, description }) {
  return (
    <section className="page-hero">
      <div className="page-hero__inner">
        <span className="section-label">{label}</span>
        <h1>{title}</h1>
        {description && <p>{description}</p>}
      </div>
    </section>
  )
}

export default function PageLayout({ label, title, description, children }) {
  return (
    <div className="page page--inner">
      <Header />
      <main>
        <PageHero label={label} title={title} description={description} />
        <div className="page-content">{children}</div>
      </main>
      <Footer />
    </div>
  )
}

export function InnerCta() {
  return (
    <div className="inner-cta">
      <h3>Ready to transform your IT infrastructure?</h3>
      <p>Let&apos;s discuss how Numero Info can support your next initiative.</p>
      <Link to="/contact" className="btn btn--primary">
        Contact Us Today
      </Link>
    </div>
  )
}
