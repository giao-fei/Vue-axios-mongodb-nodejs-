// nodejs连接mongodb数据库
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";
 
// 插入单条数据
// MongoClient.connect(url, { useNewUrlParser: true }, function(err, db) {
//     if (err) throw err;
//     var dbo = db.db("test");
//     var myobj = { name: "菜鸟教程", url: "www.runoob" };
//     dbo.collection("user").insertOne(myobj, function(err, res) {
//         if (err) throw err;
//         console.log("文档插入成功");
//         db.close();
//     });
// });

// 插入多条数据
// MongoClient.connect(url, { useNewUrlParser: true }, function(err, db) {
//     if (err) throw err;
//     var dbo = db.db("test");
//     var myobj =  [
//         { name: '菜鸟工具', url: 'https://c.runoob.com', type: 'cn'},
//         { name: 'Google', url: 'https://www.google.com', type: 'en'},
//         { name: 'Facebook', url: 'https://www.google.com', type: 'en'}
//        ];
//     dbo.collection("user").insertMany(myobj, function(err, res) {
//         if (err) throw err;
//         console.log("插入的文档数量为: " + res.insertedCount);
//         db.close();
//     });
// });

// 查询所有的数据
MongoClient.connect(url, { useNewUrlParser: true }, function(err, db) {
    if (err) throw err;
    var dbo = db.db("test");
    dbo.collection("user"). find({}).toArray(function(err, result) { // 返回集合中所有数据
        if (err) throw err;
        console.log(result);
        db.close();
    });
});

// 查询指定条件的数据
// MongoClient.connect(url, { useNewUrlParser: true }, function(err, db) {
//     if (err) throw err;
//     var dbo = db.db("test");
//      var whereStr = {"name":'菜鸟教程'};  // 查询条件
//     dbo.collection("user").find(whereStr).toArray(function(err, result) {
//         if (err) throw err;
//         console.log(result);
//         db.close();
//     });
// });

// 更新一条数据
// MongoClient.connect(url, { useNewUrlParser: true }, function(err, db) {
//     if (err) throw err;
//     var dbo = db.db("test");
//     var whereStr = {"name":"菜鸟教程","url":"www.runoob"};  // 查询条件
//     var updateStr = {$set: { "name":"菜鸟裹裹","url" : "https://www.baidu.com" }};
//     dbo.collection("user").updateOne(whereStr, updateStr, function(err, res) {
//         if (err) throw err;
//         console.log("文档更新成功");
//         db.close();
//     });
// });

// 跟新多条数据
// MongoClient.connect(url, { useNewUrlParser: true }, function(err, db) {
//     if (err) throw err;
//     var dbo = db.db("test");
//     var whereStr = {"type":'en'};  // 查询条件
//     var updateStr = {$set: { "url" : "https://www.runoob.com" }};
//     dbo.collection("user").updateMany(whereStr, updateStr, function(err, res) {
//         if (err) throw err;
//          console.log(res.result.nModified + " 条文档被更新");
//         db.close();
//     });
// });

// 删除一条数据
// MongoClient.connect(url, { useNewUrlParser: true }, function(err, db) {
//     if (err) throw err;
//     var dbo = db.db("test");
//     var whereStr = {"name":"裹裹"};  // 查询条件
//     dbo.collection("user").deleteOne(whereStr, function(err, obj) {
//         if (err) throw err;
//         console.log("文档删除成功");
//         db.close();
//     });
// });

// 删除多条数据
// MongoClient.connect(url, { useNewUrlParser: true }, function(err, db) {
//     if (err) throw err;
//     var dbo = db.db("test");
//     var whereStr = { type: "en" };  // 查询条件
//     dbo.collection("user").deleteMany(whereStr, function(err, obj) {
//         if (err) throw err;
//         console.log(obj.result.n + " 条文档被删除");
//         db.close();
//     });
// });