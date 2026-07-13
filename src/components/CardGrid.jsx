function CardGrid({ items, type }) {
  return (
    <div className={`card-grid ${type}-grid`}>
      {items.map((item, index) => (
        <article className="content-card" key={item.title}>
          <div className="card-heading">
            <span aria-hidden="true">{String(index + 1).padStart(2, '0')}</span>
            <h3>{item.title}</h3>
          </div>
          {type === 'values' ? <p>{item.body}</p> : (
            <>
              <h4>What this looks like</h4><p>{item.looksLike}</p>
              <div className="outcome"><h4>Outcome</h4><p>{item.outcome}</p></div>
            </>
          )}
        </article>
      ))}
    </div>
  )
}

export default CardGrid
