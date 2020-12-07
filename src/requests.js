const apiKey = "b0eda2a2066bc2e5bb922102e2025b91"

const request = {
    fetchTrending: `/trending/all/week?api_key=${apiKey}&language=`,
    fetchNetFlixOriginals: `discover/tv?api_key=${apiKey}&with_networks=213`,
    fetchTopRated: `/movie/top_rated?api?api_key=${apiKey}&language=en-US`,
    fetchActionMovies: `/movie/top_rated?api?api_key=${apiKey}&with_genres=28`,
    fetchComedyMovies: `/movie/top_rated?api?api_key=${apiKey}&with_genres=35`,
    fetchHorrorMovies: `/movie/top_rated?api?api_key=${apiKey}&with_genres=27`,
    fetchRomanceMovies: `/movie/top_rated?api?api_key=${apiKey}&with_genres=10749`,
    fetchDocumentaries: `/movie/top_rated?api?api_key=${apiKey}&with_genres=99`
}


export default request