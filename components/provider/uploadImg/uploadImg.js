/**
 */

(function (global, factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        module.exports = global.document ?
            factory(global, true) :
            function (w) {
                if (!w.document) {
                    throw new Error("UploadImg requires a window with a document");
                }
                return factory(w);
            };
    } else {
        factory(global);
    }
    // Pass this if window is not defined yet
}(typeof window !== "undefined" ? window : this, function (window, noGlobal) {
    var extend = function (o, n, override) {
        for (var key in n) {
            o[key] = n[key];
        }
        return o;
    };
    var UploadImg = {};

    var defaults = {
        multiple: true,
        imgListArray: [],
        maxCount: null,
        autoUpload: false,
        //The container's id
        id: ''
    };
    var ajaxDefaults = {
        tokenUrl: 'abcdefg'
    };

    function _init(config) {
        var options = extend(defaults, config);
        var container = document.getElementById(options.id);
        container.innerHTML = '<div class="upload-img">\
                <div class="title">上传您的图片</div>\
                <div class="img-show" id="uploadImgShow">\
                </div>\
                <div class="form-box">\
                    <label for="uploadInputFile" class="add-icon"><div class="text"><p class="text-lg">+</p><p class="text-sm">点击添加图片</p></div></label>\
                    <input type="file" class="fn-hide" multiple id="uploadInputFile">\
                </div>\
        </div>';


        /**
         * the flag to control ReadFile obj is success. Then you can click the submit button. Because the user could
         * see the images before submit
         */
        var isFinished = false;

        var uploadInputFile = document.getElementById('uploadInputFile');
        var uploadImgShow = document.getElementById('uploadImgShow');
        var md5_sha1List = {};// the list save the different files md5+sha1 code. use to check the image file is the same or not.
        var upFileList = [];//the final push in upload files list. After check by name, md5, sha1
        var rFilter = /^(?:image\/bmp|image\/cis\-cod|image\/gif|image\/ief|image\/jpeg|image\/jpeg|image\/jpeg|image\/pipeg|image\/png|image\/svg\+xml|image\/tiff|image\/x\-cmu\-raster|image\/x\-cmx|image\/x\-icon|image\/x\-portable\-anymap|image\/x\-portable\-bitmap|image\/x\-portable\-graymap|image\/x\-portable\-pixmap|image\/x\-rgb|image\/x\-xbitmap|image\/x\-xpixmap|image\/x\-xwindowdump)$/i;
        uploadInputFile.addEventListener('change', function () {
            isFinished = false;
            var filesArray = uploadInputFile.files;
            var onceAddFilesList = {};
            var needCheckArray = [];
            /**
             * repeat the filesArray. First step to pass the same name files. Then add the FileReader obj to the name
             */
            for (var i = 0; i < filesArray.length; i++) {
                if (rFilter.test(filesArray[i].type)) {
                    var fileName = filesArray[i].name + filesArray[i].lastModified;
                    if (onceAddFilesList.hasOwnProperty(fileName)) {
                        alert('文件重名');
                    } else {
                        if (onceAddFilesList[fileName]) {
                            onceAddFilesList[fileName].fileObj = filesArray[i];
                        } else {
                            onceAddFilesList[fileName] = {};
                            onceAddFilesList[fileName].fileObj = filesArray[i];
                        }
                        onceAddFilesList[fileName].checkReader = new FileReader();
                        onceAddFilesList[fileName].checkReader.readAsBinaryString(onceAddFilesList[fileName].fileObj);
                        onceAddFilesList[fileName].reader = new FileReader();
                        onceAddFilesList[fileName].reader.readAsDataURL(onceAddFilesList[fileName].fileObj);
                        needCheckArray.push(onceAddFilesList[fileName]);
                    }
                } else {
                    alert('您选择的' + filesArray[i].name + '不是图片文件');
                }
            }
            if (needCheckArray.length) {
                var interval = setInterval(function () {
                    var temp = needCheckArray[needCheckArray.length - 1];
                    if (temp.checkReader.readyState == 2 && temp.checkReader.result && temp.reader.readyState == 2 && temp.reader.result) {
                        clearInterval(interval);
                        while (needCheckArray.length) {
                            var temp = needCheckArray[needCheckArray.length - 1];
                            if (temp.checkReader.readyState == 2 && temp.checkReader.result && temp.reader.readyState == 2 && temp.reader.result) {
                                var thisObj = needCheckArray.shift();
                                var result = thisObj.checkReader.result;
                                var dataUrl = thisObj.reader.result;
                                var fileName = thisObj.fileObj.name;
                                var code_md5 = md5(result);
                                var code_sha1 = hex_sha1(result);
                                if (!md5_sha1List.hasOwnProperty(code_md5 + '_' + code_sha1)) {
                                    md5_sha1List[code_md5 + '_' + code_sha1] = 1;
                                    var ele = document.createElement('div');
                                    ele.className = 'img-item';
                                    ele.id = code_md5 + '_' + code_sha1;
                                    ele.innerHTML = '<img src="' + dataUrl + '" alt="' + fileName + '" id="img_'+ele.id+'">\
                                        <div class="operate"><div class="ct-rotate" operate-tag="upload_ctrlLeftRotate" ctrl-id="img_'+ele.id+'"><span class="counter-clock-wise fn-left" operate-tag="upload_ctrlLeftRotate" ctrl-id="img_'+ele.id+'"></span></div><div class="ct-rotate" operate-tag="upload_ctrlRightRotate" ctrl-id="img_'+ele.id+'"><span class="clock-wise fn-left ct-rotate" operate-tag="upload_ctrlRightRotate" ctrl-id="img_'+ele.id+'"></span></div><div class="btn-remove" operate-tag="upload_ctrlClose" ctrl-id="'+ele.id+'"><span class="circle-close" operate-tag="upload_ctrlClose" ctrl-id="'+ele.id+'"></span></div></div>\
                                    ';

                                    // for the new ele add the eventListener
                                    ele.addEventListener('click', function(event){
                                        if(event.target.getAttribute('operate-tag') == 'upload_ctrlLeftRotate'){
                                            var img = document.getElementById(event.target.getAttribute('ctrl-id'));
                                            //TODO rotate left
                                        }
                                        if(event.target.getAttribute('operate-tag') == 'upload_ctrlRightRotate'){
                                            var img = document.getElementById(event.target.getAttribute('ctrl-id'));
                                            //TODO rotate right
                                        }
                                        if(event.target.getAttribute('operate-tag') == 'upload_ctrlClose'){
                                            var boxId = event.target.getAttribute('ctrl-id');
                                            var box = document.getElementById(boxId);
                                            for(var m =0; m<upFileList.length; m++){
                                                if(upFileList[m].id == boxId){
                                                    upFileList.splice(m, 1);
                                                    delete md5_sha1List[boxId];
                                                }
                                            }
                                            console.log(upFileList);
                                            box.remove();
                                        }
                                        if(event.target.tagName == 'IMG'){
                                            var src = event.target.src;
                                            var alt = event.target.getAttribute('alt');
                                            var detailBox = document.createElement('div');
                                            detailBox.id = 'uploadDetailImg';
                                            detailBox.className = 'upload-detail-img';
                                            detailBox.innerHTML = '<img src="' + src + '" alt="' + alt + '">';
                                            detailBox.addEventListener('click', function(event){
                                                document.getElementById('uploadDetailImg').remove();
                                            });
                                            document.body.appendChild(detailBox);
                                        }
                                    });
                                    //end add eventListener.....................
                                    uploadImgShow.appendChild(ele);
                                    upFileList.push({
                                        id: ele.id,
                                        obj: thisObj.fileObj
                                    });
                                } else {
                                    console.log('该文件内容重复，已自动过滤');
                                }
                            }
                        }
                        //TODO change the finish flag to ture
                        isFinished = true;
                        console.log(upFileList);
                        console.log(isFinished);
                    }
                }, 200);
            } else {
                isFinished = upFileList.length ? true : false;
                console.log(isFinished);
            }
        });
    }

    UploadImg.init = function (config) {
        _init(config);
    };
    if (!noGlobal) {
        window.UploadImg = UploadImg;
    }
    return UploadImg;
}));
