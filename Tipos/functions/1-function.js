function fn(){
    return 'Code here'
}

const arrowFn = () => 'Code Here';
const arrowFn2 = () =>{
    // Mais uma expressao
    return 'Code Here';
}

// Funçoes tambem são objetos
fn.prop = 'Posso criar propriedades';

console.log(fn());
console.log(fn.prop);

// Receber parametros
const logValue = value => console.log(value);
const logFnResult = fnParam => console.log(fnParam());

logFnResult(fn);

// Receber e retornar funcoes
const controlFnExec = fnParam => allowed => {
    if (allowed){
        fnParam();
    }
}

const handleFnExecution = controlFnExec(fn);

handleFnExecution(true); // Executarar a funçao fn
handleFnExecution(); // Nao executara a funcao fn

// controlFnExec como funcao
function controlFnExec(fnParam){
    return function(allowed){
        if(allowed){
            fnParam();
        }
    }
}
