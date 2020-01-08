import { Component } from "@angular/core";
import { Store } from "@ngrx/store";
import { AppState } from "./reducers/index";
import * as appActions from "./actions/app.actions";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  title = "ngrx-example-app";

  constructor(private store: Store<AppState>) {
    store.dispatch(appActions.applicationStarted());
  }
}
