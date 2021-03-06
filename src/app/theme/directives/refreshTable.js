(function() {
	'use strict';
	angular
		.module('BlurAdmin.theme')
		.directive('refreshTable', refreshTable)

	function refreshTable() {
		return {
			require: 'stTable',
			restrict: "A",
			link: function(scope, elem, attr, table) {
				scope.$on("refreshProducts", function() {
					table.pipe(table.tableState());
				});
				
				scope.$on("refreshWorkers", function() {
					table.pipe(table.tableState());
				});
				
				scope.$on("refreshWorkersGroup", function() {
					table.pipe(table.tableState());
				});
				
			}
		}
	};

})();