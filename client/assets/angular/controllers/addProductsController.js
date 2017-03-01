console.log("Loading Clientside addProductsController.js");

app.controller('addProductsController', ['$scope', '$location', 'productFactory','companyFactory','$routeParams', function ($scope, $location, productFactory, companyFactory,$routeParams) {

  // Initialize Required Attributes

  // -------------------------------------------------------------------------
  //                            Add Required Methods
  // -------------------------------------------------------------------------
  $scope.products = []
  $scope.order = {}

  companyFactory.findCompany($routeParams.company_id,function(company){
    console.log('returned from the controller with the company',company.data);
    $scope.company = company.data
  })

  $scope.start = function(){
    console.log('you clicked Add to order with this product',$scope.product);
    // $scope.products.push($scope.order.product)
    if($scope.product == undefined){
      console.log('did not select a product');
      return
    }
    var contains = false
    if($scope.products.length == 0){
      $scope.products.push($scope.product)
    }
    for (var i = 0; i < $scope.products.length; i++) {
      if($scope.product==$scope.products[i]){
        contains = true
      }
    }
    if(contains == false){
      $scope.products.push($scope.product)
    }
  }
  $scope.confirmOrder = function(){
    console.log('clicked confirm order',$scope.order);

  }
}]);
