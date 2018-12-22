// const urls = [
//     'https://jsonplaceholder.typicode.com/users',
//     'https://jsonplaceholder.typicode.com/posts',
async function fetchUsers() {
    const resp = await fetch('https://jsonplaceholder.typicode.com/albums')
    const data = await await resp.json();
    console.log(data);
}

fetchUsers()