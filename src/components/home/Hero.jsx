import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { slides } from '../../data/content'
import { useInView } from '../../hooks/useInView'

export default function Hero() {
  const [ref, visible] = useInView()
  const [activeSlide, setActiveSlide] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((current) => (current + 1) % slides.length)
    }, 6000)
    return () => clearInterval(timer)
  }, [])

  const slide = slides[activeSlide]

  return (
    <section id="home" className="hero" ref={ref}>
      <div className="hero__bg">
        <div className="hero__orb hero__orb--1" />
        <div className="hero__orb hero__orb--2" />
        <div className="hero__grid" />
      </div>

      <div className={`hero__inner${visible ? ' is-visible' : ''}`}>
        <div className="hero__content">
          <span className="hero__eyebrow">Numero Info IT Services</span>
          <h1 className="hero__title">{slide.title}</h1>
          <p className="hero__text">{slide.text}</p>

          <div className="hero__actions">
            <Link to="/contact" className="btn btn--primary">
              Get Started
            </Link>
            <Link to="/services" className="btn btn--ghost">
              Explore Services
            </Link>
          </div>

          <div className="hero__dots">
            {slides.map((_, index) => (
              <button
                key={index}
                type="button"
                className={`hero__dot${index === activeSlide ? ' is-active' : ''}`}
                onClick={() => setActiveSlide(index)}
                aria-label={`Slide ${index + 1}`}
              />
            ))}
          </div>
        </div>

        <div className="hero__visual">
          <div className="hero__visual-ring" />
          <div className="hero__visual-card">
            <img src="/images/slider-img.png" alt="IT solutions illustration" />
          </div>
          <div className="hero__float hero__float--1">Cloud</div>
          <div className="hero__float hero__float--2">Security</div>
          <div className="hero__float hero__float--3">Analytics</div>
        </div>
      </div>

      <div className="hero__stats">
        <div className="hero__stat">
          <strong>5+</strong>
          <span>Core Service Lines</span>
        </div>
        <div className="hero__stat">
          <strong>24/7</strong>
          <span>Managed Support</span>
        </div>
        <div className="hero__stat">
          <strong>100%</strong>
          <span>Client-Centric Delivery</span>
        </div>
      </div>
    </section>
  )
}
