const express = require('express');
const {handleGenerateNewURL,
    handleGetAnalytics,
   
} = require('../controller/url');

const router = express.Router();

router.post('/url',handleGenerateNewURL);

router.get("/analytics/:shortId",handleGetAnalytics);



module.exports = router;