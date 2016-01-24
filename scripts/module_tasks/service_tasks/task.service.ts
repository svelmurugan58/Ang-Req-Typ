declare function define(...params: any[]): void;
module taskModule {
    export interface Service {
        setSelectedTask: (data: Task) => void;
        getAllTasks: (task: Task) => any;
        saveTask: (task: Task) => any;
        addTask: (task: Task) => any;
    }

    export interface Task {
        title: string;
        completed: boolean;
        timings: any[];
        totalTime: number;
        id: number;
        service: Service
    }

   
    //taskDo.$inject = ['$http', '$q', 'ToastrSrvc'];
    export class taskDo {
        static $inject = ['$http', '$q', 'toastrSrvc'];
        
        public constructor(public $http: any, public $q: any, public toastrSrvc: any) { 
            var root = "http://localhost:3000/tasks";
            var task: Task = {
                title: "",
                completed: false,
                timings: [],
                totalTime: 0,
                id: 0,
                service: service
            };

            var self: Task = task;
            var service: Service = {
                setSelectedTask: function(data: Task) {
                    self.id = data.id;
                    self.title = data.title;
                    self.completed = data.completed;
                    self.timings = data.timings || new Array();
                    self.totalTime = data.totalTime;
                },
                getAllTasks: function() {
                    var deferred = this.$q.defer();
                    this.$http({ method: 'GET', url: this.root }).
                        success(function(data, status, headers, config) {
                            return deferred.resolve(data);
                        }).
                        error(function(data, status, headers, config) {
                            this.toastrSrvc.notifyError(data.message);
                            return deferred.reject(data);
                        });
                    return deferred.promise;
                },
                saveTask: function(data) {
                    var deferred = this.$q.defer();
                    this.$http({ method: 'PUT', url: this.root + "/" + data.id, data: data }).
                        success(function(response) {
                            this.toastrSrvc.notifySuccess("Task Updated Sucessfully");
                            return deferred.resolve(data);
                        }).
                        error(function(err, options) {
                            this.toastrSrvc.notifyError(err.message);
                            return deferred.reject(data);
                        });
                    return deferred.promise;
                },
                addTask: function(data) {
                    var defered = this.$q.defer();
                    this.$http({ method: "POST", url: this.root, data: data }).
                        success(function(resp) {
                            this.toastrSrvc.notifySuccess("Task Added Sucessfully");
                            return defered.resolve(resp);
                        }).error(function(err, opt) {
                            this.toastrSrvc.notifyError(err.message);
                            return defered.reject(err);
                        });
                    return defered.promise;
                }
            }
        }
    }
}

define(['../module'], function(app_tasks) {
    'use strict';
    app_tasks.factory("taskDo", taskModule.taskDo);
})
