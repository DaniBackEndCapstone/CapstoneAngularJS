"use strict";


app.controller('CorrectionsPopulationCtrl', function($scope, $location, $http, DataFactory, $timeout){
  DataFactory.getApiRoot()
    .then((state)=> {
        console.log("result from state", state);
        $scope.state_data = state;
        console.log("stateSTUFF!", state[6])


//graphs
    $scope.genderInfo = ["Male", "Female"];
    $scope.genderTotals = [1978700, 201200];
    $scope.raceInfo = ["White", "Black", "Hispanic", "American Indian/Alaska Native", "Asian", "Native Hawaiian Pacific Islander", "Two or More", "Other", "Unknown"];
    $scope.raceTotals = [582043, 604723, 264056, 22193, 9703, 3312, 410, 8791, 2485];
 $timeout();
  });

});
