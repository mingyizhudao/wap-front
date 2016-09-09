var express = require('express');
var router = express.Router();
var base = require("../base");
var logger = require("../../helpers/log");

/**
 * get hospital by query params
 */
router.get("/apiwap/hospital", function (req, res) {
    var reqBody = req.body;
    var reqQuery = req.query;
    logger.debug("/apiwap/hospital", reqBody);
    logger.debug("/apiwap/hospital", reqQuery);
    switch (parseInt(reqQuery.city)) {
        case 0: {
            setTimeout(function () {
                base.apiOkOutput(res, {
                    "status": "ok",
                    "errorCode": 0,
                    "errorMsg": "success",
                    "results": [
                        {"id":"1","name":"上海交通大学医学院附属瑞金医院","ShortName":"上海瑞金医院","imageUrl":"http://hp.static.mingyizhudao.com/3E225BB31A12E070D933BC381","hpClass":"三级甲等","hpType":"综合医院","phone":"021-64370045"},
                        {"id":"2","name":"第二军医大学长征医院","ShortName":"上海长征医院","imageUrl":"http://hp.static.mingyizhudao.com/35668C75ED22DAB5AEE7748F0","hpClass":"三级甲等","hpType":"综合医院","phone":"021-81886999"},
                        {"id":"3","name":"复旦大学附属妇产科医院","ShortName":"上海市红房子医院","imageUrl":"http://hp.static.mingyizhudao.com/7DABBC519588846376424DAF3","hpClass":"三级甲等","hpType":"专科医院","phone":"021-33189900"},
                        {"id":"4","name":"第二军医大学长海医院","ShortName":"上海长海医院","imageUrl":"http://hp.static.mingyizhudao.com/8DAD7AC87E75536A9C8BF2932","hpClass":"三级甲等","hpType":"综合医院","phone":"021-31166666"},
                        {"id":"11","name":"北京协和医院","ShortName":"北京协和医院","imageUrl":"http://hp.static.mingyizhudao.com/EC23E2D7C108F984A7D5D4DF3","hpClass":"三级甲等","hpType":"综合医院","phone":"010-69156114"},
                        {"id":"12","name":"中国人民解放军总医院","ShortName":"北京301医院","imageUrl":"http://hp.static.mingyizhudao.com/018A51605CDC72E2060EC0157","hpClass":"三级甲等","hpType":"综合医院","phone":""},
                        {"id":"13","name":"北京大学第三医院","ShortName":"北医三院","imageUrl":"http://hp.static.mingyizhudao.com/5EF477AC7D2717870289F5213","hpClass":"三级甲等","hpType":"综合医院","phone":"010-82266699"},
                        {"id":"14","name":"首都医科大学附属北京同仁医院","ShortName":"北京同仁医院","imageUrl":"http://hp.static.mingyizhudao.com/91974C5313E6648ACBAF1945A","hpClass":"三级甲等","hpType":"综合医院","phone":"010-58269911"},
                        {"id":"17","name":"北京大学肿瘤医院","ShortName":"北大肿瘤医院","imageUrl":"http://hp.static.mingyizhudao.com/713651AEBD0B3E559B95EF057","hpClass":"三级甲等","hpType":"肿瘤医院","phone":"010-88121122"},
                        {"id":"20","name":"广东省人民医院","ShortName":"广东省人民医院","imageUrl":"http://hp.static.mingyizhudao.com/98978861577C881FEB1AFD01B","hpClass":"三级甲等","hpType":"综合医院","phone":"020-83827812"},
                        {"id":"20","name":"广东省人民医院","ShortName":"广东省人民医院","imageUrl":"http://hp.static.mingyizhudao.com/98978861577C881FEB1AFD01B","hpClass":"三级甲等","hpType":"综合医院","phone":"020-83827812"}
                    ]
                });
            }, 1000);
            break;
        }
        case 73: {
            setTimeout(function () {
                base.apiOkOutput(res, {
                    "status": "ok",
                    "errorCode": 0,
                    "errorMsg": "success",
                    "results": [
                        {"id":"1","name":"上海交通大学医学院附属瑞金医院","ShortName":"上海瑞金医院","imageUrl":"http://hp.static.mingyizhudao.com/3E225BB31A12E070D933BC381","hpClass":"三级甲等","hpType":"综合医院","phone":"021-64370045"},
                        {"id":"2","name":"第二军医大学长征医院","ShortName":"上海长征医院","imageUrl":"http://hp.static.mingyizhudao.com/35668C75ED22DAB5AEE7748F0","hpClass":"三级甲等","hpType":"综合医院","phone":"021-81886999"},
                        {"id":"3","name":"复旦大学附属妇产科医院","ShortName":"上海市红房子医院","imageUrl":"http://hp.static.mingyizhudao.com/7DABBC519588846376424DAF3","hpClass":"三级甲等","hpType":"专科医院","phone":"021-33189900"},
                        {"id":"4","name":"第二军医大学长海医院","ShortName":"上海长海医院","imageUrl":"http://hp.static.mingyizhudao.com/8DAD7AC87E75536A9C8BF2932","hpClass":"三级甲等","hpType":"综合医院","phone":"021-31166666"}
                    ]
                });
            }, 1000);
            break;
        }
        case 1: {
            setTimeout(function () {
                base.apiOkOutput(res, {
                    "status": "ok",
                    "errorCode": 0,
                    "errorMsg": "success",
                    "results": [
                        {"id":"11","name":"北京协和医院","ShortName":"北京协和医院","imageUrl":"http://hp.static.mingyizhudao.com/EC23E2D7C108F984A7D5D4DF3","hpClass":"三级甲等","hpType":"综合医院","phone":"010-69156114"},
                        {"id":"12","name":"中国人民解放军总医院","ShortName":"北京301医院","imageUrl":"http://hp.static.mingyizhudao.com/018A51605CDC72E2060EC0157","hpClass":"三级甲等","hpType":"综合医院","phone":""},
                        {"id":"13","name":"北京大学第三医院","ShortName":"北医三院","imageUrl":"http://hp.static.mingyizhudao.com/5EF477AC7D2717870289F5213","hpClass":"三级甲等","hpType":"综合医院","phone":"010-82266699"},
                        {"id":"14","name":"首都医科大学附属北京同仁医院","ShortName":"北京同仁医院","imageUrl":"http://hp.static.mingyizhudao.com/91974C5313E6648ACBAF1945A","hpClass":"三级甲等","hpType":"综合医院","phone":"010-58269911"},
                        {"id":"17","name":"北京大学肿瘤医院","ShortName":"北大肿瘤医院","imageUrl":"http://hp.static.mingyizhudao.com/713651AEBD0B3E559B95EF057","hpClass":"三级甲等","hpType":"肿瘤医院","phone":"010-88121122"},
                        {"id":"20","name":"广东省人民医院","ShortName":"广东省人民医院","imageUrl":"http://hp.static.mingyizhudao.com/98978861577C881FEB1AFD01B","hpClass":"三级甲等","hpType":"综合医院","phone":"020-83827812"}
                    ]
                });
            }, 1000);
            break;
        }
        case 200: {
            setTimeout(function () {
                base.apiOkOutput(res, {
                    "status": "ok",
                    "errorCode": 0,
                    "errorMsg": "success",
                    "results": [
                        {"id":"20","name":"广东省人民医院","ShortName":"广东省人民医院","imageUrl":"http://hp.static.mingyizhudao.com/98978861577C881FEB1AFD01B","hpClass":"三级甲等","hpType":"综合医院","phone":"020-83827812"}
                    ]
                });
            }, 1000);
            break;
        }
        default: {
            setTimeout(function () {
                base.apiOkOutput(res, {
                    "status": "ok",
                    "errorCode": 0,
                    "errorMsg": "success",
                    "results": []
                });
            }, 1000);
            break;
        }
    }
});

module.exports = router;