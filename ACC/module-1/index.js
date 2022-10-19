/**
 * Promise has 3 stage
 * 1-panding
 * 2-resolve
 * 3-reject
 * 
 * If success we can get data by then method or in reject than in error method,
 * The process of getting output from promise is called promise consumed
 *  */

const myPromise = new Promise((resolve, reject) => {
    const user = "null";
    if (!user) {
        reject('Somthis is wrong')
    }
    setTimeout(() => {
        resolve('All are  good');
    }, 1000)
});

const numArr = [1, 2, 3, 4, 5];
const arrSet = [];

for (let i = 0; i < numArr.length; i++){
    let userId = numArr[i];
    let newPromise = {
        myPromise : userId,
    }
    arrSet.push(myPromise);
}
// console.log(arrSet);
Promise.all(arrSet).then(res => console.log(res));

myPromise
    .then(res => console.log('Async res', res))
    .catch(err => console.log('Async err', err));
        
console.log('Syncronous log');