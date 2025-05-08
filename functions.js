
function capitalize(string) {
   return String(string).charAt(0).toUpperCase() + String(string).slice(1)
}


function reverse(string) {
   return string.split('').reverse().join('')
}

function calculator() {

    function sum(a, b) {
       return a + b
    }

    function subtract(a, b) {
        return a - b
    }

    function multiply(a, b) {
        return a * b
    }

    function divide(a, b) {
        if (b === 0) throw new Error('Pick a higher number than 0')
        return a / b
    }

    return {
        sum, subtract, multiply, divide
    }
}
    
   

    function caesarCipher(str, shift) {
         let finalCipher = '';
         let string = str

         for (let i = 0; i < string.length; i++) {
            if (string.charCodeAt(i) <= 90 && string.charCodeAt(i) >= 65) {
               let codes = string.charCodeAt(i)
               let shiftedCode = (codes - 65 + shift) % 26 + 65
               finalCipher += String.fromCharCode(shiftedCode)
            } 
             else if (string.charCodeAt(i) <= 122 && string.charCodeAt(i) >= 97) {
               let codes = string.charCodeAt(i)
               let shiftedCode = (codes - 97 + shift) % 26 + 97
               finalCipher += String.fromCharCode(shiftedCode)
            }
            else {
                finalCipher += string[i]
            }
            
        }
        return finalCipher
    }
   
    function analyzeArray(array) {
        let objectOfValues = {}
       
        let min = array[0];
        let max = array[0];
        let length = array.length
        let sum = 0
        let average;

          for (let i = 0; i < array.length; i++) {

            if(array[i] < min || array[i] === min) {
               min = array[i]
            } 

            if(array[i] > max || array[i] === max) {
                max = array[i]
             }
             sum += array[i]
 
            average = sum / array.length

            }
            objectOfValues.min = min
            objectOfValues.max = max
            objectOfValues.length = length
            objectOfValues.average = average

            return objectOfValues
        } 
    




    module.exports = { 
       
        capitalize,
        reverse, 
        calculator: calculator(),
        caesarCipher,
        analyzeArray

    }

