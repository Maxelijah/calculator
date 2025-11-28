const diplay = document.querySelector(".display")
display.textContent = "1"

function add(num1, num2) {
        return num1 + num2;
      }

      function subtract(num1, num2) {
        return num1 - num2;
      }

      function multiply(num1, num2) {
        return num1 * num2;
      }

      function divide(num1, num2) {
        return Math.round((num1 / num2) * 10) ;
      }

       function operate(num1, num2, symbol) {
        console.log(num1);
        console.log(num2);
        console.log(symbol);

        switch (symbol) {
          case "+":
            return add(num1, num2);
            break;

          case "-":
            return subtract(num1, num2);
            break;

          case "*":
            return multiply(num1, num2);
            break;

          case "/":
            return divide(num1, num2);
            break;
        }
      }

      