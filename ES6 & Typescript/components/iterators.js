let curno=Symbol();
  class Amstrong { 

      constructor(cur)
      {
          this[curno]=cur;
      }
        
      next() 
    {

        while(!isArmstrong(this[curno])) {
            this[curno] += 1;
        }
        this[curno] += 1;
        return {done: false, value:this[curno] - 1};

     }
   }

function isArmstrong(num) {
    let a = num ;
    let digit=0;
    
    while(a>0)
    {
        digit=digit+1;
        a= Math.floor(a/10);
    }

    a=num;
    let s = 0 ;
    while(a > 0)
    {
        let r = a % 10 ;
        s = s + Math.pow(r,digit)
        a = Math.floor(a / 10) ;
    }
    if(num == s) {
        return true;
    }
    
    else {
        return false;
    }
}


             
export function testSymbol2()
{
  
 let arm= new Amstrong(1)
 console.log("Amstrong no ", arm.next());
console.log("Amstrong no ", arm.next());
console.log("Amstrong no ", arm.next());
console.log("Amstrong no ", arm.next());
console.log("Amstrong no ", arm.next());
console.log("Amstrong no ", arm.next());

console.log("Amstrong no ", arm.next());

console.log("Amstrong no ", arm.next());

console.log("Amstrong no ", arm.next());

console.log("Amstrong no ", arm.next());

console.log("Amstrong no ", arm.next());

console.log("Amstrong no ", arm.next());

console.log("Amstrong no ", arm.next());
console.log("Amstrong no ", arm.next());
console.log("Amstrong no ", arm.next());
console.log("Amstrong no ", arm.next());
console.log("Amstrong no ", arm.next());
console.log("Amstrong no ", arm.next());
console.log("Amstrong no ", arm.next());
console.log("Amstrong no ", arm.next());
console.log("Amstrong no ", arm.next());

}