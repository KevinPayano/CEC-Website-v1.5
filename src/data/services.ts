export type Service = {
  slug: string;
  name: string;
  shortDescription: string;
  description: string;
  benefits: string[];
  idealFor: string[];
  image: string;
  imageAlt: string;
};

export const services: Service[] = [
  {
    slug: 'driveways',
    name: 'Driveways',
    shortDescription:
      'Durable concrete driveways built for North Carolina weather and everyday use.',
    description:
      'We pour and finish residential and light commercial concrete driveways that hold up to daily traffic, freeze-thaw cycles, and heavy vehicles. From new installs to replacements, we focus on proper base prep, drainage, and a clean finish that improves curb appeal.',
    benefits: [
      'Proper excavation and compacted base',
      'Reinforcement options for lasting strength',
      'Clean joints and a professional finish',
      'Scheduling that works for homeowners and GCs',
    ],
    idealFor: ['Homeowners replacing cracked driveways', 'New builds', 'Property upgrades'],
    image: '/images/service-driveways.png',
    imageAlt: 'Freshly finished concrete driveway with clean expansion joints at a residential property',
  },
  {
    slug: 'slabs',
    name: 'Slabs',
    shortDescription:
      'Flatwork slabs for garages, workshops, equipment pads, and more.',
    description:
      'Need a solid slab for a garage, shed, workshop, or equipment pad? We pour level, reinforced concrete slabs sized to your plans—with attention to thickness, compaction, and finish so the surface stays usable for years.',
    benefits: [
      'Thickness and reinforcement matched to the use case',
      'Level finishes for floors and pads',
      'Coordination with builders and inspectors',
      'Clean edges and professional detailing',
    ],
    idealFor: ['Garages and outbuildings', 'Equipment pads', 'Workshop floors'],
    image: '/images/service-slabs.png',
    imageAlt: 'Stamped concrete slab with stone pattern finish bordered by a stacked stone wall',
  },
  {
    slug: 'sidewalks-curbs',
    name: 'Sidewalks & Curbs',
    shortDescription:
      'Neat sidewalks and curbs that improve access and property appearance.',
    description:
      'We install sidewalks and curbs that connect your property cleanly and safely. Whether you need a new walkway, replacement sections, or curb work tied into a larger project, we deliver straight lines, consistent grades, and durable concrete.',
    benefits: [
      'Consistent grades for safe walking surfaces',
      'Tight joints and clean edges',
      'Residential and light commercial work',
      'Work that complements driveways and landscaping',
    ],
    idealFor: ['Front walk replacements', 'New home access paths', 'Curb and apron work'],
    image: '/images/service-sidewalks.png',
    imageAlt: 'Freshly finished concrete sidewalk with clean control joints along a building',
  },
  {
    slug: 'footing-foundations',
    name: 'Footing Foundations',
    shortDescription:
      'Footings and foundation concrete that set your build on solid ground.',
    description:
      'Foundations start with footings done right. We dig, form, and pour footing foundations for new construction and additions—coordinating with your plans, inspections, and building timeline so the structure above has a dependable base.',
    benefits: [
      'Work aligned to blueprints and inspections',
      'Accurate forms and elevation control',
      'Communication with GCs and homeowners',
      'Reliable scheduling for multi-phase builds',
    ],
    idealFor: ['New home construction', 'Additions', 'Garage and outbuilding foundations'],
    image: '/images/service-foundations.png',
    imageAlt: 'Freshly poured concrete foundation slab with wooden forms and utility pipes in a residential backyard',
  },
  {
    slug: 'patios',
    name: 'Patios',
    shortDescription:
      'Custom concrete patios—including stamped finishes—for outdoor living.',
    description:
      'We design and pour concrete patios that fit how you use your yard. From clean broom finishes to stamped concrete with stone details, we help homeowners get a patio built for grilling, gathering, and long-term outdoor use.',
    benefits: [
      'Custom shapes and sizes for your space',
      'Stamped and decorative options available',
      'Solid base prep for outdoor durability',
      'Finishes that match your outdoor vision',
    ],
    idealFor: ['Backyard entertainment areas', 'Stamped patio upgrades', 'Fire pit and outdoor living spaces'],
    image: '/images/service-patios.jpg',
    imageAlt: 'Finished residential concrete patio',
  },
];

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((service) => service.slug === slug);
}
