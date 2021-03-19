const container = document.querySelector(".container"),
  equalBtn = document.getElementById("equal-btn"),
  clearBtn = document.getElementById("clear-btn"),
  plusBtn = document.getElementById("plus-btn"),
  minusBtn = document.getElementById("minus-btn"),
  multiplyBtn = document.getElementById("multiply-btn"),
  divisionBtn = document.getElementById("division-btn"),
  result = document.getElementById("result"),
  numberNine = document.getElementById("9"),
  numberEight = document.getElementById("8"),
  numberSeven = document.getElementById("7"),
  numberSix = document.getElementById("6"),
  numberFive = document.getElementById("5"),
  numberFour = document.getElementById("4"),
  numberThree = document.getElementById("3"),
  numberTwo = document.getElementById("2"),
  numberOne = document.getElementById("1"),
  numberZero = document.getElementById("0");
  
  let firMem = [];
  let secMem = [];
  let opeMem = [];
  let thiMem = [];
  
  function calculate(command, a, b){
    switch(command){
      case 'add':
        return a + b;
      case 'substract':
        return a - b;
      case 'divide':
        return a / b;
      case 'multiply':
        return a * b;
      case 'remainder':
        return a % b;
    }
  }
  
  function trueThiFirMem (){
    const a = thiMem;
    const b = parseInt(firMem.join(""));
    const c = calculate(opeMem, a, b)
    saveMemory(c, thiMem);
    firMem = [];
    paintResult(thiMem);
  }
  function trueSecFirMem(){
    const a = parseInt(secMem.join(""));
    const b = parseInt(firMem.join(""));
    const c = calculate(opeMem, a, b)
    saveMemory(c, thiMem);
    firMem = [];
    secMem = [];
    paintResult(thiMem);
  }
  
  function trueFirMem(){
    secMem = firMem;
    firMem = [];
  }
  
function handleMultiply() {
  if(thiMem > 0 && firMem.length > 0){
    trueThiFirMem();
  } else if (secMem.length > 0 && firMem.length > 0){
    trueSecFirMem();
  } else if (firMem.length > 0 && secMem.length < 1){
    trueFirMem();
  }
  opeMem = "multiply";
}

function handleDivide() {
  if(thiMem > 0 && firMem.length > 0){
    trueThiFirMem();
  } else if (secMem.length > 0 && firMem.length > 0){
    trueSecFirMem();
  } else if (firMem.length > 0 && secMem.length < 1){
    trueFirMem();
  }
  opeMem = "divide";
}

function handleMinus() {
  if(thiMem > 0 && firMem.length > 0){
    trueThiFirMem();
  } else if (secMem.length > 0 && firMem.length > 0){
    trueSecFirMem();
  } else if (firMem.length > 0 && secMem.length < 1){
    trueFirMem();
  }
  opeMem = "substract";
}

function handlePlus() {
  if(thiMem > 0 && firMem.length > 0){
    trueThiFirMem();
  } else if (secMem.length > 0 && firMem.length > 0){
    trueSecFirMem();
  } else if (firMem.length > 0 && secMem.length < 1){
    trueFirMem();
  }
  opeMem = "add";
}

function hendleEqual() {
  console.log("================= 시작");
  if(thiMem > 0 && firMem.length > 0){
    trueThiFirMem();
  } else if (secMem.length > 0 && firMem.length > 0){
    trueSecFirMem();
  }
  console.log("=========== 끝.");
}

function paintResult(target){
  if(target == thiMem){
    result.innerText = target; 
  } else{
    result.innerText = target.join('');
  }
}

function saveMemory(value, target){
  if(target == thiMem){
    thiMem = value
  } else {
    target.push(value);
  }
  console.log(target)
  console.log(`${firMem} ||| ${secMem} ||| ${thiMem}`)
}

function handleNumber(e) {
  const input = e.target.innerText;
  console.log(input);
  saveMemory(input, firMem);
  paintResult(firMem)
}

function hendleDelete() {
  firMem.pop();
  paintResult(firMem);
}

function hendleCelar() {
  firMem = [0];
  paintResult(firMem);
  firMem = [];
  secMem = [];
  opeMem = [];
  thiMem = [];
};

multiplyBtn.addEventListener("mousedown", handleMultiply);
divisionBtn.addEventListener("mousedown", handleDivide);
minusBtn.addEventListener("mousedown", handleMinus);
plusBtn.addEventListener("mousedown", handlePlus);
equalBtn.addEventListener("mousedown", hendleEqual);
clearBtn.addEventListener("mousedown", hendleCelar);
result.addEventListener("mousedown", hendleDelete);
numberZero.addEventListener("mousedown", handleNumber);
numberOne.addEventListener("mousedown", handleNumber);
numberTwo.addEventListener("mousedown", handleNumber);
numberThree.addEventListener("mousedown", handleNumber);
numberFour.addEventListener("mousedown", handleNumber);
numberFive.addEventListener("mousedown", handleNumber);
numberSix.addEventListener("mousedown", handleNumber);
numberSeven.addEventListener("mousedown", handleNumber);
numberEight.addEventListener("mousedown", handleNumber);
numberNine.addEventListener("mousedown", handleNumber)