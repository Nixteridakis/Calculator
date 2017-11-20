var backVar; // used for back function
var result = ""; // stores the result and returns it to screen
var first;  // stores the first number to the calculation
var second = ""; // stores the second number to the calculation
var oper = ""; // stores the operation to be executed
var count = 1;  // counts until 10 for max digits in calculator
var count2 = 1; 
var copyDisp;
var max = 0; 

//whenever a number key is pressed
function intiate(current) {
  display1(current);
}

function display1(change) {
  //keeps displaying numbers until 10
  if (count > 0 && count < 10 && count2!==0) {
    $("#display1").val($("#display1").val() + change);
    if (max == 1) {   
       max=0;
      $("#display2").val($("#display1").val());
    } else {
      $("#display2").val($("#display2").val() + change);
    }
    //when display numbers reach 10 resets
    count++;
  } else if (count>=10 && count2!==0){
    //resets @ 10 digits
    $("#display1").val("");
    $("#display2").val("Max Number Reached");
    count = 2;
    max=1;
  }
  else {  
    $("#display1").val(change);
    $("#display2").val($("#display2").val() + change);
    count = 1;
    count2=1;
}
  return change;
}

// function that executes when equals key is pressed
function equals() {
  preCalculation();
  $("#display1").val(result);
  $("#display2").val("");
  oper = "";
  second = "";
  count2 = 0;
}

function preCalculation() {  

  second = $("#display1").val();
  calculation(oper, first, second);
  oper = "";
  second = "";
  return result;
}

//when an operator key is pressed this executes
function operation(store) {
  //this executes only after i press the equals button
  if (result !== "" && count2 == 0) {
    $("#display2").val($("#display2").val() + result);
    count2 = 1;
  }
  //when operator has not been used before
  if (oper == "") {
    oper = store;
    first = $("#display1").val();
    $("#display2").val($("#display2").val() + oper);
    count = 0;
  } else {
    //when operator has been pressed before
    count = 0;

    first = preCalculation();
    oper = store;
    $("#display2").val($("#display2").val() + oper);
  }  

}

//the calculation operation for two numbers
function calculation(oper, first, second) {
  var num1 = parseFloat(first);
  var num2 = parseFloat(second);

  switch (oper) {
    case "+":
      result = num1 + num2;
      break;
    case "-":
      result = num1 - num2;
      break;
    case "/":
      result = num1 / num2;
      break;
    case "*":
      result = num1 * num2;
  }

  result = result.toString();
  result = result.slice(0, 10);
  result = parseFloat(result);
  return result;
}

//the function of Clear button
function clearAll() {
  $("#display1").val("");
  $("#display2").val("");
  count = 1;
  first = "";
  second = "";
  oper = "";
  result = "";
  max=0;
}
//the function for taking a digit back
function back() {
  //change display1
  backVar = $("#display1").val();
  backVar = backVar.slice(0, -1);
  $("#display1").val(backVar);

  //change display2
  backVar = $("#display2").val();
  backVar = backVar.slice(0, -1);
  $("#display2").val(backVar);
}
