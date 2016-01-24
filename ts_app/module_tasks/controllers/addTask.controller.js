define(["require", "exports"], function (require, exports) {
    var app_tasksModule;
    (function (app_tasksModule) {
        'use strict';
        var addTaskCtrl = (function () {
            function addTaskCtrl(taskDo, $state) {
                this.taskDo = taskDo;
                this.$state = $state;
                this.taskDo = taskDo;
                this.$state = $state;
                var vm = this;
                this.completed = false;
                vm.addTask = addTask;
                function addTask() {
                    vm.totalTime = 0;
                    taskDo.service.addTask(vm).then(function (response) {
                        vm.sample = "vamsi";
                    });
                }
            }
            addTaskCtrl.$inject = ['taskDo', '$state'];
            return addTaskCtrl;
        })();
        app_tasksModule.addTaskCtrl = addTaskCtrl;
    })(app_tasksModule || (app_tasksModule = {}));
    (function () {
        'use strict';
        angular.module('app_tasksModule').controller('addTaskCtrl', addTaskCtrl);
    })();
});
