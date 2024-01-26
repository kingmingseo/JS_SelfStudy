function taskSyncFunction(callback){
  console.log('첫 번째 작업')
  console.log('두 번째 작업')
  console.log('세 번째 작업')
  console.log('네 번째 작업')
  callback();
}

taskSyncFunction(()=>{
  console.log('콜백함수 실행')
})


console.log('실행완료')


