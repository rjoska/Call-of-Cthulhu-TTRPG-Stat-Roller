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
  var statDict = {};
}

//Prints dice roll to the page

function printNumber(number) {
  var placeholder = document.getElementById('placeholder');
  placeholder.innerHTML = number;
}

var savebutton = document.getElementById('savebutton');
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
  var strTotalJS = (strResult+strResult2+strResult3) * 5;
  strTotal.innerHTML = strTotalJS;

  statDict["str1"] = strResult;
  statDict["str2"] = strResult2;
  statDict["str3"] = strResult3;
  statDict["strTot"] = strTotalJS;
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
  
  statDict["con1"] = conResult;
  statDict["con2"] = conResult2;
  statDict["con3"] = conResult3;
  statDict["conTot"] = conTotalJS;

  updateHP();
}

dexBut.onclick = function() {
  var dexResult = dice.roll();
  dexDice1.innerHTML = dexResult;
  var dexResult2 = dice.roll();
  dexDice2.innerHTML = dexResult2;
  var dexResult3 = dice.roll();
  dexDice3.innerHTML = dexResult3;
  var dexTotalJS = (dexResult+dexResult2+dexResult3) * 5;
  dexTotal.innerHTML = dexTotalJS;
  
  statDict["dex1"] = dexResult;
  statDict["dex2"] = dexResult2;
  statDict["dex3"] = dexResult3;
  statDict["dexTot"] = dexTotalJS;

  var dodgeJS = dexTotalJS/2;
  dodge.innerHTML = Math.round(dodgeJS);

  statDict["dodge"] = Math.round(dodgeJS);

}

appBut.onclick = function() {
  var appResult = dice.roll();
  appDice1.innerHTML = appResult;
  var appResult2 = dice.roll();
  appDice2.innerHTML = appResult2;
  var appResult3 = dice.roll();
  appDice3.innerHTML = appResult3;
  var appTotalJS = (appResult+appResult2+appResult3) * 5;
  appTotal.innerHTML = appTotalJS;

  statDict["app1"] = appResult;
  statDict["app2"] = appResult2;
  statDict["app3"] = appResult3;
  statDict["appTot"] = appTotalJS;

}

powBut.onclick = function() {
  var powResult = dice.roll();
  powDice1.innerHTML = powResult;
  var powResult2 = dice.roll();
  powDice2.innerHTML = powResult2;
  var powResult3 = dice.roll();
  powDice3.innerHTML = powResult3;
  var powTotalJS = (powResult+powResult2+powResult3) * 5;
  powTotal.innerHTML = powTotalJS;
  
  statDict["pow1"] = powResult;
  statDict["pow2"] = powResult2;
  statDict["pow3"] = powResult3;
  statDict["powTot"] = powTotalJS;

  var sanityJS = powTotalJS;
  sanity.innerHTML = sanityJS;

  statDict["sanity"] = sanityJS;

  var mpJS = powTotalJS/5;
  magicPoints.innerHTML = mpJS;

  statDict["mp"] = mpJS;
}

luckBut.onclick = function() {
  var luckResult = dice.roll();
  luckDice1.innerHTML = luckResult;
  var luckResult2 = dice.roll();
  luckDice2.innerHTML = luckResult2;
  var luckResult3 = dice.roll();
  luckDice3.innerHTML = luckResult3;
  var luckTotalJS = (luckResult+luckResult2+luckResult3) * 5;
  luckTotal.innerHTML = luckTotalJS;

  statDict["luck1"] = luckResult;
  statDict["luck2"] = luckResult2;
  statDict["luck3"] = luckResult3;
  statDict["luckTot"] = luckTotalJS;
}

sizeBut.onclick = function() {
  var sizeResult = dice.roll();
  sizeDice1.innerHTML = sizeResult;
  var sizeResult2 = dice.roll();
  sizeDice2.innerHTML = sizeResult2;
  sizeTotalJS = (sizeResult + sizeResult2 + 6) * 5;
  sizeTotal.innerHTML = sizeTotalJS;
  
  statDict["size1"] = sizeResult;
  statDict["size2"] = sizeResult2;
  statDict["sizeTot"] = sizeTotalJS;

  updateHP();
}

