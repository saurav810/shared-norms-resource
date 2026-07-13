function SideNavigation({ items, activeSection }) {
  return (
    <aside className="side-navigation">
      <nav aria-labelledby="page-navigation-title">
        <h2 id="page-navigation-title">On this page</h2>
        <ul>
          {items.map((item) => (
            <li key={item.id}>
              <a href={`#${item.id}`} aria-current={activeSection === item.id ? 'location' : undefined}>{item.label}</a>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  )
}

export default SideNavigation
