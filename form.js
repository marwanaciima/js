const username =document.querySelector("#username")
const password =document.querySelector("#password")
const confirmpasstext =document.querySelector("#confirmpass")
const button =document.querySelector("#loginbtn")

const error = document.querySelector("#error")

button.addEventListener("click", function(event){
    event.preventDefault()
    checkemptyfields(username)
    checkemptyfields(password)
    checkemptyfields(confirmpasstext)
    checkpasswordmatch(confirmpasstext)
    checkpasswordmatch(confirmpasstext)
})
 


function checkemptyfields(fields){

    if(fields.value == ""){
        error.style.display = "block"
        username.classList.add("border-2","border-red-500")
        password.classList.add("border-2","border-red-500")
        confirmpasstext.classList.add("border-2","border-red-500")
    }
else{
    error.style.display = "none"
    username.classList.remove("border-2", "border-red-500")
    password.classList.remove("border-2", "border-red-500")
    confirmpass.classList.remove("border-2", "border-red-500")

}
}




// checking if the password matching
function checkpasswordmatch(){
    if( confirmpasstext.value !=password.value){
        passworderror.innerHTML = "password not the same"
        passworderror.style.color = "red"

    }
else{
passworderror.innerHTML = " "
passworderror.style.color = " "
}
}
