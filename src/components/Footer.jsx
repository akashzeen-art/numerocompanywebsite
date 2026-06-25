import { Link } from 'react-router-dom'
import BrandLogo from './BrandLogo'
import { footerLinks } from '../data/content'

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-footer__wave" aria-hidden="true" />

      <div className="site-footer__main">
        <div className="site-footer__brand-col">
          <Link to="/" className="site-footer__logo">
            <BrandLogo height={52} />
          </Link>
          <p>
            Numero Info IT Services is an IT Division of Numero Mobile Private Limited — delivering
            cloud, infrastructure, automation, and intelligent digital solutions.
          </p>
        </div>

        <div className="site-footer__col">
          <h4>Quick Links</h4>
          <ul>
            {footerLinks.map(({ to, label }) => (
              <li key={to}>
                <Link to={to}>{label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="site-footer__col">
          <h4>Services</h4>
          <ul>
            <li>
              <Link to="/services">IT Infrastructure</Link>
            </li>
            <li>
              <Link to="/services">Cloud Managed Services</Link>
            </li>
            <li>
              <Link to="/services">RPA &amp; Automation</Link>
            </li>
            <li>
              <Link to="/services">Data Analytics</Link>
            </li>
            <li>
              <Link to="/services">E-Verification &amp; E-KYC</Link>
            </li>
          </ul>
        </div>

        <div className="site-footer__col site-footer__contact">
          <h4>Get in Touch</h4>
          <a href="#">
            <i className="fa fa-map-marker" />
            B 123 First Floor Sector 54 Gurgaon Haryana 122003
          </a>
          <a href="tel:+918929836907">
            <i className="fa fa-phone" />
            +91 89298 36907
          </a>
          <a href="mailto:info@numeroinfo.asia">
            <i className="fa fa-envelope" />
            info@numeroinfo.asia
          </a>
        </div>
      </div>

      <div className="site-footer__bottom">
        <p>© {new Date().getFullYear()} Numero Info IT Services. All rights reserved.</p>
        <p>
          Built for enterprises that demand reliability, security, and innovation.
        </p>
      </div>
    </footer>
  )
}
