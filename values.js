export function recommendChanger() {
  if (!isRecommendedClicked) {
    recommended.src = "./bilder/recommended.svg";
  } else {
    recommended.src = ".bilder/not_recommended.svg";
  }
  isRecommendedClicked = !isRecommendedClicked;
}
