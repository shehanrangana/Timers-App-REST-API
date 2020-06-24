const express = require('express');
const app = express();
const jwt = require('jsonwebtoken');
const cors = require('cors')

// THis will be enable all CORS requests
app.use(cors())

app.use((req, res, next) => {
    try {
        const token = req.headers.authorization.split(" ")[1];
        const decoded = jwt.verify(token, 'secret');
        return res.status(200).json({
            payload: decoded,
            message: 'Authentication successful'
        });
        // next()
    } catch (error) {
        return res.status(401).json({
            message: 'Authentication failed'
        });
    }
})

module.exports = app;