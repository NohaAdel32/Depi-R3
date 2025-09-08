let username=document.getElementById("username");
let getUser=document.getElementById("getUser");
let user= document.getElementById("user")

    
    getUser.addEventListener("click",async () => {
      try{
       
  let profileName=username.value ;
        let response= await fetch(`https://api.github.com/users/${profileName}`);
           if (!response.ok) {
            throw new Error('User not found');
        }
        let data =await response.json();
         user.innerHTML=
         `
            <h2>${data.name}</h2>
            <img src="${data.avatar_url}" alt="${data.name}" width="150">
            <p>Repositories: ${data.public_repos}</p>
            <p>Followers: ${data.followers}</p>
            <p>Following: ${data.following}</p>
         `
      }catch(err){
     user.innerHTML = err.message;
      }
    })


