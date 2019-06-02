function preventRefreshOnSubmit(){
    document.querySelector('form').addEventListener('submit', function(event){
      event.preventDefault()
    })
}

preventRefreshOnSubmit()


function retrieveEmployeeInformation(){
  const input = document.querySelector('main form input')
  return input.value
}

function addNewElementAsLi(){
  const employee_info = retrieveEmployeeInformation()
  const new_li = document.createElement('li')
  new_li.innerHTML = employee_info
  document.querySelector('ul').appendChild(new_li)
}

function addNewLiOnClick(){
  
}

function clearEmployeeListOnLinkClick(){
  
}
