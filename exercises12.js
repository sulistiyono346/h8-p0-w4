function shoppingTime(memberId, money) {
  var Obj={}
  Obj.memberId=memberId
  Obj.money   =money
  if (memberId==="") {
    return("Mohon maaf, toko X hanya berlaku untuk member saja");
  }
  else if (money<50000) {
    return("Mohon maaf, uang tidak cukup");
  }
  else if (money>=50000) {
    var a=0,b=0,c=0,d=0,e=0,z=0
    var listPurchased=[]
    while(money>=50000 && z===0){
      if (money>=1500000 && a === 0) {
          money=money-1500000
          listPurchased.push("Sepatu Stacattu")
          a+=1
      }else if (money>=500000 && b === 0) {
        money=money-500000
        listPurchased.push("Baju brand Zoro")
        b+=1
      }else if (money>=250000 && c === 0) {
        money=money-250000
        listPurchased.push("Baju brand H&N")
        c+=1
      }else if (money>=175000 && d === 0) {
        money=money-175000
        listPurchased.push("Sweater brand Uniklooh")
        d+=1
      }else if (money>= 50000 && e === 0) {
        money=money-50000
        listPurchased.push("Casing Handphone")
        e+=1
        z+=1
      }
    }
    Obj.listPurchased=listPurchased
    Obj.changeMoney =money
  }
  if (Obj.memberId===undefined && Obj.money===undefined ) {
    return("Mohon maaf, toko X hanya berlaku untuk member saja");
  }else {
    return(Obj)
  }
}

console.log(shoppingTime('1820RzKrnWn08', 2475000));
console.log(shoppingTime('82Ku8Ma742', 170000));
console.log(shoppingTime('', 2475000));
console.log(shoppingTime('234JdhweRxa53', 15000));
console.log(shoppingTime());
