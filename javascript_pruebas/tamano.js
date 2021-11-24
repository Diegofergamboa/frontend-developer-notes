function contador(a) {
    while (a.length >= 0) {
        let cd = 0 ;
        cd = cd + 1;
        console.log(a);
        a = a / 10 ;
        console.log(cd);
    }
}
contador(100000);