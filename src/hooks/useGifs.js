import { useState, useEffect, useMemo } from "react"
import { getGifs } from "../services/getGifs"

export function useGifs({ keyword }) {
  const [allgifs, setGifs] = useState([])
  const [favs, setFavs] = useState(
    () => JSON.parse(localStorage.getItem("favs")) || []
  )
  const [offset, setOffset] = useState(0)

  useEffect(() => {
    if (keyword === "favoritos") return

    getGifs({ keyword, offset }).then((gifs) => {
      if (offset === 0) {
        setGifs(gifs)
      } else {
        setGifs((prev) => prev.concat(gifs))
      }
    })
  }, [keyword, offset])

  useEffect(() => {
    localStorage.setItem("favs", JSON.stringify(favs))
  }, [favs])

  const addFav = (id) => {
    const isFav = favs.some((fav) => fav.id === id)
    if (isFav) {
      setFavs((prev) => prev.filter((fav) => fav.id !== id))
      return
    } else {
      setFavs((prev) => {
        const newGif = allgifs.find((gif) => gif.id === id)
        return [...prev, newGif]
      })
    }
  }

  const gifs = useMemo(() => {
    return keyword === "favoritos" ? favs : allgifs
  }, [allgifs, favs, keyword])

  return { gifs, setGifs, favs, addFav, setOffset, allgifs }
}
