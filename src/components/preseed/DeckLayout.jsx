import { useState, useEffect, useCallback } from "react";
import { DeckNav } from "./DeckNav";
import { CoverSlide } from "./slides/CoverSlide";
import { ProblemSlide } from "./slides/ProblemSlide";
import { WhyNowSlide } from "./slides/WhyNowSlide";
import { SolutionSlide } from "./slides/SolutionSlide";
import { MarketSlide } from "./slides/MarketSlide";
import { ProductSlide } from "./slides/ProductSlide";
import { TractionSlide } from "./slides/TractionSlide";
import { BusinessModelSlide } from "./slides/BusinessModelSlide";
import { CompetitionSlide } from "./slides/CompetitionSlide";
import { GTMSlide } from "./slides/GTMSlide";
import { TeamSlide } from "./slides/TeamSlide";
import { FinancialsSlide } from "./slides/FinancialsSlide";
import { AskSlide } from "./slides/AskSlide";
import { ClosingSlide } from "./slides/ClosingSlide";

const TOTAL = 14;

const SLIDE_COMPONENTS = [
  CoverSlide,
  ProblemSlide,
  WhyNowSlide,
  SolutionSlide,
  MarketSlide,
  ProductSlide,
  TractionSlide,
  BusinessModelSlide,
  CompetitionSlide,
  GTMSlide,
  TeamSlide,
  FinancialsSlide,
  AskSlide,
  ClosingSlide,
];

export function DeckLayout() {
  // current: logical index for nav display (always the target)
  // active: index that holds the 'active' CSS class (visible slide)
  // exiting: index that holds the 'exit' CSS class (slide animating out)
  const [current, setCurrent] = useState(0);
  const [active, setActive] = useState(0);
  const [exiting, setExiting] = useState(null);
  const [busy, setBusy] = useState(false);

  const goTo = useCallback(
    (i) => {
      if (busy || i === current || i < 0 || i >= TOTAL) return;
      setBusy(true);
      setCurrent(i);
      setExiting(active);
      setActive(null);
      setTimeout(() => {
        setExiting(null);
        setActive(i);
        setTimeout(() => setBusy(false), 450);
      }, 80);
    },
    [busy, current, active],
  );

  // Keyboard navigation
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "ArrowRight" || e.key === "ArrowDown") {
        e.preventDefault();
        goTo(current + 1);
      }
      if (e.key === "ArrowLeft" || e.key === "ArrowUp") {
        e.preventDefault();
        goTo(current - 1);
      }
      if (e.key === "Home") goTo(0);
      if (e.key === "End") goTo(TOTAL - 1);
    };
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, [goTo, current]);

  // Touch / swipe navigation
  useEffect(() => {
    let touchStartX = 0;
    const handleTouchStart = (e) => {
      touchStartX = e.touches[0].clientX;
    };
    const handleTouchEnd = (e) => {
      const dx = e.changedTouches[0].clientX - touchStartX;
      if (Math.abs(dx) > 50) goTo(dx < 0 ? current + 1 : current - 1);
    };
    document.addEventListener("touchstart", handleTouchStart, {
      passive: true,
    });
    document.addEventListener("touchend", handleTouchEnd);
    return () => {
      document.removeEventListener("touchstart", handleTouchStart);
      document.removeEventListener("touchend", handleTouchEnd);
    };
  }, [goTo, current]);

  // Lock body overflow while deck is mounted
  useEffect(() => {
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, []);

  function getState(idx) {
    if (idx === active) return "active";
    if (idx === exiting) return "exit";
    return "inactive";
  }

  return (
    <div className="deck-wrapper">
      <div className="deck">
        {SLIDE_COMPONENTS.map((SlideComp, idx) => (
          <SlideComp key={idx} state={getState(idx)} />
        ))}
      </div>
      <DeckNav current={current} onGoTo={goTo} />
    </div>
  );
}
