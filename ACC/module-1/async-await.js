/**
 *we can handle aysnc by async model
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

const myPromise1 = new Promise((resolve, reject) => {
    const user = "null";
    if (!user) {
        reject('Somthis is wrong')
    }
    setTimeout(() => {
        resolve('All are  good');
    }, 500)
});

myPromise
    .then(res => console.log('Async res 1s', res))
    .catch(err => console.log('Async err 1s', err));

async function newAsync() {
    const res = await myPromise1;
    console.log('newAsync await.5s', res);
}
newAsync();
console.log('Syncronous log');