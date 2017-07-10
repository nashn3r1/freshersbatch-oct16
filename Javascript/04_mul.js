function div(){
	   var num = prompt("Please enter your number","");
		
		for( i = 1; i <= 10 ; i++)
		{
			
			document.write(" num * ", i , " = " , num * i,"<br>")	
		}
            document.writeln("<button id = 'bid'> do you want to continue </button> <br></br>");
			document.getElementById("bid").onclick = function() {show_confirm()}
   }
  
   
   function show_confirm()
   {
	   var r=confirm("do you want to continue with another number?");
	   if (r==true)
	   {
		   document.write("you pressed yes  <br> </br>");
		   div();
		   }
		   else
		   {
			   document.write("You pressed Cancel! <br> </br>");
			   }
			   }