"use strict";

app.factory('DataFactory', [
  "$http",
  "apiUrl",
  ($http, apiUrl) => {
    return {
      getApiRoot () {
        return $http({
          url: 'http://localhost:7000/state_data/',
        }).then(res => res.data);
      }
    };
  }]
);
