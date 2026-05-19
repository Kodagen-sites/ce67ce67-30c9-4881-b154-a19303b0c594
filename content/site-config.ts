/*
 * ─────────────────────────────────────────────────────────────
 *  GENERATION FINGERPRINT — cinematic-site-generator
 * ─────────────────────────────────────────────────────────────
 *  company        : FreshFold Laundry
 *  industry       : Laundry & garment care (multi-location, Nigeria)
 *  archetype      : G — Structured Hybrid (premium tier, T1 8s Veo hero loop)
 *                   reason: local multi-service business → archetype G default
 *  style          : S3 — Soft Pastel Wellness (light), re-toned fresh
 *  voice          : warm, friendly, plain-spoken (V3 Organic)
 *  header_variant : center-logo-split
 *  footer_variant : FT1 — Classic 5-column
 *  card_variant   : light frosted glass (CV4 adapted to light theme)
 *  hero_overlay   : HO1 centered  ·  hero_text: H5  ·  entrance: E3 fade
 *  contact_variant: CT5 — multi-location grid (forced: 3 locations)
 *  stats: ST1  ·  testimonials: TS1  ·  cta: CTA1  ·  about: AB1
 *  scene_variant  : V2  ·  motion_variant: G.M3 (gentle push)
 *  color_variant  : fresh-teal  ·  asset_mode: live-generate
 *  build_mode     : landing (no admin)
 * ─────────────────────────────────────────────────────────────
 */

export type Service = {
  slug: string;
  name: string;
  description: string;
  long: string;
  features: string[];
  imageUrl: string;
  priceFrom: string;
};

export type Location = {
  city: string;
  area: string;
  address: string;
  phone: string;
  hours: string;
};

