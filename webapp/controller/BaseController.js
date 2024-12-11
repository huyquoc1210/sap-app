sap.ui.define(["sap/ui/core/mvc/Controller"], function (Controller) {
  "use strict";

  /**
   * @namespace sap.m.sample.TsTodos.webapp.controller
   */
  var BaseController = Controller.extend("sap.m.sample.TsTodos.webapp.controller.BaseController", {
    /**
     * Convenience method for accessing the component of the controller's view.
     * @returns The component of the controller's view
     */
    getOwnerComponent: function _getOwnerComponent() {
      return Controller.prototype.getOwnerComponent.call(this);
    },
    /**
     * Convenience method for getting the i18n resource bundle of the component.
     * @returns The i18n resource bundle of the component
     */
    getResourceBundle: function _getResourceBundle() {
      var oModel = this.getOwnerComponent().getModel("i18n");
      return oModel.getResourceBundle();
    },
    /**
     * Convenience method for getting the view model by name in every controller of the application.
     * @param [sName] The model name
     * @returns The model instance
     */
    getModel: function _getModel(sName) {
      var _this$getView;
      return (_this$getView = this.getView()) === null || _this$getView === void 0 ? void 0 : _this$getView.getModel(sName);
    },
    /**
     * Convenience method for setting the view model in every controller of the application.
     * @param oModel The model instance
     * @param sName The model name
     * @returns The current base controller instance
     */
    setModel: function _setModel(oModel, sName) {
      var _this$getView2;
      (_this$getView2 = this.getView()) === null || _this$getView2 === void 0 || _this$getView2.setModel(oModel, sName);
      return this;
    }
  });
  return BaseController;
});
//# sourceMappingURL=BaseController.js.map