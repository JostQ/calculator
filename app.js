let a
let b
let symbol

document.getElementById("one").addEventListener("click", function(){
  if(symbol === undefined){
    if( a === undefined ){
      a = document.getElementById("one").innerHTML
    }
    else{
      a += document.getElementById("one").innerHTML
    }
    display()
    console.log(a)
  }
  else {
    if( b === undefined ){
      b = document.getElementById("one").innerHTML
    }
    else {
      b += document.getElementById("one").innerHTML
    }
    display()
    console.log(b)
  }
})

document.getElementById("two").addEventListener("click", function(){
  if( symbol === undefined  ){
    if( a === undefined ){
      a = document.getElementById("two").innerHTML
    }
    else{
      a += document.getElementById("two").innerHTML
    }
    display()
    console.log(a)
  }
  else {
    if( b === undefined ){
      b = document.getElementById("two").innerHTML
    }
    else {
      b += document.getElementById("two").innerHTML
    }
    display()
    console.log(b)
  }
})

document.getElementById("three").addEventListener("click", function(){
  if( symbol === undefined  ){
    if( a === undefined ){
      a = document.getElementById("three").innerHTML
    }
    else{
      a += document.getElementById("three").innerHTML
    }
    display()

    console.log(a)
  }
  else {
    if( b === undefined ){
      b = document.getElementById("three").innerHTML
    }
    else {
      b += document.getElementById("three").innerHTML
    }
    display()

    console.log(b)
  }
})

document.getElementById("four").addEventListener("click", function(){
  if( symbol === undefined  ){
    if( a === undefined ){
      a = document.getElementById("four").innerHTML
    }
    else{
      a += document.getElementById("four").innerHTML
    }
    display()

    console.log(a)
  }
  else {
    if( b === undefined ){
      b = document.getElementById("four").innerHTML
    }
    else {
      b += document.getElementById("four").innerHTML
    }
    display()

    console.log(b)
  }
})

document.getElementById("five").addEventListener("click", function(){
  if( symbol === undefined  ){
    if( a === undefined ){
      a = document.getElementById("five").innerHTML
    }
    else{
      a += document.getElementById("five").innerHTML
    }
    display()

    console.log(a)
  }
  else {
    if( b === undefined ){
      b = document.getElementById("five").innerHTML
    }
    else {
      b += document.getElementById("five").innerHTML
    }
    display()

    console.log(b)
  }
})

document.getElementById("six").addEventListener("click", function(){
  if( symbol === undefined  ){
    if( a === undefined ){
      a = document.getElementById("six").innerHTML
    }
    else{
      a += document.getElementById("six").innerHTML
    }
    display()

    console.log(a)
  }
  else {
    if( b === undefined ){
      b = document.getElementById("six").innerHTML
    }
    else {
      b += document.getElementById("six").innerHTML
    }
    display()

    console.log(b)
  }
})

document.getElementById("seven").addEventListener("click", function(){
  if( symbol === undefined  ){
    if( a === undefined ){
      a = document.getElementById("seven").innerHTML
    }
    else{
      a += document.getElementById("seven").innerHTML
    }
    display()

    console.log(a)
  }
  else {
    if( b === undefined ){
      b = document.getElementById("seven").innerHTML
    }
    else {
      b += document.getElementById("seven").innerHTML
    }
    display()

    console.log(b)
  }
})

document.getElementById("eight").addEventListener("click", function(){
  if( symbol === undefined  ){
    if( a === undefined ){
      a = document.getElementById("eight").innerHTML
    }
    else{
      a += document.getElementById("eight").innerHTML
    }
    display()

    console.log(a)
  }
  else {
    if( b === undefined ){
      b = document.getElementById("eight").innerHTML
    }
    else {
      b += document.getElementById("eight").innerHTML
    }
    display()

    console.log(b)
  }
})

document.getElementById("nine").addEventListener("click", function(){
  if( symbol === undefined  ){
    if( a === undefined ){
      a = document.getElementById("nine").innerHTML
    }
    else{
      a += document.getElementById("nine").innerHTML
    }
    display()
    console.log(a)
  }
  else {
    if( b === undefined ){
      b = document.getElementById("nine").innerHTML
    }
    else {
      b += document.getElementById("nine").innerHTML
    }
    display()
    console.log(b)
  }
})

document.getElementById("zero").addEventListener("click", function(){
  if( symbol === undefined  ){
    if( a === undefined ){
      a = document.getElementById("zero").innerHTML
    }
    else{
      a += document.getElementById("zero").innerHTML
    }
    display()
    console.log(a)
  }
  else {
    if( b === undefined ){
      b = document.getElementById("zero").innerHTML
    }
    else {
      b += document.getElementById("zero").innerHTML
    }
    display()
    console.log(b)
  }
})

document.getElementById("add").addEventListener("click", function(){
  if( a !== undefined && b === undefined ){
    symbol = "+"
    console.log(symbol)
    display()
  }
})

document.getElementById("multiply").addEventListener("click", function(){
  if( a !== undefined && b === undefined ){
    symbol = "*"
    console.log(symbol)
    display()
  }
})

document.getElementById("substract").addEventListener("click", function(){
  if( a !== undefined && b === undefined ){
    symbol = "-"
    console.log(symbol)
    display()
  }
})

document.getElementById("divide").addEventListener("click", function(){
  if( a !== undefined && b === undefined ){
    symbol = "/"
    console.log(symbol)
    display()
  }
})

document.getElementById("clear").addEventListener("click", function(){
  clear()
  document.getElementById("calcul").value = ""
})

document.getElementById("result").addEventListener("click", function(){
  if( b !== undefined ){
    a = Number(a)
    b = Number(b)
    if( symbol === "+" ){
      add()
    }
    if( symbol === "-" ){
      substract()
    }
    if( symbol === "/" ){
      divide()
    }
    if( symbol === "*" ){
      multiply()
    }
  }
})

function clear(){
  console.log("clear")
  a = undefined
  b = undefined
  symbol = undefined
}

function add(){
  result = a + b
  console.log(result)
  document.getElementById("calcul").value = result
  clear()
}

function multiply(){
  result = a * b
  console.log(result)
  document.getElementById("calcul").value = result
  clear()
}

function substract(){
  result = a - b
  console.log(result)
  document.getElementById("calcul").value = result
  clear()
}

function divide(){
  result = a / b
  console.log(result)
  document.getElementById("calcul").value = result
  clear()
}

function display(){
  if( symbol === undefined ){
    document.getElementById("calcul").value = a
  }
  else if (b === undefined) {
    document.getElementById("calcul").value = a + symbol
  }
  else{
    document.getElementById("calcul").value = a + symbol + b
  }

}
