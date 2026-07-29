export const navLinks = [
  { href: "#about", label: "About" },
  { href: "#industries", label: "Industries" },
  { href: "#services", label: "Services" },
  { href: "#how", label: "Process" },
  { href: "#contact", label: "Contact" },
] as const;

export const heroIndustries = ["Couriers", "Warehouses", "Construction"] as const;

export const aboutHighlights = [
  {
    title: "Fast",
    text: "We move from first contact to active shift coverage without the usual staffing delay.",
  },
  {
    title: "Verified",
    text: "Every worker is checked, matched, and ready for the realities of courier, warehouse, and site work.",
  },
  {
    title: "Reliable",
    text: "We build teams for the kind of jobs that cannot afford no-shows or poor handoffs.",
  },
] as const;

export const industries = [
  {
    title: "Couriers & Last-Mile",
    description: "Reliable riders and delivery crew for app-based work, same-day routes, and fast-moving city operations.",
    image: "https://images.pexels.com/photos/7706451/pexels-photo-7706451.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=1700&q=82",
    alt: "Courier worker navigating dense urban delivery routes",
  },
  {
    title: "Warehouses & Fulfillment",
    description: "Picker, loader, and warehouse teams ready for high-volume shifts in logistics and storage operations.",
    image: "https://images.unsplash.com/photo-1586528116493-a029325540fa?auto=format&fit=crop&w=1700&q=82",
    alt: "Authentic warehouse staff handling stock under natural industrial light",
  },
  {
    title: "Construction Sites",
    description: "Skilled labor and site support crews for active builds, fit-out work, and fast-moving projects.",
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1400&q=80",
    alt: "Construction crew working on a real building site",
  },
] as const;

export const services = [
  {
    id: "01",
    title: "Recruitment",
    description: "Sourcing and screening candidates against the exact roles you need filled, not a generic applicant pool.",
  },
  {
    id: "02",
    title: "Employee Leasing",
    description: "We employ the workforce; you direct the work. Payroll, compliance and coverage handled on our side.",
  },
  {
    id: "03",
    title: "Workforce Management",
    description: "Scheduling, attendance and performance tracking for your leased teams, visible in one place.",
  },
  {
    id: "04",
    title: "Recruitment Consulting",
    description: "Advisory on headcount planning, wage benchmarking and retention for hourly, physical-labor teams.",
  },
] as const;

export const timeline = {
  seekers: [
    {
      title: "Apply in minutes",
      text: "Tell us your industry, city and availability.",
    },
    {
      title: "Get verified",
      text: "Quick background and eligibility check, no cost to you.",
    },
    {
      title: "Get matched",
      text: "We place you with an employer that fits your schedule.",
    },
    {
      title: "Start your shift",
      text: "Onboarding support and a direct line to your Best Noornova contact.",
    },
  ],
  employers: [
    {
      title: "Tell us the role",
      text: "Headcount, shift pattern, skills required.",
    },
    {
      title: "We shortlist fast",
      text: "Candidates drawn from our verified, active bench.",
    },
    {
      title: "Workers start",
      text: "Placed under our employment umbrella or direct-hire.",
    },
    {
      title: "We stay on call",
      text: "Ongoing coverage, swaps and performance check-ins.",
    },
  ],
} as const;

export const whyShiftline = [
  "Fast Hiring",
  "Verified Workers",
  "Professional Support",
  "Reliable Workforce",
  "Flexible Staffing",
] as const;

export const stats = [
  { target: 42000, suffix: "+", label: "Workers Recruited" },
  { target: 850, suffix: "+", label: "Companies Served" },
  { target: 27, suffix: "", label: "Cities Covered" },
  { target: 9, suffix: "", label: "Years Experience" },
] as const;

export const testimonials = [
  {
    quote: "We filled 30 courier shifts in under a week during our busiest season. Best Noornova just handled it.",
    role: "Operations Lead, Delivery Network",
    image: "https://images.pexels.com/photos/7843932/pexels-photo-7843932.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=900&q=82",
    alt: "Courier lead in live route operations",
  },
  {
    quote: "I went from application to my first warehouse shift in four days. Nobody else moved that fast.",
    role: "Warehouse Operative, placed via Best Noornova",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=900&q=82",
    alt: "Warehouse operative on a live production floor",
  },
  {
    quote: "Our site never went understaffed once we moved our labor leasing over to them.",
    role: "Site Manager, Commercial Construction",
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=900&q=82",
    alt: "Construction supervisor in active site conditions",
  },
] as const;

export const footerLinks = [
  {
    title: "Industries",
    links: [
      { href: "#industries", label: "Delivery" },
      { href: "#industries", label: "Hospitality" },
      { href: "#industries", label: "Construction" },
    ],
  },
  {
    title: "Company",
    links: [
      { href: "#services", label: "Services" },
      { href: "#how", label: "Process" },
      { href: "#about", label: "About" },
    ],
  },
  {
    title: "Action",
    links: [
      { href: "#apply", label: "Find Work" },
      { href: "#apply", label: "Hire Workers" },
      { href: "#contact", label: "Contact" },
    ],
  },
  {
    title: "Social",
    links: [
      { href: "https://www.linkedin.com", label: "LinkedIn" },
      { href: "https://www.instagram.com", label: "Instagram" },
      { href: "https://www.facebook.com", label: "Facebook" },
    ],
  },
] as const;

export const routeSections = [
  { id: "top", label: "Start" },
  { id: "about", label: "About" },
  { id: "industries", label: "Industries" },
  { id: "services", label: "Services" },
  { id: "how", label: "Process" },
  { id: "metrics", label: "Metrics" },
  { id: "apply", label: "Apply" },
  { id: "contact", label: "Contact" },
] as const;
