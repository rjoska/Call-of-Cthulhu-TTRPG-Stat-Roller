var dice = {
  sides: 6,
  roll: function () {
    var randomNumber = Math.floor(Math.random() * this.sides) + 1;
    return randomNumber;
  }
}

//global vars
{
	var sizeTotalJS = 0;
	var conTotalJS = 0;
	var strTotalJS = 0;
	var dexTotalJS = 0;
	var appTotalJS = 0;
	var powTotalJS = 0;
	var luckTotalJS = 0;
	var eduTotalJS = 0;
	var intTotalJS = 0;
	
	var sanityJS = 0;
	var mpJS = 0;
	var dodgeJS = 0;
	var ppJS = 0;
}

//Prints dice roll to the page

function printNumber(number) {
  var placeholder = document.getElementById('placeholder');
  placeholder.innerHTML = number;
}

var button = document.getElementById('button');
var strBut = document.getElementById('strbutton');
var conBut = document.getElementById('conbutton');
var dexBut = document.getElementById('dexbutton');
var appBut = document.getElementById('appbutton');
var powBut = document.getElementById('powbutton');
var luckBut = document.getElementById('luckbutton');
var sizeBut = document.getElementById('sizebutton');
var eduBut = document.getElementById('edubutton');
var intBut = document.getElementById('intbutton');

strBut.onclick = function() {
  var strResult = dice.roll();
  strDice1.innerHTML = strResult;
  var strResult2 = dice.roll();
  strDice2.innerHTML = strResult2;
  var strResult3 = dice.roll();
  strDice3.innerHTML = strResult3;
  strTotalJS = (strResult+strResult2+strResult3) * 5;
  strTotal.innerHTML = strTotalJS;
  cookieTime();
}

conBut.onclick = function() {
  var conResult = dice.roll();
  conDice1.innerHTML = conResult;
  var conResult2 = dice.roll();
  conDice2.innerHTML = conResult2;
  var conResult3 = dice.roll();
  conDice3.innerHTML = conResult3;
  conTotalJS = (conResult+conResult2+conResult3) * 5;
  conTotal.innerHTML = conTotalJS;
  
  updateHP();
  cookieTime();
}

dexBut.onclick = function() {
  var dexResult = dice.roll();
  dexDice1.innerHTML = dexResult;
  var dexResult2 = dice.roll();
  dexDice2.innerHTML = dexResult2;
  var dexResult3 = dice.roll();
  dexDice3.innerHTML = dexResult3;
  dexTotalJS = (dexResult+dexResult2+dexResult3) * 5;
  dexTotal.innerHTML = dexTotalJS;
  
  dodgeJS = dexTotalJS/2;
  dodge.innerHTML = Math.round(dodgeJS);
  cookieTime();
}

appBut.onclick = function() {
  var appResult = dice.roll();
  appDice1.innerHTML = appResult;
  var appResult2 = dice.roll();
  appDice2.innerHTML = appResult2;
  var appResult3 = dice.roll();
  appDice3.innerHTML = appResult3;
  appTotalJS = (appResult+appResult2+appResult3) * 5;
  appTotal.innerHTML = appTotalJS;
  cookieTime();
}

powBut.onclick = function() {
  var powResult = dice.roll();
  powDice1.innerHTML = powResult;
  var powResult2 = dice.roll();
  powDice2.innerHTML = powResult2;
  var powResult3 = dice.roll();
  powDice3.innerHTML = powResult3;
  powTotalJS = (powResult+powResult2+powResult3) * 5;
  powTotal.innerHTML = powTotalJS;
  
  sanityJS = powTotalJS;
  sanity.innerHTML = sanityJS;

  mpJS = powTotalJS/5;
  magicPoints.innerHTML = mpJS;
  cookieTime();
}

luckBut.onclick = function() {
  var luckResult = dice.roll();
  luckDice1.innerHTML = luckResult;
  var luckResult2 = dice.roll();
  luckDice2.innerHTML = luckResult2;
  var luckResult3 = dice.roll();
  luckDice3.innerHTML = luckResult3;
  luckTotalJS = (luckResult+luckResult2+luckResult3) * 5;
  luckTotal.innerHTML = luckTotalJS;
  cookieTime();
}

sizeBut.onclick = function() {
  var sizeResult = dice.roll();
  sizeDice1.innerHTML = sizeResult;
  var sizeResult2 = dice.roll();
  sizeDice2.innerHTML = sizeResult2;
  sizeTotalJS = (sizeResult + sizeResult2 + 6) * 5;
  sizeTotal.innerHTML = sizeTotalJS;
  
  updateHP();
  cookieTime();
}

eduBut.onclick = function() {
  var eduResult = dice.roll();
  eduDice1.innerHTML = eduResult;
  var eduResult2 = dice.roll();
  eduDice2.innerHTML = eduResult2;
  eduTotalJS = (eduResult + eduResult2 + 6) * 5;
  eduTotal.innerHTML = eduTotalJS;
  cookieTime();
}

