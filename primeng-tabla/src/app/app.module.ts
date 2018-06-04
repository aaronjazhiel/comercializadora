import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { InputTextModule }  from 'primeng/inputtext';
import { ButtonModule }  from 'primeng/button';
import { TableModule }  from 'primeng/table';
import { DialogModule }  from 'primeng/dialog';
import {MenubarModule} from 'primeng/menubar';
import {MenuItem} from 'primeng/api';
import { HttpModule, JsonpModule } from '@angular/http';
import { AppComponent }  from './app.component';
import {TieredMenuModule} from 'primeng/tieredmenu';
import { routing, appRoutingProviders } from './app.routing';
import { FavoritoDetailComponent } from './components/favorito-detail.component';
import { FavoritosListComponent } from './components/favoritos-list.component';
import { FavoritoAddComponent } from './components/favorito-add.component';
import { FavoritoEditComponent } from './components/favorito-edit.component';
import { AltaComponent}  from './app.alta.component';
import {MenuModule} from 'primeng/menu';
import {DropdownModule} from 'primeng/dropdown';
import {SelectItem} from 'primeng/api';
import {KeyFilterModule} from 'primeng/keyfilter';







@NgModule({
    declarations: [
        AppComponent,
        FavoritoDetailComponent,
        FavoritosListComponent,
        FavoritoDetailComponent,
        FavoritoAddComponent,
        FavoritoEditComponent,
        AltaComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        FormsModule,
        TableModule,
        HttpClientModule,
        InputTextModule,
        DialogModule,
        ButtonModule,
        MenubarModule,
        HttpModule,
        TieredMenuModule,
        routing,
        MenuModule,
        DropdownModule,
        KeyFilterModule
    
        
    ],
    providers: [appRoutingProviders ],
    bootstrap: [AppComponent]
})
export class AppModule { }
