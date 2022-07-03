const [input1, input2] = document.querySelectorAll('input')
let botao = document.querySelector('button') 
function enter(){

    if(input1.value && input2.value.length >= 8){
        botao.removeAttribute("disabled")
        botao.style.backgroundColor = "red";
    }else{
       botao.setAttribute("disabled", "disabled") 
       botao.style.backgroundColor = "salmon";
    }
}
input1.addEventListener("input",enter)
input2.addEventListener("input",enter)