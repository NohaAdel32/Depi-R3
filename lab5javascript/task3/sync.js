let container = document.querySelector(".container");
let postsContainer = document.querySelector(".posts");

async function fetchSequen() {
try{
        let response=await fetch("https://jsonplaceholder.typicode.com/posts");
    let posts =await response.json();
     let postsHtml = [];
     posts.forEach(async(singlePost) => {
        let postResponse = await fetch(`https://jsonplaceholder.typicode.com/posts/${singlePost.id}`)
       let post =await postResponse.json();
       let commentsresponse= await  fetch(
              `https://jsonplaceholder.typicode.com/posts/${post.id}/comments`
            )
        let comments=await commentsresponse.json();

        // console.log(comments)
       let commentsHtml = comments.map(comment => `
            <div class="comment">
                <h5>${comment.name}</h5>
                <p class="comment-body">${comment.body}</p>
            </div>
        `).join('');
          let postContent = `
            <div >
                <h3>${post.id}, (${post.title})</h3>
                <p >${post.body}</p>
                <div >
                    <h4>Comments:</h4>
                    ${commentsHtml}
                </div>
            </div>
        `;

        postsHtml.push(postContent);
 
    postsContainer.innerHTML = postsHtml.join('<hr>');
    });
}catch(err){
     container.innerHTML = err.message;
}
}
fetchSequen()