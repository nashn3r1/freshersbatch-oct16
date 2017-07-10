function remove()
{
 var str =document.getElementById("sent").value;
 str = str.replace(/\s/g,'');
   document.getElementById("demo1").innerHTML="sentence is :" + str;
}