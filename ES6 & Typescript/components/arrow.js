export function testarrow()
{
    let names=['tom','ivan','jerry'];
    let arr=[];
     
     names.forEach(
         (name)=>{
             let obj ={name:name , length:name.length};
             arr.push(obj);
         }
     )
    console.log(arr);
}


