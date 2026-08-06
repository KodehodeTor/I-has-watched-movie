//Film- eller serieliste: Et system for å logge hvilke filmer og serier som er sett, samt gi vurderinger.

//Variables 
export const recommended = document.querySelector(#notRecommended)
const cardCone = document.querySelector(#cardCont);
const movieInput = document.querySelector(#movie);
const btnMovie = document.querySelector(#movieButton);
const ratedBox = document.querySelector(#watchedInput)
const filter = document.querySelector(#filter)

//Start check
document.addEventListener("DOMContentLoaded", () => {
    checkStorage();
})

//Recommended function
recommended.addEventListner("click", () => {
    recommendChanger()
})

//Watched logic
export let isWatched = false;
ratedBox.addEventListener("click", () => {
    isWatched = !isWatched
})

// Control array
export let movieArray = [];

//Click button to add new movie
btnMovie.addEventListener("click", () => {
    let input = movieInput.value
    createObject(input)
    filterTask
})