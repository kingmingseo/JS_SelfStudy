const myPromise = new Promise((resolve,reject)=>{
  //비동기 작업처리~
  setTimeout(()=>{
    const text = prompt("hello를 입력해줘!")
    if( text ==='hello'){
      resolve('성공')
    }
    else{
      reject("error message") 
    }
  },2000)
  
})

myPromise
  .then((result)=>{
    console.log('result: ',result)
  })
  .catch((err)=>{
    console.log('result: ',err)
  })
  .finally(()=>{
    console.log('무조건 출력')
  })