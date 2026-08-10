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

//Function for filtering the movies
export function filterMovie() {
  let fullArr = JSON.parse(localStorage.getItem("movieSaved"));
  if (filter.value === "none") {
    console.log("Already full");
  } else if (filter.value === "recommended") {
    fullArr = fullArr.filter((movie) => movie.recommended == true);
  } else if (filter.value === "notRecommended") {
    fullArr = fullArr.filter((movie) => movie.recommended == false);
  } else if (filter.value === "watched") {
    fullArr = fullArr.filter((movie) => movie.watched == true);
  } else if (filter.value === "notWatched") {
    fullArr = fullArr.filter((movie) => movie.watched == false);
  }
  console.log(fullArr);
  fullArr.forEach((e) => {
    cardCreate(e);
  });
}
