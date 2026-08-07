import { watchSaver } from "./localstorageLogic.js";

//Creates Cards
export function cardCreate(txt) {
  // txt = {
  // movie: "",
  // recommended: "",
  // watched: ""
  //}

  // Variables
  const div = document.createElement("div");
  const p = document.createElement("p");
  const text = document.createTextNode(txt.movie);
  const deleteBtn = document.createElement("button");
  const img = document.createElement("img");

  div.className = "movieCont";

  if (txt.recommended) {
    img.src = "./bilder/recommended.svg";
  } else {
    img.src = "./bilder/not_recommended.svg";
  }
  img.className = "recommendedImg";

  img.addEventListener("click", (e) => {
    txt.recommended = !txt.recommended;

    if (txt.movie) {
      img.src = "./bilder/recommended.svg";
    } else {
      img.src = "./bilder/not_recommended.svg";
    }
    watchedSaver(txt.recommended, txt.movie, "recommend");
  });

  // Delete button
  deleteBtn.textContent = "Delete";
  deleteBtn.addEventListener("click", () => {
    deleteMovie(txt.movie);
  });

  div.appendChild(deleteBtn);

  const check = document.createElement("input");
  check.type = "checkbox";

  check.checked = txt.watched;

  const label = document.createElement("label");
  const labelTxt = document.createTextNode("Watched?: ");
  label.append(labelTxt);
  label.append(check);

  label.addEventListener("click", (e) => {
    txt.watched = !txt.watched;
    watchedSaver(txt.watched, txt.movie, "done");
  });

  p.append(text);
  div.appendChild(p);
  div.appendChild(img);
  div.appendChild(label);
  cardCont.appendChild(div);
}
