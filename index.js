const bt = document.querySelector("#calculate");
const n1 = document.querySelector("#bill");
const n2 = document.querySelector("#tip");
const t = document.querySelector("#total")
let value = function(){

    const billValue = n1.value;
    const tipValue = n2.value;
    const totalValue = billValue * (1 + tipValue / 100);
    t.innerText = totalValue.toFixed(2);

}
let click = addEventListener("click",value)
