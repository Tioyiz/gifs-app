import { FavIcon, UnfavIcon } from "./icons"

export function GifCard({ gif, favs, addFav }) {
  const isFaved = favs.some((fav) => fav.id === gif.id)

  const label = isFaved ? <FavIcon /> : <UnfavIcon />

  return (
    <div>
      <i onClick={() => addFav(gif.id)}>{label}</i>
      <img src={gif.url} />
    </div>
  )
}
