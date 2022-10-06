import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [
      {
        path: 'tienda',
        loadChildren: () => import('./tienda/tienda.module').then( m => m.TiendaPageModule)
      },
      {
        path: 'pedido',
        loadChildren: () => import('./pedido/pedido.module').then( m => m.PedidoPageModule)
      },
      {
        path: 'cliente',
        loadChildren: () => import('./cliente/cliente.module').then( m => m.ClientePageModule)
      },
      {
        path: '',
        redirectTo: '/tabs/tienda',
        pathMatch: 'full'
      }
    ]
  }
  
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}
