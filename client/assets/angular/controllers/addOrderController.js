console.log("Loading Clientside addOrderController.js");

app.controller('addOrderController', ['$scope', '$location', 'productFactory','companyFactory' , '$cookieStore', function ($scope, $location, productFactory, companyFactory, $cookieStore) {

  // Initialize Required Attributes
  // -------------------------------------------------------------------------
  //                            Check Logged In User
  // -------------------------------------------------------------------------
  var CheckingUser = function () {
    if (!$cookieStore.get('logged-in')) {
      console.log("Not Logged In");
      $location.url('/');
    } else {
      console.log("logged in");

      console.log($cookieStore.get('user_id'));
    }
  };
  CheckingUser();

  // -------------------------------------------------------------------------
  //                            Log Out User
  // -------------------------------------------------------------------------
  _this.logout = function () {
    userFactory.logout(function (factoryResponse) {
      console.log(factoryResponse);
    });
  };

  // -------------------------------------------------------------------------
  //                            Add Required Methods
  // -------------------------------------------------------------------------
  $scope.companies = []
  companyFactory.index(function(companies){
    console.log('returned from the controller with the companies',companies.data);
    $scope.companies = companies.data
  })
  $scope.start = function(){
    console.log('got to addOrderController with company',$scope.order);
    $location.url(`/add_order/${$scope.order.company._id}`)
  }
}]);
