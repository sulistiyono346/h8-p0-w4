function ubahHuruf(kata) {
 var tampung = [];
 var alphabet = ('abcdefghijklmnopqrstuvwxyz');
   for (var j = 0; j<kata.length; j++){
     tampung.push(alphabet[alphabet.indexOf(kata[j])+1]);
 } return tampung.join("");
}


// TEST CASES
console.log(ubahHuruf('wow')); // xpx
console.log(ubahHuruf('developer')); // efwfmpqfs
console.log(ubahHuruf('javascript')); // kbwbtdsjqu
console.log(ubahHuruf('keren')); // lfsfo
console.log(ubahHuruf('semangat')); // tfnbohbu

cara kedua
function ubahHuruf(kata) {
 var tampung =[];
 var alphabet = ('abcdefghijklmnopqrstuvwxyz');
  for (var i = 0; i < kata.length; i++) {
    for (var j = 0; j< alphabet.length; j++) {
      if (kata[i]===alphabet[j]) {
          tampung.push(alphabet[j+1])
      }
    }
  }
  return tampung.join("")
}


// TEST CASES
console.log(ubahHuruf('wow')); // xpx
 console.log(ubahHuruf('developer')); // efwfmpqfs
  console.log(ubahHuruf('javascript')); // kbwbtdsjqu
console.log(ubahHuruf('keren')); // lfsfo
console.log(ubahHuruf('semangat')); // tfnbohbu
