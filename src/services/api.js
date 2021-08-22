import { v4 as uuidv4 } from 'uuid';

const api_key = window.env.API_KEY
console.log(api_key);
export function searchData(search_term,page_number){

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
                    return {...value, id: value.imdbID}
                })
            })
}

export default searchData