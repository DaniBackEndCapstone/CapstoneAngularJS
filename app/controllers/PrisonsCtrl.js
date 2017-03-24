"use strict";

app.controller('PrisonsCtrl', function($scope, $location, $http, DataFactory, $timeout){
  DataFactory.getApiRoot()
    .then((state)=> {
        console.log("result from state", state);
        $scope.state_data = state;
        console.log("stateSTUFF!", state[6])
        $timeout();
  });
});
