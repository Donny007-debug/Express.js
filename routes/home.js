const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    const data = {title: 'Home', message: 'Welcome To Our First Express Server.'};
    res.render('index', data);
})

module.exports = router;