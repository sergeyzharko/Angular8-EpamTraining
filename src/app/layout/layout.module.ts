import { NgModule } from '@angular/core';
import { SharedModule } from './../shared/shared.module';
import { AboutComponent, LoginComponent, PathNotFoundComponent, HomeComponent } from './components';


@NgModule({
  declarations: [HomeComponent, AboutComponent, PathNotFoundComponent, LoginComponent],
  imports: [
    SharedModule
  ],
  exports: [
    HomeComponent, AboutComponent, PathNotFoundComponent, LoginComponent,
  ]
})
export class LayoutModule { }
