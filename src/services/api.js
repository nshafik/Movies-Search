import { v4 as uuidv4 } from 'uuid';

export function getData(){
    let arr = [];
    for (let i = 0;i < 20;i++)
        arr.push({id:uuidv4(), name:`${i}th movie`});
    return arr
    return Promise((res, rej) => {
        setTimeout(() => res(arr), 3000)
    })
}
