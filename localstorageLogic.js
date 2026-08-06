import { movieArray } from "./script.js";
import { cardCreate } from "./CreateCard.js";

//saves movie
export function saveMovies(movie) {
  movieArray.push(movie);

  //Check if localstorage is empty:
  if (localStorage.getItem("movieSaved")) {
    let savedMovie = JSON.parse(localStorage.getItem("movieSaved"));
    const middleArr = [];

    //Mixes two arrays into one
    savedMovie.forEach((e) => {
      middleArr.push(e);
    });
    movieArray.forEach((e) => {
      middleArr.push(e);
    });

    // saves to local storage
    localStorage.setItem("movieSaved", JSON.stringify(movieArray));
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
