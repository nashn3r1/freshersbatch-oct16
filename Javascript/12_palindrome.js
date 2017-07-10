function palin()
{
 var temp = "";
 var str =document.getElementById("sent").value;
  var i = str.length , j;
 for (j= i;j >=0;j--)
	{
	 temp = temp + str.charAt(j);
	 
	}
 
 if(str == temp)
	{
	 document.getElementById('demo').innerHTML= "String is palindrome :"+ str; 
	}
else
	{
	 document.getElementById('demo1').innerHTML= "String is not a palindrome:" + str; 
	}
}