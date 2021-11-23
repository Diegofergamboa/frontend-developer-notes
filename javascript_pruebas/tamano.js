function length(a) {
    while (a >= 0 || a <= 0) {
        let contador = 0 ;
        console.log(a);
        a = a / 10
        contador =+ 1;
        console.log(contador);
    }
    
}
length(1000);