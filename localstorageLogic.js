import { movieArray } from "./script.js";
import { cardCreate } from "./CreateCard.js";

//Delete all button
const deleteAllBtn = document.querySelector("#deleteAllBtn");

// Deletes a movie from localStorage
export function deleteMovie(movieName) {
  //Get saved movies from localStorage and convert from JSON to an array
  let localStore = JSON.parse(localStorage.getItem("movieSaved"));
  // Create a new array containging all movies except the one deleted
  let filteredMovies = localStore.filter((e) => e.movie !== movieName);
  // Save new array back to localStorage
  localStorage.setItem("movieSaved", JSON.stringify(filteredMovies));
}

//saves movie
export function saveMovies(movie) {
  movieArray.push(movie);
  localStorage.setItem("movieSaved", JSON.stringify(movieArray));
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

//Watched saver
export function watchSaver(watchedNotWatched, navn, isWhat) {
  //Get saved movies from localStorage
  let localStore = JSON.parse(localStorage.getItem("movieSaved"));
  let middleArr = [];

  //Goes through every movie in localStorage
  localStore.forEach((e) => {
    //Check if we are updating watched
    if (isWhat === "watched") {
      //Find movie that was clicked
      if (e.movie === navn) {
        //Change its watched value
        e.watched = watchedNotWatched;
        //Add the updated movie to the new array
        middleArr.push(e);
      } else {
        middleArr.push(e);
      }
      //Same for recommended as over for movie
    } else if (isWhat === "recommend") {
      if (e.movie === navn) {
        e.recommended = watchedNotWatched;
        middleArr.push(e);
      } else {
        middleArr.push(e);
      }
    }
  });

  //Save the updated movie array back to LocalStorage
  localStorage.setItem("movieSaved", JSON.stringify(middleArr));
}

//Deletes all cards from localStorage, then refreshes site to display deletion.
deleteAllBtn.addEventListener("click", () => {
  localStorage.clear();
  location.reload();
});
