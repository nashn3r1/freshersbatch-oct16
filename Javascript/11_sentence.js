function vowels()
{
 var str =document.getElementById("sent").value;
 
 document.getElementById('demo1').innerHTML ="sentence is:"+ str;
// document.write("sentence is: " + str);
var j,res , len = str.length, a = 0,e=0,i=0,o=0,u=0;
 for (j=0;j<=len;j++)
 {
	 res = str.charAt(j);
	 if( res == "a" || res == "A")
	 {
		 a++;
	 }
	 else if( res == "e" || res == "E")
	 {
		 e++;
	 }
	 else if( res == "i" || res == "I")
	 {
		 i++;
	 }
	 else if( res == "o" || res == "O")
	 {
		 o++;
	 }
	 else if( res == "u" || res == "U")
	 {
		 u++;
	 }
	 
	 
 }
 document.getElementById('demo').innerHTML= "a : " + a + " e :" + e + " i :" + i + " o :" + o + " u : "+u;

}