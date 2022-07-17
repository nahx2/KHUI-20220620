

// const li = document.querySelector('.item_row');
// const item = document.querySelector('.item');
// const item_name = document.querySelector('.item_name');
// const item_del = document.querySelector('.item_delete');
// const alt = document.querySelector('.fas fa-trash-alt');
// const line = document.querySelector('.item_divider');
const btn_add = document.querySelector('.btn_add');
const ul = document.querySelector('ul');
// const input = document.querySelector('input');
btn_add.addEventListener('click',()=>{
    // alert('입력');
const li = document.querySelector('li');
const item = document.querySelector('div');
const item_del = document.querySelector('button');
ul.appendChild(li);
li.appendChild(item);
li.appendChild(item_del);
        // ul.appendChild(li);
        // li.appendChild(item);
        // li.appendChild(line);
        // item.appendChild(item_name);
        // // item_name.appendChild(document.createTextNode(input.value));
        // // item.appendChild(item_del);
const item_name = document.querySelector('span');
// const i = document.querySelector('i');
const text = input.value;
item.appendChild(item_name);

        // item_name.innerText = input.value;  // <li>입력된 할 일</li>
        // // item_del.appendChild(i);
        // // item.appendChild(item_del);
        // // item.appendChild(item_name);
        // // li.appendChild(line);
        // // li.appendChild(item);
        
        input.value = "";    
  
        // li.innerText = input.value;  // <li>입력된 할 일</li>
        // ul.appendChild(li);       // 할 일 리스트창에 자식으로 붙이기
        // input.value= "";               // 할 일 입력창 초기화
      
});




