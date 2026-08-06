//Film- eller serieliste: Et system for å logge hvilke filmer og serier som er sett, samt gi vurderinger.

//Variables 
export const notRecommended =document.querySelector(#notRecommended)
const cardCone = document.querySelector(#cardCont);
const movieInput = document.querySelector(#movie);
const btnMovie = document.querySelector(#movieButton);
const ratedBox = document.querySelector(#isWatched)
const filter = document.querySelector(#filter)

//Start check
document.addEventListener("DOMContentLoaded", () => {
    checkStorage();
})

//Watched function
