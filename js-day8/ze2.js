
const input = document.getElementById('footer_input');
const button = document.querySelector('.btn_add');
// const inputText = () => {
  // }
  const ul = document.querySelector('ul');

  const deleteToDo = (event) => {
    const remove = event.target.parentNode.parentNode;
    ul.removeChild(remove);
  };

  // const btn_add = document.querySelector('.btn_add');
  // btn_add.addEventListener('click',()=>{
const inputText = () => {
      console.log(input.value);
const li = document.createElement('li');
li.className = 'item_row';
const item = document.createElement('div');
item.className = 'item';
const item_del = document.createElement('button');
item_del.className = 'item_del';
const item_name = document.createElement('div');
item_name.className = 'item_name';
const text = input.value;
const i = document.createElement('i');
i.className = 'fas fa-trash-alt';
item_name.textContent = text;
const line = document.createElement('div');
line.className = 'line';
ul.appendChild(li);
ul.appendChild(li);
li.appendChild(item);
li.appendChild(item_del);
li.appendChild(line);
item.appendChild(item_name);
item_del.appendChild(i);

input.value = "";    
item_del.addEventListener('click', deleteToDo);
  
};
button.addEventListener('click', inputText);

input.addEventListener('keydown', (event) => {
  if (event.keyCode === 13) {
    inputText();
  }
});






