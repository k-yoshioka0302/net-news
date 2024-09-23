// ① .envからAPI_KEYを取得
const API_KEY = "8f61c9eb90e587059f7a56885c076be7";
const BASE_URL = "/discover/tv?api_key=";

// ② named export
export const requests = {
    fetchTrending: `/trending/all/week?api_key=${API_KEY}&watch_region=JP&language=ja-JP`,
    fetchNetflixOriginals: `${BASE_URL}${API_KEY}&with_networks=213&watch_region=JP&language=ja`,
    fetchTopRated: `${BASE_URL}${API_KEY}&language=ja-JP`,
    fetchActionMovies: `${BASE_URL}${API_KEY}&with_genres=10759&watch_region=JP&language=ja-JP`,
    fetchNewsMovies: `${BASE_URL}${API_KEY}&with_genres=10763&watch_region=JP&language=ja-JP`,
    fetchKidsMovies: `${BASE_URL}${API_KEY}&with_genres=10762&watch_region=JP&language=ja-JP`,
    fetchRomanceMovies: `${BASE_URL}${API_KEY}&with_genres=10749&watch_region=JP&language=ja-JP`,
    fetchDocumentMovies: `${BASE_URL}${API_KEY}&with_genres=99&watch_region=JP&language=ja-JP`,
};
