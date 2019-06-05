const Discord_Bot = require('../Discord_Bot');
const db = require('../models/twitchTrackerDB');
const twitchServices = require('../services/twitchServices');

const pgp = require('pg-promise')();
const QRE = pgp.errors.QueryResultError;
const qrec = pgp.errors.queryResultErrorCode;

module.exports = {
    index(req, res, next) {
        db.findAll()
        .then(trackers => res.json({ message: "Getting Trackers", data: trackers }))
        .catch(err => {
            if(err instanceof QRE && err.code === qrec.noData)
                res.json({ message: "No Trackers Found", data: [{}] });
            else next(err);
        })
    },
    getOne(req, res, next) {
        db.findById(req.params.id)
        .then(tracker => res.json({ message: "Getting Tracker", data: tracker }))
        .catch(err => {
            if(err instanceof QRE && err.code === qrec.noData)
                res.json({ message: "No Tracker Found", data: {} });
            else next(err);
        })
    },
    getByGuildId(req, res, next) {
        db.findByGuildId(req.params.id)
        .then(trackers => res.json({ message: "Getting Trackers by Guild Id", data: trackers }))
        .catch(err => {
            if(err instanceof QRE && err.code === qrec.noData)
                res.json({ message: "No Trackers Found", data: [{}] });
            else next(err);
        })
    },
    create(req, res, next) {
        twitchServices.getTwitchInfo(req.body.streamer)
        .then(streamer => {
            db.save({ guild_id: req.body.guild_id, twitch_username: streamer.data.name, channel_id: req.body.channel_id, role_id: req.body.role_id })
            .then(tracker => res.json({ message: "Tracker Saved", data: tracker }))
            .catch(err => next(err));
        })
        .catch(err => {
            if(err.response.status === 404)
                res.json({ error: 'No Twitch User Found' });
            else next(err);
        });
    },
    update(req, res, next) {
        db.update(req.body)
        .then(tracker => res.json({ message: "Updating Tracker", data: tracker }))
        .catch(err => next(err))
    },
    delete(req, res, next) {
        db.delete(req.params.id)
        .then(() => res.json({ message: "Tracker Deleted" }))
        .catch(err => next(err));
    }
};