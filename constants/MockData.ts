export interface Category {
  id: string;
  name: string;
  icon: string;
  description: string;
}

export interface Merchant {
  id: string;
  name: string;
  category: string;
  address: string;
  contact: string;
  discount: string;
  description: string;
  rating: number;
}

export const categories: Category[] = [
  {
    id: '1',
    name: 'Restaurants',
    icon: 'restaurant',
    description: 'Exclusive dining discounts at top restaurants in Ahmedabad'
  },
  {
    id: '2',
    name: 'Healthcare',
    icon: 'medical-services',
    description: 'Special offers on medical services and consultations'
  },
  {
    id: '3',
    name: 'Shopping',
    icon: 'shopping-bag',
    description: 'Discounts at popular retail stores and malls'
  },
  {
    id: '4',
    name: 'Entertainment',
    icon: 'movie',
    description: 'Special prices for movies, events and attractions'
  },
  {
    id: '5',
    name: 'Education',
    icon: 'school',
    description: 'Offers on courses, books and educational services'
  },
  {
    id: '6',
    name: 'Travel',
    icon: 'flight',
    description: 'Discounts on hotels, flights and travel packages'
  },
  {
    id: '7',
    name: 'Wellness',
    icon: 'spa',
    description: 'Special offers at spas, salons and fitness centers'
  },
  {
    id: '8',
    name: 'Automotive',
    icon: 'directions-car',
    description: 'Discounts on car services, accessories and more'
  }
];

export const merchants: Merchant[] = [
  {
    id: '101',
    name: 'Café Ahmedabad',
    category: '1',
    address: '123 SG Highway, Ahmedabad',
    contact: '+91 9876543210',
    discount: '15% off on total bill',
    description: 'A cozy café offering a variety of cuisines and beverages with a pleasant ambiance.',
    rating: 4.5
  },
  {
    id: '102',
    name: 'Spice Garden Restaurant',
    category: '1',
    address: '45 CG Road, Ahmedabad',
    contact: '+91 9876543211',
    discount: '10% off on food items',
    description: 'Authentic Indian cuisine with a modern twist, known for its flavorful dishes.',
    rating: 4.2
  },
  {
    id: '103',
    name: 'City Hospital',
    category: '2',
    address: '78 Satellite Road, Ahmedabad',
    contact: '+91 9876543212',
    discount: '20% off on consultations',
    description: 'A multi-specialty hospital providing quality healthcare services.',
    rating: 4.7
  },
  {
    id: '104',
    name: 'MediCare Clinic',
    category: '2',
    address: '34 Navrangpura, Ahmedabad',
    contact: '+91 9876543213',
    discount: '15% off on lab tests',
    description: 'A trusted clinic offering comprehensive medical services and diagnostics.',
    rating: 4.3
  },
  {
    id: '105',
    name: 'Fashion Hub',
    category: '3',
    address: '56 Prahlad Nagar, Ahmedabad',
    contact: '+91 9876543214',
    discount: '25% off on selected items',
    description: 'A trendy fashion store offering the latest styles and accessories.',
    rating: 4.0
  },
  {
    id: '106',
    name: 'Mega Mall',
    category: '3',
    address: '89 Vastrapur, Ahmedabad',
    contact: '+91 9876543215',
    discount: '10% off at participating stores',
    description: 'A premium shopping destination with a wide range of brands and products.',
    rating: 4.4
  },
  {
    id: '107',
    name: 'City Cinemas',
    category: '4',
    address: '12 Drive-In Road, Ahmedabad',
    contact: '+91 9876543216',
    discount: 'Buy 1 Get 1 on movie tickets (Mon-Thu)',
    description: 'A modern multiplex offering the latest movies in a comfortable setting.',
    rating: 4.6
  },
  {
    id: '108',
    name: 'Fun Zone',
    category: '4',
    address: '67 Thaltej, Ahmedabad',
    contact: '+91 9876543217',
    discount: '20% off on entry tickets',
    description: 'An entertainment center with games, rides, and activities for all ages.',
    rating: 4.1
  },
  {
    id: '109',
    name: 'Knowledge Academy',
    category: '5',
    address: '23 Bodakdev, Ahmedabad',
    contact: '+91 9876543218',
    discount: '15% off on course fees',
    description: 'A premier educational institute offering various courses and training programs.',
    rating: 4.5
  },
  {
    id: '110',
    name: 'Book Haven',
    category: '5',
    address: '45 Ambawadi, Ahmedabad',
    contact: '+91 9876543219',
    discount: '10% off on all books',
    description: 'A bookstore with a vast collection of books across various genres and subjects.',
    rating: 4.2
  },
  {
    id: '111',
    name: 'Travel Express',
    category: '6',
    address: '78 Ellis Bridge, Ahmedabad',
    contact: '+91 9876543220',
    discount: '10% off on package tours',
    description: 'A travel agency offering customized travel packages and services.',
    rating: 4.3
  },
  {
    id: '112',
    name: 'City Hotel',
    category: '6',
    address: '90 Ashram Road, Ahmedabad',
    contact: '+91 9876543221',
    discount: '15% off on room rates',
    description: 'A comfortable hotel with modern amenities and excellent service.',
    rating: 4.4
  },
  {
    id: '113',
    name: 'Wellness Spa',
    category: '7',
    address: '34 Gurukul, Ahmedabad',
    contact: '+91 9876543222',
    discount: '20% off on spa treatments',
    description: 'A luxurious spa offering a range of relaxing treatments and therapies.',
    rating: 4.7
  },
  {
    id: '114',
    name: 'Fitness First',
    category: '7',
    address: '56 Maninagar, Ahmedabad',
    contact: '+91 9876543223',
    discount: '15% off on membership',
    description: 'A state-of-the-art fitness center with modern equipment and trained instructors.',
    rating: 4.5
  },
  {
    id: '115',
    name: 'Auto Care',
    category: '8',
    address: '67 Ghatlodia, Ahmedabad',
    contact: '+91 9876543224',
    discount: '20% off on servicing',
    description: 'A reliable auto service center offering comprehensive car care solutions.',
    rating: 4.2
  },
  {
    id: '116',
    name: 'Car Accessories Shop',
    category: '8',
    address: '89 Chandkheda, Ahmedabad',
    contact: '+91 9876543225',
    discount: '15% off on all accessories',
    description: 'A shop offering a wide range of car accessories and parts.',
    rating: 4.0
  }
];