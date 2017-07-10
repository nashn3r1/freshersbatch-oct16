var data = new Array();
function add_element()
{
	data.push(document.getElementById('t1').value); // adding element to array
	document.getElementById('t1').value=''; // Making the text box blank
	disp();
}

function disp()
{
	var str ='';
	str = "total number of elements are :" + data.length + "<br>";
	for (i=0;i<data.length;i++) 
{ 
str += i + ':'+data[i] + "<br >";  // adding each element with key number to variable
} 

document.getElementById('disp').innerHTML=str; // Display the elements of the array
}

function asc()
{
data.sort(function(a, b){return a-b});
    document.getElementById("asc1").innerHTML ="ascending order is: " + data;	
	
}

function desc()
{
data.sort(function(a, b){return b-a});
    document.getElementById("desc1").innerHTML = "descending order is: " + data;	
	
}