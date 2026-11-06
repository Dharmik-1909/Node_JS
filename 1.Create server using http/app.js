const http = require("http");

const app = http.createServer((req,res)=>{
    const url = req.url;

    res.writeHead(200,{"content-type": "text/plain"});

    if (url == "/"){
        res.write("this is home page");
    }
    else if(url == "/about"){
        res.write("about page");
    }
    else if(url == "/contact"){
        res.write("contact page");
    }
    else if(url == "/blog"){
        res.write("blog page");
    }
    else if(url == "/projects"){
        res.write("projects page");
    }
    else{
        res.write("page not found")
    }

    res.end();
});

app.listen(3000);