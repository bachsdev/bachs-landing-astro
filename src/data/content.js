export const NAVIGATION = [
  { label: "Features", href: "#features" },
  { label: "Docs", href: "https://docs.usesyncpay.com/", external: true },
];

export const HERO = {
  eyebrow: "Now hiring",
  title: "Accept global payments. Automate your billing.",
  description:
    "A complete payments and billing platform built for African internet businesses selling subscriptions, SaaS, and digital products to the world.",
  ctaButtons: [
    { text: "Get Early Access", href: "/early-access", variant: "primary" },
    {
      text: "Read the Docs",
      href: "https://docs.usesyncpay.com/",
      variant: "secondary",
      external: true,
    },
  ],
  footnote: "Early-stage founders in Africa get priority access",
};

export const PROBLEM = {
  eyebrow: "The gap",
  title: "You're building for the world.\nYour payment stack wasn't.",
  description1:
    "The tools most African founders reach for — Stripe, Paystack, Flutterwave — each solve a slice of the puzzle. Stripe doesn't settle to your Nigerian account. Paystack doesn't do subscriptions at the depth you need. Flutterwave won't handle your SaaS trials, proration, and tax for a UK customer.",
  description2:
    "You end up stitching three platforms together, paying three fee layers, and debugging three webhooks at 2am. Bachs replaces all of it.",
};

export const HOW_IT_WORKS = [
  {
    title: "Fast",
    description:
      "Process transfers and settle to African bank accounts in real time. Optimized for throughput across cards, bank transfer, and mobile money.",
    icon: "clock",
  },
  {
    title: "Secure",
    description:
      "Fraud detection, failed-payment recovery, and KYC built in. Risk headaches stay off your plate.",
    icon: "shield",
  },
  {
    title: "Full-stack",
    description:
      "Checkout, subscriptions, usage billing, tax, and settlement. One integration. No middleware.",
    icon: "stack",
  },
  {
    title: "Global",
    description:
      "Local payment methods in Africa, Europe, and North America. Your customer pays in their currency. You settle in yours.",
    icon: "globe",
  },
];

export const FAQS = [
  {
    question: "What payment methods does Bachs support?",
    answer:
      "Bachs supports Cards (135+ currencies), Mobile Money (GHS, KES, UGX, XAF, XOF, RWF, ZMW, TZS), Crypto stablecoins (USDT, USDC), and Bank Transfer — all in one checkout.",
  },
  {
    question: "Do I need to be technical to integrate?",
    answer:
      "No. You can launch with hosted checkout. If you want full control, use our SDKs for Node.js, Python, and Go.",
  },
  {
    question: "Is Bachs a payment processor?",
    answer:
      "Bachs is a full payments and billing platform: checkout, subscriptions, tax handling, and settlement in one stack.",
  },
  {
    question: "Does Bachs handle tax?",
    answer:
      "Yes. We support automated VAT/GST calculation and Merchant of Record workflows for eligible markets.",
  },
  {
    question: "Which payout methods do you support?",
    answer: "You can settle to supported bank accounts and local rails.",
  },
  {
    question: "What countries does Bachs support?",
    answer:
      "Bachs is built for African internet businesses selling globally, with expanding support across Africa, Europe, and North America.",
  },
  {
    question: "Do you handle KYC?",
    answer:
      "Yes. We handle required onboarding checks based on your region, product setup, and compliance requirements.",
  },
];

export const FOOTER = {
  copyright: "© Bachs, Inc. 2025",
  links: {
    features: [
      { label: "Global Checkout", href: "#" },
      { label: "Subscriptions", href: "#" },
      { label: "Usage Billing", href: "#" },
      { label: "Tax & MOR", href: "#" },
      { label: "Settlement", href: "#" },
      { label: "Stablecoin", href: "#" },
    ],
    resources: [
      { label: "Documentation", href: "https://docs.bachs.io" },
      { label: "API Reference", href: "https://docs.bachs.io/api-reference" },
      {
        label: "Merchant of Record",
        href: "https://docs.bachs.io/mor/overview",
      },
      { label: "Pricing", href: "#" },
      { label: "Changelog", href: "#" },
    ],
    company: [
      { label: "About", href: "#" },
      { label: "Blog", href: "#" },
      { label: "Careers", href: "#" },
      { label: "Press", href: "#" },
      { label: "Pre-Seed Deck", href: "/preseed2026", external: true },
    ],
    legal: [
      { label: "Privacy", href: "#" },
      { label: "Terms", href: "#" },
    ],
  },
};
