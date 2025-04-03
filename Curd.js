// CURD 
// >> Create = fs.writeFileSync(dirPath+"/hello" +i+ ".txt","a simple txt file");
// >> Update = fs.appendFile(filePath, 'updated msg',(err)
// >> Read =  fs.readFile(filePath,'utf8',(err,item) 
// >> Delete = fs.unlinkSync(`${dirPath}/Demo.txt`) 

const fs = require('fs');
const path = require('path');
const dirPath = path.join(__dirname,'curd');
const filePath = `${dirPath}/Demofile.txt`;

// >> CREATE

 fs.writeFileSync(filePath,"We are learning CURD operations in Node JS, Here we are Creating a new file");

// >> UPDATE
fs.appendFile(filePath, 'and testing update operation',(err) =>{
    if(!err)
        console.log("file is updated")
})

// >> READ

fs.readFile(filePath,'utf8',(err,item) =>{
    console.log(item);
})
// 1.(err,item) = The first parameter of the callback function is always the error.
                 // The second parameter is the file content. we can take any var name but the logic is remains constant.
// 2. 'utf8' = Specifies that the file should be read as a UTF-8 encoded string. Aggr hum yeh nhi likhenge to output buffer format m aaega like this <Buffer 48 65 6c 6c 6f 20 57 6f 72 6c 64>
// Buffer = Teamporary ram storage ,it is a binary representation of data, where each byte is stored as a hexadecimal value.
// but we can go with another method as well which is 
//console.log(data.toString());


// >> RENAME
fs.rename(filePath, `${dirPath}/Demo.txt`,(err) =>{
    console.log("file name is updated")
})  

// >> DELETE
fs.unlinkSync(`${dirPath}/Demo.txt`) 
    console.log("file is deleted")
