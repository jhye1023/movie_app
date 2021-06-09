function requestMovie(url, template, error) {
  fetch(url)
  .then((res) => res.json())
  .then(template)
  .catch(error);
}
function generateUrl(path) {
  const url = `https://api.themoviedb.org/3${path}?api_key=393b085f73f4421d17ec5a4cde5cd260`;
  return url;
}
function getPopularMovie(){
  const path = `/movie/popular`
  const url = generateUrl(path);
  requestMovie(url, renderMovies, handleError);
}
function getUpcomingMovie(){
  const path = `/movie/upcoming`
  const url = generateUrl(path);
  requestMovie(url, upcomingRenderMovies, handleError);
}

