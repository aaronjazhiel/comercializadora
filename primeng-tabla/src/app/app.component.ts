import {Component, OnInit} from '@angular/core';
import { Car } from './domain/car';
import { CarService} from './services/carservice';
import {FavoritoService} from './services/favorito.service';
import {MenubarModule} from 'primeng/menubar';
import {MenuItem} from 'primeng/api';
import {Favorito} from './models/favorito';
import {TieredMenuModule} from 'primeng/tieredmenu';

import {MenuModule} from 'primeng/menu';



@Component({
    selector: 'app-root',
    templateUrl: './views/home.html',
    styleUrls: ['./app.component.css'],
    providers: [CarService,FavoritoService]
})
export class AppComponent implements OnInit{

    public title: string;
    public loading: boolean;
    
	//public favorito: Favorito;
	//public favoritos: Favorito[];
	public errorMessage;

	public confirmado;
    
    displayDialog: boolean;
 
    
    selectedCar: Favorito;
    
    newCar: boolean;
    
    public favoritos: Favorito[];

    cols: any[];
            
           
    items: MenuItem[];
    
    constructor(private carService: CarService, private _favoritoService: FavoritoService) { }
    
    ngOnInit() {
        this.items = [
            {
                label: 'Administración',
                items: [{
                        label: 'catalogos',
                        icon: 'fa-folder-open',
                        items: [
                            {label: 'Dependencias',routerLink: ['/listaFavoritos'],icon: 'fa-edit'},
                            {label: 'Estados',routerLink: ['/angular'],icon: 'fa-edit'},
                        ]
                    },
                    {label: 'Open'},
                    {label: 'Quit'}
                ]
            },
            {
                label: 'Edit',
                icon: 'fa-edit',
                items: [
                    {label: 'Undo', icon: 'fa-mail-forward'},
                    {label: 'Redo', icon: 'fa-mail-reply'}
                ]
            }
        ];
        
    }

    
   
}


