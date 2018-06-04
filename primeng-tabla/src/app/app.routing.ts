import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent }  from './app.component';
import { FavoritosListComponent } from './components/favoritos-list.component';
import { FavoritoDetailComponent } from './components/favorito-detail.component';
import { FavoritoAddComponent } from './components/favorito-add.component';
import { FavoritoEditComponent } from './components/favorito-edit.component';

import { AltaComponent }  from './app.alta.component';




const appRoutes: Routes = [
	{path: '', component: FavoritosListComponent },
	{path: 'listaFavoritos', component: FavoritosListComponent },   
	{path: 'angular', component: AltaComponent  },                                                        
	{path: 'marcador/:id', component: FavoritoDetailComponent },
    {path: 'crear-marcador', component: FavoritoAddComponent },
	{path: 'editar-marcador/:id', component: FavoritoEditComponent },
	{path: '**', component: FavoritosListComponent }
];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);