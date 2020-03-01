import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { StyleDirective } from './directives/style.directive';
import { ClickDirective } from './directives/click.directive';
import { OrderByPipe } from './pipes/order-by.pipe';

@NgModule({
  declarations: [StyleDirective, ClickDirective, OrderByPipe],
  imports: [
    CommonModule, FormsModule
  ],
  exports: [StyleDirective, ClickDirective, OrderByPipe, CommonModule, FormsModule]
})
export class SharedModule { }
