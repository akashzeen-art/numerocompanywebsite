import { Link } from 'react-router-dom'
import { portfolioItems } from '../../data/content'
import { useInView } from '../../hooks/useInView'

export default function PortfolioSection({ showHeader = true }) {
  const [ref, visible] = useInView()

  return (
    <section id="portfolio" className="portfolio" ref={ref}>
      {showHeader && (
      <div className="section-head">
        <span className="section-label">Our Work</span>
        <h2>Portfolio that speaks for itself</h2>
        <p>
          A glimpse into the enterprise transformations, cloud migrations, and digital solutions
          we deliver for organizations across sectors.
        </p>
      </div>
      )}

      <div className={`portfolio__track${visible ? ' is-visible' : ''}`}>
        <div className="portfolio__marquee">
          {[...portfolioItems, ...portfolioItems].map((item, index) => (
            <article key={`${item.image}-${index}`} className="portfolio__card">
              <div className="portfolio__image-wrap">
                <img src={`/images/${item.image}`} alt={item.title} loading="lazy" />
                <div className="portfolio__overlay">
                  <span className="portfolio__category">{item.category}</span>
                  <h3>{item.title}</h3>
                  <Link to="/portfolio" className="portfolio__link">
                    View Project →
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      <div className={`portfolio__grid${visible ? ' is-visible' : ''}`}>
        {portfolioItems.map((item, index) => (
          <article
            key={item.image}
            className="portfolio__tile"
            style={{ animationDelay: `${index * 120}ms` }}
          >
            <div className="portfolio__tile-media">
              <img src={`/images/${item.image}`} alt={item.title} loading="lazy" />
            </div>
            <div className="portfolio__tile-content">
              <span>{item.category}</span>
              <h3>{item.title}</h3>
            </div>
          </article>
        ))}
      </div>

      <div className="portfolio__cta">
        <Link to="/portfolio" className="btn btn--outline">
          View Full Portfolio
        </Link>
      </div>
    </section>
  )
}
