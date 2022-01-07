const mysql = require("mysql");
const Promise = require("bluebird");
Promise.promisifyAll(require("mysql/lib/Connection").prototype);
const dbinfo {
    host:"localhost";
    user: "root";
    password: "cdac";
    database: "project1";
};
const  ConnectionChceck=async()=>
{
 const connection=mysql/createConnection(dbinfo);
 await  connection.connectAsync();

 console.log("Hello");
 await connection.endAsync();
};
const  addmsg=async(data)=>
{
    const connection=mysql.createConnection(dbinfo);
    await connection.connectAsync();

};
const showmsg=async()=>{
    const connection=mysql.createConnection(dbinfo);
    await connection.connectAsync();
    let subquery=select *from message;
    
}




