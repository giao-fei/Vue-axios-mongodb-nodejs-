var express = require('express')
var app = express()

// app.post('/line', function (req, res) {
//     res.send('Hello World')
// })
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

// app.post('/line', function (req, res) {
app.get('/line', function (req, res) {

// 查询所有的数据
  MongoClient.connect(url, { useNewUrlParser: true }, function(err, db) {
    if (err) throw err;
    var dbo = db.db("test");
    dbo.collection("user"). find({}).toArray(function(err, result) { // 返回集合中所有数据
        if (err) throw err;
         res.send (result);
         db.close();
        });
    });
    
// 插入单条数据
// MongoClient.connect(url, { useNewUrlParser: true }, function(err, db) {
//     if (err) throw err;
//     var dbo = db.db("test");
//     var myobj = { name: "java从入门到精通", auther: "高友辉·著", age: "23" };
//     dbo.collection("user").insertOne(myobj, function(err, res) {
//         if (err) throw err;
//         res.send("插入成功");
//         db.close();
//     });
// });

// 删除多条数据
//     MongoClient.connect(url, { useNewUrlParser: true }, function(err, db) {
//         if (err) throw err;
//         var dbo = db.db("test");
//         var whereStr = { name: "java从入门到精通", auther: "高友辉·著", age: "23" };  // 查询条件
//         dbo.collection("user").deleteMany(whereStr, function(err, obj) {
//             if (err) throw err;
//             res.send(obj.result.n + " 条文档被删除");
//             db.close();
//         });
//     });

 })

app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
    
});
