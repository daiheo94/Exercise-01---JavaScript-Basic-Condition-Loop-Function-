
var n = prompt("mời bạn nhập từ bàn phím");
var nDaoNguoc=0;
for(;n != 0; n /= 10) {
    var digit = n % 10;
    nDaoNguoc = nDaoNguoc * 10 + digit;
  }
  if(n == nDaoNguoc){
    console.log(n+ " là số đối xứng!!");
  }

  else{
    console.log(n+ " không phải là số đối xứng!!");
  }
