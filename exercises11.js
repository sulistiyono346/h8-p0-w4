function changeMe(arr) {
  var Obj={}
  var tahun = 2018
  for (var i = 0; i < arr.length; i++) {
        var nama=i+1+"."+arr[i][0]+" "+arr[i][1]
        Obj.firstName= arr[i][0];
        Obj.lastName = arr[i][1];
        Obj.gender   = arr[i][2];
        if (arr[i].length<4 || arr [i][3] > tahun) {
          Obj.age="Ivalid Birth Year"
        }
        else {
          Obj.age=tahun-arr[i][3]
        }
        console.log(nama);
        console.log(Obj);
  }
}

changeMe([['Christ', 'Evans', 'Male', 1982], ['Robert', 'Downey', 'Male']]);
changeMe([]); // ""
