import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import _acceptImg from '../../assets/acceptwebp.webp';
import _developImg from '../../assets/develop.webp';
import _settleImg from '../../assets/settle.webp';
const acceptImg = _acceptImg.src ?? _acceptImg;
const developImg = _developImg.src ?? _developImg;
const settleImg = _settleImg.src ?? _settleImg;

const TABS = [
  {
    id: 'build',
    label: 'Build',
    description: 'Built developer-first. Clear documentation, full API control, and one integration for every payment method.',
    image: developImg,
  },
  {
    id: 'accept',
    label: 'Accept',
    description: 'Accept payments from customers anywhere in the world: cards, mobile money, and stablecoins.',
    image: acceptImg,
  },
  {
    id: 'settle',
    label: 'Settle',
    description: 'Settle in your local currency. NGN, GHS, KES, USD. You choose where your money lands.',
    image: settleImg,
  },
];

export function TabSection() {
  const [active, setActive] = useState('build');

  useEffect(() => {
    // Preload all tab images
    TABS.forEach(tab => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.as = 'image';
      link.href = tab.image;
      document.head.appendChild(link);
    });
  }, []);

  const activeTab = TABS.find(t => t.id === active);

  return (
    <section className="tab-section">
      <div className="tab-section-inner">

        <div className="tab-section-header">
          <h2 className="tab-section-heading">Integrate global payments into your product in minutes.</h2>
          <div className="tab-switcher">
            {TABS.map(tab => (
              <button
                key={tab.id}
                onClick={() => setActive(tab.id)}
                className={`tab-btn ${active === tab.id ? 'tab-btn-active' : ''}`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <p className="tab-description">{activeTab.description}</p>
        </div>

        <div className="tab-image-wrap">
          <AnimatePresence mode="wait">
            <motion.img
              key={active}
              src={activeTab.image}
              alt={activeTab.label}
              className="tab-image"
              fetchpriority="high"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2, ease: 'easeInOut' }}
            />
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
