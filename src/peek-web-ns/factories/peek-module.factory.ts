import {ModuleWithProviders} from "@angular/core";
import {FormsModule} from "@angular/forms";
import {RouterModule} from "@angular/router";
import {PeekCoreConfigService} from "../services/peek-core-config.service";

            // import {NativeScriptModule as NsMod} from "nativescript-angular";
            // import {NativeScriptFormsModule as NsFormsMod} from "nativescript-angular/forms";
            // let FMod = require("nativescript-angular/forms")["NativeScriptFormsModule"];

export class PeekModuleFactory {


    /**
     * Provide a cross platform Browser module
     */
    static get FormsModules(): ModuleWithProviders[] {
        if (PeekCoreConfigService.IS_WEB()) {
            return [(<any>FormsModule)];

        } else if (PeekCoreConfigService.IS_MOBILE_NATIVE()) {
            // NativeScriptFormsModule
            let Mod = require("nativescript-angular")["NativeScriptModule"];
            let FMod = require("nativescript-angular/forms")["NativeScriptFormsModule"];
            return [(<any>FormsModule), Mod, FMod];

        } else {
            throw new Error(`Unhandled condition ${PeekCoreConfigService.PLATFORM_TARGET}`);
        }
    }

    /**
     * Provide a cross platform Router module
     */
    static get RouterModule(): any {
        if (PeekCoreConfigService.IS_WEB()) {
            return (<any>RouterModule);

        } else if (PeekCoreConfigService.IS_MOBILE_NATIVE()) {
            let Mod = require("nativescript-angular")["NativeScriptRouterModule"];
            return Mod;

        } else {
            throw new Error(`Unhandled condition ${PeekCoreConfigService.PLATFORM_TARGET}`);
        }
    }

}

