import { useState } from "react";
import _logoLockup2x from "../../assets/icons/header-lockup-2x.png";
const logoLockup2x = _logoLockup2x.src ?? _logoLockup2x;
import _logoLockup8x from "../../assets/icons/header-lockup-8x.png";
const logoLockup8x = _logoLockup8x.src ?? _logoLockup8x;

/* ─── Shared style tokens ─────────────────────────────────────────────────── */
const body = {
  fontFamily: "'Plus Jakarta Sans', 'Inter', sans-serif",
  fontSize: "0.9375rem",
  color: "#444444",
  lineHeight: 1.75,
  marginBottom: "1rem",
};
const h3 = {
  fontFamily: "'Plus Jakarta Sans', 'Inter', sans-serif",
  fontSize: "0.9375rem",
  fontWeight: 600,
  color: "#111111",
  marginTop: "1.5rem",
  marginBottom: "0.625rem",
};
const list = {
  paddingLeft: "1.25rem",
  display: "flex",
  flexDirection: "column",
  gap: "0.5rem",
  marginBottom: "1rem",
  fontFamily: "'Plus Jakarta Sans', 'Inter', sans-serif",
  fontSize: "0.9375rem",
  color: "#444444",
  lineHeight: 1.75,
};
const link = { color: "#5266eb", textDecoration: "none" };
const th = {
  textAlign: "left",
  padding: "0.625rem 1rem",
  fontWeight: 600,
  color: "#111111",
  fontSize: "0.8125rem",
  background: "#f9f9f8",
};
const td = {
  padding: "0.75rem 1rem",
  color: "#444444",
  fontSize: "0.875rem",
  verticalAlign: "top",
  lineHeight: 1.6,
};

function Section({ title, children }) {
  return (
    <div style={{ marginBottom: "3.5rem" }}>
      <h2
        style={{
          fontFamily: "'Plus Jakarta Sans', 'Inter', sans-serif",
          fontSize: "1.125rem",
          fontWeight: 600,
          color: "#111111",
          letterSpacing: "-0.01em",
          marginBottom: "1.25rem",
          paddingBottom: "0.875rem",
          borderBottom: "2px solid #f0f0f0",
        }}
      >
        {title}
      </h2>
      {children}
    </div>
  );
}

