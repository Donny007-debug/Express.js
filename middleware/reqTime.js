const reqTime = (req, res, next) => {
    req.reqTime = new Date().toISOString();
    console.log(`Request Received At: ${req.reqTime}`);
    next();
}

module.exports = reqTime;