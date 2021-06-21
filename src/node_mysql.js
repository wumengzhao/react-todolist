let mysql = require("mysql");
const db_config = {
  host: "localhost",
  user: "root",
  password: "971008.wmz",
  port: "3306",
  database: "my_database"
}
;

let connect = mysql.createConnection(db_config);
//开始链接数据库
connect.connect(function (err) {
  if (err) {
    console.log(`mysql连接失败: ${err}!`);
  } else {
    console.log("mysql连接成功!");
  }
});
//基本的查询语句
let sqlQuery = "select * from todolist";
connect.query(sqlQuery, function (err, result) {
  if (err) {
    console.log(`SQL error: ${err}!`);
  } else {
    console.log(result);
    closeMysql(connect);
  }
});
//查询成功后关闭mysql
function closeMysql(connect) {
  connect.end((err) => {
    if (err) {
      console.log(`mysql关闭失败:${err}!`);
    } else {
      console.log('mysql关闭成功!');
    }
  });
}