function guguDanPrint(p_start, p_end){
  alert(`guguDanPrint출력성공 ${p_start}단 에서${p_end}단까지`);

const table = document.createElement('table');
table.setAttribute('border','3');//1
// table.setAttribute('width','500');
// table.setAttribute('height','300');
const htr = document.createElement('tr');//1
for(let j=root.p_start;j<=root.p_end;j++){
  const table2 = document.createElement('table');
  table2.setAttribute('border','3');//2
  table2.setAttribute('width','500');
table2.setAttribute('height','300');
const htr = document.createElement('tr');
const th1 = document.createElement('th colspan = 2');
th1.appendChild(document.createTextNode(`${j}단`));
htr.appendChild(th1);
table2.appendChild(htr);
for(let i=1;i<=9;i++){ {
  const tr = document.createElement('tr');
  const td1 = document.createElement('td');
  td1.appendChild(document.createTextNode(`${j}*${i}`));
  const td2 = document.createElement('td');
  td2.appendChild(document.createTextNode(`${j}*${i}`));
  // const td3 = document.createElement('td');
  // td3.appendChild(document.createTextNode(`${depts[i].loc}`));
  // tr.appendChild(td);
  // tr.appendChild(td2);
  // tr.appendChild(td3);
  // table.appendChild(tr);
}
tr.appendChild(td1);
tr.appendChild(td2);
}
table2.appendChild(tr);
}
}

document.getElementById('root').appendChild(table2);
document.getElementById('root').appendChild(table);