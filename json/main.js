import dept from './dept.json';
console.log(dept);
console.log(typeof dept);


const user = {
  name: 'scott',
  age: 30,
  email: [
    'test@hot.com',
    'nice@gmail.com'
  ]
}

console.log(user.email);
console.log(user['email']);
console.log(user['email'][0]);
const str = JSON.stringify(user);
console.log(str);
console.log(typeof str);
const obj = JSON.parse(str);
console.log(obj);
console.log(typeof obj);
console.log('user',user);
console.log(typeof user);