intBut.onclick = function() {
  var intResult = dice.roll();
  intDice1.innerHTML = intResult;
  var intResult2 = dice.roll();
  intDice2.innerHTML = intResult2;
  intTotalJS = (intResult + intResult2 + 6) * 5;
  intTotal.innerHTML = intTotalJS;
  
  ppJS = (intTotalJS*2);
  personalPoints.innerHTML = ppJS;
  cookieTime();
}

button.onclick = function() {
  var strResult = dice.roll();
  strDice1.innerHTML = strResult;
  var strResult2 = dice.roll();
  strDice2.innerHTML = strResult2;
  var strResult3 = dice.roll();
  strDice3.innerHTML = strResult3;
  strTotalJS = (strResult+strResult2+strResult3) * 5;
  strTotal.innerHTML = strTotalJS;
  
  var conResult = dice.roll();
  conDice1.innerHTML = conResult;
  var conResult2 = dice.roll();
  conDice2.innerHTML = conResult2;
  var conResult3 = dice.roll();
  conDice3.innerHTML = conResult3;
  conTotalJS = (conResult+conResult2+conResult3) * 5;
  conTotal.innerHTML = conTotalJS;
  
  var dexResult = dice.roll();
  dexDice1.innerHTML = dexResult;
  var dexResult2 = dice.roll();
  dexDice2.innerHTML = dexResult2;
  var dexResult3 = dice.roll();
  dexDice3.innerHTML = dexResult3;
  dexTotalJS = (dexResult+dexResult2+dexResult3) * 5;
  dexTotal.innerHTML = dexTotalJS;
  
  var appResult = dice.roll();
  appDice1.innerHTML = appResult;
  var appResult2 = dice.roll();
  appDice2.innerHTML = appResult2;
  var appResult3 = dice.roll();
  appDice3.innerHTML = appResult3;
  appTotalJS = (appResult+appResult2+appResult3) * 5;
  appTotal.innerHTML = appTotalJS;
  
  var powResult = dice.roll();
  powDice1.innerHTML = powResult;
  var powResult2 = dice.roll();
  powDice2.innerHTML = powResult2;
  var powResult3 = dice.roll();
  powDice3.innerHTML = powResult3;
  powTotalJS = (powResult+powResult2+powResult3) * 5;
  powTotal.innerHTML = powTotalJS;
  

  var luckResult = dice.roll();
  luckDice1.innerHTML = luckResult;
  var luckResult2 = dice.roll();
  luckDice2.innerHTML = luckResult2;
  var luckResult3 = dice.roll();
  luckDice3.innerHTML = luckResult3;
  luckTotalJS = (luckResult+luckResult2+luckResult3) * 5;
  luckTotal.innerHTML = luckTotalJS;

  var sizeResult = dice.roll();
  sizeDice1.innerHTML = sizeResult;
  var sizeResult2 = dice.roll();
  sizeDice2.innerHTML = sizeResult2;
  sizeTotalJS = (sizeResult + sizeResult2 + 6) * 5;
  sizeTotal.innerHTML = sizeTotalJS;
  
  
  var eduResult = dice.roll();
  eduDice1.innerHTML = eduResult;
  var eduResult2 = dice.roll();
  eduDice2.innerHTML = eduResult2;
  eduTotalJS = (eduResult + eduResult2 + 6) * 5;
  eduTotal.innerHTML = eduTotalJS;
  
  var intResult = dice.roll();
  intDice1.innerHTML = intResult;
  var intResult2 = dice.roll();
  intDice2.innerHTML = intResult2;
  intTotalJS = (intResult + intResult2 + 6) * 5;
  intTotal.innerHTML = intTotalJS;
  
  hpjs = (conTotalJS+sizeTotalJS)/10;
  hp.innerHTML = Math.round(hpjs);
  
  sanityJS = powTotalJS;
  sanity.innerHTML = sanityJS;

  mpJS = powTotalJS/5;
  magicPoints.innerHTML = mpJS;

  dodgeJS = dexTotalJS/2;
  dodge.innerHTML = Math.round(dodgeJS);
  
  ppJS = (intTotalJS*2);
  personalPoints.innerHTML = ppJS;
  
  cookieTime();
};

function updateHP(){
  hpjs = (conTotalJS+sizeTotalJS)/10;
  hp.innerHTML = Math.round(hpjs);
}


function cookieTime () {
	document.cookie = "name=cooky;" + strn + "=" + strTotalJS + ";" + dexn + "=" + dexTotalJS + ";" + sizen + "=" + sizeTotalJS + ";" appn + "=" + appTotalJS + ";" conn + "=" + conTotalJS + ";" intn + "=" + intTotalJS + ";" pown + "=" + powTotalJS + ";" edun + "=" + eduTotalJS + ";" luckn + "=" + luckTotalJS + ";"
}