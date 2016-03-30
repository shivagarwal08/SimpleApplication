angular.module('customer').controller('CustomerAddCtrl',function($scope,$state,customerService){

	$scope.customer = {};
	$scope.locations = customerService.getLocations();
	$scope.submitted = false;

	$scope.save = function(){
		$scope.submitted = true;
		if($scope.custForm.$invalid === true){
			console.log('Form is invalid');
			return;
		}
		else{
			customerService.addCustomer($scope.customer);
			$state.go('customers');
		}
	};

	$scope.cancel = function(){
		$scope.customers = {};
		$state.go('customers');
	};

});