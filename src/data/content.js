export const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/services', label: 'Services' },
  { to: '/contact', label: 'Contact Us' },
]

export const footerLinks = [
  { to: '/', label: 'Home' },
  { to: '/services', label: 'Services' },
  { to: '/about', label: 'About' },
  { to: '/portfolio', label: 'Portfolio' },
  { to: '/contact', label: 'Contact Us' },
]

export const slides = [
  {
    title: 'WELCOME TO NUMERO INFO IT SERVICES',
    text: 'Numeroinfo IT Services is a Technology arm of Numeromobile Private Limited. We are assisting all sizes of organizations with the demand in IT infrastructure, SAP infrastructure plus consultation, managed cloud, cloud-based backup, ISO auditing, and more.',
  },
  {
    title: 'WHAT DO YOU KNOW ABOUT OUR COMPANY?',
    text: 'We are a professional IT company dedicated to transforming businesses through technology — from cloud and on-premises infrastructure to SAP consulting, managed services, cybersecurity, RPA, and intelligent automation.',
  },
]

export const services = [
  {
    id: 'infrastructure',
    img: 'server.png',
    title: 'IT Infrastructure & Networks',
    text: 'Data Center-based IT Infrastructure Consultation implementation and Network upgradation',
    description:
      'End-to-end infrastructure consulting, SAP-ready environments, network modernization, and scalable data center solutions built for enterprise reliability.',
    tags: ['Data Center', 'SAP', 'Networking'],
  },
  {
    id: 'cloud',
    img: 'cloud.png',
    title: 'Cloud Managed Services',
    text: 'Cloud Managed Services Cloud Optimization Cyber secure Data Backup',
    description:
      'AWS, Azure, and GCP managed services with optimization, cyber-secure backups, and always-on monitoring for mission-critical workloads.',
    tags: ['AWS / Azure / GCP', 'Backup', 'Security'],
  },
  {
    id: 'rpa',
    img: 'robot.png',
    title: 'Robotic Process Automation',
    text: 'Robotic Process Automation for Optical Character Reader and Contract Lifecycle Management',
    description:
      'Intelligent OCR, document processing, and contract lifecycle automation that reduces manual effort and accelerates business workflows.',
    tags: ['OCR', 'CLM', 'Automation'],
  },
  {
    id: 'analytics',
    img: 'graph.png',
    title: 'Data Analytics & Training',
    text: 'Data Analytics and Hands on Training Support',
    description:
      'Actionable analytics, dashboards, and hands-on training programs that help teams turn data into confident business decisions.',
    tags: ['Analytics', 'BI', 'Training'],
  },
  {
    id: 'ekyc',
    img: 'user-check-icon.png',
    title: 'E-Verification & E-KYC',
    text: 'E-Verification and E-KYC',
    description:
      'Secure digital identity verification and KYC solutions designed for compliance, speed, and seamless customer onboarding.',
    tags: ['KYC', 'Compliance', 'Identity'],
  },
]

export const portfolioItems = [
  {
    image: 'portfolio2.jpg',
    title: 'Enterprise Cloud Transformation',
    category: 'Cloud Infrastructure',
  },
  {
    image: 'portfolio3.jpg',
    title: 'Managed IT Operations',
    category: 'Managed Services',
  },
  {
    image: 'portfolio7.jpg',
    title: 'Digital Workflow Automation',
    category: 'Automation',
  },
]

export const homePortfolio = portfolioItems.map((item) => item.image)

export const portfolioImages = homePortfolio

export const aboutHighlights = [
  {
    value: '15+',
    label: 'Years of Expertise',
    detail: 'Delivering enterprise-grade IT solutions across industries.',
  },
  {
    value: '200+',
    label: 'Projects Delivered',
    detail: 'From startups to large enterprises, on time and on scope.',
  },
  {
    value: '24/7',
    label: 'Support Coverage',
    detail: 'Managed services and response teams when you need them.',
  },
  {
    value: '100%',
    label: 'Client Focus',
    detail: 'Solutions tailored to your business goals and growth.',
  },
]

export const teamMembers = [
  {
    img: 'about-img.png',
    name: 'Mr. Anand Khanna',
    role: 'Business Head Founder Member',
  },
  {
    img: 'about-img.png',
    name: 'Mamta Parashar',
    role: 'Founder',
  },
  {
    img: 'about-img.png',
    name: 'Mr. Roshan Singh',
    role: 'Digital Head',
  },
]
