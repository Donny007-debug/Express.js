const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    const data = {title: 'Contact', message: 'This Is The Contact Page.'};
    res.render('contact', data);
})

module.exports = router;