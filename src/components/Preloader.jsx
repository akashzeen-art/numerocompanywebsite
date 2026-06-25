import { useEffect, useState } from 'react'
import BrandLogo from './BrandLogo'
import './Preloader.css'

const PRELOADER_TEXT =
  'Welcome to Numero Info IT Services — Empowering businesses with cloud, infrastructure, and intelligent IT solutions.'

export default function Preloader({ onComplete }) {
  const [displayText, setDisplayText] = useState('')
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    let index = 0
    const typeTimer = setInterval(() => {
      index += 1
      setDisplayText(PRELOADER_TEXT.slice(0, index))
      if (index >= PRELOADER_TEXT.length) {
        clearInterval(typeTimer)
      }
    }, 45)

    const hideTimer = setTimeout(() => {
      setVisible(false)
      setTimeout(onComplete, 600)
    }, 5000)

    return () => {
      clearInterval(typeTimer)
      clearTimeout(hideTimer)
    }
  }, [onComplete])

  return (
    <div className={`preloader-screen${visible ? '' : ' preloader-screen--hide'}`}>
      <div className="preloader-animation-container">
        <div className="preloader-lines">
          <div className="preloader-line" />
          <div className="preloader-line" />
          <div className="preloader-line" />
          <div className="preloader-line" />
          <div className="preloader-line" />
        </div>

        <BrandLogo className="preloader-logo" height={72} />
        <h1 className="preloader-title">{displayText}</h1>
      </div>

      <p className="preloader-footer-text">
        Smart IT solutions for infrastructure, cloud, automation, and analytics —{' '}
        <a href="https://www.numeroinfo.asia/" className="preloader-backlink" target="_blank" rel="noreferrer">
          Numero Info IT Services
        </a>
      </p>
    </div>
  )
}
