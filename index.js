var submitButton = document.querySelector('#button')
var inputField = document.querySelector('input')
var todoList = document.querySelector('#todoList')
// to access text input by user, field is called 'value'

// creating function to add item and give it the proper event
function addListItem() {
  if (inputField.value) {
    // if value field is not empty, do following code //
  let newH4 = document.createElement('h4')
  let newCheck = document.createElement('input')
  newCheck.type = 'checkbox'
    // creating element to be added

  newH4.innerHTML = `${inputField.value}`
    // using input as text to be used in h4 element

  newH4.appendChild(newCheck)
    // adding checkbox to h4, instead of setting it as innerhtml
    // allows me to reference it for event listening

  todoList.appendChild(newH4)
    // adding element to page, as child of div w/ class todoList

  inputField.value = ""
  inputField.placeholder = ""
    // resetting input text

    // creating event listener
  newH4.addEventListener('click', function(){
      // don't know why i didnt add the event here, previously i was iterating through all h4-s and giving them the event
      // listener regardless of whether they had it or not, but this is much simpler
    todoList.removeChild(newH4)
  })

  newCheck.addEventListener('click', function(clicked) {
    let strike = newH4.style.textDecoration
      // i was running into the problem of clicking the checkbox also deleting the entire element
      // i asked copilot why my code wasn't allowing the checkbox to be clicked, and would instead delete the element
      // especially since i had created a test input element that would allow me to click the checkbox and element separately
      // copilot suggested i use the .stopPropogation() method, and so i searched that up on MDN (link below)
      // https://developer.mozilla.org/en-US/docs/Web/API/Event/stopPropagation
      // it basically just makes it so that if i were to click specifically the checkbox, it would end the event there,
      // and not allow it to propogate to the h4 event listener, which would delete the element\\
    newH4.style.textDecoration = strike == "line-through" ? "none" : "line-through";
      // toggles strikethrough on checkbox press
    clicked.stopPropagation()
      // im not sure if the IDE would like the -
      // it's textDecoration in javascript instead of text-decoration....

  })

  } else {
    // otherwise, yell at user :pouting_cat:
    inputField.placeholder = "Type something in !!!!"
  }







}


// creating event listener for when user press 'enter'
inputField.addEventListener('keydown', function(aaa) {
  // how i found the key field: https://developer.mozilla.org/en-US/docs/Web/API/Element/keydown_event
  if (aaa.key === "Enter") {
    addListItem()
  }
})


// creating event listener for when submit button is clicked
submitButton.addEventListener('click', function(submittal){
  addListItem()
})