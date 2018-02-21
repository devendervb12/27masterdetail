sap.ui.controller("smax.batch27.MasterDetail.controller.ProductDetails", {

/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf view.ProductDetails
*/
	onInit: function() {
           // get the data from router
	     this._oRouter = this.getOwnerComponent().getRouter();
	     
	     
	     var oController = this;
	     
	    this._oRouter.getRoute("toDetail").attachPatternMatched(function(oEvent){
	    		//	debugger;
	 		var productID = oEvent.getParameters().arguments.prodID;
	 		
	 		oController.getView().bindElement("/ProductSet('"+productID+"')");
	 	});
		
	},
	
/**
* Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
* (NOT before the first rendering! onInit() is used for that one!).
* @memberOf view.ProductDetails
*/
//	onBeforeRendering: function() {
//
//	},

/**
* Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
* This hook is the same one that SAPUI5 controls get after being rendered.
* @memberOf view.ProductDetails
*/
//	onAfterRendering: function() {
//
//	},

/**
* Called when the Controller is destroyed. Use this one to free resources and finalize activities.
* @memberOf view.ProductDetails
*/
//	onExit: function() {
//
//	}
	onPress : function(){
		this.getOwnerComponent().getRouter().navTo("homePage");
	}

});