document.addEventListener('DOMContentLoaded', () => {

  let addButton = document.getElementById('add');
  let addInput = document.getElementById('item')

  
  addButton.addEventListener('click', () => {
      let newItem = addInput.value;
      if(newItem)
      {
          addItemTodo(newItem);
          addInput.value = '';
      }
  })

  var counter = 1;

  function addItemTodo(text)
  {
      let list = document.getElementById('todo');
      let str = `
      <li class="d-flex  border-bottom p-3">
                          ${counter}
                          <div class="form-check">
                              <label class="form-check-label" for="">${text}</label>
                          </div>
                          <i class="fa fa-check ml-auto text-success" id="complete-${counter}"></i>
                          <i style="margin-left: 10px!important" class="remove fa fa-remove ml-auto text-danger" id="remove-${counter}"></i>
                      </li>
      `;
      list.insertAdjacentHTML('beforeend', str);

      let complete = document.getElementById('complete-' + counter);
      complete.addEventListener('click', toggleItem);


      
      let remove = document.getElementById('remove-' + counter);
      remove.addEventListener('click', removeItem);


      counter++;
  }



  function toggleItem()
  {
      let item = this.parentNode;
      let parent = item.parentNode;
      let id = parent.id;

      if(id === 'todo')
      {
          var target = document.getElementById('completed');
          this.className = 'fa fa-undo ml-auto text-info'
      }
      else{
          var target = document.getElementById('todo');
          this.className = 'fa fa-check ml-auto text-success'
      }

      target.insertBefore(item, target.childNodes[0])
  }


  function removeItem()
  {
      let item = this.parentNode;
      let parent = item.parentNode;

      parent.removeChild(item);

  }
})