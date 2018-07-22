function changeVocals (str) {
  var alphabet = 'abcdefghijklmnopqrstuvwxyz'
  var temp = ''
  for (var i = 0; i < str.length; i++){
    switch (str[i]){
      case 'a' : {temp = temp + alphabet[1];break;}
      case 'A' : {temp = temp + alphabet[1].toUpperCase();break;}
      case 'i' : {temp = temp + alphabet[9];break;}
      case 'I' : {temp = temp + alphabet[9].toUpperCase();break;}
      case 'u' : {temp = temp + alphabet[21];break;}
      case 'U' : {temp = temp + alphabet[21].toUpperCase();break;}
      case 'e' : {temp = temp + alphabet[5];break;}
      case 'E' : {temp = temp + alphabet[5].toUpperCase();break;}
      case 'o' : {temp = temp + alphabet[15];break;}
      case 'O' : {temp = temp + alphabet[15].toUpperCase();break;}
      default : {temp += str[i];}
    }
  }
return temp
}

function reverseWord (str) {
  var temp=""
  for (var i = str.length-1; i >=0; i--) {
    temp+=str[i]
  }
  return temp
}

function setLowerUpperCase (str) {
  var temp=""
  for (var i=0; i<str.length; i++){
    if (str[i]===str[i].toUpperCase()) {
      temp+=(str[i].toLowerCase())
    }
    else {
      temp+=(str[i].toUpperCase())
    }
  }
  return temp
}

function removeSpaces (str) {
  var temp = ""
  for (var i = 0; i < str.length; i++){
    if (str[i] !== " "){
      temp+= str[i]
    }
  }
  return temp
}

function passwordGenerator (name) {
  if (name.length < 5){
    return 'Minimal karakter yang diinputkan adalah 5 karakter'
  } else {
  var listChangeVoc = changeVocals (name)
  var listReverse = reverseWord (listChangeVoc)
  var listSetLowUp = setLowerUpperCase (listReverse)
  var listRemoveSpace = removeSpaces (listSetLowUp)
  return listRemoveSpace
  }
}
console.log(passwordGenerator('Sergei Dragunov')); // 'VPNVGBRdJFGRFs'
console.log(passwordGenerator('Dimitri Wahyudiputra')); // 'BRTVPJDVYHBwJRTJMJd'
console.log(passwordGenerator('Alexei')); // 'JFXFLb'
console.log(passwordGenerator('Alex')); // 'Minimal karakter yang diinputkan adalah 5 karakter'
