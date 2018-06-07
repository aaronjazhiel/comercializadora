import {Component, OnInit} from '@angular/core';
import { Car } from './domain/car';
import { CarService} from './services/carservice';
import {FavoritoService} from './services/favorito.service';
import {MenubarModule} from 'primeng/menubar';
import {MenuItem} from 'primeng/api';
import {Favorito} from './models/favorito';
import {TieredMenuModule} from 'primeng/tieredmenu';

import {MenuModule} from 'primeng/menu';
import {DropdownModule} from 'primeng/dropdown';
import {SelectItem} from 'primeng/api';
import {KeyFilterModule} from 'primeng/keyfilter';
import { Router, ActivatedRoute, Params } from '@angular/router';
import {InputTextModule} from 'primeng/inputtext';





@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    providers: [CarService,FavoritoService]
})
export class AltaComponent implements OnInit{


    ities1: SelectItem[];
    
    cities2: City[];

    selectedCity1: City;
    
    selectedCity2: City;



    public title: string;
    public loading: boolean;
    
	public errorMessage;

	public confirmado;
    
    displayDialog: boolean;
    
    favorito : Favorito = new PrimeCar();
    
    selectedCar: Favorito;
    
    newCar: boolean;
    
    public favoritos: Favorito[];

    cols: any[];
            
           
    items: MenuItem[];
    
    constructor(private carService: CarService, private _favoritoService: FavoritoService,	private _route: ActivatedRoute,
		private _router: Router) { }
    
    ngOnInit() {
        
        console.log('FavoritosListComponent cargado!!');
		this.getFavoritos();
        
      //  this.carService.getCarsSmall().then(cars => this.cars = cars);
        

        this.cols = [
           // { field: '_id', header: 'id' },
            { field: 'title', header: 'color' },
            { field: 'description', header: 'cantidad(m)' }
            //{ field: 'url', header: 'url' }
        ];


        this.cities2 = [
            {name: 'rojo', code: 'NY'},
            
            {name: 'blanco', code: 'PRS'}
        ];
      
        this.items = [
            {
                label: 'Pedimentos',
                items: [{
                        label: 'catalogos',
                        icon: 'fa-folder-open',
                        items: [
                            {label: 'Dependencias',routerLink: ['/listaFavoritos'],icon: 'fa-edit'},
                            {label: 'Estados',routerLink: ['/adkhancy'],icon: 'fa-edit'},
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

    public modificar(){

        this._favoritoService.editFavorito(this.favorito._id,this.favorito).subscribe(
			response => {
				if(!response.favorito){
					alert('Error en el servidor');
				}else{
                    this.favorito = response.favorito;
                   
                    
                    const favoritos = [...this.favoritos];
                    if (this.newCar) {
                        favoritos.push(this.favorito);
                        
                    } else {
                        
                        favoritos[this.findSelectedCarIndex()] = this.favorito;
                    }
                   
			        this.getFavoritos();
			        this.favoritos = favoritos;
                    this.favorito = null;
                    this.displayDialog = false;
                }				
			},
			error => {
				this.errorMessage = <any>error;

				if(this.errorMessage != null){
					console.log(this.errorMessage);
					alert('Error en la petición');
				}
			}
		);
        


    }
    

    
	getFavoritos(){
		this._favoritoService.getFavoritos().subscribe(
			result => {
				console.log(result);
				this.favoritos = result.favoritos;

				if(!this.favoritos){
					alert('Error en el servidor');
				}else{
					this.loading = false;
				}

			},
			error => {
				this.errorMessage = <any>error;

				if(this.errorMessage != null){
					console.log(this.errorMessage);
					alert('Error en la petición');
				}
			}
		);
    }
    

	public save(){
		this._favoritoService.addFavorito(this.favorito).subscribe(
			response => {
				if(!response.favorito){
					alert('Error en el servidor');
				}else{
                    this.favorito = response.favorito;
                    const favoritos = [...this.favoritos];
                    if (this.newCar) {
                        favoritos.push(this.favorito);
                    } else {
                       favoritos[this.findSelectedCarIndex()] = this.favorito;
                    }
                    this.getFavoritos();
			        this.favoritos = favoritos;
                    this.favorito = null;
                    this.displayDialog = false;
                }				
			},
			error => {
				this.errorMessage = <any>error;

				if(this.errorMessage != null){
					console.log(this.errorMessage);
					alert('Error en la petición');
				}
			}
		);
	}

    
    showDialogToAdd() {
        this.newCar = true;
        this.favorito = new PrimeCar();
        this.displayDialog = true;
    }
    

    
    delete() {
        this._favoritoService.deleteFavorito(this.favorito._id).subscribe(
			result => {
				if(!result.message){
					alert('Error en la petición');
				}
                this.getFavoritos();
                this.favorito = null;
                this.displayDialog = false;
			},
			error => {
				this.errorMessage = <any>error;

				if(this.errorMessage != null){
					console.log(this.errorMessage);
					alert('Error en la petición');
				}
			}
		);
        
        
       
    }
    
    onRowSelect(event) {
        this.newCar = false;
        this.favorito = this.cloneCar(event.data);
        this.displayDialog = true;
    }
    
    cloneCar(c: Favorito): Favorito {
        const favorito = new PrimeCar();
        for (const prop in c) {
            favorito[prop] = c[prop];
        }
        return favorito;
    }
    
    findSelectedCarIndex(): number {
        return this.favoritos.indexOf(this.selectedCar);
    }
}

export class PrimeCar implements Favorito {
    constructor(public _id?, public title?, public description?, public url?) {}
}

interface City {
    name: string;
    code: string;
  }

