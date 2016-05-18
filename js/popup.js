var ua = navigator.userAgent.toLowerCase();

if (ua.indexOf("Safari") != -1 || (ua.indexOf("MSIE") != -1 ) || (!!document.documentMode == true )) {
    document.getElementById("btnPopup").style.display = "none";
}

var appAngular = angular.module('MyApp', ['ngMaterial', 'ngMessages', 'material.svgAssetsCache', 'ngRoute']);

appAngular.controller('AppCtrl', function ($scope, $mdDialog, $mdMedia) {
    $scope.customFullscreen = $mdMedia('xs') || $mdMedia('sm');

    $scope.showPopup = function (ev) {
        var useFullScreen = ($mdMedia('sm') || $mdMedia('xs')) && $scope.customFullscreen;

        $mdDialog.show({
            controller: DialogController,
            templateUrl: 'popup.html',
            parent: angular.element(document.body),
            targetEvent: ev,
            clickOutsideToClose: true,
            fullscreen: useFullScreen
        });

        $scope.$watch(function () {
            return $mdMedia('xs') || $mdMedia('sm');
        }, function (wantsFullScreen) {
            $scope.customFullscreen = (wantsFullScreen === true);
        });

    };
});

function DialogController($scope, $mdDialog) {
    $scope.hide = function () {
        $mdDialog.hide();
    };

    $scope.cancel = function () {
        $mdDialog.cancel();
    };

    $scope.answer = function (answer) {
        $mdDialog.hide(answer);
    };
}