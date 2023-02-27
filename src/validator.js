const validator = {

  isValid: (cardNumber) => { //objeto, recibe parametro con cardNumber//


    let sum = 0;
    const nDigitos = cardNumber.length; //16       
    const nValidados = nDigitos % 2; //16%2 = 0  5352621771856289

    for (let i = 0; i < nDigitos; i++) {   //i=2
      let digitos = +cardNumber[i];    //digitos = 8
           console.log('el numero en la posicion : ' + i + " es : " + cardNumber[i])
      if (i % 2 === nValidados)  // (1   ====     0)     
          digitos *= 2;     //  digitos *= 2----    digitos=  10                                ///  10 3 10
          console.log('la multiplicacion x 2 en la iteraccion: ' + i + " : " + digitos)
      if (digitos > 9)  
        digitos -= 9;    ///  digitos = 1                                                   ///  1   3   1 
       console.log('la resta con el 9 en la iteraccion: ' + i + " : " + digitos)
       //console.log('digitos mayores de 9 ' + digitos)
      sum += digitos;  // 4                                   /// 1 4 5 
      console.log('la suma en la iteraccion: ' + i + " : " + sum)
    }
    console.log('la suma total ' + sum)
    return (sum % 10 === 0);  
    
    
  },


  maskify: (cardNumber) => {
    const arr = cardNumber.split('');   //arr=[5,3,5,2,6,2]

    let string = '';

    for (let i = 0; i < arr.length; i++) { //i=6
      if (i < arr.length - 4) {  //6-4 = 2
        string = string + '#';   // string=[#,#  ]

      } else {
        string = string + arr[i];  //string=[#,#,5,8,6,8]
      }
    }


    return string;
  }
}

export default validator;

//5352621771856289


// 5352621771856289 -->
// 4083952015263 -->
//debería retornar true para "4083952015263" (25 ms) -->
//debería retornar true para "79927398713" (13 ms) -->