export default function BrandLogo({ className = '', height = 42, alt = 'Numero Info IT Services' }) {
  return (
    <img
      src="/numerologo.png"
      alt={alt}
      className={`brand-logo ${className}`.trim()}
      style={{ height, width: 'auto' }}
    />
  )
}
