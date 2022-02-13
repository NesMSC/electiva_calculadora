function looseJsonParse() {
    let calculo =  Function('return (2*6.2)');

    return calculo();
}
console.log(looseJsonParse())