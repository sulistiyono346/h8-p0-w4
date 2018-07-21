function checkAB(num) {
  var numSplit=num.split(" ").join("")
  var posisiA=[]
  var posisiB=[]
  var jarak=0
  for (var i = 0; i <numSplit.length; i++) {
    if (numSplit[i]=="a") {
      posisiA.push(i)
    }
    else if (numSplit[i]=="b") {
      posisiB.push(i)
    }
}
    for (var i = 0; i < posisiA.length; i++) {
      for (var j = 0; j< posisiB.length; j++) {
          if (posisiB[i]-posisiA[j]<=3 && posisiB[i]-posisiA[j]>1) {
              return true
          }
      }
  }
  return false
}

// TEST CASES
 console.log(checkAB('lane borrowed')); // true
console.log(checkAB('i am sick')); // false
 console.log(checkAB('you are boring')); // true
console.log(checkAB('barbarian')); // true
console.log(checkAB('bacon and meat')); // false
