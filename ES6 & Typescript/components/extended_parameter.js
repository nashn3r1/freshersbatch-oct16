export function testextended()
{
//5(a) 
    //function add(a,b)
    //{
        //return a + b;
    //}
    //console.log('ans:',add[5,4]);

//5(b)
        //let frnds = (A,...B)=>
        //{
        //console.log("friends:",A,B);
        //}
    //frnds('Leo','Ney','Suarez','Iniesta');

//5(c)
       let printCapitalnames=(...names)=>
       {
           console.log(names.map( (name)=>name.toUpperCase()))
                
        }
        var names=['leo','ney','ninad','suarez','iniesta'];
        printCapitalnames(...names);


}

    
