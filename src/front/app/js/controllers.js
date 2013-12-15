'use strict';

/* Controllers */

angular.module('KiteMail.controllers', []).
  controller('InboxesListController', function($scope) {
        $scope.inboxes = [
            {"name": "Inbox", },
            {"name": "Trash", },
            {"name": "Spam",  },];
            
}).controller('MailsListController', ['$scope', 'Emails', function($scope, Emails) {
        $scope.threads = Emails.threads({username: "karim"});
}]).controller('LoginController', function($scope) {
    
}).controller('ThreadController', function($scope, $routeParams, Emails) {
    $scope.thread = Emails.thread({username: "karim", "id": $routeParams.id});
});
