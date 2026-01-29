//types of loops in js

const friends = ['Elon', 'Mark', 'Jef', 'Waren', 'Hyuang']

//for loops
for(let i = 0; i < friends.length; i++){
    // console.log(friends[i]);
}


//whole loop
let i = 0;
while(i < friends.length){
    // console.log(friends[i]);
    i++;
}

//do while
let j = 0;
do{
    // console.log(friends[j]);
    j++;
}
while(j < friends.length);


//for of
for(const friend of friends){
    // console.log(friend);
}

//for in
const idCard = {
    name : "Sakib",
    age : 26,
    regiligion: "Islam",
    country: "Bangladesh"
}

for(const info in idCard){
    console.log(info, idCard[info]);
}