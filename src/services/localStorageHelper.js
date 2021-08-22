

function isInLocalStorage(key) {
    return localStorage.getItem(key) !== null;
}

export function addToFavArray(movieId) {
    let currentFav = [];
    if (isInLocalStorage('favourites')) {
        currentFav = JSON.parse(localStorage.getItem('favourites'));
    }

    currentFav.push(movieId);

    localStorage.setItem('favourites', JSON.stringify(currentFav));
    // localStorage.setItem('yesArray', JSON.stringify(yesArray));
    // yesArray = JSON.parse(localStorage.getItem('yesArray'));
    // yesArray.push('yes');
    // localStorage.setItem('yesArray', JSON.stringify(yesArray));
    // JSON.parse(localStorage.getItem('yesArray'));
}

export function removeFromFavAray(movieId) {
    let currentFav = [];
    if (isInLocalStorage("favourites")) {
        currentFav = JSON.parse(localStorage.getItem('favourites'));
    }
    else {
        return;
    }

    // delete currentFav[movieId];
    var index = currentFav.indexOf(movieId);
    if (index !== -1) {
        currentFav.splice(index, 1);
    }
    localStorage.setItem('favourites', JSON.stringify(currentFav));
}

export function clearLocalStorage() {
    localStorage.clear();
}
