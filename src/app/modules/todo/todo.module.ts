import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { StoreModule } from "@ngrx/store";
import { EffectsModule } from "@ngrx/effects";
import { featureName, reducers } from "./reducers";
import { TodoRoutingModule } from "./todo-routing.module";
import { TodoComponent } from "./todo.component";
import { ListEffects } from "./effects/todo.effects";
import { HttpClientModule } from "@angular/common/http";

@NgModule({
  declarations: [TodoComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    TodoRoutingModule,
    StoreModule.forFeature(featureName, reducers),
    EffectsModule.forFeature([ListEffects])
  ]
})
export class TodoModule {}
