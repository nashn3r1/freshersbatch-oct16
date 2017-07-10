


var attempt = 3; 
function check(){
	var username = document.getElementById("username").value;
	var password = document.getElementById("password").value;
	if ( username == "ninad" && password == "ninad")
	{
	alert ("Login successfully");
	
	
	}
	else
	{
	attempt --;
	alert("You have left "+attempt+" attempt;");
	
	if( attempt == 0)
		{
			document.getElementById("username").disabled = true;
			document.getElementById("password").disabled = true;
			document.getElementById("submit").disabled = true;
			return false;
		}
	}
}

