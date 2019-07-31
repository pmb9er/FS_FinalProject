const User = require("../models/user-model");

module.exports = class UserService {
    constructor() {}

    get() {
        return new Promise((resolve, reject) => {
            User.prototype.get((err, res) => {
                if (err) {
                    reject(err);
                }
                resolve(res);
            });
        });
    }

    getById(id) {
        return new Promise((resolve, reject) => {
            User.prototype.getById(id, (err, res) => {
                if (err) {
                    reject(err);
                }
                resolve(res);
            });
        });
    }

    create(user) {
        return new Promise((resolve, reject) => {
            User.prototype.create(user, (err, res) => {
                if (err) {
                    reject(err);
                }
                resolve(res);
            });
        });
    }

    getAll() {
        return new Promise((resolve, reject) => {
            User.prototype
            .getAll((err, res) => {
                if (err) {
                    reject(err);
                }
                resolve(res);
            });
        });
    }
}