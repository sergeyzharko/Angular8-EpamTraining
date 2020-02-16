import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StyleDirective } from './directives/style.directive';



@NgModule({
  declarations: [StyleDirective],
  imports: [
    CommonModule
  ],
  exports: [StyleDirective]
})
export class SharedModule { }
