import { saveMovies } from "./localstorageLogic.js";
import { isWatched } from "./script";
import { isRecommendedClicked } from "./values.js";

export function createObject(movieTxt) {
  let obj = {
    movie: movieTxt,
    watched: isWatched,
    recommended: isRecommendedClicked,
  };
  saveMovies(obj);
}
