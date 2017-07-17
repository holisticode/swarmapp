angular.module('swarmapp').component('hashModalComponent', {
  templateUrl: 'hashDialogContent.html',
  bindings: {
    resolve: '<',
    close: '&',
    dismiss: '&'
  },
  controller: function () {
    var $ctrl = this;

    $ctrl.currentDialogTitle = "Do you already have a Swarmbox configured?";
    $ctrl.swarmHash = "";
    $ctrl.hasBox = false;
    $ctrl.hasBoxShown = false;
    $ctrl.swarmboxFolder = false;

    $ctrl.$onInit = function () {
      //$ctrl.hash = $ctrl.resolve.hash;
    };

    $ctrl.has = function () {
      $ctrl.hasBoxShown = true;
      $ctrl.hasBox = true;
      $ctrl.currentDialogTitle = "Please provide your latest root hash of your Swarmbox";
    };

    $ctrl.hasNot  = function () {
      $ctrl.hasBoxShown = true;
      $ctrl.currentDialogTitle = "Select the folder you want to use with Swarmbox";
    };

    $ctrl.confirmFolder = function () {
      $ctrl.hasBoxShown = true;
      $ctrl.close();
      if (!$ctrl.swarmboxFolder) {
        return console.log("Invalid swarmboxFolder");
      }
      
      fs.stat($ctrl.swarmboxFolder,(err,stats) => {
        if (err) {
          return console.log("Provided swarmboxFolder does not exist or is invalid.");
        }
        console.log("Uploading folder to swarm...");
        uploadToSwarm($ctrl.swarmboxFolder);
      });
    };

    $ctrl.dontUseFolder = function () {
      $ctrl.swarmboxFolder = false;
      $ctrl.close();
    };

    $ctrl.ok = function () {
      $ctrl.close({$value: $ctrl.swarmHash});
    };

    $ctrl.cancel = function () {
      $ctrl.dismiss({$value: 'cancel'});
    };
  }
});