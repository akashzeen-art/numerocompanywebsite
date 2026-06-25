import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import BrandLogo from './BrandLogo'
import { navLinks } from '../data/content'
import { useScrolled } from '../hooks/useInView'

export default function Header() {
  const [open, setOpen] = useState(false)
  const { pathname } = useLocation()
  const scrolled = useScrolled()

  return (
    <header className={`site-header${scrolled ? ' site-header--scrolled' : ''}`}>
      <div className="site-header__inner">
        <Link className="site-header__brand" to="/" onClick={() => setOpen(false)}>
          <BrandLogo height={42} />
        </Link>

        <button
          className={`site-header__toggle${open ? ' is-open' : ''}`}
          type="button"
          onClick={() => setOpen((value) => !value)}
          aria-label="Toggle navigation"
        >
          <span />
          <span />
          <span />
        </button>

        <nav className={`site-header__nav${open ? ' is-open' : ''}`}>
          {navLinks.map(({ to, label }) => (
            <Link
              key={to}
              to={to}
              className={`${pathname === to ? 'is-active' : ''}${to === '/contact' ? ' site-header__cta' : ''}`}
              onClick={() => setOpen(false)}
            >
              {label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  )
}
