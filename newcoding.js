document.getElementById("btn1").onclick = function() {
            let res = 0
            try{
                  let oper = document.querySelector("input[name=oper]:checked").value;
                  let number1 = parseInt(document.getElementById("num1").value);
                  let number2 = parseInt(document.getElementById("num2").value);

                  if(oper == "times") {
                    res = number1 * number2;
                  } else {
                    res = number1 + number2;
                  }
            } catch (e){
                res = "nAN";
            }
            document.getElementById("res").innerHTML = res;
        };
          document.getElementById("btn2").onclick = function() {
            document.getElementById("num1").value = "";
            document.getElementById("num2").value = "";
            document.getElementById("num1").focus();0.
        };