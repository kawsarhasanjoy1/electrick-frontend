export const logo =
  "https://demo2.pavothemes.com/technocy/wp-content/uploads/2021/07/logo.svg";
export const crownLcd =
  "https://i.ibb.co.com/38GM91f/o-bg-remover-gen-2s-ZAy8-WN1t4he4-WU61nl-T3z2l-Zi.png";
export const iphoneLcd =
  "https://i.ibb.co.com/rKS70Sx7/Original-LCD-for-i-Phone-X-10-OLED-Touch-Screen-Display-Replacement-removebg-preview.png";
export const samLcd =
  "https://i.ibb.co.com/Xx9hKGLD/Samsung-Galaxy-M21-Display-removebg-preview.png";

export const lcdCategories = [
  {
    name: "mobile",
  },
  {
    name: "laptop",
  },
  {
    name: "tablet",
  },
  {
    name: "tv",
  },
  {
    name: "monitor",
  },
  {
    name: "smartwatch",
  },
];

export const brands = [
  "Samsung",
  "Apple",
  "Xiaomi",
  "OnePlus",
  "Sony",
  "LG",
  "Huawei",
  "Realme",
];

export const displayTypes = [
  "Retina",
  "Super AMOLED",
  "Dynamic AMOLED",
  "Liquid Retina",
  "P-OLED",
];

export const qualities = ["original", "medium", "normal", "high"];

export const statuses = ["available", "upcoming"];
export const resolutions = [
  "240x320",
  "320x480",
  "480x800",
  "480x854",
  "540x960",
  "720x1560",
  "720x1600",
  "720x1280",
  "720x1520",
  "1080x1920",
  "1080x2160",
  "1440x2560",
  "1440x2880",
  "1440x3120",
  "1440x3168",
  "1440x3200",
  "1536x2152",
  "1600x900",
  "1920x1080",
  "1920x1200",
  "2048x1536",
  "2160x3840",
  "2160x4320",
  "2208x1768",
  "2560x1080",
  "2560x1440",
  "2560x1600",
  "3200x1800",
  "3440x1440",
  "3840x1600",
  "3840x2160",
  "5120x1440",
  "5120x2160",
  "5120x2880",
  "6016x3384",
  "7680x2160",
  "7680x4320",
  "10240x4320",
  "10240x5760",
  "11520x4320",
  "1280x800",
  "1366x768",
  "15360x4320",
  "15360x8640",
];

export const discountPrices = ["-discountPrice"];
export const price = ["100", "200", "300", "400", "500", "600", "700"];

export const refreshRate = [60, 75, 90, 120, 144, 165, 240, 360];
export const hdrSupport = ["true", "false"];
export const FilteringData = [
  {
    key: "category",
    label: "Category",
    options: lcdCategories.map((c) => c.name),
  },
  { key: "brand", label: "Brand", options: brands },
  { key: "displayType", label: "Display Type", options: displayTypes },
  { key: "quality", label: "Quality", options: qualities },
  { key: "resolution", label: "Resolution", options: resolutions },
  { key: "status", label: "Status", options: statuses },
  { key: "hdrSupport", label: "Hdr Support", options: hdrSupport },
  {
    key: "refreshRate",
    label: "Refresh Rate (Hz)",
    options: refreshRate.map((r) => r.toString()),
  },
  {
    key: "sort",
    label: "Discount price",
    options: discountPrices,
  },
];

export const USER_ROLE = {
  user: "user",
  admin: "admin",
  superAdmin: "superAdmin",
} as const;

export const lcdTypes = {
  mobile: ["tft", "ips", "amoled", "oled", "lcd", "super_amoled"],
  monitor: ["led_monitor", "ips_monitor", "oled_monitor", "curved_monitor"],
  iphone: ["retina", "oled_iphone", "lcd_iphone"],
  smartwatch: ["amoled_smartwatch", "lcd_smartwatch", "oled_smartwatch"],
  led: ["led_lcd_type_1", "led_lcd_type_2", "hdr_led", "ultra_hd_led"],
  tv: ["4k_tv", "hdr_tv", "oled_tv", "smart_tv"],
  laptop: [
    "ips_laptop",
    "oled_laptop",
    "lcd_laptop",
    "touchscreen_laptop",
    "led_laptop",
  ],
  tablet: ["ips_tablet", "oled_tablet", "lcd_tablet", "retina_tablet"],
};

