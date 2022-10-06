import { ApplicationRef, DoBootstrap, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { environment } from '../environments/environment';
import {KeycloakBearerInterceptor, KeycloakService} from 'keycloak-angular';
import {Store, StoreModule} from '@ngrx/store';
import { initApplication } from '../../../../libs/common/src/lib/init/store/actions/init.actions';
import {HTTP_INTERCEPTORS, HttpClient} from "@angular/common/http";
import {TranslateHttpLoader} from "@ngx-translate/http-loader";
import {TranslateLoader, TranslateModule} from "@ngx-translate/core";
import {StoreDevtoolsModule} from "@ngrx/store-devtools";
import {EffectsModule} from "@ngrx/effects";
import {RootComponent} from "./global/root/root.component";
import {globalEffects, globalReducers} from "./global/store";

export const HttpLoaderFactory = (http: HttpClient) => new TranslateHttpLoader(http, './assets/i18n/');

@NgModule({
  declarations: [RootComponent],
  imports: [
    BrowserModule,
    TranslateModule.forRoot({
      defaultLanguage: 'en',
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      },
    }),
    StoreModule.forRoot(globalReducers),
    StoreDevtoolsModule.instrument({
      maxAge: 50,
    }),
    EffectsModule.forRoot(globalEffects),
  ],
  providers: [
    {
      provide: KeycloakService,
      useClass: environment.services.keycloak,
    },
    {
      provide: 'CORE_SERVICE_URL',
      useValue: environment.coreServiceUrl,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: KeycloakBearerInterceptor,
      multi: true,
    },
  ]
})
export class AppModule implements DoBootstrap {
  constructor(
    private readonly keycloak: KeycloakService,
    private readonly store: Store
  ) {}

  ngDoBootstrap(appRef: ApplicationRef): void {
    this.keycloak
      .init({
        config: {
          url: environment.authUrl,
          realm: environment.realm,
          clientId: environment.clientId,
        },
        initOptions: {
          onLoad: 'login-required',
          checkLoginIframe: false,
        },
        loadUserProfileAtStartUp: true,
        enableBearerInterceptor: true,
      })
      .then(() => {
        appRef.bootstrap(RootComponent);
        this.store.dispatch(initApplication());
      })
      .catch((err) => {
        console.error(err);
      });
  }
}
