export default class DataHandler{
    async fetchData(url){
        let response= await fetch(url)
            if (!response.ok) {
            throw new Error('User not found');
        }
        let data= await response.json();
        return data;
    }
}