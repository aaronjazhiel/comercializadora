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



@NgModule({
    declarations: [
        AppComponent
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
        TieredMenuModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
