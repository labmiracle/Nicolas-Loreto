function sum (arr, n) {

    let suma  = 0;

    for( let i = 0; i <= n - 1; i++){

        if (n > arr.length){
            return 'El parámetro n supera la longitud del parámetro arr'
        }
        else{
            suma += arr[i] 
        }      
    }

    return suma

 }
 sum([1,3,102,7,10], 3)