export const siteConfig = {
  headerVariant: "center-logo-split",

  company: {
    name: "FreshFold",
    fullName: "FreshFold Laundry",
    tagline: "Laundry, beautifully handled.",
    descriptor: "Garment care & laundry service",
    founded: 2019,
  },

  hero: {
    eyebrow: "Lagos · Abuja · Port Harcourt",
    h1: "Laundry, beautifully handled.",
    h1Accent: "beautifully",
    subhead:
      "Fresh, carefully folded clothes — washed, pressed and returned to your door. No queues, no fuss, no ruined favourites.",
    body: "FreshFold treats every load like it matters, because to you it does.",
    primaryCta: { label: "Book a pickup", href: "/contact" },
    secondaryCta: { label: "See our services", href: "/services" },
    videoSlot: "scene-1",
  },

  valueProp: {
    eyebrow: "Why FreshFold",
    headline: "Clean clothes shouldn't cost you a day off.",
    body: "We collect, we care for, we return. You get your evenings back and a wardrobe that always looks its best.",
  },

  services: [
    {
      slug: "wash-fold",
      name: "Wash & Fold",
      description:
        "Everyday laundry washed, dried and folded with care — sorted by colour and fabric, returned neatly stacked.",
      long: "Your day-to-day laundry, handled properly. We sort by colour and fabric, wash at the right temperature, dry gently and fold every piece so it's ready to put straight into the drawer. Bedding, towels, work clothes and the school run — all of it, off your list.",
      features: [
        "Sorted by colour & fabric",
        "Gentle, skin-friendly detergents",
        "Folded & ready to shelve",
        "48-hour standard turnaround",
      ],
      imageUrl: "https://zykgxmubadvmlxpkqrzd.supabase.co/storage/v1/object/public/site-assets/ce67ce67-30c9-4881-b154-a19303b0c594/images/service-wash-fold.jpg",
      priceFrom: "₦1,200 / kg",
    },
    {
      slug: "dry-cleaning",
      name: "Dry Cleaning",
      description:
        "Specialist care for suits, dresses, agbada and delicates — pressed, covered and hung ready to wear.",
      long: "For the pieces you can't just throw in a machine. Tailored suits, gowns, agbada, native wear and delicate fabrics get individual attention — spot-treated, cleaned with the right process, hand-pressed and returned on hangers in protective covers.",
      features: [
        "Suits, gowns, agbada & native wear",
        "Stain assessment & spot treatment",
        "Hand-finished pressing",
        "Returned covered & on hangers",
      ],
      imageUrl: "https://zykgxmubadvmlxpkqrzd.supabase.co/storage/v1/object/public/site-assets/ce67ce67-30c9-4881-b154-a19303b0c594/images/service-dry-cleaning.jpg",
      priceFrom: "₦2,500 / item",
    },
    {
      slug: "pickup-delivery",
      name: "Pickup & Delivery",
      description:
        "We come to you. Schedule a collection, track your order, and have it back fresh — at home or at the office.",
      long: "The part that saves your day. Pick a collection window that suits you, hand over your bag, and we'll bring everything back washed and ready. Free within our service areas, with a flat fee further out. Same-day options available in central Lagos, Abuja and Port Harcourt.",
      features: [
        "Choose your collection window",
        "Free within service areas",
        "Order updates by WhatsApp & SMS",
        "Same-day option in city centres",
      ],
      imageUrl: "https://zykgxmubadvmlxpkqrzd.supabase.co/storage/v1/object/public/site-assets/ce67ce67-30c9-4881-b154-a19303b0c594/images/service-pickup-delivery.jpg",
      priceFrom: "Free in-area",
    },
  ] as Service[],

  process: {
    eyebrow: "How it works",
    headline: "Four small steps. One less chore.",
    steps: [
      {
        title: "Book a pickup",
        body: "Tell us when suits you. Pick a window online or over WhatsApp in under a minute.",
      },
      {
        title: "We collect",
        body: "Our team arrives in your chosen window and weighs your bag with you, so there are no surprises.",
      },
      {
        title: "We care for it",
        body: "Everything is sorted, treated and cleaned by hand-trained staff — then pressed and folded.",
      },
      {
        title: "We deliver fresh",
        body: "Your laundry comes back to your door, neatly folded or hung, exactly when we promised.",
      },
    ],
  },

  stats: {
    eyebrow: "By the numbers",
    headline: "Trusted with the things you wear most.",
    items: [
      { value: 30000, suffix: "+", label: "Loads cleaned & returned" },
      { value: 3, suffix: "", label: "Cities served daily" },
      { value: 48, suffix: "h", label: "Standard turnaround" },
      { value: 98, suffix: "%", label: "On-time deliveries" },
    ],
  },

  testimonials: {
    eyebrow: "Kind words",
    headline: "Customers who got their evenings back.",
    items: [
      {
        quote:
          "FreshFold collect from my office every Friday and everything comes back perfectly folded. I genuinely don't think about laundry anymore.",
        author: "Adaeze O.",
        role: "Lekki, Lagos",
      },
      {
        quote:
          "They handled my husband's agbada and my gowns better than the dry cleaner we'd used for years. Pressed, covered, on time.",
        author: "Hauwa B.",
        role: "Maitama, Abuja",
      },
      {
        quote:
          "Booking on WhatsApp takes a minute and the updates mean I always know where my order is. Easily the most reliable service in PH.",
        author: "Tamuno W.",
        role: "GRA, Port Harcourt",
      },
    ],
  },

  cta: {
    eyebrow: "Ready when you are",
    headline: "Hand us the laundry. Keep your weekend.",
    body: "Book your first pickup today and see why thousands across Lagos, Abuja and Port Harcourt let FreshFold handle the wash.",
    primary: { label: "Book a pickup", href: "/contact" },
    secondary: { label: "Browse services", href: "/services" },
  },

  about: {
    eyebrow: "Our story",
    headline: "We started FreshFold because laundry day was eating our weekends.",
    body: [
      "FreshFold began in 2019 with one van, one ironing board and a simple promise: take laundry off people's plates and hand it back better than they left it.",
      "Today we run dedicated care studios in Lagos, Abuja and Port Harcourt, with trained staff who treat every garment — from school uniforms to wedding agbada — with the same patience.",
      "We're not a faceless drop-off counter. We're the team that remembers your fabric softener preference and never, ever shrinks your favourite shirt.",
    ],
    values: [
      {
        title: "Care, not just cleaning",
        body: "Every garment is checked, sorted and treated by a person — never rushed through a machine and forgotten.",
      },
      {
        title: "Honest, upfront pricing",
        body: "We weigh your bag with you and quote before we start. The price you're told is the price you pay.",
      },
      {
        title: "On time, every time",
        body: "When we say a delivery window, we keep it. 98% of our orders arrive exactly when promised.",
      },
    ],
  },

  locations: [
    {
      city: "Lagos",
      area: "Lekki Phase 1",
      address: "14 Admiralty Way, Lekki Phase 1, Lagos",
      phone: "+234 800 373 3653",
      hours: "Mon–Sat · 7am – 8pm",
    },
    {
      city: "Abuja",
      area: "Wuse 2",
      address: "9 Aminu Kano Crescent, Wuse 2, Abuja",
      phone: "+234 800 373 3654",
      hours: "Mon–Sat · 7am – 8pm",
    },
    {
      city: "Port Harcourt",
      area: "Old GRA",
      address: "27 Forces Avenue, Old GRA, Port Harcourt",
      phone: "+234 800 373 3655",
      hours: "Mon–Sat · 7am – 7pm",
    },
  ] as Location[],

  contact: {
    email: "hello@freshfoldlaundry.ng",
    phone: "+234 800 373 3653",
    whatsapp: "+234 800 373 3653",
    location: "Lagos · Abuja · Port Harcourt, Nigeria",
  },

  socials: {
    instagram: "https://instagram.com/freshfoldlaundry",
    facebook: "https://facebook.com/freshfoldlaundry",
    x: "https://x.com/freshfoldng",
    whatsapp: "https://wa.me/2348003733653",
  },

  legal: [
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms of Service", href: "/terms" },
  ],

  footer: {
    variant: "FT1",
    brandStatement:
      "Fresh, carefully folded laundry across Lagos, Abuja and Port Harcourt. We collect, we care, we return.",
    contactEmail: "hello@freshfoldlaundry.ng",
    address: "Lagos · Abuja · Port Harcourt, Nigeria",
  },

  seo: {
    siteUrl: "https://freshfoldlaundry.ng",
    title: "FreshFold Laundry — Wash, Fold & Dry Cleaning in Lagos, Abuja & Port Harcourt",
    description:
      "FreshFold is a premium laundry & garment-care service with pickup and delivery across Lagos, Abuja and Port Harcourt. Wash & fold, dry cleaning, and door-to-door collection.",
    locale: "en_NG",
  },

  nav: [
    { href: "/", label: "Home" },
    { href: "/services", label: "Services" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ],
} as const;

export type SiteConfig = typeof siteConfig;
export default siteConfig;
