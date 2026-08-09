export type Testimonial = {
  quote: string;
  author: string;
  image: string;
  imageAlt: string;
  rating?: number;
};

export const testimonials: Testimonial[] = [
  {
    quote:
      'Mike and his team did an awesome job with our patio and fire pit. Excellent work, timely, he called and communicated and finished on time. I would highly recommend Concrete Experts.',
    author: 'Chris Murphy',
    image: '/images/testimonial-01.jpg',
    imageAlt: 'Outdoor patio with brick firepit and lounge chairs in a backyard',
    rating: 5,
  },
  {
    quote:
      "Mike's team did an amazing job. We love our stamped concrete patio with stone kneewall.",
    author: 'Jordan Potter',
    image: '/images/testimonial-02.jpg',
    imageAlt: 'Stamped concrete patio with stone kneewall',
    rating: 5,
  },
  {
    quote:
      'Mikes team did an amazing job and built us our dream fireplace and stamped patio for our backyard. They were able to take our vision and make it come to life. We absolutely love it! Highly recommend.',
    author: 'Purple People',
    image: '/images/testimonial-03.jpg',
    imageAlt: 'Outdoor fireplace with stamped concrete patio and furniture',
    rating: 5,
  },
  {
    quote:
      'Mike and his team did an excellent job on my foundation, garage, and block work. Workers were very nice and hard working. Great communication with Mike, always answered calls, and provided exactly what I was looking for.',
    author: 'Justin E',
    image: '/images/testimonial-04.jpg',
    imageAlt: 'Foundation, garage, and block concrete work',
    rating: 5,
  },
  {
    quote:
      'Great company does quality work at a very reasonable price. Has done several jobs for us including sidewalks, concrete patio and small slab for a building to house an air compressor. Would definitely recommend!',
    author: 'Rich Carr',
    image: '/images/testimonial-05.jpg',
    imageAlt: 'Concrete sidewalk beside a house',
    rating: 5,
  },
  {
    quote:
      'This company is very professional. They showed on time and gave me a great quote. The thing I liked most is they wanted to make sure I was 100% satisfied before leaving. It looks amazing. I can’t wait to BBQ on my new patio! I will be sending all my friends to Concrete Experts!',
    author: 'Joe Weimer',
    image: '/images/testimonial-06.jpg',
    imageAlt: 'Outdoor concrete patio in the backyard of a house',
    rating: 5,
  },
];
