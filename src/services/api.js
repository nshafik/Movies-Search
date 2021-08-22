import { v4 as uuidv4 } from 'uuid';

const api_key = window.env.API_KEY
console.log(api_key);
export function getData(){
    let arr = [];
    for (let i = 0;i < 20;i++)
        arr.push({id:uuidv4(), name:`${i}th movie`});
    return arr
    return Promise((res, rej) => {
        setTimeout(() => res(arr), 3000)
    })
}
