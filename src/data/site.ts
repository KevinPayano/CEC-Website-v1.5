export const site = {
  name: 'Concrete Experts Company',
  shortName: 'Concrete Experts',
  tagline: 'Concrete contractors serving North Carolina',
  description:
    'North Carolina concrete contractors with 10+ years of experience. Driveways, slabs, sidewalks, curbs, footing foundations, and patios. 4.9 stars on Google. Get a free quote from Concrete Experts Company.',
  url: 'https://concreteexpertscompany.com',
  phone: '919-631-4282',
  phoneHref: 'tel:+19196314282',
  phoneDisplay: '(919) 631-4282',
  email: 'concreteexpertscoestimating@outlook.com',
  hours: {
    weekdays: 'Monday – Friday, 9:00 AM – 5:00 PM',
    weekend: 'Closed Saturday & Sunday',
  },
  serviceArea: 'North Carolina',
  logo: '/images/logo.png',
  ogImage: '/images/hero.jpg',
  stats: [
    { value: '100+', label: 'Projects completed' },
    { value: '10+', label: 'Years of experience' },
    { value: '4.9', label: 'Stars on Google' },
  ],
  creatorCredit: {
    name: 'CodeNHammer',
    url: 'https://codenhammer.com/',
  },
} as const;

export type SiteConfig = typeof site;
