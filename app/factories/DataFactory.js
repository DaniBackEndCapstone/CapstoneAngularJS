"use strict";

app.factory('DataFactory', [
  "$http",
  "apiUrl",
  ($http, apiUrl) => {
    return {
      getApiRoot () {
        return $http({
          url: apiUrl,
        }).then(res => res.data);
      }
    };
  }]
);
