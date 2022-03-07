const express = require('express')
const router = express.Router()

const userManage = require('./user_manage');


router.get('/', (req, res) => {
    res.json({success: true})
})

router.use(async(req, res, next) => {

    if (!_util.hasKey(req, 'uinfo') || !_util.hasKey(req.uinfo, 'l') || req.uinfo['l'] < 255) {
        return res.json(jresp.invalidAccount())
    }

    next();
})

router.get('/valid', (req, res) => {
    res.json({success: true})
});


router.use("/user/manage", userManage);


module.exports = router
