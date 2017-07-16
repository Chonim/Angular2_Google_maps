var express = require('express');
var router = express.Router();
var jwt = require('jsonwebtoken');

var User = require('../models/user');

var Coords = require('../models/map');

router.get('/', function(req, res, next) {
    Coords.find()
        .populate('user', 'firstName')
        .exec(function(err, coordsArray) {
        if (err) {
            return res.status(500).json({
                title: 'An error occurred',
                error: err
            });
        }
        res.status(200).json({
            message: 'Success',
            obj: coordsArray
        })
    });
});

router.use('/', function(req, res, next) {
    jwt.verify(req.query.token, 'secret', function(err, decoded) {
        if (err) {
            return res.status(401).json({
                title: 'Not Authenticated',
                error: err
            });
        }
        next();
    })
});

router.post('/', function ( req, res, next) {
    var decoded = jwt.decode(req.query.token);
    User.findById(decoded.user._id, function(err, user) {
        if (err) {
            return res.status(500).json({
                title: 'An error occurred',
                error: err
            });
        }
        var coords = new Coords({
            content: req.body.content,
            user: user
        });
        coords.save(function(err, result) {
            if (err) {
                return res.status(500).json({
                    title: 'An error occurred',
                    error: err
                });
            }
            user.coordsArray.push(result);
            user.save();
            res.status(201).json({
                messsage: 'Saved coords',
                obj: result
            })
        })
    })
});

router.patch('/:id', function(req, res, next) {
    var decoded = jwt.decode(req.query.token);
    Coords.findById(req.params.id, function(err, coords) {
        if (err) {
            return res.status(500).json({
                title: 'An error occurred',
                error: err
            });
        }
        if (!coords) {
            return res.status(500).json({
                title: 'No Coords Found!',
                error: {message: 'Coords not found'}
            });
        }
        if (coords.user != decoded.user._id) {
            return res.status(401).json({
                title: 'Not Authenticated',
                error: {message: 'Users do not match'}
            })
        }
        coords.content = req.body.content;
        coords.save(function(err, result) {
            if (err) {
                return res.status(500).json({
                    title: 'An error occurred',
                    error: err
                });
            }
            res.status(200).json({
                messsage: 'Updated coords',
                obj: result
            })
        });
    })
});

router.delete('/:id', function(req, res, next) {
    var decoded = jwt.decode(req.query.token);
    Coords.findById(req.params.id, function(err, coords) {
        if (err) {
            return res.status(500).json({
                title: 'An error occurred',
                error: err
            });
        }
        if (!coords) {
            return res.status(500).json({
                title: 'No Coords Found!',
                error: {message: 'Coords not found'}
            });
        }
        if (coords.user != decoded.user._id) {
            return res.status(401).json({
                title: 'Not Authenticated',
                error: {message: 'Users do not match'}
            })
        }
        coords.remove(function(err, result) {
            if (err) {
                return res.status(500).json({
                    title: 'An error occurred',
                    error: err
                });
            }
            res.status(200).json({
                messsage: 'Deleted coords',
                obj: result
            });
        });
    });
});

module.exports = router;
