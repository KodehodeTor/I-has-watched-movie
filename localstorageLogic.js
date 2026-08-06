export function watchSaver(watchedNotWatched, navn, isWhat) {
    let localStore = JSON.parse(localStorage.getItem("movieSaved"))
    let middleArr = []

    localStore.forEach((e) => {
        if (isWhat === "watched") {
            if (e.movie === navn) {
                e.watched = watchedNotWatched
                middleArr.push(e)
            } else {
                middleArr.push(e)
            } else if (isWhat === "recommend") {
                if (e.movie === navn) {
                    e.recommended = watchedNotWatched
                    middleArr.push(e)
                } else {
                    middleArr.push(e)
                }
            }
        }
    })
}