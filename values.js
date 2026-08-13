import { recommended } from "./script.js";
import { cardCreate } from "./CreateCard.js";
export let isRecommendedClicked = false;

//Function to set recommended star from empty to filled. (Recommended/Not recommended)
export function recommendChanger() {
  if (!isRecommendedClicked) {
    recommended.src = "./bilder/recommended.svg";
  } else {
    recommended.src = "./bilder/not_recommended.svg";
  }
  isRecommendedClicked = !isRecommendedClicked;
}

const filter = document.querySelector("#filter");

//Function for filtering the movies
export function filterMovie() {
  //Converts saved movie from localStorage to array
  let fullArr = JSON.parse(localStorage.getItem("movieSaved"));
  //If no filter is seleceted, dont filter movies
  if (filter.value === "none") {
    console.log("No movies");
    //Filter for recommended
  } else if (filter.value === "recommended") {
    fullArr = fullArr.filter((movie) => movie.recommended == true);
    //Filter for not recommended
  } else if (filter.value === "notRecommended") {
    fullArr = fullArr.filter((movie) => movie.recommended == false);
  } else if (filter.value === "watched") {
    //Filter for watched
    fullArr = fullArr.filter((movie) => movie.watched == true);
  } else if (filter.value === "notWatched") {
    //Filter for not watched
    fullArr = fullArr.filter((movie) => movie.watched == false);
  }

  //Create a movie card for every movie thats filtered
  console.log(fullArr);
  fullArr.forEach((e) => {
    cardCreate(e);
  });
}
