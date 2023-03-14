let opDos = 0
let muestra=""
let monto = 0
let tiempo = 0
let repregunta = 0

// FUNCION SALUDO
function saludo(a){
    alert("Hola " + a + "\nBienvenido al sistema de calculos de plazos fijos")
}

// FUNCION PORCENTAJES DE GANANCIA
function porcentaje(var1){
    if(var1==1){
        return 4
    }else if(var1==2){
        return 5
    }else if(var1==3){
        return 6
    }else{
        return 7
    }
}

// FUNCION GENERACION DE VARIABLE DE PORCENTAJE
function transPorcen(var1){return (var1/100)}

// FUNCION DE CALCULO DE GANANCIA
function ganancia(var1 , var2){ return (var1 * (1 + var2))}

let nombre = prompt("Ingrese su nombre")
saludo(nombre)

do{
    // QUIERE REALIZAR UN CONSULTA DE PLAZO FIJO
    do{
        if(repregunta==0){
            opUno = prompt("¿Desea calcular la ganancia de un plazo fijo? si / no")
            if(opUno!="si" && opUno!="no"){
                alert("¡El valor ingresado es erroneo, intente nuevamente!")
            }
        }else{
            opUno = prompt("¿Desea calcular la ganancia de un nuevo plazo fijo? si / no")
            if(opUno!="si" && opUno!="no"){
                alert("¡El valor ingresado es erroneo, intente nuevamente!")
            }
        }
    }while(opUno!="si" && opUno!="no")

    repregunta = 1

    if(opUno=="si"){
        
        //INGRESO DE MONTO A INVERTIR
        do{ 
            monto = Number(prompt("Ingrese el monto a invertir"))
            if(monto<=0 || isNaN(monto)){
                alert("El monto ingresado no es correcto, intentelo nuevamente")
            }
        }while(monto<=0 || isNaN(monto))

        //INGRESO DE TIEMPO A INVERTIR
        do{
            tiempo = Number(prompt("Ingrese la cantidad de meses a invertir"))
            if(tiempo<=0 || isNaN(tiempo)){
                alert("El monto ingresado no es correcto, intentelo nuevamente")
            }
        }while(tiempo<=0 || isNaN(tiempo))
             
        // INGRESO DE OPCION DE BANCO
        do{
            opDos = Number(prompt("Marque la opcion que desea igresar:\n1 - Banco ICBC\t TEA=4%\n2 - Banco HSBC\t TEA=5%\n3 - Banco Macro\t TEA=6%\n4 - Banco Nacion\t TEA=7%"))
            if(opDos>=5 || opDos<=0 || isNaN(opDos)){
                alert("El valor ingresado no es correcto, intentelo nuevamente")
            }

        }while(opDos>=5 || opDos<=0 || isNaN(opDos))
        
        let banco = porcentaje(opDos)
        let total = monto

        //CALCULO DE LAS GANANCIA POR MES DE UN BANCO
        for(i=1;i<=tiempo;i++){
            total = ganancia(total,transPorcen(banco)).toFixed(2)        
            muestra = muestra + "El mes " + i + " se logra una ganancia de: " + total + " $\n"
        }
        alert (muestra)
        }
        muestra=""

}while(opUno!="no")

alert("Espero que le haya sido de utilidad la plataforma de simulacion,\n nos vemos " + nombre)