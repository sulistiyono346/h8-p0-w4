console.log("1. Solve Problems array  angkaPrima(angka)");

  function fpb(angka1, angka2) {
    var temp = [];
      for (i = 0; i<angka2; i++){
        if (angka1 % [i] === 0 && angka2 %[i] === 0){
          temp = i;
        }
        }
        return temp;
  }

  // TEST CASES
  console.log(fpb(12, 16)); // 4
  console.log(fpb(50, 40)); // 10
  console.log(fpb(22, 99)); // 11
  console.log(fpb(24, 36)); // 12
  console.log(fpb(17, 23)); // 1
