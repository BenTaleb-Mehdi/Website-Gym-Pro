export const site = {
  name: "Antee Club",
  tagline: "Transform Your Body. Elevate Your Lifestyle.",
  description:
    "Premium fitness experience, professional coaching, and state-of-the-art equipment.",
  address: "Boulevard Ghandi, Casablanca 20250, Morocco",
  phone: "+212 522 000 114",
  email: "hello@anteeclub.com",
  url: "https://anteeclub.com",
  hours: ["Mon - Fri: 6:00 - 23:00", "Saturday: 7:00 - 21:00", "Sunday: 8:00 - 18:00"],
};

export const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Classes", href: "/classes" },
  { label: "Trainers", href: "/trainers" },
  { label: "Membership", href: "/membership" },
  { label: "Gallery", href: "/gallery" },
  { label: "Contact", href: "/contact" },
];

export const images = {
  hero:
    "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=2200&q=85",
  about:
    "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?auto=format&fit=crop&w=1400&q=85",
  recovery:
    "https://images.unsplash.com/photo-1518310383802-640c2de311b2?auto=format&fit=crop&w=1200&q=85",
};

export const stats = [
  { label: "Members", value: 1800, suffix: "+" },
  { label: "Trainers", value: 24, suffix: "" },
  { label: "Classes", value: 65, suffix: "+" },
  { label: "Years Experience", value: 12, suffix: "" },
];

export const whyChooseUs = [
  {
    title: "Modern Equipment",
    description: "Performance-grade machines, free weights, and smart cardio systems.",
    icon: "Dumbbell",
  },
  {
    title: "Professional Coaches",
    description: "Certified trainers designing precise plans for strength, mobility, and recovery.",
    icon: "Medal",
  },
  {
    title: "Group Classes",
    description: "High-energy sessions built for accountability, technique, and progress.",
    icon: "Users",
  },
  {
    title: "Personal Training",
    description: "One-to-one coaching with clear milestones and measurable outcomes.",
    icon: "BadgeCheck",
  },
  {
    title: "Nutrition Guidance",
    description: "Practical nutrition coaching that supports training without overcomplication.",
    icon: "Apple",
  },
  {
    title: "Flexible Memberships",
    description: "Plans for focused beginners, committed athletes, and private VIP access.",
    icon: "CalendarDays",
  },
];

export const facilities = [
  {
    title: "Cardio Zone",
    image:
      "https://images.unsplash.com/photo-1576678927484-cc907957088c?auto=format&fit=crop&w=1000&q=80",
  },
  {
    title: "Strength Area",
    image:
      "https://images.unsplash.com/photo-1581009137042-c552e485697a?auto=format&fit=crop&w=1000&q=80",
  },
  {
    title: "Functional Training",
    image:
      "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=1000&q=80",
  },
  {
    title: "Locker Rooms",
    image:
      "https://images.unsplash.com/photo-1623874514711-0f321325f318?auto=format&fit=crop&w=1000&q=80",
  },
  {
    title: "Group Classes",
    image:
      "https://images.unsplash.com/photo-1518310952931-b1de897abd40?auto=format&fit=crop&w=1000&q=80",
  },
  {
    title: "Recovery Area",
    image:
      "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1000&q=80",
  },
];

export const plans = [
  {
    name: "Basic",
    price: "490 MAD",
    description: "For consistent solo training.",
    features: ["Gym floor access", "Cardio and strength zones", "Locker access", "Monthly body check"],
  },
  {
    name: "Premium",
    price: "790 MAD",
    description: "The complete Antee Club experience.",
    popular: true,
    features: [
      "Everything in Basic",
      "Unlimited group classes",
      "Two coaching sessions",
      "Nutrition starter plan",
      "Recovery lounge access",
    ],
  },
  {
    name: "VIP",
    price: "1,290 MAD",
    description: "Private coaching and elevated support.",
    features: [
      "Everything in Premium",
      "Weekly personal training",
      "Priority class booking",
      "Private assessment suite",
      "Guest passes",
    ],
  },
];

