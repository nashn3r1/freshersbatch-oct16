function div(){
		num1 = document.getElementById("num1").value;
		num2 = document.getElementById("num2").value;
		if(num2 == 0)
		{
			alert("Denominator cannot be 0");

		}
		else{
		div = num1 / num2;
		document.write("the answer is:",div);
		}
   }