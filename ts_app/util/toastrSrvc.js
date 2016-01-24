/**
 To show the Popup messages in a modal.
**/

define(['./module','toastr'], function (app_util,toastr) {
	'use strict';
	app_util.factory('ToastrSrvc',[function(){
		toastr.options = {
			"closeButton": true,
			"debug": false,
			"positionClass": "toast-top-right",//"toast-top-full-width",
			"onclick": null,
			"showDuration": "300",
			"hideDuration": "1000",
			"timeOut": "5000",
			"extendedTimeOut": "1000",
			"showEasing": "swing",
			"hideEasing": "linear",
			"showMethod": "fadeIn",
			"hideMethod": "fadeOut"
		};
		return  {
			notifyError:function(msg){
				toastr.error(msg,"");
			},
			notifySuccess:function(msg){
				toastr.success(msg,"");
			}
		};
	}]);
});
