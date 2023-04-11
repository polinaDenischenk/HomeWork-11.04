
let task = document.querySelector('#taskInput');
let lit = document.querySelector('#list');
let add = document.querySelector('#addBtn');

add.addEventListener('click' , function(){
  let newItem = document.createElement('li');
  newItem.classList.add = ('item');
  newItem.textContent = task.value;
  lit.append(newItem);
  task.value = '';

  const itemBtns = document.createElement('div');
  newItem.append(itemBtns);
  itemBtns.className = 'item__btns'

  const deleteButton = document.createElement('i');
  deleteButton.className = 'fa-regular fa-square check';
  itemBtns.append(deleteButton);

  deleteButton.addEventListener('click' , function(){
    lit.removeChild(newItem);  
  }) 

  task.value = '';

})
