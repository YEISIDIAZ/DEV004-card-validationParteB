import validator from './validator.js';

    let cardNumber = "";   // asignamos a la variable un vacio
   
    let btnValidar = document.getElementById("btnValidar"); // asignamos a la variable true o false
 
    let btnInicio = document.getElementById("btnInicio"); // asignamos a la variable true o false 
  
   
    btnValidar.addEventListener("click", () => {                               // si hago clic en el boton, ejecuto la funcion 
   
    cardNumber = document.getElementById("cardNumber").value;
    console.log("var cardNumber del index.js es = " + cardNumber); // concatenacion
    //console.log("variable cardNUmber del index.js: " + cardNumber)
    
    let validation = validator.isValid(cardNumber);
    console.log("variable validation del index.js: " + validation)

    let maskify = validator.maskify(cardNumber);
    console.log("variable MASKIFY del index.js: " + maskify)


    //let mostrarTC = maskify;
    // console.log("variable MOSTRAR del index.js: " + mostrarTC)
    // const mostrarTC = element.innerHTML;
    // document.getElementById("cardNumber").value = maskify.innerHTML; 

    let newCardNumber= Number(cardNumber);
    console.log("NUEVA variable NUMBER del index.js: " + newCardNumber)

   
        if(cardNumber.length < 13 || cardNumber.length > 16){
            alert("Ingresa un número de tarjeta válido.");
            }else if(cardNumber === 0){
                alert("Ingresa un número de tarjeta válido.");

                    }else if(validation===true){
                        //document.getElementById('cardNumber').style.display = 'none';
                            console.log(" entramos a maskify-------")
                           
                            alert("Tarjeta " + maskify + " válida.");
                           
                              document.getElementById("resultado").style.display = "block";
                            
                          
                          
                    }else {
                             alert("Tarjeta "+ maskify + " inválida.")
                         }


 });

btnInicio.addEventListener("click", ()=>{ // si hago clic en el boton voy a inicio.
     document.getElementById("resultado").style.display = "none";
     document.getElementById("validador").style.display = "block";
});
//5352621771856289                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         