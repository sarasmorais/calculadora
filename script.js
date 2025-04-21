function insertToDisplay(data){
    document.querySelector('#display').value += data
}

function clean() {
    document.querySelector('#display').value = ''
}

function back(){
   const diplay = document.querySelector('#display')
   diplay.value =diplay.value.slice(0 , -1)
}

function result(){
    
}