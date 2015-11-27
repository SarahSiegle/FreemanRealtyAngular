'use strict';

angular.module('myApp.viewHomepage', ['ngRoute', 'ui.bootstrap'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/viewHomepage', {
    templateUrl: 'viewHomepage/viewHomepage.html',
    controller: 'ViewHomepageCtrl'
  });
}])

.controller('ViewHomepageCtrl', [function() {

}]);

/*
.controller('ViewHomepageCtrl', function ($scope, $modal, $filter, Data) {
    $scope.product = {};
    Data.get('products').then(function(data){
        $scope.products = data.data;
    });
    $scope.changeProductStatus = function(product){
        product.status = (product.status=="Active" ? "Inactive" : "Active");
        Data.put("products/"+product.id,{status:product.status});
    };
    $scope.deleteProduct = function(product){
        if(confirm("Are you sure to remove the product")){
            Data.delete("products/"+product.id).then(function(result){
                $scope.products = _.without($scope.products, _.findWhere($scope.products, {id:product.id}));
            });
        }
    };
    $scope.open = function (p,size) {
        var modalInstance = $modal.open({
          templateUrl: 'partials/productEdit.html',
          controller: 'productEditCtrl',
          size: size,
          resolve: {
            item: function () {
              return p;
            }
          }
        });
        modalInstance.result.then(function(selectedObject) {
            if(selectedObject.save == "insert"){
                $scope.products.push(selectedObject);
                $scope.products = $filter('orderBy')($scope.products, 'id', 'reverse');
            }else if(selectedObject.save == "update"){
                p.description = selectedObject.description;
                p.price = selectedObject.price;
                p.stock = selectedObject.stock;
                p.packing = selectedObject.packing;
            }
        });
    };
    
 $scope.columns = [
                    {text:"ID",predicate:"id",sortable:true,dataType:"number"},
                    {text:"Name",predicate:"name",sortable:true},
                    {text:"Price",predicate:"price",sortable:true},
                    {text:"Stock",predicate:"stock",sortable:true},
                    {text:"Packing",predicate:"packing",reverse:true,sortable:true,dataType:"number"},
                    {text:"Description",predicate:"description",sortable:true},
                    {text:"Status",predicate:"status",sortable:true},
                    {text:"Action",predicate:"",sortable:false}
                ];

})


.controller('productEditCtrl', function ($scope, $modalInstance, item, Data) {

  $scope.product = angular.copy(item);
        
        $scope.cancel = function () {
            $modalInstance.dismiss('Close');
        };
        $scope.title = (item.id > 0) ? 'Edit Product' : 'Add Product';
        $scope.buttonText = (item.id > 0) ? 'Update Product' : 'Add New Product';

        var original = item;
        $scope.isClean = function() {
            return angular.equals(original, $scope.product);
        }
        $scope.saveProduct = function (product) {
            product.uid = $scope.uid;
            if(product.id > 0){
                Data.put('products/'+product.id, product).then(function (result) {
                    if(result.status != 'error'){
                        var x = angular.copy(product);
                        x.save = 'update';
                        $modalInstance.close(x);
                    }else{
                        console.log(result);
                    }
                });
            }else{
                product.status = 'Active';
                Data.post('products', product).then(function (result) {
                    if(result.status != 'error'){
                        var x = angular.copy(product);
                        x.save = 'insert';
                        x.id = result.data;
                        $modalInstance.close(x);
                    }else{
                        console.log(result);
                    }
                });
            }
        };
})




.factory("Data", ['$http', '$location',
    function ($http, $q, $location) {

        var serviceBase = 'api/v1/';

        var obj = {};

        obj.get = function (q) {
            return $http.get(serviceBase + q).then(function (results) {
                return results.data;
            });
        };
        obj.post = function (q, object) {
            return $http.post(serviceBase + q, object).then(function (results) {
                return results.data;
            });
        };
        obj.put = function (q, object) {
            return $http.put(serviceBase + q, object).then(function (results) {
                return results.data;
            });
        };
        obj.delete = function (q) {
            return $http.delete(serviceBase + q).then(function (results) {
                return results.data;
            });
        };
        return obj;
}]);
*/



