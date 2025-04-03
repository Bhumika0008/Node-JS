const express = require('express');
const app = express();

app.get('/Home',(req, res) => {
    console.log("Data sent by browser", req.query.name);
    // Render HTML Here
    res.send(`
        <h1> Hello, it is a Home Page </h1> 
        <a href = "/about"> Go to about page </a>
        `);
})

app.get('/about',(req,res) => {
    // res.send('Hello, This is a about page')
    res.send(`
        <input type = "text" placeholder = " Enter User Name " />
        <button > Click Me </button>
        <a href = "/help"> Go to help page </a>
 
        `)
})

// app.get('/help',(req,res) => {
//     res.send(
//     {
//         name: 'Bhumika',
//         age: "25",
//         Contact: "123456987"
//     }
// )
//     // res.send (`
//     //     <a href = "/Home"> Go to Home Page </a>
//     // `)
// })
// 
app.get('/help', (req, res) => {
    res.send(`
        <pre>${JSON.stringify({ 
            name: 'Bhumika', 
            age: 25, 
            Contact: '123456987' 
        }, null, 2)}</pre>
        <a href="/Home">Go to Home Page</a>
    `);
});

app.listen(5000, () => {
    console.log("Server is running on port 5000");
});