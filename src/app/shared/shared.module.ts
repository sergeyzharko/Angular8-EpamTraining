import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { StyleDirective } from './directives/style.directive';
import { ClickDirective } from './directives/click.directive';
import { OrderByPipe } from './pipes/order-by.pipe';

const modules = [CommonModule, FormsModule];
const dirs = [StyleDirective, ClickDirective, OrderByPipe];

@NgModule({
  declarations: [...dirs],
  imports: [...modules],
  exports: [...modules, ...dirs]
})
export class SharedModule { }
