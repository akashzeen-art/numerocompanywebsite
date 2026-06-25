import PageLayout, { InnerCta } from '../components/PageLayout'
import { teamMembers } from '../data/content'

export default function About() {
  return (
    <PageLayout
      label="About Us"
      title="Driving digital transformation with purpose"
      description="Numero Mobile is the innovation leader in providing robust and intelligent mobility solutions."
    >
      <div className="inner-grid">
        <div className="inner-copy">
          <p>
            Numero Mobile is the innovation leader in providing most robust and intelligent mobility
            solutions &amp; services to its customers.
          </p>
          <p>
            We help enterprise to grow their business and create value for their end customer,
            enabling them to meaningfully connect through target messaging across all channels and
            devices and improve end user experience.
          </p>
          <p>
            From the largest enterprises to one-person businesses, our customers trust our on-time
            delivery. We are a team of experienced professionals working to provide world-class,
            innovative products.
          </p>
          <p>
            We at Numero Mobile help our customers accelerate business growth by redefining business
            operations for the fast-paced digital agenda of enterprises with operationally efficient
            technology solutions.
          </p>
        </div>
        <div className="inner-media">
          <img src="/images/about-img.png" alt="About Numero Info" />
        </div>
      </div>

      <section className="inner-section">
        <h2>Meet our experts</h2>
        <div className="team-grid">
          {teamMembers.map((member) => (
            <article key={member.name} className="team-card">
              <img src={`/images/${member.img}`} alt={member.name} />
              <h3>{member.name}</h3>
              <p>{member.role}</p>
            </article>
          ))}
        </div>
      </section>

      <InnerCta />
    </PageLayout>
  )
}
