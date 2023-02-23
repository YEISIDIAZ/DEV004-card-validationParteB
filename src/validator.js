const validator = {
       
  isValid : (cardNumber) => { //objeto, recibe parametro con cardNumber//
    //4083952015263
    //2538
    //[2,5,3,8]
    //[8,3,5,2]
    const convert = cardNumber.split('').reverse(); //3625102593804
    //El método split() divide un objeto de tipo String en un array (vector) de cadenas
    //El método reverse() invierte el orden de los elementos de un array
    // El primer elemento pasa a ser el último y el último pasa a ser el primero.

     
      

    let sum     = 0; //0, 6
    let n       = 0; //0, 6

    for (let i = 0; i < convert.length; i++) {  //i=1
      
      
      if (i % 2 === 1) { 
        n = (convert[i] * 2); // 12

        if (n >= 10) {

         
          
         n = (n + 10) + 1  // 
        

         
                 
        }

      } else {
        n = (convert[i])   // n= 9
      }

      sum = sum + n  //sum = 9

      
    
    }
      


    return sum % 10 === 0 ? true :false
         
  },



  maskify : (cardNumber) => {
    const arr    = cardNumber.split('');   //arr=[5,3,5,2,6,2]
     
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