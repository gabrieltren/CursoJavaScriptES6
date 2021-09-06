// in
something in somethingItems

// Arrays
var arvores = new Array("pau-brasil", "loureiro", "cedro", "carvalho", "sicômoro");
0 in arvores;               // retorna true
3 in arvores;               // retorna true
6 in arvores;               // retorna false 

"cedro" in arvores;         // retorna false (deve-se especificar o numero do indice,
                            // não o valor naquele indice)
"length" in arvores;        // retorna true (length é uma propriedade de Array)                        

// Objetos predefinidos
"PI" in Math;               // retorna true
var minhaString = new String("coral");
"length" in minhaString;    // retorna true


// Objetos presonalizados
var meucarro = {marca: "Honda", modelo: "Accord", ano: 1998};
"marca" in meucarro;        // retorna true
"modelo" in meucarro;       // retorna true


// instaceof
objeto instanceof tipoObjeto

var dia= new Date(2021, 09, 06);

if (dia instanceof Date){
    // code here
}