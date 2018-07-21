function changeVocals (str) {
  var strSplit = str.split('')
  var alphabet = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
  var vocal = 'aiueoAIUEO'
  var index
  var temp = []

for (var i = 0; i < strSplit.length; i++) {
    for (var j = 0; j < vocal.length; j++) {
      if (strSplit[i] === vocal[j]) {
        index = alphabet.indexOf(strSplit[i]) + 1
        strSplit[i] = alphabet[index]
      }
    }
    temp.push(strSplit[i])
  }
  return temp
}
function reverseWord (str) {
  var reverse = []
  for (var i = str.length - 1; i > 0; i--) {
    reverse.push(str[i])
  }
  return reverse
}

function setLowerUpperCase (str) {
  var temp = ''
  for (var i = 0; i < str.length; i++) {
    if (str[i] === str[i].toUpperCase()) {
      temp += str[i]
    } else if (str[i] !== str[i].toUpperCase()) {
      temp += str[i].toUpperCase()
    }
  }
  return temp
}

function removeSpaces (str) {
  var temp = ''
  for (var i = 0; i < str.length; i++) {
    if (str[i] !== ' ') {
      temp += str[i]
    }
  }
  return temp
}

function passwordGenerator (name) {
  if (name.length < 5) {
    return 'Minimal karakter yang diinputkan adalah 5 karakter'
  } else {
      var ubahVocal = changeVocals(name)
      var balikHuruf = reverseWord(ubahVocal)
      var setUpperCase = setLowerUpperCase(balikHuruf)
      var hapusSpasi = removeSpaces(setUpperCase)

      return hapusSpasi
  }
}

console.log(passwordGenerator('Sergei Dragunov')); // 'VPNVGBRdJFGRFs'
console.log(passwordGenerator('Dimitri Wahyudiputra')); // 'BRTVPJDVYHBwJRTJMJd'
console.log(passwordGenerator('Alexei')); // 'JFXFLb'
console.log(passwordGenerator('Alex')); // 'Minimal karakter yang diinputkan adalah 5 karakter'
