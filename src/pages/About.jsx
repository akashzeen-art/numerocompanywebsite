import PageLayout from '../components/PageLayout'
import {
  aboutParagraphs,
  certifications,
  partners,
  teamMembers,
} from '../data/about'

export default function About() {
  return (
    <PageLayout label="About Us" title="About Us" description="">
      <section className="about-page__intro">
        <div className="about-page__copy">
          <h2>About Us</h2>
          {aboutParagraphs.map((paragraph) => (
            <p key={paragraph.slice(0, 32)}>{paragraph}</p>
          ))}
        </div>
        <div className="about-page__media">
          <img src="/images/about-img.png" alt="About Numero Info" />
        </div>
      </section>

      <section className="about-page__section">
        <div className="section-head">
          <h2>Our Certifications</h2>
        </div>
        <div className="cert-grid">
          {certifications.map((cert) => (
            <article key={cert.img} className="cert-card">
              <img src={`/images/${cert.img}`} alt={cert.alt} loading="lazy" />
            </article>
          ))}
        </div>
      </section>

      <section className="about-page__section">
        <div className="section-head">
          <h2>Meet our experts</h2>
        </div>
        <div className="team-grid">
          {teamMembers.map((member) => (
            <article key={member.name} className="team-card">
              <div className="team-card__photo">
                <img src={`/images/${member.img}`} alt={member.name} loading="lazy" />
              </div>
              <div className="team-card__body">
                <h3>{member.name}</h3>
                <p>{member.role}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="about-page__section">
        <div className="section-head">
          <h2>Our Partners</h2>
        </div>
        <div className="partners-grid">
          {partners.map((logo, index) => (
            <div key={logo} className="partner-item">
              <img
                src={`/images/${logo}`}
                alt={`Partner ${index + 1}`}
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </section>
    </PageLayout>
  )
}
