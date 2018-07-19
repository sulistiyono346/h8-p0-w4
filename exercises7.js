function digitPerkalianMinimum(angka) {
  var hasil=[]
  var final=[]
  var pembanding=0;
  for (var i = 1 ; i <=angka ; i++) {
    if (angka%[i]===0) {
      hasil.push(angka/[i]+[i])
      final.push(hasil)
      hasil=[]
    }
  }
  var min = final[0][0].length
  //console.log("ini min", min)
  for (var j = 1; j< final.length; j++) {
    if ( final[j][0].length < min ){
      min = final[j][0].length
    }
  }
  return min
}

// TEST CASES

 console.log(digitPerkalianMinimum(24)); // 2
 console.log(digitPerkalianMinimum(90)); // 3
 console.log(digitPerkalianMinimum(20)); // 2
 console.log(digitPerkalianMinimum(179)); // 4
 console.log(digitPerkalianMinimum(1)); // 2
