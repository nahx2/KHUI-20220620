const p = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('ok');
  },2000);
  // resolve('ok');
  // reject('Fail');
});
p.then((ok) =>{
  console.log('첫번째 성공');
  return new Promise((resolve, reject)=>{
    setTimeout(()=>{
      console.log('두번째성공');
    },3000);
  })
})  .then(function (ok){
  console.log(ok);
})

.catch((error)=>{
  console.log(error);
})