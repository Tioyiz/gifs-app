import { GifCard } from "./gifCard"

export function ListofGifs({ gifs, favs, addFav }) {
  return (
    <section>
      {gifs.map((gif) => (
        <GifCard key={gif.url} gif={gif} favs={favs} addFav={addFav} />
      ))}
    </section>
  )
}
