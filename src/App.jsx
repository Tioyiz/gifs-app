import { useState } from "react"
import { Sidebar } from "./components/sidebar.jsx"
import { ListofGifs } from "./components/listGifs"
import { useGifs } from "./hooks/useGifs.js"
import { MenuIcon, CloseIcon } from "./components/icons.jsx"
import "./style.css"

export function App() {
  const [search, setSearch] = useState("")
  const [keyword, setkeyword] = useState("panda")

  const { gifs, allgifs, favs, addFav, setOffset } = useGifs({
    keyword
  })

  const [showMenu, setShowMenu] = useState(false)

  const HandleSearch = (e) => {
    e.preventDefault()
    setkeyword(search)
    setOffset(0)
  }

  const HandleChange = (e) => {
    setSearch(e.target.value)
  }

  const LoadmoreGIfs = () => {
    setOffset((prev) => prev + 10)
  }

  const ShowMenu = () => {
    setShowMenu(!showMenu)
  }

  const Searchbycategory = (cat) => {
    setSearch(cat)
    setkeyword(cat)
    setOffset(0)
    setShowMenu(false)
  }

  return (
    <>
      <header>
        <button
          id="sidebar"
          onClick={ShowMenu}
          className={showMenu ? "active" : ""}
        >
          {showMenu ? <CloseIcon /> : <MenuIcon />}
        </button>
        <h1>GIFS</h1>
        <span></span>
      </header>

      <Sidebar
        handle={Searchbycategory}
        keyword={keyword}
        showMenu={showMenu}
      />

      <form onSubmit={HandleSearch}>
        <input
          onChange={HandleChange}
          type="text"
          value={search}
          placeholder="buscar gif"
        />
      </form>
      {keyword !== "favoritos" && <h2>Search "{keyword}"</h2>}
      <main>
        <ListofGifs gifs={gifs} favs={favs} addFav={addFav} />
      </main>
      {allgifs.length > 0 && keyword !== "favoritos" && (
        <button className="btn-more" onClick={LoadmoreGIfs}>
          Cargas mas..
        </button>
      )}
    </>
  )
}
export default App
