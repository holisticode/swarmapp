'use strict';

module.exports = function(swarmapp) {
  require("./app/components/files/files.index")(swarmapp);
  require("./app/components/transfers/transfers.index")(swarmapp);
  require("./app/directives/droppable");
  require("./app/directives/draggable");
  require("./app/directives/selectFolder");
  require("./app/components/dialogs/hashDialog");
  require("./app/components/dialogs/errorDialog");
  require("./app/components/dialogs/askDialog");
  require("./app/components/dialogs/loadingSwarmboxDialog");
};
