/**
 * Created by 常香玉 on 2019/10/2.
 */
var http=require("http");
var fs=require("fs");

var server=http.createServer();

server.on("request", function (req,res) {
    var url=req.url;
    if(url==="/"){
        fs.readFile("./resource/index.html", function (err,data) {
            if(err){
                res.setHeader("Content-type","text/plain;charset=utf-8");
                res.end("文件读取失败，请稍后重试！");
            }else{
                res.setHeader("Content-type","text/html;charset=utf-8");
                res.end(data);
            }
        });
    }else if(url==="/125.jpg"){
        fs.readFile("./resource/125.jpg", function (err,data) {
            if(err){
                res.setHeader("Content-type","text/plain;charset=utf-8");
                res.end("文件读取失败，请稍后重试！");
            }else{
                res.setHeader("Content-type","image/jpeg");
                res.end(data);
            }
        });
    }
});

server.listen(5000, function () {
    console.log("Server is running...");
});