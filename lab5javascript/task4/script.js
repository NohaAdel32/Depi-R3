let fetchData=document.getElementById("fetchData")
let output= document.getElementById("output")


fetchData.addEventListener("click",async function(){
let userId=1



//////////
async function fetchsequential() {
   try{
     let userReponse=await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
    let user=await userReponse.json();
    let postResponse=await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`);
    let posts= await postResponse.json();
    return {user,posts}
   }catch(err){
    output.innerHTML=err.message;
   }
}
////////////////////////////////////
async function fetchParallel() {
    try{
        let userPromise=fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
    let postsPromise=fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`);
    let [userResponse,postsResponse]=await Promise.all([userPromise,postsPromise]);
    let user=await userResponse.json();
    let posts= await postsResponse.json();
    return {user,posts}
    }catch(err){
        output.innerHTML=err.message;
    }
}
 const sequentialStart = performance.now();
    const sequentialData = await fetchsequential();
    const sequentialEnd = performance.now();

    const parallelStart = performance.now();
    const parallelData = await fetchParallel();
    const parallelEnd = performance.now();
    output.innerHTML=`      <h2>Sequential API Calls</h2>
        <p>User: ${sequentialData.user.name}</p>
        <p>Posts: ${sequentialData.posts.length}</p>
        <p>Time: ${(sequentialEnd - sequentialStart).toFixed(2)} ms</p>

        <h2>Parallel API Calls</h2>
        <p>User: ${parallelData.user.name}</p>
        <p>Posts: ${parallelData.posts.length}</p>
        <p>Time: ${(parallelEnd - parallelStart).toFixed(2)} ms</p>
    `;
})


