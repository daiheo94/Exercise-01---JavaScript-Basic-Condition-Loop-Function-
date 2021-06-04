var tong=0;
var n = prompt("mời bạn nhập từ bàn phím");
n = Number(n);
for (var i =1; i<=n ; i++){
    if (n%i==0){
        tong=tong+i;
    }
}
if (tong == n){
    console.log( n + 'la so hoan hao')
}
else{
    console.log( n + ' k la so hoan hao')
}