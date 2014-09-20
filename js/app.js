(function(){
// Define Angular Module
var app = angular.module('store', [ ]);

// Define Angular Controller
app.controller('StoreController', function(){
	this.product = gem;
});

// Called by controller.product ^
var gem = {
	name: 'Dodecahedron',
	price: 2.95,
	description: 'Some gems have hidden quality behind their luster, beyond their shine. Dodecahedron is one of those gems.'
};

})();