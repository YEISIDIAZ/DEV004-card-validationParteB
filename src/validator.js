const validator = {
       
  isValid : (cardNumber) => { //objeto, recibe parametro con cardNumber//

    //2538
    //[2,5,3,8]
    //[8,3,5,2]
      let convert = cardNumber.split('').reverse();
      //El método split() divide un objeto de tipo String en un array (vector) de cadenas
      //El método reverse() invierte el orden de los elementos de un array
      // El primer elemento pasa a ser el último y el último pasa a ser el primero.

      console.log("variable convert del validator.js  --->  " + convert)
      

      let sum     = 0;
      let n       = 0;

      for (let i = 0; i < convert.length; i++) {  
        //i=4
                                // posiciones de la variable
         //console.log("entro al for del validator.js ")

          if (i % 2 === 1) {
              n = (convert[i] * 2); //

              //8*2
              //n=16

              if (n >= 10) {
                  n = (n + 10) + 1  //27
                  console.log("VALOR DE LA N en el >10 = " + n)
              }
          } else {
              n = (convert[i])   // n= 9
          }

          sum = sum + n  //sum = 9

          let sump = sum;
          console.log("VALOR DE LA N = " + n)
          console.log("VALOR DE LA TARJETA EN NUMEROS = " + sump)

          //i++
       }
       console.log("aqui abajo resultado vector suma**************")
    console.log(sum)
     return sum % 10 === 0 ? true :false
         
  },



  maskify : (cardNumber) => {
      let arr    = cardNumber.split('');   //arr=[5,3,5,2,6,2]
      //El método split() divide un objeto de tipo String en un array (vector) de cadenas
      let string = '';

      for (let i = 0; i < arr.length; i++) { //i=6
          if (i < arr.length - 4) {  //6-4 = 2
              string = string + '#';   // string=[#,#,  ]
              
          } else {
              string = string + arr[i];  //string=[#,#,5,2,6,2]
          }
      }
      console.log("el string es=== " + string)

      return string;
  }
}

export default validator;
//5352621771856289   