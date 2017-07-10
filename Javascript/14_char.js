function count()
{
 var str =document.getElementById("sent").value;
 var len=str.length;
 var count = 0 , res;
  for(i = 0;i< len ; i++)
   {
	 res = str.charAt(i);
	 count++;
 
   }
document.getElementById("demo").innerHTML="total characters are :" + count; 
}