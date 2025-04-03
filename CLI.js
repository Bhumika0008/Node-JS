const fs = require('fs');
const input = process.argv;

// if we want to add file 
if(input[2] == 'add'){

    fs.writeFileSync(input[3],input[4]);

    //  node CLI.js add mango.txt 'this is a fruite'
}
else if(input[2] =='remove'){

    fs.unlinkSync(input[3]);
    // node CLI.js remove orange.txt

}
else{
    console.log('Invalid Input');
}
