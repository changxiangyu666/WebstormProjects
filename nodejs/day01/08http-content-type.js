/**
 * Created by 常香玉 on 2019/10/1.
 */
var http=require("http");
var server=http.createServer();
server.on("request", function (req,res) {
    //在http协议中，Content-Type 是用来告知对方我给你发送的数据内容是什么类型的
    /*res.setHeader("Content-Type","text/plain;charset=utf-8");
    res.end("hello 世界");*/
    var url=req.url;
    if(url==="/plain"){
        //text/plain 普通文本
        res.setHeader("Content-Type","text/plain;charset=utf-8");
        res.end("hello 世界");
    }else if(url==="/html"){
        res.setHeader("Content-Type","text/html;charset=utf-8");
        res.end("<p>hello html <a href='#'>点我</a></p>");
    }
});
server.listen(5000, function () {
    console.log("Server is running...");
});