app.controller('UploadImgCtrl', ['$scope', '$rootScope', 'dialog', function ($scope, $rootScope, dialog) {
    window.headerConfig = {
        enableHeader: true,
        enableBack: false,
        title: '图片上传'
    };
    window.footerConfig = {
        enableFooter: true
    };
    $rootScope.$broadcast('setHeaderConfig', window.headerConfig);
    $rootScope.$broadcast('setFooterConfig', window.footerConfig);
    UploadImg.init({
        id: 'uploadImgBox',
        //multiple: false, // enable the component can select multiple files in one time.
        //maxCount: 3, // the max number picture could upload.
        // autoUpload: false,
        // imgListArray: [],
        upload: {
            uploadUrl: 'https://up-z0.qbox.me/',
            // token: 'td6d3pspQec1dUQC_SVUkhyLlqRSYDFqIFHAh44A:jd7EhScDngW9jAcyaWK9sGeWvkI=:eyJzY29wZSI6ImltYWdldGVzdCIsImRlYWRsaW5lIjoxNDc1MDYzMTg0fQ==',
            tokenUrl: 'http://121.40.127.64:8089/api/tokenbookingmr',
            type: 'POST',
            async: true,
            nameSpace: '',
            params: {}
        }
    });
}]);