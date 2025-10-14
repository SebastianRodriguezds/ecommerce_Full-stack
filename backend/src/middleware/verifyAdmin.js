const verifyAdmin = (req, res, next) => {
    if(req.role !== 'admin') {
        return res.status(403).send({succes: false, message: "You are not authorized to performe this action"});
    }
    next();
} 

module.exports = verifyAdmin;