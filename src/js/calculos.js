function calc(operation){
    return Function(`return (${operation})`)();
}