import { NgModule } from '@angular/core';
import { CommonModule as AngularCommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {RouterModule} from "@angular/router";
import {TranslateModule} from "@ngx-translate/core";

@NgModule({
  imports: [],
  exports: [
    AngularCommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    TranslateModule
  ]
})
export class CommonModule {}
