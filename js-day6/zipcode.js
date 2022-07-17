function dongInput(){
  let dong = prompt('동이름을 입력하세요');
  if(dong === null || dong.length == 0){
    alert("동이름을 입력하세요");
    return;
  }else{
    action(dong);
  //  choice(zipcode, address)
  }
}

//사용자가 선택한 정보를 텍스트필드에 자동출력하기
function choice(zipcode, address){
  document.querySelector('#zipcode').value = zipcode;
  document.querySelector('#address').value = address;
  //값이 선택되면 조회 결과 화면 지워주세요
  document.getElementById("root").innerHTML ="";
}

function action(dong){
  document.getElementById("root").innerHTML ="";
  console.log('사용자가 입력한 동이름 :' +dong);
  const ajax = new XMLHttpRequest();
// 오라클 서버를 경유해서 가져오는 대신에 해커뉴스에서 제공하는 데이터셋을
// 활용해서 dom(html요소-활용-> React수업 선수학습)을 조작해 보자.
const ZIPCODE_URL = 'http://localhost:8000/dev_web/json/ZipCodeSearch.jsp?dong='+dong; //I/O 통신 ->  dead lock , crash
ajax.open('GET', ZIPCODE_URL, false);//true:동기적처리, false:비동기처리
ajax.send();// 전송이 일어난다
// 서버로 부터 응답받은 내용을 출력하기
console.log(ajax.response);
const address = JSON.parse(ajax.response);
console.log('size : ',address.length);
const table = document.createElement('table');
table.setAttribute('border','1');
table.setAttribute('width','400');
const htr = document.createElement('tr');
const th1 = document.createElement('th');
th1.appendChild(document.createTextNode('우편번호'));
const th2 = document.createElement('th');
th2.appendChild(document.createTextNode('주소'));
htr.appendChild(th1);
htr.appendChild(th2);
table.appendChild(htr);
for (let i = 0; i < address.length; i++) {
  const tr = document.createElement('tr');
  const td = document.createElement('td');
  const a = document.createElement('a')
  a.href ="javascript:choice('"+address[i].zipcode+"','"+address[i].address+"')";

  td.setAttribute('width','200');
  a.appendChild(document.createTextNode(`${address[i].zipcode}`));
  td.appendChild(a);
  const td2 = document.createElement('td');
  td2.appendChild(document.createTextNode(`${address[i].address}`));
  tr.appendChild(td);
  tr.appendChild(td2);
  table.appendChild(tr);
}

document.getElementById('root').appendChild(table);

}

