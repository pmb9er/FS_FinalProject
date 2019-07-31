fs = require("fs");
mysqlConn = require("../database/database");

module.exports = class Listing {
    constructor(listing) {
        this.id = listing.id;
        this.providerId = listing.providerId;
        this.title = listing.title;
        this.description = listing.description;
        this.rating = listing.rating;
        this.location = listing.location;
        this.pricePerNight = listing.pricePerNight;
        this.imgUrl;
    }

    create(req) {
        return new Promise((resolve, reject) => {
            mysqlConn.query("INSERT INTO listing set ?", 
            req, (err, res) => {
                if (err) {
                    reject(err)
                }
                resolve(res.insertId)
            })
        })
    }

    addImgUrl(req) {
        return new Promise((resolve, reject) => {
            mysqlConn.query("INSERT INTO listing_imgurl_mapping set ?", 
            req, (err, res) => {
                if (err) {
                    reject(err)
                }
                resolve(res)
            })
        })
    }

    getImgUrl(listingId) {
        return new Promise((resolve, reject) => {
            mysqlConn.query("SELECT imgUrl listing_imgurl_mapping WHERE listingId = ?", 
            listingId, (err, res) => {
                if (err) {
                    reject(err)
                }
                if (res.length) {
                    resolve(res[0].imgUrl)
                }
                else {
                    resolve('')
                }
            })
        })
    }

    getAll() {
        return new Promise((resolve, reject) => {
            mysqlConn.query("SELECT * FROM listing", 
            (err, res) => {
                if (err) {
                    reject(err)
                }
                resolve(res)
            })
        })
    }

    getById(id) {
        return new Promise((resolve, reject) => {
            mysqlConn.query("SELECT * FROM listing where id = ?", 
            id, (err, res) => {
                if (err) {
                    reject(err)
                }
                let listing = new Listing(res[0])
                this.getImgUrl(listing.id)
                .then(imgUrl => {
                    listing.imgUrl = imgUrl;
                    resolve(listing)
                })
                .catch(err => {
                    reject(err)
                })
            })
        })
    }

    getByProviderId(id) {
        return new Promise((resolve, reject) => {
            mysqlConn.query("SELECT * FROM listing where providerId = ?", 
            id, (err, res) => {
                if (err) {
                    reject(err)
                }
                resolve(res)
                
            })
        })
    }

    update(req) {
        return new Promise((resolve, reject) => {
            let sql = `UDATE listing
            SET title = ?,
            location = ?,
            rating = ?,
            description = ?,
            pricePerNight = ?
            WHERE id = ?`

            let data = [req.title, req.location, req.rating, req.description, req.pricePerNight, req.id];

            mysqlConn.query(sql, data, (err, results) => {
                if (err){
                    reject(err);
                }
            });
            mysqlConn.query("UPDATE listing_imgurl_mapping SET imgUrl = ? WHERE listingId = ?",
            [req.imgUrl, req.id], (err, results) => {
                if (err) reject(err)
                resolve(req)
            })
        })
    }

    deleteImgUrl(id) {
        return new Promise((resolve, reject) => {
            this.deleteImgUrl(id)
            .then(res => {
                mysqlConn.query("DELETE FROM listing_imgurl_mapping WHERE listingId = ?", id, (err, res) => {
                    if (err) reject(err)
                    resolve(res)
                })
            })
        })
    }

    delete(id) {
        return new Promise((resolve, reject) => {
            this.delete(id)
            .then(res => {
                mysqlConn.query("DELETE FROM listing WHERE listingId = ?", id, (err, res) => {
                    if (err) reject(err)
                    resolve(res)
                })
            })
        })
    }
    

}