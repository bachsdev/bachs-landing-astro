import { useState, useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import _logoLockup8x from "../../assets/icons/header-lockup-8x.png";
import _bachsLogo from "../../assets/icons/BACHS_Lettermark_Black.svg";
import _bachsIcon from "../../assets/icons/icon-256.png";
const logoLockup8x = _logoLockup8x.src ?? _logoLockup8x;
const bachsLogo = _bachsLogo.src ?? _bachsLogo;
const bachsIcon = _bachsIcon.src ?? _bachsIcon;
import { Add01Icon } from "hugeicons-react";

const NAV_LINKS = [
  { label: "Features", href: "#features", hasPlus: false },
  { label: "Developers", href: "https://docs.bachs.io", hasPlus: false, external: true },
  { label: "Resources", href: "https://docs.bachs.io", hasPlus: false, external: true },
  { label: "Pricing", href: "/pricing" },
];

function ChevronIcon() {
  return (
    <svg
      width="10"
      height="10"
      viewBox="0 0 10 10"
      fill="none"
      style={{ opacity: 0.5, marginTop: 1 }}
    >
      <path
        d="M2 3.5L5 6.5L8 3.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function Navigation({ navigate }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile menu on resize to desktop
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth > 640) setMobileOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <>
      <motion.nav
        id="nav"
        animate={{
          background: scrolled ? "transparent" : "#ffffff",
          borderBottomColor: scrolled ? "rgba(0,0,0,0)" : "rgba(0,0,0,0.08)",
        }}
        transition={{ duration: 0.35, ease: "easeInOut" }}
        style={{
          position: "sticky",
          top: 0,
          zIndex: 1000,
          borderBottom: "1px solid",
          borderBottomColor: "rgba(0,0,0,0.08)",
        }}
      >
        <div
          style={{
            maxWidth: "90%",
            margin: "0 auto",
            padding: "1rem 1rem",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            position: "relative",
          }}
        >
          {/* Logo — fades out on scroll */}
          <motion.a
            href="/"
            animate={{ opacity: scrolled ? 0 : 1, pointerEvents: scrolled ? "none" : "auto" }}
            transition={{ duration: 0.25 }}
            style={{ display: "flex", alignItems: "center", textDecoration: "none", flexShrink: 0 }}
          >
            <img src={bachsLogo} alt="Bachs" style={{ height: "1rem" }} />
          </motion.a>

          {/* Pill — expands to include logo + CTA on scroll */}
          <motion.div
            className="nav-desktop-links"
            animate={{
              x: scrolled ? "-50%" : "-50%",
              left: "50%",
            }}
            style={{
              position: "absolute",
              left: "50%",
              transform: "translateX(-50%)",
              display: "flex",
              alignItems: "center",
              gap: "0",
              border: "1px solid rgba(0,0,0,0.12)",
              borderRadius: "0.625rem",
              background: "#ffffff",
              boxShadow: "0 2px 12px rgba(0,0,0,0.08)",
              overflow: "hidden",
            }}
            transition={{ duration: 0.35, ease: "easeInOut" }}
          >
            {/* Logo slides in on scroll */}
            <AnimatePresence>
              {scrolled && (
                <motion.a
                  href="/"
                  initial={{ width: 0, opacity: 0, paddingLeft: 0, paddingRight: 0 }}
                  animate={{ width: "auto", opacity: 1, paddingLeft: "0.75rem", paddingRight: "0.75rem" }}
                  exit={{ width: 0, opacity: 0, paddingLeft: 0, paddingRight: 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    textDecoration: "none",
                    borderRight: "1px solid rgba(0,0,0,0.1)",
                    overflow: "hidden",
                    whiteSpace: "nowrap",
                  }}
                >
                  <img src={bachsIcon} alt="Bachs" style={{ height: "1.5rem", borderRadius: "0.25rem" }} />
                </motion.a>
              )}
            </AnimatePresence>

            <div style={{ display: "flex", alignItems: "center", padding: "0.5rem 0.25rem" }}>
              {NAV_LINKS.map((link) => (
                <NavLink key={link.label} label={link.label} href={link.href} dropdown={link.dropdown} hasPlus={link.hasPlus} external={link.external} />
              ))}
            </div>

            {/* CTA slides in on scroll */}
            <AnimatePresence>
              {scrolled && (
                <motion.a
                  href="https://app.bachs.io/signup"
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ width: 0, opacity: 0, paddingLeft: 0, paddingRight: 0 }}
                  animate={{ width: "auto", opacity: 1, paddingLeft: "1rem", paddingRight: "1rem" }}
                  exit={{ width: 0, opacity: 0, paddingLeft: 0, paddingRight: 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    height: "2rem",
                    margin: "0.375rem 0.375rem 0.375rem 0",
                    borderRadius: "0.375rem",
                    background: "#111111",
                    color: "#ffffff",
                    fontFamily: "'Geist Sans', sans-serif",
                    fontSize: "0.875rem",
                    fontWeight: 400,
                    textDecoration: "none",
                    whiteSpace: "nowrap",
                    overflow: "hidden",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.background = "#333333")}
                  onMouseLeave={(e) => (e.currentTarget.style.background = "#111111")}
                >
                  Get Started
                </motion.a>
              )}
            </AnimatePresence>
          </motion.div>

          {/* Right CTA — fades out on scroll */}
          <motion.div
            animate={{ opacity: scrolled ? 0 : 1, pointerEvents: scrolled ? "none" : "auto" }}
            transition={{ duration: 0.25 }}
            className="nav-desktop-actions"
            style={{ display: "flex", alignItems: "center", gap: "1rem", flexShrink: 0 }}
          >
            <a
              href="https://app.bachs.io/login"
              style={{ fontFamily: "'Geist Sans', sans-serif", fontSize: "0.875rem", color: "#111111", textDecoration: "none" }}
              onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.6")}
              onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
            >
              Sign in
            </a>
            <a
              href="https://app.bachs.io/signup"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-flex", alignItems: "center", justifyContent: "center",
                height: "2.25rem", padding: "0 1.125rem", borderRadius: "9999px",
                background: "#111111", color: "#ffffff",
                fontFamily: "'Geist Sans', sans-serif", fontSize: "0.875rem", fontWeight: 400,
                textDecoration: "none", transition: "background 0.15s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.background = "#333333")}
              onMouseLeave={(e) => (e.currentTarget.style.background = "#111111")}
            >
              Get Started
            </a>

          </motion.div>

          {/* Hamburger — mobile only, outside nav-desktop-actions so it's never hidden by it */}
          <button
            className="nav-hamburger"
            onClick={() => setMobileOpen((o) => !o)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            style={{ background: "none", border: "none", cursor: "pointer", padding: "0.5rem", display: "none", flexDirection: "column", gap: "5px", flexShrink: 0 }}
          >
            <span style={{ display: "block", width: "22px", height: "1.5px", background: "#111", transition: "transform 0.2s, opacity 0.2s", transform: mobileOpen ? "translateY(6.5px) rotate(45deg)" : "none" }} />
            <span style={{ display: "block", width: "22px", height: "1.5px", background: "#111", transition: "opacity 0.2s", opacity: mobileOpen ? 0 : 1 }} />
            <span style={{ display: "block", width: "22px", height: "1.5px", background: "#111", transition: "transform 0.2s, opacity 0.2s", transform: mobileOpen ? "translateY(-6.5px) rotate(-45deg)" : "none" }} />
          </button>
        </div>
      </motion.nav>

      {/* Mobile menu overlay — portalled to body so it's never clipped by nav stacking context */}
      {mobileOpen &&
        createPortal(
          <div
            style={{
              position: "fixed",
              top: "4rem",
              left: 0,
              right: 0,
              bottom: 0,
              background: "#ffffff",
              zIndex: 999,
              display: "flex",
              flexDirection: "column",
              padding: "1.5rem 1.5rem",
              overflowY: "auto",
            }}
          >
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href || "#"}
                target={link.external ? "_blank" : undefined}
                rel={link.external ? "noopener noreferrer" : undefined}
                onClick={() => setMobileOpen(false)}
                style={{
                  fontFamily: "'Geist Sans', sans-serif",
                  fontSize: "1rem",
                  fontWeight: 400,
                  color: "#111111",
                  textDecoration: "none",
                  padding: "0.875rem 0",
                  borderBottom: "1px solid rgba(0,0,0,0.06)",
                }}
              >
                {link.label}
              </a>
            ))}
            <div
              style={{
                marginTop: "1.5rem",
                display: "flex",
                flexDirection: "column",
                gap: "0.75rem",
              }}
            >
              <a
                href="https://app.bachs.io/login"
                style={{
                  fontFamily: "'Geist Sans', sans-serif",
                  fontSize: "1rem",
                  fontWeight: 400,
                  color: "#111111",
                  textDecoration: "none",
                  padding: "0.875rem 1.25rem",
                  borderRadius: "9999px",
                  textAlign: "center",
                  border: "1px solid rgba(0,0,0,0.12)",
                }}
              >
                Sign in
              </a>
              <a
                href="https://app.bachs.io/signup"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  fontFamily: "'Geist Sans', sans-serif",
                  fontSize: "1rem",
                  fontWeight: 500,
                  color: "#ffffff",
                  background: "#111111",
                  textDecoration: "none",
                  padding: "0.875rem 1.25rem",
                  borderRadius: "9999px",
                  textAlign: "center",
                }}
              >
                Get Started
              </a>
            </div>
          </div>,
          document.body,
        )}
    </>
  );
}

