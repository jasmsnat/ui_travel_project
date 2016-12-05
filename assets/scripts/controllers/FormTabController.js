myApp.controller("FormTabController", function ($scope) {
    $scope.tabs = [
        {
            title: 'Flight',
            content: 'Dynamic content 1',
            tabIcon: 'glyphicon glyphicon-plane'
        },
        {
            title: 'Train',
            content: 'Dynamic content 2',
            tabIcon: 'fa fa-subway'
            }
  ];

});
