export function testdestruc()
{
//7(a)
    //let [,,c,,] = [11,10,9,8];
    //console.log("c:",c);


//7(b)
      let org ={name:'Ninad',
    address:{
        street:'Shubhankar A Appt,Anand Nagar',
        city:'Jalgaon',
        state:'Maharashtra',
        zipcode:'425001'
    }};
    let {address:{zipcode}}=org;
    console.log("zipcode:",zipcode)
}