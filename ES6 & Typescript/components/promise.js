export function testpromises()
{
   var p1 = Promise.resolve(5);
    p1.then((res) => console.log(res));

   var p2 = Promise.resolve(6);
    p2.then((res) => console.log(res));

        Promise.all([p1, p2]).then(function (promises) 
        {
            let sum=0;
    
                promises.forEach(function (text)
                { 
                sum = sum + text;
         
                }
     
            )
            console.log("sum:",sum);
        }
    
    );

}