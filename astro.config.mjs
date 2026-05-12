// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import dualmark from '@dualmark/astro';
import cloudflare from '@astrojs/cloudflare';

export default defineConfig({
  output: 'server',
  adapter: cloudflare({
    imageService: 'compile',
  }),
  site: 'https://bachs.io',
  integrations: [
    react(),
    dualmark({
      siteUrl: 'https://bachs.io',
      staticPages: [
        {
          pattern: '/',
          render: () => `# Bachs — Payments & Billing for Internet Businesses

Bachs is a complete payments and billing platform built for African internet businesses selling subscriptions, SaaS, and digital products to the world.

## What Bachs Does

- **Accept payments** — Cards (135+ currencies), Mobile Money (GHS, KES, UGX, XAF, XOF, RWF, ZMW, TZS), Crypto stablecoins (USDT, USDC), and Bank Transfer — all in one checkout.
- **Automate billing** — Subscriptions, usage billing, trials, proration, and dunning out of the box.
- **Settle locally** — NGN, GHS, KES, USD. Settle to your local bank account in real time.
- **Handle tax** — Automated VAT/GST calculation and Merchant of Record workflows.
- **Developer-first** — SDKs for Node.js, Python, and Go. One integration for every payment method.

## The Problem Bachs Solves

Stripe doesn't settle to your Nigerian account. Paystack doesn't do subscriptions at the depth you need. Flutterwave won't handle your SaaS trials, proration, and tax for a UK customer. Bachs replaces all of it — one platform, one integration, one fee layer.

## Pricing

Starts at 1.2% per successful local transaction. No setup fees, no monthly costs.

## Company

Bachs is an early-stage fintech based in Africa. Building the payments infrastructure layer for the next generation of African internet businesses.
`,
        },
        {
          pattern: '/pricing',
          render: () => `# Pricing — Bachs

Simple, transparent pricing. No setup fees, no monthly costs.

## Local Transactions

**1.2%** per successful transaction — cards, mobile money, and bank transfer within Africa.

## International Transactions

**2.9% + $0.30** per successful card transaction from international customers.

## Stablecoins

**0.8%** per USDT/USDC transaction.

## What's Included

- Hosted checkout
- Subscription and billing management
- Usage-based billing
- Automatic tax calculation
- Local settlement (NGN, GHS, KES, USD)
- Fraud detection and failed-payment recovery
- KYC and compliance
- SDKs for Node.js, Python, and Go
- Dashboard and analytics
`,
        },
        {
          pattern: '/early-access',
          render: () => `# Early Access — Bachs

Bachs is opening early access to a small group of African developers building internet businesses.

## Who This Is For

African developers building SaaS, subscriptions, or digital product businesses who need a full payments and billing stack — not a patchwork of three platforms.

## What You Get

- Early access to the full Bachs platform
- Direct support from the Bachs team
- Priority onboarding

## How to Apply

Drop your email at https://bachs.io/early-access and we'll notify you the moment we're ready.
`,
        },
        {
          pattern: '/privacy',
          render: () => `# Privacy Policy — Bachs

This page describes how Bachs collects, uses, and protects your personal data. Visit https://bachs.io/privacy for the full policy.
`,
        },
        {
          pattern: '/buyer-terms',
          render: () => `# Buyer Terms — Bachs

These are the terms of service for buyers on the Bachs platform. Visit https://bachs.io/buyer-terms for the full terms.
`,
        },
        {
          pattern: '/merchant-terms',
          render: () => `# Merchant Terms — Bachs

These are the terms of service for merchants on the Bachs platform. Visit https://bachs.io/merchant-terms for the full terms.
`,
        },
        {
          pattern: '/aup',
          render: () => `# Acceptable Use Policy — Bachs

This policy describes prohibited activities and usage guidelines for the Bachs platform. Visit https://bachs.io/aup for the full policy.
`,
        },
      ],
    }),
  ],
  redirects: {
    '/beta': '/early-access',
  },
  image: {
    service: { entrypoint: 'astro/assets/services/sharp' },
  },
});
