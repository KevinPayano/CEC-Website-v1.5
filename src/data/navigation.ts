import { site } from './site';

export type NavLink = {
  label: string;
  href: string;
};

export const mainNav: NavLink[] = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/services' },
  { label: 'Gallery', href: '/gallery' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
];

export const footerNav: NavLink[] = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/services' },
  { label: 'Gallery', href: '/gallery' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
  { label: 'Get a Quote', href: '/contact' },
];

export const cta = {
  primary: { label: 'Get a Quote', href: '/contact' },
  secondary: { label: 'Contact Us', href: '/contact' },
  call: { label: 'Call Us', href: site.phoneHref },
} as const;
