const userService = require("./user-service");
// var bycrypt = require("bycryptjs");
const User = require("../models/user-model");
// var jwt = require("jsonwebtoken");

var fs = require("fs");

const roles = {
    ADMIN: "admin",
    PROVIDER: "provider",
    USER: "user"
}

module.exports = class AuthService {
    constructor() {}

    // might include hashing code
    // async hashPassword(password) {
    //     var salt = bycrpt.genSaltSync(10)
    // }

    // I have pictures of this code, but I am not sure if it will work
    register(authUser) {
        return new Promise((resolve,reject) => {
            userService.prototype.getAll()
            .then(users => {
                let count = users.length + 1;
                console.log("count: " + count.toString())
                let matched = users.filter(user => {
                    return user.email == authUser.email
                })
                if (matched.length >= 1) {
                    reject("This email address is already in use");
                }
                else {

                const userObj = {
                    id: count,
                    firstName: authUser.firstName,
                    lastName: authUser.lastName,
                    email: authUser.email,
                    password: authUser.password,
                    role: "user"
                };

                const newUser = new User(userObj);

                console.log("id: " + newUser.id)
                
                User.prototype.createUser(newUser, (err,res) => {
                    if (err) reject(err);
                    else {
                        resolve(res); }
                });
            }
            });
        });
    }

    login(authUser) {
        // Get users
        // loop through users to find user by email
        // validate password
        // if success return the user
        return new Promise((resolve,reject) => {
            userService.prototype.getAll()
            .then(users => {
                let matched = users.filter(user => {
                    return user.email == authUser.email
                })
                if (matched.length >= 1) {
                    if(matched[0].password == authUser.password){
                        resolve(matched)}
                }
                reject("User not found")
            })
            .catch(err => {
                console.log(err)
                reject(err);
            })
        })
    }

}
