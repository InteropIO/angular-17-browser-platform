import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { IOConnectNg } from '@interopio/ng';

import { routes } from './app.routes';

import browserConfig from './config.json';
import IOBrowserPlatform, { IOConnectBrowserPlatform } from '@interopio/browser-platform';
export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    importProvidersFrom(
      IOConnectNg.forRoot({
        browserPlatform: {
          factory: () => {
            return IOBrowserPlatform({
              ...browserConfig as IOConnectBrowserPlatform.Config,
              serviceWorker: { url: './service-worker.js' }
            });
          }
        }
      })
    )
  ]
};
