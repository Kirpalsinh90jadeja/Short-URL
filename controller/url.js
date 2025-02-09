var shortIDs = require('short-id-gen')
const URL = require('../models/user')


async function handleGenerateNewURL(req,res) {
 const body =req.body;
 if(!body.url) return res.render('home');
    //status(400).json({error:'url is requires'})   
const shortID = shortIDs.generate(); //=> "-ulmjheX"

await URL.create({
    shortId:shortID,
    redirectURL:body.url,
     
    visitHistory:[],
    // createdBy:req.user._id,
})
return res.render('home',
    {id:shortID}
    )

}

async function handleGetAnalytics(req,res) {
    const shortId = req.params.shortId;
    const result = await URL.findOne({shortId});
    return res.json({
        totalClicks : result.visitHistory.length,
        analytics : result.visitHistory,
    })
}

async function handleDeleteById(req,res) {
    await URL.findByIdAndDelete(req.params.shortId)
}

module.exports = {
    handleGenerateNewURL,
    handleGetAnalytics,
    handleDeleteById,
}

