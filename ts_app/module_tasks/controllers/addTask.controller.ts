/// <reference path="../../../typings/require.d.ts" />
/// <reference path="../../mainConfig.ts" />
/// <amd-dependency path="../service_tasks/tasks.service"/>
import app = require('app');
import myService = require('service_tasks/tasks.service');
 export interface MyPageCtrlScope {
    completed: boolean;
    sample: string;
    totalTime: any;
    addTask: () =>
void;
}
 export class addTaskCtrl {
     constructor(public $scope: MyPageCtrlScope, private taskDo:myService.taskDo, private $state) {
         this.taskDo = taskDo;
            this.$state = $state;
            this.$scope.completed = false;
            this.$scope.addTask = addTask;

            //function called on click of addBtn
            //Save data to the server(POST)
            function addTask() {

                this.$scope.totalTime = 0;
                taskDo.service.addTask(this.$scope).then(function(response) {
                    this.$scope.sample = "vamsi";
                });
            }
    }
 }