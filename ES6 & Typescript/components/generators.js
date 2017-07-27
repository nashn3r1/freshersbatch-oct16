
function* isArmstrong() {
    let num = 1;
    for(;;num++)
    {
    let a = num ;
    let digit=0;
    
    while(a>0)
    {
        digit=digit+1;
        a= Math.floor(a/10);
    }

    if(digit<4){
    a=num;
    let s = 0 ;
    while(a > 0)
    {
        let r = a % 10 ;
        s = s + Math.pow(r,digit)
        a = Math.floor(a / 10) ;
        
    }
    if(num == s) {
       var reset = yield (num);
       if(reset){
        num = 0;
    }
    }
    }
    else {
        let reset = true;
        if(reset){
        num = 0;
    }
     yield("the number has to be less than 1000");
         
    }
    

    }

}
             
export function testSymbol3()
{
  
 let arm= isArmstrong();
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
console.log("Amstrong no ", arm.next());
console.log("Amstrong no ", arm.next());
console.log("Amstrong no ", arm.next());
console.log("Amstrong no ", arm.next());
console.log("Amstrong no ", arm.next());
console.log("Amstrong no ", arm.next());
console.log("Amstrong no ", arm.next());


}