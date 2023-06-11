sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast",
    "sap/ui/core/Fragment"
],function(Controller,MessageToast,Fragment){
    "use strict";
    return Controller.extend("sap.ui.demo.walkthrough.App", {
    
        onShowHello: function () {
            var oBundle=this.getView().getModel("i18n").getResourceBundle();
            var sRecipient=this.getView().getModel().getProperty("/recipient/name");
            var sMsg=oBundle.getText("helloMsg",[sRecipient]);
            MessageToast.show(sMsg)
        },
        onOpenDialog:function(){
             var oView=this.getView()
             if(!this.byId("helloDialog")){
                Fragment.load({
                    id:oView.id,
                    name:"sap.ui.demo.walkthrough.view.HelloDialog"
                }).then(function(oDialog){
                    //connect Dialog to the root view
                    oView.addDependent(oDialog);
                    oDialog.open();
                })
             }else{
                 this.byId("hellDialog").open();
             }
        }

    })
})