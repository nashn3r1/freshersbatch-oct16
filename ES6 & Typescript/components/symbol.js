
     let prevNo = Symbol();
     let currNo = Symbol();

     class fibonacci{
         constructor(pre,cur){
             this[prevNo]=pre;
             this[currNo]=cur;
         }
      
    
        next() {
        [  this[prevNo], this[currNo] ]= [this[currNo], this[prevNo] + this[currNo] ];
        return {done: false, value: this[currNo] };
                }
        
    }
    



export function testsymbol(){
        var itr =new fibonacci(0,1);
        
        console.log("Fibonacci no ", 
        itr.next());
        console.log("Fibonacci no ", 
        itr.next());
        console.log("Fibonacci no ", 
        itr.next());
        console.log("Fibonacci no ", 
        itr.next());
        console.log("Fibonacci no ", 
        itr.next());
         console.log("Fibonacci no ", 
        itr.next());
         console.log("Fibonacci no ", 
        itr.next());


}
