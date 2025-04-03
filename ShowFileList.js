const fs = require('fs');
const path = require('path');
const dirPath = path.join(__dirname,'files');

// console.warn(dirPath); 

for(i=0; i<5; i++){
    // fs.writeFileSync(dirPath+`/hello ${i}.txt`,"a simple txt file");
    fs.writeFileSync(dirPath+"/hello" +i+ ".txt","a simple txt file");

}

