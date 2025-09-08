let container = document.querySelector(".container");
let postsContainer = document.querySelector(".posts");

function fetchData() {
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then((response) => response.json())
    .then((posts) => {
     let postsHtml = [];

      posts.forEach((singlePost) => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${singlePost.id}`)
          .then((response) => response.json())
          .then((post) => {
            fetch(
              `https://jsonplaceholder.typicode.com/posts/${post.id}/comments`
            )
              .then((response) => response.json())
              .then((comments) => {
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
              })
              .catch((err) => {
                container.innerHTML = err.message;
              })
              .catch((err) => {
                container.innerHTML = err.message;
              });
          });
      });
    })
    .catch((err) => {
      container.innerHTML = err.message;
    });
}
fetchData();
