function totalDigitRekursif(angka) {
  //   var temp=0
  //   var stringnum=String(angka)
  //   for (var i = 0; i < stringnum.length; i++) {
  //     temp=temp+parseInt(stringnum[i])
  //   }
  //   return temp
  // }

  var tempAngka = String(angka);
  if (tempAngka.length === 1){
    return angka;
  } else {
    var pertama = Number(tempAngka[0]);
    var selisih = tempAngka.slice(1);
    return pertama + totalDigitRekursif (Number(selisih));//
  }
}

// TEST CASES
console.log(totalDigitRekursif(512)); // 8
console.log(totalDigitRekursif(1542)); // 12
console.log(totalDigitRekursif(5)); // 5
console.log(totalDigitRekursif(21)); // 3
console.log(totalDigitRekursif(11111)); // 5
