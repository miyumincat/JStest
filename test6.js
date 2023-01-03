function solution() {
    if(price >= 500000) {
        price / 20;
    } else if(price >= 300000) {
        price / 10;
    } else if (price >= 100000) {
        price / 5;
    }
    return Math.floor(price);
}


