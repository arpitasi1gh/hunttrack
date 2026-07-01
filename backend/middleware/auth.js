const jwt = require('jsonwebtoken');

const verifyToken = (req, res, next) => {

    // Getting thr token from the authorization header
    const authHeader = req.headers.authorization;
    const token = authHeader && authHeader.split(' ')[1] // "Bearer <token>"

    if (!token) {
        return res.status(401).json({error: 'Access denied. No token provided.'});
    }

    try {
        // Verifying the token
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded; // Attaching user info to request
        next(); // Proceeding to the next function (the actual route handler)
    } catch (error) {
        return res.status(403).json({error: 'Invalid token.'});
    }
}

module.exports = verifyToken;