const express = require('express')
const router = express.Router();

const oauth = require('./oauth');
const _file = require('./files');
const test = require('./test');

const notify = require('./notify');
const userManage = require('./user_manage');

const admin = require('./admin')
const oauthChk = require('./oauth_check');

router.get('/', async(req, res) => {

    return res.json(jresp.successData());
})

router.use('/test', test)

router.use('/oauth', oauth);
router.use('/file', _file);

// auth check
router.use(oauthChk);

router.use('/user/manage', userManage);
router.use('/notify', notify);

router.use('/admin', admin);



module.exports = router
