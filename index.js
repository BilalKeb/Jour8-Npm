
    function calculate (number1, number2,operateur){
        if(operateur === "+"){
          console.log(number1 + number2)
         }else if(operateur === "-"){
          console.log(number1 - number2)
         }else if (operateur === "x"){
          console.log(number1 * number2)
         }else if(operateur === "/"){
          console.log(number1 / number2)
         }else if(operateur === "%"){
          console.log(number1 % number2)
         } else {
             console.log("error")
         }
      
      } 
      
      var parametres = process.argv.slice(2)
      console.log(parametres);
      var parametre1 = Number(parametres[0])
      var parametre2 = Number(parametres[1])
      var parametre3 = parametres[2]
      
      calculate(parametre1,parametre2, parametre3)
      console.log(5 + 10)

      






