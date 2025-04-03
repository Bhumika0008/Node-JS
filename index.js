const express = require('express');
const path = require('path');
// this path module use to access your folder of your project

const app = express();
const publicPath = path.join(__dirname,'public');

// app.use(express.static(publicPath));
//express.static is a built-in middleware function in Express used to serve static files 
//like HTML, CSS, JavaScript, images, and other assets.

// we can not load directly css and images by using static method

// Remove Extension from URL
//Means Removing .html or any other extension from url  http://localhost:5000/home.html from this
app.get('',(req,resp) => {
    resp.sendFile(`${publicPath}/home.html`)
});
app.get('/about',(req,resp) => {
    resp.sendFile(`${publicPath}/about.html`)
});
app.get('/home',(req,resp) => {
    resp.sendFile(`${publicPath}/home.html`)
});


app.get('*',(req,resp) => {
    resp.sendFile(`${publicPath}/404.html`)
});

// "*" = This route is a catch-all (wildcard) route that matches any GET request that doesn’t match a defined route. It is typically used to serve a 404 error page.

app.listen(5000);
