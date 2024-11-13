const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    const data = {title: 'About', message: 'This Is The About Page.'};
    res.render('about', data);
})

module.exports = router;