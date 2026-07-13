function Alert({ title, children }) {
  return (
    <aside className="info-alert" aria-label={title}>
      <div className="alert-icon" aria-hidden="true">i</div>
      <div><h3>{title}</h3><p>{children}</p></div>
    </aside>
  )
}

export default Alert
