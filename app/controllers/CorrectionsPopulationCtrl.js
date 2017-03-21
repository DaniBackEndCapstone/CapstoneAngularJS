"use strict";


app.controller('CorrectionsPopulationCtrl', function($scope, $location, $http, DataFactory, $timeout){
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



let getSingleStateData = (id)=> {
    DataFactory.getApiRoot()
    .then((state)=>{
    $http.get(`${state.state_data}${id}/`)
    .then((stateObject) => {
      $scope.stateObject = stateObject
      console.log(stateObject)
    })
    .catch((error) => {
      console.log(error)
    });

    });

};

getSingleStateData(45)


});

