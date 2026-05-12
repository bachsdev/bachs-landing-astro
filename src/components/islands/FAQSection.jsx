import { useState } from 'react'
import { FAQS } from '../../data/content'

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <section className="faq-section" id="faqs">
      <div className="faq-grid">
        <div className="reveal">
          <h2 className="display-2">FAQs</h2>
        </div>
        <div className="faq-list reveal reveal-delay-1">
          {FAQS.map((faq, index) => (
            <div key={index} className={`faq-item ${openIndex === index ? 'open' : ''}`}>
              <button
                className="faq-question"
                type="button"
                onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
              >
                {faq.question}
                <span className="faq-chevron">⌄</span>
              </button>
              <div className="faq-answer">{faq.answer}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
