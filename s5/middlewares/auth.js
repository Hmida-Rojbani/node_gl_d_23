const jwt = require('jsonwebtoken')
module.exports=function (req,res,next) {
    const token = req.header('Authorization');
    if(!token)
        return res.status(403).send('Access denied, no token provided')
    try {
        let decoded_token = jwt.verify(token.substring(7),'secret');
        req.user_token = decoded_token
        next()
    } catch (error) {
        return res.status(403).send('Access denied, token invalide')
    }
}