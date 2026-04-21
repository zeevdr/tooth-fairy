// ============================================================
// פיית השיניים - קובץ הגדרות
// Edit this file to customize the site
// ============================================================

const TOOTH_FAIRY_DATA = {

  // ---------- Site metadata ----------
  site: {
    title: "פיית השיניים",
    tagline: "⋆ משלוחים קסומים היישר מממלכת הפיות ⋆",
    heroTitle: "שלום חברים קטנים!",
    heroText: "איבדתם שן? מזל טוב! אני פיית השיניים ואני אוספת את כל השיניים היפות ומחליפה אותן במתנות קסומות. בחרו את המתנה שבא לכם ואני אדאג שהיא תגיע אליכם מתחת לכרית!",
    catalogTitle: "הקטלוג הקסום",
    howItWorksTitle: "איך זה עובד?",
    footerText: "נעשה באהבה על ידי פיית השיניים הראשית",
    footerAddress: "ממלכת הפיות ⋆ רחוב ענן הקסם 7 ⋆ הממלכה הסודית"
  },

  // ---------- User profile (logged-in avatar) ----------
  user: {
    name: "נסיכה",           // change to your daughter's name
    avatar: "👧",             // emoji OR URL to image (https://...)
    teethBalance: 7,          // current teeth the user has to spend
    showBalance: true         // show tooth count next to avatar?
  },

  // ---------- Status → Hebrew label + color mapping ----------
  // Change these to rename the ribbons or swap colors
  statusMap: {
    "available": {
      label: "זמין",
      color: "#a8f0d1",       // mint
      textColor: "#1a0b2e",
      showRibbon: false       // don't show ribbon for available items
    },
    "out of stock": {
      label: "אזל מהמלאי",
      color: "#8a7a9e",       // muted gray-purple
      textColor: "#fff",
      showRibbon: true
    },
    "being delivered": {
      label: "בדרך אליך! ✨",
      color: "#ffb627",       // gold
      textColor: "#1a0b2e",
      showRibbon: true,
      pulse: true             // animate this ribbon
    },
    "delivered": {
      label: "הגיע! 💝",
      color: "#ff5fa2",       // pink
      textColor: "#fff",
      showRibbon: true
    }
  },

  // ---------- Button text per status ----------
  buttonText: {
    "available": "אני רוצה!",
    "out of stock": "אין במלאי",
    "being delivered": "בדרך...",
    "delivered": "כבר הגיע 💝"
  },

  // Toast messages (use {name} as placeholder for item name)
  toastMessages: {
    "available": "✨ {name} בדרך אליך!",
    "out of stock": "😢 אוי, {name} אזל מהמלאי",
    "being delivered": "⏳ {name} כבר בדרך!",
    "delivered": "💝 {name} כבר אצלך!"
  },

  // Not enough teeth message (use {needed} and {have})
  notEnoughTeethMessage: "🦷 צריך {needed} שיניים, יש לך {have}",

  // ---------- Items catalog ----------
  // Each item:
  //   id          - unique string
  //   name        - Hebrew name
  //   description - Hebrew description
  //   price       - number of teeth
  //   status      - one of the keys in statusMap
  //   color       - background color theme: lavender, gold, mint, pink, cream, rainbow
  //   image       - path/URL to image file (.jpg, .png, .svg, .webp, etc.)
  //                 examples: "images/unicorn.jpg", "./pics/crown.png",
  //                           "https://example.com/toy.jpg"
  //                 OR an emoji fallback like "🦄" if you don't have an image yet
  //   badge       - optional text shown as sticker (e.g. "חדש!", "פופולרי")
  items: [
    {
      id: "unicorn",
      name: "חד-קרן קסום",
      description: "חבר פלומתי שמגיע ישר מיער הקשת בענן. רוקד כשאף אחד לא מסתכל!",
      price: 3,
      status: "out of stock",
      color: "lavender",
      image: "images/unicorn.svg",
      badge: "חדש!"
    },
    {
      id: "generator01",
      name: "גנרטור עץ",
      description: "משחק גנרטור חשמלי מדהים מעץ",
      price: 3,
      status: "being delivered",
      color: "lavender",
      image: "images/גלגל_חשמל.jpg_.avif",
      badge: "לחכמים בלבד!"
    },
    {
      id: "crown",
      name: "כתר נסיכה אמיתי",
      description: "כתר זהב עם אבנים קסומות. מי שחובש אותו הופך לנסיך או נסיכה של היום!",
      price: 5,
      status: "out of stock",
      color: "gold",
      image: "images/crown.svg",
      badge: null
    },
    {
      id: "spellbook",
      name: "ספר הכישופים הקטן",
      description: "ספר עם 100 כישופים אמיתיים! (אזהרה: לא להפוך את אמא לצפרדע)",
      price: 4,
      status: "out of stock",
      color: "mint",
      image: "images/spellbook.svg",
      badge: "פופולרי"
    },
    {
      id: "slime",
      name: "סליים הקסם של פיות",
      description: "סליים נוצץ שמחליף צבעים! נמתח, קופץ, ומצחקק כשנוגעים בו.",
      price: 2,
      status: "out of stock",
      color: "rainbow",
      image: "images/slime.svg",
      badge: null
    },
    {
      id: "carosle01",
      name: "קרוסלת עץ",
      description: "קרוסלת עץ חשמלית. כסאות מסתובבים במהירות שיא",
      price: 3,
      status: "being delivered",
      color: "rainbow",
      image: "images/קרוסלה_עץ.avif",
      badge: "לחכמים בלבד!"
    },
    {
      id: "wings",
      name: "כנפי פיה אמיתיות",
      description: "כנפיים שמתאימות בדיוק לגב שלך. לא מבטיחים טיסה אמיתית, אבל החלומות מתגשמים!",
      price: 6,
      status: "out of stock",
      color: "pink",
      image: "images/wings.svg",
      badge: "מוגבל!"
    },
    {
      id: "letter-kit",
      name: "ערכת מכתבים קסומה",
      description: "דפים מבושמים, עטים נוצצים וחותמת סודית - כדי שתוכלו לכתוב לי חזרה!",
      price: 3,
      status: "out of stock",
      color: "cream",
      image: "images/letter-kit.svg",
      badge: null
    },
    {
      id: "electric_kit01",
      name: "ערכת ניסויים חשמלית",
      description: "ערכת ניסויים אלקטרומגנטיים מתקדמים למעבדת פיזיקה",
      price: 3,
      status: "delivered",
      color: "rainbow",
      image: "images/ערכת_ניסויים.avif",
      badge: "לא כל אחד יכול!"
    },
  ],

  // Fallback emoji shown if an image fails to load (or if you haven't
  // added images yet). Set to null to just show a gift box by default.
  imageFallback: "🎁",

  // ---------- "How it works" steps ----------
  steps: [
    { title: "שן נופלת", description: "שומרים היטב על השן הקטנה שנפלה!" },
    { title: "שמים מתחת לכרית", description: "לפני שהולכים לישון, שמים את השן עם פתק עם המתנה הנבחרת" },
    { title: "אני מגיעה בלילה", description: "בזמן שאתם חולמים, אני טסה אליכם ומחליפה את השן במתנה!" },
    { title: "מתעוררים להפתעה", description: "בבוקר מגלים את הקסם מתחת לכרית ✨" }
  ]

};

// Make it globally available
if (typeof window !== 'undefined') window.TOOTH_FAIRY_DATA = TOOTH_FAIRY_DATA;
