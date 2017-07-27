export class account {
    constructor (id,name,bal){
        this.accid = id;
        this.accname = name;
        this.bal=bal;
    }

            toString () {
                        return `${this.accname} | ${this.accid} | ${this.bal}`
                         }

            print () {
                        console.log( this.toString() );
                    }
        getbalance(){
            return this.bal;
        }
}



class savings extends account{

    constructor(id,name,bal,interest){
        super(id,name,bal);
        this.interest = interest;
        
    }
    getbalance(){
            return super.getbalance() + this.interest;
        }
}

class current extends account{

    constructor(id,name,bal,cashcredit){
        super(id,name,bal);
        this.cashcredit = cashcredit;
        
    }
    getbalance(){
            return super.getbalance() + this.cashcredit;
        }
    
}




export function testaccount()
{
var accounts=[];
var savaccount1 = new savings('s1','Ninad',2000,2000);
accounts.push(savaccount1);
var savaccount2 = new savings('s2','Nikhil',3000,2000);
accounts.push(savaccount2);
var savaccount3 = new savings('s3','Nitin',4000,2000);
accounts.push(savaccount3);

var curaccount1 = new current('c1','Ninad',2000,2000);
accounts.push(curaccount1);
var curaccount2 = new current('c2','Nikhil',3000,2000);
accounts.push(curaccount2);
var curaccount3 = new current('c3','Nitin',4000,2000);
accounts.push(curaccount3);
console.log(accounts);
var cash = getTotalcashBank(accounts);
console.log('total cash in bank:',cash);
}


function getTotalcashBank(accounts)
{
    var total=0;
    accounts.forEach (function (acc){
          total = total + acc.getbalance();

    }
    )
       
    return total;
}