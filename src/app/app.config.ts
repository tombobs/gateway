const useMocks = false;

import {InjectionToken} from "@angular/core";

export let APP_CONFIG = new InjectionToken<string>('app.config');

export interface IAppConfig {
  apiUrl: string;
}

export const AppConfig: IAppConfig = {
  apiUrl: useMocks ? 'http://localhost:8080/' : 'http://ukwy13434:82/'
}
