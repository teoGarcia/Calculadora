
const op1 = document.getElementById("operador1");
const op2 = document.getElementById("operador2");
const resultado = document.getElementById("resultado");
const signoOperacion = document.getElementById("signoOperacion");
const btnCalcular = document.getElementById("calcular");


btnCalcular.addEventListener('click', calcular);


function calcular(){

    operador = signoOperacion.value;
    const operador1 = parseFloat(op1.value); 
    const operador2 = parseFloat(op2.value); 
    
    if(operador == "+" || operador == "-" || operador == "/" || operador == "*"){

        switch(operador){

            case "+":
                resul = operador1+operador2 ;
                break;

            case "-":
                resul = operador1-operador2 ;
                break;
            case "*":
                resul = operador1*operador2 ;
                break;
            case "/":
                resul = operador1/operador2 ;
                break;          
        }

        resultado.value = resul;

    }else{

        resultado.value = "Debe elegir un signo válido";
    }

}

/*function Prueba(Nom){
    
    console.log("hola pepe y " + Nom);
    Nom = "PAPA";
}

Prueba("TETEDDD");*/