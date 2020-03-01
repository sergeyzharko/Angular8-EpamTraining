import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StyleDirective } from './directives/style.directive';
import { ClickDirective } from './directives/click.directive';



@NgModule({
  declarations: [StyleDirective, ClickDirective],
  imports: [
    CommonModule
  ],
  exports: [StyleDirective, ClickDirective]
})
export class SharedModule { }
