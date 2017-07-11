//version 1

var BankAccount = {
			accNo:"12345", 
			accbal:"50000", 
			accName:"Leo Messi" ,
			amt :"10000",
			dep:"10000",
			
			withdraw : function(amt){
			accbal=  parseInt(BankAccount.accbal) - parseInt(BankAccount.amt);
			document.getElementById("demo").innerHTML="new balance is after withdrawal:" +accbal;
			//document.write("accbal is : " + accbal);
			} ,
			
			
			deposit : function(dep){
			accbal=  parseInt(BankAccount.accbal) + parseInt(BankAccount.dep);
			document.getElementById("demo1").innerHTML="new balance is after deposit :" + accbal;
			//document.write("accbal is : " + accbal);
			}
			
};

//version 2

function account (accName,accNo,accbal)
{
	this.accName = accName;
	this.accNo = accNo;
	this.accbal = accbal;
	
	this.withdraw = function(amt){
		accbal=  parseInt(accbal) - parseInt(amt);
		document.getElementById("demo2").innerHTML="new balance is after version 2:" +accbal;
	};
	
	this.deposit = function(dep){
			accbal=  parseInt(accbal) + parseInt(dep);
			document.getElementById("demo3").innerHTML="new balance is after version 2 :" + accbal;
			//document.write("accbal is : " + accbal);
	};
	
}

function test ()
{
	var keg = new account("admin" , "123456" ,"2000");
	keg.withdraw("1500");
	keg.deposit("1500");

}


//version 3

var test2 = {
  accNo: "Unknown",
  accbal :0,
  accName :"Unknown",
  withdraw : function(amt)
  {
	  accbal=  parseInt(this.accbal) - parseInt(amt);
		document.getElementById("demo4").innerHTML="new balance is :" +accbal;
  },
  
  deposit : function (dep)
  {
	  accbal=  parseInt(this.accbal) + parseInt(dep);
			document.getElementById("demo5").innerHTML="new balance is :" + accbal;
  }
}

function testbank()
{
	
var two = Object.create(test2);

two.accNo= "12345";
two.accbal="200";
two.accName ="admin";
two.withdraw(200);
two.deposit(200);
}
// version basic modular pattern
function modular(){
	var object = new Keg ("12345","800","admin");
	object.withdraw(300);
	object.deposit(400);
	}

function Keg(_accNo, _accbal,_accName) 
{
// private members
	var aNo = _accNo;
	var abal = _accbal;
	var aName = _accName;
	var obj=
	{
		withdraw : function (amt) {
		abal = parseInt(abal) - parseInt(amt);
		document.getElementById("demo6").innerHTML="new balance is after basic modular pattern :" + abal;
		},
	
		deposit : function (dep) {
		abal = parseInt(abal) + parseInt(dep);
		document.getElementById("demo7").innerHTML="new balance is after basic modular pattern :" + abal;
		}
	};
// public methods
	return obj;
}


//version using prototype
function prot(){
	var object = new proto ("12345","300","admin");
	object.withdraw(100);
	object.deposit(400);
	}

function proto(accNo,accbal,accName){
	this.accNo =accNo;
	this.accbal = accbal;
	this.accName = accName;	
}

proto.prototype.withdraw = function(amt)
{
	accbal = parseInt(this.accbal) - parseInt(amt);
		document.getElementById("demo8").innerHTML="new balance is after using prototyoe :" + accbal;
};

proto.prototype.deposit = function(dep)
{
	accbal = parseInt(this.accbal) - parseInt(dep);
		document.getElementById("demo9").innerHTML="new balance is after using prototyoe :" + accbal;
};