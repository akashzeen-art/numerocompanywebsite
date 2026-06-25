import PageLayout from '../components/PageLayout'

export default function Contact() {
  return (
    <PageLayout
      label="Contact"
      title="Let's build something great together"
      description="Reach out to our team for consultations, proposals, and support."
    >
      <div className="contact-grid">
        <div className="contact-card">
          <i className="fa fa-phone" />
          <h3>Phone</h3>
          <a href="tel:+918929836907">+91 89298 36907</a>
        </div>
        <div className="contact-card">
          <i className="fa fa-envelope" />
          <h3>Email</h3>
          <a href="mailto:info@numeroinfo.asia">info@numeroinfo.asia</a>
        </div>
        <div className="contact-card">
          <i className="fa fa-map-marker" />
          <h3>Address</h3>
          <p>B 123 First Floor Sector 54 Gurgaon Haryana 122003</p>
        </div>
        <div className="contact-card">
          <i className="fa fa-globe" />
          <h3>Website</h3>
          <a href="https://numeroinfo.asia/" target="_blank" rel="noreferrer">
            numeroinfo.asia
          </a>
        </div>
      </div>

      <div className="inner-grid">
        <div className="inner-copy">
          <h2>Start your project with Numero Info</h2>
          <p>
            Whether you need cloud migration, infrastructure consulting, managed services, or
            automation — our experts are ready to help you plan, implement, and scale.
          </p>
        </div>
        <div className="inner-media">
          <img src="/images/about-img.png" alt="Contact Numero Info" />
        </div>
      </div>
    </PageLayout>
  )
}
