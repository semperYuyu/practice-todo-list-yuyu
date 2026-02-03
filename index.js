var submitButton = document.querySelector('#button')
var inputField = document.querySelector('input')
var todoList = document.querySelector('#todoList')
// to access text input by user, field is called 'value'


submitButton.addEventListener('click', function(){
  let newH4 = document.createElement('h4')
  // creating element to be added
  newH4.innerHTML = inputField.value
  // setting text of that element to input text
  todoList.appendChild(newH4)
  // adding element to page, as child of div w/ class todoList
  inputField.value = ""
  // resetting input text
})

