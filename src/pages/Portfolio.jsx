import PageLayout from '../components/PageLayout'
import { portfolioGallery } from '../data/content'

export default function Portfolio() {
  return (
    <PageLayout label="Portfolio" title="Our Portfolio" description="">
      <section className="portfolio-page">
        <div className="portfolio-page__grid">
          {portfolioGallery.map((item) => (
            <article key={item.image} className="portfolio-page__item">
              <div className="portfolio-page__media">
                <img src={`/images/${item.image}`} alt={item.alt} loading="lazy" />
              </div>
            </article>
          ))}
        </div>
      </section>
    </PageLayout>
  )
}
