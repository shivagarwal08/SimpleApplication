angular.module('customer').factory('customerService',function(localStorageService) {

	var customerService = {};

	customerService.getLocations = function(){
		localStorageService.set('locations',['India','USA','UK']);
		var locations = localStorageService.get('locations') || [];
		return locations;
	};
	customerService.getCustomers = function(){
		var customers = localStorageService.get('customers') || [];
		return customers;		
	};

	customerService.addCustomer = function(customer){
		var customers = localStorageService.get('customers') || [];
		customers.push(customer);
		localStorageService.set('customers',customers);		
		return customers;
	};

	customerService.deleteCustomer = function(customer){
		var customers = localStorageService.get('customers') || [];
		var length = customers.length;
		for(var i=0; i<length; i++){
			if(customer.name === customers[i].name){
				customers.splice(i,1);
				break;
			}
		}
		localStorageService.set('customers',customers);
		return customers;
	};

	return customerService;
});