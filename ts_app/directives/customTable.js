/*
	custom table component with basic functionality declkared as a directive for use in many places
*/
define(['./module'], function (directives) {
	'use strict';
	directives.directive("customTable",function ($compile) {
		return{
			restrict:'EA',
			scope:{
				datajson:"=datajson",
				search:"@search",
				onrowclick:"&onrowclick",
				configuration:"=configuration"
			},
			replace:true,
			template:'<div class="table-responsive"><input type="text" class="form-control pull-right" style="max-width:20%" ng-model="searchFilter" placeholder="filter records..." /><table class="table table-striped table-bordered table-hover"><thead></thead><tbody></tbody></table></div>',
			link:function (scope,elem,attr) {
				scope.search && elem.append($compile("")(scope));
				var tableHeader="<tr>";
				for(var i=0;i<scope.configuration.length;i++){
					tableHeader+="<th>"+scope.configuration[i].title+"</th>";
				}
				tableHeader+="</tr></thead>";
				elem.find('thead').append(tableHeader);
				var tableBody=$compile("<tr class='pointer' ng-repeat='data in datajson|filter:searchFilter' ng-click='onrowclick({row:data})'><td ng-repeat='column in configuration'>{{data[column.map]}}</td><tr>")(scope);
				elem.find('tbody').append(tableBody);
			}
		};
	});
});
