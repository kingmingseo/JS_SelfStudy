function getUser(userId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const user = { id: userId, name: 'kingmingeso' }
      // callback(user)
      resolve(user)
    }, 1000)
  })
}

function getPost(userId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const post = [
        { id: 1, title: 'Post1' },
        { id: 2, title: 'Post2' }
      ]
      //callback(post)
      resolve(post);
    }, 1000);
  })

}

function getComments(postId, callback) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const comments = [
        { id: 1, text: ' Comment1' },
        { id: 2, text: ' Comment2' },
        { id: 3, text: ' Comment3' }
      ]
      //callback(comments)
      resolve(comments)
    }, 1000)
  })
}

// getUser(1, (user) => {
//   console.log('user :', user)
//   getPost(user.id, (post) => {
//     console.log('posts: ', post)
//     getComments(post[0].id, (comments) => {
//       console.log('comments:', comments)
//     })
//   })
// })

getUser(1)
  .then((user)=>{
    console.log(user)
    return getPost(user.id);
  })
  .then((post)=>{
    console.log(post)
    return getComments(post[0].id)
  })
  .then((comment)=>{
    console.log(comment)
  })
  .catch(err=>console.log(err))
  .finally(()=>console.log("##############"))