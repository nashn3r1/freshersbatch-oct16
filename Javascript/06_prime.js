function prime(){
		var num1 = parseInt(document.getElementById("num1").value);
		var num2 = parseInt(document.getElementById("num2").value);
		   document.write("numbers are :" + num1 +" And "+ num2+"<br>");
		var temp = 2 , flag = 1 , count =0 ;

		for(i = num1 ; i <= num2 ;i++){
			temp=2 , flag=1;
			while(temp < i){
				if(i%temp == 0){
					flag = 0;
					break;
				}
			 
				temp ++;
			}
			if( flag== 1){
				count ++;
				document.writeln("prime number is : ",i , "<br>");
                  
			}
           

		}
		
 		document.write("total =",count);
  
}