/* ─── Privacy Policy content ──────────────────────────────────────────────── */
function PrivacyContent() {
  return (
    <div>
      <div style={{ marginBottom: "3rem" }}>
        <h1
          style={{
            fontFamily: "'Plus Jakarta Sans', 'Inter', sans-serif",
            fontSize: "2rem",
            fontWeight: 600,
            color: "#111111",
            letterSpacing: "-0.02em",
            marginBottom: "0.75rem",
          }}
        >
          Privacy Policy
        </h1>
        <p
          style={{
            fontSize: "0.875rem",
            color: "#888888",
            marginBottom: "1.5rem",
          }}
        >
          Effective Date: April 1, 2026
        </p>
        <p style={body}>
          Bachs Technologies Limited ("Bachs", "we", "us", or "our") provides
          payments and billing infrastructure for African founders building
          internet businesses — including SaaS products, APIs, digital
          marketplaces, and subscription services (the "Services"). We are
          committed to protecting your personal data and being transparent about
          how we handle it.
        </p>
        <p style={body}>
          This Privacy Policy describes how we collect, use, store, share, and
          protect personal data from merchants ("Merchants"), end-customers of
          those Merchants ("Buyers"), website visitors, and any other
          individuals who interact with our Services. It applies to our website,
          dashboard, checkout infrastructure, APIs, and all related tools and
          applications.
        </p>
        <p style={body}>
          Your use of the Services is at all times subject to our Master
          Services Terms ("Terms"), which incorporate this Privacy Policy. By
          accessing or using our Services, you acknowledge and accept the
          practices described below.
        </p>
      </div>

      <Section title="1. Who We Are">
        <p style={body}>
          Bachs Technologies Limited operates as a Merchant of Record ("MoR")
          and billing infrastructure provider. For data protection purposes:
        </p>
        <ul style={list}>
          <li>
            When processing data to provide our Services to Merchants, we act as
            a <strong>Data Processor</strong> on behalf of those Merchants.
          </li>
          <li>
            When collecting and processing data for our own business operations,
            analytics, compliance, and marketing, we act as a{" "}
            <strong>Data Controller</strong>.
          </li>
          <li>
            If you are a Buyer transacting through a Merchant using Bachs
            infrastructure, your primary relationship is with that Merchant.
            Please review the Merchant's privacy policy for information about
            their data practices. We process Buyer data only as necessary to
            complete transactions and fulfil our legal obligations.
          </li>
        </ul>
      </Section>

      <Section title="2. Personal Data We Collect">
        <p style={body}>
          The personal data we collect depends on how you interact with us and
          the capacity in which you engage with our Services.
        </p>
        <h3 style={h3}>2.1 Merchant Data (Collected Directly)</h3>
        <ul style={list}>
          <li>
            <strong>Business identity:</strong> business name, registered
            address, CAC registration number, and other business verification
            details.
          </li>
          <li>
            <strong>Identity verification (KYC/KYB):</strong> director names,
            BVN (Bank Verification Number), NIN (National Identity Number), and
            other government-issued identification documents where applicable,
            facial verification data, and any other information required by
            applicable law and our banking partners.
          </li>
          <li>
            <strong>Contact information:</strong> name, email address, and phone
            number.
          </li>
          <li>
            <strong>Financial and banking details:</strong> bank account
            information, settlement preferences, and payout history.
          </li>
          <li>
            <strong>Dashboard usage:</strong> product configurations,
            subscription plans, pricing models, API usage, billing settings, and
            feature interactions.
          </li>
          <li>
            <strong>Communications:</strong> support requests, correspondence,
            and chat logs.
          </li>
        </ul>
        <h3 style={h3}>
          2.2 Buyer / End-Customer Data (Collected at Checkout)
        </h3>
        <ul style={list}>
          <li>
            <strong>Contact and identity:</strong> name, email address, phone
            number, and billing address.
          </li>
          <li>
            <strong>Payment data:</strong> card type and last four digits of
            payment card. Full card numbers and CVVs are handled exclusively by
            our PCI-DSS compliant payment processor partners and are never
            stored on Bachs servers.
          </li>
          <li>
            <strong>Transaction history:</strong> purchase amounts, currency,
            timestamps, and merchant identifiers.
          </li>
          <li>
            <strong>Device and location:</strong> IP address, browser type,
            operating system, and coarse geolocation derived from IP, used for
            fraud prevention and compliance.
          </li>
          <li>
            <strong>Tax information:</strong> VAT/tax numbers where provided.
          </li>
        </ul>
        <h3 style={h3}>2.3 Data Collected Automatically</h3>
        <ul style={list}>
          <li>
            <strong>Log data:</strong> access times, pages viewed, API requests,
            referring URLs, and error logs.
          </li>
          <li>
            <strong>Analytics:</strong> session duration, feature interactions,
            dashboard engagement, and platform performance metrics.
          </li>
          <li>
            <strong>Cookies and tracking technologies:</strong> see Section 7
            below.
          </li>
        </ul>
        <h3 style={h3}>2.4 Data from Third Parties</h3>
        <ul style={list}>
          <li>
            Identity and compliance data from KYC/KYB partners and government
            databases.
          </li>
          <li>
            Financial institution data to facilitate settlement and fraud
            prevention.
          </li>
          <li>Public business registry data (e.g., CAC filings).</li>
        </ul>
      </Section>

      <Section title="3. How We Use Personal Data">
        <p style={body}>We use personal data for the following purposes.</p>
        <h3 style={h3}>Providing and Operating the Services</h3>
        <ul style={list}>
          <li>Processing payments and settling funds to Merchants.</li>
          <li>
            Providing global checkout, subscription billing, usage billing, and
            tax handling (including MoR and Tax Assist modes).
          </li>
          <li>
            Onboarding Merchants and completing KYC/KYB verification as required
            by law and our banking and payment partners.
          </li>
          <li>Generating invoices, receipts, and transaction records.</li>
          <li>
            Enabling stablecoin settlement rails (USDT/USDC) where applicable.
          </li>
        </ul>
        <h3 style={h3}>Security, Fraud Prevention, and Compliance</h3>
        <ul style={list}>
          <li>
            Detecting, preventing, and investigating fraudulent transactions and
            unauthorised access.
          </li>
          <li>Complying with AML, KYC, and CTF obligations.</li>
          <li>
            Satisfying reporting requirements under Nigerian law and the
            requirements of our banking and payment partners.
          </li>
        </ul>
        <h3 style={h3}>Improving the Services</h3>
        <ul style={list}>
          <li>
            Analysing usage patterns to develop new features and improve
            platform performance.
          </li>
          <li>Conducting internal research and product testing.</li>
        </ul>
        <h3 style={h3}>Communications and Marketing</h3>
        <ul style={list}>
          <li>
            Sending transactional emails: payment confirmations, invoices, and
            account notifications.
          </li>
          <li>
            Sending product updates and new feature announcements (with opt-out
            available at any time).
          </li>
          <li>Responding to support requests and inquiries.</li>
        </ul>
        <h3 style={h3}>Legal and Business Purposes</h3>
        <ul style={list}>
          <li>
            Meeting legal obligations under the Nigeria Data Protection Act
            2023, Central Bank of Nigeria (CBN) regulations, and other
            applicable regulations.
          </li>
          <li>
            Resolving disputes, enforcing our Terms, and defending legal claims.
          </li>
          <li>
            Facilitating business transactions such as mergers, acquisitions, or
            restructuring.
          </li>
        </ul>
      </Section>

      <Section title="4. Legal Bases for Processing">
        <p style={body}>
          We process personal data on the following legal bases under the
          Nigeria Data Protection Act 2023 (NDPA) and, where applicable, the EU
          General Data Protection Regulation (GDPR).
        </p>
        <div style={{ overflowX: "auto", marginTop: "1.5rem" }}>
          <table
            style={{
              width: "100%",
              borderCollapse: "collapse",
              fontSize: "0.875rem",
            }}
          >
            <thead>
              <tr style={{ borderBottom: "1px solid rgba(0,0,0,0.1)" }}>
                <th style={th}>Processing Activity</th>
                <th style={th}>Legal Basis</th>
                <th style={th}>Framework</th>
              </tr>
            </thead>
            <tbody>
              {[
                [
                  "Providing the Services, including payment processing and settlement",
                  "Contract performance",
                  "NDPA / GDPR",
                ],
                [
                  "KYC/KYB identity verification",
                  "Legal obligation; Contract performance",
                  "NDPA / GDPR",
                ],
                [
                  "Fraud prevention and security",
                  "Legitimate interest; Legal obligation",
                  "NDPA / GDPR",
                ],
                [
                  "Compliance with AML/CBN regulations",
                  "Legal obligation",
                  "NDPA / GDPR",
                ],
                [
                  "Analytics and product improvement",
                  "Legitimate interest",
                  "NDPA / GDPR",
                ],
                [
                  "Marketing communications",
                  "Legitimate interest; Consent (where required)",
                  "NDPA / GDPR",
                ],
                [
                  "Cookies and tracking technologies",
                  "Consent; Legitimate interest",
                  "NDPA / GDPR",
                ],
                [
                  "Business transfers and restructuring",
                  "Legitimate interest",
                  "NDPA / GDPR",
                ],
              ].map(([activity, basis, framework], i) => (
                <tr
                  key={i}
                  style={{ borderBottom: "1px solid rgba(0,0,0,0.06)" }}
                >
                  <td style={td}>{activity}</td>
                  <td style={td}>{basis}</td>
                  <td style={td}>{framework}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Section>

      <Section title="5. How We Share Personal Data">
        <p style={body}>
          Bachs does not sell personal data. We do not share personal data with
          third parties for their own marketing purposes. We share data only as
          described below.
        </p>
        <h3 style={h3}>5.1 Payment Processors and Banking Partners</h3>
        <p style={body}>
          We share necessary transaction and identity data with Stripe and our
          banking partners to process payments, manage settlements, and comply
          with financial regulations. These parties are subject to their own
          privacy policies and applicable data protection law.
        </p>
        <h3 style={h3}>5.2 Service Providers</h3>
        <p style={body}>
          We engage third-party vendors to support our operations — including
          cloud hosting, infrastructure, email delivery, fraud detection, and
          KYC/KYB verification. These vendors process data on our behalf under
          written data processing agreements and are prohibited from using data
          for their own purposes.
        </p>
        <h3 style={h3}>5.3 Merchants</h3>
        <p style={body}>
          Where you are a Buyer, we share transaction confirmation details
          (purchase confirmation, amount, and product description) with the
          relevant Merchant to fulfil your purchase. We do not share full card
          details with Merchants.
        </p>
        <h3 style={h3}>5.4 Legal and Regulatory Authorities</h3>
        <p style={body}>
          We may disclose personal data to regulators, law enforcement, and
          government authorities where required by law, court order, or valid
          legal process, including to the NDPC, the CBN, and equivalent
          authorities in other jurisdictions.
        </p>
        <h3 style={h3}>5.5 Business Transfers</h3>
        <p style={body}>
          In connection with a merger, acquisition, financing, or sale of our
          business, personal data may be transferred as part of that
          transaction. We will notify affected parties as required by law.
        </p>
        <h3 style={h3}>5.6 Protection of Rights and Safety</h3>
        <p style={body}>
          We may share data where necessary to prevent fraud, protect the
          security of our platform, or protect the rights and safety of Bachs,
          our Merchants, Buyers, or the public.
        </p>
      </Section>

      <Section title="6. Data Retention">
        <p style={body}>
          We retain personal data for as long as necessary to fulfil the
          purposes described in this policy and to comply with our legal
          obligations. Key retention periods include:
        </p>
        <ul style={list}>
          <li>
            <strong>Transaction records:</strong> minimum of five (5) years
            following transaction completion, as required under Nigeria's Money
            Laundering (Prevention and Prohibition) Act.
          </li>
          <li>
            <strong>KYC/KYB identity data and business account records:</strong>{" "}
            minimum of seven (7) years following account closure, in line with
            CBN requirements.
          </li>
          <li>
            <strong>General account and usage data:</strong> for the duration of
            the Merchant's active account and for a reasonable period thereafter
            for legal and operational purposes.
          </li>
          <li>
            <strong>Marketing and communications data:</strong> until you opt
            out or request deletion, subject to legal retention requirements.
          </li>
        </ul>
        <p style={body}>
          Upon expiration of applicable retention periods, we will securely
          delete, anonymise, or pseudonymise your data.
        </p>
      </Section>

      <Section title="7. Cookies and Tracking Technologies">
        <p style={body}>
          We use cookies and similar technologies (pixel tags, web beacons,
          local storage) on our website and dashboard for the following
          purposes:
        </p>
        <ul style={list}>
          <li>
            <strong>Essential cookies:</strong> required for platform
            functionality, authentication, and security. These cannot be
            disabled without affecting the Services.
          </li>
          <li>
            <strong>Functional cookies:</strong> remember your preferences and
            settings across sessions.
          </li>
          <li>
            <strong>Analytics cookies:</strong> help us understand how Merchants
            and visitors use our platform. We use tools such as Google
            Analytics. You can opt out at{" "}
            <a href="https://tools.google.com/dlpage/gaoptout" style={link}>
              tools.google.com/dlpage/gaoptout
            </a>
            .
          </li>
          <li>
            <strong>Security cookies:</strong> used for fraud detection and
            protection against unauthorised access.
          </li>
        </ul>
        <p style={body}>
          You can manage your cookie preferences through your browser settings.
          Disabling essential cookies may affect platform functionality.
        </p>
      </Section>

      <Section title="8. Data Security">
        <p style={body}>
          We implement appropriate technical and organisational measures to
          protect personal data against unauthorised access, alteration,
          disclosure, or destruction. Our security measures include:
        </p>
        <ul style={list}>
          <li>Encryption of data in transit (TLS) and at rest.</li>
          <li>
            PCI-DSS compliant payment processing — card data is handled
            exclusively by our payment processor partners and is never stored on
            Bachs servers.
          </li>
          <li>
            Access controls limiting data access to personnel who require it for
            their role.
          </li>
          <li>
            Two-factor authentication (2FA) available for all Merchant accounts.
          </li>
          <li>
            Regular security assessments and incident response procedures.
          </li>
        </ul>
        <p style={body}>
          In the event of a data breach that is likely to affect your rights and
          freedoms, we will notify the NDPC within 72 hours of discovery, and
          will notify affected individuals without undue delay, as required by
          the NDPA 2023.
        </p>
      </Section>

      <Section title="9. International Data Transfers">
        <p style={body}>
          Bachs is headquartered in Nigeria. In the course of providing our
          Services, personal data may be transferred to and processed in other
          countries, including where our payment processor partners, cloud
          infrastructure providers, and service vendors are located.
        </p>
        <p style={body}>
          All international transfers are conducted in accordance with the
          mechanisms permitted by the NDPA 2023 and its General Application and
          Implementation Directive (GAID). We rely on contractual safeguards,
          including standard contractual clauses where applicable, to ensure
          adequate protection of data transferred outside Nigeria.
        </p>
        <p style={body}>
          For EEA and UK residents, transfers outside the EEA/UK are conducted
          in accordance with GDPR requirements, relying on adequacy decisions,
          standard contractual clauses, or other approved transfer mechanisms.
        </p>
      </Section>

      <Section title="10. Your Rights">
        <p style={body}>
          Subject to applicable law, you have the following rights in relation
          to your personal data.
        </p>
        <h3 style={h3}>
          10.1 Rights Under the Nigeria Data Protection Act 2023
        </h3>
        <ul style={list}>
          <li>
            <strong>Right to access:</strong> request a copy of the personal
            data we hold about you.
          </li>
          <li>
            <strong>Right to rectification:</strong> request correction of
            inaccurate or incomplete data.
          </li>
          <li>
            <strong>Right to deletion:</strong> request erasure of your data,
            subject to legal retention obligations.
          </li>
          <li>
            <strong>Right to data portability:</strong> request your data in a
            structured, machine-readable format.
          </li>
          <li>
            <strong>Right to object:</strong> object to certain processing
            activities, including direct marketing.
          </li>
          <li>
            <strong>Right to withdraw consent:</strong> where processing is
            consent-based, withdraw it at any time without affecting the
            lawfulness of prior processing.
          </li>
          <li>
            <strong>Right to lodge a complaint</strong> with the Nigeria Data
            Protection Commission (NDPC) at{" "}
            <a href="https://ndpc.gov.ng" style={link}>
              ndpc.gov.ng
            </a>
            .
          </li>
        </ul>
        <h3 style={h3}>
          10.2 Additional Rights for EEA and UK Residents (GDPR)
        </h3>
        <ul style={list}>
          <li>
            All of the above rights, plus the right to restriction of processing
            and the right to object to processing based on legitimate interests.
          </li>
          <li>
            Right to lodge a complaint with your national supervisory authority.
          </li>
        </ul>
        <h3 style={h3}>10.3 How to Exercise Your Rights</h3>
        <p style={body}>
          Contact us at{" "}
          <a href="mailto:hello@bachs.io" style={link}>
            hello@bachs.io
          </a>
          . We will respond within 30 days. We may need to verify your identity
          before processing your request. If we are unable to fulfil your
          request, we will notify you with our reasoning. You may appeal our
          decision by emailing{" "}
          <a href="mailto:hello@bachs.io" style={link}>
            hello@bachs.io
          </a>
          . If unresolved, you may escalate to the NDPC or your relevant
          supervisory authority.
        </p>
      </Section>

      <Section title="11. Children's Privacy">
        <p style={body}>
          Our Services are directed to businesses and are not intended for
          individuals under the age of 18. We do not knowingly collect personal
          data from minors. If you believe we have inadvertently collected data
          from a minor, please contact us immediately at{" "}
          <a href="mailto:hello@bachs.io" style={link}>
            hello@bachs.io
          </a>{" "}
          and we will take prompt steps to delete it.
        </p>
      </Section>

      <Section title="12. Third-Party Sites and Services">
        <p style={body}>
          Our platform may contain links to third-party websites or
          integrations. This Privacy Policy does not apply to those third
          parties. We encourage you to review the privacy policies of any
          third-party services you access through our platform.
        </p>
      </Section>

      <Section title="13. Changes to This Privacy Policy">
        <p style={body}>
          We may update this Privacy Policy from time to time as our Services
          evolve or as required by law. When we make material changes, we will
          notify you by email or by posting a prominent notice on our website.
          The effective date at the top of this document reflects the date of
          the most recent revision. Your continued use of the Services after any
          changes have been posted constitutes your acceptance of the updated
          policy.
        </p>
      </Section>

      <Section title="14. Contact Us">
        <p style={body}>
          <strong>Bachs Technologies Limited</strong>
          <br />
          Data Protection Officer
          <br />
          180 Freedom Way, Lekki Phase 1, Lagos, Nigeria
          <br />
          Email:{" "}
          <a href="mailto:hello@bachs.io" style={link}>
            hello@bachs.io
          </a>
        </p>
      </Section>

      <p
        style={{
          fontSize: "0.8125rem",
          color: "#aaaaaa",
          marginTop: "4rem",
          borderTop: "1px solid rgba(0,0,0,0.06)",
          paddingTop: "2rem",
        }}
      >
        © 2026 Bachs Technologies Limited. All rights reserved.
      </p>
    </div>
  );
}

/* ─── Buyer Terms content ─────────────────────────────────────────────────── */
function BuyerTermsContent() {
  return (
    <div>
      <div style={{ marginBottom: "3rem" }}>
        <h1
          style={{
            fontFamily: "'Plus Jakarta Sans', 'Inter', sans-serif",
            fontSize: "2rem",
            fontWeight: 600,
            color: "#111111",
            letterSpacing: "-0.02em",
            marginBottom: "0.75rem",
          }}
        >
          Buyer Terms
        </h1>
        <p
          style={{
            fontSize: "0.875rem",
            color: "#888888",
            marginBottom: "1.5rem",
          }}
        >
          Effective Date: April 1, 2026
        </p>
        <p style={body}>
          These Buyer Terms ("Buyer Terms"), together with the Bachs Privacy
          Policy and Acceptable Use Policy, form a binding agreement (the
          "Agreement") between you ("Buyer", "you") and Bachs Technologies
          Limited and its affiliates ("Bachs", "we", "us", "our"). They govern
          your use of Bachs checkout and related reseller services (the
          "Services") when purchasing products and digital content (the
          "Product") offered by merchants ("Sellers") through Bachs
          infrastructure.
        </p>
        <p style={body}>
          Bachs acts as Merchant of Record and authorised reseller for Products
          sold through our platform. You purchase the Product from Bachs, but
          your rights to use the Product are licensed to you by the Seller under
          the Seller's own terms and conditions (the "Seller Agreement"). By
          completing a transaction, you agree to this Agreement and the relevant
          Seller Agreement.
        </p>
        <p style={body}>
          Before you complete a purchase of any subscription Product with
          recurring charges, Bachs will clearly present the subscription price,
          renewal frequency, cancellation process, and the fact that charges
          will recur until you cancel. By completing your transaction, you
          authorise recurring charges to your selected payment method until you
          cancel.
        </p>
      </div>

      <Section title="1. Payment Methods and Authorisation">
        <p style={body}>
          You may only use payment methods supported by Bachs at checkout. By
          providing your payment details, you authorise Bachs and our payment
          processor partners to store your payment credentials and charge your
          payment method for Products, applicable taxes, fees, and other amounts
          displayed at checkout — including recurring charges for subscription
          Products.
        </p>
        <p style={body}>
          We may request additional information to complete transactions, verify
          your identity, prevent fraud, and satisfy legal or compliance
          requirements.
        </p>
        <p style={body}>
          If you save a payment method to your account, you authorise us to
          maintain it and use it for future purchases. Our payment processor
          partners may receive updated payment information from your card issuer
          (such as new card numbers or expiration dates) to prevent service
          interruptions. To remove or update stored payment methods, visit your
          account settings.
        </p>
        <p style={body}>
          When you purchase through Bachs, Bachs Technologies Limited will
          appear on your card or bank statement. For billing or payment
          questions, contact us at{" "}
          <a href="mailto:hello@bachs.io" style={link}>
            hello@bachs.io
          </a>
          . For questions about the Product itself, contact the Seller directly.
        </p>
      </Section>

      <Section title="2. Third-Party Payment Processors">
        <p style={body}>
          We use third-party payment processors to facilitate transactions.
          Subject to applicable law, we are not responsible for processor errors
          or failures. If a processor rejects or reverses a transaction, we may
          suspend or terminate your access to the relevant Product.
        </p>
      </Section>

      <Section title="3. Pricing and Currency">
        <h3 style={h3}>Product Pricing</h3>
        <p style={body}>
          When you purchase a Product, you will see the total price — including
          any applicable Seller-set fees and taxes — before completing your
          purchase. Prices are displayed in the currency specified at checkout
          by the Seller, which may include USD, local currencies, or stablecoins
          (USDT/USDC) where supported.
        </p>
        <p style={body}>
          If your payment method is denominated in a different currency, your
          card issuer or payment processor will handle the conversion and may
          charge currency conversion fees and foreign transaction fees. Bachs
          does not control exchange rates or conversion fees applied by your
          payment method provider.
        </p>
        <h3 style={h3}>Bachs Service Fees</h3>
        <p style={body}>
          We may charge service fees and transaction fees for use of the
          Services. Where applicable, you will have the opportunity to review
          all Bachs fees before completing your purchase. All fees are
          non-refundable unless specifically stated otherwise in these Terms. We
          may update our fees at any time with advance notice, and applicable
          fees will always be displayed prior to your next transaction.
        </p>
        <h3 style={h3}>Promotions</h3>
        <p style={body}>
          We or Sellers may offer promotional discounts or coupon codes, subject
          to specific terms, restrictions, and expiration dates. Unless a
          promotion is offered directly to you, it does not apply to your
          purchases. Promotions cannot be combined unless explicitly stated and
          have no cash value.
        </p>
      </Section>

      <Section title="4. Subscription Products">
        <p style={body}>
          Some Products charge you automatically each billing period
          ("Subscription Products"). Your subscription starts on your first
          purchase date and continues for the period specified at checkout.
        </p>
        <p style={body}>
          Most subscriptions renew automatically unless you cancel or the Seller
          or Bachs terminates them. When you activate a subscription, you
          authorise us to save your payment method and charge it each billing
          period until you cancel.
        </p>
        <p style={body}>
          You must cancel before your renewal date to avoid being charged for
          the next period. Cancellation can be completed through your account
          portal or by contacting us at{" "}
          <a href="mailto:hello@bachs.io" style={link}>
            hello@bachs.io
          </a>
          .
        </p>
      </Section>

      <Section title="5. One-Time Payment Products">
        <p style={body}>
          Some Products are available through a single payment ("One-Time
          Payment Products"). Unless otherwise specified, your access begins
          immediately after payment is confirmed.
        </p>
        <p style={body}>
          All Products have specific access periods disclosed at the time of
          purchase. One-Time Payment Products do not renew automatically, and no
          additional charges will occur unless you make a separate purchase.
        </p>
      </Section>

      <Section title="6. Free Trials">
        <p style={body}>
          Some Products may offer free trial periods. When you start a free
          trial, you must provide a valid payment method. You will not be
          charged during the trial period, but you authorise us to charge your
          payment method when the trial ends unless you cancel before the trial
          period expires.
        </p>
        <p style={body}>
          Free trials that you do not cancel will automatically convert to paid
          subscriptions at the end of the trial period. You must cancel before
          the trial ends to avoid being charged. Cancellation can be completed
          through your account portal or by contacting us at{" "}
          <a href="mailto:hello@bachs.io" style={link}>
            hello@bachs.io
          </a>
          .
        </p>
        <p style={body}>
          Some free trials may be limited to one per person, household, or
          payment method. We reserve the right to verify eligibility and deny
          free trials where we reasonably suspect abuse or fraud.
        </p>
      </Section>

      <Section title="7. Failed Payments">
        <p style={body}>
          If a payment fails, we may, subject to applicable law and card network
          rules:
        </p>
        <ul style={list}>
          <li>Retry using the same payment method;</li>
          <li>Charge a backup payment method if you have added one;</li>
          <li>Request an alternative payment method;</li>
          <li>
            Suspend or terminate your Product access if payment cannot be
            completed.
          </li>
        </ul>
        <p style={body}>
          For subscriptions, we may continue attempting payment until you
          cancel. You remain responsible for any unpaid amounts. Continued
          payment failures may result in subscription cancellation or account
          suspension.
        </p>
      </Section>

      <Section title="8. Refund Policy">
        <p style={body}>
          Refund requests are evaluated in accordance with applicable law, the
          Seller's refund policy, and card network rules. This Agreement does
          not limit any non-waivable consumer rights or remedies available to
          you under applicable law.
        </p>
        <p style={body}>
          Bachs may deny a refund where we reasonably determine fraud, abuse,
          misuse, or non-compliance with the applicable refund policy. We will
          not restrict your right to pursue a chargeback as permitted by your
          card issuer. If we contest a chargeback, we will do so in accordance
          with card network rules.
        </p>
        <p style={body}>
          To request a refund, contact us at{" "}
          <a href="mailto:hello@bachs.io" style={link}>
            hello@bachs.io
          </a>
          . Please contact Bachs before initiating a chargeback with your card
          issuer — most issues can be resolved faster through direct contact.
        </p>
      </Section>

      <Section title="9. Chargebacks">
        <p style={body}>
          Chargebacks allow your card issuer to reclaim money from a retailer's
          bank. You may have chargeback rights if:
        </p>
        <ul style={list}>
          <li>You did not receive the Product you paid for;</li>
          <li>
            You were charged the wrong amount or charged twice by mistake; or
          </li>
          <li>The payment was made fraudulently.</li>
        </ul>
        <p style={body}>
          If you initiate a chargeback for a validly authorised and delivered
          transaction, Bachs may submit evidence to your card issuer to contest
          the chargeback in accordance with card network rules. You agree to
          cooperate in good faith to resolve transaction disputes and provide
          accurate information upon request.
        </p>
      </Section>

      <Section title="10. Changes to Products and Pricing">
        <h3 style={h3}>Subscriptions</h3>
        <p style={body}>
          Sellers may change subscription fees for future periods with advance
          notice. If you do not agree to a price increase, cancel before the
          increase takes effect. Price changes apply starting with your next
          billing period.
        </p>
        <h3 style={h3}>Product Modifications</h3>
        <p style={body}>
          Sellers may modify, update, or discontinue Products at any time. If a
          Seller discontinues a subscription you have purchased, it continues
          through your current billing period but will not renew. For One-Time
          Payment Products, access continues through your specified duration.
        </p>
        <p style={body}>
          Bachs is not responsible for Seller changes or discontinuations. If a
          Seller significantly reduces a Product's value or functionality,
          contact us at{" "}
          <a href="mailto:hello@bachs.io" style={link}>
            hello@bachs.io
          </a>
          .
        </p>
      </Section>

      <Section title="11. Digital Content Licences">
        <p style={body}>
          When you purchase access to a Product on Bachs, you are not purchasing
          ownership of that content. You are purchasing a limited licence to
          access and use it for your own personal purposes.
        </p>
        <p style={body}>
          The Seller who created the Product retains all rights to it. Subject
          to your compliance with these Terms and the applicable Seller
          Agreement, Bachs and the Seller grant you a personal, limited,
          revocable, non-exclusive, and non-transferable licence to access and
          use the Product solely for your own personal use. You may not grant
          access to others or transfer your licence.
        </p>
      </Section>

      <Section title="12. Prohibited Purchases">
        <p style={body}>You agree not to:</p>
        <ul style={list}>
          <li>
            Purchase anything that is illegal for you to purchase in your
            jurisdiction;
          </li>
          <li>
            Purchase Products that require you to meet an age requirement that
            you have not reached;
          </li>
          <li>Purchase Products that violate our Acceptable Use Policy;</li>
          <li>
            Provide false payment information or use payment methods you do not
            own or are not authorised to use;
          </li>
          <li>
            Violate any third-party rights or applicable law in connection with
            your purchase.
          </li>
        </ul>
      </Section>

      <Section title="13. Termination and Suspension">
        <p style={body}>
          We may suspend or terminate your account at any time, including if you
          violate these Buyer Terms, engage in fraud, or for any other reason we
          deem necessary to protect Bachs, Sellers, or other users.
        </p>
        <p style={body}>
          <strong>Account Suspension:</strong> Your access to purchased Products
          will be suspended during the suspension period. If your account is
          restored, access to your purchases will be restored accordingly.
        </p>
        <p style={body}>
          <strong>Account Termination:</strong> If your account is terminated by
          Bachs for violating these Terms, you will lose access to all purchased
          Products and will not be entitled to refunds. If you voluntarily close
          your account, you will lose access to all purchases.
        </p>
        <p style={body}>
          <strong>Seller Restrictions:</strong> If a Seller restricts or removes
          your access to their Product, Bachs is not responsible for that loss
          of access. Contact the Seller directly to resolve the issue.
        </p>
      </Section>

      <Section title="14. Warranties and Limitation of Liability">
        <p
          style={{
            ...body,
            textTransform: "uppercase",
            fontSize: "0.8125rem",
            lineHeight: 1.8,
          }}
        >
          To the maximum extent permitted by applicable law, the Services and
          Products are provided "as is" without warranties of any kind. Bachs
          disclaims all implied warranties, including merchantability, fitness
          for a particular purpose, and non-infringement. This Agreement does
          not limit any non-waivable warranties or consumer remedies under
          applicable law.
        </p>
        <p
          style={{
            ...body,
            textTransform: "uppercase",
            fontSize: "0.8125rem",
            lineHeight: 1.8,
          }}
        >
          Except for (a) your payment obligations; (b) your breach of
          intellectual property rights or confidentiality obligations; or (c)
          your wilful misconduct or fraud — Bachs's total liability arising out
          of or related to this Agreement shall not exceed the amounts paid by
          you to Bachs for the product or service giving rise to the claim in
          the 12 months preceding the event.
        </p>
        <p
          style={{
            ...body,
            textTransform: "uppercase",
            fontSize: "0.8125rem",
            lineHeight: 1.8,
          }}
        >
          Neither party is liable for indirect, incidental, special,
          consequential, or punitive damages, lost profits, lost data, or
          business interruption. The above limitations do not apply to liability
          that cannot be limited under applicable law.
        </p>
      </Section>

      <Section title="15. Intellectual Property">
        <p style={body}>
          The Services, including content, graphics, user interface, and the
          software used to implement the Services, contain proprietary
          information owned by Bachs and/or its licensors, protected by
          applicable intellectual property laws. You agree not to reproduce,
          modify, distribute, or exploit any part of the Services except as
          expressly permitted by this Agreement.
        </p>
        <p style={body}>
          The Seller retains all rights in the Product. Your rights to the
          Product are governed solely by the applicable Seller Agreement.
        </p>
      </Section>

      <Section title="16. Force Majeure">
        <p style={body}>
          Neither party is liable for delay or failure due to events beyond its
          reasonable control, including acts of God, labour disputes, internet
          or utility failures, governmental acts, war, or epidemics, provided
          that the affected party uses commercially reasonable efforts to
          mitigate and resume performance.
        </p>
      </Section>

      <Section title="17. Governing Law and Disputes">
        <p style={body}>
          This Agreement and any dispute arising out of or relating to it are
          governed by the laws of the State of Delaware, without regard to
          conflict of law principles.
        </p>
        <p style={body}>
          Any dispute shall be resolved by binding arbitration administered by
          JAMS (or AAA if JAMS is unavailable) under its applicable rules. The
          arbitration will be conducted by a single arbitrator in Delaware or
          remotely by video conference, at your election. Each party will bear
          its own fees and costs except as otherwise required by applicable
          rules or law.
        </p>
        <p
          style={{
            ...body,
            textTransform: "uppercase",
            fontSize: "0.8125rem",
            lineHeight: 1.8,
          }}
        >
          You and Bachs agree to arbitrate solely on an individual basis, and
          not as a plaintiff or class member in any purported class or
          representative proceeding.
        </p>
        <p style={body}>
          Either party may bring an individual claim in small claims court in
          the State of Delaware. Either party may also seek injunctive relief in
          the state and federal courts of Delaware to prevent infringement or
          misappropriation of intellectual property rights.
        </p>
        <p style={body}>
          You may opt out of this arbitration agreement within 30 days of your
          first transaction by sending written notice to{" "}
          <a href="mailto:hello@bachs.io" style={link}>
            hello@bachs.io
          </a>
          .
        </p>
      </Section>

      <Section title="18. Agreement Changes">
        <p style={body}>
          Bachs reserves the right to modify these Buyer Terms at any time with
          notice. Any material change that adversely affects you will take
          effect only after we provide at least 30 days' advance notice and
          obtain your affirmative consent where required by law. If you do not
          agree to the changes, you may terminate this Agreement before they
          take effect.
        </p>
      </Section>

      <Section title="19. Entire Agreement">
        <p style={body}>
          This Agreement, together with the applicable Seller Agreement, Bachs
          Privacy Policy, and Acceptable Use Policy, constitutes the entire
          agreement between you and Bachs with respect to your purchases through
          the Services. In the event of conflict, this Agreement governs the
          Services and payment; the Seller Agreement governs Product licence
          terms.
        </p>
      </Section>

      <Section title="20. Contact Us">
        <p style={body}>
          <strong>Bachs Technologies Limited</strong>
          <br />
          180 Freedom Way, Lekki Phase 1, Lagos, Nigeria
          <br />
          Email:{" "}
          <a href="mailto:hello@bachs.io" style={link}>
            hello@bachs.io
          </a>
        </p>
      </Section>

      <p
        style={{
          fontSize: "0.8125rem",
          color: "#aaaaaa",
          marginTop: "4rem",
          borderTop: "1px solid rgba(0,0,0,0.06)",
          paddingTop: "2rem",
        }}
      >
        © 2026 Bachs Technologies Limited. All rights reserved.
      </p>
    </div>
  );
}

/* ─── Merchant Terms content ──────────────────────────────────────────────── */
function MerchantTermsContent() {
  return (
    <div>
      <div style={{ marginBottom: "3rem" }}>
        <h1
          style={{
            fontFamily: "'Plus Jakarta Sans', 'Inter', sans-serif",
            fontSize: "2rem",
            fontWeight: 600,
            color: "#111111",
            letterSpacing: "-0.02em",
            marginBottom: "0.75rem",
          }}
        >
          Merchant Terms
        </h1>
        <p
          style={{
            fontSize: "0.875rem",
            color: "#888888",
            marginBottom: "1.5rem",
          }}
        >
          Effective Date: April 1, 2026
        </p>
        <p style={body}>
          These Merchant Terms ("Merchant Terms"), together with the Bachs
          Privacy Policy, Acceptable Use Policy, and any applicable Order Form
          (collectively, the "Agreement"), govern your access to and use of the
          Bachs platform and services ("Services") as a merchant ("Merchant",
          "you", "your"). By signing up for or accessing the Services, you agree
          to be bound by this Agreement.
        </p>
        <p style={body}>
          Bachs Technologies Limited and its affiliates ("Bachs", "we", "us",
          "our") acts as your non-exclusive Merchant of Record ("MoR") and
          authorised reseller of the products and digital content you list
          through our platform ("Products"). Buyers purchase your Products from
          Bachs, and their use of those Products is governed by the applicable
          Buyer Terms and your own product terms.
        </p>
        <p
          style={{
            ...body,
            textTransform: "uppercase",
            fontSize: "0.8125rem",
            lineHeight: 1.8,
          }}
        >
          Arbitration Notice: Except as described below, disputes between you
          and Bachs will be resolved by binding individual arbitration. You
          waive your right to participate in a class action.
        </p>
        <p style={body}>
          We may update this Agreement from time to time. Material changes will
          be communicated with at least 30 days' notice. Continued use of the
          Services after changes take effect constitutes acceptance. If you do
          not agree, you may terminate this Agreement before the changes take
          effect.
        </p>
      </div>

      <Section title="1. The Services">
        <p style={body}>Bachs provides the following to Merchants:</p>
        <ul style={list}>
          <li>
            Onboarding and account setup, including a Merchant Dashboard to
            manage Products, view sales, and access payouts.
          </li>
          <li>
            Acting as your non-exclusive MoR and reseller, processing payments
            from Buyers globally through Bachs Checkout.
          </li>
          <li>
            Supporting multiple payment methods including cards, local payment
            methods, and stablecoins (USDT/USDC) where available.
          </li>
          <li>
            Handling Sales Tax collection, reporting, and remittance where Bachs
            acts as MoR.
          </li>
          <li>
            First-tier transactional support for Buyers, including refund and
            chargeback handling.
          </li>
          <li>
            Subscription billing, usage billing, and recurring payment
            infrastructure.
          </li>
        </ul>
        <p style={body}>
          You may activate additional features and services through your
          Merchant Dashboard as they become available.
        </p>
      </Section>

      <Section title="2. Fees">
        <h3 style={h3}>Transaction Fees</h3>
        <p style={body}>
          For each completed transaction, Bachs will pay you the sale price
          less:
        </p>
        <ul style={list}>
          <li>Any applicable Sales Tax collected and remitted by Bachs;</li>
          <li>
            The Bachs transaction fee, which is a percentage of the transaction
            amount that varies by payment method; and
          </li>
          <li>Any other charges payable under this Agreement.</li>
        </ul>
        <p style={body}>
          The applicable fee percentage for each payment method is set out in
          your Merchant Dashboard and may be updated by Bachs on notice.
        </p>
        <h3 style={h3}>Fee Changes</h3>
        <p style={body}>
          Bachs may update its fee structure at any time with advance notice.
          Updated fees will be displayed in your Merchant Dashboard before they
          take effect. Continued use of the Services after a fee update
          constitutes acceptance.
        </p>
        <h3 style={h3}>No Refund of Fees</h3>
        <p style={body}>
          Bachs retains its transaction fees on all completed transactions,
          including transactions that are subsequently refunded or charged back,
          except where prohibited by applicable law or card network rules.
        </p>
      </Section>

      <Section title="3. Payouts">
        <p style={body}>
          Payouts of your net proceeds are initiated manually on your request
          through your Merchant Dashboard, subject to the following:
        </p>
        <ul style={list}>
          <li>
            Your payout balance must meet or exceed the minimum payout threshold
            set out in your Dashboard.
          </li>
          <li>
            Payouts are processed through our payment processor partners and may
            take up to 10 business days to reach your account following
            initiation.
          </li>
          <li>
            Bachs may delay, suspend, or withhold payouts where we reasonably
            determine there is elevated risk of chargebacks, refunds, fraud,
            regulatory inquiry, or breach of this Agreement. Where practicable,
            we will notify you of any delay or suspension.
          </li>
          <li>
            Bachs may establish a reserve against your payout balance to cover
            actual or anticipated chargebacks, refunds, fines, or other
            liabilities. Reserves will be released once the underlying risk has
            resolved.
          </li>
          <li>
            For accounts suspended or flagged as high-risk, payout delays may
            extend up to 120 days.
          </li>
        </ul>
        <p style={body}>
          You are responsible for providing accurate and current banking or
          payment account details. Bachs is not liable for failed payouts
          resulting from incorrect information provided by you.
        </p>
      </Section>

      <Section title="4. Taxes">
        <p style={body}>
          Bachs, as MoR, is responsible for calculating, collecting, and
          remitting Sales Tax on transactions processed through the platform
          where required by applicable law.
        </p>
        <p style={body}>
          You are solely responsible for any income tax, withholding tax, or
          other taxes you owe in connection with proceeds you receive from
          Bachs. To satisfy our legal obligations, we may collect tax
          identification information from you and report payments to tax
          authorities as required. Failure to provide accurate tax information
          may result in suspension of payouts or termination of your account.
        </p>
        <p style={body}>
          You agree to indemnify and hold Bachs harmless from any taxes,
          penalties, interest, or costs arising from inaccurate product
          information, incorrect tax categorisation, or misrepresentation on
          your part.
        </p>
      </Section>

      <Section title="5. Intellectual Property">
        <h3 style={h3}>Your Rights</h3>
        <p style={body}>
          You retain all ownership of your Products, product content, and
          associated intellectual property. You grant Bachs a non-exclusive,
          royalty-free licence during the term of this Agreement to market,
          resell, and distribute your Products to Buyers; use your product
          descriptions, images, and branding in connection with the Services;
          and identify you as a Merchant on Bachs' platform and marketing
          materials.
        </p>
        <h3 style={h3}>Bachs' Rights</h3>
        <p style={body}>
          Bachs retains all ownership of the Bachs platform, Merchant Dashboard,
          Bachs Checkout, and all associated technology and intellectual
          property. You acquire no rights in any of the foregoing except as
          expressly set out in this Agreement.
        </p>
        <h3 style={h3}>Your Indemnity</h3>
        <p style={body}>
          You agree to indemnify, defend, and hold harmless Bachs and its
          affiliates from any claim that your Products, product content, or
          trademarks infringe any third-party intellectual property right. If
          the sale of your Product is or is likely to be enjoined, you will
          promptly either procure the right for Bachs to continue distributing
          it, modify the Product to be non-infringing, or provide a suitable
          replacement.
        </p>
      </Section>

      <Section title="6. Merchant Obligations">
        <p style={body}>You agree to:</p>
        <ul style={list}>
          <li>
            Provide accurate, complete, and up-to-date information about
            yourself, your business, and your Products, including all
            information required for KYC/KYB verification.
          </li>
          <li>
            Ensure your Products comply with the Bachs Acceptable Use Policy,
            all applicable laws, and card network rules at all times.
          </li>
          <li>
            Maintain your own product support for Buyers — Bachs handles
            transactional support only (refunds, chargebacks, billing queries).
            Technical, delivery, and after-sales support for your Products is
            your sole responsibility.
          </li>
          <li>
            Ensure your product listings, pricing pages, and any external
            websites using Bachs Checkout include clear disclosures required by
            applicable consumer protection law, including pricing, renewal
            terms, cancellation methods, and refund eligibility.
          </li>
          <li>
            Provide a direct and readily available cancellation mechanism for
            subscription products, effective immediately or at the next billing
            cycle as required by law.
          </li>
          <li>
            Respond to Bachs' requests for transactional support assistance
            within 72 hours.
          </li>
          <li>
            Notify Bachs at least 30 days in advance of any material change to
            your business, Products, or the information you have provided to us.
          </li>
          <li>
            Not use the Services to process transactions on websites or
            applications other than those approved in your Merchant Account.
          </li>
        </ul>
      </Section>

      <Section title="7. Refunds and Chargebacks">
        <h3 style={h3}>Refunds</h3>
        <p style={body}>
          As MoR, Bachs handles refund requests from Buyers. Bachs may, in its
          discretion, issue a refund to a Buyer if:
        </p>
        <ul style={list}>
          <li>
            The Buyer requests a refund and Bachs determines it is warranted
            having reviewed the reason and any relevant usage data;
          </li>
          <li>
            Bachs reasonably believes the transaction was made in error or
            fraudulently;
          </li>
          <li>
            Bachs reasonably believes the transaction may become subject to a
            chargeback;
          </li>
          <li>
            You have failed to respond to a support request within 72 hours; or
          </li>
          <li>
            Required by applicable law, regulation, or card network rules.
          </li>
        </ul>
        <p style={body}>
          You will not issue refunds directly to Buyers. All refunds must be
          initiated through your Merchant Dashboard.
        </p>
        <h3 style={h3}>Chargebacks</h3>
        <p style={body}>
          If Bachs receives a chargeback on a transaction, you agree to
          reimburse Bachs for the full chargeback amount, associated card
          network fees and penalties, and a per-incident processing fee as set
          out in your Merchant Dashboard. Bachs may use chargeback prevention
          services and will pass the cost of chargeback alerts to you as set out
          in the Dashboard.
        </p>
        <p style={body}>
          If your chargeback or refund rate exceeds thresholds Bachs deems
          acceptable, Bachs may suspend the affected Products, restrict payment
          methods, or terminate this Agreement immediately.
        </p>
        <h3 style={h3}>Set-Off</h3>
        <p style={body}>
          Bachs may set off any amounts you owe — including refunds,
          chargebacks, fines, fees, or other liabilities — against your payout
          balance at any time without further notice. If your balance is
          insufficient, you agree to pay any shortfall promptly on demand.
        </p>
      </Section>

      <Section title="8. Representations and Warranties">
        <p style={body}>You represent and warrant to Bachs that:</p>
        <ul style={list}>
          <li>
            You have the legal authority to enter into this Agreement and to
            sell the Products listed on the platform.
          </li>
          <li>
            All information you provide — including business, identity, and
            product information — is accurate and up to date.
          </li>
          <li>
            Your Products comply with the Bachs Acceptable Use Policy and all
            applicable laws.
          </li>
          <li>
            You own or are lawfully licensed to sell each Product you list.
          </li>
          <li>
            You are not subject to any sanctions administered by the U.S.
            Department of the Treasury (OFAC), the U.S. Department of State, or
            any equivalent authority, and you are not located in any embargoed
            or sanctioned jurisdiction.
          </li>
          <li>
            You have not been suspended or terminated by a payment processor,
            card network, or financial institution for fraud, deceptive
            practices, or breach of applicable rules in the past ten years.
          </li>
          <li>
            Your use of the Services does not and will not violate any
            third-party agreement or infringe any third-party rights.
          </li>
        </ul>
      </Section>

      <Section title="9. Indemnity">
        <p style={body}>
          You agree to indemnify, defend, and hold harmless Bachs, its
          affiliates, and their respective officers, directors, and employees
          from and against any claims, liabilities, losses, penalties, and
          expenses (including reasonable legal fees) arising from:
        </p>
        <ul style={list}>
          <li>
            Your breach of any representation, warranty, or obligation in this
            Agreement;
          </li>
          <li>
            Your Products, including any claim that a Product is defective,
            illegal, or infringes third-party rights;
          </li>
          <li>Your violation of any applicable law or regulation; or</li>
          <li>
            Any dispute between you and a Buyer relating to your Products or
            product support.
          </li>
        </ul>
      </Section>

      <Section title="10. Disclaimer and Limitation of Liability">
        <p
          style={{
            ...body,
            textTransform: "uppercase",
            fontSize: "0.8125rem",
            lineHeight: 1.8,
          }}
        >
          The Services are provided "as is" without warranties of any kind.
          Bachs disclaims all implied warranties, including merchantability,
          fitness for a particular purpose, and non-infringement. Bachs does not
          warrant that the Services will be uninterrupted, error-free, or free
          from security vulnerabilities.
        </p>
        <p
          style={{
            ...body,
            textTransform: "uppercase",
            fontSize: "0.8125rem",
            lineHeight: 1.8,
          }}
        >
          To the fullest extent permitted by applicable law, Bachs's aggregate
          liability to you arising out of or related to this Agreement shall not
          exceed the total Bachs fees derived from your transactions in the six
          (6) months preceding the event giving rise to liability.
        </p>
        <p
          style={{
            ...body,
            textTransform: "uppercase",
            fontSize: "0.8125rem",
            lineHeight: 1.8,
          }}
        >
          Bachs is not liable for any indirect, incidental, special,
          consequential, or punitive damages, lost profits, lost data, or
          business interruption, even if advised of the possibility of such
          damages.
        </p>
        <p style={body}>
          Nothing in this Agreement limits liability for fraud, wilful
          misconduct, death, or personal injury caused by negligence.
        </p>
      </Section>

      <Section title="11. Confidentiality">
        <p style={body}>
          Each party agrees to protect the other's confidential information
          using at least reasonable care, to use it only as necessary to perform
          under this Agreement, and not to disclose it to third parties except
          to personnel and advisors with a legitimate need to know under
          obligations of confidentiality.
        </p>
        <p style={body}>
          Confidentiality obligations survive for three (3) years following
          termination of this Agreement. Trade secrets are protected for as long
          as they qualify as such under applicable law.
        </p>
      </Section>

      <Section title="12. Dormant Accounts">
        <p style={body}>
          If your Merchant Account has no completed transactions for six (6)
          consecutive months, Bachs reserves the right to deactivate your
          account. Accounts with a negative balance and no sales activity in the
          preceding 15 days may be deactivated immediately. We will provide
          reasonable notice before deactivating an account where practicable.
        </p>
      </Section>

      <Section title="13. Term and Termination">
        <h3 style={h3}>Term</h3>
        <p style={body}>
          This Agreement begins on the date you first access or use the Services
          and continues until terminated by either party.
        </p>
        <h3 style={h3}>Termination by Either Party</h3>
        <p style={body}>
          Either party may terminate this Agreement at any time with 30 days'
          written notice.
        </p>
        <h3 style={h3}>Immediate Termination by Bachs</h3>
        <p style={body}>Bachs may terminate this Agreement immediately if:</p>
        <ul style={list}>
          <li>
            You commit a material breach that is incapable of remedy, or a
            remediable breach that you fail to cure within 30 days of notice;
          </li>
          <li>
            Bachs reasonably suspects fraud, illegal activity, or material
            non-compliance with applicable law or card network rules;
          </li>
          <li>
            Your chargeback or refund rate reaches levels Bachs deems
            unacceptable;
          </li>
          <li>A payment processor or card network requires termination;</li>
          <li>
            Any representation or warranty you have given becomes materially
            false; or
          </li>
          <li>Your Products fall outside the Bachs Acceptable Use Policy.</li>
        </ul>
        <h3 style={h3}>Effect of Termination</h3>
        <p style={body}>
          On termination, Bachs will cease providing the Services and disable
          your access to the platform. Bachs may retain payout proceeds for up
          to nine (9) months following termination, or until all known
          chargebacks, refunds, and liabilities have been resolved, whichever is
          later. Amounts retained will be released net of any deductions. Your
          obligation to pay any amounts owed to Bachs survives termination.
        </p>
      </Section>

      <Section title="14. Governing Law and Disputes">
        <p style={body}>
          This Agreement is governed by the laws of the State of Delaware,
          without regard to its conflicts of law principles.
        </p>
        <p style={body}>
          Any dispute arising out of or relating to this Agreement shall be
          resolved by binding individual arbitration administered by JAMS (or
          AAA if JAMS is unavailable) under its applicable rules. The seat of
          arbitration shall be Delaware. The arbitrator shall have authority to
          grant any remedy available at law or in equity on an individual basis
          only.
        </p>
        <p
          style={{
            ...body,
            textTransform: "uppercase",
            fontSize: "0.8125rem",
            lineHeight: 1.8,
          }}
        >
          Class action waiver: You and Bachs agree that disputes will be
          resolved on an individual basis only. Class arbitrations, class
          actions, and representative actions are not permitted.
        </p>
        <p style={body}>
          Either party may seek injunctive or other equitable relief in the
          state or federal courts of Delaware to protect intellectual property
          or confidential information without waiving the right to arbitration.
        </p>
        <p style={body}>
          You may opt out of this arbitration agreement within 30 days of first
          accepting this Agreement by sending written notice to{" "}
          <a href="mailto:hello@bachs.io" style={link}>
            hello@bachs.io
          </a>
          .
        </p>
      </Section>

      <Section title="15. General">
        <p style={body}>
          <strong>Entire Agreement.</strong> This Agreement, together with the
          Bachs Privacy Policy and Acceptable Use Policy, constitutes the entire
          agreement between you and Bachs with respect to the Services and
          supersedes all prior agreements and understandings.
        </p>
        <p style={body}>
          <strong>Assignment.</strong> Bachs may assign this Agreement to an
          affiliate or in connection with a merger, acquisition, or sale of
          assets without your consent. You may not assign this Agreement without
          Bachs' prior written consent.
        </p>
        <p style={body}>
          <strong>Severability.</strong> If any provision of this Agreement is
          found to be invalid or unenforceable, the remaining provisions will
          continue in full force and effect.
        </p>
        <p style={body}>
          <strong>No Waiver.</strong> Failure by either party to enforce any
          provision of this Agreement does not constitute a waiver of that
          provision or any other.
        </p>
        <p style={body}>
          <strong>Force Majeure.</strong> Neither party is liable for delay or
          failure due to events beyond its reasonable control, including acts of
          God, government actions, internet or utility failures, or epidemics,
          provided the affected party uses reasonable efforts to mitigate and
          resume performance.
        </p>
        <p style={body}>
          <strong>Independent Contractors.</strong> You and Bachs are
          independent contractors. Nothing in this Agreement creates an
          employment, agency, partnership, or joint venture relationship.
        </p>
        <p style={body}>
          <strong>Notices.</strong> All notices under this Agreement must be in
          writing. Notices to Bachs should be sent to{" "}
          <a href="mailto:hello@bachs.io" style={link}>
            hello@bachs.io
          </a>
          . Notices to you will be sent to the email address registered in your
          Merchant Account.
        </p>
        <p style={body}>
          <strong>Survival.</strong> Sections covering fees, set-off, indemnity,
          confidentiality, intellectual property, limitation of liability, and
          dispute resolution survive termination of this Agreement.
        </p>
      </Section>

      <Section title="16. Contact Us">
        <p style={body}>
          <strong>Bachs Technologies Limited</strong>
          <br />
          180 Freedom Way, Lekki Phase 1, Lagos, Nigeria
          <br />
          Email:{" "}
          <a href="mailto:hello@bachs.io" style={link}>
            hello@bachs.io
          </a>
        </p>
      </Section>

      <p
        style={{
          fontSize: "0.8125rem",
          color: "#aaaaaa",
          marginTop: "4rem",
          borderTop: "1px solid rgba(0,0,0,0.06)",
          paddingTop: "2rem",
        }}
      >
        © 2026 Bachs Technologies Limited. All rights reserved.
      </p>
    </div>
  );
}

/* ─── Acceptable Use Policy content ──────────────────────────────────────── */
function AcceptableUseContent() {
  return (
    <div>
      <div style={{ marginBottom: "3rem" }}>
        <h1
          style={{
            fontFamily: "'Plus Jakarta Sans', 'Inter', sans-serif",
            fontSize: "2rem",
            fontWeight: 600,
            color: "#111111",
            letterSpacing: "-0.02em",
            marginBottom: "0.75rem",
          }}
        >
          Acceptable Use Policy
        </h1>
        <p
          style={{
            fontSize: "0.875rem",
            color: "#888888",
            marginBottom: "1.5rem",
          }}
        >
          Effective Date: April 1, 2026
        </p>
        <p style={body}>
          This Acceptable Use Policy ("AUP") applies to all Merchants and Buyers
          using the Bachs platform, checkout infrastructure, APIs, and related
          services (the "Services"). By accessing or using the Services, you
          agree to comply with this AUP. Violation of this AUP may result in
          immediate suspension or termination of your account and access to the
          Services.
        </p>
        <p style={body}>
          This AUP is incorporated by reference into the Bachs Merchant Terms
          and Buyer Terms. Capitalised terms not defined here have the meanings
          given in those agreements.
        </p>
      </div>

      <Section title="1. What Bachs Is For">
        <p style={body}>
          Bachs is built for founders and businesses selling digital products
          and services online — primarily SaaS products, APIs, digital
          marketplaces, and subscription services. Our infrastructure is
          designed for internet businesses, not physical goods or human
          services.
        </p>
        <p style={body}>
          If your primary offering is physical goods, in-person services, or
          anything requiring regulatory licensing not covered below, the
          Services are not designed for you.
        </p>
      </Section>

      <Section title="2. Acceptable Products and Services">
        <p style={body}>You may use Bachs to sell:</p>
        <ul style={list}>
          <li>
            <strong>Software and SaaS</strong> — web applications, APIs,
            developer tools, productivity tools, and B2B or B2C software
            products sold on a subscription or one-time basis.
          </li>
          <li>
            <strong>Digital products</strong> — templates, eBooks, PDFs, code,
            icons, fonts, design assets, photos, audio, video, and similar
            downloadable digital assets.
          </li>
          <li>
            <strong>Premium content and access</strong> — online courses,
            content libraries, community access (e.g. Discord, Slack), and gated
            content requiring a subscription.
          </li>
          <li>
            <strong>Usage-based services</strong> — products billed on
            consumption or usage through Bachs billing infrastructure.
          </li>
        </ul>
        <p style={body}>
          If you are unsure whether your product qualifies, contact us at{" "}
          <a href="mailto:hello@bachs.io" style={link}>
            hello@bachs.io
          </a>{" "}
          before listing.
        </p>
      </Section>

      <Section title="3. Prohibited Products and Services">
        <p style={body}>
          You may not use the Services to sell, offer, or facilitate any of the
          following:
        </p>
        <h3 style={h3}>Illegal and Regulated</h3>
        <ul style={list}>
          <li>
            Any product or service that violates applicable law in any
            jurisdiction where it is sold or used.
          </li>
          <li>
            Products requiring regulatory licensing you do not hold, including
            financial advisory services, legal services, medical services, and
            lending products.
          </li>
          <li>
            Controlled substances, prescription medication, or health
            supplements marketed with unsubstantiated medical claims.
          </li>
          <li>
            Weapons, firearms, ammunition, or instructions for manufacturing or
            modifying weapons or explosives.
          </li>
          <li>Gambling, wagering, or betting platforms.</li>
          <li>Alcohol, tobacco, cannabis, or age-restricted products.</li>
        </ul>
        <h3 style={h3}>Fraudulent and Deceptive</h3>
        <ul style={list}>
          <li>
            Products marketed through false or misleading claims, including fake
            testimonials, inflated reviews, or fabricated social proof.
          </li>
          <li>
            "Get rich quick" schemes, pyramid schemes, or multi-level marketing
            programs where earnings are primarily derived from recruitment
            rather than product sales.
          </li>
          <li>
            Counterfeit goods or products that infringe third-party intellectual
            property rights.
          </li>
          <li>
            Identity documents, credentials, or government documents created,
            altered, or sold without authorisation.
          </li>
          <li>
            Products that impersonate another brand, company, or individual.
          </li>
        </ul>
        <h3 style={h3}>Harmful Content</h3>
        <ul style={list}>
          <li>
            Content that promotes hatred, discrimination, or violence against
            individuals or groups based on race, ethnicity, religion, gender,
            sexual orientation, disability, national origin, or any other
            protected characteristic.
          </li>
          <li>Adult or sexually explicit content.</li>
          <li>
            Content targeting or intended for use by minors in contexts
            inappropriate for their age.
          </li>
        </ul>
        <h3 style={h3}>Financial and Crypto</h3>
        <ul style={list}>
          <li>
            Direct sale, exchange, or investment solicitation involving
            cryptocurrencies, NFTs, or other digital assets. Educational content
            about such assets is permitted provided it does not involve direct
            transactions.
          </li>
          <li>
            Unregistered investment products, asset management services, or
            financial instruments.
          </li>
          <li>
            Credit repair, debt relief, or personal lending services without
            proper licensing.
          </li>
        </ul>
        <h3 style={h3}>Technical Abuse</h3>
        <ul style={list}>
          <li>
            Malware, spyware, viruses, or any software designed to harm,
            surveil, or gain unauthorised access to systems or data.
          </li>
          <li>
            Services that circumvent the paywalls, terms, or access controls of
            other platforms.
          </li>
          <li>
            API cloaking, IP spoofing, or related deceptive technical services.
          </li>
          <li>
            Open-source intelligence (OSINT) platforms that aggregate or expose
            personal data about individuals without their consent.
          </li>
          <li>
            Content generation tools that produce deepfakes, unauthorised face
            swaps, or infringing content.
          </li>
        </ul>
        <h3 style={h3}>Other Prohibited Categories</h3>
        <ul style={list}>
          <li>Physical goods of any kind.</li>
          <li>Human services delivered in person.</li>
          <li>
            Pirated content or unauthorised streaming services (including IPTV).
          </li>
          <li>
            Ticket reselling acquired through bots or in violation of applicable
            law.
          </li>
          <li>
            Services that enable other sellers to sell products to end customers
            outside of the Bachs platform without authorisation.
          </li>
        </ul>
      </Section>

      <Section title="4. Restricted Categories">
        <p style={body}>
          The following categories are permitted on Bachs subject to prior
          review and approval. If your product falls into one of these
          categories, contact us at{" "}
          <a href="mailto:hello@bachs.io" style={link}>
            hello@bachs.io
          </a>{" "}
          before listing:
        </p>
        <ul style={list}>
          <li>
            AI-powered content generation tools (text, image, video, voice) —
            reviewed for IP compliance and content safety.
          </li>
          <li>VPN and privacy tools — reviewed for legitimate use cases.</li>
          <li>
            Marketing and outreach automation tools — reviewed for compliance
            with anti-spam laws.
          </li>
          <li>
            Financial education and trading information content — permitted
            provided no direct investment transactions occur through the
            platform.
          </li>
          <li>
            Health and wellness content — permitted for general wellness;
            prohibited for medical advice or unsubstantiated health claims.
          </li>
        </ul>
        <p style={body}>
          Bachs reserves the right to request additional information, impose
          conditions, or decline to support any product in a restricted category
          at its discretion.
        </p>
      </Section>

      <Section title="5. General Conduct">
        <p style={body}>
          Regardless of the products you sell, you may not use the Services to:
        </p>
        <ul style={list}>
          <li>Violate any applicable law, regulation, or card network rule.</li>
          <li>
            Process transactions on behalf of third parties or businesses not
            registered in your Merchant Account.
          </li>
          <li>
            Use the Services for peer-to-peer money transfers unrelated to
            actual product or service transactions.
          </li>
          <li>
            Interfere with, disrupt, or attempt to gain unauthorised access to
            the Bachs platform, infrastructure, or other users' accounts.
          </li>
          <li>
            Reverse engineer, copy, or create derivative works of any part of
            the Bachs platform or technology.
          </li>
          <li>
            Use the Services in connection with any individual, organisation, or
            country identified on OFAC's Specially Designated Nationals List or
            subject to applicable sanctions.
          </li>
          <li>
            Use the Services for any purpose that creates reputational, legal,
            or financial harm to Bachs or its payment processor partners.
          </li>
        </ul>
      </Section>

      <Section title="6. Enforcement">
        <p style={body}>Bachs reserves the right to:</p>
        <ul style={list}>
          <li>
            Remove any Product or listing that violates this AUP at any time
            without prior notice.
          </li>
          <li>
            Suspend or terminate any Merchant or Buyer account for violation of
            this AUP.
          </li>
          <li>
            Withhold payouts for investigation for up to 120 days where
            violations are suspected.
          </li>
          <li>
            Refund Buyers for transactions involving prohibited products and
            recover those amounts from the Merchant.
          </li>
          <li>
            Report violations to relevant authorities, card networks, or payment
            processors where required.
          </li>
        </ul>
        <p style={body}>
          Bachs may update this AUP at any time. Material changes will be
          communicated with reasonable advance notice. Continued use of the
          Services after an update constitutes acceptance.
        </p>
      </Section>

      <Section title="7. Contact">
        <p style={body}>
          If you have questions about whether your product complies with this
          policy, or to request review of a restricted category, contact us at{" "}
          <a href="mailto:hello@bachs.io" style={link}>
            hello@bachs.io
          </a>
          .
        </p>
        <p style={body}>
          To report a potential violation, email{" "}
          <a href="mailto:hello@bachs.io" style={link}>
            hello@bachs.io
          </a>{" "}
          with details of the product or merchant in question.
        </p>
      </Section>

      <p
        style={{
          fontSize: "0.8125rem",
          color: "#aaaaaa",
          marginTop: "4rem",
          borderTop: "1px solid rgba(0,0,0,0.06)",
          paddingTop: "2rem",
        }}
      >
        © 2026 Bachs Technologies Limited. All rights reserved.
      </p>
    </div>
  );
}

/* ─── Document registry ───────────────────────────────────────────────────── */
const DOCS = [
  {
    id: "privacy",
    label: "Privacy Policy",
    path: "/privacy",
    Component: PrivacyContent,
  },
  {
    id: "buyer-terms",
    label: "Buyer Terms",
    path: "/buyer-terms",
    Component: BuyerTermsContent,
  },
  {
    id: "merchant-terms",
    label: "Merchant Terms",
    path: "/merchant-terms",
    Component: MerchantTermsContent,
  },
  {
    id: "aup",
    label: "Acceptable Use Policy",
    path: "/aup",
    Component: AcceptableUseContent,
  },
];

/* ─── Main LegalPage component ────────────────────────────────────────────── */
export function LegalPage({ initialDoc = "privacy", navigate }) {
  const current = DOCS.find((d) => d.id === initialDoc) || DOCS[0];

  function handleSwitch(doc) {
    if (navigate) navigate(doc.path);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#ffffff",
        fontFamily: "'Plus Jakarta Sans', 'Inter', sans-serif",
      }}
    >
      {/* Top nav bar */}
      <header
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 100,
          background: "rgba(255,255,255,0.95)",
          backdropFilter: "blur(12px)",
          borderBottom: "1px solid rgba(0,0,0,0.06)",
          height: "4rem",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "0 2rem",
        }}
      >
        <a
          href="/"
          style={{
            display: "flex",
            alignItems: "center",
            textDecoration: "none",
          }}
        >
          <img
            src={logoLockup2x}
            srcSet={`${logoLockup2x} 2x, ${logoLockup8x} 8x`}
            alt="Bachs"
            style={{ height: "2rem" }}
          />
        </a>
        <a
          href="/"
          style={{
            fontFamily: "'Plus Jakarta Sans', 'Inter', sans-serif",
            fontSize: "0.875rem",
            color: "#555555",
            textDecoration: "none",
            transition: "color 0.15s",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.color = "#111111")}
          onMouseLeave={(e) => (e.currentTarget.style.color = "#555555")}
        >
          Go to Bachs →
        </a>
      </header>

      {/* Body */}
      <div
        className="legal-layout"
        style={{
          maxWidth: "72rem",
          margin: "0 auto",
          padding: "6rem 2rem 6rem",
          display: "grid",
          gridTemplateColumns: "14rem 1fr",
          gap: "5rem",
        }}
      >
        {/* Left sidebar — lists documents */}
        <aside
          className="legal-sidebar"
          style={{
            position: "sticky",
            top: "6rem",
            alignSelf: "start",
            height: "fit-content",
          }}
        >
          <h1
            style={{
              fontFamily: "'Plus Jakarta Sans', 'Inter', sans-serif",
              fontSize: "2.5rem",
              fontWeight: 600,
              color: "#111111",
              letterSpacing: "-0.02em",
              marginBottom: "2rem",
            }}
          >
            Legal
          </h1>
          <nav
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "0.125rem",
            }}
          >
            {DOCS.map((doc) => {
              const isActive = current.id === doc.id;
              return (
                <button
                  key={doc.id}
                  onClick={() => handleSwitch(doc)}
                  style={{
                    all: "unset",
                    cursor: "pointer",
                    fontFamily: "'Plus Jakarta Sans', 'Inter', sans-serif",
                    fontSize: "0.875rem",
                    fontWeight: isActive ? 600 : 400,
                    color: isActive ? "#111111" : "#888888",
                    padding: "0.375rem 0.75rem",
                    transition: "color 0.15s",
                    borderLeft: isActive
                      ? "2px solid #111111"
                      : "2px solid transparent",
                    display: "block",
                    textAlign: "left",
                  }}
                >
                  {doc.label}
                </button>
              );
            })}
          </nav>
        </aside>

        {/* Right panel — shows selected document */}
        <main style={{ minWidth: 0 }}>
          <current.Component />
        </main>
      </div>

      <style>{`
        @media (max-width: 700px) {
          .legal-layout { grid-template-columns: 1fr !important; gap: 2rem !important; padding-top: 5rem !important; }
          .legal-sidebar { position: static !important; }
        }
      `}</style>
    </div>
  );
}
