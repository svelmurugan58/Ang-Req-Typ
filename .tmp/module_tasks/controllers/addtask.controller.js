define(["require", "exports", "../service_tasks/tasks.service"], function (require, exports) {
    var addTaskCtrl = (function () {
        function addTaskCtrl($scope, taskDo, $state) {
            this.$scope = $scope;
            this.taskDo = taskDo;
            this.$state = $state;
            this.taskDo = taskDo;
            this.$state = $state;
            this.$scope.completed = false;
            this.$scope.addTask = addTask;
            function addTask() {
                this.$scope.totalTime = 0;
                taskDo.service.addTask(this.$scope).then(function (response) {
                    this.$scope.sample = "vamsi";
                });
            }
        }
        return addTaskCtrl;
    })();
    exports.addTaskCtrl = addTaskCtrl;
});
