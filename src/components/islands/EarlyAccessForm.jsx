import { useEffect, useState } from "react";
import { useForm, ValidationError } from "@formspree/react";
import _logoLockup2x from "../../assets/icons/header-lockup-2x.png";
import _logoLockup8x from "../../assets/icons/header-lockup-8x.png";
const logoLockup2x = _logoLockup2x.src ?? _logoLockup2x;
const logoLockup8x = _logoLockup8x.src ?? _logoLockup8x;

export function EarlyAccessPage({ navigate }) {
  const [step, setStep] = useState(1); // 1 = email capture, 2 = youform
  const [state, handleSubmit] = useForm("xzdydoyl");

  // Once formspree submission succeeds, advance to step 2
  useEffect(() => {
    if (state.succeeded) {
      setStep(2);
    }
  }, [state.succeeded]);

  // Load YouForm embed script on step 2
  useEffect(() => {
    if (step !== 2) return;
    const scriptId = "youform-embed-script";
    if (!document.getElementById(scriptId)) {
      const script = document.createElement("script");
      script.id = scriptId;
      script.src = "https://app.youform.com/embed.js";
      script.async = true;
      document.body.appendChild(script);
    } else {
      // Script already loaded, re-init
      if (window.YouForm) window.YouForm.init?.();
    }
  }, [step]);

  if (step === 2) {
    return (
      <>
        <style>{`
        @media (max-width: 640px) {
          .early-access-sidebar { display: none !important; }
          .youform-container { padding: 1rem 0.5rem !important; }
        }
      `}</style>
        <main
          style={{ minHeight: "100vh", background: "#fbfcfd", display: "flex" }}
        >
          {/* Left sidebar — hidden on mobile */}
          <div
            className="early-access-sidebar"
            style={{
              width: "18rem",
              flexShrink: 0,
              padding: "3rem 2rem",
              borderRight: "1px solid rgba(0,0,0,0.07)",
              display: "flex",
              flexDirection: "column",
              gap: "1rem",
            }}
          >
            <a href="/" style={{ display: "inline-block" }}>
              <img
                src={logoLockup2x}
                srcSet={`${logoLockup2x} 2x, ${logoLockup8x} 8x`}
                alt="Bachs"
                style={{ height: "2rem" }}
              />
            </a>
            <p
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "0.75rem",
                fontWeight: 500,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                color: "#888888",
              }}
            >
              Early access
            </p>
          </div>

          {/* Right: YouForm from top */}
          <div
            className="youform-container"
            style={{ flex: 1, padding: "3rem", overflow: "auto" }}
          >
            <div
              data-youform-embed
              data-form="zdztta61"
              data-base-url="https://app.youform.com"
              data-width="100%"
              data-height="700"
            />
          </div>
        </main>
      </>
    );
  }

  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#fbfcfd",
        padding: "5rem 1.5rem 4rem",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <div style={{ width: "100%", maxWidth: "36rem" }}>
        <a href="/" style={{ display: "inline-block", marginBottom: "3rem" }}>
          <img
            src={logoLockup2x}
            srcSet={`${logoLockup2x} 2x, ${logoLockup8x} 8x`}
            alt="Bachs"
            style={{ height: "2rem" }}
          />
        </a>

        {/* Eyebrow */}
        <p
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: "0.75rem",
            fontWeight: 500,
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            color: "#888888",
            marginBottom: "1.25rem",
          }}
        >
          Early access
        </p>

        {/* Headline */}
        <h1
          style={{
            fontFamily: "'Plus Jakarta Sans', sans-serif",
            fontSize: "clamp(1.75rem, 4vw, 2.5rem)",
            fontWeight: 600,
            color: "#111111",
            letterSpacing: "-0.02em",
            lineHeight: 1.15,
            marginBottom: "1rem",
          }}
        >
          Be first to build on Bachs.
        </h1>

        {/* Sub */}
        <p
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: "1rem",
            color: "#666666",
            lineHeight: 1.7,
            marginBottom: "2.5rem",
          }}
        >
          We're opening early access to a small group of African developers
          building internet businesses. Drop your email and we'll notify you the
          moment we're ready for you.
        </p>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}
        >
          <input
            type="email"
            name="email"
            placeholder="you@company.com"
            required
            style={{
              width: "100%",
              height: "3rem",
              padding: "0 1.125rem",
              borderRadius: "0.625rem",
              border: "1px solid rgba(0,0,0,0.12)",
              fontFamily: "'Inter', sans-serif",
              fontSize: "0.9375rem",
              color: "#111111",
              background: "#ffffff",
              outline: "none",
              transition: "border-color 0.15s",
            }}
            onFocus={(e) => (e.target.style.borderColor = "#111111")}
            onBlur={(e) => (e.target.style.borderColor = "rgba(0,0,0,0.12)")}
          />
          <ValidationError
            field="email"
            prefix="Email"
            errors={state.errors}
            style={{ color: "red", fontSize: "0.8125rem" }}
          />

          <button
            type="submit"
            disabled={state.submitting}
            style={{
              width: "100%",
              height: "3rem",
              borderRadius: "9999px",
              background: state.submitting ? "#555555" : "#111111",
              color: "#ffffff",
              fontFamily: "'Inter', sans-serif",
              fontSize: "0.9375rem",
              fontWeight: 500,
              border: "none",
              cursor: state.submitting ? "not-allowed" : "pointer",
              transition: "background 0.15s",
            }}
            onMouseEnter={(e) => {
              if (!state.submitting) e.target.style.background = "#333333";
            }}
            onMouseLeave={(e) => {
              if (!state.submitting) e.target.style.background = "#111111";
            }}
          >
            {state.submitting ? "Saving…" : "Continue →"}
          </button>

          <p
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "0.75rem",
              color: "#aaaaaa",
              textAlign: "center",
              marginTop: "0.25rem",
            }}
          >
            No spam. Just a ping when we launch.
          </p>
        </form>
      </div>
    </main>
  );
}
