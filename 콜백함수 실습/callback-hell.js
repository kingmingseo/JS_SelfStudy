function getUser(userId, callback){
  setTimeout(()=>{
    const user = {id:userId, name:'kingmingseo'};
    callback(user)
  },1000)
}

function getPost(userId, callback){
  setTimeout(()=>{
    const post = [
      {id : 1, title: 'Post1'},
      {id : 2, title: 'Post2'}
    ]
    callback(post)
  },1000);
}

function getComments(postId,callback){
  setTimeout(()=>{
    const comments = [
      {id:1, text :' Comment1'},
      {id:2, text :' Comment2'},
      {id:3, text :' Comment3'}
    ]
    callback(comments)
  },1000)
}

getUser(1,(user)=>{
  console.log('user :', user)
  getPost(user.id,(post)=>{
    console.log('posts: ',post)
    getComments(post[0].id,(comments)=>{
      console.log('comments:', comments)
    })
  })
})