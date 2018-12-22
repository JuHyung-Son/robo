const urls= [
    'https://swapi.co/api/people/1',
    'https://swapi.co/api/people/2',
    'https://swapi.co/api/people/3',
    'https://swapi.co/api/people/4'
];

// Promise.all(urls.map(url => {
//     return fetch(url).then(people => people.json())
// }))
// .then(array => {
//     console.log('1', array[0])
//     console.log('2', array[1])
// })
//  .catch(err => console.log('err'))
//  .finally(() => console.log("Finally!"))

const loopThroughUrls = url => {
    for (url of urls) {
        console.log(url)
    }
};

loopThroughUrls();

const getData = async function() {
    const arrayOfPromises = urls.map(url => fetch(url));
    for await (let request of arrayOfPromises) {
        const data = await request.json();
        console.log(data)
    }
}

getData()