'use strict';

angular.module('ensembleWeb')
  .controller('MainCtrl', function ($scope, $http) {

    $http.get('https://ensembleio.herokuapp.com/search?search=Margaux').
      success(function(data) {
        $scope.news = data;
      });


    $scope.url='https://ensembleio.herokuapp.com/images/people/';

    $scope.professionnel = {
     profession: 'Aide-soignant'
   };

    $scope.comment = function(event) {
    $mdDialog.show(
      $mdDialog.alert()
        .title('Ajout de commentaire')
        .content('Les commentaires sont désactivés')
        .ariaLabel('Commentaires désactivés')
        .ok('D\'accord')
        .targetEvent(event)
    );
  };
  });
