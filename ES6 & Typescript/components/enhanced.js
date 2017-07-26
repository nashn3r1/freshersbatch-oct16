export function testenhance() 
{
    var orderObj = { 
        id:'10',
        title:'Messi',
        price:'2000',
        printOrder:function()
        {
            print('title:',this.title)
        },
        getPrice:function()
        {
            {return this.price}
        }
    };
    console.log('original:',orderObj);
    var copy = Object.assign({}, orderObj);
    console.log('copy:',copy);

}
