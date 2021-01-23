angular.module("app.main", []).controller("mainCtrl", function ($scope) {
  $scope.companyDetails = [
    { name: "hello", symbol: "1jfkdslfjklds", stock: "00000" },
    { name: "1hello", symbol: "2jfkdslfjklds", stock: "00000" },
    { name: "2hello", symbol: "3jfkdslfjklds", stock: "00000" },
    { name: "3hello", symbol: "4jfkdslfjklds", stock: "00000" },
    { name: "4hello", symbol: "5jfkdslfjklds", stock: "00000" },
    { name: "hello", symbol: "j6fkdslfjklds", stock: "00000" },
    { name: "hello", symbol: "j6fkdslfjklds", stock: "00000" },
    {
      name: "hello",
      symbol:
        "jf7kdslfjkldflkd sfjdskfjsdklfjsdkl fjsdklfjsklfjsdklfjdsklfjd sfjjfbliosfjvfsdklfjldskfs flfjsklfjldskfjsf sdlfjsdlkfjs",
      stock: "00000",
    },
    { name: "hello", symbol: "jf8kdslfjklds", stock: "00000" },
    { name: "hello", symbol: "j6fkdslfjklds", stock: "00000" },
    { name: "hello", symbol: "j6fkdslfjklds", stock: "00000" },
    { name: "hello", symbol: "jf7kdslfjklds", stock: "00000" },
    { name: "hello", symbol: "jf8kdslfjklds", stock: "00000" },
    { name: "hello", symbol: "j6fkdslfjklds", stock: "00000" },
    { name: "hello", symbol: "j6fkdslfjklds", stock: "00000" },
    { name: "hello", symbol: "jf7kdslfjklds", stock: "00000" },
    { name: "hello", symbol: "jf8kdslfjklds", stock: "00000" },
    { name: "hello", symbol: "j6fkdslfjklds", stock: "00000" },
    { name: "hello", symbol: "j6fkdslfjklds", stock: "00000" },
    { name: "hello", symbol: "jf7kdslfjklds", stock: "00000" },
    { name: "hello", symbol: "jf8kdslfjklds", stock: "00000" },
  ];
  $scope.search = function (item) {
    if ($scope.searchText == undefined) {
      return true;
    } else {
      if (
        item.name.toLowerCase().indexOf($scope.searchText.toLowerCase()) !=
          -1 ||
        item.symbol.toLowerCase().indexOf($scope.searchText.toLowerCase()) != -1
      ) {
        return true;
      }
    }
    return false;
  };
});
