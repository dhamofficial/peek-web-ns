"use strict";
var forms_1 = require("@angular/forms");
var router_1 = require("@angular/router");
var platform_browser_1 = require("@angular/platform-browser");
var peek_core_config_service_1 = require("../services/peek-core-config.service");
var PeekModuleFactory = (function () {
    function PeekModuleFactory() {
    }
    Object.defineProperty(PeekModuleFactory, "PlatformModule", {
        /**
         * Provide a cross platform Platform module.
         * For the browser this is the "BrowserModule"
         * For NativeScript this is the "NativeScriptModule"
         */
        get: function () {
            if (peek_core_config_service_1.PeekCoreConfigService.IS_WEB()) {
                return platform_browser_1.BrowserModule;
            }
            else if (peek_core_config_service_1.PeekCoreConfigService.IS_MOBILE_NATIVE()) {
                return require("nativescript-angular")["NativeScriptModule"];
            }
            else {
                throw new Error("Unhandled condition " + peek_core_config_service_1.PeekCoreConfigService.PLATFORM_TARGET);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PeekModuleFactory, "FormsModule", {
        /**
         * Provide a cross platform Browser module
         */
        get: function () {
            if (peek_core_config_service_1.PeekCoreConfigService.IS_WEB()) {
                return forms_1.FormsModule;
            }
            else if (peek_core_config_service_1.PeekCoreConfigService.IS_MOBILE_NATIVE()) {
                return require("nativescript-angular")["NativeScriptFormsModule"];
            }
            else {
                throw new Error("Unhandled condition " + peek_core_config_service_1.PeekCoreConfigService.PLATFORM_TARGET);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PeekModuleFactory, "RouterModule", {
        /**
         * Provide a cross platform Router module
         */
        get: function () {
            if (peek_core_config_service_1.PeekCoreConfigService.IS_WEB()) {
                return router_1.RouterModule;
            }
            else if (peek_core_config_service_1.PeekCoreConfigService.IS_MOBILE_NATIVE()) {
                return require("nativescript-angular")["NativeScriptRouterModule"];
            }
            else {
                throw new Error("Unhandled condition " + peek_core_config_service_1.PeekCoreConfigService.PLATFORM_TARGET);
            }
        },
        enumerable: true,
        configurable: true
    });
    return PeekModuleFactory;
}());
exports.PeekModuleFactory = PeekModuleFactory;
//# sourceMappingURL=/home/peek/project/peek-web-ns/src/peek-web-ns/factories/peek-module.factory.js.map