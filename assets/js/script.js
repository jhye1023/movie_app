const movieBtn = document.querySelector('#nav_movielist');
const tvBtn = document.querySelector('#nav_tvlist');
const movieList = document.querySelector('.movielist');
const tvList = document.querySelector('.tvlist');

function showHideMovieList(){
  movieList.style.display = (movieList.style.display !== 'none') ? 'none' : 'block';
}
function showHideTvList(){
  tvList.style.display = (tvList.style.display !== 'none') ? 'none' : 'block';
}
tvBtn.addEventListener('click', showHideTvList);
movieBtn.addEventListener('click', showHideMovieList);




