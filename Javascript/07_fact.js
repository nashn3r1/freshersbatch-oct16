function fact()
{
	var num = parseInt(document.getElementById("num").value);
	var i , f = 1;
	for( i=1;i<=num;i++)
	{
		f = f * i;
	}
		
	document.write("factorial is: " + f);
		
   }
  