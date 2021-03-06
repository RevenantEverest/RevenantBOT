const db = require('../../models/AcirhiaModels/characterStatsModels');
const errorHandler = require('../../controllers/errorHandler');
const services = {};

const pgp = require('pg-promise')();
const QRE = pgp.errors.QueryResultError;
const qrec = pgp.errors.queryResultErrorCode;

services.index = async (bot, message, command, callback, qrecCallback) => {
    db.findAll()
    .then(stats => callback(stats))
    .catch(err => {
        if(err instanceof QRE && err.code === qrec.noData) return qrecCallback();
        else errorHandler(bot, message, err, "Error Finding Character Stats", command);
    });
};

services.getOne = async (bot, message, command, data, callback, qrecCallback) => {
    db.findById(data)
    .then(stats => callback(stats))
    .catch(err => {
        if(err instanceof QRE && err.code === qrec.noData) return qrecCallback();
        else errorHandler(bot, message, err, "Error Finding Character Stats", command);
    });
};

services.getByDiscordId = async (bot, message, command, data, callback, qrecCallback) => {
    db.findByDiscordId(data)
    .then(stats => callback(stats))
    .catch(err => {
        if(err instanceof QRE && err.code === qrec.noData) return qrecCallback();
        else errorHandler(bot, message, err, "Error Finding Character Stats", command);
    });
};

services.save = async (bot, message, command, data, callback, qrecCallback) => {
    db.save(data)
    .then(stats => callback(stats))
    .catch(err => errorHandler(bot, message, err, "Error Saving Character Stats", command));
};

services.update = async (bot, message, command, data, callback, qrecCallback) => {
    db.update(data)
    .then(stats => callback(stats))
    .catch(err => errorHandler(bot, message, err, "Error Updating Character Stats", command));
};

services.delete = async (bot, message, command, data, callback, qrecCallback) => {
    db.delete(data)
    .then(() => callback())
    .catch(err => errorHandler(bot, message, err, "Error Deleting Character Stats", command));
};

module.exports = services;