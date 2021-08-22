
export function searchData(search_term, page_number) {

    var requestOptions = {
        method: 'GET',
        redirect: 'follow'
    };

    var my_url = `http://www.omdbapi.com/?s=${search_term}&apikey=68005424&page=${page_number}`

    return fetch(my_url, requestOptions)
        .then(response => {
            console.log(response)
            return response.json();
        }).then(result => {
            console.log(result.totalResults)
            return result.Search.map((value) => {
                return { ...value, id: value.imdbID }
            })
        })
}

export function updateMovieFav(movies, movieId, updatedProps) {
    let moviesUpd = { ...movies };
    for (let prop of Object.keys(updatedProps)) {
        moviesUpd[movieId] = { ...moviesUpd[movieId], [prop]: updatedProps[prop] }
    }
    return moviesUpd;
}

