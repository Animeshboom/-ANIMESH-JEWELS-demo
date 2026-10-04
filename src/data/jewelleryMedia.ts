/**
 * Curated Fine Jewellery Media & Video Stream Registry
 * Features direct high-definition MP4 streams and uncompressed macro photography.
 * Zero external redirects - 100% branded and contained within ANIMESH JEWELS.
 */

export interface JewelleryMediaItem {
  id: string
  pinterestId: string
  title: string
  category: string
  collection: string
  aspectRatio: string
  mediaType: 'video' | 'image'
  videoUrl?: string
  posterUrl?: string
  imageUrl?: string
  embedWidth: number
  embedHeight: number
  description: string
  specs: {
    metal: string
    stones: string
    certification: string
  }
}

export const JEWELLERY_MEDIA_COLLECTION: Record<string, JewelleryMediaItem> = {
  featuredSpotlight: {
    id: 'spotlight-choker',
    pinterestId: '1098174690405612693',
    title: 'The Maharani Imperial Bridal Choker',
    category: 'Haute Joaillerie Spotlight',
    collection: 'Royal Bridal Suite',
    aspectRatio: '9/16',
    mediaType: 'video',
    videoUrl:
      'https://v1.pinimg.com/videos/iht/expMp4/34/20/f2/3420f2736c3e531a22c47d0ff379669e_720w.mp4',
    posterUrl:
      'https://i.pinimg.com/videos/thumbnails/originals/34/20/f2/3420f2736c3e531a22c47d0ff379669e.0000000.jpg',
    embedWidth: 600,
    embedHeight: 1167,
    description:
      'A sovereign bridal masterwork set with certified uncut syndicate Polki diamonds, Zambian emerald cabochons, and hand-strung natural Basra pearls.',
    specs: {
      metal: '22K Hallmarked Royal Gold',
      stones: '42.50ct Syndicate Polki & Emeralds',
      certification: 'GII Certified & BIS 916',
    },
  },
  signatureSolitaire: {
    id: 'sig-solitaire',
    pinterestId: '791859547035338613',
    title: 'Imperial Solitaire Engagement Ring',
    category: 'Haute Solitaires',
    collection: 'Signature Collection',
    aspectRatio: '9/16',
    mediaType: 'image',
    imageUrl:
      'https://i.pinimg.com/736x/d9/54/e0/d954e046f1a8a5ae69d4b687d21ef1f8.jpg',
    embedWidth: 345,
    embedHeight: 717,
    description:
      '3.50ct D-Flawless natural brilliant-cut diamond mounted on sculpted 18K champagne gold cathedral prongs.',
    specs: {
      metal: '18K Champagne Gold & Platinum',
      stones: '3.50ct Natural Diamond (D-Flawless)',
      certification: 'GIA & IGI Inscribed',
    },
  },
  signatureJadau: {
    id: 'sig-jadau',
    pinterestId: '893190538773490948',
    title: 'Nizam Royal Polki Necklace',
    category: 'Heritage Bridal',
    collection: 'Signature Collection',
    aspectRatio: '9/16',
    mediaType: 'image',
    imageUrl:
      'https://i.pinimg.com/736x/2f/00/c5/2f00c5a6f5265a5b2e7d10dc9b469d9e.jpg',
    embedWidth: 345,
    embedHeight: 713,
    description:
      'Centuries-old Rajasthani Jadau goldsmithing with glowing emerald drops and intricate back-side meenakari enamel.',
    specs: {
      metal: '22K Pure Hallmark Gold',
      stones: 'Natural Uncut Diamonds & Columbian Emeralds',
      certification: 'BIS 916 Certified',
    },
  },
  signatureEarrings: {
    id: 'sig-earrings',
    pinterestId: '328199891608705751',
    title: 'Cascade Diamond Chandelier Ear Pendants',
    category: 'High Fine Jewellery',
    collection: 'Signature Collection',
    aspectRatio: '9/16',
    mediaType: 'image',
    imageUrl:
      'https://i.pinimg.com/736x/1a/b6/f7/1ab6f73573d98c45da2db771678c9f7b.jpg',
    embedWidth: 450,
    embedHeight: 663,
    description:
      'Articulating pear and marquise diamond cascades moving with fluid grace in platinum and 18K yellow gold.',
    specs: {
      metal: 'Platinum 950 & 18K Gold',
      stones: '12.80ct Rare White Diamonds (E-VVS1)',
      certification: 'IGI Certified Natural',
    },
  },
  collectionBridal: {
    id: 'col-bridal',
    pinterestId: '1038501995323651862',
    title: 'Bridal & Jadau Heirlooms',
    category: 'Wedding Trousseau',
    collection: 'Discover Collections',
    aspectRatio: '9/16',
    mediaType: 'video',
    videoUrl:
      'https://v1.pinimg.com/videos/iht/720p/7b/89/68/7b89683507618134a2d95f49e6bf1dbe.mp4',
    posterUrl:
      'https://i.pinimg.com/videos/thumbnails/originals/7b/89/68/7b89683507618134a2d95f49e6bf1dbe.0000000.jpg',
    embedWidth: 600,
    embedHeight: 1167,
    description:
      'Grand bridal neckpieces, maang tikkas, and jhumkas handcrafted for your historic royal wedding milestones.',
    specs: {
      metal: '22K BIS Hallmarked Gold',
      stones: 'Syndicate Polki & Burmese Rubies',
      certification: 'BIS & GII Certified',
    },
  },
  collectionSolitaire: {
    id: 'col-solitaires',
    pinterestId: '18225573488365483',
    title: 'High Solitaires & Eternity Bands',
    category: 'Certified Diamonds',
    collection: 'Discover Collections',
    aspectRatio: '9/16',
    mediaType: 'image',
    imageUrl:
      'https://i.pinimg.com/736x/00/9e/d2/009ed273ae5a67eae00f6e471ad2172c.jpg',
    embedWidth: 600,
    embedHeight: 1000,
    description:
      'Bespoke solitaires from 1 to 10 carats, crafted in pure platinum and champagne gold with ideal cut symmetry.',
    specs: {
      metal: 'Platinum 950 & 18K Gold',
      stones: 'Certified Natural Solitaires',
      certification: 'GIA Certified with Laser Inscription',
    },
  },
  collectionHeritage: {
    id: 'col-heritage',
    pinterestId: '1130403575239470992',
    title: 'Royal Heritage & Temple Craft',
    category: 'Imperial Legacy',
    collection: 'Discover Collections',
    aspectRatio: '9/16',
    mediaType: 'image',
    imageUrl:
      'https://i.pinimg.com/736x/80/ef/a3/80efa37495a1edd6ee8356a6f0744b5b.jpg',
    embedWidth: 236,
    embedHeight: 454,
    description:
      'Timeless uncut diamond silhouettes celebrating Mughal, Nizami, and Rajput royal court heritage.',
    specs: {
      metal: '22K Traditional Kundan Gold',
      stones: 'Natural Heritage Polki',
      certification: 'Authenticity Guarantee',
    },
  },
  atelierCraft: {
    id: 'atelier-craft',
    pinterestId: '936678422522515917',
    title: 'The Master Goldsmith Karigari',
    category: 'Atelier Savoir-Faire',
    collection: 'The Art of Craftsmanship',
    aspectRatio: '9/16',
    mediaType: 'video',
    videoUrl:
      'https://v1.pinimg.com/videos/iht/expMp4/0b/57/a2/0b57a2f4b915ab4bb3cc295841d1745c_720w.mp4',
    posterUrl:
      'https://i.pinimg.com/videos/thumbnails/originals/0b/57/a2/0b57a2f4b915ab4bb3cc295841d1745c.0000000.jpg',
    embedWidth: 450,
    embedHeight: 900,
    description:
      'Witness the ancient royal techniques of melting, hand-forging, stone setting, and liquid-gold ultrasonic polishing.',
    specs: {
      metal: '22K & 18K Pure Gold',
      stones: 'Natural Diamonds & Gemstones',
      certification: 'In-House Master Karigari',
    },
  },
}
