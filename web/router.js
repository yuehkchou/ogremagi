import express from 'express';
const router = require('express').Router();
const ctrl = require('./controllers');

// router.get('listing', (req, res) => {
//
// })
router.get('/userSurvey', ctrl.survey.get);
router.post('/userSurvey', ctrl.survey.post);
})


module.exports = router;
