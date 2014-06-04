﻿'use strict';

angular
  .module('settings')
  .controller('SettingsCtrl', function ($scope, settingsFactory) {

  /////// CONTROLLER FUNCTION DEFINITIONS (BEGIN) ///////

  // Description: Saves settings to the factory.
  $scope.SaveSettings = function () {
    settingsFactory.Tolerance = $scope.Tolerance;
  };

  /////// CONTROLLER FUNCTION DEFINITIONS (END) ///////

  /////// CONTROLLER INTIALIZATION (BEGIN) ///////

  $scope.Tolerance = settingsFactory.Tolerance;

  /////// CONTROLLER INTIALIZATION (BEGIN) ///////
});