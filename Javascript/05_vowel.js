function vowel(){
		alpha = document.getElementById("alphabet").value;
		if(alpha == "a" ||alpha == "e" || alpha == "i" ||alpha == "o" ||alpha == "u" || alpha == "A" ||alpha == "E" ||alpha == "I" ||alpha == "O" ||alpha == "U")
		{
			document.getElementById("placeholder").innerHTML = "alphabet is a vowel";

		}
		else
		{
		
		document.getElementById("placeholder").innerHTML = "alphabet is a consonant";
		}
   }