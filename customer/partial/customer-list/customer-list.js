angular.module('customer').controller('CustomerListCtrl',function($scope,customerService,$modal){
	
	$scope.customers = customerService.getCustomers();
	$scope.order = false;
	$scope.search = "";

	$scope.delete = function(customer){
		var modalInstance = $modal.open({
			templateUrl:'customer/partial/customer-list/confirm.html',
			controller : 'ModalInstanceCtrl',
			size:'lg'
		});
		modalInstance.result.then(function(choice){
			if(choice == 'Yes'){
				$scope.customers  = customerService.deleteCustomer(customer);
			}
		});
	};
});

angular.module('customer').controller('ModalInstanceCtrl',function($scope,$modalInstance){
	$scope.ok = function(){
		$modalInstance.close('Yes');
	};
	$scope.cancel = function(){
		$modalInstance.dismiss('No');
	};
});

angular.module('customer').directive('customerRecord',function(){
	return{
		link:function ($scope, iElem, iAttrs){			
			iElem.bind('click',function(){
				var allRows = document.getElementsByClassName("customerRecord");
				angular.element(allRows).css('background-color','white');
				angular.element(this).css('background-color','yellow');
			});
		}
	};
});