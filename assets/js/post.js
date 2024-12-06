const postList = document.querySelector('.postList');

async function init() {

  const posts = await fetch('https://dummyjson.com/posts').then(response => response.json())
  const users = await fetch(' https://dummyjson.com/users').then(response => response.json())
  const comments = await fetch('https://dummyjson.com/comments').then(response => response.json())

  console.log(posts);
  console.log(users);
  console.log(comments);
  

  for (const post of posts.posts) {

    const user = findByUserId(post.userId, users.users);
    const comment = getPostComments(post.userId, comments.comments);

    if(user) {

     postList.innerHTML += `<li>
     <h2>POSTS</h2>
     ${post.title}
     <div>${post.body}</div> 
     <div>${post.reactions.likes}</div>
     <div>${post.reactions.dislikes}</div>
     <h3>USERS</h3>
     <div>${user.firstName} ${user.lastName}</div> 
     <div>${user.username} </div>
     <div>${user.email}</div>
    <h3>COMMENTS</h3>
    <div>${comment.user.fullName}</div>
    <div>${comment.body}</div>
      
      </li>`


    }
    
   
  }
 
}




function findByUserId(userId , users) {

  for (const user of users) {

    if(user.id === userId) {

      return user;
    }
  }

  return null;

}

function getPostComments(userId, comments) {

  for (const comment of comments) {

    if(comment.id === userId) {

      return comment;
    }
  }
}

init();