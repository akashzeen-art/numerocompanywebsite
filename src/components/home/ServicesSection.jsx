import { Link } from 'react-router-dom'
import { services } from '../../data/content'
import { useInView } from '../../hooks/useInView'

export default function ServicesSection({ showHeader = true }) {
  const [ref, visible] = useInView()

  return (
    <section id="services" className="services" ref={ref}>
      {showHeader && (
      <div className="section-head section-head--light">
        <span className="section-label">What We Do</span>
        <h2>Services built for modern enterprises</h2>
        <p>Below are the services which we offer — crafted for scale, security, and speed.</p>
      </div>
      )}

      <div className={`services__list${visible ? ' is-visible' : ''}`}>
        {services.map((service, index) => (
          <article
            key={service.id}
            className={`service-row${index % 2 === 1 ? ' service-row--reverse' : ''}`}
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <div className="service-row__media">
              <div className="service-row__index">{String(index + 1).padStart(2, '0')}</div>
              <div className="service-row__image">
                <img src={`/images/${service.img}`} alt={service.title} loading="lazy" />
              </div>
            </div>

            <div className="service-row__body">
              <div className="service-row__tags">
                {service.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
              <h3>{service.title}</h3>
              <p className="service-row__lead">{service.text}</p>
              <p className="service-row__desc">{service.description}</p>
              <Link to="/contact" className="service-row__cta">
                Discuss this service
                <span aria-hidden="true">→</span>
              </Link>
            </div>

            <div className="service-row__glow" aria-hidden="true" />
          </article>
        ))}
      </div>
    </section>
  )
}
