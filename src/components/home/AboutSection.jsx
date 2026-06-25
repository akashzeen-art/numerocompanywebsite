import { Link } from 'react-router-dom'
import { aboutHighlights } from '../../data/content'
import { useInView } from '../../hooks/useInView'

export default function AboutSection() {
  const [ref, visible] = useInView()

  return (
    <section id="about" className="about" ref={ref}>
      <div className={`about__layout${visible ? ' is-visible' : ''}`}>
        <div className="about__visual">
          <div className="about__image-frame">
            <img src="/images/about-img.png" alt="About Numero Info" loading="lazy" />
          </div>
          <div className="about__badge">Innovation Leader</div>
        </div>

        <div className="about__content">
          <span className="section-label section-label--light">About Us</span>
          <h2>Technology that grows with your business</h2>
          <p>
            Numero Mobile is the innovation leader in providing most robust and intelligent mobility
            solutions &amp; services to its customers.
          </p>
          <p>
            We help enterprises grow their business and create value for their end customers,
            enabling meaningful connections through target messaging across all channels and devices
            while improving end-user experience.
          </p>
          <Link to="/about" className="btn btn--accent">
            Read More About Us
          </Link>
        </div>
      </div>

      <div className={`about__highlights${visible ? ' is-visible' : ''}`}>
        {aboutHighlights.map((item, index) => (
          <article
            key={item.label}
            className="about-card"
            style={{ animationDelay: `${index * 90}ms` }}
          >
            <div className="about-card__value">{item.value}</div>
            <h3>{item.label}</h3>
            <p>{item.detail}</p>
            <div className="about-card__shine" aria-hidden="true" />
          </article>
        ))}
      </div>
    </section>
  )
}
