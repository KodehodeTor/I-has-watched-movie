import { watchSaver, deleteMovie } from "./localstorageLogic.js";

//Creates Cards
export function cardCreate(txt) {
  // txt = {
  // movie: "",
  // recommended: "",
  // watched: ""
  //}

  // HTML elements
  const cardCont = document.querySelector("#cardCont");
  const div = document.createElement("div");
  const p = document.createElement("p");
  const text = document.createTextNode(txt.movie);
  const deleteBtn = document.createElement("button");
  const img = document.createElement("img");
  const statusCont = document.createElement("div");

  // Classname for the card
  div.className = "movieCont";

  //If the movie is recommended, show that, if not show not recommended.
  if (txt.recommended) {
    img.src = "./bilder/recommended.svg";
  } else {
    img.src = "./bilder/not_recommended.svg";
  }

  //Classname for the recommended.
  img.className = "recommendedImg";

  //Click recommended
  img.addEventListener("click", (e) => {
    txt.recommended = !txt.recommended;
    //Recommended; True becomes false and visa versa.
    if (txt.movie) {
      img.src = "./bilder/recommended.svg";
    } else {
      img.src = "./bilder/not_recommended.svg";
    }

    //Save the recommended
    watchedSaver(txt.recommended, txt.movie, "recommend");
  });

  //Create checkbox, make the input a checkbox, checkbox has saved watch status.
  const check = document.createElement("input");
  check.type = "checkbox";
  check.checked = txt.watched;

  // Watched label, create text "Watched?: ", add text to label. Add Checkbox to label.
  const label = document.createElement("label");
  const labelTxt = document.createTextNode("Watched?: ");
  label.append(labelTxt);
  label.append(check);

  // Watched label click, toggles watched value. True becomes false and visa versa.
  label.addEventListener("click", (e) => {
    txt.watched = !txt.watched;
    //Save the watched status.
    watchedSaver(txt.watched, txt.movie, "done");
  });

  //Add the movie title.
  p.append(text);

  //Status container
  statusCont.className = "watched_recommended";
  statusCont.appendChild(label);
  statusCont.appendChild(img);

  //Add everything to moviecard
  div.appendChild(p);
  div.appendChild(statusCont);
  div.appendChild(deleteBtn);

  //Add the finished card to page
  cardCont.appendChild(div);

  // Delete button
  deleteBtn.textContent = "Delete";
  deleteBtn.addEventListener("click", () => {
    div.remove();
    deleteMovie(txt.movie);
    // console.log(deleteBtn);
  });
}
