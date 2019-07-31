const fs = require("fs");

var mysqlConn = require("../database/database")

module.exports = class User{
    constructor(user) {
        this.id = user.id;
        this.firstName = user.firstName;
        this.lastName = user.lastName;
        this.cellPhone = user.cellPhone;
        this.email = user.email;
        this.password = user.password;
        this.role = user.role;
    }

    getAll(results) {
        mysqlConn.query("SELECT * FROM fs_bnb.user", function(err, res) {
            if (err) {
                console.log("error", err);
                results(err, null);
            }
            else {
                results(null, res);
            }
        });
    }

    createUser(newUser, result) {
        mysqlConn.query("INSERT INTO fs_bnb.user set ?", newUser, function(err, res) {
            if (err) {
                console.log("error: ", err);
                result(err, null);
            } else {
                console.log(res.insertId);
                result(null, res.insertId);
            }
        });
    }

    removeUser(userId, result) {
        mysqlConn.query("DELETE FROM user WHERE id = ?", userId, function(err, res) {
            if (err) {
                console.log("error: ", err);
                result(err, null);
            } else {
                result(null, res);
            }
        });
    }

    updateById(userId, user, result) {
        mysqlConn.query(
        "UPDATE user SET firstName = ?,lastName = ?,email = ?,password = ?,cellPhone = ?,role = ? WHERE id = ?",
        [
            user.firstName,
            user.lastName,
            user.email,
            user.password,
            user.cellPhone,
            user.role,
            userId
        ]
        , function(err, res) {
            if (err) {
                console.log("error: ", err);
                result(err, null);
            } else {
                result(null, res);
            }
        });
    }

    getById(userId, result) {
        mysqlConn.query("SELECT * FROM user WHERE id = ? ", 
        userId, (err, res) => {
            if (err) {
                console.log("error: ", err);
                result(err, null);
            }
            else {
                result(null, res[0]);
            }
        });
    };

    getUsersJSON(){
        return new Promise((resolve,reject)=>{
            fs.readFile("./src/data/data.json",(err,data)=>{
                if(err){
                    reject(err);
                }
                else{
                    resolve(data);
                }
            });
        })
    }

    createUserJSON(user){
        return new Promise((resolve,reject) => {
            fs.readFile("./src/data/data.json",(err,data)=>{
                if(err){
                    reject(err);
                }
                else {
                    var users = JSON.parse(data).users;
                    users.push(user);
                    console.log(user);
                    console.log(users);
                    fs.writeFile("./src/data/data.JSON", 
                    JSON.stringify(users),
                    (err)=>{
                        if (err) {
                            reject(err);
                        }
                        else {
                            resolve(users);
                        }
                    });
                }
            });
        })
    }

}