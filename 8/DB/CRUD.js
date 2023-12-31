const path = require('path');
const sql = require('./DB');


const createNewUser = (req,res)=>{
    //res.send(req.query);
    // validate info exists

    // pull info frin req.query to json object
    const NewSignUp = {
        email: req.query.UserEmail, 
        name: req.query.UserName
    };
    // run insert query
    const Q1 = "INSERT INTO customersAA SET ?";
    sql.query(Q1, NewSignUp, (err, mysqlres)=>{
        if (err) {
            console.log(err);
            res.send("something went wrong");    
            return;
        }
        res.send("thank you!");
        return;
    });};

const createTable = (req,res)=>{
    const Q4 = 'CREATE TABLE IF NOT EXISTS `customersAA` (id int(11) NOT NULL PRIMARY KEY AUTO_INCREMENT, email varchar(255) NOT NULL, name varchar(255) NOT NULL) ENGINE=InnoDB DEFAULT CHARSET=utf8';
    sql.query(Q4, (err,mysqlres)=>{
        if (err) {
            console.log(err);
            res.status(400).send("cannot find users");
            return;
        }
        res.send(mysqlres);
        console.log("found table");
        return;
    })
};

const dropTable = (req,res)=>{
    const Q5 = 'DROP TABLE `customersAA`;';
    sql.query(Q5, (err,mysqlres)=>{
        if (err) {
            console.log(err);
            res.status(400).send("cannot find users");
            return;
        }
        res.send("table dropped");
        console.log("table dropped");
        return;
    })
};

module.exports = {createNewUser, createTable, dropTable}