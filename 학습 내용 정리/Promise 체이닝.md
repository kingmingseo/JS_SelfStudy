# Promise 체이닝

작성일시: 2024년 1월 21일 오후 12:16
복습: No

# Promise Chaining

프로미스의 같은 객체에 대해서 메소드를 연속적으로 호출 하는 것을 의미한다.

이런 Promise Chaining을 통해서 Callback hell을 해결할 수 있다.

실습을 하면서 fetch() API도 학습해보자
fetch api는 비동기로 작동하며 HTTP 통신을 할 때 사용한다.
response로 Promise 객체를 반환한다.
쉽게 말해서 “서버로부터 자원을 줘” 라고 약속을 하는 것이다.
그리고 그 약속을 반환한다.

콜백 hell의 예

```jsx
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

```

id가 1인 유저의 post를 가져오고 첫번째 post에 대한 comment를 불러오는 코드이다.
콜백함수를 사용해서 작성한 결과 점점 코드의 indentation이 하나씩 들어가면서 가독성이 떨어지는 것을 확인할 수 있다. 

프로미스 체이닝은 위와 같은 콜백 헬을 해결해준다.

```jsx
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
```

getUser 함수에서 Promise객체가 return 된다 그리고 이 Promise 객체 안에서 resolve가 user객체를 넣고 호출 되었기 때문에 

then은 resolve에서 전해진 객체를 파라미터로 받아온다.
최초 getUser가 올바르게 실행 되었을 때 실행하고자 하는 코드를 then함수 안에서 작성한 뒤 user.id를 통해 getPost(uset.id); 함수의 실행 결과를 return한다
getPost함수의 실행 결과 또한 Promise 객체로 return 된다.
이 결과를 다음 then이 파라미터로 받고 
계속해서 이어나가는 것이다.

코드에 indentation이 줄어서 가독성이 좋아진 것을 확인 할 수 있다.