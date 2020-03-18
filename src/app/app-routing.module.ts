import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './core';
import { MetaDefinition } from '@angular/platform-browser';

import { AboutComponent, HomeComponent, LoginComponent, PathNotFoundComponent } from './layout';

const metaTags: Array<MetaDefinition> = [
  {
    name: 'description',
    content: 'Shop Application. This is an ASP application'
  },
  {
    name: 'keywords',
    content: 'Angular tutorial, SPA Application, Routing'
  }
];

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
    data: {
      meta: metaTags
    }
  },
  {
    path: 'about',
    component: AboutComponent,
    data: {
      title: 'About',
      meta: metaTags
    }
  },
  {
    path: 'login',
    component: LoginComponent,
    data: { title: 'Login' }
  },
  {
    path: 'admin',
    canLoad: [AuthGuard],
    data: { title: 'Admin' },
    loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule)
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    // The router will match this route if the URL requested
    // doesn't match any paths for routes defined in our configuration
    path: '**',
    data: { title: 'Page Not Found' },
    component: PathNotFoundComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
