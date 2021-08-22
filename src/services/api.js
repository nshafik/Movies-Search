import { v4 as uuidv4 } from 'uuid';

const api_key = window.env.API_KEY
// console.log(api_key);
export function getData() {
    let arr = {};
    for (let i = 0; i < 20; i++) {
        const id = uuidv4();
        let isFav = false;
        if (localStorage.getItem(id)) {
            isFav = true;
        }
        arr[id] = { id: id, name: `${i}th movie`, isFav: isFav };
        // arr.push({
        //     [id]: {
        //         id: id, name: `${i}th movie`, isFav: isFav
        //     }
        // });

        // arr.push({id: id, name:`${i}th movie`, isFav: isFav});
    }

    return arr;
    // return Promise((res, rej) => {
    //     setTimeout(() => res(arr), 3000)
    // })
}

export function updateMovieFav(movies, movieId, updatedProps) {
    let moviesUpd = { ...movies };
    for (let prop of Object.keys(updatedProps)) {
        moviesUpd[movieId] = { ...moviesUpd[movieId], [prop]: updatedProps[prop] }
    }
    return moviesUpd;
}

