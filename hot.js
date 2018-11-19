function my_max(event){
  let my_array = [ 1, 12, 5, 13, 8, 10]

  event.preventDefault()

  document.getElementById("max_result").innerHTML = "Result : " + Math.max.apply(Math, my_array)

  console.log(Math.max.apply(Math, my_array))
}

function vowel_count(event){

  event.preventDefault()

  console.log(event.originalTarget[0].value)

  let string = event.originalTarget[0].value
  let vowel_regex = /[aeouiy]/gi

  result = string.match(vowel_regex).length

  if( result === 0 || result === 1 ){
    document.getElementById("vowel_result").innerHTML = "Result : " + string.match(vowel_regex).length + " vowel"
  }
  else{
    document.getElementById("vowel_result").innerHTML = "Result : " + string.match(vowel_regex).length + " vowels"
  }

  console.log(result)

}

function reverse(event){

  event.preventDefault()

  let string = event.originalTarget[0].value

  result = string.split("").reverse().join("")

  document.getElementById("reverse_result").innerHTML = "Result : " + result

  console.log(result)

}

document.getElementById("max").addEventListener("submit", my_max, true )
document.getElementById("vowel").addEventListener("submit", vowel_count, true )
document.getElementById("reverse").addEventListener("submit", reverse, true)