function NavLink({ label, href, dropdown, hasPlus, external }) {
  const [open, setOpen] = useState(false);
  const [hovered, setHovered] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    if (!open) return;
    function handleOutside(e) {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    }
    document.addEventListener("mousedown", handleOutside);
    return () => document.removeEventListener("mousedown", handleOutside);
  }, [open]);

  return (
    <div ref={ref} style={{ position: "relative" }}>
      <a
        href={href || "#"}
        target={external ? "_blank" : undefined}
        rel={external ? "noopener noreferrer" : undefined}
        onClick={(e) => {
          if (dropdown) {
            e.preventDefault();
            setOpen((o) => !o);
          }
        }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        style={{
          fontFamily: "'Geist Sans', sans-serif",
          fontSize: "0.875rem",
          fontWeight: 400,
          color: "#111111",
          textDecoration: "none",
          transition: "color 0.15s",
          cursor: "pointer",
          padding: "0.375rem 0.75rem",
          whiteSpace: "nowrap",
          display: "inline-flex",
          alignItems: "center",
          gap: "0.375rem",
        }}
      >
        {label}
        {hasPlus && <Add01Icon size={14} strokeWidth={2} color="#111111" />}
      </a>

      {dropdown && open && (
        <div
          style={{
            position: "absolute",
            top: "calc(100% + 12px)",
            left: "50%",
            transform: "translateX(-50%)",
            background: "rgba(249,249,248,0.97)",
            backdropFilter: "blur(16px)",
            WebkitBackdropFilter: "blur(16px)",
            border: "1px solid rgba(0,0,0,0.06)",
            borderRadius: "10px",
            boxShadow: "0 8px 24px rgba(0,0,0,0.08)",
            padding: "6px",
            minWidth: "160px",
            zIndex: 200,
          }}
        >
          {dropdown.map((item) => (
            <a
              key={item.label}
              href={item.href}
              {...(item.external
                ? { target: "_blank", rel: "noopener noreferrer" }
                : {})}
              style={{
                display: "block",
                padding: "8px 12px",
                fontFamily: "'Inter', sans-serif",
                fontSize: "0.875rem",
                fontWeight: 400,
                color: "#555555",
                textDecoration: "none",
                borderRadius: "6px",
                transition: "background 0.12s, color 0.12s",
                whiteSpace: "nowrap",
              }}
              onClick={() => setOpen(false)}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "rgba(0,0,0,0.04)";
                e.currentTarget.style.color = "#111111";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "transparent";
                e.currentTarget.style.color = "#555555";
              }}
            >
              {item.label}
            </a>
          ))}
        </div>
      )}
    </div>
  );
}

function HoverLink({ href, style, children }) {
  const [hovered, setHovered] = useState(false);
  return (
    <a
      href={href}
      style={{ ...style, color: hovered ? "#333333" : "#111111" }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {children}
    </a>
  );
}
