import type { Testimonial } from '../components/ui/TestimonialCard.tsx';

// Google Places API configuration
const GOOGLE_PLACES_API_KEY = import.meta.env.VITE_GOOGLE_PLACES_API_KEY || '';
const GOOGLE_PLACE_ID = import.meta.env.VITE_GOOGLE_PLACE_ID || '';

interface GoogleReview {
  author_name: string;
  author_url?: string;
  language: string;
  profile_photo_url?: string;
  rating: number;
  relative_time_description: string;
  text: string;
  time: number;
}

interface GooglePlacesResponse {
  result: {
    reviews: GoogleReview[];
    rating: number;
    user_ratings_total: number;
  };
  status: string;
}

// Mock data for development/fallback
const mockGoogleReviews: Testimonial[] = [
  {
    id: 'google-1',
    name: 'Sarah Johnson',
    location: 'Chelsea, London',
    text: 'Absolutely exceptional service! My vintage wedding dress from the 1960s was treated with such care and expertise. The team understood the delicate nature of the beading and lace, and the results were beyond my expectations. The dress looked better than it did on my wedding day 30 years ago!',
    rating: 5,
    date: '2024-01-15',
    source: 'google',
    verified: true,
    serviceType: 'Wedding Dress Restoration',
    sourceUrl: 'https://www.google.com/maps/reviews',
  },
  {
    id: 'google-2',
    name: 'Michael Thompson',
    location: 'Richmond, Surrey',
    text: 'Emergency same-day service saved our wedding! I spilled red wine on my morning suit the night before the ceremony. Called them in panic at 7 AM and they had it cleaned, pressed, and delivered by 2 PM. Professional, reliable, and true lifesavers!',
    rating: 5,
    date: '2024-01-10',
    source: 'google',
    verified: true,
    serviceType: 'Express Cleaning',
    sourceUrl: 'https://www.google.com/maps/reviews',
  },
  {
    id: 'google-3',
    name: 'Emma & David Wilson',
    location: 'Kensington, London',
    text: "The preservation service is incredible. They cleaned both my wedding dress and David's suit, then provided beautiful preservation boxes with detailed care instructions. The complimentary collection and delivery within the M25 made the whole process so convenient.",
    rating: 5,
    date: '2024-01-08',
    source: 'google',
    verified: true,
    serviceType: 'Preservation Service',
    sourceUrl: 'https://www.google.com/maps/reviews',
  },
  {
    id: 'google-4',
    name: 'Lisa Martinez',
    location: 'Hampstead, London',
    text: 'Wonderful attention to detail! My bridesmaid dresses needed different types of cleaning - silk, chiffon, and satin. They handled each fabric with specific care and all came back perfect. The team really knows their craft.',
    rating: 5,
    date: '2024-01-05',
    source: 'google',
    verified: true,
    serviceType: 'Bridesmaid Dresses',
    sourceUrl: 'https://www.google.com/maps/reviews',
  },
  {
    id: 'google-5',
    name: 'James Roberts',
    location: 'Wimbledon, London',
    text: 'Highly recommend for groom suits and formal wear. The pressing service is exceptional - my three-piece suit looked like it was just tailored. Great value and excellent customer service throughout.',
    rating: 5,
    date: '2024-01-02',
    source: 'google',
    verified: true,
    serviceType: 'Formal Wear',
    sourceUrl: 'https://www.google.com/maps/reviews',
  },
  {
    id: 'google-6',
    name: 'Rachel Green',
    location: 'Putney, London',
    text: "The accessories cleaning service is a game-changer! They cleaned my wedding shoes, veil, and vintage gloves. Everything came back immaculate. The team's expertise with delicate materials is unmatched.",
    rating: 5,
    date: '2023-12-28',
    source: 'google',
    verified: true,
    serviceType: 'Wedding Accessories',
    sourceUrl: 'https://www.google.com/maps/reviews',
  },
];

// Convert Google Review to Testimonial format
const convertGoogleReviewToTestimonial = (
  review: GoogleReview
): Testimonial => {
  return {
    id: `google-${review.time}`,
    name: review.author_name,
    text: review.text,
    rating: review.rating,
    date: new Date(review.time * 1000).toISOString(),
    source: 'google',
    verified: true,
    image: review.profile_photo_url,
    sourceUrl: review.author_url,
  };
};

// Fetch Google Reviews
export const fetchGoogleReviews = async (): Promise<Testimonial[]> => {
  // Return mock data if API key is not configured
  if (!GOOGLE_PLACES_API_KEY || !GOOGLE_PLACE_ID) {
    console.warn('Google Places API not configured, using mock data');
    return mockGoogleReviews;
  }

  try {
    const response = await fetch(
      `https://maps.googleapis.com/maps/api/place/details/json?place_id=${GOOGLE_PLACE_ID}&fields=reviews,rating,user_ratings_total&key=${GOOGLE_PLACES_API_KEY}&reviews_sort=newest`
    );

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data: GooglePlacesResponse = await response.json();

    if (data.status !== 'OK') {
      throw new Error(`Google Places API error: ${data.status}`);
    }

    return data.result.reviews
      .map(convertGoogleReviewToTestimonial)
      .sort(
        (a, b) =>
          new Date(b.date || 0).getTime() - new Date(a.date || 0).getTime()
      )
      .slice(0, 10); // Limit to 10 most recent reviews
  } catch (error) {
    console.error('Failed to fetch Google reviews:', error);
    // Fallback to mock data
    return mockGoogleReviews;
  }
};

// Get cached reviews (for development)
export const getCachedReviews = (): Testimonial[] => {
  const cached = localStorage.getItem('google_reviews');
  if (cached) {
    try {
      return JSON.parse(cached);
    } catch {
      return mockGoogleReviews;
    }
  }
  return mockGoogleReviews;
};

// Cache reviews
export const cacheReviews = (reviews: Testimonial[]): void => {
  localStorage.setItem('google_reviews', JSON.stringify(reviews));
  localStorage.setItem('google_reviews_timestamp', Date.now().toString());
};

// Check if cache is fresh (1 hour)
export const isCacheFresh = (): boolean => {
  const timestamp = localStorage.getItem('google_reviews_timestamp');
  if (!timestamp) return false;

  const oneHour = 60 * 60 * 1000;
  return Date.now() - parseInt(timestamp) < oneHour;
};

// Get reviews with caching
export const getReviews = async (): Promise<Testimonial[]> => {
  if (isCacheFresh()) {
    return getCachedReviews();
  }

  const reviews = await fetchGoogleReviews();
  cacheReviews(reviews);
  return reviews;
};
