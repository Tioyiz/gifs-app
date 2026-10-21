export function getGifs({ keyword, offset }) {
  return fetch(
    `https://api.giphy.com/v1/gifs/search?api_key=dIJrma20pSU6ymMwWnDbiaT7NFHeAGVa&q=${keyword}&limit=10&offset=${offset}&rating=G&lang=en`
  )
    .then((res) => res.json())
    .then((res) => {
      const { data } = res
      const gifs = data.map((img) => ({
        url: img.images.fixed_width.url,
        id: img.id
      }))
      return gifs
    })
}
