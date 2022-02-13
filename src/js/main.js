function getElement(elementId, withContent = false){
    const element = document.getElementById(elementId);
    return (withContent)? element.textContent : element;
}

function writeOperation(str, rewrite = true){
    let element = getElement('operation')
    if(rewrite){
        element.innerHTML += str;
    }else{
        element.innerHTML = str;
    }

    liveResult();
}

function writeOperator(operator){
    const element = getElement('operation', true);
    const str = element[element.length - 2];

    if(/[0-9]/g.test(element[element.length - 1])){
        writeOperation(operator);
    }

    if(str != operator.trim()){
        deleteItem(3);
        writeOperation(operator);
    }
}

function writeResult(result){
    const element = getElement('result');
    element.innerHTML = result;
}

function deleteItem(space = 1){
    let element = getElement('operation', true);
    let str = element.substring(0, element.length - space);
    writeOperation(str, false);
}

function deleteAll(){
    const operation = getElement('operation');
    operation.innerHTML = '';

    const result = getElement('result');
    result.innerHTML = 0;
}

function getResult(){
    let element = getElement('operation', true);
    writeResult(calc(element));
    deleteItem(getElement('operation', true).length);
}

function liveResult(){
    let element = getElement('operation', true);
    writeResult(calc(element));
}
