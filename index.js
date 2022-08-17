const http = require("http")
const fs = require("fs")

const server = http.createServer((req,res)=>{
    if (req.url === "/textsync") {
        let ans = fs.readFileSync("./1MiB.txt")
        res.end("sync file read done")
        console.log("ans done")
    }
    if (req.url === "/textasync") {
        let ans = fs.readFile("./1MiB.txt",(err, data)=>{
            console.log("sync file read done")
        })
        res.end("async file read done")
        console.log("ans done")
    }
    if (req.url === "/*") {
        res.end("404")
    }
    console.log(req.url)
})

server.listen(8081)