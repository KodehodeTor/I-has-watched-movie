import { saveMovies } from "./localstorageLogic.js";
import { isWatched } from "./script.js";
import { isRecommendedClicked } from "./values.js";

//Creates object in set structure, then uses saveMovies from localstorageLogic.
export function createObject(movieTxt) {
  let obj = {
    movie: movieTxt,
    watched: isWatched,
    recommended: isRecommendedClicked,
  };
  saveMovies(obj);
}
