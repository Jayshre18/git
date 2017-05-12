var app1=angular.module('myApp',['ngRoute']);app1.config(['$routeProvider',function($routeProvider){$routeProvider.when('/customerManagement',{templateUrl: "customerManagement.html",controller:"tableController"}) 
.when('/orderlist',{templateUrl:"orderlist.html",controller:"myControls"})
.otherwise({redirectTo: "/customerManagement"})}]);
var app=angular.module('customerManagement',[]);app.controller("tableController",function($scope){$scope.customers=[{photo:"man.png",name:"Ward Bell" ,place:"Dalas,Texas", orders:"15",orderslist:"ward.html"},{photo:"man.png",name:"Robin Cleark", place:"Los Angeles,California", orders:"8"},{photo:"man.png",name:"Albert Einstein", place:"Seattle,Washington" ,orders:"10"},{photo:"woman.png",name:"Cindy Jamison", place:"Chandler,Arizona", orders:"20"},{photo:"woman.png",name:"Rachel Green", place:"Blooming Dales,NY", orders:"40"},{photo:"man.png",name:"Ross Geller", place:"Central Perk,NY", orders:"14"}];
$scope.tabl=false;$scope.pane=true;$scope.class="active";$scope.panelFunc = function() {        $scope.class="";        $scope.pane = true;  $scope.tabl=false;    }$scope.tableFunc=function(){        $scope.class="";        $scope.tabl=true;  $scope.pane=false;}})
angular.module("ordersList",[]).controller("myControls",function($scope){$scope.balance=10000;$scope.orders=[{Sno:'1',transactionDate:'01-may-2017',withdrawalAmount:'500'},{Sno:'3',transactionDate:'03-may-2017',withdrawalAmount:'300'},{Sno:'4',transactionDate:'04-may-2017',withdrawalAmount:'100'},{Sno:'2',transactionDate:'02-may-2017',withdrawalAmount:'400'},{Sno:'5',transactionDate:'05-may-2017',withdrawalAmount:'200'}];
$scope.currentOrder=1;
$scope.sortBy=function(x){$scope.currentOrder++; if($scope.currentOrder %2 == 0){$scope.orderValue=-x;}else{$scope.orderValue=x; }
}  
 });
