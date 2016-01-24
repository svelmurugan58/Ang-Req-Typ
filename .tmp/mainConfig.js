require.config({
    paths: {
        'angular': '../vendor/js/angular/angular.min',
        'sanitize': '../vendor/js/angular/angular-sanitize.min',
        'ui-route': '../vendor/js/angular/angular-ui-router.min',
        'domReady': '../vendor/js/requirejs-domready/domReady.min',
        'jquery': '../vendor/js/jquery/jquery.min',
        'toastr': '../vendor/js/misc/toastr.min',
        'bootstrapJs': '../vendor/js/bootstrap/bootstrap.min'
    },
    shim: {
        'jquery': { exports: 'jquery' },
        'angular': { exports: 'angular', dep: ['jquery', 'domReady'] },
        'sanatize': { exports: 'sanatize', deps: ['angular'] },
        'ui-route': { exports: 'ui-route', deps: ['angular'] },
    },
    deps: [
        './bootstrap'
    ]
});
