var myArray = [
    2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12
];  
        var i=0;
    for(arr.myArray[i]; i = myArray.length; i++){
        var flag = true;
 
    // Nếu n bé hơn 2 tức là không phải số nguyên tố
    if (arr.myArray[i] < 2){
        flag = false;
    }
    else if (arr.myArray[i] == 2){
        flag = true;
    }
    else if (arr.myArray[i] % 2 == 0){
      flag = false;
    }
    else{
        // lặp từ 3 tới n-1 với bước nhảy là 2 (i+=2)
        for (var i = 3; i < arr.myArray[i]-1; i+=2)
        {
            if (arr.myArray[i] % i == 0){
                flag = false;
                break;
            }
        }
    }
 
    // Kiểm tra biến flag
    if (flag == true){
       console.log(arr.myArray[i] + 'là số nguyên tố ');
    }
    else{
        console.log(arr.myArray[i] + 'không phải là số nguyên tố ');
    };
    };
