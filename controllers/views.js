'use strict';

const path = require('path');

function main(req, res) {
    res.sendFile(path.join(__dirname, '../', 'views', 'index.html'));
}

function estrella(req, res) {
    res.sendFile(path.join(__dirname, '../', 'views', 'star.html'));
}

function victoria(req, res) {
    res.sendFile(path.join(__dirname, '../', 'views', 'victoria.html'));
}

module.exports = { 
    main,
    victoria,
    estrella
};