//Creates Cards
export function cardCreate(txt) {
  // txt = {
  // movie: "",
  // recommended: "",
  // watched: ""
  //}

  const div = document.createElement("div");
  const p = document.createElement("p");
  const text = document.createTextNode(txt.movie);

  div.className = "movieCont";

  const img = document.createElement("img");
  if (txt.movie) {
    img.src = "./bilder/recommended.svg";
  } else {
    img.src = ".bilder/not_recommended.svg";
  }
  img.className = "recommendedImg";

  img.addEventListener("click", (e) => {
    txt.movie = !txt.movie;

    if (txt.movie) {
      img.src = "./bilder/recommended.svg";
    } else {
      img.src = "./bilder/not_recommended.svg";
    }
  });
}
