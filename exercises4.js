function cariModus(arr) {
  var nilai =[];
  var temp = [];
  for ( var i = 0; i<arr.length; i++){
    var position = nilai.indexOf(arr[i]);
    if(position === -1){
    nilai.push(arr[i]);
    temp.push(1);
    }else { 
      temp[position]++    ;
    }
  }
  var biggestTemp = 0 ;
  for (var j = 0 ; j< temp.length ; j+=1){
    if(temp[j] > biggestTemp){
      biggestTemp = temp[j];
    }
  }
  var biggestPosition = temp.indexOf(biggestTemp);
  if(biggestTemp === 1){
    return -1;
  }else if(nilai.length <= 1 ){
    return -1;
  }else {
  var mode = nilai[biggestPosition]; //
return mode;
}
}

console.log(cariModus([10, 4, 5, 2, 4])); // 4
console.log(cariModus([5, 10, 10, 6, 5])); // 5
console.log(cariModus([10, 3, 1, 2, 5])); // -1
console.log(cariModus([1, 2, 3, 3, 4, 5])); // 3
console.log(cariModus([7, 7, 7, 7, 7])); // -1
