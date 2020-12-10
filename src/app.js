console.log("app is running");
///list
const todoList = [{
  neme : ""
} ];
// console.log("printing to do list", todolist);
$(".resultpage").append('<ul id="todos"></ul>');
todoList.forEach((element, i) => {
  console.log("element", element);
  console.log("index", i);
});
// for (var i=0; i < todoList.length; i++){
//   todoList.push({});
// }
console.log(todoList);

/// P1 New clicked
$(".grid-item-right").click(function () {
  // alert( "You are creating a new task" );
  console.log("Creating a new task");
});

const $container = $(`.modal-header`);
// console.log(" container is : ", $container);

const $h1 = `<h1>create a task</h1>`;
// console.log(`h1 is working`, $h1);
$container.append($h1);



const $modalBody = $(`.modal-body`);

const $form = `
  <form id="toDoForm">
    <label>Name</label>
    <input name="name" type="text" placeholder="Project 1"> </input>
    <label for="status">Status</label>
    <select name="status">
      <option value="none">none</option>
      <option value="assign">assign</option>
      <option value="working">working</option>
      <option value="complete">complete</option>
    </select>
    <lable for="date"> Date </lable>
      <input type="text" id="datepicker" name="date"/>
    <label>comment</label>
    <textarea rows="4" cols="50" name="comment"> Enter text here...</textarea>
    <button type="submit" class="btn btn-primary btn-sm">Submit</button>
  </form>
`;
const renderNewToDoItem = (newToDo) =>{
  return ` 
  <tr class="heading">
  <th>Action</th>
  <th>Edit</th>
  <th >Project Name</th>
  <th>Project Status</th>
  <th>Project Date</th>
  <th>Comment</th>
  
</tr>
<tr>
  <td><i class="fa fa-trash" onClick = {test()}></i></td>
  <td><span class="glyphicon">&#x270f;</span></td>
  <td class="nameoftheproject">${newToDo.name}</td>
  <td class="nameofstatus">${newToDo.status}</td>
  <td class="resultofdate">${newToDo.date}</td>
  <td class="resultofcomment">${newToDo.comment}</td>
  
</tr>
<tr>
  `
}

$modalBody.append($form);
$(function () {
  $("#datepicker").datepicker();
  format: 'dd/mm/yyyy'
});
$("#toDoForm").on("submit", (event) => {
  event.preventDefault();
  const name = $("input[name='name']").val();
  const status = $("select[name='status']").val();
  const date = $("input[name='date']").val();
  const comment = $("textarea[name='comment']").val();
  const newTodoItem = {
    name: name,
    status: status,
    date: date,
    comment: comment,
  };
  console.log("new item: ", newTodoItem);
  todoList.push(newTodoItem);
  console.log("after push", todoList);
  const $newToDo = renderNewToDoItem(newTodoItem);
  console.log($newToDo);
  $("#resultpage").append($newToDo)
});

// const delete = (obj) => {
//   todoList.pop(obj);
// }

const test = (obj) => { 
  console.log("Delete button should work!")
  todoList.pop(obj);
} 