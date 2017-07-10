

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

function add()
{
	var i, result = 0 ,t;
	for (i=0;i<data.length;i++) 
	{
		t = parseInt(data[i]);
		result = result + t ;
	}
	document.getElementById('add1').innerHTML="total is: " + result;
	
}

function avg()
{
	var i, result = 0 ,t,average;
	for (i=0;i<data.length;i++) 
	{
		t = parseInt(data[i]);
		result = result + t ;
	}
	average = result / data.length;
	document.getElementById('avg1').innerHTML="avg is: " + average;
	//document.write("avg is :" + average);
}

function maximum(){
	var maxi = data[0];
	for(var i=1;i<data.length;i++){
		if(data[i] > maxi){
			maxi = data[i];
		}
	}
	document.getElementById('max1').innerHTML="max is: " + maxi;
 }
 
 function minimum(){
	var mini = data[0];
	for(var i=1;i<data.length;i++){
		if(data[i] < mini){
			mini = data[i];
		}
	}
	document.getElementById('min1').innerHTML="min is: " + mini;
 }

