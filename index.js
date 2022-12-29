//the increment button
var btnPlus = document.getElementsByClassName("plus");
//the delete button
var deleteBtn = document.getElementsByClassName("delete");
//the like button
var likeBtn=document.getElementsByClassName("like");
//the checkbox
const checkboxs = document.querySelectorAll(".check");
// the decrement button
const btnMinus = document.getElementsByClassName("minus");
// console.log(les bouttons);
for (i = 0; i < btnPlus.length; i++) {
  btnPlus[i].addEventListener("click", increment);
  btnMinus[i].addEventListener("click", decrement);
  deleteBtn[i].addEventListener("click",deleteItem);
  likeBtn[i].addEventListener("click",like);
  checkboxs[i].addEventListener("click",total);
}

//this is a function for increment
function increment(event) {
  // console.log(event);
  const btn = event.target;
  // console.log(btn);
  const divElt = btn.parentElement;
  // console.log(divElt);
  var quntetiyTag = divElt.querySelector("p");
  // console.log(quntetiyTag);
  var quentityValue = Number(quntetiyTag.innerHTML);
  // console.log(typeof(quentityValue));
  quentityValue++;
  // console.log(quentityValue);
  quntetiyTag.innerHTML = quentityValue;
  const unitePriceValue=Number(divElt.parentElement.parentElement.querySelector(".unitPrice").innerHTML)
//   console.log(unitePriceValue);
var priceTag=divElt.parentElement.parentElement.querySelector(".price")
var priceValue=Number(priceTag.innerHTML)
priceValue=quentityValue*unitePriceValue
priceTag.innerHTML=priceValue
console.log(priceValue);
}

//this is a function for decrement
function decrement(event) {
  // console.log(event);
  const btn = event.target;
  // console.log(btn);
  const divElt = btn.parentElement;
  // console.log(divElt);
  var quntetiyTag = divElt.querySelector("p");
  // console.log(quntetiyTag);
  var quentityValue = Number(quntetiyTag.innerHTML);
  // console.log(typeof(quentityValue));
 if(quentityValue>0){
  quentityValue--;}
  // console.log(quentityValue);
  quntetiyTag.innerHTML = quentityValue; 
  const unitePriceValue=Number(divElt.parentElement.parentElement.querySelector(".unitPrice").innerHTML)
//   console.log(unitePriceValue);
var priceTag=divElt.parentElement.parentElement.querySelector(".price")
var priceValue=Number(priceTag.innerHTML)
priceValue=quentityValue*unitePriceValue
priceTag.innerHTML=priceValue
console.log(priceValue);
//disable button si 0
const totalCliks=document.getElementById("price");
const sumvalue= parseInt(totalCliks.innerText)+ click;
console.log(sumvalue+click);
totalCliks.innerText=sumvalue;
if(sumvalue<0){
  totalCliks.innerText=0;
}
}
// activate the delete button
function deleteItem(event){
const del=event.target;
console.log(del);
const delItm=del.parentElement.parentElement.parentElement.parentElement;
console.log(delItm)
delItm.remove()
}
// activate the like button
function like(event){
  const likeBtn=event.target
 if(likeBtn.style.color=="red"){
  likeBtn.style.color="grey"
 }
 else{likeBtn.style.color="red"}
  
}
//the total function
function total(event){
  const check = event.target;
  const trElt = check.parentElement.parentElement;
  const priceValue = Number(trElt.querySelector(".price").innerHTML);
  var totalTag = document.getElementById("total");
  var totalValue = Number(totalTag.innerHTML);
  const btnPlus=check.parentElement.parentElement.querySelector(".plus");
  const btnMinus=check.parentElement.parentElement.querySelector(".minus");
  if(check.checked===true){
    totalValue+=priceValue;
    btnPlus.setAttribute("disabled", true)
    btnMinus.setAttribute("disabled", true)
  }
  else{
    totalValue-=priceValue;
    btnPlus.removeAttribute("disabled",false)
    btnMinus.removeAttribute("disabled",false)
}
totalTag.innerHTML=totalValue;
}