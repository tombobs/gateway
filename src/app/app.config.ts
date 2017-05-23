import {IAppConfig} from "./interfaces";
const useMocks = true;

import {InjectionToken} from "@angular/core";

export let APP_CONFIG = new InjectionToken<string>('app.config');


export const AppConfig: IAppConfig = {
  apiUrl: useMocks ? 'http://localhost:8080/' : 'http://10.2.108.20:82/'
}
