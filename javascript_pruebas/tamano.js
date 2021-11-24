const a = 10000;
const cd = 0;
function contador(a) {
    while (a > 0) {
        a = a / 10 ;
        cd = cd + 1 ;
    }
}
contador(100000);