eduBut.onclick = function() {
  var eduResult = dice.roll();
  eduDice1.innerHTML = eduResult;
  var eduResult2 = dice.roll();
  eduDice2.innerHTML = eduResult2;
  var eduTotalJS = (eduResult + eduResult2 + 6) * 5;
  eduTotal.innerHTML = eduTotalJS;

  statDict["edu1"] = eduResult;
  statDict["edu2"] = eduResult2;
  statDict["eduTot"] = eduTotalJS;
}

intBut.onclick = function() {
  var intResult = dice.roll();
  intDice1.innerHTML = intResult;
  var intResult2 = dice.roll();
  intDice2.innerHTML = intResult2;
  var intTotalJS = (intResult + intResult2 + 6) * 5;
  intTotal.innerHTML = intTotalJS;
  
  statDict["int1"] = intResult;
  statDict["int2"] = intResult2;
  statDict["intTot"] = intTotalJS;

  var ppJS = (intTotalJS*2);
  personalPoints.innerHTML = ppJS;

  statDict["pp"] = ppJS;
}

button.onclick = function() {
  var strResult = dice.roll();
  strDice1.innerHTML = strResult;
  var strResult2 = dice.roll();
  strDice2.innerHTML = strResult2;
  var strResult3 = dice.roll();
  strDice3.innerHTML = strResult3;
  var strTotalJS = (strResult+strResult2+strResult3) * 5;
  strTotal.innerHTML = strTotalJS;

  statDict["str1"] = strResult;
  statDict["str2"] = strResult2;
  statDict["str3"] = strResult3;
  statDict["strTot"] = strTotalJS;
  
  var conResult = dice.roll();
  conDice1.innerHTML = conResult;
  var conResult2 = dice.roll();
  conDice2.innerHTML = conResult2;
  var conResult3 = dice.roll();
  conDice3.innerHTML = conResult3;
  var conTotalJS = (conResult+conResult2+conResult3) * 5;
  conTotal.innerHTML = conTotalJS;

  statDict["con1"] = conResult;
  statDict["con2"] = conResult2;
  statDict["con3"] = conResult3;
  statDict["conTot"] = conTotalJS;
  
  var dexResult = dice.roll();
  dexDice1.innerHTML = dexResult;
  var dexResult2 = dice.roll();
  dexDice2.innerHTML = dexResult2;
  var dexResult3 = dice.roll();
  dexDice3.innerHTML = dexResult3;
  var dexTotalJS = (dexResult+dexResult2+dexResult3) * 5;
  dexTotal.innerHTML = dexTotalJS;
  
  statDict["dex1"] = dexResult;
  statDict["dex2"] = dexResult2;
  statDict["dex3"] = dexResult3;
  statDict["dexTot"] = dexTotalJS;

  var appResult = dice.roll();
  appDice1.innerHTML = appResult;
  var appResult2 = dice.roll();
  appDice2.innerHTML = appResult2;
  var appResult3 = dice.roll();
  appDice3.innerHTML = appResult3;
  var appTotalJS = (appResult+appResult2+appResult3) * 5;
  appTotal.innerHTML = appTotalJS;
  
  statDict["app1"] = appResult;
  statDict["app2"] = appResult2;
  statDict["app3"] = appResult3;
  statDict["appTot"] = appTotalJS;

  var powResult = dice.roll();
  powDice1.innerHTML = powResult;
  var powResult2 = dice.roll();
  powDice2.innerHTML = powResult2;
  var powResult3 = dice.roll();
  powDice3.innerHTML = powResult3;
  var powTotalJS = (powResult+powResult2+powResult3) * 5;
  powTotal.innerHTML = powTotalJS;
  
  statDict["pow1"] = powResult;
  statDict["pow2"] = powResult2;
  statDict["pow3"] = powResult3;
  statDict["powTot"] = powTotalJS;


  var luckResult = dice.roll();
  luckDice1.innerHTML = luckResult;
  var luckResult2 = dice.roll();
  luckDice2.innerHTML = luckResult2;
  var luckResult3 = dice.roll();
  luckDice3.innerHTML = luckResult3;
  var luckTotalJS = (luckResult+luckResult2+luckResult3) * 5;
  luckTotal.innerHTML = luckTotalJS;

  statDict["luck1"] = luckResult;
  statDict["luck2"] = luckResult2;
  statDict["luck3"] = luckResult3;
  statDict["luckTot"] = luckTotalJS;

  var sizeResult = dice.roll();
  sizeDice1.innerHTML = sizeResult;
  var sizeResult2 = dice.roll();
  sizeDice2.innerHTML = sizeResult2;
  var sizeTotalJS = (sizeResult + sizeResult2 + 6) * 5;
  sizeTotal.innerHTML = sizeTotalJS;
  
  statDict["size1"] = sizeResult;
  statDict["size2"] = sizeResult2;
  statDict["sizeTot"] = sizeTotalJS;

  var eduResult = dice.roll();
  eduDice1.innerHTML = eduResult;
  var eduResult2 = dice.roll();
  eduDice2.innerHTML = eduResult2;
  var eduTotalJS = (eduResult + eduResult2 + 6) * 5;
  eduTotal.innerHTML = eduTotalJS;
  
  statDict["edu1"] = eduResult;
  statDict["edu2"] = eduResult2;
  statDict["eduTot"] = eduTotalJS;

  var intResult = dice.roll();
  intDice1.innerHTML = intResult;
  var intResult2 = dice.roll();
  intDice2.innerHTML = intResult2;
  var intTotalJS = (intResult + intResult2 + 6) * 5;
  intTotal.innerHTML = intTotalJS;

  statDict["int1"] = intResult;
  statDict["int2"] = intResult2;
  statDict["intTot"] = intTotalJS;
  
  var hpjs = (conTotalJS+sizeTotalJS)/10;
  hp.innerHTML = Math.round(hpjs);

  statDict["fullHP"] = Math.round(hpjs);
  
  var sanityJS = powTotalJS;
  sanity.innerHTML = sanityJS;

  statDict["sanity"] = sanityJS;

  var mpJS = powTotalJS/5;
  magicPoints.innerHTML = mpJS;

  statDict["mp"] = mpJS;

  var dodgeJS = dexTotalJS/2;
  dodge.innerHTML = Math.round(dodgeJS);

  statDict["dodge"] = Math.round(dodgeJS);
  
  var ppJS = (intTotalJS*2);
  personalPoints.innerHTML = ppJS;

  statDict["pp"] = ppJS;
  
};

savebutton.onclick = function(){
  setCookie();
};

function updateHP(){
  hpjs = (conTotalJS+sizeTotalJS)/10;
  hp.innerHTML = Math.round(hpjs);

  statDict["fullHP"] = Math.round(hpjs);
};

function setCookie(){
  const expiryDate = new Date();
  expiryDate.setTime(expiryDate.getTime() + (1*24*60*60*1000));
  let expires = "expires="+ expiryDate.toUTCString();

  document.cookie = "name=" + JSON.stringify(statDict) + ";" + expires + ";" + "SameSite=Strict;";
};


const alertPlaceholder = document.getElementById('alertPlaceholder')
  const appendAlert = (message, type) => {
  const wrapper = document.createElement('div')
  wrapper.innerHTML = [
    `<div class="alert alert-${type} alert-dismissible" role="alert">`,
    `   <div>${message}</div>`,
    '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
    '</div>'
  ].join('')

  alertPlaceholder.append(wrapper)
  };

const alertTrigger = document.getElementById('savebutton')
if (alertTrigger) {
  alertTrigger.addEventListener('click', () => {
    appendAlert('Character Stats Saved! Switch to "Character Sheets" to finish the whole sheet.', 'success')
  })
}