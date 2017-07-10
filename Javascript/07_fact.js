function fact()
{
	var num = document.getElementById("num").value;
	num = num * fact (num - 1);
	document.write("factorial is : ",num);
		
		
   }
  