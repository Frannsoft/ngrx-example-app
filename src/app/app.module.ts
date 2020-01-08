import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { StoreModule } from "@ngrx/store";
import { EffectsModule } from "@ngrx/effects";
import { StoreDevtoolsModule } from "@ngrx/store-devtools";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HomeComponent } from "./components/home/home.component";
import { EntityDataModule, DefaultDataServiceConfig } from "@ngrx/data";
import { entityConfig } from "./entity-metadata";

// This sets our custom api endpoint. Without it, by default, @ngrx/data will
// attempt to get entities with a root of this web app's url (http://localhost:4200/).
// https://ngrx.io/guide/data/entity-dataservice#configure-the-defaultdataservice
const defaultDataServiceConfig: DefaultDataServiceConfig = {
  root: `http://localhost:3000/`
};

@NgModule({
  declarations: [AppComponent, HomeComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    StoreModule.forRoot({}),
    EffectsModule.forRoot([]),

    //wire up the config that contains a map to the entities we want to be supported
    //by ngrx/data. It's possible to have a subset of entities configured this way
    //and another subset supported with 'traditional' ngrx.
    EntityDataModule.forRoot(entityConfig),
    StoreDevtoolsModule.instrument()
  ],
  //we have a custom root endpoint for our api. Here is where we tell angular
  // we want to use it rather than the one @ngrx/data ships with.
  providers: [
    { provide: DefaultDataServiceConfig, useValue: defaultDataServiceConfig }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
