var bodyParser = require('body-parser');
// 对数据进行解析
var urlencodeParser = bodyParser.urlencoded({extended:false});

var data = [
  {item:"欢迎大家1111111111111"},
  {item:"欢迎大家222222222222"},
  {item:"欢迎大家333333333333"}
]

module.exports = function (app) {
  // 获取数据
  app.get('/todo',function (req,res) {
    res.render('todo',{todos:data});
  })

  // 传递数据
  app.post('/todo', urlencodeParser, function (req,res) {
    data.push(req.body);
  })

  // 删除数据
  app.delete('/todo/:item',function (req,res) {
    console.log(req.params.item);
    data = data.filter(function (todo) {
      return req.params.item !== todo.item;
    })
    res.json(data);
  })
}