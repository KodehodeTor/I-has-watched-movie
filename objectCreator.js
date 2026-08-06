export function createObject(movieTxt) {
  let obj = {
    movie: movieTxt,
    watched: isWatched,
    recommended: isRecommendedClicked,
  };
  saveMovies(obj);
}
