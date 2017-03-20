"use strict";


app.controller('DataVisualizationCtrl', function($scope, $location, $http, DataFactory, $timeout){
  DataFactory.getApiRoot()
    .then((state)=> {
      $http({
        url: `${state.state_data}`,
        method: 'GET',
      })
      .then((items)=> {
        console.log("result from state.state_data", items);
        $scope.state_data = items.data.results;
        // $scope.timeout();
      });
    });
});

