# async, await

작성일시: 2024년 1월 25일 오전 11:15
복습: No

async와 await을 사용하면 비동기 코드를 더 가독성이 좋게 작성할 수 있다. 

기존 Promise의 then과 catch를 대체하는 문법이다.

```jsx
function getUser(userId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      try {
        const user = userId === 1 ? { id: userId, name: 'kingmingeso' } : null;
        resolve(user)
      }
      catch (error) {
        reject(error)
      }

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

function getComments(postId) {
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

function runPromise() {
  getUser(2)
    .then(user => {
      if (user) {
        console.log(user)
      }
      else {
        console.log('user가 없어요 ')
      }
    })
}

async function runAsyncAwait() {
  try {
    const user = await getUser(1);
    const post = await getPost(user);
    const comment = await getComments(post);
    console.log(user)
    console.log(post)
    console.log(comment)

  }
  catch (error) {
    console.log(error)
  }

}

console.log('start')
runAsyncAwait();
console.log('end')
```