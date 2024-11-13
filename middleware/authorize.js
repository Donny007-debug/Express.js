const roles = require('./permissions');

const authorize = (roleRequired) => {
    return(req, res, next) => {
        const userRole = req.user.role;

        if(!roles[userRole] || !roles[userRole].includes(roleRequired))
            return res.status(409).send('Access Denied!');
        
        next();
    }
}

module.exports = authorize;