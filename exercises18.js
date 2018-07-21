function kaliTerusRekursif(angka) {
  var arrAngka = angka.toString();
  if (arrAngka.length === 1) {
    return Number(angka);
  } else {
    var total = 1;
    for (var i = 0; i < arrAngka.length; i++) {
      total = total * Number(arrAngka[i]);
    }
    return kaliTerusRekursif(total);
  }
}

// TEST CASES
console.log(kaliTerusRekursif(66)); // 8
console.log(kaliTerusRekursif(3)); // 3
console.log(kaliTerusRekursif(24)); // 8
console.log(kaliTerusRekursif(654)); // 0
console.log(kaliTerusRekursif(1231)); // 6
