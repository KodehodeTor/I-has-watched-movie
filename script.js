//Film- eller serieliste: Et system for å logge hvilke filmer og serier som er sett, samt gi vurderinger.

//Imports:
import { cardCreate } from "./CreateCard.js";
import { saveMovies, checkStorage } from "./localstorageLogic.js";
import { filterMovie, recommendChanger } from "./values.js";
import { createObject } from "./objectCreator.js";

//Variables
const cardCont = document.querySelector("#cardCont");
export const recommended = document.querySelector("#recommended");
const movieInput = document.querySelector("#movie");
const btnMovie = document.querySelector("#movieButton");
const ratedBox = document.querySelector("#watchedInput");
const filter = document.querySelector("#filter");

//Start check
document.addEventListener("DOMContentLoaded", () => {
  checkStorage();
  //Update movie stats
  movieStats();
});

//Recommended function
recommended.addEventListener("click", () => {
  recommendChanger();
});

//Watched logic
export let isWatched = false;
ratedBox.addEventListener("click", () => {
  isWatched = !isWatched;
});

// Control array
export let movieArray = [];

//Click button to add new movie
btnMovie.addEventListener("click", () => {
  let input = movieInput.value;

  createObject(input);

  // Remove existing cards
  cardCont.innerHTML = "";

  // Draw all cards again
  filterMovie();

  //Updates movieStats
  movieStats();
});
// Filtering
filter.addEventListener("change", () => {
  cardCont.innerHTML = "";
  filterMovie();
});

function sortMovie(sort) {
  //Grabs all cards in the DOM
  const cards = Array.from(cardCont.querySelectorAll(".movieCont"));

  cards.sort((a, b) => {
    if (sort === "az") {
      return a.dataset.title
        .toLowerCase()
        .localeCompare(b.dataset.title.toLowerCase());
    }
    if (sort === "za") {
      return b.dataset.title
        .toLowerCase()
        .localeCompare(a.dataset.title.toLowerCase());
    }
    if (sort === "recommended") {
      // is (true) go to top
      return b.dataset.recommended - a.dataset.recommended;
    }
    if (sort === "watched") {
      return b.dataset.watched - a.dataset.watched;
    }

    return 0;
  });

  cards.forEach((card) => cardCont.appendChild(card));
}

//Attaching buttons to click listeners

document
  .querySelector("#a_z_btn")
  .addEventListener("click", () => sortMovie("az"));
document
  .querySelector("#z_a_btn")
  .addEventListener("click", () => sortMovie("za"));
document
  .querySelector("#recommended_btn")
  .addEventListener("click", () => sortMovie("recommended"));
document
  .querySelector("#watched_btn")
  .addEventListener("click", () => sortMovie("watched"));

//Movie stats -> reduce()
function movieStats() {
  const stats = movieArray.reduce(
    (store, movie) => {
      // Increment total count
      store.total++;
      // Increment watched if true
      if (movie.watched) {
        store.watchedCount++;
      }
      // Increment recommended if true
      if (movie.recommended) {
        store.recCount++;
      }
      return store;
    },
    { total: 0, watchedCount: 0, recCount: 0 },
  );
  document.querySelector("#stat_display").textContent =
    `Watched ${stats.watchedCount}/${stats.total} movies!`;
}
