import validator from './validator.js';

let cardNumber = "";   // asignamos a la variable un vacio
   
const btnValidar = document.getElementById("btnValidar"); // asignamos a la variable true o false
 
const btnInicio = document.getElementById("btnInicio"); // asignamos a la variable true o false 
  
   
btnValidar.addEventListener("click", () => {                               // si hago clic en el boton, ejecuto la funcion 
   
  cardNumber = document.getElementById("cardNumber").value;


  const validation = validator.isValid(cardNumber);   //true
  

  const maskify = validator.maskify(cardNumber);   //string=[#,#,5,8,6,8]
   


   




  

   
  if(cardNumber.length < 13 || cardNumber.length > 16){
    alert("Ingresa un número de tarjeta válido.");   
  }else if(cardNumber === 0){
    alert("Ingresa un número de tarjeta válido.");

  }else if(validation===true){
                       
                          
                           
    alert("Tarjeta " + maskify + " válida.");
                           
    document.getElementById("resultado").style.display = "block";
                              
                          
                          
  }else {
    alert("Tarjeta "+ maskify + " inválida.")
  }


});

btnInicio.addEventListener("click", ()=>{ // si hago clic en el boton voy a inicio.
  document.getElementById("resultado").style.display = "none"; //ocultar
  document.getElementById("validador").style.display = "block";   //mostrar
});
//5352621771856289                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         