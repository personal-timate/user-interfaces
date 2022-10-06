import { NgModule } from '@angular/core';
import { ReactiveComponentModule } from '@ngrx/component';
import {CommonModule} from "@timate/common";

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ReactiveComponentModule,
  ],
  exports: [
    CommonModule,
    ReactiveComponentModule,
  ],
})
export class SharedModule {}
