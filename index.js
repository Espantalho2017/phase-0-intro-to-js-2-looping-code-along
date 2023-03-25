// Code your solutions in this file

let message = [];

function writeCards(name, eventName) {
    for(let i = 0; i < name.length ; i++) {
        message.push(`Thank you, ${name[i]}, for the wonderful ${eventName} gift!`);
    } ; 

    console.log(message);
    return message; 
};

writeCards();


function countDown(posInteger) {
    console.log(posInteger);
    while(posInteger > 0) {
    posInteger -- ;
    console.log(posInteger);
    }
}

countDown();

