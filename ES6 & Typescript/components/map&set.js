
let sportsusers = new Set();
sportsusers.add('Ninad');
sportsusers.add('Ajay');
sportsusers.add('Mitesh');
sportsusers.add('Shubham');

//let susers= [...sportsusers]; //Spread operator
//console.log('sports group:',susers);

let sportsmsg = new Set();
sportsmsg.add('Hii');
sportsmsg.add('Lets play Football');
sportsmsg.add('yoo lets go');
sportsmsg.add('will meet u all at 8');


//let smsgs= [...sportsmsg]; //Spread operator
//console.log('sports group chat:',smsgs);

let musicusers = new Set();
musicusers.add('Messi');
musicusers.add('Ney');
musicusers.add('Suarez');
musicusers.add('Iniesta');

//let musers= [...musicusers]; //Spread operator
//console.log('music group:',musers);

let musicmsg = new Set();
musicmsg.add('hello');
musicmsg.add('ed sheeran is coming to india');
musicmsg.add('ed who?');
musicmsg.add('the guy who sang Shape of you :P');

//let mmsgs= [...musicmsg]; //Spread operator
//console.log('music group chat:',mmsgs);

let chatroom = new Map([
[sportsusers, sportsusers],
[sportsmsg, sportsmsg],
[musicmsg, musicmsg],
[musicusers, musicusers]
]);

//var arr= [...chatroom.values()]; //Map spreading
//console.log('chatrooms:',arr);


function getusersbychatrooms (...user){
    user.map((user)=>
    {
        console.log("users:",user);
    }
    )
}

function getusersbygroups (...grp){
    grp.map((grp)=>
    {
        console.log("group chats:",grp);
    }
    )
}

export function testSymbol4(){
getusersbychatrooms(sportsusers);
getusersbychatrooms(musicusers);
getusersbygroups(sportsmsg);
getusersbygroups(musicmsg);

}