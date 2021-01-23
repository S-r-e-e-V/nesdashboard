var successCallback = function (response) {
  console.log(response);
  return response;
};
var errorCallback = function (error) {
  console.log(error);
  switch (error.status) {
    case 400:
      let err = {
        status: error.status ? error.status : "",
        message: error.statusText ? error.statusText : "",
      };
      return err;
    case 401:
      alert("Unauthorized");
      //   logout();
      return null;
    case 403:
      let err_msg = {
        status: error.status ? error.status : "",
        message: error.statusText ? error.statusText : "",
      };
      return err_msg;
    case 404:
      alert("Not Found");
      return null;

    case 500:
      let errr = {
        status: error.status ? error.status : "",
        message: error.statusText ? error.statusText : "",
      };
      return errr;

    case 502:
      alerter("Server Error");
      // "The server couldn't complete the request."

      return null;

    default:
      return null;
  }
};

app.factory("apiCall", function ($http) {
  var getData = function (url) {
    // Angular $http() and then() both return promises themselves
    return $http({
      method: "GET",
      url: url,
      headers: {
        "Access-Control-Allow-Origin": "*",
      },
    }).then(successCallback, errorCallback);
  };

  var postData = function (url, data) {
    return $http({
      method: "POST",
      url: url,
      data: data,
      headers: {
        "Access-Control-Allow-Origin": "*",
      },
    }).then(successCallback, errorCallback);
  };

  return { getData: getData, postData: postData };
});
