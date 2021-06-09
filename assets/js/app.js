const api_key = "393b085f73f4421d17ec5a4cde5cd260";
const image_url = "https://image.tmdb.org/t/p/w500";
// const url = "https://api.themoviedb.org/3/search/movie?api_key=";

const buttonElement = document.querySelector("#search");
const inputElement = document.querySelector(".form-control");
const searchResult = document.querySelector(".search-results");
const searchPage = document.querySelector(".container");
const detailPage = document.querySelector("#details-page");
const result = document.querySelector('#results');
const cardName = document.querySelector('#card-name');
const cardImage = document.querySelector('#card-img');
const cardTitle = document.querySelector('#card-title');
const cardRating = document.querySelector('#card-rating');
const cardLanguage = document.querySelector('#card-language');
const cardDate = document.querySelector('#card-date');
const cardDescription = document.querySelector('#card-description');
const closeBtn = document.querySelector('#close');
const movieBox = document.querySelector('.movie-box');
const movieContainer = document.querySelector('.popular-movie-container');
const upcomingMovie = document.querySelector('.upcoming-movie-container');
const latestMovie = document.querySelector('.latest-movie-trailer');
const homeBtn = document.querySelector('.fa-video');


function createMovieContainer(movies) {
movies.forEach((movie => {
  if(movie.poster_path){    
    const element = document.createElement('div');
    const image = document.createElement('img');
    image.setAttribute('id', 'result-image');
    image.src = image_url + movie.poster_path;
    element.appendChild(image);
    element.onclick = () => showDetail(movie);
    result.appendChild(element);
  }   
  }));
}
function containerMovies(movies) {
  movies.forEach((movie => {
    if(movie.poster_path){
      const element = document.createElement('div');
      const image = document.createElement('img');
      image.setAttribute('id', 'movie-image');
      image.src = image_url + movie.poster_path;
      element.appendChild(image);
      element.onclick = () => showDetail(movie);
      movieContainer.appendChild(element);
    }   
    }));
  }
  function upcomingMovies(movies) {
    movies.forEach((movie => {
      if(movie.poster_path){
        const element = document.createElement('div');
        const image = document.createElement('img');
        image.setAttribute('id', 'movie-image');
        image.src = image_url + movie.poster_path;
        element.appendChild(image);
        element.onclick = () => showDetail(movie);
        upcomingMovie.appendChild(element);
      }   
      }));
    } 
function renderMovies(data){
  const movies = data.results;
  const movieBlock = containerMovies(movies);
  movieBox.appendChild(movieBlock);
}
function upcomingRenderMovies(data){
  const movies = data.results;
  const movieBlock = upcomingMovies(movies);
  movieBox.appendChild(movieBlock);
}
function showDetail(movie) {
  detailPage.style.display = "flex";
  cardImage.src = image_url + movie.poster_path;
  cardTitle.innerHTML = `Title: ${movie.original_title}`;
  cardName.innerHTML = `${movie.original_title}`;
  cardDate.innerHTML = `Release Date: ${movie.release_date}`;
  cardRating.innerHTML = `Rating: ${movie.vote_average}`;
  cardLanguage.innerHTML = `Language: ${movie.original_language}`;
  cardDescription.innerHTML = `Description: ${movie.overview}`;
}

buttonElement.onclick = function () {
  const value = inputElement.value;
  console.log("value: ", value);
  const path =`/search/movie`;
  const url = generateUrl(path) + '&query=' + value;
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      const movies = data.results;
      const movieBlock = createMovieContainer(movies);
      searchResult.appendChild(movieBlock);
      console.log("Data: ", data);
    })
    .catch((error) => {
      console.log("Error: ", error);
    });
  handleElement();
  inputElement.value = '';
}
function handleElement() {
  searchPage.style.display =
    searchPage.style.display !== "none" ? "none" : "block";
  searchResult.style.display =
    searchResult.style.display !== "block" ? "block" : "none";
}
function homePage() {
  
  searchResult.style.display =
  searchResult.style.display !== "none" ? "none" : "block";
  searchPage.style.display =
  searchPage.style.display !== "block" ? "block" : "none";
}
homeBtn.onclick=() => {
  homePage();
  result.innerHTML = '';
}
closeBtn.onclick = () => {
  detailPage.style.display = "none";
}
function handleError(error) {
  console.log('Error: ', error);
}

getPopularMovie()
getUpcomingMovie()