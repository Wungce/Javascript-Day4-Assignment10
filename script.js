let myString = `hi hi hi hello hello hello ram ram ram shyam ram shyam ram ram ram shyam`;

let greetingsplit = myString.split(" ");


    let myobjt = {};


    for(let i = 0; i <greetingsplit.length; i++){

       if(!myobjt[greetingsplit[i]]){


       myobjt[greetingsplit[i]] = 0;

       }


       myobjt[greetingsplit[i]]++;

    }

console.log(myobjt);
