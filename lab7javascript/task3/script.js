import  DataHandler from './dataHandler.js'

const handler = new DataHandler();
const data=handler.fetchData('https://jsonplaceholder.typicode.com/posts/1')
console.log(data)