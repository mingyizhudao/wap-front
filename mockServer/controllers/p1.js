var express = require('express');
var router = express.Router();
var base = require("./base");
var logger = require("../helpers/log");

/**
 * For p1 services,it's sample code.
 * 
 */
router.get("/commoninfo/encryptor", function(req, res) {
    var reqBody = req.body;
    logger.debug("commoninfo_encryptor....", reqBody);
    base.apiOkOutput(res, {
        "code": "1000",
        "memo": "操作成功",
        "appPK": "30818902818100a3da0dd5e9589c86ba812ae3dcf3091b9f8f51e889f89fd55eb2de54c917d8b54261db1d2d7458eceafa0cb6e128d94afa329ea58663c167f86e62fae3b77cfca59801aa5561b45de16e16884d738a90bd9d23d76623503d0c70a9366db0e4d7c87400f52dc9c236cb4353dd180bdd64dd7e2c17baa35cf14b0a516f8e87b3410203010001",
        "hsmPK": "30818902818100C21D66B2D0356FC8D704ED279F61B8F6810D34D23877C15B15F58986CD85C9BEEC7399770E60F86E286D4A096FBC2E2D37D69691447CFC6DD16C50CF5501908F95984EA91DB185C5EFD277D4FE7611C6A5FDB5373816D8B11D0975987D38EB898E4CBE624B2969B90A5EACC695C28766C38AEEE9A28D6FCBA8E38C977BE42A950203010001",
        "ts": "1427960906467"
    });
});

module.exports = router;
