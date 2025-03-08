//maneira antiga de armazenar valores em variavel
var myVariable = "Hello World";
 console.log(myVariable);


 //Variaveis e tipos de dados:

 var myNumber = 10;
 console.log( myNumber);

 console.log(myNumber + 5);


 //metedodo para identificar tipo de dado TYPEOF
 console.log(typeof myNumber);

 var myBoolean = true;
 var myArray = [];
 var myObject = {};
 var myNull = null;
 var myUndefined = undefined;


 console.log(typeof myBoolean);
 console.log(typeof myArray);
 console.log(typeof myObject);
 console.log(typeof myNull);
 console.log(typeof myUndefined);


// maneira atual de definir variavel
//let & const
// de maneira geral devemos utilizar mais o const, para evitar erros 


let x = 30;
const y = 90;


//operador de comparacao
console.log(x==y);

console.log("5" == 5);
console.log("5" === 5);

// novamente de maneira geral utilizaremos "===" devido a menor incidencia de erros 
//aqui acima teremos resultados diferentes, pois um operador traz a igualdade restrita e o ooutro apenas a nominal.



//OPREADORES LOGICOS
//AND "&&"
//OR  "||"


console.log(5>6 && 7<6);
console.log(5>6 || 7<6);


//conversao de tipos

const myNumber2 = "123";

const myConvertedNumber = Number(myNumber2);
console.log(myConvertedNumber);


//estrutura de condicao 

const age = 20

if(age < 10){
    console.log("Kid")
}else if(age < 16){
    console.log("teeneger")
}else {
    console.log("Adult")
};


// SWITCH

const fruit = "Apple";

switch(fruit){
    case "Apple":
        console.log("Apple is the fruit");
        break;
    
    case "Banana":
        console.log("Banana is the fruit");
        break;

    default:
        console.log("fruit not found");
};


//estruturas de repeticao

/* aqui vamos ver as 3 principais, FOR / WHILE e DO WHILE, ja adianto que ao longo do tempo o FOR se faz mais efocoente*/

//for
for (let i = 0; i<10; i++){
    console.log("The variable value is "+ i);
}

//while
 let k =0;
 while(k < 5){
    console.log("value"+ k );
    k++;

 }


 //do while

 let j = 0;

 do{
    console.log("j value is " = j);
    j++;

 }while(j<5);



 //Funcoes



 



















