import { movieArray } from "./script.js";
import { cardCreate } from "./CreateCard.js";

//saves movie
export function saveMovies(movie) {
  movieArray.push(movie);

  // Check if localStorage already contains movies
  if (localStorage.getItem("movieSaved")) {
    let savedMovie = JSON.parse(localStorage.getItem("movieSaved"));
    const middleArr = [];

    // Copy old movies
    savedMovie.forEach((e) => {
      middleArr.push(e);
    });

    // Copy new movies
    movieArray.forEach((e) => {
      middleArr.push(e);
    });

    // Save BOTH old and new movies
    localStorage.setItem("movieSaved", JSON.stringify(middleArr));

    // Keep movieArray in sync
    movieArray.length = 0;
    middleArr.forEach((e) => movieArray.push(e));
  } else {
    localStorage.setItem("movieSaved", JSON.stringify(movieArray));
  }
}

export function checkStorage() {
  //Check if localstorage is empty under key movieSaved
  if (localStorage.getItem("movieSaved")) {
    //Turns localstorage into array
    let savedMovie = JSON.parse(localStorage.getItem("movieSaved"));

    // Saves local storage to variable
    savedMovie.forEach((e) => {
      movieArray.push(e);
    });

    //Crates cards
    savedMovie.forEach((e) => {
      cardCreate(e);
    });
  } else {
    console.log("no movies");
  }
}

export function watchSaver(watchedNotWatched, navn, isWhat) {
  let localStore = JSON.parse(localStorage.getItem("movieSaved"));
  let middleArr = [];

  localStore.forEach((e) => {
    if (isWhat === "watched") {
      if (e.movie === navn) {
        e.watched = watchedNotWatched;
        middleArr.push(e);
      } else {
        middleArr.push(e);
      }
    } else if (isWhat === "recommend") {
      if (e.movie === navn) {
        e.recommended = watchedNotWatched;
        middleArr.push(e);
      } else {
        middleArr.push(e);
      }
    }
  });

  localStorage.setItem("movieSaved", JSON.stringify(middleArr));
}
