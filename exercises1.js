console.log("1. Solve Problems array  angkaPrima(angka)");
function angkaPrima(angka) {
var hasil=""
  for (var i=2; i<=angka; i++){

  if(i>=2){

     hasil=true;
     for(var j=2; j<i; j++){

        if(i%j===0){

           hasil=false;
        }
     }
  }
}
return hasil;
}

// TEST CASES
// console.log(angkaPrima(3)); // true
// console.log(angkaPrima(7)); // true
console.log(angkaPrima(6)); // false
// console.log(angkaPrima(23)); // true
// console.log(angkaPrima(33)); // false

versi kedua
function angkaPrima(angka) {
var hasil=0
for (var i = 1; i <= angka; i++) {
    if (angka % i ==0) {
      hasil+=1
    }
}
if (hasil >2) {
  return false
}
return true
}

// TEST CASES
 console.log(angkaPrima(3)); // true
 console.log(angkaPrima(7)); // true
 console.log(angkaPrima(6)); // false
 console.log(angkaPrima(23)); // true
 console.log(angkaPrima(33)); // false
