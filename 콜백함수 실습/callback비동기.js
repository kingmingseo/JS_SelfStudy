function taskAsyncFunction(callback){
  console.log('start')
  setTimeout(()=>{
    console.log('첫 번째 작업')
    console.log('두 번째 작업')
    callback()
  },2000) 
  console.log('end')
}

taskAsyncFunction(()=>{
  console.log('콜백함수 실행')
})


console.log('실행완료')