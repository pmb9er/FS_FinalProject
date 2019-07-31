const Listing = require("../models/listing-model")

module.exports = class ListingService {
    constructor() {}

    create(req) {
        return new Promise((resolve, reject) => {
            Listing.prototype.create(req)
            .then(res => {
                resolve(res)
            })
            .catch(err => {
                reject(err)
            })
        })
    }

    addImgUrl(req) {
        return new Promise((resolve, reject) => {
            Listing.prototype.addImgUrl(req)
            .then(res => {
                resolve(res)
            })
            .catch(err => {
                reject(err)
            })
        })
    }

    getAll() {
        return new Promise((resolve, reject) => {
            Listing.prototype.getAll()
            .then(res => {
                resolve(res)
            })
            .catch(err => {
                reject(err)
            })
        })
    }

    getById(id) {
        return new Promise((resolve, reject) => {
            Listing.prototype.getById(id)
            .then(res => {
                resolve(res)
            })
            .catch(err => {
                reject(err)
            })
        })
    }

    getByProviderId(id) {
        return new Promise((resolve, reject) => {
            Listing.prototype.getByProviderId(id)
            .then(res => {
                resolve(res)
            })
            .catch(err => {
                reject(err)
            })
        })
    }

    update(req) {
        return new Promise((resolve, reject) => {
            Listing.prototype.update(req)
            .then(res => {
                resolve(res)
            })
            .catch(err => {
                reject(err)
            })
        })
    }

    delete(id) {
        return new Promise((resolve, reject) => {
            Listing.prototype.delete(id)
            .then(res => {
                resolve(res)
            })
            .catch(err => {
                reject(err)
            })
        })
    }
}