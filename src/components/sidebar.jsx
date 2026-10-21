export function Sidebar({ handle, keyword, showMenu }) {
  const style = (catg) => (keyword === catg ? "check" : "")

  const categorys = [
    "favoritos",
    "troll",
    "homero",
    "sustos",
    "gatos",
    "caidas",
    "perros",
    "correr",
    "amor "
  ]

  return (
    <aside className={showMenu ? "show" : ""}>
      <h3>Categorys</h3>
      {categorys.map((cat, index) => (
        <span key={index} className={style(cat)} onClick={() => handle(cat)}>
          {cat}
        </span>
      ))}
    </aside>
  )
}
