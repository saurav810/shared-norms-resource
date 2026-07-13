import { useState } from 'react'

function Accordion({ items }) {
  const [openItems, setOpenItems] = useState(new Set())

  const toggleItem = (index) => {
    setOpenItems((current) => {
      const next = new Set(current)
      if (next.has(index)) next.delete(index)
      else next.add(index)
      return next
    })
  }

  return (
    <div className="accordion">
      {items.map((item, index) => {
        const isOpen = openItems.has(index)
        const panelId = `norm-panel-${index}`
        const buttonId = `norm-button-${index}`
        return (
          <article className={`accordion-item${isOpen ? ' is-open' : ''}`} key={item.title}>
            <h3>
              <button id={buttonId} type="button" aria-expanded={isOpen} aria-controls={panelId} onClick={() => toggleItem(index)}>
                <span className="accordion-number" aria-hidden="true">{String(index + 1).padStart(2, '0')}</span>
                <span>{item.title}</span>
                <span className="accordion-icon" aria-hidden="true" />
              </button>
            </h3>
            <div id={panelId} className="accordion-panel" role="region" aria-labelledby={buttonId} hidden={!isOpen}>
              <div className="accordion-panel-inner">
                {item.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                {item.list && <ul>{item.list.map((listItem) => <li key={listItem}>{listItem}</li>)}</ul>}
                {item.afterList && <p>{item.afterList}</p>}
              </div>
            </div>
          </article>
        )
      })}
    </div>
  )
}

export default Accordion
