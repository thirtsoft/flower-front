import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { PageNotfoundComponent } from './page-notfound/page-notfound.component';

const routes: Routes = [
  
  {
    path: '',
    loadChildren: () => import('./customer/customer.module').then(m => m.CustomerModule)
  },
  
  {
    path: 'shop',
    loadChildren: () => import('./shop/shop.module').then(m => m.ShopModule),
    data: { preload: true }
  },
  {
    path: 'account',
    loadChildren: () => import('./myaccount/myaccount.module').then(m => m.MyaccountModule),
    data: { preload: true }
  },
  { 
    path: 'pages',
    loadChildren: () => import('./pages/pages.module').then(m => m.PagesModule) 
  },
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule),
    data: { preload: true }
  },
  { 
    path: 'elements', 
    loadChildren: () => import('./elements/elements.module').then(m => m.ElementsModule),
    data: { preload: true }
   },
  {
    path: '**', // Navigate to Home Page if not found any page
    redirectTo: 'home/fashion',
  },
  {
    path: '**', component: PageNotfoundComponent
  }
];

@NgModule({
//  imports: [RouterModule.forRoot(routes)],
 /*  imports: [RouterModule.forRoot(
    routes,
    {
      preloadingStrategy: PreloadAllModules
    }
  )
  ], */
  imports: [
    RouterModule.forRoot(routes,
      { scrollPositionRestoration: 'enabled', useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
