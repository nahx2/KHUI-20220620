import {increase, getCount, count} from './account.js';

increase();
increase();
increase();

const c2 = getCount();
console.log('getCount() =>',getCount());
console.log('c2',c2);
console.log('count',count);