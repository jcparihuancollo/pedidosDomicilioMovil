import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { LoginGuard } from './guard/login.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'tabs',
    pathMatch: 'full'
  },
  {
    path: 'tabs',
    loadChildren: () => import('./pages/tabs/tabs.module').then(m => m.TabsPageModule),
    canLoad: [LoginGuard]
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'producto',
    loadChildren: () => import('./pages/tabs/producto/producto.module').then( m => m.ProductoPageModule)
  },
  {
    path: 'carrito',
    loadChildren: () => import('./pages/tabs/carrito/carrito.module').then( m => m.CarritoPageModule)
  }
  ,
  {
    path: 'registro',
    loadChildren: () => import('./pages/tabs/registro/registro.module').then( m => m.RegistroPageModule)
  },
  {
    path: 'lista-categoria',
    loadChildren: () => import('./pages/tabs/lista-categoria/lista-categoria.module').then( m => m.ListaCategoriaPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