export const displayFeatures = {
  mobile: [
    "OLED",
    "AMOLED",
    "Super AMOLED",
    "Dynamic AMOLED",
    "LTPO Display",
    "LTPS Display",
    "Foldable Display",
    "Rollable Display",
    "P-OLED",
    "Retina Display",
    "Super Retina XDR",
    "ProMotion 120Hz",
    "S Pen Support",
    "Under-Display Camera",
    "In-Display Fingerprint Scanner",
    "Corning Gorilla Glass",
    "Dragontrail Glass",
    "Ceramic Shield",
    "Sapphire Glass",
  ],

  laptop: [
    "IPS LCD",
    "Mini-LED Display",
    "Micro-LED Display",
    "Quantum Dot Technology",
    "E Ink Display",
    "3D Display",
    "Ultra-Wide Viewing Angle",
    "Zero-Latency Touch",
    "1ms Response Time",
    "High Brightness Mode",
    "HDR1000",
    "HDR1500",
    "HDR2000",
    "HDR4000",
    "Super Contrast Ratio",
  ],

  tablet: [
    "P-OLED",
    "LTPO Display",
    "Super Retina XDR",
    "Gorilla Glass",
    "120Hz Refresh Rate",
    "Wide Color Gamut",
    "Eye Comfort Shield",
    "Always-On Display",
    "HDR10+",
    "Multi-Touch Support",
    "Stylus Support",
    "Glove Touch Support",
  ],

  tv: [
    "OLED",
    "QLED",
    "Mini-LED Display",
    "Micro-LED Display",
    "HDR10+",
    "Dolby Vision",
    "Super Retina HD",
    "True Tone Display",
    "Super Contrast Ratio",
    "Variable Refresh Rate",
    "Motion Blur Reduction",
    "Ultra-Wide Viewing Angle",
    "Transparent Display",
    "Holographic Display",
  ],

  monitor: [
    "IPS LCD",
    "Nano IPS",
    "IGZO Display",
    "OLED",
    "AMOLED",
    "Quantum Dot Technology",
    "DCI-P3 Color Accuracy",
    "1000+ Nits Brightness",
    "Adaptive Refresh Rate",
    "NVIDIA G-Sync",
    "AMD FreeSync",
    "HDR1000",
    "HDR2000",
    "1ms Response Time",
    "Zero-Latency Touch",
    "Sunlight Readability Enhancement",
  ],

  smartwatch: [
    "P-OLED",
    "Retina Display",
    "Super Retina HD",
    "Always-On Display",
    "Sapphire Glass",
    "Edge Display",
    "Super Fast Charging",
    "Touch Screen Digitizer",
    "Standard HD Display",
    "Low Power Consumption",
  ],
  iphone: [
    "Super Retina XDR",
    "ProMotion 120Hz",
    "True Tone Display",
    "Ceramic Shield",
    "HDR10+",
    "Dolby Vision",
    "P3 Wide Color Gamut",
    "Haptic Touch",
    "Always-On Display",
    "Dynamic Island",
    "Face ID",
    "Ultra-Wide Viewing Angle",
    "High Brightness Mode (2000 nits peak)",
    "Scratch-Resistant Glass",
    "Oleophobic Coating (Fingerprint Resistant)",
    "Edge-to-Edge Display",
    "Under-Display Camera (Future Tech)",
    "In-Display Fingerprint Scanner (Possibly Future)",
    "LTPO OLED",
    "HDR1500",
    "HDR2000",
    "EIS for Video Playback",
    "DCI-P3 Color Accuracy",
    "Adaptive Refresh Rate",
    "Sunlight Readability Enhancement",
    "Low Power Consumption",
    "Motion Blur Reduction",
    "Eye Comfort Shield",
    "Flicker-Free Technology",
    "Zero-Latency Touch",
    "1ms Response Time",
    "Touch Screen Digitizer",
  ],
};

export const sortReview = [
  { label: "High to Low", value: "-rating" },
  { label: "Low to High", value: "rating" },
  { label: "Newest First", value: "-createdAt" },
  { label: "Oldest First", value: "createdAt" },
];
export const sortProducts = [
  { label: "High to Low", value: "-price" },
  { label: "Low to High", value: "price" },
  { label: "High to Low rating", value: "-rating" },
  { label: "Low to High rating", value: "rating" },
  { label: "Newest First", value: "-createdAt" },
  { label: "Oldest First", value: "createdAt" },
];
export const sortBlogs = [
  { label: "Newest First", value: "-createdAt" },
  { label: "Oldest First", value: "createdAt" },
];
