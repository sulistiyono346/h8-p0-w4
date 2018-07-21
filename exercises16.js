function makanTerusRekursif(waktu) {
  // var time=waktu
  // var count=0
  // for (var i =0; i <time; i=i+15) {
  //   count++
  // }
  // console.log(count);

  var temp = 0

  if (waktu === 0) {
    return 0
  } else if (waktu <= 15) {
    return 1
  } else {
    var sisa = waktu - 15
    temp++
  }
  return temp + makanTerusRekursif(sisa);
}

console.log(makanTerusRekursif(66)); // 5
console.log(makanTerusRekursif(100)); // 7
console.log(makanTerusRekursif(90)); // 6
console.log(makanTerusRekursif(10)); // 1
console.log(makanTerusRekursif(0)); // 0
