"use strict";


app.controller('CorrectionsPopulationCtrl', function($scope, $location, $http, DataFactory, $timeout){
  DataFactory.getApiRoot()
    .then((state)=> {
        console.log("result from state", state);
        $scope.state_data = state;
        console.log("stateSTUFF!", state[6])
        $timeout();

//graphs
    $scope.genderInfo = ["Male", "Female"];
    $scope.genderTotals = [1, 15];
    $scope.raceInfo = ["White", "Black", "Hispanic", ""];
    $scope.raceTotals = [];

  });

});

//loop through data and push it into an array and then make sure the labels have the same index as the data in the data array
//loop it in the js page and then output


// //angular directives for map doughnut graph

// //   angular.module("app", ["chart.js"]).controller("DoughnutCtrl", function ($scope) {
// //   $scope.labels = ["Download Sales", "In-Store Sales", "Mail-Order Sales"];
// //   $scope.data = [300, 500, 100];
// // });


//  //First, retrieve all software Active Users, Sales Rep email addresses, and currently logged in user's Domains
//   $scope.fromThen = $q.all([
//     DashboardFactory.getAllActiveUserEmailAddresses().then(getAllActiveUserEmailAddressesCallback),
//     DashboardFactory.getUserObjectsArray().then(getUserObjectsArrayCallback),
//     DashboardFactory.getLoggedUserDomains($rootScope.user.uid).then(getLoggedUserDomainsCallback)
//   ])
//   //Then, use this data to perform final database call and route data to the dashboard graphs/charts
//   .then(function(values) {
//     $scope.barDataWrapperArray = [];
//     $scope.loggedInUserActiveUsersWrapperArray = [];
//     $scope.barData = [];
//     $scope.barLabels = [];
//     $scope.barSeries = ['Active Users'];
//     $scope.salesCenterActiveUserQuota = 100;
//     $scope.loggedInUserActiveUserQuota = 40;
//     $scope.submittedDomainsQuota = 20;
//     let totalNumberOfActiveUsers = [];

//     $scope.userObjectsArray.forEach(function(userObject) {

//       DashboardFactory.getLoggedUserDomains(userObject.uid).then(function(submittedDomains) {

//         let afterAtSign;
//         let numberOfActiveUsers = 0;

//         //For each Sales Rep's submitted domain name, compare to full list of active users to find matches
//         submittedDomains.forEach(function(submittedDomain) {
//           $scope.allActiveUserEmailAddresses.forEach(function(activeUserEmail) {
//             afterAtSign = activeUserEmail.substr(activeUserEmail.indexOf("@"));
//             if (afterAtSign === submittedDomain.domainName) {
//               numberOfActiveUsers++;
//             }
//           });
//         });

//         $scope.barData.push(numberOfActiveUsers);
//         totalNumberOfActiveUsers.push(numberOfActiveUsers);
//         if (userObject.uid === $rootScope.user.uid) {
//           if (numberOfActiveUsers <= $scope.loggedInUserActiveUserQuota) {
//             $scope.loggedInUserActiveUsersWrapperArray.push(numberOfActiveUsers);
//             $scope.loggedInUserActiveUsersWrapperArray.push($scope.loggedInUserActiveUserQuota - numberOfActiveUsers);
//             $scope.loggedInUserActiveUserLabels = ["My Active Users", "Needed"];
//           } else {
//           $scope.loggedInUserActiveUsersWrapperArray.push($scope.loggedInUserActiveUserQuota);
//           $scope.loggedInUserActiveUserLabels = ["My Active Users", "Needed"];
//         }
//       }
//         if (totalNumberOfActiveUsers.length === $scope.userObjectsArray.length) {
//           $scope.salesCenterActiveUsersWrapper = [];
//           $scope.salesCenterActiveUsers = totalNumberOfActiveUsers.reduce(function(a, b) {
//             return a + b;
//           });
//           if ($scope.salesCenterActiveUsers <= $scope.salesCenterActiveUserQuota) {
//             $scope.salesCenterActiveUsersWrapper.push($scope.salesCenterActiveUsers);
//             $scope.salesCenterActiveUsersWrapper.push($scope.salesCenterActiveUserQuota - $scope.salesCenterActiveUsers);
//           } else {
//             $scope.salesCenterActiveUsersWrapper.push($scope.salesCenterActiveUserQuota);
//           }
//         }
//         $scope.barLabels.push(userObject.username);
//         $scope.salesCenterActiveUserLabels = ["All Active Users", "Needed"];
//       });
//     });

//     $scope.barDataWrapperArray.push($scope.barData);

//   //Doughnut Chart - Logged in Sales Rep's Submitted Domains
//     $scope.loggedInUserSubmittedDomainLabels = ["My Domains", "Needed"];
//     $scope.loggedInUserNumberOfSubmittedDomains = [];
//     if ($scope.loggedInUserDomains.length <= $scope.submittedDomainsQuota) {
//       $scope.loggedInUserNumberOfSubmittedDomains.push($scope.loggedInUserDomains.length);
//       $scope.loggedInUserNumberOfSubmittedDomains.push($scope.submittedDomainsQuota - $scope.loggedInUserDomains.length);
//     } else {
//       $scope.loggedInUserNumberOfSubmittedDomains.push($scope.submittedDomainsQuota);
//     }
//   });//end of $q.all.then()
// });
// Contact GitHub API Training Shop Blog About






// // myApp.factory('myService', function($http) {

// //     var getData = function() {

// //         // Angular $http() and then() both return promises themselves
// //         return $http({method:"GET", url:"/my/url"}).then(function(result){

// //             // What we return here is the data that will be accessible
// //             // to us after the promise resolves
// //             return result.data;
// //         });
// //     };


// //     return { getData: getData };
// // });


// // function myFunction($scope, myService) {
// //     var myDataPromise = myService.getData();
// //     myDataPromise.then(function(result) {

// //        // this is only run after getData() resolves
// //        $scope.data = result;
// //        console.log("data.name"+$scope.data.name);
// //     });
// // }




// // let getSingleStateData = (id)=> {
// //     DataFactory.getApiRoot()
// //     .then((state)=>{
// //       console.log("state", state)
// //     $http.get(`${state.state_data}${id}/`)
// //     .then((stateObject) => {
// //       $scope.stateObject = stateObject
// //       // $scope.apply
// //       console.log(stateObject)
// //     })
// //     .catch((error) => {
// //       console.log("error", error)
// //     });

// //     });

// // };

// // getSingleStateData(15)
// // });




// //angular directives for map doughnut graph

// //   angular.module("app", ["chart.js"]).controller("DoughnutCtrl", function ($scope) {
// //   $scope.labels = ["Download Sales", "In-Store Sales", "Mail-Order Sales"];
// //   $scope.data = [300, 500, 100];
// // });

