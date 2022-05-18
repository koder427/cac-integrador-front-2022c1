const btnResumen = document.getElementById("btnResumen"); 
const btnBorrar = document.getElementById("btnBorrar");
const aPagar = document.getElementById("aPagar");
const categoria = document.getElementById("categoria");;
const cantidad = document.getElementById("cantidad")
const valorBase = 200;

btnResumen.onclick= handlerResumen;

btnBorrar.onclick= handlerBorrar;

function handlerResumen(evt){  
    let num = parseInt(cantidad.value);
    let descuento = descuento_ticket();

    if(isNaN(cantidad.value)){
        console.log("cantidad no es un numero");
        handlerBorrar();
        return;
    }

    if(num > 0){
       aPagar.innerText= "Total a pagar: $"+ (valorBase * descuento_ticket() * num) ;
    }else{

        console.log("Cantidad error.")
        handlerBorrar();
    }
    
}

function handlerBorrar(){
    aPagar.innerText= "Total a pagar: $"
}

function descuento_ticket(){
    if (categoria.value == "Estudiante"){
        return 0.2;
    }
    else if (categoria.value == "Trainee"){
        return 0.5;
    }
    return 0.85;

}