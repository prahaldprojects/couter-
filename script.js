const textArea = document.getElementById("textarea")

const totalChar =document.getElementById("total-char")
 const remainChar =document.getElementById("remaining-char")



textArea.addEventListener("keyup",()=>{
updateCounter()})

function updateCounter(){

    totalChar.innerHTML=textArea.value.length
    remainChar.innerHTML=textArea.getAttribute("maxLength") - textArea.value.length

}