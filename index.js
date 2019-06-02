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
  
}

function addNewLiOnClick(){
  
}

function clearEmployeeListOnLinkClick(){
  
}
