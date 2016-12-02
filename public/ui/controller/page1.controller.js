sap.ui.define([
   "sap/ui/core/mvc/Controller"
], function (Controller) {
   "use strict";
   return Controller.extend("com.bianix.ui.controller.page1", {
       onShowHello: function(e){
         //  $(e.getSource()).fadeOut();
         sap.m.MessageToast.show('Hello')

       }


   });
});