export const trainers = [

  {
    name: "Yassine Karim",
    specialty: "Boxing and HIIT",
    experience: "8 years",
    skills: ["Boxing", "Conditioning", "Fat loss"],
    image:
      "https://images.unsplash.com/photo-1594381898411-846e7d193883?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Salma Bennani",
    specialty: "Yoga and Recovery",
    experience: "7 years",
    skills: ["Yoga", "Breathwork", "Recovery"],
    image:
      "https://images.unsplash.com/photo-1599901860904-17e6ed7083a0?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Adam Berrada",
    specialty: "Functional Fitness",
    experience: "9 years",
    skills: ["CrossFit", "Power", "Endurance"],
    image:
      "https://images.unsplash.com/photo-1534367610401-9f5ed68180aa?auto=format&fit=crop&w=900&q=80",
  },
];

export const classes = [
  { name: "CrossFit", level: "Advanced", time: "Mon, Wed 19:00", trainer: "Adam Berrada" },
  { name: "HIIT", level: "All levels", time: "Tue, Thu 18:00", trainer: "Yassine Karim" },
  { name: "Yoga", level: "All levels", time: "Daily 8:00", trainer: "Salma Bennani" },
  { name: "Boxing", level: "Intermediate", time: "Mon, Fri 20:00", trainer: "Yassine Karim" },
  { name: "Strength Training", level: "All levels", time: "Tue, Sat 10:00", trainer: "Nadia El Amrani" },
  { name: "Functional Fitness", level: "Intermediate", time: "Wed, Sun 11:00", trainer: "Adam Berrada" },
];

export const testimonials = [
  {
    name: "Meryem A.",
    review:
      "The coaching feels personal, the space is immaculate, and the energy makes training something I look forward to.",
    image:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=500&q=80",
  },
  {
    name: "Omar L.",
    review:
      "Premium without being intimidating. I gained strength, better habits, and a routine that finally lasts.",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=500&q=80",
  },
  {
    name: "Ines R.",
    review:
      "The classes are sharp, the trainers are attentive, and the recovery area makes the whole week easier.",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=500&q=80",
  },
];

export const gallery = [
  "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=1000&q=80",
  "https://images.unsplash.com/photo-1534258936925-c58bed479fcb?auto=format&fit=crop&w=1000&q=80",
  "https://images.unsplash.com/photo-1599058917212-d750089bc07e?auto=format&fit=crop&w=1000&q=80",
  "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?auto=format&fit=crop&w=1000&q=80",
  "https://images.unsplash.com/photo-1605296867304-46d5465a13f1?auto=format&fit=crop&w=1000&q=80",
  "https://images.unsplash.com/photo-1549060279-7e168fcee0c2?auto=format&fit=crop&w=1000&q=80",
  "https://images.unsplash.com/photo-1600881333168-2ef49b341f30?auto=format&fit=crop&w=1000&q=80",
  "https://images.unsplash.com/photo-1550345332-09e3ac987658?auto=format&fit=crop&w=1000&q=80",
];

export const faqs = [
  {
    question: "What are the membership pricing options?",
    answer: "Plans start at 490 MAD per month, with Premium and VIP tiers for classes, coaching, and recovery access.",
  },
  {
    question: "Can I book a trial session?",
    answer: "Yes. New members can book one free guided trial session with a coach and facility walkthrough.",
  },
  {
    question: "Do you offer personal coaching?",
    answer: "Personal coaching is available in Premium add-ons and included weekly with the VIP membership.",
  },
  {
    question: "What are the opening hours?",
    answer: "Antee Club is open weekdays from 6:00 to 23:00, Saturdays from 7:00 to 21:00, and Sundays from 8:00 to 18:00.",
  },
];

export const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "HealthClub",
  name: site.name,
  description: site.description,
  url: site.url,
  telephone: site.phone,
  email: site.email,
  address: {
    "@type": "PostalAddress",
    streetAddress: "Boulevard Ghandi",
    addressLocality: "Casablanca",
    postalCode: "20250",
    addressCountry: "MA",
  },
  openingHours: ["Mo-Fr 06:00-23:00", "Sa 07:00-21:00", "Su 08:00-18:00"],
  priceRange: "MAD 490-1290",
  image: images.hero,
};
