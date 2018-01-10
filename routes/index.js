const express = require('express');
const router = express.Router();
const request = require('request');
const config = require('../app/models/config');

router.get('/', (req, res, next) => {
    return res.render('index');
});

router.post('/register', (req, res, next) => {
	request.post({
		//taking whatever req.body was originally given and streamline it
		url: config.apiUrl + '/users',
		form: req.body
	}).pipe(res)
})

router.get('/login', (req, res, next) => {
    return res.render('login');
});

module.exports = router;
