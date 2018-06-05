import {Injectable} from '@angular/core';
import {Http, Response, Headers} from '@angular/http';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Observable';
import {Favorito} from '../models/favorito';
import { Car } from '../domain/car';

@Injectable()
export class FavoritoService{
	public url: string;
	
	constructor(private _http: Http){
		this.url = 'http://localhost:3678/api/';
	}

	getFavoritos(){
		return this._http.get(this.url+'favoritos')
						 .map(res => res.json());
	}

	getFavorito(id: string){
		return this._http.get(this.url+'favorito/'+id)
						 .map(res => res.json());
	}

	addFavorito(car: Favorito){


		let json = JSON.stringify(car);
		let params = json;
		let headers = new Headers({'Content-Type':'application/json'});

		return this._http.post(this.url+'favorito', params, {headers: headers})
							   .map(res => res.json());
	}

	editFavorito(id: string, favorito: Favorito){
       console.log('se  manipula log'+favorito);

		let json = JSON.stringify(favorito);
		let params = json;


		let headers = new Headers({'Content-Type':'application/json'});
 console.log('se  manipula log----'+ params);
		return this._http.put(this.url+'favorito/'+id, params, {headers: headers})
							   .map(res => res.json());
	}

	deleteFavorito(id: string){
		return this._http.delete(this.url+'favorito/'+id)
						 .map(res => res.json());
	}
}
