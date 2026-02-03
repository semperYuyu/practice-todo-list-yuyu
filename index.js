var submitButton = document.querySelector('#button')
var inputField = document.querySelector('input')
var todoList = document.querySelector('#todoList')
// to access text input by user, field is called 'value'
// creating function to add item and give it the proper event

function addListItem() {
  if (inputField.value) {
  // if value field is not empty, do following code //
  let newH4 = document.createElement('h4')
  // creating element to be added
  newH4.innerHTML = inputField.value

  // setting text of that element to input text
  todoList.appendChild(newH4)
  // adding element to page, as child of div w/ class todoList
  inputField.value = ""
  inputField.placeholder = ""

  // resetting input text
  } else {
    // otherwise, yell at user :pouting_cat:
    inputField.placeholder = "Type something in !!!!"
  }






  // i tried doing this out of the loop, it makes sense that it didn't work
  // creating it in here so that every time the button is pressed, all list items are given their event listener
  // otherwise, none would get it since the script out of this block would only run once :D
  let allH4 = document.querySelectorAll('h4')

allH4.forEach(function (element) {
  // apply event listener to each h4 element
  element.addEventListener('click', function(aaa) {
    // remove the element
    todoList.removeChild(element)
  })
})
}

// creating event listener for button to place a new item\

inputField.addEventListener('keydown', function(aaa) {
  // how i found the key field: https://developer.mozilla.org/en-US/docs/Web/API/Element/keydown_event
  if (aaa.key === "Enter") {
    addListItem()
  }
})
submitButton.addEventListener('click', function(submittal){
  addListItem()
})
// creating event listener for list items to delete the item

