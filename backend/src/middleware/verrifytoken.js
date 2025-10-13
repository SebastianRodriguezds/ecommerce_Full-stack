const jwt = require('jsonwebtoken');

const JWT_SECRET = process.env.JWT_SECRET_KEY;

const verifyToken = (req, res, next) => {
    try{
        const token = req.cookies.token;
        console.log("verify token:", token)

        if(!token) {
            return res.status(401).send({message: "invalid token"});
        }
        const decoded = jwt.verify(token, JWT_SECRET);
        if(!decoded){
            return res.status(401).send({message: "invalid token or not valid"});
        }
        req.userId = decoded.userId;
        req.role = decoded.role;
        next();

    }catch(err){
        console.error('Error while verifying token', err);
        res.status(401).send({message: 'Error while verifying token'})
    }
}

module.exports = verifyToken;
