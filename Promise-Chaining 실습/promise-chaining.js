fetch('https://jsonplaceholder.typicode.com/todos?_limit=5')
  .then(response => {
    return response.json()
  })
  .then(data=>{
    return data.filter(obj=>obj.id>3)
  })
  .then(result=>{
    console.log(result)
  })
  .catch(err=>{
    console.log(err)
  })
  .finally(()=>{
    console.log('finish')
  })
  

