import { Injectable } from '@angular/core';
import {Http, Response, Headers} from '@angular/http';

import { HttpClient} from '@angular/common/http';

import { Car } from '../domain/car';
import 'rxjs/add/operator/toPromise';

import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Observable';
import {Favorito} from '../models/favorito';


@Injectable()
export class CarService {
    public url: string;
   

    constructor(private http: HttpClient) {}

    getCarsSmall() {

        console.log('hola mundo');

        return this.http.get<any>('assets/data/cars-small.json')
            .toPromise()
            .then(res => <Car[]> res.data)
            .then(data => data);
    }

}
