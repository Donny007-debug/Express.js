const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');

const mockUser = { id: 1, username: 'testUser' };

router.post('/login', (req, res) => {
    const token = jwt.sign( { id: mockUser.id, username: mockUser.username }, process.env.JWT_SECRET, {
        expiresIn: '1h'
    });
    
console.log(process.env.JWT_SECRET);

    res.json({ token });
});

console.log(process.env.JWT_SECRET);

module.exports = router;