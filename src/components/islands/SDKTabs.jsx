import { useState } from 'react'
import { SDK_TAB_CONTENT } from '../../data/sdkExamples'

export function SDKTabs() {
  const [activeTab, setActiveTab] = useState('node')
  const tabs = Object.keys(SDK_TAB_CONTENT)
  const activeContent = SDK_TAB_CONTENT[activeTab]

  const getLabelFromKey = (key) => {
    if (key === 'node') return 'Node.js'
    if (key === 'python') return 'Python'
    if (key === 'go') return 'Go'
    if (key === 'rest') return 'REST API'
    return key
  }

  return (
    <section className="sdk-section" style={{ padding: '4.75rem 0', background: 'var(--background-default)' }}>
      <div style={{ maxWidth: '75rem', margin: '0 auto', padding: '0 2rem' }}>
        <div className="reveal" style={{ marginBottom: '3rem', textAlign: 'center' }}>
          <p className="subheading" style={{ marginBottom: '1.1rem' }}>
            Integrate in under a minute
          </p>
          <h2 className="display-3" style={{ marginBottom: '2rem' }}>
            {activeContent.title}
          </h2>
          <p className="body-lg" style={{ maxWidth: '36rem', margin: '0 auto' }}>
            {activeContent.description}
          </p>
        </div>

        {/* Tab Bar */}
        <div
          className="reveal sdk-tab-bar"
          style={{
            display: 'flex',
            gap: '1rem',
            marginBottom: '2rem',
            borderBottom: '1px solid var(--border-frosted)',
            paddingBottom: '0',
          }}
        >
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              style={{
                background: activeTab === tab ? '#111111' : 'transparent',
                color: activeTab === tab ? '#ffffff' : '#666666',
                fontWeight: activeTab === tab ? '500' : '400',
                cursor: 'pointer',
                padding: '0.75rem 1rem',
                border: 'none',
                borderRadius: '0.5rem 0.5rem 0 0',
                fontSize: '0.875rem',
                fontFamily: "'Inter', sans-serif",
                transition: 'all 0.15s ease',
              }}
              onMouseEnter={(e) => {
                if (activeTab !== tab) {
                  e.target.style.color = '#111111'
                }
              }}
              onMouseLeave={(e) => {
                if (activeTab !== tab) {
                  e.target.style.color = '#666666'
                }
              }}
            >
              {getLabelFromKey(tab)}
            </button>
          ))}
        </div>

        {/* Content Grid */}
        <div
          className="reveal sdk-content-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '2rem',
          }}
        >
          {/* Left: Checklist */}
          <div>
            <h3 className="display-3" style={{ marginBottom: '1.5rem' }}>
              {activeContent.title}
            </h3>
            <p className="body-lg" style={{ marginBottom: '1.5rem', color: 'var(--text-subdued)' }}>
              {activeContent.description}
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginBottom: '2rem' }}>
              {activeContent.checklist.map((item) => (
                <div key={item} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <svg width="20" height="20" viewBox="0 0 16 16" fill="none" style={{ flexShrink: 0, color: 'var(--green-magic)' }}>
                    <circle cx="8" cy="8" r="6" stroke="currentColor" strokeWidth="1.35" />
                    <path d="M5 8l1.5 1.5 3-3" stroke="currentColor" strokeWidth="1.35" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <span className="body-sm">{item}</span>
                </div>
              ))}
            </div>
            <a href="https://docs.bachs.io" target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
              Read the Docs
            </a>
          </div>

          {/* Right: Code Editor + Terminal */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {/* Code Editor */}
            <div className="code-card">
              <div className="code-bar">
                <div className="code-dots">
                  <div className="code-dot" />
                  <div className="code-dot" />
                  <div className="code-dot" />
                </div>
                <span className="code-filename">{activeContent.fileLabel}</span>
              </div>
              <div className="code-body">
                <pre>{activeContent.code}</pre>
              </div>
            </div>

            {/* Terminal */}
            <div
              style={{
                background: '#1a1a1a',
                borderRadius: 'var(--radius-2xl)',
                padding: '1.25rem',
                border: '1px solid rgba(255,255,255,0.1)',
              }}
            >
              <pre
                style={{
                  fontFamily: 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace',
                  color: '#888888',
                  margin: 0,
                  fontSize: '0.8125rem',
                  lineHeight: '1.7',
                  whiteSpace: 'pre-wrap',
                  wordWrap: 'break-word',
                }}
              >
                {activeContent.terminal.split('\n').map((line, i) => {
                  if (line.startsWith('✓')) {
                    return (
                      <span key={i} style={{ color: '#22a06b' }}>
                        {line}
                        {i < activeContent.terminal.split('\n').length - 1 && '\n'}
                      </span>
                    )
                  }
                  if (line.startsWith('~')) {
                    return (
                      <span key={i} style={{ color: '#555555' }}>
                        {line}
                        {i < activeContent.terminal.split('\n').length - 1 && '\n'}
                      </span>
                    )
                  }
                  return (
                    <span key={i}>
                      {line}
                      {i < activeContent.terminal.split('\n').length - 1 && '\n'}
                    </span>
                  )
                })}
              </pre>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}