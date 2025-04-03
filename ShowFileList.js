const fs = require('fs');
const path = require('path');
const dirPath = path.join(__dirname,'files'); // current directory ka path deta hai yeh

// console.warn(dirPath); 

for(i=0; i<5; i++){
    // fs.writeFileSync(dirPath+`/hello ${i}.txt`,"a simple txt file");
    fs.writeFileSync(dirPath+"/hello" +i+ ".txt","a simple txt file");

}

// yeh files create kr dega like this:
// >> files folder m (folder ka naam dirname k sath dena hota hai)
// hello0.txt
// hello1.txt
//.....till hello4.txt tk