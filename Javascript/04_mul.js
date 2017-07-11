var temp = 0;
function div(){
	   var num = prompt("Please enter your number","");
		temp = temp + 1;
		for( i = 1; i <= 10 ; i++)
		{
			
			document.write(" num * ", i , " = " , num * i,"<br>")	
		}
		
			document.writeln("<button id = 'bid"+temp+"'> Do you want to continue ? </button> <br></br>");
			document.getElementById("bid"+temp).onclick = function() {show_confirm()}
	   
		
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