export const SDK_TAB_CONTENT = {
  node: {
    title: "Node.js SDK",
    description:
      "Build payment flows in Node.js with a comprehensive client for checkout sessions, subscriptions, webhooks, and settlement workflows.",
    checklist: [
      "Hosted Checkout Sessions",
      "Subscription Lifecycle APIs",
      "Webhook Signature Verification",
      "Tax & Settlement Controls",
    ],
    fileLabel: "nvim api/checkout/route.ts",
    code: `// api/checkout/route.ts
import Bachs from '@bachs/sdk'

const b = new Bachs({ key: process.env.BACHS_KEY })

const session = await b.checkout.create({
  product:    'prod_pro_monthly',
  billing:    'subscription',
  tax:        'auto',
  crypto:     true,
  settlement: 'NGN',
})`,
    terminal: `~ % npm install @bachs/sdk
✓ Installing...
✓ Compiled in 112ms`,
  },
  python: {
    title: "Python SDK",
    description:
      "Build payment flows in Python with a lightweight client for checkout sessions, subscriptions, webhooks, and settlement workflows.",
    checklist: [
      "Hosted Checkout Sessions",
      "Subscription Lifecycle APIs",
      "Webhook Signature Verification",
      "Tax & Settlement Controls",
    ],
    fileLabel: "nvim api/checkout.py",
    code: `# api/checkout.py
from bachs_sdk import Bachs

client = Bachs("bk_live_xxx")

session = client.checkout.create(
  settlement="NGN",
  tax="auto",
  billing="subscription",
)`,
    terminal: `~ % pip install bachs-sdk
✓ Installing...
✓ Ready in 0.9s`,
  },
  go: {
    title: "Go SDK",
    description:
      "Use strongly typed Go helpers to create checkout sessions, automate billing, and receive settlement events with predictable performance.",
    checklist: [
      "Typed Checkout Client",
      "Plan & Usage Billing APIs",
      "Webhook Event Parsing",
      "Fast Settlement Orchestration",
    ],
    fileLabel: "nvim api/checkout/main.go",
    code: `// api/checkout/main.go
package main

import "github.com/bachs/bachs-go"

func main() {
  client := bachs.New("bk_live_xxx")
  _, _ = client.Checkout.Create(bachs.CheckoutParams{
    Settlement: "NGN",
    Tax:        "auto",
    Billing:    "subscription",
  })
}`,
    terminal: `~ % go get github.com/bachs/bachs-sdk-go
✓ Downloading modules...
✓ Build complete`,
  },
  rest: {
    title: "REST API",
    description:
      "Use the HTTP API directly for checkout, subscriptions, tax, settlement, and webhooks when you want language-agnostic integration.",
    checklist: [
      "Simple HTTPS Endpoints",
      "Idempotent Request Support",
      "Signed Webhook Events",
      "Global Payment Flows",
    ],
    fileLabel: "nvim api/checkout.http",
    code: `# api/checkout.http
POST /v1/checkout
Host: api.bachs.io
Authorization: Bearer bk_live_xxx
Content-Type: application/json

{
  "product": "prod_pro_monthly",
  "billing": "subscription",
  "tax": "auto",
  "crypto": true,
  "settlement": "NGN"
}`,
    terminal: `~ % curl https://api.bachs.io/v1/checkout
✓ 201 Created
✓ session_url returned`,
  },
};
