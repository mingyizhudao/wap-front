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
        id: 'uploadImgBox'
    });
}]);