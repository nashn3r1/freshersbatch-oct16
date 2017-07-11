function emp(empid,ename,empsal,deptno)
{
	this.empid = empid;
	this.ename = ename;
	this.empsal = empsal;
	this.deptno = deptnol;
	
}


var  EmployeeList = (function() {
     var  Employee = [];
// exports
     return
	 {
     addemp: function(emp) { Employee.push(emp);},
     getemp: function() { return Employee; },
	 sort : function() {
			
			Employee.sort(function(a,b){ return a.empid - b.empid};
		 
	 }
     }
})();



function test()
{
	var emp1 = new emp(10,"messi",400,1);
	var emp2 = new emp(11,"neymar",300,1);
	var emp3 = new emp(9,"suarez",300,1);
	var emp4 = new emp(4,"rakitic",100,1);
	
	EmployeeList.addemp(emp1);
	EmployeeList.addemp(emp2);
	EmployeeList.addemp(emp3);
	EmployeeList.addemp(emp4);
	
	EmployeeList.sort();
    var arr = EmployeeList.getemp();
	var len = arr.length;
	for ( var i = 0;i<len; i++)
	{
		document.write("empid :" + arr[i].empid);
		document.write("ename:" + arr[i].ename);
		document.write("empsal :" + arr[i].empsal);
		document.write("deptno :" + arr[i].deptno);
	}
}	
	
	
	
	