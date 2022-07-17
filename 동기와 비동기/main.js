function add(x){
  return x+2;
}

function account(a,b,cb){
 
setTimeout(()=> {
  cb(a+b);
}, 2000);

}
const result = add(3);
// console.log(result);
const temp = result;

const result2 = account(10,20,(result)=>{
  console.log('result :',result);
});
const temp2 = result2;
console.log('temp2 :',temp2);