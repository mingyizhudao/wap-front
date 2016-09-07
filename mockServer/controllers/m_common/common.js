var express = require('express');
var router = express.Router();
var base = require("../base");
var logger = require("../../helpers/log");

/**
 * send the phone message about the code
 */
router.post("/apiwap/smsverifycode", function(req, res) {
    var reqBody = req.body;
    logger.debug("/apiwap/smsverifycode", reqBody);
    setTimeout(function(){
        base.apiOkOutput(res, {
            "status": "ok",
            "errorCode": 0,
            "errorMsg": "success"
        });
    }, 1000);
});
/**
 * validate the image captcha code.
 */
router.post("/apiwap/validCaptcha", function(req, res) {
    var reqBody = req.body;
    logger.debug("/apiwap/validCaptcha", reqBody);
    setTimeout(function(){
        base.apiOkOutput(res, {
            "status": "ok",
            "errorCode": 0,
            "errorMsg": "success"
        });
    }, 1000);
});

module.exports = router;